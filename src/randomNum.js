/**
 * randomNum [产生指定范围的随机整数]
 * @param  {[Number]} maxNum [必须，最大随机取值范围]
 * @param  {[Number]} minNum=0 [最小随机取值范围，默认0]
 * @return {[Number]} randomNum [随机整数，[minNum, maxNum]]
 */

let randomNum = (maxNum, minNum = 0)=>{
    if (!maxNum) {
        return maxNum;
    }
    let choice = maxNum - minNum + 1;
    return Math.floor(Math.random() * choice + minNum);
};

export default randomNum;