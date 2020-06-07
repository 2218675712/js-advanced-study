/*
* 时间:   2020年06月07日20:40:44
* 目的:   es6解构赋值
*
* 结果:
*       ---------------------------------
*
*
*       ---------------------------------
* */
// 数组解构赋值
{
    let [a, b, c] = [10, 20, 30];
    // console.log(a, b, c);
}
// 对象解构赋值
{
    let {a, b, c} = {a: 10, b: 20, c: 30};
    // console.log(a);
}
// 解构重命名
{
    let {name: userName} = {name: "张三", age: "18"};
    // console.log(userName);
}
// 复杂解构拿值
{
    // 根据原来的解构写,数组是数组,对象是对象
    let [{name}, {hobby}] = [{id: 1, name: "张三", age: 23}, {id: 2, name: "李四", hobby: ["吃饭", "睡觉"]}];
    // console.log(name, hobby);
}
// 省略解构
{
    let [, , c] = [10, 20, 30];
    // console.log(c)//30
}

// 默认解构
{
    let {name, age = 8} = {name: 'zs', age: 12}
    // console.log(age)//12
}

// 案例
// 如果没写默认是get
function ajax({ method = 'get', data }) {
    var method = options.method || 'get';
}
ajax({
    method: 'post',
    data: {
        "a": 10,
        "b": 20
    }
})
