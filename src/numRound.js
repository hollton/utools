/**
 * numRound [数值指定位数四舍五入]
 * @param  {[Number]} num [源数据]
 * @param  {[Number]} bit = 2 [保留位数，默认2]
 * @return {[Number]} roundNum [四舍五入后数值]
 */

import isNumber from './isNumber';

let numRound = (num, bit = 2)=>{
    if(!isNumber(num)){
        return num;
    }
    let bitPercent = Math.pow(10, bit);
    return Math.round(num * bitPercent) / bitPercent;
};

export default numRound;