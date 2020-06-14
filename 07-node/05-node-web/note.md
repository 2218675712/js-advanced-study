客户端  
服务器端 处理数据和业务逻辑

          请求
客户端  ------------>服务器端
       <------------
          响应

ip地址/域名 http://www.baidu.com   
端口       
URL http://www.baidu.com   
   https://www.baidu.com/index.html

本地ip 127.0.0.1  本地域名localhost  

报文  请求和响应的过程中传递的数据块

响应报文
    1 HTTP状态码
        200 OK  请求成功
        404 请求资源不存在
        500 服务器错误
        400 客户端语法错误
    2 内容类型
        text/html
        text/css
        text/javascript
        image/jpeg
        application/json

HTTP请求处理和响应处理
1 请求参数
    get请求参数
    http://localhost:3000/?username=ad&password=a
    参数会放在浏览器地址栏中,可以借用url模块进行处理
    get请求   1.浏览器直接输入网址 2.link  3.script    4.img   5.form表单
    
    post请求  1.参数是被放在请求体中进行传输    2.node处理post请求需要使用data和end事件    3.使用queryString模块
    
路由  客户端请求地址与服务器端程序代码的处理关系

静态资源    服务器不需要处理    可以直接响应给客户端
动态资源    相同的请求地址不同的资源 