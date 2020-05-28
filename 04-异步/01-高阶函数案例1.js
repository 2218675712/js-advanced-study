/*
* 时间:   2020年05月28日18:20:29
* 目的:   封装一个判断是什么类型的函数
*
* 结果:
*       ---------------------------------
*       了解柯里化
*       ---------------------------------
* */

// 高阶函数
function isType(type) {
    return function (obj) {
        // includes是否包含字符
        return Object.prototype.toString.call(obj).includes(type);
    }
}

let types = ['String', 'Object', 'Array', 'Null', 'Undefined', 'Boolean'];
let fns = {};
types.forEach(type => {
    // 批量生成函数
    fns['is' + type] = isType(type);
});
let b = {};
console.log(fns.isString(b));
console.log(fns.isObject(b));
