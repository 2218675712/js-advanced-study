let name = "彼岸";
let age = 18;/*
let work=function(){
    console.log("工作努力");
}*/
let persion = {
    name,//name:name
    age,//age:age
    // work
    // 简写
    work() {
        console.log("工作努力");
    }
}

console.log(persion);
// { name: '彼岸', age: 18 }
persion.work();
// 工作努力

// Object.is
// 如果值相同，则返回true，否则返回false。
console.log(Object.is(NaN, NaN));//true


// Object.assign()
// 多个对象的属性复制到一个对象中
let nameObj = {
    name: "彼岸"
}
let ageObj = {
    age: "18"
}
let newObj = {}
Object.assign(newObj, nameObj, ageObj);
console.log(newObj);
// { name: '彼岸', age: '18' }


// Object.setPrototypeOf()
// 方法设置一个指定的对象的原型 ( 即, 内部[[Prototype]]属性）到另一个对象或  null。
let nameObj1 = {
    name: "彼岸"
}

let nameObj2 = {
    name: "彼岸2"
}
let Obj3 = {};
Object.setPrototypeOf(Obj3, nameObj1);
console.log(Obj3.name);
// 彼岸
console.log(Object.getPrototypeOf(Obj3));
;
// { name: '彼岸' }


//super
let obj = {
    name: "彼岸"
}
let obj2 = {
    __proto__: obj,
    name: "it",
    getname() {
        return super.name;
    }
}
obj2.getname();
// { name: '彼岸' }