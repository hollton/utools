/**
 * sliceArray [将数组根据指定数分割成多个数组]
 * @param  {[Array]} arrayData [待切分数组]
 * @param  {[Number]} step = 20 [切分间隔，默认20]
 * @return {[Array]}  slicedArray [已切分包裹数组]
 */

let sliceArray = (arrayData, step = 20)=>{
    arrayData = arrayData || [];
    let slicedArray = [];
    for(let i=0;i<arrayData.length;i+=step){
        slicedArray.push(arrayData.slice(i,i+step));
    }
    return slicedArray;
};

export default sliceArray;