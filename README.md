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
- [sliceArray -> chunk(data, step)](#slicearray---chunkdata-step)
- [isNumber(obj)](#isnumberobj)
- [numRound(num = 0, bit = 2, zeroize)](#numroundnum--0-bit--2-zeroize)
- [setScrollTop(top, ele)](#setscrolltoptop-ele)
- [on(ele, event, handler, propagation)](#onele-event-handler-propagation)
- [off(ele, event, handler, propagation)](#offele-event-handler-propagation)
- [uniq(data, key)](#uniqdata-key)
- [aopDecorator(oriFunc, aopFunc, isPre)](#aopdecoratororifunc-aopfunc-ispre)
- [randomNum(maxNum, minNum = 0)](#randomnummaxnum-minnum--0)
- [shuffle(data)](#shuffledata)
- [ellipsis(options)](#ellipsisoptions)
- [timeConvert(ms = 0, unit = 'days')](#timeconvertms--0-unit--days)

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

### sliceArray -> chunk(data, step)
将数组根据指定数分割成多个数组
#### params
* data: 必须，待切分数组
* step: 切分间隔，默认20
#### return
* slicedData: 包含拆分区块的新数组，为二维数组

```
utools.chunk([1,2,3], 2);
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

### numRound(num = 0, bit = 2, zeroize)
数值指定位数四舍五入
#### params
* num: 源数据，默认赋值0
* bit: 保留位数，默认2
* zeroize: 位数不足时是否填零，注为true时返回的数据类型为 String
#### return
* roundNum: 四舍五入后数值

```
utools.numRound(3.1415);
// 3.14
utools.numRound(3.1415, 3);
// 3.142
const numZeroize = utools.numRound(3.1, 3, true);
typeof numZeroize
// '3.100'、"string"
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

### uniq(data, key)
数组去重
#### params
* data: 源数据，默认[]
* key: 重复判断标准，非必须，未传以数组每项做为判断key
#### return
* uniqData: 去重数据

```
utools.uniq([1,2,3,2]);
// [1,2,3]
utools.uniq([{id: 1, name: '1'}, {id: 2, name: '2'}, {id: 1, name: '_1'}], 'id');
// [{id: 1, name: '1'}, {id: 2, name: '2'}]
```

### aopDecorator(oriFunc, aopFunc, isPre)
AOP装饰函数
#### params
* oriFunc: 原函数，即被装饰函数
* aopFunc: 装饰执行函数
* isPre: 是否前置装置，为true时先执行装饰函数，再执行原函数，否则反之
#### return
* aopDecoratorFunc: 已被装饰的函数

```
const oriFunc = () => console.log('oriFunc');
const aopFunc = () => console.log('aopFunc');

const afterDecorator = utools.aopDecorator(oriFunc, aopFunc);
afterDecorator();
// 'oriFunc'、'aopFunc'

const preDecorator = utools.aopDecorator(oriFunc, aopFunc, true);
preDecorator();
// 'aopFunc'、'oriFunc'
```

### randomNum(maxNum, minNum = 0)
产生指定范围的随机整数，包含首尾数值
#### params
* maxNum: 必须，最大随机取值范围
* minNum: 最小随机取值范围，默认0
#### return
* randomNum: 随机整数，[minNum, maxNum]

```
utools.randomNum(5);
// [0, 5] 随机数
utools.randomNum(5, 2);
// [2, 5] 随机数
```

### shuffle(data)
数组洗牌随机排序，返回新数组，不改变原数组
#### params
* data: 源数据
#### return
* shuffleData: 洗牌随机排序数据

```
utools.shuffle([1, 2, 3, 4]);
// [4, 2, 1, 3] (随机)
```

### ellipsis(options)
限制文字添加省略号
#### options
* target: null,限制文字的容器dom，需未设置height
* limitLine: 1,限制行数
* lineHeight: 20,文字行高
* showTitle: true,title显示全部内容
* symbol: '...',超出追加的内容
* charLimit: false,根据字符的长度限制
* charLength: 10, 最大字符长度，charLimit=true有效

```
<div id="text" style="width:200px">文字超出2行，添加省略显示</div>

utools.ellipsis({
    target: document.getElementById('text'),
    limitLine: 2
});
```

### timeConvert(ms = 0, unit = 'days')
毫秒数转换为天、时、分、秒、毫秒
#### params
* ms: Number 毫秒数，默认 0
* unit: String 最大转换单位，默认 'days'，可选值：'milliseconds'、'seconds'、'minutes'、'hours'、'days'
#### return
* result: Object 转换结果
  *  milliseconds: Number, // 毫秒数
  *  seconds: Number, // 秒数
  *  ...,
  *  [`${unit}`]: Number, // 最大单位数
  *  t: String, // 时间拍平，如：'1days2hours3minutes4seconds5milliseconds'
  *  tt: String, // 同t，两位数时间值
  *  t_s: String, // 秒时间拍平，如：'1days2hours3minutes4seconds'
  *  tt_s: String, // 同t_s，两位数时间值

```
const time = 5 + 4 * 1000 + 3 * 1000 * 60 + 2 * 1000 * 60 * 60 + 1000 * 60 * 60 * 24
utools.timeConvert(time);
// {"milliseconds":5,"seconds":4,"minutes":3,"hours":2,"days":1,"t":"1days2hours3minutes4seconds5milliseconds","tt":"01days02hours03minutes04seconds05milliseconds","t_s":"1days2hours3minutes4seconds","tt_s":"01days02hours03minutes04seconds"}

conte time1 = 4 * 1000 + 2 * 1000 * 60 * 60 + 1000 * 60 * 60 * 24
utools.timeConvert(time, 'hours');
// {"milliseconds":0,"seconds":4,"minutes":0,"hours":26,"t":"26hours4seconds","tt":"26hours04seconds","t_s":"26hours4seconds","tt_s":"26hours04seconds"}
```
