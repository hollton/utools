/**
 * [description] 判断是否为空对象
 * @param  {[Object]} obj
 * @return {[boolean]}
 */

let isEmpty = (obj)=>{
    for(let i in obj){
        if(obj.hasOwnProperty(i)){
            return !1;
        }
    }
    return !0;
};

export default isEmpty;