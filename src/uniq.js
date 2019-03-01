/**
 * uniq [数组去重]
 * @param  {[Array]} data [源数据]
 * @param  {[String]} key [重复判断标准，非必须，未传以数组每项做为判断key]
 * @return {[Array]} uniqData [去重数据]
 */

let uniq = (data = [], key)=>{
    var obj = {}, useKey;
    return data.reduce((prev, curr) => {
        useKey = JSON.stringify(key ? curr[key] : curr);
        !obj[useKey] && (obj[useKey] = true && prev.push(curr));
        return prev;
    }, []);
};

export default uniq;