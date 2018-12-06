/**
 * [sliceArray] 将数组根据指定数（默认20）分割成多个数组
 * @param  {[Array]} arrayData:[1,2,3,4]
 * @param  {[Number]} step :2
 * @return {[Array]}  slicedArray :[[1,2],[3,4]]
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