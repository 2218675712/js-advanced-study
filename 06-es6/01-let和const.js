// let语法
// 不允许重复定义变量
/*

let num1=10;
let num1=20;
console.log(num1);
*/
// Identifier 'num1' has already been declared

// 不存在变量提升
/*

console.log(num1);
let num1=10;
*/
// Cannot access 'num1' before initialization

// 块级作用域    --块级就是在{}括号里面的
/*

{
    let i=10;
}
console.log(i);
*/
// i is not defined
// const 用于定义常量
// 不能重新赋值,但是可以修改
/*

const num1 = 10;
num1 = 20;
console.log(num1);
// Assignment to constant variable.
const num2 = {a: 10, b: 20};
num2.a = 20;
console.log(num2);
*/
