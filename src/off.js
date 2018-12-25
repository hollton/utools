/**
 * off [移出事件监听器]
 * @param  {[Object]} ele = document [事件监听元素]
 * @param  {[String]} event [事件类型]
 * @param  {[Function]} handler [监听回调]
 * @param  {[Boolean]} propagation = false [是否冒泡传递]
 * @return {[Object]} null
 */

let off = (ele = document, event, handler, propagation = false) => {
    if (ele.removeEventListener) {
        ele.removeEventListener(event, handler, propagation)
    } else {
        ele.detachEvent(`on${event}`, handler)
    }
};

export default off;