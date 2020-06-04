// 创建一个promise类
class Promise {
    // 在原型添加一个函数作为参数
    constructor(executorCallback) {
        // 因为箭头函数没有this(所有this是它上级的所处环境),所有临时保存下来
        let _this = this;
        // 定义当前等待状态
        _this.status = 'pending';
        // 记录成功原因
        _this.value = '';
        // 记录失败的原因
        _this.reason = undefined;
        // 存放成功回调
        _this.onResolvedCallbacks = [];
        // 存放失败回调
        _this.onRejectCallbacks = [];

        // 定义函数(成功失败)
        function resolve(value) {
            // 状态只能从等待向成功或者失败转
            if (_this.status === 'pending') {
                // 设置成功状态
                _this.status = 'resolved';
                // 保存成功的数据
                _this.value = value;
                // 依次执行回调函数
                _this.onResolvedCallbacks.forEach(item => item(_this.value));
            }
        }

        // 定义函数(成功失败)
        function reject(reason) {
            // 状态只能从等待向成功或者失败转
            if (_this.status === 'pending') {
                // 设置失败状态
                _this.status = 'reasoned';
                // 保存失败的原因
                _this.reason = reason;
                // 依次执行回调函数
                _this.onRejectCallbacks.forEach(item => item(_this.reason));
            }
        }

        // 如果有异常
        try {
            executorCallback(resolve, reject);
        } catch (e) {
            // 假如executorCallback执行发生异常 当前状态变为失败态
            reject(e);
        }
        // 传递函数
    }

    // then传递成功或失败回调函数
    then(onFulfilled, onRejected) {
        let _this = this;
        // 将来返回新的promise
        let promise2;

        // 成功调用函数
        /**
         *
         * @param promise2      新的promise
         * @param x             传来的数据(可能是普通值,可能是函数)
         * @param resolve       成功调用什么
         * @param reject        失败调用什么
         */
        function resolvePromise(promise2, x, resolve, reject) {
            if (x != null && (typeof x === 'object' || typeof x === 'function')) {
                // 判断是否调用
                let called;
                try {
                    // 设置then指向
                    let then = x.then;
                    if (typeof then === "function") {
                        // 改变this指向,形成调用原型链     成功调用
                        then.call(x, function (y) {
                            if (called) return;
                            called = true;
                            resolvePromise(promise2, y, resolve, reject);
                            // 失败调用
                        }, function (error) {
                            if (called) return;
                            called = true;
                            reject(error);
                        });
                    } else {
                        // 不是函数,是一个普通对象,直接成功
                        resolve(x);
                    }
                } catch (e) {
                    if (called) return;
                    called = true;
                    reject(e);
                }

            }else {
                resolve(x);
            }
        }

        // 如果状态为成功
        if (this.status === 'resolved') {
            // 执行成功函数，把数据传过去
            promise2 = new Promise(function (resolve, reject) {
                // 使用异步任务才能提前拿到值
                setTimeout(function () {
                    try {
                        // 拿到成功的返回值
                        let x = onFulfilled(_this.value);
                        // 因为promise2不执行完拿不到，所以使用异步
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (e) {
                        // 一旦有异常,将promise2的状态变为失败
                        reject(e);
                    }
                });

            });
        }
        // 如果状态为失败
        if (this.status === 'rejected') {
            onRejected(this.reason);
        }
        // 如果状态为等待
        if (this.status === 'pending') {
            // 将成功或者失败函数保存到数组中
            this.onResolvedCallbacks.push(onFulfilled);
            this.onRejectCallbacks.push(onRejected);
        }
        return promise2;
    }

}

// 导出成员
module.exports = Promise;