let fs = require('fs');
let path = require('path');
let vm = require('vm');


function Module(id) {
    this.id = id;
    this.exports = {}
}

Module.wrapper = [
    '(function(exports, require,module, __dirname, __filename) {',
    '\n})'
];

Module._cache = {}
Module._extensions = {
    '.js'(module) {
        let script = fs.readFileSync(module.id, 'utf-8');
        let fnStr = Module.wrapper[0] + script + Module.wrapper[1];
        let fn = vm.runInThisContext(fnStr);
        let exports = module.exports;
        fn.call(exports, exports, myReq, module, path.dirname(module.id), module.id);
    },
    '.json'(module) {
        let json = fs.readFileSync(module.id, 'utf8');
        module.exports = JSON.parse(json);
    }
}

function resolveFilename(modulePath) {
    // 路径解析成绝对路径
    let res = path.resolve(__dirname, modulePath);
    console.log(res);
    // 看下文件路径是否存在,不存在尝试+ .js .json
    let isExists = fs.existsSync(res);
    if (isExists) {
        return res;
    } else {
        let keys = Object.keys(Module._extensions);
        for (let i = 0; i < keys.length; i++) {
            let tryFilename = res + keys[i];
            if (fs.existsSync(tryFilename)) {
                return tryFilename;
            }
        }
        throw new Error("module not found");
    }
}

function tryModuleLoad(module) {
    // 1.获取文件扩展名
    let extname = path.extname(module.id);
    Module._extensions[extname](module);

}

function myReq(modulePath) {
    let absPath = resolveFilename(modulePath);
    let cacheModule = Module._cache[absPath];
    if (cacheModule) {
        return cacheModule.exports;
    }
    let module = new Module(absPath);
    Module._cache[absPath] = module;
    return module.exports;
}

let str = myReq('./a');
console.log(str);








