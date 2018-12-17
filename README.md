# utools
[![npm](https://img.shields.io/npm/v/es-utools.svg)](https://www.npmjs.com/package/es-utools) 
[![LICENSE MIT](https://img.shields.io/npm/l/es-utools.svg)](https://www.npmjs.com/package/es-utools) 

前端工具库
> 开发过程中的自用函数封装整理。

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
    - [params](#params)
    - [return](#return)
- [findIndex(array, obj)](#findindexarray-obj)
    - [params](#params-1)
    - [return](#return-1)
- [clone(obj)](#cloneobj)
    - [params](#params-2)
    - [return](#return-2)
- [deepClone(obj)](#deepcloneobj)
    - [params](#params-3)
    - [return](#return-3)
- [getUrlParams(url)](#geturlparamsurl)
    - [params](#params-4)
    - [return](#return-4)
- [asyncLoop(array, asyncFn, doneFn)](#asynclooparray-asyncfn-donefn)
    - [params](#params-5)
- [isEmpty(obj)](#isemptyobj)
    - [params](#params-6)
    - [return](#return-5)
- [debounce(func, delay)](#debouncefunc-delay)
    - [params](#params-7)
    - [return](#return-6)
- [throttle(func, delay)](#throttlefunc-delay)
    - [params](#params-8)
    - [return](#return-7)
- [sliceArray(array, step)](#slicearrayarray-step)
    - [params](#params-9)
    - [return](#return-8)
- [isNumber(obj)](#isnumberobj)
    - [params](#params-10)
    - [return](#return-9)
- [numRound(num, bit = 2)](#numroundnum-bit--2)
    - [params](#params-11)
    - [return](#return-10)

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
* url：非必须，参数url，默认为当前路由参数
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

### numRound(num, bit = 2)
数值指定位数四舍五入
#### params
* num: 必须，源数据
* bit: 保留位数，默认2
#### return
* roundNum: 四舍五入后数值

```
utools.numRound(3.1415);
// 3.14
utools.numRound(3.1415, 3);
// 3.142
```
