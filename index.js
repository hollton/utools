(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["utools"] = factory();
	else
		root["utools"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * clone [对象或数组浅拷贝]
 * @param  {[Object]} obj [待拷贝对象]
 * @param  {[Boolean]} deepFlag [深递归拷贝]
 * @return {[Object]} newObj [拷贝对象]
 */

var clone = function clone(obj, deepFlag) {
    if (obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
        var newObj = obj.constructor === Array ? [] : {};
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                if (deepFlag) {
                    newObj[i] = clone(obj[i], deepFlag);
                } else {
                    newObj[i] = obj[i];
                }
            }
        }
        return newObj;
    } else {
        return obj;
    }
};

exports.default = clone;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * find [在指定数组中查找包含指定键值的子项并返回该子项]
 * @param  {[Array]} arrayData [待遍历查找数据]
 * @param  {[Object]} keyItem [指定键值对象]
 * @return {[Object]} findItem [匹配对象]
 */

var find = function find(arrayData, keyItem, getIndex) {
    if (!(arrayData && keyItem)) {
        return;
    }
    var findItem = void 0,
        findIndex = void 0,
        matchCount = void 0,
        keyArray = [],
        canContinue = true;
    for (var i in keyItem) {
        if (keyItem.hasOwnProperty(i)) {
            keyArray.push(i);
        }
    }
    arrayData.forEach(function (item, index) {
        matchCount = 0;
        keyArray.forEach(function (key) {
            if (item[key] === keyItem[key]) {
                matchCount++;
            }
        });
        if (matchCount === keyArray.length && canContinue) {
            findItem = item;
            findIndex = index;
            canContinue = false;
        }
    });
    return getIndex ? findIndex : findItem;
};

exports.default = find;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * isNumber [判断是否为数值类型]
 * @param  {[Object]} obj [待判断对象]
 * @return {[boolean]} isNumber [是否为数值类型]
 */

var isNumber = function isNumber(obj) {
  return typeof obj === 'number' && !isNaN(obj);
};

exports.default = isNumber;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * asyncLoop [异步循环]
 * @param  {[Array]} arrData [待操作数据]
 * @param  {[Function]} asyncFn [异步操作回调(loop方法, 当前操作item, 当前index)]
 * @param  {[Function]} doneFn  [循环结束回调]
 */

var asyncLoop = function asyncLoop(arrData, asyncFn, doneFn) {
  var i = -1;
  var loop = function loop() {
    i++;
    if (i === arrData.length) {
      doneFn();
    } else {
      asyncFn(loop, arrData[i], i);
    }
  };
  loop();
};

exports.default = asyncLoop;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * chunk [将数组根据指定数分割成多个数组]
 * @param  {[Array]} data [待切分数组]
 * @param  {[Number]} step = 20 [切分间隔，默认20]
 * @return {[Array]}  slicedData [已切分包裹数组]
 */

var chunk = function chunk() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var step = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;

    var slicedData = [];
    for (var i = 0; i < data.length; i += step) {
        slicedData.push(data.slice(i, i + step));
    }
    return slicedData;
};

exports.default = chunk;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * debounce [函数去抖：N ms内不再被触发时即执行一次]
 * @param  {[Function]} func [执行函数]
 * @param  {[Number]} delay [执行间隔，单位毫秒（ms）]
 * @return {[Function]} _func [去抖函数]
 * demo http://demo.nimius.net/debounce_throttle
 */

var debounce = function debounce(func, delay) {
    var timer = void 0;
    var context = void 0;
    var args = void 0;

    return function () {
        context = this;
        args = arguments;

        clearTimeout(timer);

        timer = setTimeout(function () {
            func.apply(context, args);
        }, delay);
    };
};

exports.default = debounce;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _clone = __webpack_require__(0);

var _clone2 = _interopRequireDefault(_clone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var deepClone = function deepClone(obj) {
  return (0, _clone2.default)(obj, true);
}; /**
    * deepClone [对象或数组深拷贝]
    * @param  {[Object]} obj [待拷贝对象]
    * @return {[Object]} newObj  [拷贝对象]
    */

exports.default = deepClone;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _find = __webpack_require__(1);

var _find2 = _interopRequireDefault(_find);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var findIndex = function findIndex(arrayData, keyItem) {
  return (0, _find2.default)(arrayData, keyItem, true);
}; /**
    * findIndex [在指定数组中查找包含指定键值的子项并返回该子项序数]
    * @param  {[Array]} arrayData [待遍历查找数据]
    * @param  {[Object]} keyItem [指定键值对象]
    * @return {[Number]} findIndex [匹配对象的索引]
    */

exports.default = findIndex;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * getUrlParams [获取url参数对象，默认window.location.href]
 * @param  {[String]} url [含参数url]
 * @return {[Object]} params [参数对象]
 */

var getUrlParams = function getUrlParams(url) {
  url = url || window.location.href;
  var params = {};
  var search = url.substr(url.indexOf('?') + 1);
  var splitIndex = void 0;
  if (search) {
    search.split('&').forEach(function (item) {
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
    });
  }
  return params;
};

exports.default = getUrlParams;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.uniq = exports.off = exports.on = exports.setScrollTop = exports.numRound = exports.isNumber = exports.sliceArray = exports.chunk = exports.throttle = exports.debounce = exports.asyncLoop = exports.getUrlParams = exports.deepClone = exports.clone = exports.isEmpty = exports.findIndex = exports.find = undefined;

var _find = __webpack_require__(1);

var _find2 = _interopRequireDefault(_find);

var _findIndex = __webpack_require__(7);

var _findIndex2 = _interopRequireDefault(_findIndex);

var _isEmpty = __webpack_require__(10);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _clone = __webpack_require__(0);

var _clone2 = _interopRequireDefault(_clone);

var _deepClone = __webpack_require__(6);

var _deepClone2 = _interopRequireDefault(_deepClone);

var _getUrlParams = __webpack_require__(8);

var _getUrlParams2 = _interopRequireDefault(_getUrlParams);

var _asyncLoop = __webpack_require__(3);

var _asyncLoop2 = _interopRequireDefault(_asyncLoop);

var _debounce = __webpack_require__(5);

var _debounce2 = _interopRequireDefault(_debounce);

var _throttle = __webpack_require__(11);

var _throttle2 = _interopRequireDefault(_throttle);

var _chunk = __webpack_require__(4);

var _chunk2 = _interopRequireDefault(_chunk);

var _isNumber = __webpack_require__(2);

var _isNumber2 = _interopRequireDefault(_isNumber);

var _numRound = __webpack_require__(12);

var _numRound2 = _interopRequireDefault(_numRound);

var _setScrollTop = __webpack_require__(13);

var _setScrollTop2 = _interopRequireDefault(_setScrollTop);

var _on = __webpack_require__(14);

var _on2 = _interopRequireDefault(_on);

var _off = __webpack_require__(15);

var _off2 = _interopRequireDefault(_off);

var _uniq = __webpack_require__(16);

var _uniq2 = _interopRequireDefault(_uniq);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.find = _find2.default;
exports.findIndex = _findIndex2.default;
exports.isEmpty = _isEmpty2.default;
exports.clone = _clone2.default;
exports.deepClone = _deepClone2.default;
exports.getUrlParams = _getUrlParams2.default;
exports.asyncLoop = _asyncLoop2.default;
exports.debounce = _debounce2.default;
exports.throttle = _throttle2.default;
exports.chunk = _chunk2.default;
exports.sliceArray = _chunk2.default;
exports.isNumber = _isNumber2.default;
exports.numRound = _numRound2.default;
exports.setScrollTop = _setScrollTop2.default;
exports.on = _on2.default;
exports.off = _off2.default;
exports.uniq = _uniq2.default;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * isEmpty [判断是否为空对象]
 * @param  {[Object]} obj [待空判断对象]
 * @return {[Boolean]} isEmpty [是否为空]
 */

var isEmpty = function isEmpty(obj) {
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            return !1;
        }
    }
    return !0;
};

exports.default = isEmpty;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * throttle [函数节流：保证N ms后执行一次]
 * @param  {[Function]} func [执行函数]
 * @param  {[Number]} delay [执行间隔，单位毫秒（ms）]
 * @return {[Function]} _func [节流函数]
 * http://demo.nimius.net/debounce_throttle
 */

var throttle = function throttle(func, delay) {
    var timer = void 0;
    var context = void 0;
    var args = void 0;
    var lastTime = void 0;
    var currTime = void 0;
    return function () {
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
            timer = setTimeout(function () {
                func.apply(context, args);
            }, delay);
        }
    };
};

exports.default = throttle;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _isNumber = __webpack_require__(2);

var _isNumber2 = _interopRequireDefault(_isNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var numRound = function numRound() {
    var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var bit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    var zeroize = arguments[2];

    if (!(0, _isNumber2.default)(num)) {
        return num;
    }

    var bitPercent = Math.pow(10, bit);
    var roundNum = Math.round(num * bitPercent) / bitPercent;

    if (zeroize) {
        var dot = '.';
        roundNum += '';
        if (roundNum.indexOf(dot) < 0) {
            roundNum += dot;
        }
        var numData = roundNum.split(dot);
        var integerPart = numData[0];
        var decimalPart = numData[1];
        while (decimalPart.length < bit) {
            decimalPart += '0';
        }
        return '' + integerPart + dot + decimalPart;
    }

    return roundNum;
}; /**
    * numRound [数值指定位数四舍五入]
    * @param  {[Number]} num [源数据]
    * @param  {[Number]} bit = 2 [保留位数，默认2]
    * @param  {[Boolean]} zeroize [位数不足时是否填零]
    * @return {[Number]} roundNum [四舍五入后数值]
    */

exports.default = numRound;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * setScrollTop [设置滚动条距顶部距离]
 * @param  {[Number]} top = 0 [距顶部距离]
 * @param  {[Object]} ele [指定滚动条元素，默认document.documentElement]
 * @return {[Number]} top [设定值]
 */

var setScrollTop = function setScrollTop() {
  var top = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var ele = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;

  ele.scrollTop = top;
  return top;
};

exports.default = setScrollTop;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * on [增加事件监听器]
 * @param  {[Object]} ele = document [事件监听元素]
 * @param  {[String]} event [事件类型]
 * @param  {[Function]} handler [监听回调]
 * @param  {[Boolean]} propagation = false [是否冒泡传递]
 * @return {[Object]} null
 */

var on = function on() {
    var ele = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
    var event = arguments[1];
    var handler = arguments[2];
    var propagation = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    if (ele.addEventListener) {
        ele.addEventListener(event, handler, propagation);
    } else {
        ele.attachEvent("on" + event, handler);
    }
};

exports.default = on;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * off [移出事件监听器]
 * @param  {[Object]} ele = document [事件监听元素]
 * @param  {[String]} event [事件类型]
 * @param  {[Function]} handler [监听回调]
 * @param  {[Boolean]} propagation = false [是否冒泡传递]
 * @return {[Object]} null
 */

var off = function off() {
    var ele = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
    var event = arguments[1];
    var handler = arguments[2];
    var propagation = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    if (ele.removeEventListener) {
        ele.removeEventListener(event, handler, propagation);
    } else {
        ele.detachEvent("on" + event, handler);
    }
};

exports.default = off;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * uniq [数组去重]
 * @param  {[Array]} data [源数据]
 * @param  {[String]} key [重复判断标准，非必须，未传以数组每项做为判断key]
 * @return {[Array]}  uniqData [去重数据]
 */

var uniq = function uniq() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var key = arguments[1];

    var obj = {},
        useKey;
    return data.reduce(function (prev, curr) {
        useKey = JSON.stringify(key ? curr[key] : curr);
        !obj[useKey] && (obj[useKey] = true && prev.push(curr));
        return prev;
    }, []);
};

exports.default = uniq;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var req = __webpack_require__(18);
req.keys().forEach(function (mod) {
    var v = req(mod);
    if (v && v.default) {
        v = v.default;
    }
});

module.exports = __webpack_require__(9);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./asyncLoop.js": 3,
	"./chunk.js": 4,
	"./clone.js": 0,
	"./debounce.js": 5,
	"./deepClone.js": 6,
	"./find.js": 1,
	"./findIndex.js": 7,
	"./getUrlParams.js": 8,
	"./index.js": 9,
	"./isEmpty.js": 10,
	"./isNumber.js": 2,
	"./numRound.js": 12,
	"./off.js": 15,
	"./on.js": 14,
	"./setScrollTop.js": 13,
	"./throttle.js": 11,
	"./uniq.js": 16
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 18;

/***/ })
/******/ ]);
});