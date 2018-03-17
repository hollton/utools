/**
 * getUrlParams[获取url参数，默认取当前路由参数]
 * @param  {[String]} url [含参数url]
 * @return {[Object]}     [params]
 */

let getUrlParams = (url) => {
  const hash = url || window.location.hash;
  const params = {};
  const search = hash.substr(hash.indexOf('?') + 1);
  let splitIndex;
  if (search) {
    search.split('&').forEach(item => {
      splitIndex = item.indexOf('=');
      if (splitIndex < 0) {
        params[item] = undefined;
      } else {
        var key = item.substring(0, splitIndex);
        if (params.hasOwnProperty(key)) {
          if (!Array.isArray(params[key])) {
            params[key] = [params[key]];
          }
          params[key].push(item.substring(splitIndex + 1));
        } else {
          params[key] = item.substring(splitIndex + 1);
        }
      }
    })
  }
  return params;
}

export default getUrlParams;