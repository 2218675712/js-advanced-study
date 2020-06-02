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

        // 如果状态为等待
        if (this.status === 'pending') {
            // 将成功或者失败函数保存到数组中
            this.onResolvedCallbacks.push(onFulfilled);
            this.onRejectCallbacks.push(onRejected);
        }

        // 如果状态为成功
        if (this.status === 'resolved') {
            // 执行成功函数，把数据传过去
            onFulfilled(this.value);
        }
        // 如果状态为失败
        if (this.status === 'reasoned') {
            // 执行失败函数，把原因传过去
            onRejected(this.reason);
        }
    }

}


// 导出成员
module.exports = Promise;