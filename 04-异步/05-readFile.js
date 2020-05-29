/*
* 时间:   2020年05月29日18:15:13
* 目的:   案例-读文件
*
* 结果:
*       ---------------------------------
*       通过封装after来解决
*       可能会有顺序问题
*       ---------------------------------
* */
// 通过node.js引入读取本地读取文件模块
let fs = require('fs');
// 定义一个空数组用了接收
let res = [];
// 读文件默认是异步

let newFun = after(2, function (result) {
    console.log(result)
})

function after(times, callback) {
    return function (data) {
        res.push(data);
        console.log(data);
        if (--times == 0) {
            callback(res);
        }
    }
}

fs.readFile('a.txt', 'utf-8', function (error, data) {
    newFun(data);
})
fs.readFile('b.txt', 'utf-8', function (error, data) {
    newFun(data);
})