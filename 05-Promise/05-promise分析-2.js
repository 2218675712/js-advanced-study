let Promise = require('./05-手写promise-2');
let p1 = new Promise((resolve, reject) => {
    resolve("ok1");
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve("ok2");
    }, 2000);
});

let p3 = new Promise((resolve, reject) => {
    resolve("ok3");
});
Promise.All([p1, p2, p3]).then(resolve => {
    console.log(resolve)
});