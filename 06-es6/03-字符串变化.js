/*
* 时间:   2020年06月07日21:10:35
* 目的:   字符串变化
*
* 结果:
*       ---------------------------------
*       模板字符串
*
*       ---------------------------------
* */
/*

let name = "张三";
let str = `用户名${name}`;
console.log(str);
用户名:张三
*/

// 原理:通过正则表达式实现
/*

let name = "张三";
let str = '用户名:${name}';

str = str.replace(/\$\{([^{]+)\}/g, function () {
// eval表示执行表达式
    return eval(arguments[1]);
});
console.log(str);
*/
// 案例:生成列表
let arr = ["苹果", "香蕉", "梨子"];
// map遍历每个元素
let lis = arr.map(item => `<li>${item}</li>`);
// join放入一个字符串
let ul = `<ul>${lis.join('')}</ul>`;
console.log(ul)