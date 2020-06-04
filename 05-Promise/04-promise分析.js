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
/*
异步代码
let Promise = require('./05-手写promise');
let p1 = new Promise((resolve, reject) => {
/!*        setTimeout(() => {
            resolve("ok");
        }, 2000);*!/
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
*/


// then链式调用
/*
* 1.假如返回值是一个普通值,会把结果传给下一次then的成功回调
* 2.发生错误.会被下一次then的失败捕获
* 3.如果返回是promise,根据该promise的状态调用下一次的then
*
* */
// let Promise = require('./05-手写promise');

/*
//1.假如返回值是一个普通值,会把结果传给下一次then的成功回调
let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("成功");
        }, 2000);
    }
)
p1.then(data => {
    console.log(data + "第一次成功");
    return (20);
}, error => {
    console.log(error + "第一次失败");
}).then(data => {
    console.log(data + "第二次成功");
}, error => {
    console.log(error + "第二次失败");
})
*/
/*
//2.发生错误.会被下一次then的失败捕获
let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("成功");
        }, 2000);
    }
)
p1.then(data => {
    console.log(data + "第一次成功");
    throw new Error("发生错误");
}, error => {
    console.log(error + "第一次失败");
}).then(data => {
    console.log(data + "第二次成功");
}, error => {
    console.log(error + "第二次失败");
})
*/
/*
// 3.如果返回是promise,根据该promise的状态调用下一次的then
let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("成功");
        }, 2000);
    }
)
p1.then(data => {
    console.log(data + "第一次成功");
    return new Promise((resolve, reject) => {
        reject();
    });
}, error => {
    console.log(error + "第一次失败");
}).then(data => {
    console.log(data + "第二次成功");
}, error => {
    console.log(error + "第二次失败");
})
*/


// 解决then链式调用
let Promise = require('./05-手写promise');
let p1 = new Promise((resolve, reject) => {
        resolve("成功");
    }
)
p1.then(data => {
    console.log(data);
    return new Promise((resolve, reject) => {
        resolve("成功");
    })
}, error => {
    console.log("失败");
}).then(data => {
    console.log(data);
}, error => {
    console.log("失败");
})
