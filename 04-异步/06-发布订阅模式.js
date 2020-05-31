/*
* 时间:   2020年05月31日10:51:54
* 目的:   发布订阅模式
*
* 结果:
*       ---------------------------------
*       ---------------------------------
* */
let fs = require('fs');

// 发布订阅 发布和订阅没关系  中间通过数组进行关联
function Events() {
    this.callbacks = [];
    this.results = [];
}

// 订阅
Events.prototype.on = function (callback) {
    this.callbacks.push(callback);
}
// 发布
Events.prototype.emit = function (data) {
    this.results.push(data);
    this.callbacks.forEach(cb=>cb(this.results));
}

let e = new Events();
e.on(function (res) {
    if (res.length === 2) {
        console.log(res);
    }
});

// 读文件
fs.readFile('./a.txt', 'utf8', function (err, data) {
    e.emit(data);
});
fs.readFile('./b.txt', 'utf8', function (err, data) {
    e.emit(data);
});

