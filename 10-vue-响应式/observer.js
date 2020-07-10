function observer(obj) {
    // 如果不是对象,返回原内容
    if (typeof obj !== "object" || obj === null) {
        return obj;
    }
    // 处理数组
    if (Array.isArray(obj)) {
        Object.setPrototypeOf(obj, proto);
        observerArray(obj);
    } else {
        // 处理对象
        for (k in obj) {
            defineReactive(obj, k, obj[k]);
        }
    }

}

/**
 * 处理数组
 * @param obj
 */
function observerArray(obj) {
    for (let i = 0; i < obj.length; i++) {
        observer(obj[i]);
    }

}

/**
 * 进行监听
 * @param obj
 * @param k
 * @param value
 * @returns {*}
 */
function defineReactive(obj, k, value) {
    // 里面可能又是对象,进行递归,递归创建响应式数据
    observer(value);
    // 事件监听
    Object.defineProperty(obj, k, {
        get() {
            console.log("get()");
            return value;
        },
        set(newValue) {
            console.log("更新视图");
            value = newValue;
        }
    })
}

let arrayProto = Array.prototype;
// 拷贝数组的原型
let proto = Object.create(arrayProto);
['push', 'shift', 'splice'].forEach(method => {
    proto[method] = function (...args) {
        console.log("更新视图");
        if (method === 'splice') {
            observerArray(args.slice(2));
        } else {
            observerArray(args);
        }
        arrayProto[method].call(this, ...args);
    }
});
let data = {
    a: 10,
    b: {
        num: 123
    },
    c: [1, {age: 23}, 3]
};
observer(data);
data.c.push(4, {a: 111});
data.c[4].a = 222;