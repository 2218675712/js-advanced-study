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
        return new Promise((resolve, reject) => {
            this.fulfilledArray.push(function (value) {
                try {
                    let x = fulfilledCb(value);
                    x instanceof Promise ? x.then(resolve, reject) : resolve(x);
                } catch (e) {
                    reject(e);
                }
            });

            this.rejectedArray.push(function () {
                try {
                    let x = rejectedCb(this.value);
                    x instanceof Promise ? x.then(resolve, reject) : resolve(x);
                } catch (e) {
                    reject(e);
                }
            });
        })
    }
}

module.exports = Promise;