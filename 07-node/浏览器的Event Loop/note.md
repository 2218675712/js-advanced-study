浏览器事件环
js单线程(主线程)

宏任务 js渲染 ui渲染 定时器(setTimeout/setInterval/setImmdiate) I/o
微任务 promise process.nextTick Object.observe MutationObserver

Vue.nextTick(function() {})

script宏任务先执行,之后的执行过程都是先清空微任务 再执行宏任务