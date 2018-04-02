/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * [description] 类似lodash _.find()，在指定数组中查找包含指定键值的子项并返回该子项
 * @param  {[type]} arrayData [{id:1,name:'a',...},{id:2,name:'b',...}]
 * @param  {[type]} keyItem   {id:1,name:'a'}
 * @return {[type]} findItem  {id:1,name:'a',...}
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * [description] 对象或数组浅拷贝
 * @param  {[Object]} obj
 * @param  {[Object]} deepFlag  深递归拷贝
 * @return {[Object]} newObj
 */

var clone = function clone(obj, deepFlag) {
    var newObj = obj.constructor === Array ? [] : {};
    if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
        return obj;
    } else {
        for (var i in obj) {
            if (obj.hasOwnProperty(i)) {
                if (deepFlag) {
                    newObj[i] = clone(obj[i]);
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(3);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.uTools = _index2.default;

exports.default = _index2.default;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _find = __webpack_require__(0);

var _find2 = _interopRequireDefault(_find);

var _findIndex = __webpack_require__(4);

var _findIndex2 = _interopRequireDefault(_findIndex);

var _isEmpty = __webpack_require__(5);

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _clone = __webpack_require__(1);

var _clone2 = _interopRequireDefault(_clone);

var _deepClone = __webpack_require__(6);

var _deepClone2 = _interopRequireDefault(_deepClone);

var _getUrlParams = __webpack_require__(7);

var _getUrlParams2 = _interopRequireDefault(_getUrlParams);

var _asyncLoop = __webpack_require__(8);

var _asyncLoop2 = _interopRequireDefault(_asyncLoop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    find: _find2.default,
    findIndex: _findIndex2.default,
    isEmpty: _isEmpty2.default,
    clone: _clone2.default,
    deepClone: _deepClone2.default,
    getUrlParams: _getUrlParams2.default,
    asyncLoop: _asyncLoop2.default
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _find = __webpack_require__(0);

var _find2 = _interopRequireDefault(_find);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var findIndex = function findIndex(arrayData, keyItem) {
  return (0, _find2.default)(arrayData, keyItem, true);
}; /**
    * [description] 类似lodash _.findIndex()，在指定数组中查找包含指定键值的子项并返回该子项序数
    * @param  {[type]} arrayData [{id:1,...},{id:2,...}]
    * @param  {[type]} keyItem   {id:1}
    * @return {[type]} findIndex  0
    */

exports.default = findIndex;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * [description] 判断是否为空对象
 * @param  {[Object]} obj
 * @return {[boolean]}
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _clone = __webpack_require__(1);

var _clone2 = _interopRequireDefault(_clone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var deepClone = function deepClone(obj) {
  return (0, _clone2.default)(obj, true);
}; /**
    * [description] 对象或数组深拷贝
    * @param  {[Object]} obj
    * @return {[Object]} newObj
    */
exports.default = deepClone;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * getUrlParams[获取url参数，默认取当前路由参数]
 * @param  {[String]} url [含参数url]
 * @return {[Object]}     [params]
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
/**
 * asyncLoop[异步循环]
 * @param  {[Array]} arrData [待操作数据]
 * @param  {[Func]} asyncFn [异步操作回调(loop方法, 当前操作item, 当前index)]
 * @param  {[type]} doneFn  [循环结束回调]
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

/***/ })
/******/ ]);