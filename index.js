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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
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
    var newObj = obj.constructor === Array ? [] : {};
    if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
        return obj;
    } else {
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                if (deepFlag) {
                    newObj[i] = clone(obj[i], deepFlag);
                } else {
                    newObj[i] = obj[i];
                }
            }
        }
    }
    return newObj;
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
/* 5 */
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
/* 6 */
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * getUrlParams [获取url参数，默认取当前路由参数]
 * @param  {[String]} url [含参数url]
 * @return {[Object]} params [参数对象]
 */

var getUrlParams = function getUrlParams(url) {
  var hash = url || window.location.hash;
  var params = {};
  var search = hash.substr(hash.indexOf('?') + 1);
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.numRound = exports.isNumber = exports.sliceArray = exports.throttle = exports.debounce = exports.asyncLoop = exports.getUrlParams = exports.deepClone = exports.clone = exports.isEmpty = exports.findIndex = exports.find = undefined;

var _find = __webpack_require__(1);

var _find2 = _interopRequireDefault(_find);

var _findIndex = __webpack_require__(6);

var _findIndex2 = _interopRequireDefault(_findIndex);

var _isEmpty = __webpack_require__(9);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _clone = __webpack_require__(0);

var _clone2 = _interopRequireDefault(_clone);

var _deepClone = __webpack_require__(5);

var _deepClone2 = _interopRequireDefault(_deepClone);

var _getUrlParams = __webpack_require__(7);

var _getUrlParams2 = _interopRequireDefault(_getUrlParams);

var _asyncLoop = __webpack_require__(3);

var _asyncLoop2 = _interopRequireDefault(_asyncLoop);

var _debounce = __webpack_require__(4);

var _debounce2 = _interopRequireDefault(_debounce);

var _throttle = __webpack_require__(10);

var _throttle2 = _interopRequireDefault(_throttle);

var _sliceArray = __webpack_require__(11);

var _sliceArray2 = _interopRequireDefault(_sliceArray);

var _isNumber = __webpack_require__(2);

var _isNumber2 = _interopRequireDefault(_isNumber);

var _numRound = __webpack_require__(12);

var _numRound2 = _interopRequireDefault(_numRound);

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
exports.sliceArray = _sliceArray2.default;
exports.isNumber = _isNumber2.default;
exports.numRound = _numRound2.default;

/***/ }),
/* 9 */
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
/* 10 */
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * sliceArray [将数组根据指定数分割成多个数组]
 * @param  {[Array]} arrayData [待切分数组]
 * @param  {[Number]} step = 20 [切分间隔，默认20]
 * @return {[Array]}  slicedArray [已切分包裹数组]
 */

var sliceArray = function sliceArray(arrayData) {
    var step = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;

    arrayData = arrayData || [];
    var slicedArray = [];
    for (var i = 0; i < arrayData.length; i += step) {
        slicedArray.push(arrayData.slice(i, i + step));
    }
    return slicedArray;
};

exports.default = sliceArray;

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

var numRound = function numRound(num) {
    var bit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

    if (!(0, _isNumber2.default)(num)) {
        return num;
    }
    var bitPercent = Math.pow(10, bit);
    return Math.round(num * bitPercent) / bitPercent;
}; /**
    * numRound [数值指定位数四舍五入]
    * @param  {[Number]} num [源数据]
    * @param  {[Number]} bit = 2 [保留位数，默认2]
    * @return {[Number]} roundNum [四舍五入后数值]
    */

exports.default = numRound;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var req = __webpack_require__(14);
req.keys().forEach(function (mod) {
    var v = req(mod);
    if (v && v.default) {
        v = v.default;
    }
});

module.exports = __webpack_require__(8);

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./asyncLoop.js": 3,
	"./clone.js": 0,
	"./debounce.js": 4,
	"./deepClone.js": 5,
	"./find.js": 1,
	"./findIndex.js": 6,
	"./getUrlParams.js": 7,
	"./index.js": 8,
	"./isEmpty.js": 9,
	"./isNumber.js": 2,
	"./numRound.js": 12,
	"./sliceArray.js": 11,
	"./throttle.js": 10
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
webpackContext.id = 14;

/***/ })
/******/ ]);
});