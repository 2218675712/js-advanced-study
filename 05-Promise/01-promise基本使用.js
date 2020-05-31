/*
* 时间:   2020年05月31日17:13:21
* 目的:   Promise使用
*
* 结果:
*       ---------------------------------
*       1 Promise的方法会立刻执行
*       2 Promise对象创建时候有个初始状态 等待状态 pending
*       // then()实例方法 指定Promise对象状态改变时确定执行的操作
*
*       ---------------------------------
* */
const fs = require('fs');
// 1 Promise的方法会立刻执行
// 2 Promise对象创建时候有个初始状态 等待态 pending
let promise = new Promise((resolve, reject) => {
    // 异步任务
    fs.readFile('a.txt', 'utf-8', function (error, data) {
        // 如果失败，返回reject
        if (error) return reject(error);
        // 成功执行方法
        resolve(data);
    })
});
// then()实例方法 指定Promise对象状态改变时确定执行的操作
promise.then(data => {
    console.log(data);
}, error => {
    console.log(error)
})