/**
 * getUrlParams [获取url参数对象，默认window.location.href]
 * @param  {[String]} url [含参数url]
 * @return {[Object]} params [参数对象]
 */

let getUrlParams = (url) => {
  url = url || window.location.href;
  const params = {};
  const searchIndex = url.indexOf('?')
  if (searchIndex > -1) {
    const search = url.substr(url.indexOf('?') + 1);
    let splitIndex;
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