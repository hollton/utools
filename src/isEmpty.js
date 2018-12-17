/**
 * isEmpty [判断是否为空对象]
 * @param  {[Object]} obj [待空判断对象]
 * @return {[Boolean]} isEmpty [是否为空]
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