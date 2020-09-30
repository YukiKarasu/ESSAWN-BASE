# 规范

## router

1. name--大驼峰
2. path--小驼峰

## store

## utils

1. import中采用单引号
2. 定义请求头，定义变量放置于import下

## CSS样式

1. 命名-[.key1-key2${value}](尽可能缩写)
2. 注释-`// CSS-功能(大|范)-${作用组件}-${功能(小|细)}`
3. 引用一概采用`@import 'path'`，使用url会导致mixin无法引用
4. 文件名-无需在项目中直接使用的样式文件均添加_作为前缀
```scss
/**
 * @script: CSS
 * @effect: 清除样式
 * @range:  All
 */
//  CSS-重置样式-盒子|字体
```