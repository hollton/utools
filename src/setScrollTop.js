/**
 * setScrollTop [设置滚动条距顶部距离]
 * @param  {[Number]} top = 0 [距顶部距离]
 * @param  {[Object]} ele [指定滚动条元素，默认document.documentElement]
 * @return {[Number]} top [设定值]
 */

let setScrollTop = (top = 0, ele = document.documentElement)=>{
    ele.scrollTop = top;
    return top;
};

export default setScrollTop;