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
