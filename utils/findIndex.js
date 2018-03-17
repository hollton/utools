/**
 * [description] 类似lodash _.findIndex()，在指定数组中查找包含指定键值的子项并返回该子项序数
 * @param  {[type]} arrayData [{id:1,...},{id:2,...}]
 * @param  {[type]} keyItem   {id:1}
 * @return {[type]} findIndex  0
 */

import find from './find';

let findIndex = (arrayData, keyItem)=>{
    return find(arrayData, keyItem, true);
};

export default findIndex;