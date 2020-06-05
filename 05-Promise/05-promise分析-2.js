let Promise = require('./05-手写promise-2');
let p1 = new Promise((resolve, reject) => {
    resolve("ok");
});
p1.then(data => {
    console.log(data);
    return new Promise((resolve, reject) => {
        resolve("哈哈");
    })
}, error => {
    console.log(error);
}).then(data => {
    console.log(data);
}, error => {
    console.log(error);
});