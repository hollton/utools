/**
 * deepClone [对象或数组深拷贝]
 * @param  {[Object]} obj [待拷贝对象]
 * @return {[Object]} newObj  [拷贝对象]
 */

import clone from './clone';

let deepClone = (obj)=>{
    return clone(obj,true);
};

export default deepClone;