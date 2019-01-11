/**
 * numRound [数值指定位数四舍五入]
 * @param  {[Number]} num [源数据]
 * @param  {[Number]} bit = 2 [保留位数，默认2]
 * @param  {[Boolean]} zeroize [位数不足时是否填零]
 * @return {[Number]} roundNum [四舍五入后数值]
 */

import isNumber from './isNumber';

let numRound = (num = 0, bit = 2, zeroize) => {
    if (!isNumber(num)) {
        return num;
    }

    let bitPercent = Math.pow(10, bit);
    let roundNum = Math.round(num * bitPercent) / bitPercent;

    if (zeroize) {
        const dot = '.';
        roundNum += '';
        if (roundNum.indexOf(dot) < 0) {
            roundNum += dot;
        }
        let numData = roundNum.split(dot);
        let integerPart = numData[0];
        let decimalPart = numData[1];
        while (decimalPart.length < bit) {
            decimalPart += '0';
        }
        return `${integerPart}${dot}${decimalPart}`;
    }

    return roundNum;
};

export default numRound;