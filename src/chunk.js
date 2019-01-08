/**
 * chunk [将数组根据指定数分割成多个数组]
 * @param  {[Array]} data [待切分数组]
 * @param  {[Number]} step = 20 [切分间隔，默认20]
 * @return {[Array]}  slicedData [已切分包裹数组]
 */

let chunk = (data = [], step = 20)=>{
    let slicedData = [];
    for(let i=0;i<data.length;i+=step){
        slicedData.push(data.slice(i,i+step));
    }
    return slicedData;
};

export default chunk;