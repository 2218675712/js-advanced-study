node
js运行时
浏览器js  ES+DOM+BOM
node     ES+核心模块

node可以做什么事情
  1  创建高性能的服务器
  2  工具
  3  中间件
  
  进程和线程  进程>线程
  进程表示一个程序，一个进程可以有多个线程
  node适合I/O密集不适合CPU密集(压缩、合并、加密、解密)
  
  node事件机制
     ┌───────────────────────┐
  ┌─>│        timers         │
  │  └──────────┬────────────┘
  │  ┌──────────┴────────────┐
  │  │     I/O callbacks     │
  │  └──────────┬────────────┘
  │  ┌──────────┴────────────┐
  │  │     idle, prepare     │
  │  └──────────┬────────────┘      ┌───────────────┐
  │  ┌──────────┴────────────┐      │   incoming:   │
  │  │         poll          │<─────┤  connections, │
  │  └──────────┬────────────┘      │   data, etc.  │
  │  ┌──────────┴────────────┐      └───────────────┘
  │  │        check          │
  │  └──────────┬────────────┘
  │  ┌──────────┴────────────┐
  └──┤    close callbacks    │
     └───────────────────────┘

 1. timers 阶段: 这个阶段执行 setTimeout(callback) 和 setInterval(callback) 预定的 callback;
 2. I/O callbacks 阶段: 此阶段执行某些系统操作的回调，例如TCP错误的类型。 例如，如果TCP套接字在尝试连接时收到 ECONNREFUSED，则某些* nix系统希望等待报告错误。 这将操作将等待在==I/O回调阶段==执行;
 3. idle, prepare 阶段: 仅node内部使用;
 4. poll 阶段: 获取新的I/O事件, 例如操作读取文件等等，适当的条件下node将阻塞在这里;
 5. check 阶段: 执行 setImmediate() 设定的callbacks;
 6. close callbacks 阶段: 比如 socket.on(‘close’, callback) 的callback会在这个阶段执行;
  
