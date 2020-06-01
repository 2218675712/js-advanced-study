/*
* 时间:   2020年06月01日10:33:13
* 目的:   Promise方法
*
* 结果:
*       ---------------------------------
*
*       ---------------------------------
* */
// 实例方法then(),catch()
// 类方法 race()/all()/resolve()/reject()
const fs = require("fs");

function read(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', function (error, data) {
            if (error) return reject(error);
            resolve(data);
        })
    })
}

/*

// 实例方法then:当状态发生改变时候
read('./a.txt').then((data) => {
    console.log(data)
});
*/


// 实例方法catch:当状态发生改变时候
read('./a1.txt').then((data) => {
    console.log(data);
// 通过catch处理异常
}).catch(error => console.log(error));


/*

// 同时读取a,b文件
Promise.all([read('a.txt'), read('b.txt')]).then(data => {
    console.log(data);
});
*/
/*

// race() 参数中谁的状态先改变之间绝对最后race()返回的promise实例状态
Promise.race([read('a.txt'), read('b.txt')]).then(data => {
    console.log(data);
})
*/
/*

// resolve() 返回一个成功态的promise实例
Promise.resolve().then(()=>{
    console.log("成功");
})
Promise.resolve(read('a1.txt')).then(()=>{
    console.log("成功");
})
*/
/*

// reject() 返回一个失败的promise
Promise.reject(read('./a1.txt')).then(() => {
    console.log("成功");
}, () => {
    console.log('失败');
})*/

/*

 // 一个promise实例可以多次调用then,当成功后依次调用

read('./a.txt').then((data) => {
    console.log(data)
});
read('./b.txt').then((data) => {
    console.log(data)
});
*/

read('./a.txt').then((data) => {
    console.log(data);
}).then(data => {
    // 如果不return任务默认返回的是undefined
    console.log(data);
});