let Promise = require('./05-手写promise-2');
let p1 = new Promise((resolve, reject) => {
    resolve("ok");
});
p1.then(data => {
    console.log(data);
}, err => {
    console.log(err);
});
p1.then(data => {
    console.log(data);
}, err => {
    console.log(err);
});