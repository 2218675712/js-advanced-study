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

