/*
* 时间:   2020年06月11日15:59:01
* 目的:   node内置模块
*
* 结果:
*       ---------------------------------
*
*       ---------------------------------
* */

// fs file system 文件系统模块


/*

let fs = require('fs');
// node模块一般都是错误放在前面,这是一个异步任务
fs.readFile("./a.txt", (err, data) => {
    console.log(data.toString());
});
*/

/*

// 同步模块
let r = fs.readFileSync('./a.txt');
console.log(r);
*/

/*

// 判断文件是否存在

let bool=fs.existsSync('./a.txt');
console.log(bool);
*/


// path     处理路径模块


let path = require('path');

// 把路径解析成绝对路径
console.log(path.resolve('b'));
// D:\学习\前端\自学前端\11 js高级\源代码\07-node\b

console.log(path.resolve('a.js'));
// D:\学习\前端\自学前端\11 js高级\源代码\07-node\a.js

//当前目录
console.log(__dirname, process.cwd());
// D:\学习\前端\自学前端\11 js高级\源代码\07-node D:\学习\前端\自学前端\11 js高级\源代码\07-node

console.log(path.resolve(__dirname, 'a.js'));
// D:\学习\前端\自学前端\11 js高级\源代码\07-node\a.js

// 返回根目录
console.log(path.resolve(__dirname, 'a', '/'));
// D:\

// join是在后面拼接
console.log(path.join(__dirname, 'a', '/'));
// D:\学习\前端\自学前端\11 js高级\源代码\07-node\a\

// 文件基础名
console.log(path.basename('a.txt', '.txt'));
// a

// 文件扩展名
console.log(path.extname('a.123.txt'));
// .txt

// vm   虚拟机
let vm = require('vm');
let a = 100;
// vm.runInThisContext('console.log(a)');