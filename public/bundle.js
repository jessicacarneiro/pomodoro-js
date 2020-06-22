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
/*! no static exports found */
/***/ (function(module, exports) {

eval("class App {\n  constructor() {\n    this.workTime = 25;\n    this.isTimerRunning = false;\n\n    this.delay = () => new Promise(resolve => setTimeout(resolve, 1000));\n\n    this.startButtonEl = document.getElementById('start-pomodoro');\n    this.stopButtonEl = document.getElementById('stop-pomodoro');\n    this.spanEl = document.getElementById('time-left');\n    this.registerHandlers();\n    this.render();\n  }\n\n  registerHandlers() {\n    this.startButtonEl.onclick = event => this.startTimer();\n\n    this.stopButtonEl.onclick = event => this.stopTimer();\n  }\n\n  toggleButton() {\n    if (this.startButtonEl.style.display === 'none') {\n      this.stopButtonEl.style.display = 'none';\n      this.startButtonEl.style.display = 'inline-block';\n    } else {\n      this.startButtonEl.style.display = 'none';\n      this.stopButtonEl.style.display = 'inline-block';\n    }\n  }\n\n  resetTimer() {\n    this.workTime = 25;\n    this.render();\n  }\n\n  decreaseTime() {\n    if (this.workTime > 0) {\n      this.workTime--;\n    }\n  }\n\n  async startTimer() {\n    console.log('Starting timer!');\n    this.startButtonEl.style.display = 'none';\n    this.stopButtonEl.style.display = 'inline-block';\n    this.isTimerRunning = true;\n\n    while (this.workTime > 0 && this.isTimerRunning) {\n      await this.delay();\n      this.decreaseTime();\n      this.render();\n    }\n\n    if (this.workTime === 0) {\n      alert('Time is up!');\n      this.resetTimer();\n      this.toggleButton();\n    }\n  }\n\n  stopTimer() {\n    console.log('Stopping timer!');\n    this.isTimerRunning = false;\n    this.toggleButton();\n  }\n\n  render() {\n    this.spanEl.innerHTML = this.workTime;\n  }\n\n}\n\nconst app = new App();\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });