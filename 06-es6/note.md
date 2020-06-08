es6(es2015)
ECMAScript 6.0

es6核心常用知识
一 变量定义变化let/const
let 1 不允许重复定义变量
    2 不存在变量提升
    3 块级作用域
const 用于定义常量

  var         let           const
函数级作用域   块级作用域     块级作用域
变量提升      不存在变量提升  不存在变量提升
值可以改变    值可以改变      值不能改
二 结构赋值

三 字符串

let name = "张三";
let str = `用户名${name}`;

四 函数

// 1.函数默认参数

function fn1(a = 10) {
    console.log(a);
}

// 2.展开运算符(就是展开数组)
let fn2 = function (a, b, c) {
    console.log(a, b, c);
}
fn2(...[1, 2, 3]);

// 3.剩余运算符(只能放最后)
function fn3(a, ...b) {
    console.log(a);
    // 10
    console.log(b);
    // [ 20, 30, 40 ]
}

fn3(10, 20, 30, 40);

// 4.函数属性name
console.log(fn4.name);

// 5.箭头函数
[2, 4, 6].forEach(item => console.log(item));

五 数组
find/map/reduce/filter/forEach/findIndex/some/every
Array.from()
Array.of()
Array.copyWithin()
Array.fill()