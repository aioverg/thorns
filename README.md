# thorns

## 该项目是使用vue搭建的进销存管理系统

文件说明：
--src
  |--api API接口
  |--components 组件目录
     |--sider 侧边栏
        |--sider.vue
        |--index.js
     |--header 头部
        |--header.vue
     |--content 内容
        |--
     |--login.vue登陆
  |--router 路由
     |--router.config.js 路由设置
  |--store 状态管理
  |--App.vue 根组件，页面入口文件 ，所有页面都是在App.vue下进行切换的
  |--main.js 程序入口文件，初始化vue实例并使用需要的插件,加载公共组件

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).