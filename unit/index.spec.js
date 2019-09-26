import { find, findIndex, getUrlParams, isEmpty, isNumber, numRound, uniq } from "../_index"

describe("utools",()=>{
    it("isNumber 判断是否为数值类型",()=>{
        expect(isNumber(2)).toBe(true)
    })
    it("find_findIndex 数组中包含指定键值的子项",()=>{
        var arr = [{id:'1',name:'a'},{id:'2',name:'b'}]
        expect(find(arr, {id:'1'})).toEqual({id:'1',name:'a'})
        expect(find(arr, {id:'3'})).toBeUndefined()
        expect(findIndex()).toBe()
        expect(findIndex(arr, {id:'1'})).toBe(0)
        expect(findIndex(arr, {id:'3'})).toBeUndefined()
    })
    it("getUrlParams url参数对象",()=>{
        var url = 'https://github.com/hollton/utools'
        var url_param_key = 'https://github.com/hollton/utools?name'
        var url_param = 'https://github.com/hollton/utools?name=hollton&love=k&love=kk'
        expect(getUrlParams(url)).toEqual({})
        expect(getUrlParams(url_param_key)).toEqual({name: undefined})
        expect(getUrlParams(url_param)).toEqual({name: 'hollton', love: ['k', 'kk']})
    })
    it("isEmpty 判断是否为空",()=>{
        expect(isEmpty({})).toBe(true)
        expect(isEmpty(0)).toBe(true)
        expect(isEmpty('0')).toBe(false)
    })
    it("numRound 数值指定位数四舍五入",()=>{
        expect(numRound(null)).toBe(null)
        expect(numRound(3.1415)).toBe(3.14)
        expect(numRound(3.1415, 3)).toBe(3.142)
        expect(numRound(3.1, 2, true)).toBe('3.10')
        expect(numRound(3, 2, true)).toBe('3.00')
    })
    it("uniq 数组去重",()=>{
        expect(uniq([])).toEqual([])
        expect(uniq([1,2,3,2])).toEqual([1,2,3])
        expect(uniq([{id: 1, name: '1'}, {id: 2, name: '2'}, {id: 1, name: '_1'}], 'id')).toEqual([{id: 1, name: '1'}, {id: 2, name: '2'}])
    })
})