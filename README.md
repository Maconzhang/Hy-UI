# a single demo

> A Vue.js project
> @author MaconZhang
> @email: 944626347@qq.com

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 基于Vue移动端的H5的ui组件库（Hy-Ui）
## 应用于快速构建简单的H5业务场景

## 组件列表
```
- Dialog 组件
- Input 组件
- Loading 组件

```

## 指令列表
```
- Message 指令
- Loading 指令

```

## h5终端适配方案
```
- 关于h5的终端适配，我依旧用的是手淘的flexible方案（虽然官方说废弃了，但是我觉得配和scss @function动态计算rem的方式还是能适配绝大部分的应用场景）
- 参考文献：['https://www.w3cplus.com/mobile/lib-flexible-for-html5-layout.html']
--
  @function vm($px){
      @return ($px / 37.5) * 1rem;
  }
--
```

## 常见的动画分析['vue的transition', '自定义的animation']
```
  
```

## webpack相关插件配置分析
```
-  图片压缩插件(webpack.prod.conf.js): imagemin-webpack-plugin['https://www.npmjs.com/package/imagemin-webpack-plugin'];
-- 在公司用vue写h5时经常是一些宣传页首页的banner图片会很大, 该插件可以高品质压缩图片, 加速首页资源的获取, 也不会麻烦UI小哥哥/小姐姐给你压缩图片
---
new ImageminPlugin({
  disable: process.env.NODE_ENV !== 'production',
  pngquant: {
    quality: '80'
  },
  optimizationLevel: 7,
  minFileSize: 25
})
---

- scss全局样式的配置(utils.js): sass-resources-loader['https://www.npmjs.com/package/sass-resources-loader']
-- 定义一个全局的scss样式的.
---
scss: generateLoaders('sass').concat({
   loader:'sass-resources-loader',
   options:{
     resources:path.resolve(__dirname,'../src/style/index.scss')
   }
}),
---

```
