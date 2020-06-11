let fs = require('fs');
let path = require('path');
let vm = require('vm');


function Module() {

}

Module._extensions = {
    '.js'() {

    },
    '.json'() {

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

function myReq(modulePath) {
    let absPath = resolveFilename(modulePath);
}

myReq('./a');









