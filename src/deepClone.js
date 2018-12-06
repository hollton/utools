/**
 * [description] 对象或数组深拷贝
 * @param  {[Object]} obj
 * @return {[Object]} newObj
 */
import clone from './clone';

let deepClone = (obj)=>{
    return clone(obj,true);
};

export default deepClone;