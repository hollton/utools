/**
 * aopDecorator [AOP装饰函数]
 * @param  {[Function]} oriFunc [原函数，即被装饰函数]
 * @param  {[Function]} aopFunc [装饰执行函数]
 * @param  {[Boolean]} isPre [是否前置装置，为true时先执行装饰函数，再执行原函数，否则反之]
 * @return {[Function]} 已被装饰的函数
 */

let aopDecorator = (oriFunc, aopFunc, isPre) => {
    let applyFunc = (func) => {
        func && func.apply(this, arguments);
    }
    return () => {
        isPre && applyFunc(aopFunc);
        let ret = applyFunc(oriFunc);
        !isPre && applyFunc(aopFunc);
        return ret;
    }
};

export default aopDecorator;