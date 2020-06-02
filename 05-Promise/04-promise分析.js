/*
let p1 = new Promise((resolve,reject)=>{
    // 只能执行一个
    reject(11);
    resolve(123);
});
// 在同步代码执行完在执行
p1.then((result)=>{
    console.log(1);
},(reason)=>{
    console.log(2);
});
console.log(3);

// 3 1

*/

/*
产生错误,查看异常是否处理
let Promise = require('./05-手写promise');
let p1 = new Promise((resolve,reject)=>{
    //resolve(123);
    //reject(11);
    throw new Error('error');
});

p1.then((result)=>{
    console.log(result);
},(reason)=>{
    console.log(11111);
    console.log(reason);
});*/
//console.log(p1.status);
/*
同步代码
let Promise = require('./05-手写promise');
let p1 = new Promise((resolve, reject) => {
    // 只能执行一个
    reject(11);
    // resolve(123);
});
p1.then(data => {
    console.log(data);
}, error => {
    console.log(error);
})

console.log(333);
*/


let Promise = require('./05-手写promise');
let p1 = new Promise((resolve, reject) => {
/*        setTimeout(() => {
            resolve("ok");
        }, 2000);*/
        setTimeout(() => {
            reject("error");
        }, 2000);
    }
)
p1.then(data => {
    console.log(data+"11");
}, error => {
    console.log(error);
})
p1.then(data => {
    console.log(data+"22");
}, error => {
    console.log(error);
})