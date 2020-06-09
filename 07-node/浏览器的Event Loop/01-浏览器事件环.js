/*
* 时间:   2020年06月09日11:43:46
* 目的:   浏览器事件环
*
* 结果:
*       ---------------------------------
*
*       ---------------------------------
* */
/*
console.log(1);
setTimeout(() => {
    console.log(3333);
}, 0);
setTimeout(() => {
    console.log(2222);
}, 100);
setTimeout(() => {
    console.log(1111);
}, 0);
console.log(2);
// 1  2 3333 2222 1111
*/
// 宏任务 微任务
/*
setTimeout(() => {
    console.log('timeout1');
}, 0);

Promise.resolve().then(() => {
    console.log('success');
});
Promise.resolve().then(() => {
    console.log('success2');
});
*/
setTimeout(() => {
    console.log('timeout1');
    Promise.resolve().then(() => {
        console.log('success');
    });
}, 0);


Promise.resolve().then(() => {
    console.log('success2');
    setTimeout(() => {
        console.log('timeout2');
    })
});

Promise.resolve().then(() => {
    console.log('success3');
});

// success2 success3 timeout1 success timeout2