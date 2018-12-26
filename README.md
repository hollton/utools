# utools
[![npm](https://img.shields.io/npm/v/es-utools.svg)](https://www.npmjs.com/package/es-utools) 
[![LICENSE MIT](https://img.shields.io/npm/l/es-utools.svg)](https://www.npmjs.com/package/es-utools) 

前端工具库
> 开发过程中的自用函数封装整理

## 安装

### npm
```
npm install es-utools  --save
```

### script
```
<script src="index.js"></script>
```

## 使用

### npm
```
import * as utools from 'es-utools';
utools.find();
```

### npm 按需加载
```
import {find} from 'es-utools';
find();
```

### script
挂载在全局变量 utools 下
```
utools.find();
```

## API

<!-- TOC -->

- [find(array, obj)](#findarray-obj)
- [findIndex(array, obj)](#findindexarray-obj)
- [clone(obj)](#cloneobj)
- [deepClone(obj)](#deepcloneobj)
- [getUrlParams(url)](#geturlparamsurl)
- [asyncLoop(array, asyncFn, doneFn)](#asynclooparray-asyncfn-donefn)
- [isEmpty(obj)](#isemptyobj)
- [debounce(func, delay)](#debouncefunc-delay)
- [throttle(func, delay)](#throttlefunc-delay)
- [sliceArray(array, step)](#slicearrayarray-step)
- [isNumber(obj)](#isnumberobj)
- [numRound(num = 0, bit = 2)](#numroundnum--0-bit--2)
- [setScrollTop(top, ele)](#setscrolltoptop-ele)
- [on(ele, event, handler, propagation)](#onele-event-handler-propagation)
- [off(ele, event, handler, propagation)](#offele-event-handler-propagation)

<!-- /TOC -->

### find(array, obj)
返回数组中包含指定键值的子项
#### params
* array: 必须，待遍历查找数据
* obj: 必须，指定键值对象
#### return
* obj: 匹配对象

```
utools.find([{id:'1',name:'a'},{id:'2',name:'b'}], {id:'1'})
// {id:'1',name:'a'}
```

### findIndex(array, obj)
返回数组中包含指定键值的子项在数组中的索引
#### params
* array: 必须，待遍历查找数据
* obj: 必须，指定键值对象
#### return
* obj: 匹配对象的索引
```
utools.findIndex([{id:'1',name:'a'},{id:'2',name:'b'}], {id:'1'})
// 0
```

### clone(obj)
数据浅拷贝
#### params
* obj: 必须，待拷贝对象
#### return
* obj: 浅拷贝值
```
let a = {name:'a',data:['a']};
let _a = utools.clone(a);
console.log(a.data === _a.data);
// true
```

### deepClone(obj)
数据深拷贝
#### params
* obj: 必须，待拷贝对象
#### return
* obj: 深拷贝值
```
let b = {name:'b',data:['b']};
let _b = utools.deepClone(b);
console.log(b.data === _b.data);
// false
```

### getUrlParams(url)
返回url参数对象
#### params
* url：非必须，参数url，默认为window.location.href
#### return
* urlParams: 参数对象

```
utools.getUrlParams('http://xxx/?a=1&b=2&b=3')
// {a:'1', b: ['2', '3']}
```

### asyncLoop(array, asyncFn, doneFn)
异步遍历操作
#### params
* array：必须，待遍历数据
* asyncFn：必须，异步操作函数，函数传递参数为(loopFn[遍历循环函数，供一次异步结束调用], curItem[当前操作项], curIndex[当前操作项索引])
* doneFn：必须，遍历结束回调

```
utools.asyncLoop(data, (loopFn, item, index) => {
  async(item).then(() => {
    loopFn()
  })
}, () => {
  doneFn()
})
```

### isEmpty(obj)
判断是否为空
#### params
* obj：必须，(object | array | string)
#### return
* bool: true为空数据

```
utools.isEmpty({})
// true
```

### debounce(func, delay)
函数去抖：N ms内不再被触发时即执行一次
#### params
* func: 必须，执行函数
* delay: 执行间隔，单位毫秒（ms）
#### return
* func: 去抖函数

```
window.onresize = utools.debounce(myFunc, 100);
```

### throttle(func, delay)
函数节流：保证N ms后执行一次
#### params
* func: 必须，执行函数
* delay: 执行间隔，单位毫秒（ms）
#### return
* func: 节流函数

```
window.onresize = utools.throttle(myFunc, 100);
```

### sliceArray(array, step)
将数组根据指定数分割成多个数组
#### params
* array: 必须，待切分数组
* step: 切分间隔，默认20
#### return
* slicedArray: 已切分包裹数组

```
utools.sliceArray([1,2,3], 2);
// [[1,2],[3]]
```

### isNumber(obj)
判断是否为数值类型
#### params
* obj: 必须，待判断对象
#### return
* boolean: true表数值类型

```
utools.isNumber(2);
// true
utools.isNumber('2');
// false
```

### numRound(num = 0, bit = 2)
数值指定位数四舍五入
#### params
* num: 源数据，默认赋值0
* bit: 保留位数，默认2
#### return
* roundNum: 四舍五入后数值

```
utools.numRound(3.1415);
// 3.14
utools.numRound(3.1415, 3);
// 3.142
```

### setScrollTop(top, ele)
设置滚动条距顶部距离
#### params
* top: 距顶部距离，默认0
* ele: 指定滚动条元素，默认document.documentElement
#### return
* top: 设定值

```
utools.setScrollTop(100);
```

### on(ele, event, handler, propagation)
增加事件监听器
#### params
* ele: 事件监听元素，默认document
* event: 必须，事件类型
* handler: 监听回调
* propagation: 是否冒泡传递，默认false

```
const handler = function(){
    console.log('handler click');
};
utools.on(document, 'click', handler, false);
```

### off(ele, event, handler, propagation)
移出事件监听器
#### params
* ele: 事件监听元素，默认document
* event: 必须，事件类型
* handler: 监听回调
* propagation: 是否冒泡传递，默认false

```
utools.off(document, 'click', handler, false);
```
