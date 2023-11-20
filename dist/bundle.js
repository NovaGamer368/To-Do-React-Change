/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,800;1,100;1,200;1,300;1,400;1,600;1,700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Google font import */\r\n\r\n/* Reset Styles */\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* Variables */\r\n:root {\r\n  --primary-color: #88e0ef;\r\n  --accent-color: #333;\r\n  --neutral-color-1: #f5f4f4;\r\n  --neutral-color-2: #989998;\r\n  --neutral-color-3: #f7f7f6;\r\n  --neutral-color-4: #adacac;\r\n  --white: #fff;\r\n  --font: 'Poppins', sans-serif;\r\n}\r\n\r\n/* Global styles */\r\nhtml {\r\n  overflow-x: hidden;\r\n}\r\n\r\nbody {\r\n  font-size: 16px;\r\n  font-family: var(--font);\r\n  background: var(--primary-color);\r\n  position: relative;\r\n}\r\n\r\nul > li {\r\n  list-style: none;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: var(--accent-color);\r\n  cursor: pointer;\r\n}\r\n\r\n/* Card Styles */\r\n.main-container {\r\n  background-color: var(--white);\r\n  margin: 10% auto 5%;\r\n  width: 50%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;\r\n}\r\n\r\n.title {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 15px;\r\n}\r\n\r\n.title > p {\r\n  font-weight: 600;\r\n  font-size: 20px;\r\n}\r\n\r\n.form-container,\r\n.list {\r\n  display: flex;\r\n  padding: 5px 20px 5px 15px;\r\n  align-items: center;\r\n}\r\n\r\nform {\r\n  width: 100%;\r\n}\r\n\r\nform > input {\r\n  width: 95%;\r\n  border: none;\r\n  height: 40px;\r\n  font-size: 17px;\r\n  font-family: var(--font);\r\n}\r\n\r\nform > input:focus:not(.list form > input) {\r\n  outline: none;\r\n  background: var(--white);\r\n  border: none;\r\n}\r\n\r\nform > input::placeholder {\r\n  font-family: var(--font);\r\n  font-style: italic;\r\n  font-weight: 100;\r\n}\r\n\r\n.enter {\r\n  transform: rotate(90deg);\r\n}\r\n\r\n.bottom {\r\n  border-bottom: solid 2px var(--neutral-color-1);\r\n}\r\n\r\n.clear {\r\n  padding: 15px;\r\n  background: var(--neutral-color-3);\r\n  text-align: center;\r\n}\r\n\r\n.clear > a {\r\n  color: var(--neutral-color-4);\r\n}\r\n\r\n.clear > a:hover {\r\n  color: var(--accent-color);\r\n  text-decoration: underline;\r\n}\r\n\r\n.fas {\r\n  color: var(--neutral-color-2);\r\n  font-size: 14px;\r\n}\r\n\r\n.fas:hover {\r\n  color: var(--accent-color);\r\n}\r\n\r\n.list {\r\n  width: 100%;\r\n  border-bottom: solid 2px var(--neutral-color-1);\r\n  cursor: move;\r\n}\r\n\r\n.list > img {\r\n  width: 26px;\r\n}\r\n\r\n.list .fas {\r\n  font-size: 17px;\r\n}\r\n\r\n.list .fas.drag {\r\n  font-size: 17px;\r\n  cursor: move;\r\n}\r\n\r\n.list > form > input[type=\"text\"].input-value {\r\n  width: 90%;\r\n  margin: 0 10px;\r\n  border: none;\r\n  height: 40px;\r\n  font-size: 1rem;\r\n  font-family: var(--font);\r\n}\r\n\r\n.list > form > input[type=\"text\"]:focus {\r\n  outline: none;\r\n}\r\n\r\n.list > input[type=\"checkbox\"] {\r\n  height: 30px;\r\n  width: 20px;\r\n  cursor: pointer;\r\n  outline: none;\r\n}\r\n\r\n.d-none {\r\n  display: none;\r\n}\r\n\r\n.strike {\r\n  text-decoration: line-through;\r\n  color: green;\r\n}\r\n\r\n.focus {\r\n  background: #fcffa6;\r\n}\r\n\r\n.fa-trash-alt:hover {\r\n  color: red;\r\n}\r\n\r\n.error {\r\n  color: red;\r\n  font-size: 11px;\r\n}\r\n\r\n@keyframes rotate {\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n.rotate {\r\n  -webkit-animation: rotate 1s;\r\n  -moz-animation: rotate 1s;\r\n  animation: rotate 1s;\r\n}\r\n\r\n@keyframes slide-top {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n\r\n  25% {\r\n    opacity: 0.25;\r\n  }\r\n\r\n  50% {\r\n    opacity: 0.5;\r\n  }\r\n\r\n  75% {\r\n    opacity: 0.75;\r\n  }\r\n\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.animate-top {\r\n  position: relative;\r\n  animation: slide-top ease-out 1.5s;\r\n  border: solid 2px green;\r\n}\r\n\r\n.features {\r\n  margin: 1% 25%;\r\n}\r\n\r\n.features ul {\r\n  margin-top: 10px;\r\n}\r\n\r\n.features ul li {\r\n  padding: 5px 5px 5px 10px;\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  .main-container {\r\n    width: 90%;\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) and (min-width: 481px) {\r\n  .main-container {\r\n    width: 80%;\r\n  }\r\n}\r\n\r\n.list.dragging {\r\n  border: solid 1px green;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,uBAAuB;;AAGvB,iBAAiB;AACjB;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA,cAAc;AACd;EACE,wBAAwB;EACxB,oBAAoB;EACpB,0BAA0B;EAC1B,0BAA0B;EAC1B,0BAA0B;EAC1B,0BAA0B;EAC1B,aAAa;EACb,6BAA6B;AAC/B;;AAEA,kBAAkB;AAClB;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,wBAAwB;EACxB,gCAAgC;EAChC,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;EACrB,0BAA0B;EAC1B,eAAe;AACjB;;AAEA,gBAAgB;AAChB;EACE,8BAA8B;EAC9B,mBAAmB;EACnB,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,yCAAyC;AAC3C;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,eAAe;AACjB;;AAEA;;EAEE,aAAa;EACb,0BAA0B;EAC1B,mBAAmB;AACrB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,wBAAwB;EACxB,YAAY;AACd;;AAEA;EACE,wBAAwB;EACxB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,+CAA+C;AACjD;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,0BAA0B;EAC1B,0BAA0B;AAC5B;;AAEA;EACE,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,WAAW;EACX,+CAA+C;EAC/C,YAAY;AACd;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,YAAY;AACd;;AAEA;EACE,UAAU;EACV,cAAc;EACd,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,wBAAwB;AAC1B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,eAAe;EACf,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,6BAA6B;EAC7B,YAAY;AACd;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;EACV,eAAe;AACjB;;AAEA;EACE;IACE,iCAAiC;IACjC,yBAAyB;EAC3B;AACF;;AAEA;EACE,4BAA4B;EAC5B,yBAAyB;EACzB,oBAAoB;AACtB;;AAEA;EACE;IACE,UAAU;EACZ;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,UAAU;EACZ;AACF;;AAEA;EACE,kBAAkB;EAClB,kCAAkC;EAClC,uBAAuB;AACzB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE;IACE,UAAU;EACZ;AACF;;AAEA;EACE;IACE,UAAU;EACZ;AACF;;AAEA;EACE,uBAAuB;AACzB","sourcesContent":["/* Google font import */\r\n@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,800;1,100;1,200;1,300;1,400;1,600;1,700&display=swap');\r\n\r\n/* Reset Styles */\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* Variables */\r\n:root {\r\n  --primary-color: #88e0ef;\r\n  --accent-color: #333;\r\n  --neutral-color-1: #f5f4f4;\r\n  --neutral-color-2: #989998;\r\n  --neutral-color-3: #f7f7f6;\r\n  --neutral-color-4: #adacac;\r\n  --white: #fff;\r\n  --font: 'Poppins', sans-serif;\r\n}\r\n\r\n/* Global styles */\r\nhtml {\r\n  overflow-x: hidden;\r\n}\r\n\r\nbody {\r\n  font-size: 16px;\r\n  font-family: var(--font);\r\n  background: var(--primary-color);\r\n  position: relative;\r\n}\r\n\r\nul > li {\r\n  list-style: none;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: var(--accent-color);\r\n  cursor: pointer;\r\n}\r\n\r\n/* Card Styles */\r\n.main-container {\r\n  background-color: var(--white);\r\n  margin: 10% auto 5%;\r\n  width: 50%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;\r\n}\r\n\r\n.title {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 15px;\r\n}\r\n\r\n.title > p {\r\n  font-weight: 600;\r\n  font-size: 20px;\r\n}\r\n\r\n.form-container,\r\n.list {\r\n  display: flex;\r\n  padding: 5px 20px 5px 15px;\r\n  align-items: center;\r\n}\r\n\r\nform {\r\n  width: 100%;\r\n}\r\n\r\nform > input {\r\n  width: 95%;\r\n  border: none;\r\n  height: 40px;\r\n  font-size: 17px;\r\n  font-family: var(--font);\r\n}\r\n\r\nform > input:focus:not(.list form > input) {\r\n  outline: none;\r\n  background: var(--white);\r\n  border: none;\r\n}\r\n\r\nform > input::placeholder {\r\n  font-family: var(--font);\r\n  font-style: italic;\r\n  font-weight: 100;\r\n}\r\n\r\n.enter {\r\n  transform: rotate(90deg);\r\n}\r\n\r\n.bottom {\r\n  border-bottom: solid 2px var(--neutral-color-1);\r\n}\r\n\r\n.clear {\r\n  padding: 15px;\r\n  background: var(--neutral-color-3);\r\n  text-align: center;\r\n}\r\n\r\n.clear > a {\r\n  color: var(--neutral-color-4);\r\n}\r\n\r\n.clear > a:hover {\r\n  color: var(--accent-color);\r\n  text-decoration: underline;\r\n}\r\n\r\n.fas {\r\n  color: var(--neutral-color-2);\r\n  font-size: 14px;\r\n}\r\n\r\n.fas:hover {\r\n  color: var(--accent-color);\r\n}\r\n\r\n.list {\r\n  width: 100%;\r\n  border-bottom: solid 2px var(--neutral-color-1);\r\n  cursor: move;\r\n}\r\n\r\n.list > img {\r\n  width: 26px;\r\n}\r\n\r\n.list .fas {\r\n  font-size: 17px;\r\n}\r\n\r\n.list .fas.drag {\r\n  font-size: 17px;\r\n  cursor: move;\r\n}\r\n\r\n.list > form > input[type=\"text\"].input-value {\r\n  width: 90%;\r\n  margin: 0 10px;\r\n  border: none;\r\n  height: 40px;\r\n  font-size: 1rem;\r\n  font-family: var(--font);\r\n}\r\n\r\n.list > form > input[type=\"text\"]:focus {\r\n  outline: none;\r\n}\r\n\r\n.list > input[type=\"checkbox\"] {\r\n  height: 30px;\r\n  width: 20px;\r\n  cursor: pointer;\r\n  outline: none;\r\n}\r\n\r\n.d-none {\r\n  display: none;\r\n}\r\n\r\n.strike {\r\n  text-decoration: line-through;\r\n  color: green;\r\n}\r\n\r\n.focus {\r\n  background: #fcffa6;\r\n}\r\n\r\n.fa-trash-alt:hover {\r\n  color: red;\r\n}\r\n\r\n.error {\r\n  color: red;\r\n  font-size: 11px;\r\n}\r\n\r\n@keyframes rotate {\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n.rotate {\r\n  -webkit-animation: rotate 1s;\r\n  -moz-animation: rotate 1s;\r\n  animation: rotate 1s;\r\n}\r\n\r\n@keyframes slide-top {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n\r\n  25% {\r\n    opacity: 0.25;\r\n  }\r\n\r\n  50% {\r\n    opacity: 0.5;\r\n  }\r\n\r\n  75% {\r\n    opacity: 0.75;\r\n  }\r\n\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.animate-top {\r\n  position: relative;\r\n  animation: slide-top ease-out 1.5s;\r\n  border: solid 2px green;\r\n}\r\n\r\n.features {\r\n  margin: 1% 25%;\r\n}\r\n\r\n.features ul {\r\n  margin-top: 10px;\r\n}\r\n\r\n.features ul li {\r\n  padding: 5px 5px 5px 10px;\r\n}\r\n\r\n@media (max-width: 480px) {\r\n  .main-container {\r\n    width: 90%;\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) and (min-width: 481px) {\r\n  .main-container {\r\n    width: 80%;\r\n  }\r\n}\r\n\r\n.list.dragging {\r\n  border: solid 1px green;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/component.js":
/*!**************************!*\
  !*** ./src/component.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Component)
/* harmony export */ });
/* harmony import */ var _images_icons_check_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/icons/check.svg */ "./src/images/icons/check.svg");
/* eslint-disable class-methods-use-this */


class Component {
  static list(val, id) {
    return `
    <li class="list" draggable="true" data-id=${id}>
    <input type="checkbox" id="check" data-id=${id}><img src=${_images_icons_check_svg__WEBPACK_IMPORTED_MODULE_0__} alt="checked icon" class="d-none" data-id=${id}>
    <form>
    <input type="text" class="input-value" value='${val}' data-id=${id}>
    </form>
    <a><i class="fas fa-ellipsis-v drag"></i></a>
    <a class="d-none"  id="delete"><i class="far fa-trash-alt" data-id=${id}></i></a>
  </li>
  `;
  }
}

/***/ }),

/***/ "./src/drag.js":
/*!*********************!*\
  !*** ./src/drag.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Drag)
/* harmony export */ });
class Drag {
  /**
   * @static
   * @function dragStartEnd - handles the drag start and end
   * @memberof Drag
   */
  static dragStartEnd() {
    document.querySelectorAll('li.list').forEach((item) => {
      item.addEventListener('dragstart', () => {
        item.classList.add('dragging');
      });
      item.addEventListener('dragend', () => {
        item.classList.remove('dragging');
      });
    });
  }

  /**
   * @static
   * @method getDragElem - helper method for the drag function
   * @param {HTML ELement} container
   * @param {Number} vertical - the y position of the client
   * @returns element
   * @memberof Drag
   */
  static getDragElem(container, vertical) {
    const dragElems = [...container.querySelectorAll('li.list:not(.dragging)')];
    return dragElems.reduce((closest, elemChild) => {
      const box = elemChild.getBoundingClientRect();
      const offset = vertical - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return {
          offset,
          element: elemChild,
        };
      }

      return closest;
    }, { offset: Number.NEGATIVE_INFINITY }).element;
  }

  /**
   * @static
   * @function dragFunc - handle the drag and drop operation
   * @memberof Drag
   */
  static dragFunc() {
    Drag.dragStartEnd();
    const container = document.querySelector('.todo-list ul');
    container.addEventListener('dragover', (e) => {
      e.preventDefault();
      const afterElem = Drag.getDragElem(container, e.clientY);
      const draggable = document.querySelector('.dragging');
      if (afterElem === undefined || draggable === null) {
        container.appendChild(draggable);
      } else {
        container.insertBefore(draggable, afterElem);
      }
    });
  }
}

/***/ }),

/***/ "./src/features.js":
/*!*************************!*\
  !*** ./src/features.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ featDisplay)
/* harmony export */ });
/* harmony import */ var _images_icons_check_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/icons/check.svg */ "./src/images/icons/check.svg");


function featDisplay() {
  document.querySelector('.features ul').innerHTML = `
    <li><img src=${_images_icons_check_svg__WEBPACK_IMPORTED_MODULE_0__}> Add Todo to list</li>
    <li><img src=${_images_icons_check_svg__WEBPACK_IMPORTED_MODULE_0__}> Edit Todo</li>
    <li><img src=${_images_icons_check_svg__WEBPACK_IMPORTED_MODULE_0__}> Mark as completed</li>
    <li><img src=${_images_icons_check_svg__WEBPACK_IMPORTED_MODULE_0__}> Drag and drop to reorder list</li>
    <li><img src=${_images_icons_check_svg__WEBPACK_IMPORTED_MODULE_0__}> Clear all completed</li>
  `;
}

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Helper)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var _drag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drag.js */ "./src/drag.js");
/* eslint-disable import/no-cycle */



class Helper {
  /**
   * @function formHandler - instance method for handling of form submission
   */
  static formHandler(e) {
    e.preventDefault();
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].add();
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].clear();
    Helper.checkHandler();
    Helper.handleFocus();
    _drag_js__WEBPACK_IMPORTED_MODULE_1__["default"].dragFunc();
  }

  /**
   * @function display - this helps to display the list on load
   */
  static display() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach((item) => {
      const { description, index } = item;
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].render(description, index);
      document.querySelector('#todo').focus();
      Helper.checkHandler();
      Helper.handleFocus();
    });
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].load(tasks);
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].edit();
  }

  /**
   * @function focusHandler - handles the focus on the inputs
   * @param {Event Object} e - The current event
   */
  static focusHandler(e) {
    const item = e.currentTarget;
    const child = item.children;
    const input = child[2].firstElementChild;
    if (document.querySelector('li.list.focus')) {
      const parent = document.querySelector('li.list.focus');
      parent.children[2].firstElementChild.classList.remove('focus');
      parent.children[3].classList.remove('d-none');
      parent.children[4].classList.add('d-none');
      parent.classList.remove('focus');
    }
    input.focus();
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].tog('add', 'focus', input);
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].tog('add', 'd-none', child[3]);
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].tog('rem', 'd-none', child[4]);
    item.classList.add('focus');
    item.querySelector('#delete .far').addEventListener('click', (e) => {
      e.preventDefault();
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].remove(e, e.currentTarget.dataset.id);
    });
    _drag_js__WEBPACK_IMPORTED_MODULE_1__["default"].dragFunc();
  }

  /**
   *
   * @function changeHandler - handles the change on the checkbox
   * @param {Event Object} e - The current event
   */
  static changeHandler(e) {
    const item = e.target;
    const parent = item.parentElement;
    const child = parent.children;
    document.querySelector('.error').innerHTML = '';
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].help('add', item, child[1], child[2].firstElementChild);
    child[1].addEventListener('click', () => {
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].help('rem', item, child[1], child[2].firstElementChild);
      item.checked = false;
    });
    _drag_js__WEBPACK_IMPORTED_MODULE_1__["default"].dragFunc();
  }

  /**
   * @function handleFocus - This handles the focus on inputs
   */
  static handleFocus() {
    document.querySelectorAll('li.list').forEach((item) => item.addEventListener('click', Helper.focusHandler));
  }

  /**
   * @function checkHandler - handles the checkbox change event
   */
  static checkHandler() {
    document.querySelectorAll('input[type="checkbox"]').forEach((item) => item.addEventListener('change', Helper.changeHandler));
  }
}

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Utils)
/* harmony export */ });
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers.js */ "./src/helpers.js");
/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component.js */ "./src/component.js");
/* harmony import */ var _drag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drag.js */ "./src/drag.js");
/* eslint-disable import/no-cycle */




class Utils {
  /**
   * @function render - instance class method
   * @returns - a list element formed from the component
   */
  static render(val, id) {
    document.querySelector('.todo-list ul').insertAdjacentHTML('beforeend', _component_js__WEBPACK_IMPORTED_MODULE_1__["default"].list(val, id));
  }

  /**
   * @function add - instance method that adds new todo to list
   */
  static add() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const todo = document.querySelector('#todo').value;
    if (todo === '') {
      document.querySelector('.error').innerText = 'Todo can not be empty';
      return;
    }
    document.querySelector('.error').innerHTML = '';
    Utils.pushControl(tasks, todo);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    Utils.render(todo, tasks.length);
    Utils.animate(tasks);
    Utils.edit();
  }

  /**
   * @function remove - The remove function to remove a list item
   * @param {Event Object} e - The event object
   * @param {*} id - The id of the item
   */
  static remove(e, id) {
    Utils.delete(id);
    e.currentTarget.closest('ul > li').remove();
    document.querySelector('.todo-list ul').innerHTML = '';
    _helpers_js__WEBPACK_IMPORTED_MODULE_0__["default"].display();
  }

  /**
 * @function clearAll - This handles removing all completed items from the list
 */
  static clearAll() {
    Utils.delete(false);
    document.querySelectorAll('li.list input[type="checkbox"]').forEach((item) => {
      if (item.classList.contains('d-none')) {
        item.remove();
      }
    });
    document.querySelector('.todo-list ul').innerHTML = '';
    _helpers_js__WEBPACK_IMPORTED_MODULE_0__["default"].display();
    _drag_js__WEBPACK_IMPORTED_MODULE_2__["default"].dragFunc();
  }

  /**
   * @function add - instance method that clears input on add
   */
  static clear() {
    document.querySelector('#todo').value = '';
  }

  /**
   * @function pushControl - helper method that pushes items into the tasks array
   * @param {Array} tasks - The array collection of objects
   * @param {String} todo - The todo description string
   */
  static pushControl(tasks, todo, completed = false) {
    tasks.push({
      description: `${todo}`,
      completed,
      index: tasks.length + 1,
    });
  }

  /**
   * @function change - Handles change in completed when checkbox is toggled
   * @param {String} id - The data id of the task
   * @param {Boolean} val - The value of completed
   */
  static change(id, val) {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const filtered = tasks.filter((item) => item.index !== parseInt(id, 10));
    const task = tasks.find((item) => item.index === parseInt(id, 10));
    if (typeof val === 'boolean') {
      task.completed = val;
    } else {
      task.description = val;
    }
    filtered.splice(task.index - 1, 0, task);
    localStorage.setItem('tasks', JSON.stringify(filtered));
  }

  /**
   * @function tog - instance method that toggles CSS class
   * @param  {...any} args - List of arguments
   * @returns the toggling
   */
  static tog(...args) {
    if (args[0] === 'add') return args[2].classList.add(args[1]);
    return args[2].classList.remove(args[1]);
  }

  /**
   * @function help - Add and remove classes
   * @param {String} type - checks if add or remove
   * @param {HTML Element} val1 - the html element to add to or remove from
   * @param {HTML Element} val2 - the html element to add to or remove from
   * @param {HTML Element} val3 - the html element to add to or remove from
   */
  static help(type, val1, val2, val3) {
    if (type === 'add') {
      Utils.tog('add', 'd-none', val1);
      Utils.tog('rem', 'd-none', val2);
      Utils.tog('add', 'strike', val3);
      Utils.change(val1.dataset.id, true);
    }
    if (type === 'rem') {
      Utils.tog('rem', 'd-none', val1);
      Utils.tog('add', 'd-none', val2);
      Utils.tog('rem', 'strike', val3);
      Utils.change(val1.dataset.id, false);
    }
  }

  /**
   * @function load - the load function
   * @param {Array} tasks - The tasks array
   */
  static load(tasks) {
    document.querySelectorAll('li.list').forEach((elem) => {
      const task = tasks.find((item) => item.index === parseInt(elem.children[0].dataset.id, 10));
      if (task.completed) {
        const child = elem.children;
        Utils.help('add', child[0], child[1], child[2].firstElementChild);
        child[1].addEventListener('click', () => Utils.help('rem', child[0], child[1], child[2].firstElementChild));
      }
    });
  }

  /**
   * @function edit - Edits the todo and push changes to localStorage
   */
  static edit() {
    document.querySelectorAll('.list form input').forEach((input) => {
      const inputValue = input.value;
      input.addEventListener('change', (e) => {
        e.preventDefault();
        if (e.target.value === '') {
          e.target.value = inputValue;
          return;
        }
        Utils.change(e.target.dataset.id, e.target.value);
        document.querySelector('.todo-list ul').innerHTML = '';
        _helpers_js__WEBPACK_IMPORTED_MODULE_0__["default"].display();
      });
    });
    document.querySelectorAll('.list form').forEach((form) => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
      });
    });
  }

  /**
   * @function delete - Deletes an item(s) from the list
   * @param {any} val - A boolean or string
   */
  static delete(val) {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    let remTasks;
    if (typeof val === 'string') {
      remTasks = tasks.filter((item) => item.index !== parseInt(val, 10));
    } else {
      remTasks = tasks.filter((item) => item.completed === val);
    }
    localStorage.removeItem('tasks');
    const todos = JSON.parse(localStorage.getItem('tasks')) || [];
    remTasks.forEach((item) => {
      const { description, completed } = item;
      if (completed) {
        Utils.pushControl(todos, description, true);
      } else {
        Utils.pushControl(todos, description);
      }
    });
    localStorage.setItem('tasks', JSON.stringify(todos));
  }

  /**
 * @function animate - animate each list item
 * @param {Array} tasks - The array of tasks
 */
  static animate(tasks) {
    document.querySelectorAll('li.list').forEach((item) => {
      if (parseInt(item.dataset.id, 10) === tasks.length) item.classList.add('animate-top');
      setTimeout(() => { item.classList.remove('animate-top'); }, 1400);
    });
  }
}

/***/ }),

/***/ "./src/images/icons/check.svg":
/*!************************************!*\
  !*** ./src/images/icons/check.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a3375ca6678e54224d89.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers.js */ "./src/helpers.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var _drag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drag.js */ "./src/drag.js");
/* harmony import */ var _features_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features.js */ "./src/features.js");






window.addEventListener('DOMContentLoaded', () => {
  _helpers_js__WEBPACK_IMPORTED_MODULE_1__["default"].display();
  _drag_js__WEBPACK_IMPORTED_MODULE_3__["default"].dragFunc();
  document.querySelector('form').addEventListener('submit', (e) => _helpers_js__WEBPACK_IMPORTED_MODULE_1__["default"].formHandler(e));
  document.querySelector('.enter').addEventListener('click', (e) => _helpers_js__WEBPACK_IMPORTED_MODULE_1__["default"].formHandler(e));
  document.querySelector('.clear a').addEventListener('click', () => _utils_js__WEBPACK_IMPORTED_MODULE_2__["default"].clearAll());
  document.querySelector('#refresh .fas').addEventListener('click', (e) => {
    e.target.classList.add('rotate');
    setTimeout(() => { e.target.classList.remove('rotate'); }, 1000);
  });
  (0,_features_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSztBQUNMO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7VUMzTUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmcUI7QUFDYTtBQUNIO0FBQ0Y7QUFDVztBQUN4QztBQUNBO0FBQ0EsRUFBRSwyREFBYztBQUNoQixFQUFFLHlEQUFhO0FBQ2YsbUVBQW1FLCtEQUFrQjtBQUNyRixvRUFBb0UsK0RBQWtCO0FBQ3RGLHFFQUFxRSwwREFBYztBQUNuRjtBQUNBO0FBQ0EsdUJBQXVCLHNDQUFzQztBQUM3RCxHQUFHO0FBQ0gsRUFBRSx3REFBVztBQUNiLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8vLi9zcmMvZHJhZy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9mZWF0dXJlcy5qcyIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9oZWxwZXJzLmpzIiwid2VicGFjazovL3RvLWRvLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsODAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNjAwOzEsNzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEdvb2dsZSBmb250IGltcG9ydCAqL1xcclxcblxcclxcbi8qIFJlc2V0IFN0eWxlcyAqL1xcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi8qIFZhcmlhYmxlcyAqL1xcclxcbjpyb290IHtcXHJcXG4gIC0tcHJpbWFyeS1jb2xvcjogIzg4ZTBlZjtcXHJcXG4gIC0tYWNjZW50LWNvbG9yOiAjMzMzO1xcclxcbiAgLS1uZXV0cmFsLWNvbG9yLTE6ICNmNWY0ZjQ7XFxyXFxuICAtLW5ldXRyYWwtY29sb3ItMjogIzk4OTk5ODtcXHJcXG4gIC0tbmV1dHJhbC1jb2xvci0zOiAjZjdmN2Y2O1xcclxcbiAgLS1uZXV0cmFsLWNvbG9yLTQ6ICNhZGFjYWM7XFxyXFxuICAtLXdoaXRlOiAjZmZmO1xcclxcbiAgLS1mb250OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi8qIEdsb2JhbCBzdHlsZXMgKi9cXHJcXG5odG1sIHtcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxudWwgPiBsaSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDYXJkIFN0eWxlcyAqL1xcclxcbi5tYWluLWNvbnRhaW5lciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICBtYXJnaW46IDEwJSBhdXRvIDUlO1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI0KSAwIDNweCA4cHg7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlID4gcCB7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1jb250YWluZXIsXFxyXFxuLmxpc3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHBhZGRpbmc6IDVweCAyMHB4IDVweCAxNXB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSA+IGlucHV0IHtcXHJcXG4gIHdpZHRoOiA5NSU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBmb250LXNpemU6IDE3cHg7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XFxyXFxufVxcclxcblxcclxcbmZvcm0gPiBpbnB1dDpmb2N1czpub3QoLmxpc3QgZm9ybSA+IGlucHV0KSB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtID4gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxyXFxufVxcclxcblxcclxcbi5lbnRlciB7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxyXFxufVxcclxcblxcclxcbi5ib3R0b20ge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IHZhcigtLW5ldXRyYWwtY29sb3ItMSk7XFxyXFxufVxcclxcblxcclxcbi5jbGVhciB7XFxyXFxuICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tbmV1dHJhbC1jb2xvci0zKTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNsZWFyID4gYSB7XFxyXFxuICBjb2xvcjogdmFyKC0tbmV1dHJhbC1jb2xvci00KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsZWFyID4gYTpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4uZmFzIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1uZXV0cmFsLWNvbG9yLTIpO1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmFzOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCB2YXIoLS1uZXV0cmFsLWNvbG9yLTEpO1xcclxcbiAgY3Vyc29yOiBtb3ZlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdCA+IGltZyB7XFxyXFxuICB3aWR0aDogMjZweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QgLmZhcyB7XFxyXFxuICBmb250LXNpemU6IDE3cHg7XFxyXFxufVxcclxcblxcclxcbi5saXN0IC5mYXMuZHJhZyB7XFxyXFxuICBmb250LXNpemU6IDE3cHg7XFxyXFxuICBjdXJzb3I6IG1vdmU7XFxyXFxufVxcclxcblxcclxcbi5saXN0ID4gZm9ybSA+IGlucHV0W3R5cGU9XFxcInRleHRcXFwiXS5pbnB1dC12YWx1ZSB7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgbWFyZ2luOiAwIDEwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XFxyXFxufVxcclxcblxcclxcbi5saXN0ID4gZm9ybSA+IGlucHV0W3R5cGU9XFxcInRleHRcXFwiXTpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdCA+IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZC1ub25lIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zdHJpa2Uge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxuICBjb2xvcjogZ3JlZW47XFxyXFxufVxcclxcblxcclxcbi5mb2N1cyB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmNmZmE2O1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtdHJhc2gtYWx0OmhvdmVyIHtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi5lcnJvciB7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbiAgZm9udC1zaXplOiAxMXB4O1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ucm90YXRlIHtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiByb3RhdGUgMXM7XFxyXFxuICAtbW96LWFuaW1hdGlvbjogcm90YXRlIDFzO1xcclxcbiAgYW5pbWF0aW9uOiByb3RhdGUgMXM7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc2xpZGUtdG9wIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDI1JSB7XFxyXFxuICAgIG9wYWNpdHk6IDAuMjU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA1MCUge1xcclxcbiAgICBvcGFjaXR5OiAwLjU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA3NSUge1xcclxcbiAgICBvcGFjaXR5OiAwLjc1O1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5hbmltYXRlLXRvcCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBhbmltYXRpb246IHNsaWRlLXRvcCBlYXNlLW91dCAxLjVzO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAycHggZ3JlZW47XFxyXFxufVxcclxcblxcclxcbi5mZWF0dXJlcyB7XFxyXFxuICBtYXJnaW46IDElIDI1JTtcXHJcXG59XFxyXFxuXFxyXFxuLmZlYXR1cmVzIHVsIHtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5mZWF0dXJlcyB1bCBsaSB7XFxyXFxuICBwYWRkaW5nOiA1cHggNXB4IDVweCAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcXHJcXG4gIC5tYWluLWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkgYW5kIChtaW4td2lkdGg6IDQ4MXB4KSB7XFxyXFxuICAubWFpbi1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC5kcmFnZ2luZyB7XFxyXFxuICBib3JkZXI6IHNvbGlkIDFweCBncmVlbjtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSx1QkFBdUI7O0FBR3ZCLGlCQUFpQjtBQUNqQjtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBLGNBQWM7QUFDZDtFQUNFLHdCQUF3QjtFQUN4QixvQkFBb0I7RUFDcEIsMEJBQTBCO0VBQzFCLDBCQUEwQjtFQUMxQiwwQkFBMEI7RUFDMUIsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYiw2QkFBNkI7QUFDL0I7O0FBRUEsa0JBQWtCO0FBQ2xCO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixnQ0FBZ0M7RUFDaEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDBCQUEwQjtFQUMxQixlQUFlO0FBQ2pCOztBQUVBLGdCQUFnQjtBQUNoQjtFQUNFLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsMEJBQTBCO0VBQzFCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsK0NBQStDO0FBQ2pEOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsK0NBQStDO0VBQy9DLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCxZQUFZO0VBQ1osWUFBWTtFQUNaLGVBQWU7RUFDZix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7QUFDakI7O0FBRUE7RUFDRTtJQUNFLGlDQUFpQztJQUNqQyx5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQ0FBa0M7RUFDbEMsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEdvb2dsZSBmb250IGltcG9ydCAqL1xcclxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsODAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNjAwOzEsNzAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbi8qIFJlc2V0IFN0eWxlcyAqL1xcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi8qIFZhcmlhYmxlcyAqL1xcclxcbjpyb290IHtcXHJcXG4gIC0tcHJpbWFyeS1jb2xvcjogIzg4ZTBlZjtcXHJcXG4gIC0tYWNjZW50LWNvbG9yOiAjMzMzO1xcclxcbiAgLS1uZXV0cmFsLWNvbG9yLTE6ICNmNWY0ZjQ7XFxyXFxuICAtLW5ldXRyYWwtY29sb3ItMjogIzk4OTk5ODtcXHJcXG4gIC0tbmV1dHJhbC1jb2xvci0zOiAjZjdmN2Y2O1xcclxcbiAgLS1uZXV0cmFsLWNvbG9yLTQ6ICNhZGFjYWM7XFxyXFxuICAtLXdoaXRlOiAjZmZmO1xcclxcbiAgLS1mb250OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi8qIEdsb2JhbCBzdHlsZXMgKi9cXHJcXG5odG1sIHtcXHJcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxudWwgPiBsaSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDYXJkIFN0eWxlcyAqL1xcclxcbi5tYWluLWNvbnRhaW5lciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XFxyXFxuICBtYXJnaW46IDEwJSBhdXRvIDUlO1xcclxcbiAgd2lkdGg6IDUwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI0KSAwIDNweCA4cHg7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZzogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlID4gcCB7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9ybS1jb250YWluZXIsXFxyXFxuLmxpc3Qge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHBhZGRpbmc6IDVweCAyMHB4IDVweCAxNXB4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSA+IGlucHV0IHtcXHJcXG4gIHdpZHRoOiA5NSU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBmb250LXNpemU6IDE3cHg7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XFxyXFxufVxcclxcblxcclxcbmZvcm0gPiBpbnB1dDpmb2N1czpub3QoLmxpc3QgZm9ybSA+IGlucHV0KSB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtID4gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KTtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XFxyXFxufVxcclxcblxcclxcbi5lbnRlciB7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxyXFxufVxcclxcblxcclxcbi5ib3R0b20ge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4IHZhcigtLW5ldXRyYWwtY29sb3ItMSk7XFxyXFxufVxcclxcblxcclxcbi5jbGVhciB7XFxyXFxuICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tbmV1dHJhbC1jb2xvci0zKTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmNsZWFyID4gYSB7XFxyXFxuICBjb2xvcjogdmFyKC0tbmV1dHJhbC1jb2xvci00KTtcXHJcXG59XFxyXFxuXFxyXFxuLmNsZWFyID4gYTpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG4uZmFzIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1uZXV0cmFsLWNvbG9yLTIpO1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmFzOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCB2YXIoLS1uZXV0cmFsLWNvbG9yLTEpO1xcclxcbiAgY3Vyc29yOiBtb3ZlO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdCA+IGltZyB7XFxyXFxuICB3aWR0aDogMjZweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QgLmZhcyB7XFxyXFxuICBmb250LXNpemU6IDE3cHg7XFxyXFxufVxcclxcblxcclxcbi5saXN0IC5mYXMuZHJhZyB7XFxyXFxuICBmb250LXNpemU6IDE3cHg7XFxyXFxuICBjdXJzb3I6IG1vdmU7XFxyXFxufVxcclxcblxcclxcbi5saXN0ID4gZm9ybSA+IGlucHV0W3R5cGU9XFxcInRleHRcXFwiXS5pbnB1dC12YWx1ZSB7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgbWFyZ2luOiAwIDEwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udCk7XFxyXFxufVxcclxcblxcclxcbi5saXN0ID4gZm9ybSA+IGlucHV0W3R5cGU9XFxcInRleHRcXFwiXTpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubGlzdCA+IGlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZC1ub25lIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zdHJpa2Uge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxuICBjb2xvcjogZ3JlZW47XFxyXFxufVxcclxcblxcclxcbi5mb2N1cyB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmNmZmE2O1xcclxcbn1cXHJcXG5cXHJcXG4uZmEtdHJhc2gtYWx0OmhvdmVyIHtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbi5lcnJvciB7XFxyXFxuICBjb2xvcjogcmVkO1xcclxcbiAgZm9udC1zaXplOiAxMXB4O1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ucm90YXRlIHtcXHJcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiByb3RhdGUgMXM7XFxyXFxuICAtbW96LWFuaW1hdGlvbjogcm90YXRlIDFzO1xcclxcbiAgYW5pbWF0aW9uOiByb3RhdGUgMXM7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc2xpZGUtdG9wIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIDI1JSB7XFxyXFxuICAgIG9wYWNpdHk6IDAuMjU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA1MCUge1xcclxcbiAgICBvcGFjaXR5OiAwLjU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICA3NSUge1xcclxcbiAgICBvcGFjaXR5OiAwLjc1O1xcclxcbiAgfVxcclxcblxcclxcbiAgMTAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5hbmltYXRlLXRvcCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBhbmltYXRpb246IHNsaWRlLXRvcCBlYXNlLW91dCAxLjVzO1xcclxcbiAgYm9yZGVyOiBzb2xpZCAycHggZ3JlZW47XFxyXFxufVxcclxcblxcclxcbi5mZWF0dXJlcyB7XFxyXFxuICBtYXJnaW46IDElIDI1JTtcXHJcXG59XFxyXFxuXFxyXFxuLmZlYXR1cmVzIHVsIHtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5mZWF0dXJlcyB1bCBsaSB7XFxyXFxuICBwYWRkaW5nOiA1cHggNXB4IDVweCAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcXHJcXG4gIC5tYWluLWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkgYW5kIChtaW4td2lkdGg6IDQ4MXB4KSB7XFxyXFxuICAubWFpbi1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubGlzdC5kcmFnZ2luZyB7XFxyXFxuICBib3JkZXI6IHNvbGlkIDFweCBncmVlbjtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzICovXHJcbmltcG9ydCBjaGVjayBmcm9tICcuL2ltYWdlcy9pY29ucy9jaGVjay5zdmcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IHtcclxuICBzdGF0aWMgbGlzdCh2YWwsIGlkKSB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgPGxpIGNsYXNzPVwibGlzdFwiIGRyYWdnYWJsZT1cInRydWVcIiBkYXRhLWlkPSR7aWR9PlxyXG4gICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiY2hlY2tcIiBkYXRhLWlkPSR7aWR9PjxpbWcgc3JjPSR7Y2hlY2t9IGFsdD1cImNoZWNrZWQgaWNvblwiIGNsYXNzPVwiZC1ub25lXCIgZGF0YS1pZD0ke2lkfT5cclxuICAgIDxmb3JtPlxyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJpbnB1dC12YWx1ZVwiIHZhbHVlPScke3ZhbH0nIGRhdGEtaWQ9JHtpZH0+XHJcbiAgICA8L2Zvcm0+XHJcbiAgICA8YT48aSBjbGFzcz1cImZhcyBmYS1lbGxpcHNpcy12IGRyYWdcIj48L2k+PC9hPlxyXG4gICAgPGEgY2xhc3M9XCJkLW5vbmVcIiAgaWQ9XCJkZWxldGVcIj48aSBjbGFzcz1cImZhciBmYS10cmFzaC1hbHRcIiBkYXRhLWlkPSR7aWR9PjwvaT48L2E+XHJcbiAgPC9saT5cclxuICBgO1xyXG4gIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERyYWcge1xyXG4gIC8qKlxyXG4gICAqIEBzdGF0aWNcclxuICAgKiBAZnVuY3Rpb24gZHJhZ1N0YXJ0RW5kIC0gaGFuZGxlcyB0aGUgZHJhZyBzdGFydCBhbmQgZW5kXHJcbiAgICogQG1lbWJlcm9mIERyYWdcclxuICAgKi9cclxuICBzdGF0aWMgZHJhZ1N0YXJ0RW5kKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGkubGlzdCcpLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoKSA9PiB7XHJcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdkcmFnZ2luZycpO1xyXG4gICAgICB9KTtcclxuICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgKCkgPT4ge1xyXG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnZHJhZ2dpbmcnKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBzdGF0aWNcclxuICAgKiBAbWV0aG9kIGdldERyYWdFbGVtIC0gaGVscGVyIG1ldGhvZCBmb3IgdGhlIGRyYWcgZnVuY3Rpb25cclxuICAgKiBAcGFyYW0ge0hUTUwgRUxlbWVudH0gY29udGFpbmVyXHJcbiAgICogQHBhcmFtIHtOdW1iZXJ9IHZlcnRpY2FsIC0gdGhlIHkgcG9zaXRpb24gb2YgdGhlIGNsaWVudFxyXG4gICAqIEByZXR1cm5zIGVsZW1lbnRcclxuICAgKiBAbWVtYmVyb2YgRHJhZ1xyXG4gICAqL1xyXG4gIHN0YXRpYyBnZXREcmFnRWxlbShjb250YWluZXIsIHZlcnRpY2FsKSB7XHJcbiAgICBjb25zdCBkcmFnRWxlbXMgPSBbLi4uY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpLmxpc3Q6bm90KC5kcmFnZ2luZyknKV07XHJcbiAgICByZXR1cm4gZHJhZ0VsZW1zLnJlZHVjZSgoY2xvc2VzdCwgZWxlbUNoaWxkKSA9PiB7XHJcbiAgICAgIGNvbnN0IGJveCA9IGVsZW1DaGlsZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgY29uc3Qgb2Zmc2V0ID0gdmVydGljYWwgLSBib3gudG9wIC0gYm94LmhlaWdodCAvIDI7XHJcbiAgICAgIGlmIChvZmZzZXQgPCAwICYmIG9mZnNldCA+IGNsb3Nlc3Qub2Zmc2V0KSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIG9mZnNldCxcclxuICAgICAgICAgIGVsZW1lbnQ6IGVsZW1DaGlsZCxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gY2xvc2VzdDtcclxuICAgIH0sIHsgb2Zmc2V0OiBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFkgfSkuZWxlbWVudDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBzdGF0aWNcclxuICAgKiBAZnVuY3Rpb24gZHJhZ0Z1bmMgLSBoYW5kbGUgdGhlIGRyYWcgYW5kIGRyb3Agb3BlcmF0aW9uXHJcbiAgICogQG1lbWJlcm9mIERyYWdcclxuICAgKi9cclxuICBzdGF0aWMgZHJhZ0Z1bmMoKSB7XHJcbiAgICBEcmFnLmRyYWdTdGFydEVuZCgpO1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tbGlzdCB1bCcpO1xyXG4gICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGUpID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBjb25zdCBhZnRlckVsZW0gPSBEcmFnLmdldERyYWdFbGVtKGNvbnRhaW5lciwgZS5jbGllbnRZKTtcclxuICAgICAgY29uc3QgZHJhZ2dhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyYWdnaW5nJyk7XHJcbiAgICAgIGlmIChhZnRlckVsZW0gPT09IHVuZGVmaW5lZCB8fCBkcmFnZ2FibGUgPT09IG51bGwpIHtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZHJhZ2dhYmxlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb250YWluZXIuaW5zZXJ0QmVmb3JlKGRyYWdnYWJsZSwgYWZ0ZXJFbGVtKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IGNoZWNrIGZyb20gJy4vaW1hZ2VzL2ljb25zL2NoZWNrLnN2Zyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmZWF0RGlzcGxheSgpIHtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVhdHVyZXMgdWwnKS5pbm5lckhUTUwgPSBgXHJcbiAgICA8bGk+PGltZyBzcmM9JHtjaGVja30+IEFkZCBUb2RvIHRvIGxpc3Q8L2xpPlxyXG4gICAgPGxpPjxpbWcgc3JjPSR7Y2hlY2t9PiBFZGl0IFRvZG88L2xpPlxyXG4gICAgPGxpPjxpbWcgc3JjPSR7Y2hlY2t9PiBNYXJrIGFzIGNvbXBsZXRlZDwvbGk+XHJcbiAgICA8bGk+PGltZyBzcmM9JHtjaGVja30+IERyYWcgYW5kIGRyb3AgdG8gcmVvcmRlciBsaXN0PC9saT5cclxuICAgIDxsaT48aW1nIHNyYz0ke2NoZWNrfT4gQ2xlYXIgYWxsIGNvbXBsZXRlZDwvbGk+XHJcbiAgYDtcclxufSIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1jeWNsZSAqL1xyXG5pbXBvcnQgVXRpbHMgZnJvbSAnLi91dGlscy5qcyc7XHJcbmltcG9ydCBEcmFnIGZyb20gJy4vZHJhZy5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWxwZXIge1xyXG4gIC8qKlxyXG4gICAqIEBmdW5jdGlvbiBmb3JtSGFuZGxlciAtIGluc3RhbmNlIG1ldGhvZCBmb3IgaGFuZGxpbmcgb2YgZm9ybSBzdWJtaXNzaW9uXHJcbiAgICovXHJcbiAgc3RhdGljIGZvcm1IYW5kbGVyKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIFV0aWxzLmFkZCgpO1xyXG4gICAgVXRpbHMuY2xlYXIoKTtcclxuICAgIEhlbHBlci5jaGVja0hhbmRsZXIoKTtcclxuICAgIEhlbHBlci5oYW5kbGVGb2N1cygpO1xyXG4gICAgRHJhZy5kcmFnRnVuYygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGZ1bmN0aW9uIGRpc3BsYXkgLSB0aGlzIGhlbHBzIHRvIGRpc3BsYXkgdGhlIGxpc3Qgb24gbG9hZFxyXG4gICAqL1xyXG4gIHN0YXRpYyBkaXNwbGF5KCkge1xyXG4gICAgY29uc3QgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKSB8fCBbXTtcclxuICAgIHRhc2tzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgY29uc3QgeyBkZXNjcmlwdGlvbiwgaW5kZXggfSA9IGl0ZW07XHJcbiAgICAgIFV0aWxzLnJlbmRlcihkZXNjcmlwdGlvbiwgaW5kZXgpO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kbycpLmZvY3VzKCk7XHJcbiAgICAgIEhlbHBlci5jaGVja0hhbmRsZXIoKTtcclxuICAgICAgSGVscGVyLmhhbmRsZUZvY3VzKCk7XHJcbiAgICB9KTtcclxuICAgIFV0aWxzLmxvYWQodGFza3MpO1xyXG4gICAgVXRpbHMuZWRpdCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGZ1bmN0aW9uIGZvY3VzSGFuZGxlciAtIGhhbmRsZXMgdGhlIGZvY3VzIG9uIHRoZSBpbnB1dHNcclxuICAgKiBAcGFyYW0ge0V2ZW50IE9iamVjdH0gZSAtIFRoZSBjdXJyZW50IGV2ZW50XHJcbiAgICovXHJcbiAgc3RhdGljIGZvY3VzSGFuZGxlcihlKSB7XHJcbiAgICBjb25zdCBpdGVtID0gZS5jdXJyZW50VGFyZ2V0O1xyXG4gICAgY29uc3QgY2hpbGQgPSBpdGVtLmNoaWxkcmVuO1xyXG4gICAgY29uc3QgaW5wdXQgPSBjaGlsZFsyXS5maXJzdEVsZW1lbnRDaGlsZDtcclxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsaS5saXN0LmZvY3VzJykpIHtcclxuICAgICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbGkubGlzdC5mb2N1cycpO1xyXG4gICAgICBwYXJlbnQuY2hpbGRyZW5bMl0uZmlyc3RFbGVtZW50Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnZm9jdXMnKTtcclxuICAgICAgcGFyZW50LmNoaWxkcmVuWzNdLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xyXG4gICAgICBwYXJlbnQuY2hpbGRyZW5bNF0uY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XHJcbiAgICAgIHBhcmVudC5jbGFzc0xpc3QucmVtb3ZlKCdmb2N1cycpO1xyXG4gICAgfVxyXG4gICAgaW5wdXQuZm9jdXMoKTtcclxuICAgIFV0aWxzLnRvZygnYWRkJywgJ2ZvY3VzJywgaW5wdXQpO1xyXG4gICAgVXRpbHMudG9nKCdhZGQnLCAnZC1ub25lJywgY2hpbGRbM10pO1xyXG4gICAgVXRpbHMudG9nKCdyZW0nLCAnZC1ub25lJywgY2hpbGRbNF0pO1xyXG4gICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdmb2N1cycpO1xyXG4gICAgaXRlbS5xdWVyeVNlbGVjdG9yKCcjZGVsZXRlIC5mYXInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgVXRpbHMucmVtb3ZlKGUsIGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkKTtcclxuICAgIH0pO1xyXG4gICAgRHJhZy5kcmFnRnVuYygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAZnVuY3Rpb24gY2hhbmdlSGFuZGxlciAtIGhhbmRsZXMgdGhlIGNoYW5nZSBvbiB0aGUgY2hlY2tib3hcclxuICAgKiBAcGFyYW0ge0V2ZW50IE9iamVjdH0gZSAtIFRoZSBjdXJyZW50IGV2ZW50XHJcbiAgICovXHJcbiAgc3RhdGljIGNoYW5nZUhhbmRsZXIoZSkge1xyXG4gICAgY29uc3QgaXRlbSA9IGUudGFyZ2V0O1xyXG4gICAgY29uc3QgcGFyZW50ID0gaXRlbS5wYXJlbnRFbGVtZW50O1xyXG4gICAgY29uc3QgY2hpbGQgPSBwYXJlbnQuY2hpbGRyZW47XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3InKS5pbm5lckhUTUwgPSAnJztcclxuICAgIFV0aWxzLmhlbHAoJ2FkZCcsIGl0ZW0sIGNoaWxkWzFdLCBjaGlsZFsyXS5maXJzdEVsZW1lbnRDaGlsZCk7XHJcbiAgICBjaGlsZFsxXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgVXRpbHMuaGVscCgncmVtJywgaXRlbSwgY2hpbGRbMV0sIGNoaWxkWzJdLmZpcnN0RWxlbWVudENoaWxkKTtcclxuICAgICAgaXRlbS5jaGVja2VkID0gZmFsc2U7XHJcbiAgICB9KTtcclxuICAgIERyYWcuZHJhZ0Z1bmMoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBmdW5jdGlvbiBoYW5kbGVGb2N1cyAtIFRoaXMgaGFuZGxlcyB0aGUgZm9jdXMgb24gaW5wdXRzXHJcbiAgICovXHJcbiAgc3RhdGljIGhhbmRsZUZvY3VzKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGkubGlzdCcpLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBIZWxwZXIuZm9jdXNIYW5kbGVyKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZnVuY3Rpb24gY2hlY2tIYW5kbGVyIC0gaGFuZGxlcyB0aGUgY2hlY2tib3ggY2hhbmdlIGV2ZW50XHJcbiAgICovXHJcbiAgc3RhdGljIGNoZWNrSGFuZGxlcigpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgSGVscGVyLmNoYW5nZUhhbmRsZXIpKTtcclxuICB9XHJcbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tY3ljbGUgKi9cclxuaW1wb3J0IEhlbHBlciBmcm9tICcuL2hlbHBlcnMuanMnO1xyXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4vY29tcG9uZW50LmpzJztcclxuaW1wb3J0IERyYWcgZnJvbSAnLi9kcmFnLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFV0aWxzIHtcclxuICAvKipcclxuICAgKiBAZnVuY3Rpb24gcmVuZGVyIC0gaW5zdGFuY2UgY2xhc3MgbWV0aG9kXHJcbiAgICogQHJldHVybnMgLSBhIGxpc3QgZWxlbWVudCBmb3JtZWQgZnJvbSB0aGUgY29tcG9uZW50XHJcbiAgICovXHJcbiAgc3RhdGljIHJlbmRlcih2YWwsIGlkKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1saXN0IHVsJykuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBDb21wb25lbnQubGlzdCh2YWwsIGlkKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZnVuY3Rpb24gYWRkIC0gaW5zdGFuY2UgbWV0aG9kIHRoYXQgYWRkcyBuZXcgdG9kbyB0byBsaXN0XHJcbiAgICovXHJcbiAgc3RhdGljIGFkZCgpIHtcclxuICAgIGNvbnN0IHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSkgfHwgW107XHJcbiAgICBjb25zdCB0b2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvZG8nKS52YWx1ZTtcclxuICAgIGlmICh0b2RvID09PSAnJykge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3InKS5pbm5lclRleHQgPSAnVG9kbyBjYW4gbm90IGJlIGVtcHR5JztcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yJykuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBVdGlscy5wdXNoQ29udHJvbCh0YXNrcywgdG9kbyk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xyXG4gICAgVXRpbHMucmVuZGVyKHRvZG8sIHRhc2tzLmxlbmd0aCk7XHJcbiAgICBVdGlscy5hbmltYXRlKHRhc2tzKTtcclxuICAgIFV0aWxzLmVkaXQoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBmdW5jdGlvbiByZW1vdmUgLSBUaGUgcmVtb3ZlIGZ1bmN0aW9uIHRvIHJlbW92ZSBhIGxpc3QgaXRlbVxyXG4gICAqIEBwYXJhbSB7RXZlbnQgT2JqZWN0fSBlIC0gVGhlIGV2ZW50IG9iamVjdFxyXG4gICAqIEBwYXJhbSB7Kn0gaWQgLSBUaGUgaWQgb2YgdGhlIGl0ZW1cclxuICAgKi9cclxuICBzdGF0aWMgcmVtb3ZlKGUsIGlkKSB7XHJcbiAgICBVdGlscy5kZWxldGUoaWQpO1xyXG4gICAgZS5jdXJyZW50VGFyZ2V0LmNsb3Nlc3QoJ3VsID4gbGknKS5yZW1vdmUoKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWxpc3QgdWwnKS5pbm5lckhUTUwgPSAnJztcclxuICAgIEhlbHBlci5kaXNwbGF5KCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICogQGZ1bmN0aW9uIGNsZWFyQWxsIC0gVGhpcyBoYW5kbGVzIHJlbW92aW5nIGFsbCBjb21wbGV0ZWQgaXRlbXMgZnJvbSB0aGUgbGlzdFxyXG4gKi9cclxuICBzdGF0aWMgY2xlYXJBbGwoKSB7XHJcbiAgICBVdGlscy5kZWxldGUoZmFsc2UpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGkubGlzdCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygnZC1ub25lJykpIHtcclxuICAgICAgICBpdGVtLnJlbW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWxpc3QgdWwnKS5pbm5lckhUTUwgPSAnJztcclxuICAgIEhlbHBlci5kaXNwbGF5KCk7XHJcbiAgICBEcmFnLmRyYWdGdW5jKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZnVuY3Rpb24gYWRkIC0gaW5zdGFuY2UgbWV0aG9kIHRoYXQgY2xlYXJzIGlucHV0IG9uIGFkZFxyXG4gICAqL1xyXG4gIHN0YXRpYyBjbGVhcigpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvJykudmFsdWUgPSAnJztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBmdW5jdGlvbiBwdXNoQ29udHJvbCAtIGhlbHBlciBtZXRob2QgdGhhdCBwdXNoZXMgaXRlbXMgaW50byB0aGUgdGFza3MgYXJyYXlcclxuICAgKiBAcGFyYW0ge0FycmF5fSB0YXNrcyAtIFRoZSBhcnJheSBjb2xsZWN0aW9uIG9mIG9iamVjdHNcclxuICAgKiBAcGFyYW0ge1N0cmluZ30gdG9kbyAtIFRoZSB0b2RvIGRlc2NyaXB0aW9uIHN0cmluZ1xyXG4gICAqL1xyXG4gIHN0YXRpYyBwdXNoQ29udHJvbCh0YXNrcywgdG9kbywgY29tcGxldGVkID0gZmFsc2UpIHtcclxuICAgIHRhc2tzLnB1c2goe1xyXG4gICAgICBkZXNjcmlwdGlvbjogYCR7dG9kb31gLFxyXG4gICAgICBjb21wbGV0ZWQsXHJcbiAgICAgIGluZGV4OiB0YXNrcy5sZW5ndGggKyAxLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZnVuY3Rpb24gY2hhbmdlIC0gSGFuZGxlcyBjaGFuZ2UgaW4gY29tcGxldGVkIHdoZW4gY2hlY2tib3ggaXMgdG9nZ2xlZFxyXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBpZCAtIFRoZSBkYXRhIGlkIG9mIHRoZSB0YXNrXHJcbiAgICogQHBhcmFtIHtCb29sZWFufSB2YWwgLSBUaGUgdmFsdWUgb2YgY29tcGxldGVkXHJcbiAgICovXHJcbiAgc3RhdGljIGNoYW5nZShpZCwgdmFsKSB7XHJcbiAgICBjb25zdCB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpO1xyXG4gICAgY29uc3QgZmlsdGVyZWQgPSB0YXNrcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaW5kZXggIT09IHBhcnNlSW50KGlkLCAxMCkpO1xyXG4gICAgY29uc3QgdGFzayA9IHRhc2tzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaW5kZXggPT09IHBhcnNlSW50KGlkLCAxMCkpO1xyXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09ICdib29sZWFuJykge1xyXG4gICAgICB0YXNrLmNvbXBsZXRlZCA9IHZhbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRhc2suZGVzY3JpcHRpb24gPSB2YWw7XHJcbiAgICB9XHJcbiAgICBmaWx0ZXJlZC5zcGxpY2UodGFzay5pbmRleCAtIDEsIDAsIHRhc2spO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkoZmlsdGVyZWQpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBmdW5jdGlvbiB0b2cgLSBpbnN0YW5jZSBtZXRob2QgdGhhdCB0b2dnbGVzIENTUyBjbGFzc1xyXG4gICAqIEBwYXJhbSAgey4uLmFueX0gYXJncyAtIExpc3Qgb2YgYXJndW1lbnRzXHJcbiAgICogQHJldHVybnMgdGhlIHRvZ2dsaW5nXHJcbiAgICovXHJcbiAgc3RhdGljIHRvZyguLi5hcmdzKSB7XHJcbiAgICBpZiAoYXJnc1swXSA9PT0gJ2FkZCcpIHJldHVybiBhcmdzWzJdLmNsYXNzTGlzdC5hZGQoYXJnc1sxXSk7XHJcbiAgICByZXR1cm4gYXJnc1syXS5jbGFzc0xpc3QucmVtb3ZlKGFyZ3NbMV0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGZ1bmN0aW9uIGhlbHAgLSBBZGQgYW5kIHJlbW92ZSBjbGFzc2VzXHJcbiAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGUgLSBjaGVja3MgaWYgYWRkIG9yIHJlbW92ZVxyXG4gICAqIEBwYXJhbSB7SFRNTCBFbGVtZW50fSB2YWwxIC0gdGhlIGh0bWwgZWxlbWVudCB0byBhZGQgdG8gb3IgcmVtb3ZlIGZyb21cclxuICAgKiBAcGFyYW0ge0hUTUwgRWxlbWVudH0gdmFsMiAtIHRoZSBodG1sIGVsZW1lbnQgdG8gYWRkIHRvIG9yIHJlbW92ZSBmcm9tXHJcbiAgICogQHBhcmFtIHtIVE1MIEVsZW1lbnR9IHZhbDMgLSB0aGUgaHRtbCBlbGVtZW50IHRvIGFkZCB0byBvciByZW1vdmUgZnJvbVxyXG4gICAqL1xyXG4gIHN0YXRpYyBoZWxwKHR5cGUsIHZhbDEsIHZhbDIsIHZhbDMpIHtcclxuICAgIGlmICh0eXBlID09PSAnYWRkJykge1xyXG4gICAgICBVdGlscy50b2coJ2FkZCcsICdkLW5vbmUnLCB2YWwxKTtcclxuICAgICAgVXRpbHMudG9nKCdyZW0nLCAnZC1ub25lJywgdmFsMik7XHJcbiAgICAgIFV0aWxzLnRvZygnYWRkJywgJ3N0cmlrZScsIHZhbDMpO1xyXG4gICAgICBVdGlscy5jaGFuZ2UodmFsMS5kYXRhc2V0LmlkLCB0cnVlKTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlID09PSAncmVtJykge1xyXG4gICAgICBVdGlscy50b2coJ3JlbScsICdkLW5vbmUnLCB2YWwxKTtcclxuICAgICAgVXRpbHMudG9nKCdhZGQnLCAnZC1ub25lJywgdmFsMik7XHJcbiAgICAgIFV0aWxzLnRvZygncmVtJywgJ3N0cmlrZScsIHZhbDMpO1xyXG4gICAgICBVdGlscy5jaGFuZ2UodmFsMS5kYXRhc2V0LmlkLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZnVuY3Rpb24gbG9hZCAtIHRoZSBsb2FkIGZ1bmN0aW9uXHJcbiAgICogQHBhcmFtIHtBcnJheX0gdGFza3MgLSBUaGUgdGFza3MgYXJyYXlcclxuICAgKi9cclxuICBzdGF0aWMgbG9hZCh0YXNrcykge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGkubGlzdCcpLmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgICAgY29uc3QgdGFzayA9IHRhc2tzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaW5kZXggPT09IHBhcnNlSW50KGVsZW0uY2hpbGRyZW5bMF0uZGF0YXNldC5pZCwgMTApKTtcclxuICAgICAgaWYgKHRhc2suY29tcGxldGVkKSB7XHJcbiAgICAgICAgY29uc3QgY2hpbGQgPSBlbGVtLmNoaWxkcmVuO1xyXG4gICAgICAgIFV0aWxzLmhlbHAoJ2FkZCcsIGNoaWxkWzBdLCBjaGlsZFsxXSwgY2hpbGRbMl0uZmlyc3RFbGVtZW50Q2hpbGQpO1xyXG4gICAgICAgIGNoaWxkWzFdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gVXRpbHMuaGVscCgncmVtJywgY2hpbGRbMF0sIGNoaWxkWzFdLCBjaGlsZFsyXS5maXJzdEVsZW1lbnRDaGlsZCkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBmdW5jdGlvbiBlZGl0IC0gRWRpdHMgdGhlIHRvZG8gYW5kIHB1c2ggY2hhbmdlcyB0byBsb2NhbFN0b3JhZ2VcclxuICAgKi9cclxuICBzdGF0aWMgZWRpdCgpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXN0IGZvcm0gaW5wdXQnKS5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICBjb25zdCBpbnB1dFZhbHVlID0gaW5wdXQudmFsdWU7XHJcbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmIChlLnRhcmdldC52YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgIGUudGFyZ2V0LnZhbHVlID0gaW5wdXRWYWx1ZTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgVXRpbHMuY2hhbmdlKGUudGFyZ2V0LmRhdGFzZXQuaWQsIGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1saXN0IHVsJykuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgSGVscGVyLmRpc3BsYXkoKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saXN0IGZvcm0nKS5mb3JFYWNoKChmb3JtKSA9PiB7XHJcbiAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZnVuY3Rpb24gZGVsZXRlIC0gRGVsZXRlcyBhbiBpdGVtKHMpIGZyb20gdGhlIGxpc3RcclxuICAgKiBAcGFyYW0ge2FueX0gdmFsIC0gQSBib29sZWFuIG9yIHN0cmluZ1xyXG4gICAqL1xyXG4gIHN0YXRpYyBkZWxldGUodmFsKSB7XHJcbiAgICBjb25zdCB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpO1xyXG4gICAgbGV0IHJlbVRhc2tzO1xyXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHJlbVRhc2tzID0gdGFza3MuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmluZGV4ICE9PSBwYXJzZUludCh2YWwsIDEwKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZW1UYXNrcyA9IHRhc2tzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5jb21wbGV0ZWQgPT09IHZhbCk7XHJcbiAgICB9XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndGFza3MnKTtcclxuICAgIGNvbnN0IHRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSkgfHwgW107XHJcbiAgICByZW1UYXNrcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGNvbnN0IHsgZGVzY3JpcHRpb24sIGNvbXBsZXRlZCB9ID0gaXRlbTtcclxuICAgICAgaWYgKGNvbXBsZXRlZCkge1xyXG4gICAgICAgIFV0aWxzLnB1c2hDb250cm9sKHRvZG9zLCBkZXNjcmlwdGlvbiwgdHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgVXRpbHMucHVzaENvbnRyb2wodG9kb3MsIGRlc2NyaXB0aW9uKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAqIEBmdW5jdGlvbiBhbmltYXRlIC0gYW5pbWF0ZSBlYWNoIGxpc3QgaXRlbVxyXG4gKiBAcGFyYW0ge0FycmF5fSB0YXNrcyAtIFRoZSBhcnJheSBvZiB0YXNrc1xyXG4gKi9cclxuICBzdGF0aWMgYW5pbWF0ZSh0YXNrcykge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGkubGlzdCcpLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgaWYgKHBhcnNlSW50KGl0ZW0uZGF0YXNldC5pZCwgMTApID09PSB0YXNrcy5sZW5ndGgpIGl0ZW0uY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZS10b3AnKTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZS10b3AnKTsgfSwgMTQwMCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgSGVscGVyIGZyb20gJy4vaGVscGVycy5qcyc7XHJcbmltcG9ydCBVdGlscyBmcm9tICcuL3V0aWxzLmpzJztcclxuaW1wb3J0IERyYWcgZnJvbSAnLi9kcmFnLmpzJztcclxuaW1wb3J0IGZlYXREaXNwbGF5IGZyb20gJy4vZmVhdHVyZXMuanMnO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgSGVscGVyLmRpc3BsYXkoKTtcclxuICBEcmFnLmRyYWdGdW5jKCk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiBIZWxwZXIuZm9ybUhhbmRsZXIoZSkpO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbnRlcicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IEhlbHBlci5mb3JtSGFuZGxlcihlKSk7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsZWFyIGEnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IFV0aWxzLmNsZWFyQWxsKCkpO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZWZyZXNoIC5mYXMnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdyb3RhdGUnKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4geyBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdyb3RhdGUnKTsgfSwgMTAwMCk7XHJcbiAgfSk7XHJcbiAgZmVhdERpc3BsYXkoKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==