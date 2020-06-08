/*
* 时间:   2020年06月08日11:07:00
* 目的:   函数变化
*
* 结果:
*       ---------------------------------
*
*       ---------------------------------
* */

// 1.函数默认参数

function fn1(a = 10) {
    console.log(a);
}

fn1(20);//20

// 2.展开运算符(就是展开数组)
let fn2 = function (a, b, c) {
    console.log(a, b, c);
}
fn2([1, 2, 3]);
// [ 1, 2, 3 ] undefined undefined
fn2(...[1, 2, 3]);
// 1 2 3

// 案例1      连接字符串
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let newArr1 = [arr1, arr2];
console.log(newArr1);
// [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]
let newArr2 = [...arr1, ...arr2];
console.log(newArr2)
// [ 1, 2, 3, 4, 5, 6 ]
// 案例2  求最大值
function max() {
    return Math.max(...arguments);
}

console.log(max(4, 7, 3));

// 3.剩余运算符(只能放最后)
function fn3(a,...b) {
    console.log(a);
    // 10
    console.log(b);
    // [ 20, 30, 40 ]
}
fn3(10,20,30,40);

// 4.函数属性name
function fn4() {

}

console.log(fn4.name);
// fn4