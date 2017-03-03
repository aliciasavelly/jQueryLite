/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

class DomNodeCollection {
  constructor(nodes) {
    this.nodes = nodes;
  }

  each(cb) {
    this.nodes.forEach( (el) => {
      cb(el);
    })
  }

  html(html) {
    if (typeof html === "string") {
      this.each( (node) => node.innerHTML = html);
    } else {
      return this.nodes[0].innerHTML;
    }
  }

  empty() {
    this.html("");
  }

  append(stuff) {
    if (typeof stuff === "string") {
      this.each( (node) => node.innerHTML += stuff );
    }
  }

  attr(attrName, value) {
    if (typeof value === "string") {
      this.each ( node => node.setAttribute(attrName, value));
    } else {
      return this.nodes[0].getAttribute(attrName);
    }
  }

  addClass(newClass) {
    this.each( node => node.classList.add(newClass));
  }

  removeClass(oldClass) {
    this.each( node => node.classList.remove(oldClass));
  }

  children() {
    let allChildren = [];
    this.each( node => {
      allChildren = allChildren.concat(Array.from(node.children));
    });
    return new DomNodeCollection(allChildren);
  }

  parents() {
    let allParents = [];
    this.each( node => {
      allParents.push(node.parentNode);
    })

    return new DomNodeCollection(allParents);
  }

  find(selector) {
    let matchingNodes = [];



    return new DomNodeCollection(matchingNodes);
  }

  remove() {

  }
}

module.exports = DomNodeCollection;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const DomNodeCollection = __webpack_require__(0);

window.$l = function(selector) {
  if (selector instanceof HTMLElement) {
    console.log(selector);
    arr = Array.from(document.querySelectorAll(selector));
    return new DomNodeCollection(arr);
  }
  // console.log(selector);

  let arr = Array.from(document.querySelectorAll(selector));
  return new DomNodeCollection(arr);
}


/***/ })
/******/ ]);