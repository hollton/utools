/**
 * isNumber [判断是否为数值类型]
 * @param  {[Object]} obj [待判断对象]
 * @return {[boolean]} isNumber [是否为数值类型]
 */

let isNumber = (obj)=>{
    return typeof obj === 'number' && !isNaN(obj);
};

export default isNumber;