/*
* 时间:   2020年05月28日22:07:52
* 目的:   封装一个函数,在第三次调用后执行
*
* 结果:
*       ---------------------------------
*       ---------------------------------
* */

// 在多少次后执行
function after(times, callback) {
    let sum = 0;
    return function (num) {
        sum += num;
        if (--times === 0) {
            console.log(sum);
            callback();
        }
    }
}

let fun = after(3, function () {
    console.log('after');
});
fun(1);
fun(2);
fun(3);