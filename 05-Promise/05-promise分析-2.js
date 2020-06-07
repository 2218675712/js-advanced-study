let Promise = require('./05-手写promise-2');
let p1 = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve("ok1");
    }, 2000);
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(function () {
        resolve("ok2");
    }, 2000);
});

let p3 = new Promise((resolve, reject) => {
    resolve("ok3");
});
/*Promise.all([p1, p2, p3]).then(resolve => {
    console.log(resolve)
});*/
Promise.race([p1, p2, p3]).then(data => {
    console.log(data);
}, error => {
    console.log(error);
});