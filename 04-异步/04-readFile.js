/*
* 时间:   2020年05月29日18:15:13
* 目的:   案例-读文件
*
* 结果:
*       ---------------------------------
*       ---------------------------------
* */
// 通过node.js引入读取本地读取文件模块
let fs = require('fs');
// 定义一个空数组用了接收
let res = [];
// 读文件默认是异步
// 并行
let i = 0;

function fn(data, index) {
    // 通过指定索引添加,保证数据不会错误
    res[index] = data;
    // 通过i进行判断,如果调用两次,则说明res正确填入,进行输入
    if (++i === 2) {
        console.log(res);
    }

}

fs.readFile('a.txt', 'utf-8', function (error, data) {
    fn(data, 0);
})
fs.readFile('b.txt', 'utf-8', function (error, data) {
    fn(data, 1);
})
/*

// 串行
fs.readFile('a.txt', 'utf-8', function (error, data) {
    res = data;
    console.log(data);
    fs.readFile('b.txt', 'utf-8', function (error, data) {
        res = data;
        console.log(data);
    });
});
*/
