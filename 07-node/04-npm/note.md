npm
1 概述
   node package manager
   包 多个文件的集合
2 包的分类
  全局包 在命令行使用
        1 安装第三方: npm install *** -g
        2 自己创建全局包
  本地包 在项目中使用
        npm install jquery --save(-S) 默认安装的是生产依赖 

        生产依赖放在 "dependencies": {} 以后删除依赖 可以
        通过npm install 安装所有的依赖
    
        npm install @babel/core --save-dev(-D)
        开发依赖放在 "devDependencies": {}
    
        npm install --production 安装生产依赖
    
        其他 'peerDependencies': {}
            'bundledDe.....':{}
            'optionalDep....':{}

3 package.json
  npm init 初始化一个文件 
  npm init -y



# npm 笔记

npm是随同NodeJS一起安装的包管理工具。

**除了-g的全局命令以外，所有`npm`命令都要在工程目录执行！！！！**

## 常用命令

### 安装 npm

#### 检测版本号

```
npm -v
```

#### 升级 npm

```
sudo npm install npm -g
```

### 安装模块

```
npm install <Module Name>
```

安装好之后，express 包就放在了工程目录下的 node_modules 目录中

参数 `-g` 全局安装

**给当前工程安装插件的时候需要注意**：

**一定要加`npm install <package name> --save`参数，这样该插件才会被加入该项目的`dependencies`中，下次生成主工程的时候才会被编译。**

#### 查看模块

```
npm list -g
```

查看某个特定模块

```
npm list <Module Name>
```

#### 更新模块

```
npm install <Module Name>@latest -g
```

#### 卸载模块

```
npm unistall grunt
```

#### 使用淘宝 NPM 镜像

```
npm install -g cnpm --registry=https://registry.npm.taobao.org`
`cnpm install [name]
```



## require查找顺序

```javascript
//require('./a'); // a.js


/*
  模块有路径没有后缀名
  1 首先找同名js 找到则执行
  2 找不到则找同名js文件夹
  3 假如找到同名js文件夹，会找package.json文件main选项指定的入口文件
  4 假如package.json文件main选项指定的入口文件不存在或者没配置，则会
  找有没有index.js
  5 没有index.js会报错
*/
require('a'); // require('fs') require('mime')
/*
  没有路径也没有后缀
  1 首先会假设这是系统模块
  2 node会去node_modules文件夹
  3 首先看有没有该名字的js
  4 再看有没有该名字的文件夹
  5 假如找到同名js文件夹，会找package.json文件main选项指定的入口文件
  6 假如package.json文件main选项指定的入口文件不存在或者没配置，则会
  找有没有index.js
  7 没有index.js会报错

*/
```

