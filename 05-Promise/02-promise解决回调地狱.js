
const fs = require('fs');
/*
// 普通写法
// 如果调用多次,会显得麻烦,不好写
function read() {
    fs.readFile('./a.txt', 'utf-8', function (error, data) {
        if (error) return console.log(error);
        console.log(data);
        fs.readFile('./b.txt', 'utf-8', function (error, data) {
            if (error) return console.log(error);
            console.log(data);
        })
    })
}
read();
*/

// 利用promise解决
function read(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', function (error, data) {
            if (error) return reject(error);
            resolve(data);
        })
    })
}

read('./a.txt').then(data => {
    console.log(data);
    return read('./b.txt');
}, error => {
    console.log(error);
}).then(data => {
    console.log(data);
}, error => {
    console.log(error);
});