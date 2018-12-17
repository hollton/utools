/**
 * asyncLoop [异步循环]
 * @param  {[Array]} arrData [待操作数据]
 * @param  {[Function]} asyncFn [异步操作回调(loop方法, 当前操作item, 当前index)]
 * @param  {[Function]} doneFn  [循环结束回调]
 */

let asyncLoop = (arrData, asyncFn, doneFn) => {
  let i = -1;
  const loop = () => {
    i++;
    if (i === arrData.length) {
      doneFn();
    } else {
      asyncFn(loop, arrData[i], i);
    }
  }
  loop();
}

export default asyncLoop;