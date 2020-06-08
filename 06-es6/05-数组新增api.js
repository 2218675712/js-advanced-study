/*
* 时间:   2020年06月08日17:33:25
* 目的:   数组新增api
*
* 结果:
*       ---------------------------------
*       find/map/reduce/filter/forEach/findIndex/some/every
        Array.from()
        Array.of()
        Array.copyWithin()
        Array.fill()
*
*       ---------------------------------
* */
// Array.from()复制数组或者把伪数组转换为数组
let newArr = Array.from([2, 3, 5]);
console.log(newArr);

// [ 2, 3, 5 ]
function fn1() {
    let res = Array.from(arguments);
    console.log(res instanceof Array);
}

fn1(10, 20, 40);
// true


//    Array.of()
//    方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。
// [ <3 empty items> ]长度为3的空数组
console.log(Array(3));
console.log(Array.of(3));
// [ 3 ]


// Array.copyWithin()
// 浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度。
// 复制由开始和结束标识的数组的一部分后，返回此对象
// target:第一个覆盖目标的下标   start:拿来覆盖的值的下标 end:拿来覆盖的值的结束的下标(不包含)
console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 5));
// [ 4, 5, 3, 4, 5 ]


// fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。
let arr = [1, 2, 3, 4, 5];
// value:填充内容 start:开始索引 end:结束索引
console.log(arr.fill("a", 0, 3));
// [ 'a', 'a', 'a', 4, 5 ]


// find()
// 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
let array1 = [5, 12, 8, 130, 44];
let found = array1.find((item, index, arr) => {
    return item > 10;
});
console.log(found);
// 12


// findIndex()
// 方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。
let array2 = [5, 12, 8, 130, 44];
let found2 = array2.findIndex((index) => {
    return index === 8;
})
console.log(found2);
// 2(索引)

