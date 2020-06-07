class Promise {
    constructor(executorCallBack) {
        this.status = 'pending';
        this.value = 'undefined';
        this.fulfilledArray = [];
        this.rejectedArray = [];

        let resolvFn = (result) => {
            let timer = setTimeout(() => {
                clearTimeout(timer);
                if (this.status === 'pending') {
                    this.status = 'fulfilled';
                    this.value = result;
                    this.fulfilledArray.forEach(item => item(this.value));
                }
            }, 0);

        }
        let rejectFn = (reason) => {
            let timer = setTimeout(() => {
                clearTimeout(timer);
                if (this.status === 'pending') {
                    this.status = 'rejected';
                    this.value = reason;
                    this.rejectedArray.forEach(item => item(this.value));
                }
            }, 0);
        }
        try {
            executorCallBack(resolvFn, rejectFn);
        } catch (e) {
            rejectFn(e);
        }
    }

    then(fulfilledCb, rejectedCb) {
        // 处理参数不传递参数
        typeof fulfilledCb !== "function" ? fulfilledCb = (res) => {
            return res;
        } : null;
        typeof rejectedCb !== "function" ? rejectedCb = (reason) => {
            throw new Error(reason);
        } : null;

        return new Promise((resolve, reject) => {
            this.fulfilledArray.push(function (value) {
                try {
                    let x = fulfilledCb(value);
                    // 判断返回值是不是promise
                    x instanceof Promise ? x.then(resolve, reject) : resolve(x);
                } catch (e) {
                    reject(e);
                }
            });

            this.rejectedArray.push(function (value) {
                try {
                    let x = rejectedCb(value);
                    x instanceof Promise ? x.then(resolve, reject) : resolve(x);
                } catch (e) {
                    reject(e);
                }
            });
        })
    }

    // catch捕获异常,下一次继续执行成功
    catch(rejectedCb) {
        return this.then(null, rejectedCb);
    }

    // 静态方法
    static all(promiseArr = []) {
        return new Promise((resolve, reject) => {
            let index = 0;
            let res = [];
            for (let i = 0; i < promiseArr.length; i++) {
                promiseArr[i].then(val => {
                    index++;
                    res[i] = val;
                    if (index === promiseArr.length) {
                        resolve(res);
                    }
                }, reject);
            }
        });
    }

    static race(promiseArr = []) {
        return new Promise((resolve, reject) => {
            for (const promise of promiseArr) {
                promise.then(
                    (value) => {
                        if (settlementOccurred) return;
                        settlementOccurred = true;
                        resolve(value);
                    },
                    (err) => {
                        if (settlementOccurred) return;
                        settlementOccurred = true;
                        reject(err);
                    });
            }
            let settlementOccurred = false;
        });
    }

    static resolve(result) {
        return new Promise((resolve, reject) => {
            resolve(result);
        })
    }
}

module.exports = Promise;