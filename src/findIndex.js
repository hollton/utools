/**
 * findIndex [在指定数组中查找包含指定键值的子项并返回该子项序数]
 * @param  {[Array]} arrayData [待遍历查找数据]
 * @param  {[Object]} keyItem [指定键值对象]
 * @return {[Number]} findIndex [匹配对象的索引]
 */

import find from './find';

let findIndex = (arrayData, keyItem)=>{
    return find(arrayData, keyItem, true);
};

export default findIndex;