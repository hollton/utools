/**
 * [description] 对象或数组浅拷贝
 * @param  {[Object]} obj
 * @param  {[Object]} deepFlag  深递归拷贝
 * @return {[Object]} newObj
 */

let clone = (obj,deepFlag)=>{
    var newObj = obj.constructor === Array ? [] : {};
    if(typeof obj !== 'object'){
        return obj;
    } else {
        for(let i in obj){
            if(obj.hasOwnProperty(i)){
                if(deepFlag){
                    newObj[i] = clone(obj[i]);
                } else {
                    newObj[i] = obj[i];
                }
            }
        }
    }
    return newObj;
};

export default clone;