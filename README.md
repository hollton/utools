# uTools 前端工具库
> 开发过程中的自用函数封装整理。

## 安装

### npm
```
    npm install es-utools  --save
```

### script
```
    <script src="utools.min.js"></script>
```

## 使用

### npm
```
    import * as utools from 'es-utools';
    utools.find();
```

### npm 按需加载
```
    import {find} from 'es-utools/src/find';
    find();
```

### script
挂载在全局变量 utools 下
```
    utools.find();
```

## API

### findfind(array, obj)
返回数组中包含指定键值的子项
#### params
* array: 必须，待遍历查找数据
* obj: 必须，指定键值对象
#### return
* obj: 匹配对象

``` javascript
uTools.find([{id:'1',name:'a'},{id:'2',name:'b',...}], {id:'1'})
// {id:'1',name:'a'}
```

### findIndex(array, obj)
返回数组中包含指定键值的子项在数组中的索引
#### params
* array: 必须，待遍历查找数据
* obj: 必须，指定键值对象
#### return
* obj: 匹配对象的索引
``` javascript
uTools.findIndex([{id:'1',name:'a'},{id:'2',name:'b',...}], {id:'1'})
// 0
```

### clone(obj)
数据浅拷贝
#### params
* obj: 必须，待拷贝对象
#### return
* obj: 浅拷贝值
``` javascript
uTools.clone({name:'a',data:['a']})
// {name:'a',data:['a']
```

### deepClone(obj)
数据深拷贝
#### params
* obj: 必须，待拷贝对象
#### return
* obj: 深拷贝值
``` javascript
uTools.deepClone({name:'a',data:['a']})
// {name:'a',data:['a']
```

### getUrlParams(url)
返回url参数对象
#### params
* url：非必须，默认为当前路由参数
#### return
* urlParams: 参数值

``` javascript
uTools.getUrlParams('http://xxx/?a=1&b=2&b=3')
// {a:'1', b: ['2', '3']}
```

### asyncLoop(array, asyncFn, doneFn)
异步遍历操作
#### params
* array：必须，待遍历数据
* asyncFn：必须，异步操作函数，函数传递参数为(loopFn[遍历循环函数，供一次异步结束调用], curItem[当前操作项], curIndex[当前操作项索引])
* doneFn：必须，遍历结束回调

``` javascript
uTools.asyncLoop(data, (loopFn, item, index) => {
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

``` javascript
uTools.isEmpty({})
// true
```

### debounce(func, delay)
函数去抖：N ms内不再被触发时即执行一次
#### params
* func: 必须，执行函数
* delay: 执行间隔，单位毫秒（ms）
#### return
* func: 去抖函数

``` javascript
window.onresize = uTools.debounce(myFunc, 100);
```

### throttle(func, delay)
函数节流：保证N ms后执行一次
#### params
* func: 必须，执行函数
* delay: 执行间隔，单位毫秒（ms）
#### return
* func: 节流函数

``` javascript
window.onresize = uTools.throttle(myFunc, 100);
```

### sliceArray(array, step)
将数组根据指定数分割成多个数组
#### params
* array: 必须，待切分数组
* step: 切分间隔，默认20
#### return
* slicedArray: 已切分新数组

``` javascript
sliceArray([1,2,3], 2);
// [[1,2],[3]]
```