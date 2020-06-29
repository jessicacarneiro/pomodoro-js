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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\n\nclass App {\n  constructor() {\n    this.workTime = 1;\n    this.isTimerRunning = false;\n    this.totalPomodoros = 0;\n\n    this.delay = () => new Promise(resolve => setTimeout(resolve, 500));\n\n    this.startButtonEl = document.getElementById('start-pomodoro');\n    this.stopButtonEl = document.getElementById('stop-pomodoro');\n    this.spanMinEl = document.getElementById('time-left-min');\n    this.spanSecEl = document.getElementById('time-left-sec');\n    this.spanTotalEl = document.getElementById('total-pomodoros');\n    this.registerHandlers();\n    this.render(this.workTime);\n  }\n\n  registerHandlers() {\n    this.startButtonEl.onclick = event => this.startTimer();\n\n    this.stopButtonEl.onclick = event => this.stopTimer();\n  }\n\n  toggleButton() {\n    if (this.startButtonEl.style.display === 'none') {\n      this.stopButtonEl.style.display = 'none';\n      this.startButtonEl.style.display = 'inline-block';\n    } else {\n      this.startButtonEl.style.display = 'none';\n      this.stopButtonEl.style.display = 'inline-block';\n    }\n  }\n\n  resetTimer() {\n    this.isTimerRunning = false;\n    this.toggleButton();\n    this.render(this.workTime);\n  }\n\n  timeIsUp(endTime) {\n    return Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"subtractTimeInMs\"])(new Date(), endTime) <= 0;\n  }\n\n  decreaseTime(endTime) {\n    let [min, sec] = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"subtractTime\"])(new Date(), endTime);\n    this.render(min, sec);\n  }\n\n  async startTimer() {\n    this.startButtonEl.style.display = 'none';\n    this.stopButtonEl.style.display = 'inline-block';\n    this.isTimerRunning = true;\n    let startTime = new Date();\n    let endTime = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"addMinutesToDate\"])(startTime, this.workTime);\n\n    while (this.isTimerRunning && !this.timeIsUp(endTime)) {\n      await this.delay();\n      this.decreaseTime(endTime);\n    }\n\n    if (this.isTimerRunning) {\n      this.totalPomodoros++;\n    }\n\n    alert('Time is up!');\n    this.resetTimer();\n  }\n\n  stopTimer() {\n    this.isTimerRunning = false;\n  }\n\n  render(minLeft, secLeft = 0) {\n    this.spanMinEl.innerHTML = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"padIntTwo\"])(minLeft);\n    this.spanSecEl.innerHTML = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"padIntTwo\"])(secLeft);\n    this.spanTotalEl.innerHTML = this.totalPomodoros;\n  }\n\n}\n\nconst app = new App();\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: addMinutesToDate, subtractTimeInMs, subtractTime, padIntTwo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addMinutesToDate\", function() { return addMinutesToDate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"subtractTimeInMs\", function() { return subtractTimeInMs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"subtractTime\", function() { return subtractTime; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"padIntTwo\", function() { return padIntTwo; });\nconst addMinutesToDate = (date, minutes) => {\n  return new Date(date.getTime() + minutes * 60000);\n};\n\nconst subtractTimeInMs = (oldDate, newDate) => {\n  return newDate.getTime() - oldDate.getTime();\n};\n\nconst subtractTime = (oldDate, newDate) => {\n  let diffInMiliSec = newDate.getTime() - oldDate.getTime();\n  let min = diffInMiliSec / 60000;\n  let sec = diffInMiliSec / 1000 % 60;\n  return [parseInt(min), parseInt(sec)];\n};\n\nconst padIntTwo = field => {\n  return field.toString().padStart(2, '0');\n};\n\n\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });