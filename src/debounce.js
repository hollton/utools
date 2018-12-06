/**
 * [debounce] 函数去抖：N ms内不再被触发时即执行一次
 * @param  {[Function]} func:执行函数
 * @param  {[Number]} delay:执行间隔，单位毫秒（ms）
 * @return {[Function]} 去抖函数
 * demo http://demo.nimius.net/debounce_throttle
 */

let debounce = (func, delay) => {
    let timer;
    let context;
    let args;

    return function() {
        context = this;
        args = arguments;

        clearTimeout(timer);

        timer = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    }
};

export default debounce;