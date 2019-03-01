/**
 * shuffle [数组洗牌随机排序 https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle]
 * @param  {[Array]} data [源数据]
 * @return {[Array]} shuffleData [洗牌随机排序数据]
 */

import randomNum from './randomNum'
import clone from './clone'

let shuffle = (data = [])=>{
    let _data = clone(data);
    let randomIndex;
    _data.forEach((item, index) => {
        randomIndex = randomNum(_data.length - 1 - index);
        [_data[index], _data[randomIndex]] = [_data[randomIndex], _data[index]];
    })
    return _data
};

export default shuffle;