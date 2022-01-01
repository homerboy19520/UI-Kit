/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/alert/alert.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/alert/alert.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var icons = document.querySelectorAll(".alert__svg");
var buttonText = document.querySelectorAll(".alert__button-text");
icons.forEach(function (icon) {
  icon.addEventListener("click", function () {
    var button = icon.closest(".alert__modal");

    if (button) {
      button.classList.add("closed");
    }
  });
});
var button = document.querySelectorAll(".alert__button-red");
button.forEach(function (button) {
  button.addEventListener("click", function () {
    var modal = button.closest(".alert__red");

    if (modal) {
      modal.classList.add("closed");
    }
  });
});

/***/ }),

/***/ "./src/blocks/modules/breadcrumbs/breadcrumbs.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/breadcrumbs/breadcrumbs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/buttons-big/buttons-big.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/buttons-big/buttons-big.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/buttons-small/buttons-small.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/buttons-small/buttons-small.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/calendar/calendar.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/calendar/calendar.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var litepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! litepicker */ "./node_modules/litepicker/dist/litepicker.umd.js");
/* harmony import */ var litepicker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(litepicker__WEBPACK_IMPORTED_MODULE_0__);

var picker = new litepicker__WEBPACK_IMPORTED_MODULE_0___default.a({
  element: document.getElementById("datepicker-arrival"),
  singleMode: false,
  format: "DD-MM-YY",
  numberOfMonths: 1,
  showTooltip: true,
  position: "bottom left",
  inlineMode: true,
  selectForward: true
});

/***/ }),

/***/ "./src/blocks/modules/checkbox-styles/checkbox-styles.js":
/*!***************************************************************!*\
  !*** ./src/blocks/modules/checkbox-styles/checkbox-styles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/checkbox/checkbox.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/checkbox/checkbox.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/drag-drop/drag-drop.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/drag-drop/drag-drop.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Горизонтальный лоудер большой
var button = document.querySelector(".drag-drop__button");
var loader = document.querySelector(".drag-drop__loader");
var loaderActive = document.querySelector(".drag-drop__loader-progress");
var loaderActiveRound = document.querySelector(".drag-drop__svg");
var text = document.querySelector(".drag-drop__text_download");
button.addEventListener("click", function () {
  text.classList.add("drag-drop__text_active");

  function counter(ms, className) {
    var counter = 0;
    var interval = setInterval(function () {
      document.querySelector(className).innerHTML = ++counter;
      addResult();

      if (counter === 100) {
        text.classList.remove("drag-drop__text_active");
        clearInterval(interval);
      } else {
        false;
      }
    }, ms);
  }

  counter(20, ".drag-drop__numbers");
});

function addResult() {
  var progress = document.querySelector(".drag-drop__numbers").innerHTML;
  loaderActive.style.width = "".concat(progress, "%");
}

addResult(); // круглый лоудер

var buttonSvg = document.querySelector(".drag-drop__button_upload");
var textSvg = document.querySelector("#count").innerHTML.trim();
var louder = document.querySelector(".drag-drop__circle");
buttonSvg.addEventListener("click", function () {
  louder.classList.remove("drag-drop__circle_done");

  function counter(ms, className) {
    var counter = 0;
    var interval = setInterval(function () {
      document.querySelector("#count").innerHTML = ++counter;
      addResultRound();

      if (counter === 100) {
        clearInterval(interval);
        louder.classList.add("drag-drop__circle_done");
      } else {
        false;
      }
    }, ms);
  }

  counter(20, "#textSvg"); // counter принимает в себя по дефолту 20млс
});

function addResultRound() {
  var progress = document.querySelector("#count").innerHTML;
  var i = louder.style.strokeDashoffset = "".concat(314 - progress * 3.14);
  console.log(i);
}

addResultRound(); // Горизонтальный лоудер для файлов

var uploadsbButton = document.querySelector(".drag-drop__button_uploads");
var uploadsProgress = document.querySelector(".drag-drop__progress");
uploadsbButton.addEventListener("click", function () {
  function counter(ms) {
    var counter = 0;
    var interval = setInterval(function () {
      ++counter;
      uploadsProgress.style.width = "".concat(counter, "%");

      if (counter === 100) {
        clearInterval(interval);
      } else {
        false;
      }
    }, ms);
  }

  counter(20); // counter принимает в себя по дефолту 20млс
});

/***/ }),

/***/ "./src/blocks/modules/horizontally/horizontally.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/horizontally/horizontally.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/input/input.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/input/input.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! choices.js */ "./node_modules/choices.js/public/assets/scripts/choices.js");
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(choices_js__WEBPACK_IMPORTED_MODULE_0__);
var input = document.querySelector(".input");


if (input) {
  var choicesTwo = new choices_js__WEBPACK_IMPORTED_MODULE_0___default.a(".input__select", {
    searchEnabled: false,
    itemSelectText: ""
  });
  var choicesThree = new choices_js__WEBPACK_IMPORTED_MODULE_0___default.a(".input__select-two", {
    searchEnabled: false,
    itemSelectText: ""
  });
}

/***/ }),

/***/ "./src/blocks/modules/list/list.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/list/list.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var listButton = document.querySelectorAll(".list__button");
var items = document.querySelectorAll(".list__item");
var leftButton = listButton[0];
var rightButton = listButton[1];
var count = 0;
items[count].classList.add("list__item_active");

var buttonsVisible = function buttonsVisible(number, button) {
  if (count === number) {
    button.classList.add("list__button_disable");
  } else {
    button.classList.remove("list__button_disable");
  }
};

buttonsVisible(4, rightButton);
buttonsVisible(0, leftButton);

var removeAllActive = function removeAllActive() {
  items.forEach(function (item) {
    return item.classList.remove("list__item_active");
  });
};

var plus = function plus() {
  if (count >= 0 && count < 4) {
    // 0-3
    removeAllActive();
    count = count + 1;
    items[count].classList.add("list__item_active");
  }

  buttonsVisible(4, rightButton);
  buttonsVisible(0, leftButton);
};

var minus = function minus() {
  if (count > 0 && count <= 4) {
    //1-4
    removeAllActive();
    count = count - 1;
    items[count].classList.add("list__item_active");
  }

  buttonsVisible(4, rightButton);
  buttonsVisible(0, leftButton);
};

rightButton.addEventListener("click", plus);
leftButton.addEventListener("click", minus);

/***/ }),

/***/ "./src/blocks/modules/modal/modal.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/modal/modal.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var icons = document.querySelectorAll(".modal__icon");
icons.forEach(function (icon) {
  icon.addEventListener("click", function () {
    var button = icon.closest(".modal__window");

    if (button) {
      button.classList.add("closed");
    }
  });
});

/***/ }),

/***/ "./src/blocks/modules/navigation/navigation.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/navigation/navigation.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! choices.js */ "./node_modules/choices.js/public/assets/scripts/choices.js");
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(choices_js__WEBPACK_IMPORTED_MODULE_0__);

var navigation = document.querySelector(".navigation");

if (navigation) {
  var choices = new choices_js__WEBPACK_IMPORTED_MODULE_0___default.a(".navigation__select", {
    searchEnabled: false,
    itemSelectText: ""
  });
}

/***/ }),

/***/ "./src/blocks/modules/option/option.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/option/option.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/pagination/pagination.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/pagination/pagination.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/radio-buttons/radio-buttons.js":
/*!***********************************************************!*\
  !*** ./src/blocks/modules/radio-buttons/radio-buttons.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/range/range.js":
/*!*******************************************!*\
  !*** ./src/blocks/modules/range/range.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nouislider */ "./node_modules/nouislider/dist/nouislider.js");
/* harmony import */ var nouislider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nouislider__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_libs_wNumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../js/libs/wNumb */ "./src/js/libs/wNumb.js");
/* harmony import */ var _js_libs_wNumb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_libs_wNumb__WEBPACK_IMPORTED_MODULE_1__);


var single = document.getElementById("single");
nouislider__WEBPACK_IMPORTED_MODULE_0___default.a.create(single, {
  start: [50],
  connect: [true, false],
  range: {
    min: 0,
    max: 100
  }
});
var duo = document.getElementById("duo");
nouislider__WEBPACK_IMPORTED_MODULE_0___default.a.create(duo, {
  start: [30, 70],
  connect: true,
  range: {
    min: 0,
    max: 100
  }
});
var singleOption = document.getElementById("singleOption");
nouislider__WEBPACK_IMPORTED_MODULE_0___default.a.create(singleOption, {
  start: [15],
  connect: [true, false],
  range: {
    min: 0,
    max: 30
  },
  tooltips: [_js_libs_wNumb__WEBPACK_IMPORTED_MODULE_1___default()({
    decimals: 0
  })]
});
var duoOption = document.getElementById("duoOption");
nouislider__WEBPACK_IMPORTED_MODULE_0___default.a.create(duoOption, {
  start: [15, 34],
  connect: true,
  range: {
    min: 0,
    max: 50
  },
  tooltips: [_js_libs_wNumb__WEBPACK_IMPORTED_MODULE_1___default()({
    decimals: 0
  }), _js_libs_wNumb__WEBPACK_IMPORTED_MODULE_1___default()({
    decimals: 0
  })]
});
var duoIcons = document.getElementById("duoIcons");
nouislider__WEBPACK_IMPORTED_MODULE_0___default.a.create(duoIcons, {
  start: [15, 34],
  connect: [false, true, false],
  range: {
    min: 0,
    max: 50
  },
  tooltips: [_js_libs_wNumb__WEBPACK_IMPORTED_MODULE_1___default()({
    decimals: 0
  }), _js_libs_wNumb__WEBPACK_IMPORTED_MODULE_1___default()({
    decimals: 0
  })]
});

/***/ }),

/***/ "./src/blocks/modules/search-tab/search-tab.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/search-tab/search-tab.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var line = document.querySelectorAll(".search-tab__line");
line.forEach(function (item) {
  item.addEventListener("click", function () {
    var checkbox = item.querySelector(".checkbox__input");
    checkbox.toggleAttribute("checked");
  });
});

/***/ }),

/***/ "./src/blocks/modules/size-buttons/size-buttons.js":
/*!*********************************************************!*\
  !*** ./src/blocks/modules/size-buttons/size-buttons.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/tab-buttons/tab-buttons.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/tab-buttons/tab-buttons.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/tables/tables.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/tables/tables.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/tabs-icons/tabs-icons.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/tabs-icons/tabs-icons.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/tabs/tabs.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/tabs/tabs.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/tags/tags.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/tags/tags.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var tags = document.querySelectorAll(".tags__button");

if (tags) {
  tags.forEach(function (tag) {
    tag.addEventListener("click", function () {
      var wrapper = tag.closest(".tags__box");

      if (wrapper) {
        wrapper.classList.add("closed");
      }
    });
  });
}

/***/ }),

/***/ "./src/blocks/modules/vertically/vertically.js":
/*!*****************************************************!*\
  !*** ./src/blocks/modules/vertically/vertically.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/wizzard/wizzard.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/wizzard/wizzard.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_buttons_big_buttons_big__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/buttons-big/buttons-big */ "./src/blocks/modules/buttons-big/buttons-big.js");
/* harmony import */ var _modules_buttons_big_buttons_big__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_buttons_big_buttons_big__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_buttons_small_buttons_small__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/buttons-small/buttons-small */ "./src/blocks/modules/buttons-small/buttons-small.js");
/* harmony import */ var _modules_buttons_small_buttons_small__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_buttons_small_buttons_small__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_tags_tags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/tags/tags */ "./src/blocks/modules/tags/tags.js");
/* harmony import */ var _modules_tags_tags__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_tags_tags__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_radio_buttons_radio_buttons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/radio-buttons/radio-buttons */ "./src/blocks/modules/radio-buttons/radio-buttons.js");
/* harmony import */ var _modules_radio_buttons_radio_buttons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_radio_buttons_radio_buttons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_tab_buttons_tab_buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/tab-buttons/tab-buttons */ "./src/blocks/modules/tab-buttons/tab-buttons.js");
/* harmony import */ var _modules_tab_buttons_tab_buttons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_tab_buttons_tab_buttons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_size_buttons_size_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/size-buttons/size-buttons */ "./src/blocks/modules/size-buttons/size-buttons.js");
/* harmony import */ var _modules_size_buttons_size_buttons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_size_buttons_size_buttons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_tabs_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/tabs/tabs */ "./src/blocks/modules/tabs/tabs.js");
/* harmony import */ var _modules_tabs_tabs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_tabs_tabs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modules_tabs_icons_tabs_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/tabs-icons/tabs-icons */ "./src/blocks/modules/tabs-icons/tabs-icons.js");
/* harmony import */ var _modules_tabs_icons_tabs_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_modules_tabs_icons_tabs_icons__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _modules_breadcrumbs_breadcrumbs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/breadcrumbs/breadcrumbs */ "./src/blocks/modules/breadcrumbs/breadcrumbs.js");
/* harmony import */ var _modules_breadcrumbs_breadcrumbs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_modules_breadcrumbs_breadcrumbs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _modules_wizzard_wizzard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! %modules%/wizzard/wizzard */ "./src/blocks/modules/wizzard/wizzard.js");
/* harmony import */ var _modules_wizzard_wizzard__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_modules_wizzard_wizzard__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _modules_horizontally_horizontally__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! %modules%/horizontally/horizontally */ "./src/blocks/modules/horizontally/horizontally.js");
/* harmony import */ var _modules_horizontally_horizontally__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_modules_horizontally_horizontally__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _modules_vertically_vertically__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! %modules%/vertically/vertically */ "./src/blocks/modules/vertically/vertically.js");
/* harmony import */ var _modules_vertically_vertically__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_modules_vertically_vertically__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _modules_pagination_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! %modules%/pagination/pagination */ "./src/blocks/modules/pagination/pagination.js");
/* harmony import */ var _modules_pagination_pagination__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_modules_pagination_pagination__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _modules_list_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! %modules%/list/list */ "./src/blocks/modules/list/list.js");
/* harmony import */ var _modules_list_list__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_modules_list_list__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _modules_navigation_navigation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! %modules%/navigation/navigation */ "./src/blocks/modules/navigation/navigation.js");
/* harmony import */ var _modules_alert_alert__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! %modules%/alert/alert */ "./src/blocks/modules/alert/alert.js");
/* harmony import */ var _modules_alert_alert__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_modules_alert_alert__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _modules_modal_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! %modules%/modal/modal */ "./src/blocks/modules/modal/modal.js");
/* harmony import */ var _modules_modal_modal__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_modules_modal_modal__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _modules_tables_tables__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! %modules%/tables/tables */ "./src/blocks/modules/tables/tables.js");
/* harmony import */ var _modules_tables_tables__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_modules_tables_tables__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _modules_search_tab_search_tab__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! %modules%/search-tab/search-tab */ "./src/blocks/modules/search-tab/search-tab.js");
/* harmony import */ var _modules_search_tab_search_tab__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_modules_search_tab_search_tab__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _modules_input_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! %modules%/input/input */ "./src/blocks/modules/input/input.js");
/* harmony import */ var _modules_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! %modules%/checkbox/checkbox */ "./src/blocks/modules/checkbox/checkbox.js");
/* harmony import */ var _modules_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_modules_checkbox_checkbox__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _modules_checkbox_styles_checkbox_styles__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! %modules%/checkbox-styles/checkbox-styles */ "./src/blocks/modules/checkbox-styles/checkbox-styles.js");
/* harmony import */ var _modules_checkbox_styles_checkbox_styles__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_modules_checkbox_styles_checkbox_styles__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _modules_calendar_calendar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! %modules%/calendar/calendar */ "./src/blocks/modules/calendar/calendar.js");
/* harmony import */ var _modules_option_option__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! %modules%/option/option */ "./src/blocks/modules/option/option.js");
/* harmony import */ var _modules_option_option__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_modules_option_option__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _modules_range_range__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! %modules%/range/range */ "./src/blocks/modules/range/range.js");
/* harmony import */ var _modules_drag_drop_drag_drop__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! %modules%/drag-drop/drag-drop */ "./src/blocks/modules/drag-drop/drag-drop.js");
/* harmony import */ var _modules_drag_drop_drag_drop__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_modules_drag_drop_drag_drop__WEBPACK_IMPORTED_MODULE_25__);



























/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _libs_wNumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libs/wNumb */ "./src/js/libs/wNumb.js");
/* harmony import */ var _libs_wNumb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_libs_wNumb__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/js/libs/wNumb.js":
/*!******************************!*\
  !*** ./src/js/libs/wNumb.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function () {
  "use strict";

  var FormatOptions = ["decimals", "thousand", "mark", "prefix", "suffix", "encoder", "decoder", "negativeBefore", "negative", "edit", "undo"]; // General
  // Reverse a string

  function strReverse(a) {
    return a.split("").reverse().join("");
  } // Check if a string starts with a specified prefix.


  function strStartsWith(input, match) {
    return input.substring(0, match.length) === match;
  } // Check is a string ends in a specified suffix.


  function strEndsWith(input, match) {
    return input.slice(-1 * match.length) === match;
  } // Throw an error if formatting options are incompatible.


  function throwEqualError(F, a, b) {
    if ((F[a] || F[b]) && F[a] === F[b]) {
      throw new Error(a);
    }
  } // Check if a number is finite and not NaN


  function isValidNumber(input) {
    return typeof input === "number" && isFinite(input);
  } // Provide rounding-accurate toFixed method.
  // Borrowed: http://stackoverflow.com/a/21323330/775265


  function toFixed(value, exp) {
    value = value.toString().split("e");
    value = Math.round(+(value[0] + "e" + (value[1] ? +value[1] + exp : exp)));
    value = value.toString().split("e");
    return (+(value[0] + "e" + (value[1] ? +value[1] - exp : -exp))).toFixed(exp);
  } // Formatting
  // Accept a number as input, output formatted string.


  function formatTo(decimals, thousand, mark, prefix, suffix, encoder, decoder, negativeBefore, negative, edit, undo, input) {
    var originalInput = input,
        inputIsNegative,
        inputPieces,
        inputBase,
        inputDecimals = "",
        output = ""; // Apply user encoder to the input.
    // Expected outcome: number.

    if (encoder) {
      input = encoder(input);
    } // Stop if no valid number was provided, the number is infinite or NaN.


    if (!isValidNumber(input)) {
      return false;
    } // Rounding away decimals might cause a value of -0
    // when using very small ranges. Remove those cases.


    if (decimals !== false && parseFloat(input.toFixed(decimals)) === 0) {
      input = 0;
    } // Formatting is done on absolute numbers,
    // decorated by an optional negative symbol.


    if (input < 0) {
      inputIsNegative = true;
      input = Math.abs(input);
    } // Reduce the number of decimals to the specified option.


    if (decimals !== false) {
      input = toFixed(input, decimals);
    } // Transform the number into a string, so it can be split.


    input = input.toString(); // Break the number on the decimal separator.

    if (input.indexOf(".") !== -1) {
      inputPieces = input.split(".");
      inputBase = inputPieces[0];

      if (mark) {
        inputDecimals = mark + inputPieces[1];
      }
    } else {
      // If it isn't split, the entire number will do.
      inputBase = input;
    } // Group numbers in sets of three.


    if (thousand) {
      inputBase = strReverse(inputBase).match(/.{1,3}/g);
      inputBase = strReverse(inputBase.join(strReverse(thousand)));
    } // If the number is negative, prefix with negation symbol.


    if (inputIsNegative && negativeBefore) {
      output += negativeBefore;
    } // Prefix the number


    if (prefix) {
      output += prefix;
    } // Normal negative option comes after the prefix. Defaults to '-'.


    if (inputIsNegative && negative) {
      output += negative;
    } // Append the actual number.


    output += inputBase;
    output += inputDecimals; // Apply the suffix.

    if (suffix) {
      output += suffix;
    } // Run the output through a user-specified post-formatter.


    if (edit) {
      output = edit(output, originalInput);
    } // All done.


    return output;
  } // Accept a sting as input, output decoded number.


  function formatFrom(decimals, thousand, mark, prefix, suffix, encoder, decoder, negativeBefore, negative, edit, undo, input) {
    var originalInput = input,
        inputIsNegative,
        output = ""; // User defined pre-decoder. Result must be a non empty string.

    if (undo) {
      input = undo(input);
    } // Test the input. Can't be empty.


    if (!input || typeof input !== "string") {
      return false;
    } // If the string starts with the negativeBefore value: remove it.
    // Remember is was there, the number is negative.


    if (negativeBefore && strStartsWith(input, negativeBefore)) {
      input = input.replace(negativeBefore, "");
      inputIsNegative = true;
    } // Repeat the same procedure for the prefix.


    if (prefix && strStartsWith(input, prefix)) {
      input = input.replace(prefix, "");
    } // And again for negative.


    if (negative && strStartsWith(input, negative)) {
      input = input.replace(negative, "");
      inputIsNegative = true;
    } // Remove the suffix.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice


    if (suffix && strEndsWith(input, suffix)) {
      input = input.slice(0, -1 * suffix.length);
    } // Remove the thousand grouping.


    if (thousand) {
      input = input.split(thousand).join("");
    } // Set the decimal separator back to period.


    if (mark) {
      input = input.replace(mark, ".");
    } // Prepend the negative symbol.


    if (inputIsNegative) {
      output += "-";
    } // Add the number


    output += input; // Trim all non-numeric characters (allow '.' and '-');

    output = output.replace(/[^0-9\.\-.]/g, ""); // The value contains no parse-able number.

    if (output === "") {
      return false;
    } // Covert to number.


    output = Number(output); // Run the user-specified post-decoder.

    if (decoder) {
      output = decoder(output);
    } // Check is the output is valid, otherwise: return false.


    if (!isValidNumber(output)) {
      return false;
    }

    return output;
  } // Framework
  // Validate formatting options


  function validate(inputOptions) {
    var i,
        optionName,
        optionValue,
        filteredOptions = {};

    if (inputOptions["suffix"] === undefined) {
      inputOptions["suffix"] = inputOptions["postfix"];
    }

    for (i = 0; i < FormatOptions.length; i += 1) {
      optionName = FormatOptions[i];
      optionValue = inputOptions[optionName];

      if (optionValue === undefined) {
        // Only default if negativeBefore isn't set.
        if (optionName === "negative" && !filteredOptions.negativeBefore) {
          filteredOptions[optionName] = "-"; // Don't set a default for mark when 'thousand' is set.
        } else if (optionName === "mark" && filteredOptions.thousand !== ".") {
          filteredOptions[optionName] = ".";
        } else {
          filteredOptions[optionName] = false;
        } // Floating points in JS are stable up to 7 decimals.

      } else if (optionName === "decimals") {
        if (optionValue >= 0 && optionValue < 8) {
          filteredOptions[optionName] = optionValue;
        } else {
          throw new Error(optionName);
        } // These options, when provided, must be functions.

      } else if (optionName === "encoder" || optionName === "decoder" || optionName === "edit" || optionName === "undo") {
        if (typeof optionValue === "function") {
          filteredOptions[optionName] = optionValue;
        } else {
          throw new Error(optionName);
        } // Other options are strings.

      } else {
        if (typeof optionValue === "string") {
          filteredOptions[optionName] = optionValue;
        } else {
          throw new Error(optionName);
        }
      }
    } // Some values can't be extracted from a
    // string if certain combinations are present.


    throwEqualError(filteredOptions, "mark", "thousand");
    throwEqualError(filteredOptions, "prefix", "negative");
    throwEqualError(filteredOptions, "prefix", "negativeBefore");
    return filteredOptions;
  } // Pass all options as function arguments


  function passAll(options, method, input) {
    var i,
        args = []; // Add all options in order of FormatOptions

    for (i = 0; i < FormatOptions.length; i += 1) {
      args.push(options[FormatOptions[i]]);
    } // Append the input, then call the method, presenting all
    // options as arguments.


    args.push(input);
    return method.apply("", args);
  }

  function wNumb(options) {
    if (!(this instanceof wNumb)) {
      return new wNumb(options);
    }

    if (_typeof(options) !== "object") {
      return;
    }

    options = validate(options); // Call 'formatTo' with proper arguments.

    this.to = function (input) {
      return passAll(options, formatTo, input);
    }; // Call 'formatFrom' with proper arguments.


    this.from = function (input) {
      return passAll(options, formatFrom, input);
    };
  }

  return wNumb;
});

/***/ })

/******/ });
//# sourceMappingURL=main.js.map