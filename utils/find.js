/**
 * [description] 类似lodash _.find()，在指定数组中查找包含指定键值的子项并返回该子项
 * @param  {[type]} arrayData [{id:1,name:'a',...},{id:2,name:'b',...}]
 * @param  {[type]} keyItem   {id:1,name:'a'}
 * @return {[type]} findItem  {id:1,name:'a',...}
 */

let find = (arrayData, keyItem, getIndex)=>{
    if(!(arrayData && keyItem)){
        return ;
    }
    let findItem, findIndex, matchCount, keyArray = [], canContinue = true;
    for(let i in keyItem){
        if(keyItem.hasOwnProperty(i)){
            keyArray.push(i);
        }
    }
    arrayData.forEach((item,index)=>{
        matchCount = 0;
        keyArray.forEach(key=>{
            if(item[key] === keyItem[key]){
                matchCount++;
            }
        });
        if(matchCount === keyArray.length && canContinue){
            findItem = item;
            findIndex = index;
            canContinue = false;
        }
    });
    return getIndex?findIndex:findItem;
};

export default find;