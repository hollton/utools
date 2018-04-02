# uTools 前端工具库
> 开发过程中的常用函数封装整理，避免多次编写、复制，提升效率

## 使用
### 浏览器
`window.uTools`

## API
### findfind(array, obj)
返回数组中包含指定键值的子项
``` javascript
uTools.find([{id:'1',name:'a'},{id:'2',name:'b',...}], {id:'1'})
// {id:'1',name:'a'}
```

### findIndex(array, obj)
返回数组中包含指定键值的子项在数组中的索引

``` javascript
uTools.findIndex([{id:'1',name:'a'},{id:'2',name:'b',...}], {id:'1'})
// 0
```

### clone(obj)
浅拷贝

### deepClone(obj)
深拷贝

### getUrlParams(url)
返回url参数对象
#### 参数
* url：非必须，默认为当前路由参数

``` javascript
uTools.getUrlParams('http://xxx/?a=1&b=2&b=3')
// {a:'1', b: ['2', '3']}
```

### asyncLoop(array, asyncFn, doneFn)
异步遍历操作
#### 参数
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
#### 参数
* obj：必须，(object | array | string)

``` javascript
uTools.isEmpty({})
// true
```