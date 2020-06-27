/*
* 时间:   2020年05月31日12:23:34
* 目的:   观察者模式
*
* 结果:
*       ---------------------------------
*       ---------------------------------
* */

// 被观察者
class Subject {
    constructor(name) {
        this.name = name;
        // 存放所有观察者
        this.observers = [];
        // 心情状态
        this.mood = "心情很美丽";
    }

    // 接受观察者方法
    attach(observer) {
        // 批量添加观察者
        this.observers.push(observer);
    }

    setMood(newMood) {
        this.mood = newMood;
        this.observers.forEach(o => o.update(newMood))
    }

}

// 观察者
class Observer {
    constructor(name) {
        this.name = name;
    }

    // 更新状态时
    update(newMood) {
        console.log(newMood)
     }
}

let sub = new Subject('girl');
let o1 = new Observer('boy');
let o2 = new Observer('father');
sub.attach(o1);
sub.attach(o2);
sub.setMood('心情很糟糕');