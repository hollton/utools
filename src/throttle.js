/**
 * throttle [函数节流：保证N ms后执行一次]
 * @param  {[Function]} func [执行函数]
 * @param  {[Number]} delay [执行间隔，单位毫秒（ms）]
 * @return {[Function]} _func [节流函数]
 * http://demo.nimius.net/debounce_throttle
 */

let throttle = (func, delay) => {
    let timer;
    let context;
    let args;
    let lastTime;
    let currTime;
    return function() {
        context = this;
        args = arguments;
        currTime = +new Date();

        clearTimeout(timer);

        if (!lastTime) {
            lastTime = currTime;
        }
        if (currTime - lastTime >= delay) {
            func.apply(context, args);
            lastTime = currTime;
        } else {
            timer = setTimeout(() => {
                func.apply(context, args);
            }, delay)
        }
    }
};

export default throttle;
