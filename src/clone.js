/**
 * clone [对象或数组浅拷贝]
 * @param  {[Object]} obj [待拷贝对象]
 * @param  {[Boolean]} deepFlag [深递归拷贝]
 * @return {[Object]} newObj [拷贝对象]
 */

let clone = (obj,deepFlag)=>{
    if(obj && typeof obj === 'object') {
        let newObj = obj.constructor === Array ? [] : {};
        for(let i in obj){
            if(obj.hasOwnProperty(i)){
                if(deepFlag){
                    newObj[i] = clone(obj[i],deepFlag);
                } else {
                    newObj[i] = obj[i];
                }
            }
        }
        return newObj;
    } else {
        return obj;
    }
};

export default clone;