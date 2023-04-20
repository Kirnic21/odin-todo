/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Font.ttf */ \"./src/Font.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n    font-family: 'Font';\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n    font-weight: 600;\\n    font-style: normal;\\n  }\\n*,\\n*::before,\\n*::after {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\nhtml,body{\\n  height:100%\\n\\n}\\n\\n#header{\\n    font-family: 'font';\\n    font-size: 3em;\\n    display:flex;\\n    background-color:#628395;\\n    justify-content: center;\\n}\\n#sidebar {\\n  width: 10%;\\n  display:flex;\\n  background: royalblue;\\n  flex-shrink: 0;\\n  padding-bottom: 100%;\\n}\\n#container{\\n  display:flex;\\n  flex-direction: row;\\n}\\n.button{\\n  font-family:'font';\\n  font-size: 1em;\\n  display:flex;\\n  justify-content: center;\\n\\n  padding: 30px;\\n}\\n.button:hover{\\n  background-color: yellow;\\n}\\n.project{\\n  background-color:blue;\\n  border-radius: 10px;\\n  margin: 20px;\\n  padding: 32px;\\n  display: flex;\\n  height: 5%;\\n  width: 15%;\\n  gap:90px;\\n  flex-wrap: wrap;\\n}\\n.project:hover\\n{\\n  background-color: red;\\n}\\n.todo{\\n  display:flex;\\n  justify-content: center;\\n  text-align: center;\\n  height: 12%;\\n  border-radius: 10px;\\n  gap:20px;\\n  padding: 16px;\\n  margin: 16px;\\n  width: 300px;\\n}\\n.high{\\n  background-color: red;\\n}\\n.low{\\n  background-color: green;\\n}\\n.mid{\\n  background-color: yellow;\\n}\\n#project-name{\\n  background-color: gray;\\n  height: 20px;\\n}\\n#titleInput\\n{\\n  width:100%;\\n}\\n#projectsHeader{\\nwidth: 100%;\\ndisplay: flex;\\nbackground-color: blue;\\njustify-content: center;\\n}\\n#projects\\n{\\n  display: flex;\\n  height: 60%;\\n  width: 100%;\\n  flex-wrap: wrap;\\n}\\n#todos{\\n  display: flex;\\n  width: 100%;\\n  height: 60%;\\n  flex-wrap: wrap;\\n\\n}\\n.todo{\\n  display:flex;\\n  justify-content: space-between;\\n  align-items: flex-end;\\n  height:5%;\\n  width: 75%;\\n  gap:50px;\\n\\n  background-color: blue;\\n}\\n#todoHeader{\\n    width: 100%;\\n    display: flex;\\n    background-color: blue;\\n    justify-content: center;\\n}\\n.todoTitle{\\n  display:flex;\\n  justify-content: center;\\n  width: 10%;\\n}\\n.endGroup{\\n  display: flex;\\n  gap:80px;\\n  justify-content: flex-end;\\n  width: 100%;\\n}\\n#textTitleInput{\\n  display: flex;\\n}\\n#dueDateInput{\\n  display:flex;\\n}\\n#priorityInput{\\n  display: flex;\\n}\\n#returnButton{\\n  width: 100%;\\ndisplay: flex;\\nbackground-color: red;\\njustify-content: center;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://a/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://a/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://a/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://a/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://a/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://a/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://a/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://a/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://a/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://a/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://a/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createProjectDomButton\": () => (/* binding */ createProjectDomButton),\n/* harmony export */   \"displayAllProjects\": () => (/* binding */ displayAllProjects),\n/* harmony export */   \"mainPage\": () => (/* binding */ mainPage),\n/* harmony export */   \"removeAllChildNodes\": () => (/* binding */ removeAllChildNodes)\n/* harmony export */ });\n/* harmony import */ var _projectManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectManager */ \"./src/projectManager.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todos */ \"./src/todos.js\");\n/* harmony import */ var _todosDom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todosDom */ \"./src/todosDom.js\");\n\n;\n\n\n\n\n\n;\n\nfunction removeAllChildNodes(parent) {\n    while (parent.firstChild) {\n        parent.removeChild(parent.firstChild);\n    }\n}\nfunction mainPage(){\n//content\nconst content = document.querySelector(\"#content\")\n//header\nconst header =  document.createElement(\"div\")\nheader.setAttribute(\"id\",\"header\");\nheader.textContent = \"To Do List(\\\"just do it\\\"-Shia Lebaulf)\"\ncontent.appendChild(header)\n//container\nconst container = document.createElement(\"div\");\ncontainer.setAttribute(\"id\",\"container\");\ncontent.appendChild(container);\n\n//sidebar\nconst sidebar = document.createElement(\"div\");\nsidebar.setAttribute(\"id\",\"sidebar\");\ncontainer.appendChild(sidebar);\n//ul and li\nconst ul = document.createElement(\"ul\");\nul.setAttribute(\"id\",\"ul1\")\nsidebar.appendChild(ul)\n//newProject BUTTON DIV \nconst newProject = document.createElement(\"li\");\nnewProject.textContent = \"New Project\"\nnewProject.setAttribute(\"id\",\"newProject\")\nnewProject.classList.add(\"button\")\nul.appendChild(newProject)\n//projects div\nconst projects = document.createElement(\"div\")\nprojects.setAttribute(\"id\",\"projects\")\ncontainer.appendChild(projects)\n\nconst projectsHeader = document.createElement(\"div\")\nprojectsHeader.setAttribute(\"id\",\"projectsHeader\")\nprojectsHeader.textContent = \"Projects: \"\nprojects.appendChild(projectsHeader)\n}\nmainPage()\n//Create a Project\nfunction createProjectDomButton(){\n//find create button page\nconst createProjectButton = document.querySelector(\"#newProject\")\nconst ul1 = document.querySelector(\"#ul1\")\n\ncreateProjectButton.addEventListener(\"click\",function createProjectButton(e)\n{       \n        if(e.target.classList.contains(\"clicked\") === false)\n        {\n        //create input\n        e.target.classList.add(\"clicked\")\n        const inputTitle = document.createElement(\"input\")\n        inputTitle.setAttribute(\"id\",\"titleInput\")\n        inputTitle.setAttribute(\"placeholder\",\"title\")\n        ul1.appendChild(inputTitle)\n        //button to create project\n        const submitButton = document.createElement(\"button\")\n        submitButton.setAttribute(\"id\",\"createButton\")\n        submitButton.textContent = \"Create project\";\n        ul1.appendChild(submitButton)\n        submitButton.addEventListener(\"click\", createProjectDiv)\n        }\n})\n}\ncreateProjectDomButton()\n\n\nfunction displayAllProjects()\n{\n        const projects = document.querySelector(\"#projects\")\n        for(let i = 0;i< _projectManager__WEBPACK_IMPORTED_MODULE_0__.myProjectManager.projectArray.length;i++)\n        {\n                const projectDiv = document.createElement(\"div\");\n                projectDiv.classList.add(\"project\")\n                projectDiv.textContent = _projectManager__WEBPACK_IMPORTED_MODULE_0__.myProjectManager.projectArray[i].title \n                projectDiv.dataset.id = i\n                projects.appendChild(projectDiv)\n                const removeButton = document.createElement(\"button\")\n                removeButton.classList.add(\"removeButton\")\n                removeButton.dataset.id = i \n                projects.appendChild(removeButton)\n                removeButton.textContent = \"remove\"\n                const editButton = document.createElement(\"button\")\n                editButton.classList.add(\"editButton\")\n                editButton.textContent = \"edit\"\n                editButton.dataset.id = i \n                projects.appendChild(editButton)\n                \n        }\n        const removeButton = document.querySelectorAll(\".removeButton\")\n        for(let i = 0;i<removeButton.length;i++)\n        {\n                removeButton[i].addEventListener(\"click\",function removeTheDom(e){\n                        let index = e.target.dataset.id;\n                        removeProjectDom(index)\n                        ;(0,_todosDom__WEBPACK_IMPORTED_MODULE_3__.selectTodo)()\n                })    \n        }\n        const editButton = document.querySelectorAll(\".editButton\")\n        for(let i = 0;i<editButton.length;i++)\n        {\n                editButton[i].addEventListener(\"click\",function renameTheDom(e){\n                        let index = e.target.dataset.id;\n                        editProjectDom(index)\n                        ;(0,_todosDom__WEBPACK_IMPORTED_MODULE_3__.selectTodo)()\n                })    \n        }\n}\ndisplayAllProjects()\nfunction removeProjectDom(projectIndex)\n{\n        ;(0,_projects__WEBPACK_IMPORTED_MODULE_1__.removeProject)(_projectManager__WEBPACK_IMPORTED_MODULE_0__.myProjectManager.projectArray[projectIndex],_projectManager__WEBPACK_IMPORTED_MODULE_0__.myProjectManager.projectArray)\n        const projects = document.querySelector(\"#projects\")\n        while(projects.childNodes.length>1)\n        {\n                projects.removeChild(projects.lastChild)\n        }\n        displayAllProjects()\n}\nfunction editProjectDom(projectIndex)\n{\n        const thisProject = _projectManager__WEBPACK_IMPORTED_MODULE_0__.myProjectManager.projectArray[projectIndex]\n        const ul1 = document.querySelector(\"#ul1\")\n        const inputTitle = document.createElement(\"input\")\n        inputTitle.setAttribute(\"id\",\"titleInput\")\n        inputTitle.setAttribute(\"placeholder\",\"title\")\n        inputTitle.value = thisProject.title\n        ul1.appendChild(inputTitle)\n        const submitButton = document.createElement(\"button\")\n        submitButton.setAttribute(\"id\",\"createButton\")\n        submitButton.textContent = \"renameProject\";\n        ul1.appendChild(submitButton)\n        submitButton.addEventListener(\"click\",function editProjectDomListener(){\n                \n                ;(0,_projects__WEBPACK_IMPORTED_MODULE_1__.renameProject)(_projectManager__WEBPACK_IMPORTED_MODULE_0__.myProjectManager.projectArray[projectIndex],inputTitle.value)\n                const projects = document.querySelector(\"#projects\")\n                while(projects.childNodes.length>1)\n                {\n                        projects.removeChild(projects.lastChild)\n                }\n                displayAllProjects()\n        })\n}\nfunction createProjectDiv()\n{\nconst inputTitle = document.querySelector(\"#titleInput\")\nconst inputTitleValue = document.querySelector(\"#titleInput\").value\n//create project cancel\nif(inputTitle.value !== \"\")\n{\nconst createProjectButton = document.querySelector(\"#newProject\")\ncreateProjectButton.classList.remove(\"clicked\")\nconst submitButton = document.querySelector(\"#createButton\")\nconst projects = document.querySelector(\"#projects\")\nconst project =  (0,_projects__WEBPACK_IMPORTED_MODULE_1__.createProject)(inputTitleValue);\nconst projectDiv = document.createElement(\"div\");\nprojectDiv.textContent = project.title;\nprojectDiv.dataset.id = project.index;\nprojectDiv.classList.add(\"project\");\nprojects.appendChild(projectDiv);\ninputTitle.remove();\nsubmitButton.remove();\n(0,_todosDom__WEBPACK_IMPORTED_MODULE_3__.selectTodo)()\n}\n}\nconst todo1 =(0,_todos__WEBPACK_IMPORTED_MODULE_2__.createTodo)(\"sooo\",\"loveTheSubhuman\",\"Self\",0)\nconst todo2 = (0,_todos__WEBPACK_IMPORTED_MODULE_2__.createTodo)(\"meow\",\"meow\",\"meow\",0)\n//createTodoDiv\n;(0,_todosDom__WEBPACK_IMPORTED_MODULE_3__.selectTodo)()\n\n\n//# sourceURL=webpack://a/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _src_model_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/model.js */ \"./src/model.js\");\n/* harmony import */ var _src_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _projectManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectManager */ \"./src/projectManager.js\");\n\n\n\n\n\n\n(0,_src_dom_js__WEBPACK_IMPORTED_MODULE_2__.mainPage)()\n\n\n//# sourceURL=webpack://a/./src/index.js?");

/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project),\n/* harmony export */   \"Todo\": () => (/* binding */ Todo)\n/* harmony export */ });\n\nclass Todo {\n  constructor(title, dueDate, priority) {\n    this.title = title;\n    this.dueDate = dueDate;\n    this.priority = priority;\n  }\n\n  get title() {\n    return this._title;\n  }\n  set title(title) {\n    this._title = title;\n  }\n\n  get dueDate() {\n    return this._dueDate;\n  }\n  set dueDate(dueDate) {\n    this._dueDate = dueDate;\n  }\n\n  get priority() {\n    return this._priority;\n  }\n  set priority(priority) {\n    this._priority = priority;\n  }\n  \n}\n\nclass Project {\n  constructor(title) {\n    this.title = title;\n    this.todos = [];\n  }\n  get index() {\n    return this._index;\n  }\n  set index(index) {\n    this._index = index;\n  }\n  get title() {\n    return this._title;\n  }\n  set title(title) {\n    this._title = title;\n  }\n\n  addTodo(todo) {\n    this.todos.push(todo);\n\n  }\n  \n}\n\n\n//# sourceURL=webpack://a/./src/model.js?");

/***/ }),

/***/ "./src/projectManager.js":
/*!*******************************!*\
  !*** ./src/projectManager.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"myProjectManager\": () => (/* binding */ myProjectManager)\n/* harmony export */ });\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ \"./src/model.js\");\n\n;\nconst placeholderProject = new _model__WEBPACK_IMPORTED_MODULE_0__.Project(\"Love\",0)\nconst placeholderProject2 = new _model__WEBPACK_IMPORTED_MODULE_0__.Project(\"the subhuman\",1)\nconst placeholderProject3= new _model__WEBPACK_IMPORTED_MODULE_0__.Project(\"self\",2)\nconst myProjectManager = ((projectArray)=>\n{\n    {\n        projectArray = [placeholderProject,placeholderProject2,placeholderProject3]\n    }\n    return {projectArray};\n})();\n\n\n//# sourceURL=webpack://a/./src/projectManager.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createProject\": () => (/* binding */ createProject),\n/* harmony export */   \"filterProjects\": () => (/* binding */ filterProjects),\n/* harmony export */   \"removeProject\": () => (/* binding */ removeProject),\n/* harmony export */   \"renameProject\": () => (/* binding */ renameProject)\n/* harmony export */ });\n/* harmony import */ var _src_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/model.js */ \"./src/model.js\");\n/* harmony import */ var _projectManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectManager */ \"./src/projectManager.js\");\n\n\n\n\n\n\nfunction createProject(name)\n{\n    let newProject = new _src_model_js__WEBPACK_IMPORTED_MODULE_0__.Project(name)\n    _projectManager__WEBPACK_IMPORTED_MODULE_1__.myProjectManager.projectArray.push(newProject)\n    newProject.index = _projectManager__WEBPACK_IMPORTED_MODULE_1__.myProjectManager.projectArray.indexOf(newProject)\n    return newProject\n}\n\nfunction removeProject(project,arr)\n{   \n    for( let i = 0; i < arr.length; i++){ \n    \n        if ( arr[i] === project) { \n    \n            arr.splice(i, 1); \n        }\n    }\n    return arr\n }\nfunction renameProject(project,newTitle){\n    project.title = newTitle\n    return project.title\n}\nfunction filterProjects(project)\n{\n    const filteredProject =   _projectManager__WEBPACK_IMPORTED_MODULE_1__.myProjectManager.projectArray.filter(projects => projects === project)\n    return filteredProject\n}\n\n\n//# sourceURL=webpack://a/./src/projects.js?");

/***/ }),

/***/ "./src/todos.js":
/*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeDate\": () => (/* binding */ changeDate),\n/* harmony export */   \"changePriority\": () => (/* binding */ changePriority),\n/* harmony export */   \"createTodo\": () => (/* binding */ createTodo),\n/* harmony export */   \"deleteTodo\": () => (/* binding */ deleteTodo),\n/* harmony export */   \"renameTodo\": () => (/* binding */ renameTodo)\n/* harmony export */ });\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ \"./src/model.js\");\n/* harmony import */ var _projectManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectManager */ \"./src/projectManager.js\");\n\n\n\n\n\n\n\n\n\n\n\nfunction createTodo(title, dueDate, priority,index){\n    const newTodo = new _model__WEBPACK_IMPORTED_MODULE_0__.Todo(title,dueDate,priority)\n    let array = _projectManager__WEBPACK_IMPORTED_MODULE_1__.myProjectManager.projectArray[index].todos\n    array.push(newTodo) \n    return newTodo\n}\n \nfunction deleteTodo(index,todo)\n{\n    {   \n        for( let i = 0; i < _projectManager__WEBPACK_IMPORTED_MODULE_1__.myProjectManager.projectArray[index].todos.length; i++){ \n        \n            if ( _projectManager__WEBPACK_IMPORTED_MODULE_1__.myProjectManager.projectArray[index].todos[i] === todo) { \n        \n                _projectManager__WEBPACK_IMPORTED_MODULE_1__.myProjectManager.projectArray[index].todos.splice(i, 1);\n \n            }\n        \n        }\n        \n     }\n}\nfunction renameTodo(todo,newTitle)\n{\n    todo.title = newTitle\n    return todo.title\n}\nfunction changeDate(todo,newDate)\n{\n    todo.dueDate = newDate\n    return todo.dueDate\n}\nfunction changePriority(todo,newPriority)\n{\n    todo.priority = newPriority\n    return todo.priority\n}\n\n//# sourceURL=webpack://a/./src/todos.js?");

/***/ }),

/***/ "./src/todosDom.js":
/*!*************************!*\
  !*** ./src/todosDom.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"selectTodo\": () => (/* binding */ selectTodo)\n/* harmony export */ });\n/* harmony import */ var _projectManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectManager */ \"./src/projectManager.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todos */ \"./src/todos.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n\n;\n\n\n\n   \n\n\n\n\n\n\n(0,_dom__WEBPACK_IMPORTED_MODULE_3__.mainPage)()\nfunction selectTodo()\n{      \n const project = document.querySelectorAll(\".project\") \n for(let i = 0;i<project.length;i++)\n {\n        \n project[i].addEventListener(\"click\",function filterAll(e){\n        const ul1 = document.querySelector(\"#ul1\")\n        const projectIndex = e.target.dataset.id;\n        const project = (0,_projects__WEBPACK_IMPORTED_MODULE_1__.filterProjects)(_projectManager__WEBPACK_IMPORTED_MODULE_0__.myProjectManager.projectArray[projectIndex])\n        const projects = document.querySelector(\"#projects\")\n        projects.remove()\n        const container = document.querySelector(\"#container\")\n        const todos = document.createElement(\"div\")\n        todos.setAttribute(\"id\",\"todos\")\n        container.appendChild(todos)\n        const todoHeader = document.createElement(\"div\")\n        todoHeader.setAttribute(\"id\",\"todoHeader\")\n        todoHeader.textContent = project[0].title;\n        todos.appendChild(todoHeader)\n        const returnButton = document.createElement(\"button\")\n        returnButton.setAttribute(\"id\",\"returnButton\")\n        returnButton.addEventListener(\"click\",function returnToMainPage(){\n                todos.remove()\n                const projects = document.createElement(\"div\")\n                projects.setAttribute(\"id\",\"projects\")\n                container.appendChild(projects)\n                const projectsHeader = document.createElement(\"div\")\n                projectsHeader.setAttribute(\"id\",\"projectsHeader\")\n                projectsHeader.textContent = \"Projects: \"\n                projects.appendChild(projectsHeader)\n                ;(0,_dom__WEBPACK_IMPORTED_MODULE_3__.displayAllProjects)()\n                selectTodo()\n                const ul = document.querySelector(\"#ul1\");\n                (0,_dom__WEBPACK_IMPORTED_MODULE_3__.removeAllChildNodes)(ul)\n                const sidebar = document.querySelector(\"#sidebar\")\n                sidebar.appendChild(ul)\n\n                //newProject BUTTON DIV \n                const newProject = document.createElement(\"li\");\n                newProject.textContent = \"New Project\"\n                newProject.setAttribute(\"id\",\"newProject\")\n                newProject.classList.add(\"button\")\n                ul.appendChild(newProject)\n                ;(0,_dom__WEBPACK_IMPORTED_MODULE_3__.createProjectDomButton)()\n        })\n        returnButton.textContent = \"Return\";\n        todos.appendChild(returnButton)\n        const todoPlace = _projectManager__WEBPACK_IMPORTED_MODULE_0__.myProjectManager.projectArray[projectIndex].todos\n        for(let i = 0;i<todoPlace.length;i++)\n        {\n            const todo = todoPlace[i]\n            const todoDiv = createTodoDiv(todo,i,projectIndex)\n            todos.appendChild(todoDiv)\n        }\n        (0,_dom__WEBPACK_IMPORTED_MODULE_3__.removeAllChildNodes)(ul1)\n        //create todo button\n        function createTodoDiv(todo,index,projectIndex){\n                //todoDIv\n                const todoDiv = document.createElement(\"div\");\n                todoDiv.classList.add(\"todo\")\n                //todo Title\n                const todoTitle = document.createElement(\"div\")\n                todoTitle.textContent = todo.title\n                todoTitle.classList.add(\"todoTitle\")\n                const endGroup = document.createElement(\"div\")\n                //endgroup\n                endGroup.classList.add(\"endGroup\")\n                todoDiv.appendChild(todoTitle)\n                todoDiv.appendChild(endGroup)\n                //due date\n                const todoDueDate = document.createElement(\"div\")\n                endGroup.textContent = todo.dueDate\n                todoDiv.appendChild(todoDueDate)\n                //priority\n                const todoPriority = document.createElement(\"div\");\n                todoPriority.textContent = todo.priority\n                endGroup.appendChild(todoPriority)\n                //todo div index\n                todoDiv.dataset.id = index\n                //remove\n                const removeTodoButton = document.createElement(\"button\")\n                removeTodoButton.setAttribute(\"id\",\"removeTodo\")\n                endGroup.appendChild(removeTodoButton)\n                removeTodoButton.addEventListener(\"click\",function removeTodoButton()\n                {\n                    ;(0,_todos__WEBPACK_IMPORTED_MODULE_2__.deleteTodo)(projectIndex,todo)\n                    todoDiv.remove()\n                })\n                removeTodoButton.textContent = \"remove Todo\"\n                const editButton = document.createElement(\"button\")\n                editButton.textContent = \"edit todo\"\n                endGroup.appendChild(editButton)\n                editButton.addEventListener(\"click\",function editTodoListener(){\n                            const todoInArray = _projectManager__WEBPACK_IMPORTED_MODULE_0__.myProjectManager.projectArray[projectIndex].todos[index]\n                            //rename\n                            const ulToDo = document.querySelector(\"#ul1\")\n                            const textTitle = document.createElement(\"li\")\n                            const textTitleInput = document.createElement(\"input\")\n                            textTitleInput.setAttribute(\"id\",\"textTitleInput\")\n                            textTitle.appendChild(textTitleInput)\n                            ulToDo.appendChild(textTitle)\n                            //date\n                            const dueDate = document.createElement(\"li\")\n                            const dueDateInput = document.createElement(\"input\")\n                            dueDateInput.setAttribute(\"type\",\"date\")\n                            dueDateInput.setAttribute(\"id\",\"dueDateInput\")\n                            dueDate.appendChild(dueDateInput)\n                            ulToDo.appendChild(dueDate)\n                            //priority\n                            const  priority = document.createElement(\"li\")\n                            const   priorityInput = document.createElement(\"input\")\n                            priorityInput.setAttribute(\"id\",\"priorityInput\")\n                            priority.appendChild(priorityInput)\n                            ulToDo.appendChild(priority)\n                            const submitButton = document.createElement(\"button\")\n                            submitButton.textContent = \"edit todo\"\n                            ulToDo.appendChild(submitButton)\n                            submitButton.addEventListener(\"click\",function changeTodos()\n                            {       \n                                    //removealltodos\n \n                                    ;(0,_todos__WEBPACK_IMPORTED_MODULE_2__.renameTodo)(todoInArray,textTitleInput.value)\n                                    ;(0,_todos__WEBPACK_IMPORTED_MODULE_2__.changeDate)(todoInArray,dueDateInput.value)\n                                ;(0,_todos__WEBPACK_IMPORTED_MODULE_2__.changePriority)(todoInArray,priorityInput.value)\n\n                                    while(todos.childNodes.length>2)\n                                    {\n                                            todos.removeChild(todos.lastChild)\n                                    }\n                                    const todoPlace = _projectManager__WEBPACK_IMPORTED_MODULE_0__.myProjectManager.projectArray[projectIndex].todos\n                                    for(let i = 0;i<todoPlace.length;i++)\n                                    {\n                                        const todo = todoPlace[i]\n                                        const todoDiv = createTodoDiv(todo,i,projectIndex)\n                                        todos.appendChild(todoDiv)\n                                    }\n                                    while(ul1.childNodes.length>1)\n                                    {\n                                            ul1.removeChild(ul1.lastChild)\n                                    }\n                            })\n                    \n                })\n                return todoDiv\n            }\n        \n        //createTodoButton\n        const createTodoButton = document.createElement(\"div\")\n        createTodoButton.textContent = \"Create todo\"\n        ul1.appendChild(createTodoButton)\n        createTodoButton.classList.add(\"button\")\n        createTodoButton.addEventListener(\"click\", function createTodoDom(){\n                if(createTodoButton.classList.contains(\"clicked\") === false){\n                createTodoButton.classList.add(\"clicked\")\n                const ulToDo = document.querySelector(\"#ul1\")\n                const textTitle = document.createElement(\"li\")\n                const textTitleInput = document.createElement(\"input\")\n                textTitleInput.setAttribute(\"id\",\"textTitleInput\")\n                textTitle.appendChild(textTitleInput)\n                ulToDo.appendChild(textTitle)\n                const dueDate = document.createElement(\"li\")\n                const dueDateInput = document.createElement(\"input\")\n                dueDateInput.setAttribute(\"type\",\"date\")\n                dueDateInput.setAttribute(\"id\",\"dueDateInput\")\n                dueDate.appendChild(dueDateInput)\n                ulToDo.appendChild(dueDate)\n                const  priority = document.createElement(\"li\")\n                const   priorityInput = document.createElement(\"input\")\n                priorityInput.setAttribute(\"id\",\"priorityInput\")\n                priority.appendChild(priorityInput)\n                ulToDo.appendChild(priority)\n                const submitButton = document.createElement(\"button\")\n                submitButton.textContent = \"Create todo\"\n                ulToDo.appendChild(submitButton)\n                submitButton.addEventListener(\"click\",function addTodoToTheProjects() {\n                if(textTitleInput.value !== \"\" && (dueDateInput.value !== \" \" || dueDateInput.checkValidity() === false)   && priorityInput.value !== \"\")\n                {\n                createTodoButton.classList.remove(\"clicked\")\n                ;(0,_todos__WEBPACK_IMPORTED_MODULE_2__.createTodo)(textTitleInput.value,dueDateInput.value,priorityInput.value,projectIndex)\n                while(todos.childNodes.length>2)\n                {\n                        todos.removeChild(todos.lastChild)\n                }\n                for(let i = 0;i<todoPlace.length;i++)\n                        {\n                        const todo2 = todoPlace[i]\n                        const todoDiv2 = createTodoDiv(todo2,i,projectIndex)\n                        todos.appendChild(todoDiv2)\n                        }\n                \n                while (ul1.childNodes.length > 1) {\n                        ul1.removeChild(ul1.lastChild);\n                    }\n                }})}\n                \n                \n        })\n        //return button\n}\n )}}\n selectTodo()\n\n//# sourceURL=webpack://a/./src/todosDom.js?");

/***/ }),

/***/ "./src/Font.ttf":
/*!**********************!*\
  !*** ./src/Font.ttf ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"98887ab845648c8a93be.ttf\";\n\n//# sourceURL=webpack://a/./src/Font.ttf?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;