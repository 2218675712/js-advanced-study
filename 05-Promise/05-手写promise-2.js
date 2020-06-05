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
        executorCallBack(resolvFn, rejectFn);
    }

    then(fulfilledCb, rejectedCb) {
        this.fulfilledArray.push(fulfilledCb);
        this.rejectedArray.push((rejectedCb));
    }
}

module.exports = Promise;