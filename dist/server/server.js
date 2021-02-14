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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\n// css base code, injected by the css-loader\r\n// eslint-disable-next-line func-names\r\nmodule.exports = function (useSourceMap) {\r\n    var list = []; // return the list of modules as css string\r\n    list.toString = function toString() {\r\n        return this.map(function (item) {\r\n            var content = cssWithMappingToString(item, useSourceMap);\r\n            if (item[2]) {\r\n                return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\r\n            }\r\n            return content;\r\n        }).join('');\r\n    }; // import a list of modules into the list\r\n    // eslint-disable-next-line func-names\r\n    list.i = function (modules, mediaQuery, dedupe) {\r\n        if (typeof modules === 'string') {\r\n            // eslint-disable-next-line no-param-reassign\r\n            modules = [[null, modules, '']];\r\n        }\r\n        var alreadyImportedModules = {};\r\n        if (dedupe) {\r\n            for (var i = 0; i < this.length; i++) {\r\n                // eslint-disable-next-line prefer-destructuring\r\n                var id = this[i][0];\r\n                if (id != null) {\r\n                    alreadyImportedModules[id] = true;\r\n                }\r\n            }\r\n        }\r\n        for (var _i = 0; _i < modules.length; _i++) {\r\n            var item = [].concat(modules[_i]);\r\n            if (dedupe && alreadyImportedModules[item[0]]) {\r\n                // eslint-disable-next-line no-continue\r\n                continue;\r\n            }\r\n            if (mediaQuery) {\r\n                if (!item[2]) {\r\n                    item[2] = mediaQuery;\r\n                }\r\n                else {\r\n                    item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\r\n                }\r\n            }\r\n            list.push(item);\r\n        }\r\n    };\r\n    return list;\r\n};\r\nfunction cssWithMappingToString(item, useSourceMap) {\r\n    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\r\n    var cssMapping = item[3];\r\n    if (!cssMapping) {\r\n        return content;\r\n    }\r\n    if (useSourceMap && typeof btoa === 'function') {\r\n        var sourceMapping = toComment(cssMapping);\r\n        var sourceURLs = cssMapping.sources.map(function (source) {\r\n            return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\r\n        });\r\n        return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\r\n    }\r\n    return [content].join('\\n');\r\n} // Adapted from convert-source-map (MIT)\r\nfunction toComment(sourceMap) {\r\n    // eslint-disable-next-line no-undef\r\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\r\n    var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\r\n    return \"/*# \".concat(data, \" */\");\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\r\nvar Layout_1 = __webpack_require__(/*! ./shared/LayoutApp/Layout/Layout */ \"./src/shared/LayoutApp/Layout/Layout.tsx\");\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nvar Header_1 = __webpack_require__(/*! ./shared/LayoutApp/Header/Header */ \"./src/shared/LayoutApp/Header/Header.tsx\");\r\nvar Content_1 = __webpack_require__(/*! ./shared/LayoutApp/Content/Content */ \"./src/shared/LayoutApp/Content/Content.tsx\");\r\nvar CardList_1 = __webpack_require__(/*! ./shared/LayoutApp/CardList/CardList */ \"./src/shared/LayoutApp/CardList/CardList.tsx\");\r\nfunction AppComponent() {\r\n    return (react_1.default.createElement(Layout_1.Layout, null,\r\n        react_1.default.createElement(Header_1.Header, null),\r\n        react_1.default.createElement(Content_1.Content, null,\r\n            react_1.default.createElement(CardList_1.CardList, null))));\r\n}\r\nexports.App = root_1.hot(AppComponent);\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/main.global.css":
/*!*****************************!*\
  !*** ./src/main.global.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);\"]);\n// Module\nexports.push([module.i, \":root {\\r\\n    --black: #333333;\\r\\n    --white: #ffffff;\\r\\n    --orange: #CC6633;\\r\\n    --green: #A4CC33;\\r\\n    --greyF3: #f3f3f3;\\r\\n    --greyF4: #f4f4f4;\\r\\n    --greyD9: #d9d9d9;\\r\\n    --greyC4: #c4c4c4;\\r\\n    --grey99: #999999;\\r\\n    --grey66: #666666\\r\\n}\\r\\n\\r\\nbody {\\r\\n    padding: 0;\\r\\n    margin: 0;\\r\\n    background-color: var(--greyF4);\\r\\n    font-size: 14px;\\r\\n    line-height: 16px;\\r\\n    font-family: \\\"Roboto\\\", serif;\\r\\n}\\r\\n\\r\\n* {\\r\\n    color: var(--black);\\r\\n    box-sizing: border-box;\\r\\n    -webkit-font-smoothing: antialiased;\\r\\n    -moz-osx-font-smoothing: grayscale;\\r\\n}\\r\\n\\r\\nul {\\r\\n    margin: 0;\\r\\n    padding: 0;\\r\\n    list-style: none;\\r\\n}\\r\\n\\r\\na {\\r\\n    text-decoration: none;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n    padding: 0;\\r\\n    border: 0;\\r\\n    background: transparent;\\r\\n    cursor: pointer;\\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/main.global.css?");

/***/ }),

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.indexTemplate = void 0;\r\nvar indexTemplate = function (content) { return \"\\n\\n<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n  <head>\\n    <meta charset=\\\"UTF-8\\\" />\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\" />\\n    <title>Reddit</title>\\n    <script src=\\\"/static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n  </head>\\n  <body>\\n    <div id=\\\"react-root\\\">\" + content + \"</div>\\n  </body>\\n</html>\\n\"; };\r\nexports.indexTemplate = indexTemplate;\r\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\r\nvar indexTemplate_js_1 = __webpack_require__(/*! ./indexTemplate.js */ \"./src/server/indexTemplate.js\");\r\nvar App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\r\nvar app = express_1.default();\r\napp.use(\"/static\", express_1.default.static(\"./dist/client\"));\r\napp.get(\"/\", function (req, res) {\r\n    res.send(indexTemplate_js_1.indexTemplate(server_1.default.renderToString(App_1.App())));\r\n});\r\napp.listen(3000, function () {\r\n    console.log(\"Server started on http://localhost:3000\");\r\n});\r\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/LayoutApp/CardList/Card/Card.tsx":
/*!*****************************************************!*\
  !*** ./src/shared/LayoutApp/CardList/Card/Card.tsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Card = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar card_css_1 = __importDefault(__webpack_require__(/*! ./card.css */ \"./src/shared/LayoutApp/CardList/Card/card.css\"));\r\nvar TextContent_1 = __webpack_require__(/*! ./TextContent */ \"./src/shared/LayoutApp/CardList/Card/TextContent/index.ts\");\r\nfunction Card() {\r\n    return (react_1.default.createElement(\"li\", { className: card_css_1.default.card },\r\n        react_1.default.createElement(TextContent_1.TextContent, null)));\r\n}\r\nexports.Card = Card;\r\n\n\n//# sourceURL=webpack:///./src/shared/LayoutApp/CardList/Card/Card.tsx?");

/***/ }),

/***/ "./src/shared/LayoutApp/CardList/Card/TextContent/TextContent.tsx":
/*!************************************************************************!*\
  !*** ./src/shared/LayoutApp/CardList/Card/TextContent/TextContent.tsx ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.TextContent = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar textcontent_css_1 = __importDefault(__webpack_require__(/*! ./textcontent.css */ \"./src/shared/LayoutApp/CardList/Card/TextContent/textcontent.css\"));\r\nvar UserData_1 = __webpack_require__(/*! ./UserData/UserData */ \"./src/shared/LayoutApp/CardList/Card/TextContent/UserData/UserData.tsx\");\r\nvar Title_1 = __webpack_require__(/*! ./Title */ \"./src/shared/LayoutApp/CardList/Card/TextContent/Title/index.ts\");\r\nfunction TextContent() {\r\n    return (react_1.default.createElement(\"div\", { className: textcontent_css_1.default.textContent },\r\n        react_1.default.createElement(UserData_1.UserData, { userAvatar: \"https://avatars.mds.yandex.net/get-pdb/903199/8f573f02-a18b-4d2b-9342-4c0a9f639e3d/s1200?webp=false\", userName: \"\\u0414\\u043C\\u0438\\u0442\\u0440\\u0438\\u0439 \\u0413\\u0440\\u0438\\u0448\\u0438\\u043D\", publishedTimeAgo: \"4 \\u0447\\u0430\\u0441\\u0430 \\u043D\\u0430\\u0437\\u0430\\u0434\" }),\r\n        react_1.default.createElement(Title_1.Title, { text: \"\\u041F\\u0440\\u043E\\u0442\\u0438\\u0432\\u043E\\u043F\\u043E\\u043B\\u043E\\u0436\\u043D\\u0430\\u044F \\u0442\\u043E\\u0447\\u043A\\u0430 \\u0437\\u0440\\u0435\\u043D\\u0438\\u044F \\u043D\\u0430 \\u0434\\u0430\\u043D\\u043D\\u0443\\u044E \\u043F\\u0440\\u043E\\u0431\\u043B\\u0435\\u043C\\u0443\" })));\r\n}\r\nexports.TextContent = TextContent;\r\n\n\n//# sourceURL=webpack:///./src/shared/LayoutApp/CardList/Card/TextContent/TextContent.tsx?");

/***/ }),

/***/ "./src/shared/LayoutApp/CardList/Card/TextContent/Title/Title.tsx":
/*!************************************************************************!*\
  !*** ./src/shared/LayoutApp/CardList/Card/TextContent/Title/Title.tsx ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Title = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar title_css_1 = __importDefault(__webpack_require__(/*! ./title.css */ \"./src/shared/LayoutApp/CardList/Card/TextContent/Title/title.css\"));\r\nfunction Title(props) {\r\n    return (react_1.default.createElement(\"h2\", { className: title_css_1.default.title },\r\n        react_1.default.createElement(\"a\", { className: title_css_1.default.postLink, href: \"#post-link\" }, props.text)));\r\n}\r\nexports.Title = Title;\r\n\n\n//# sourceURL=webpack:///./src/shared/LayoutApp/CardList/Card/TextContent/Title/Title.tsx?");

/***/ }),

/***/ "./src/shared/LayoutApp/CardList/Card/TextContent/Title/index.ts":
/*!***********************************************************************!*\
  !*** ./src/shared/LayoutApp/CardList/Card/TextContent/Title/index.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Title */ \"./src/shared/LayoutApp/CardList/Card/TextContent/Title/Title.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/LayoutApp/CardList/Card/TextContent/Title/index.ts?");

/***/ }),

/***/ "./src/shared/LayoutApp/CardList/Card/TextContent/Title/title.css":
/*!************************************************************************!*\
  !*** ./src/shared/LayoutApp/CardList/Card/TextContent/Title/title.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"title\": \"title__title--3eMxY\",\n\t\"postLink\": \"title__postLink--1uUM4\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/LayoutApp/CardList/Card/TextContent/Title/title.css?");

/***/ }),

/***/ "./src/shared/LayoutApp/CardList/Card/TextContent/UserData/UserData.tsx":
/*!******************************************************************************!*\
  !*** ./src/shared/LayoutApp/CardList/Card/TextContent/UserData/UserData.tsx ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserData = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar userdata_css_1 = __importDefault(__webpack_require__(/*! ./userdata.css */ \"./src/shared/LayoutApp/CardList/Card/TextContent/UserData/userdata.css\"));\r\nfunction UserData(props) {\r\n    return (react_1.default.createElement(\"div\", { className: userdata_css_1.default.metaData },\r\n        react_1.default.createElement(\"div\", { className: userdata_css_1.default.userLink },\r\n            react_1.default.createElement(\"img\", { className: userdata_css_1.default.avatar, alt: \"avatar\", src: props.userAvatar }),\r\n            react_1.default.createElement(\"a\", { className: userdata_css_1.default.userName, href: \"#user-url\" }, props.userName)),\r\n        react_1.default.createElement(\"span\", { className: userdata_css_1.default.createdAt },\r\n            react_1.default.createElement(\"span\", { className: userdata_css_1.default.publishedLabel }, \"\\u043E\\u043F\\u0443\\u0431\\u043B\\u0438\\u043A\\u043E\\u0432\\u0430\\u043D\\u043E\"),\r\n            props.publishedTimeAgo)));\r\n}\r\nexports.UserData = UserData;\r\n\n\n//# sourceURL=webpack:///./src/shared/LayoutApp/CardList/Card/TextContent/UserData/UserData.tsx?");

/***/ }),

/***/ "./src/shared/LayoutApp/CardList/Card/TextContent/UserData/userdata.css":
/*!******************************************************************************!*\
  !*** ./src/shared/LayoutApp/CardList/Card/TextContent/UserData/userdata.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"metaData\": \"userdata__metaData--1Z21l\",\n\t\"userLink\": \"userdata__userLink--2ARi8\",\n\t\"avatar\": \"userdata__avatar--2uZuS\",\n\t\"userName\": \"userdata__userName--1P15N\",\n\t\"createdAt\": \"userdata__createdAt--3HaYo\",\n\t\"publishedLabel\": \"userdata__publishedLabel--3TfSn\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/LayoutApp/CardList/Card/TextContent/UserData/userdata.css?");

/***/ }),

/***/ "./src/shared/LayoutApp/CardList/Card/TextContent/index.ts":
/*!*****************************************************************!*\
  !*** ./src/shared/LayoutApp/CardList/Card/TextContent/index.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./TextContent */ \"./src/shared/LayoutApp/CardList/Card/TextContent/TextContent.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/LayoutApp/CardList/Card/TextContent/index.ts?");

/***/ }),

/***/ "./src/shared/LayoutApp/CardList/Card/TextContent/textcontent.css":
/*!************************************************************************!*\
  !*** ./src/shared/LayoutApp/CardList/Card/TextContent/textcontent.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"textContent\": \"textcontent__textContent--24K2d\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/LayoutApp/CardList/Card/TextContent/textcontent.css?");

/***/ }),

/***/ "./src/shared/LayoutApp/CardList/Card/card.css":
/*!*****************************************************!*\
  !*** ./src/shared/LayoutApp/CardList/Card/card.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"card\": \"card__card--20YfB\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/LayoutApp/CardList/Card/card.css?");

/***/ }),

/***/ "./src/shared/LayoutApp/CardList/Card/index.ts":
/*!*****************************************************!*\
  !*** ./src/shared/LayoutApp/CardList/Card/index.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Card */ \"./src/shared/LayoutApp/CardList/Card/Card.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/LayoutApp/CardList/Card/index.ts?");

/***/ }),

/***/ "./src/shared/LayoutApp/CardList/CardList.tsx":
/*!****************************************************!*\
  !*** ./src/shared/LayoutApp/CardList/CardList.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CardList = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar cardlist_css_1 = __importDefault(__webpack_require__(/*! ./cardlist.css */ \"./src/shared/LayoutApp/CardList/cardlist.css\"));\r\nvar Card_1 = __webpack_require__(/*! ./Card */ \"./src/shared/LayoutApp/CardList/Card/index.ts\");\r\nfunction CardList() {\r\n    return (react_1.default.createElement(\"ul\", { className: cardlist_css_1.default.cardsList },\r\n        react_1.default.createElement(Card_1.Card, null)));\r\n}\r\nexports.CardList = CardList;\r\n\n\n//# sourceURL=webpack:///./src/shared/LayoutApp/CardList/CardList.tsx?");

/***/ }),

/***/ "./src/shared/LayoutApp/CardList/cardlist.css":
/*!****************************************************!*\
  !*** ./src/shared/LayoutApp/CardList/cardlist.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"cardsList\": \"cardlist__cardsList--Ijeip\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/LayoutApp/CardList/cardlist.css?");

/***/ }),

/***/ "./src/shared/LayoutApp/Content/Content.tsx":
/*!**************************************************!*\
  !*** ./src/shared/LayoutApp/Content/Content.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Content = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar content_css_1 = __importDefault(__webpack_require__(/*! ./content.css */ \"./src/shared/LayoutApp/Content/content.css\"));\r\nfunction Content(_a) {\r\n    var children = _a.children;\r\n    return (react_1.default.createElement(\"main\", { className: content_css_1.default.content }, children));\r\n}\r\nexports.Content = Content;\r\n\n\n//# sourceURL=webpack:///./src/shared/LayoutApp/Content/Content.tsx?");

/***/ }),

/***/ "./src/shared/LayoutApp/Content/content.css":
/*!**************************************************!*\
  !*** ./src/shared/LayoutApp/Content/content.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"content\": \"content__content--2Da88\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/LayoutApp/Content/content.css?");

/***/ }),

/***/ "./src/shared/LayoutApp/Header/Header.tsx":
/*!************************************************!*\
  !*** ./src/shared/LayoutApp/Header/Header.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Header = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar SearchBlock_1 = __webpack_require__(/*! ./SearchBlock/SearchBlock */ \"./src/shared/LayoutApp/Header/SearchBlock/SearchBlock.tsx\");\r\nvar ThreadTitle_1 = __webpack_require__(/*! ./ThreadTitle/ThreadTitle */ \"./src/shared/LayoutApp/Header/ThreadTitle/ThreadTitle.tsx\");\r\nvar SortBlock_1 = __webpack_require__(/*! ./SortBlock/SortBlock */ \"./src/shared/LayoutApp/Header/SortBlock/SortBlock.tsx\");\r\nvar header_css_1 = __importDefault(__webpack_require__(/*! ./header.css */ \"./src/shared/LayoutApp/Header/header.css\"));\r\nfunction Header() {\r\n    return (react_1.default.createElement(\"header\", { className: header_css_1.default.header },\r\n        react_1.default.createElement(SearchBlock_1.SearchBlock, null),\r\n        react_1.default.createElement(ThreadTitle_1.ThreadTitle, null),\r\n        react_1.default.createElement(SortBlock_1.SortBlock, null)));\r\n}\r\nexports.Header = Header;\r\n\n\n//# sourceURL=webpack:///./src/shared/LayoutApp/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/LayoutApp/Header/SearchBlock/SearchBlock.tsx":
/*!*****************************************************************!*\
  !*** ./src/shared/LayoutApp/Header/SearchBlock/SearchBlock.tsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SearchBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar searchblock_css_1 = __importDefault(__webpack_require__(/*! ./searchblock.css */ \"./src/shared/LayoutApp/Header/SearchBlock/searchblock.css\"));\r\nfunction SearchBlock() {\r\n    return (react_1.default.createElement(\"div\", { className: searchblock_css_1.default.searchBlock }, \"search block\"));\r\n}\r\nexports.SearchBlock = SearchBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/LayoutApp/Header/SearchBlock/SearchBlock.tsx?");

/***/ }),

/***/ "./src/shared/LayoutApp/Header/SearchBlock/searchblock.css":
/*!*****************************************************************!*\
  !*** ./src/shared/LayoutApp/Header/SearchBlock/searchblock.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"searchBlock\": \"searchblock__searchBlock--2jdFN\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/LayoutApp/Header/SearchBlock/searchblock.css?");

/***/ }),

/***/ "./src/shared/LayoutApp/Header/SortBlock/SortBlock.tsx":
/*!*************************************************************!*\
  !*** ./src/shared/LayoutApp/Header/SortBlock/SortBlock.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SortBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar sortblock_css_1 = __importDefault(__webpack_require__(/*! ./sortblock.css */ \"./src/shared/LayoutApp/Header/SortBlock/sortblock.css\"));\r\nfunction SortBlock() {\r\n    return (react_1.default.createElement(\"div\", { className: sortblock_css_1.default.sortBlock }, \"sorting dropdown\"));\r\n}\r\nexports.SortBlock = SortBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/LayoutApp/Header/SortBlock/SortBlock.tsx?");

/***/ }),

/***/ "./src/shared/LayoutApp/Header/SortBlock/sortblock.css":
/*!*************************************************************!*\
  !*** ./src/shared/LayoutApp/Header/SortBlock/sortblock.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"sortBlock\": \"sortblock__sortBlock--3iOiL\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/LayoutApp/Header/SortBlock/sortblock.css?");

/***/ }),

/***/ "./src/shared/LayoutApp/Header/ThreadTitle/ThreadTitle.tsx":
/*!*****************************************************************!*\
  !*** ./src/shared/LayoutApp/Header/ThreadTitle/ThreadTitle.tsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ThreadTitle = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar threadtitle_css_1 = __importDefault(__webpack_require__(/*! ./threadtitle.css */ \"./src/shared/LayoutApp/Header/ThreadTitle/threadtitle.css\"));\r\nfunction ThreadTitle() {\r\n    return (react_1.default.createElement(\"h1\", { className: threadtitle_css_1.default.threadTitle }, \"Header\"));\r\n}\r\nexports.ThreadTitle = ThreadTitle;\r\n\n\n//# sourceURL=webpack:///./src/shared/LayoutApp/Header/ThreadTitle/ThreadTitle.tsx?");

/***/ }),

/***/ "./src/shared/LayoutApp/Header/ThreadTitle/threadtitle.css":
/*!*****************************************************************!*\
  !*** ./src/shared/LayoutApp/Header/ThreadTitle/threadtitle.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"threadTitle\": \"threadtitle__threadTitle--28P-A\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/LayoutApp/Header/ThreadTitle/threadtitle.css?");

/***/ }),

/***/ "./src/shared/LayoutApp/Header/header.css":
/*!************************************************!*\
  !*** ./src/shared/LayoutApp/Header/header.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"header__header--2Seov\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/LayoutApp/Header/header.css?");

/***/ }),

/***/ "./src/shared/LayoutApp/Layout/Layout.tsx":
/*!************************************************!*\
  !*** ./src/shared/LayoutApp/Layout/Layout.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Layout = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar layout_css_1 = __importDefault(__webpack_require__(/*! ./layout.css */ \"./src/shared/LayoutApp/Layout/layout.css\"));\r\nfunction Layout(_a) {\r\n    var children = _a.children;\r\n    return (react_1.default.createElement(\"div\", { className: layout_css_1.default.layout }, children));\r\n}\r\nexports.Layout = Layout;\r\n\n\n//# sourceURL=webpack:///./src/shared/LayoutApp/Layout/Layout.tsx?");

/***/ }),

/***/ "./src/shared/LayoutApp/Layout/layout.css":
/*!************************************************!*\
  !*** ./src/shared/LayoutApp/Layout/layout.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"layout\": \"layout__layout--3NsrO\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/LayoutApp/Layout/layout.css?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ })

/******/ });