/*
* 时间:   2020年05月28日22:45:26
* 目的:   AOP
*
* 结果:
*       ---------------------------------
*       AOP了解
*       展开运算符
*       ---------------------------------
* */
function say(...who) {
    console.log(who)
    console.log(who + "在说话");
}

// 在函数执行之前执行
Function.prototype.before = function (fn) {
    let _this = this;
    return function () {
        console.log(arguments)
        fn();
        // es6展开运算符 把arguments参数展开依次传入
        _this(...arguments);
    }
}
let newFun = say.before(function () {
    console.log("喝水");
})
// 传多个参数
newFun('我', '你');