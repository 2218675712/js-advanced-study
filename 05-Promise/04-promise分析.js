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

let Promise = require('./promise');
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
});
//console.log(p1.status);
*/
let promise = require('./05-手写promise');
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

