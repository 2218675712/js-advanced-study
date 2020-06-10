//console.dir(global);
//console.log(this); // {}
// let a = 10;
// console.log(global.a);

// setImmediate
// setImmediate(() => {
//     console.log('Immediate');
// });
// setTimeout(() => {
//     console.log('timeout');
// }, 0);

// node eventLoop  node<10 node10以后基本与浏览器的表现一样
// timers(setTimeout)
// poll 放I/o操作
// check

let fs = require('fs');
fs.readFile('./a.txt', () => {
    setTimeout(() => {
        console.log('timeout');
    }, 0);
    setImmediate(() => {
        console.log('Immediate');
    });
});
// console.dir(global, { showHidden: true });
// global常见的属性
// Buffer 二进制数据
// process 进程 process.nextTick()
// clearInterval() clearTimeout setInterval setTimeout
// clearImmediate setImmediate
// process常见的属性 platform  env argv 方法cwd()
// console.log(process);
// console.log(process.platform);//显示操作系统平台
// console.log(process.cwd());//显示当前文件夹
// console.log(process.env);//显示环境变量
// console.log(process.argv.slice(2));