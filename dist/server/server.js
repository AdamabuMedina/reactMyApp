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
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\r\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\r\nvar Header_1 = __webpack_require__(/*! ./shared/Header/Header */ \"./src/shared/Header/Header.tsx\");\r\nvar Content_1 = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\r\nvar CardList_1 = __webpack_require__(/*! ./shared/CardList */ \"./src/shared/CardList/index.ts\");\r\nvar context_1 = __webpack_require__(/*! ./context */ \"./src/context/index.ts\");\r\nvar postContext_1 = __webpack_require__(/*! ./context/postContext */ \"./src/context/postContext.tsx\");\r\nvar hooks_1 = __webpack_require__(/*! ./hooks */ \"./src/hooks/index.ts\");\r\nvar commentContext_1 = __webpack_require__(/*! ./context/commentContext */ \"./src/context/commentContext.ts\");\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\r\nvar store_1 = __webpack_require__(/*! ./store */ \"./src/store.ts\");\r\nvar redux_1 = __webpack_require__(/*! redux */ \"redux\");\r\nvar store = redux_1.createStore(store_1.rootReducer, redux_devtools_extension_1.composeWithDevTools());\r\nfunction AppComponent() {\r\n    var token = hooks_1.useToken()[0];\r\n    var CommentProvider = commentContext_1.commentContext.Provider;\r\n    var TokenProvider = context_1.tokenContext.Provider;\r\n    var _a = react_1.default.useState(\"\"), commentValue = _a[0], setCommentValue = _a[1];\r\n    var _b = react_1.default.useState(-1), commentActive = _b[0], setCommentActive = _b[1];\r\n    var _c = react_1.default.useState([\r\n        {\r\n            name: \"Adam 1\",\r\n            time: \"1 час назад\",\r\n            text: \"Комментарий 1, Комментарий 1, Комментарий 1\",\r\n            category: \"Спорт\",\r\n            id: 1,\r\n            ref: react_1.default.useRef(null)\r\n        },\r\n        {\r\n            name: \"Adam 2\",\r\n            time: \"2 часа назад\",\r\n            text: \"Комментарий 2, Комментарий 2, Комментарий 2\",\r\n            category: \"Спорт\",\r\n            id: 2,\r\n            ref: react_1.default.useRef(null),\r\n            comments: [\r\n                {\r\n                    name: \"Adam 3\",\r\n                    time: \"3 часа назад\",\r\n                    text: \"Комментарий 3, Комментарий 3, Комментарий 3\",\r\n                    category: \"Спорт\",\r\n                    id: 3,\r\n                    ref: react_1.default.useRef(null)\r\n                },\r\n            ]\r\n        },\r\n        {\r\n            name: \"Adam 4\",\r\n            time: \"24 часа назад\",\r\n            text: \"Комментарий 4, Комментарий 4, Комментарий 4\",\r\n            category: \"Спорт\",\r\n            id: 24,\r\n            ref: react_1.default.useRef(null)\r\n        }\r\n    ]), commentComments = _c[0], setComments = _c[1];\r\n    return (react_1.default.createElement(react_redux_1.Provider, { store: store },\r\n        react_1.default.createElement(CommentProvider, { value: {\r\n                value: commentValue,\r\n                onChange: setCommentValue,\r\n                onChangeActive: setCommentActive,\r\n                activeComment: commentActive,\r\n                allComments: commentComments,\r\n                onChangeComments: setComments,\r\n            } },\r\n            react_1.default.createElement(TokenProvider, { value: token },\r\n                react_1.default.createElement(context_1.UserContextProvider, null,\r\n                    react_1.default.createElement(postContext_1.PostsContextProvider, null,\r\n                        react_1.default.createElement(Layout_1.Layout, null,\r\n                            react_1.default.createElement(Header_1.Header, null),\r\n                            react_1.default.createElement(Content_1.Content, null,\r\n                                react_1.default.createElement(CardList_1.CardList, null)))))))));\r\n}\r\n;\r\nexports.App = root_1.hot(function () { return react_1.default.createElement(AppComponent, null); });\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/context/commentContext.ts":
/*!***************************************!*\
  !*** ./src/context/commentContext.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.commentContext = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nexports.commentContext = react_1.default.createContext({\r\n    value: \"\",\r\n    onChange: function () { },\r\n    onChangeActive: function () { },\r\n    onChangeComments: function () { },\r\n    allComments: [],\r\n    activeComment: -1,\r\n});\r\n\n\n//# sourceURL=webpack:///./src/context/commentContext.ts?");

/***/ }),

/***/ "./src/context/index.ts":
/*!******************************!*\
  !*** ./src/context/index.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./tokenContext */ \"./src/context/tokenContext.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./userContext */ \"./src/context/userContext.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/context/index.ts?");

/***/ }),

/***/ "./src/context/postContext.tsx":
/*!*************************************!*\
  !*** ./src/context/postContext.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.PostsContextProvider = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar hooks_1 = __webpack_require__(/*! ../hooks */ \"./src/hooks/index.ts\");\r\nvar postContext = react_1.default.createContext([]);\r\nexports.default = postContext;\r\nfunction PostsContextProvider(_a) {\r\n    var children = _a.children;\r\n    var posts = hooks_1.usePostsData()[0];\r\n    return (react_1.default.createElement(postContext.Provider, { value: posts }, children));\r\n}\r\nexports.PostsContextProvider = PostsContextProvider;\r\n\n\n//# sourceURL=webpack:///./src/context/postContext.tsx?");

/***/ }),

/***/ "./src/context/tokenContext.ts":
/*!*************************************!*\
  !*** ./src/context/tokenContext.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.tokenContext = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nexports.tokenContext = react_1.default.createContext('');\r\n\n\n//# sourceURL=webpack:///./src/context/tokenContext.ts?");

/***/ }),

/***/ "./src/context/userContext.tsx":
/*!*************************************!*\
  !*** ./src/context/userContext.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserContextProvider = exports.userContext = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar hooks_1 = __webpack_require__(/*! ../hooks */ \"./src/hooks/index.ts\");\r\nexports.userContext = react_1.default.createContext({});\r\nfunction UserContextProvider(_a) {\r\n    var children = _a.children;\r\n    var data = hooks_1.useUserData()[0];\r\n    return (react_1.default.createElement(exports.userContext.Provider, { value: data }, children));\r\n}\r\nexports.UserContextProvider = UserContextProvider;\r\n\n\n//# sourceURL=webpack:///./src/context/userContext.tsx?");

/***/ }),

/***/ "./src/hooks/index.ts":
/*!****************************!*\
  !*** ./src/hooks/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./usePostsData */ \"./src/hooks/usePostsData.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./useToken */ \"./src/hooks/useToken.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./useUserData */ \"./src/hooks/useUserData.ts\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/hooks/index.ts?");

/***/ }),

/***/ "./src/hooks/usePostsData.ts":
/*!***********************************!*\
  !*** ./src/hooks/usePostsData.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.usePostsData = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nvar context_1 = __webpack_require__(/*! ../context */ \"./src/context/index.ts\");\r\nfunction usePostsData() {\r\n    var _a = react_1.default.useState([]), post = _a[0], setPosts = _a[1];\r\n    var token = react_1.default.useContext(context_1.tokenContext);\r\n    react_1.default.useEffect(function () {\r\n        if (token && token != 'undefined' && token != 'false') {\r\n            axios_1.default.get('https://oauth.reddit.com/best', {\r\n                headers: {\r\n                    Authorization: \"bearer \" + token\r\n                },\r\n            }).then(function (resp) {\r\n                var bestPosts = resp.data.data.children;\r\n                bestPosts.map(function (post) {\r\n                    post.text = post.data.title;\r\n                    post.id = post.data.id;\r\n                });\r\n                console.log(bestPosts, 'NEW ! posts');\r\n                setPosts(bestPosts);\r\n            })\r\n                .catch(console.log);\r\n        }\r\n    }, [token]);\r\n    return [post];\r\n}\r\nexports.usePostsData = usePostsData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/usePostsData.ts?");

/***/ }),

/***/ "./src/hooks/useToken.ts":
/*!*******************************!*\
  !*** ./src/hooks/useToken.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useToken = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction useToken() {\r\n    var _a = react_1.default.useState(''), token = _a[0], setToken = _a[1];\r\n    react_1.default.useEffect(function () {\r\n        if (window.__token__) {\r\n            setToken(window.__token__);\r\n        }\r\n    }, []);\r\n    return [token];\r\n}\r\nexports.useToken = useToken;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useToken.ts?");

/***/ }),

/***/ "./src/hooks/useUserData.ts":
/*!**********************************!*\
  !*** ./src/hooks/useUserData.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.useUserData = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nvar context_1 = __webpack_require__(/*! ../context */ \"./src/context/index.ts\");\r\nfunction useUserData() {\r\n    var _a = react_1.default.useState({}), data = _a[0], setData = _a[1];\r\n    var token = react_1.default.useContext(context_1.tokenContext);\r\n    react_1.default.useEffect(function () {\r\n        axios_1.default.get('https://oauth.reddit.com/api/v1/me', {\r\n            headers: { authorization: \"bearer \" + token }\r\n        })\r\n            .then(function (resp) {\r\n            var userData = resp.data;\r\n            setData({ name: userData.name, iconImg: userData.icon_img });\r\n        })\r\n            .catch(console.log);\r\n    }, [token]);\r\n    return [data];\r\n}\r\nexports.useUserData = useUserData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/useUserData.ts?");

/***/ }),

/***/ "./src/main.global.css":
/*!*****************************!*\
  !*** ./src/main.global.css ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n___CSS_LOADER_EXPORT___.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \":root {\\r\\n  --black: #333333;\\r\\n  --white: #ffffff;\\r\\n  --orange: #cc6633;\\r\\n  --green: #a4cc33;\\r\\n  --greyF3: #f3f3f3;\\r\\n  --greyF4: #f4f4f4;\\r\\n  --greyD9: #d9d9d9;\\r\\n  --greyC4: #c4c4c4;\\r\\n  --grey99: #999999;\\r\\n  --grey66: #666666;\\r\\n}\\r\\n\\r\\n* {\\r\\n  color:var(--black);\\r\\n  box-sizing: border-box;\\r\\n  --webkit-font-smoothing: antialiased;\\r\\n  --mox-osx-font-soothing: grayscale;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  background-color: var(--greyF4);\\r\\n  font-size : 14px;\\r\\n  line-height: 16px;\\r\\n  font-family: 'Roboto', sans-serif;\\r\\n}\\r\\n\\r\\nul {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  padding: 0;\\r\\n  border: 0;\\r\\n  background: transparent;\\r\\n}\\r\\n\\r\\np {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/main.global.css?");

/***/ }),

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.indexTemplate = void 0;\r\nexports.indexTemplate = function (content, token) { /*html*/ return \"\\n<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n<head>\\n  <title>Reddit</title>\\n  <script src=\\\"static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n  <script>\\n    window.__token__='\" + token + \"'\\n  </script>\\n</head>\\n<body>\\n  <div id=\\\"react_root\\\">\" + content + \"</div>\\n  <div id=\\\"modal_root\\\"></div>\\n  <div id=\\\"dropdown_root\\\"></div>\\n</body>\\n</html>\\n\"; };\r\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\r\nvar App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\r\nvar indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\r\nvar app = express_1.default();\r\napp.use('/static', express_1.default.static('./dist/client'));\r\napp.get('/', function (req, res) {\r\n    res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(App_1.App())));\r\n});\r\napp.get('/auth', function (req, res) {\r\n    axios_1.default.post('https://www.reddit.com/api/v1/access_token', \"grant_type=authorization_code&code=\" + req.query.code + \"&redirect_uri=http://localhost:3000/auth\", {\r\n        auth: { username: process.env.CLIENT_ID, password: 'wQGhqx-O3P-QYdEZRI14oN5rRMgZGQ' },\r\n        headers: { 'Content-type': 'application/x-www-form-urlencoded' }\r\n    })\r\n        .then(function (_a) {\r\n        var data = _a.data;\r\n        res.send(indexTemplate_1.indexTemplate(server_1.default.renderToString(App_1.App()), data['access_token']));\r\n    })\r\n        .catch(console.log);\r\n});\r\napp.listen(3000, function () {\r\n    console.log('Server just have started on http://localhost:3000 ');\r\n});\r\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/CardList/Card/Card.css":
/*!*******************************************!*\
  !*** ./src/shared/CardList/Card/Card.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"card\": \"Card__card--2bjUi\",\n\t\"textContent\": \"Card__textContent--1ThyY\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Card.css?");

/***/ }),

/***/ "./src/shared/CardList/Card/Card.tsx":
/*!*******************************************!*\
  !*** ./src/shared/CardList/Card/Card.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Card = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Card_css_1 = __importDefault(__webpack_require__(/*! ./Card.css */ \"./src/shared/CardList/Card/Card.css\"));\r\nvar Controls_1 = __webpack_require__(/*! ./Controls */ \"./src/shared/CardList/Card/Controls/index.ts\");\r\nvar Menu_1 = __webpack_require__(/*! ./Menu */ \"./src/shared/CardList/Card/Menu/index.ts\");\r\nvar TextContent_1 = __webpack_require__(/*! ./TextContent */ \"./src/shared/CardList/Card/TextContent/index.ts\");\r\nvar Preview_1 = __webpack_require__(/*! ./Preview */ \"./src/shared/CardList/Card/Preview/index.ts\");\r\nfunction Card(_a) {\r\n    var text = _a.text;\r\n    return (react_1.default.createElement(\"li\", { className: Card_css_1.default.card },\r\n        react_1.default.createElement(TextContent_1.TextContent, { text: text }),\r\n        react_1.default.createElement(Preview_1.Preview, null),\r\n        react_1.default.createElement(Menu_1.Menu, null),\r\n        react_1.default.createElement(Controls_1.Controls, null)));\r\n}\r\nexports.Card = Card;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Card.tsx?");

/***/ }),

/***/ "./src/shared/CardList/Card/Controls/Actions/Actions.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/CardList/Card/Controls/Actions/Actions.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Actions = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar actions_css_1 = __importDefault(__webpack_require__(/*! ./actions.css */ \"./src/shared/CardList/Card/Controls/Actions/actions.css\"));\r\nvar SaveButton_1 = __webpack_require__(/*! ./SaveButton */ \"./src/shared/CardList/Card/Controls/Actions/SaveButton/index.ts\");\r\nvar ShareButton_1 = __webpack_require__(/*! ./ShareButton */ \"./src/shared/CardList/Card/Controls/Actions/ShareButton/index.ts\");\r\nfunction Actions() {\r\n    return (react_1.default.createElement(\"div\", { className: actions_css_1.default.actions },\r\n        react_1.default.createElement(ShareButton_1.ShareButton, null),\r\n        react_1.default.createElement(SaveButton_1.SaveButton, null)));\r\n}\r\nexports.Actions = Actions;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Controls/Actions/Actions.tsx?");

/***/ }),

/***/ "./src/shared/CardList/Card/Controls/Actions/SaveButton/SaveButton.tsx":
/*!*****************************************************************************!*\
  !*** ./src/shared/CardList/Card/Controls/Actions/SaveButton/SaveButton.tsx ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SaveButton = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Icon_1 = __webpack_require__(/*! ../../../../../Icons/Icon */ \"./src/shared/Icons/Icon.tsx\");\r\nvar saveButton_css_1 = __importDefault(__webpack_require__(/*! ./saveButton.css */ \"./src/shared/CardList/Card/Controls/Actions/SaveButton/saveButton.css\"));\r\nfunction SaveButton() {\r\n    return (react_1.default.createElement(\"button\", { className: saveButton_css_1.default.saveButton },\r\n        react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.save, size: 20 })));\r\n}\r\nexports.SaveButton = SaveButton;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Controls/Actions/SaveButton/SaveButton.tsx?");

/***/ }),

/***/ "./src/shared/CardList/Card/Controls/Actions/SaveButton/index.ts":
/*!***********************************************************************!*\
  !*** ./src/shared/CardList/Card/Controls/Actions/SaveButton/index.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./SaveButton */ \"./src/shared/CardList/Card/Controls/Actions/SaveButton/SaveButton.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Controls/Actions/SaveButton/index.ts?");

/***/ }),

/***/ "./src/shared/CardList/Card/Controls/Actions/SaveButton/saveButton.css":
/*!*****************************************************************************!*\
  !*** ./src/shared/CardList/Card/Controls/Actions/SaveButton/saveButton.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"saveButton\": \"saveButton__saveButton--3r7GN\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Controls/Actions/SaveButton/saveButton.css?");

/***/ }),

/***/ "./src/shared/CardList/Card/Controls/Actions/ShareButton/ShareButton.tsx":
/*!*******************************************************************************!*\
  !*** ./src/shared/CardList/Card/Controls/Actions/ShareButton/ShareButton.tsx ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ShareButton = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Icon_1 = __webpack_require__(/*! ../../../../../Icons/Icon */ \"./src/shared/Icons/Icon.tsx\");\r\nvar shareButton_css_1 = __importDefault(__webpack_require__(/*! ./shareButton.css */ \"./src/shared/CardList/Card/Controls/Actions/ShareButton/shareButton.css\"));\r\nfunction ShareButton() {\r\n    return (react_1.default.createElement(\"button\", { className: shareButton_css_1.default.shareButton },\r\n        react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.share, size: 20 })));\r\n}\r\nexports.ShareButton = ShareButton;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Controls/Actions/ShareButton/ShareButton.tsx?");

/***/ }),

/***/ "./src/shared/CardList/Card/Controls/Actions/ShareButton/index.ts":
/*!************************************************************************!*\
  !*** ./src/shared/CardList/Card/Controls/Actions/ShareButton/index.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./ShareButton */ \"./src/shared/CardList/Card/Controls/Actions/ShareButton/ShareButton.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Controls/Actions/ShareButton/index.ts?");

/***/ }),

/***/ "./src/shared/CardList/Card/Controls/Actions/ShareButton/shareButton.css":
/*!*******************************************************************************!*\
  !*** ./src/shared/CardList/Card/Controls/Actions/ShareButton/shareButton.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"shareButton\": \"shareButton__shareButton--3LdkW\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Controls/Actions/ShareButton/shareButton.css?");

/***/ }),

/***/ "./src/shared/CardList/Card/Controls/Actions/actions.css":
/*!***************************************************************!*\
  !*** ./src/shared/CardList/Card/Controls/Actions/actions.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"actions\": \"actions__actions--31B9Y\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Controls/Actions/actions.css?");

/***/ }),

/***/ "./src/shared/CardList/Card/Controls/Comments/Comments.tsx":
/*!*****************************************************************!*\
  !*** ./src/shared/CardList/Card/Controls/Comments/Comments.tsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Comments = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar comments_css_1 = __importDefault(__webpack_require__(/*! ./comments.css */ \"./src/shared/CardList/Card/Controls/Comments/comments.css\"));\r\nvar CommentsButton_1 = __webpack_require__(/*! ./CommentsButton */ \"./src/shared/CardList/Card/Controls/Comments/CommentsButton/index.ts\");\r\nfunction Comments() {\r\n    return (react_1.default.createElement(\"div\", { className: comments_css_1.default.comments },\r\n        react_1.default.createElement(CommentsButton_1.CommentsButton, null)));\r\n}\r\nexports.Comments = Comments;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Controls/Comments/Comments.tsx?");

/***/ }),

/***/ "./src/shared/CardList/Card/Controls/Comments/CommentsButton/CommentsButton.tsx":
/*!**************************************************************************************!*\
  !*** ./src/shared/CardList/Card/Controls/Comments/CommentsButton/CommentsButton.tsx ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentsButton = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Icon_1 = __webpack_require__(/*! ../../../../../Icons/Icon */ \"./src/shared/Icons/Icon.tsx\");\r\nvar commentsButton_css_1 = __importDefault(__webpack_require__(/*! ./commentsButton.css */ \"./src/shared/CardList/Card/Controls/Comments/CommentsButton/commentsButton.css\"));\r\nfunction CommentsButton() {\r\n    return (react_1.default.createElement(\"button\", { className: commentsButton_css_1.default.commentsButton },\r\n        react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.comment, size: 15 }),\r\n        react_1.default.createElement(\"span\", { className: commentsButton_css_1.default.commentsNumber }, \"13\")));\r\n}\r\nexports.CommentsButton = CommentsButton;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Controls/Comments/CommentsButton/CommentsButton.tsx?");

/***/ }),

/***/ "./src/shared/CardList/Card/Controls/Comments/CommentsButton/commentsButton.css":
/*!**************************************************************************************!*\
  !*** ./src/shared/CardList/Card/Controls/Comments/CommentsButton/commentsButton.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"commentsButton\": \"commentsButton__commentsButton--343d4\",\n\t\"commentsNumber\": \"commentsButton__commentsNumber--1tPbv\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Controls/Comments/CommentsButton/commentsButton.css?");

/***/ }),

/***/ "./src/shared/CardList/Card/Controls/Comments/CommentsButton/index.ts":
/*!****************************************************************************!*\
  !*** ./src/shared/CardList/Card/Controls/Comments/CommentsButton/index.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentsButton */ \"./src/shared/CardList/Card/Controls/Comments/CommentsButton/CommentsButton.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Controls/Comments/CommentsButton/index.ts?");

/***/ }),

/***/ "./src/shared/CardList/Card/Controls/Comments/comments.css":
/*!*****************************************************************!*\
  !*** ./src/shared/CardList/Card/Controls/Comments/comments.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"comments\": \"comments__comments--3nZ3o\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Controls/Comments/comments.css?");

/***/ }),

/***/ "./src/shared/CardList/Card/Controls/Controls.tsx":
/*!********************************************************!*\
  !*** ./src/shared/CardList/Card/Controls/Controls.tsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Controls = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Actions_1 = __webpack_require__(/*! ./Actions/Actions */ \"./src/shared/CardList/Card/Controls/Actions/Actions.tsx\");\r\nvar Comments_1 = __webpack_require__(/*! ./Comments/Comments */ \"./src/shared/CardList/Card/Controls/Comments/Comments.tsx\");\r\nvar controls_css_1 = __importDefault(__webpack_require__(/*! ./controls.css */ \"./src/shared/CardList/Card/Controls/controls.css\"));\r\nvar KarmaCounter_1 = __webpack_require__(/*! ./KarmaCounter */ \"./src/shared/CardList/Card/Controls/KarmaCounter/index.ts\");\r\nfunction Controls() {\r\n    return (react_1.default.createElement(\"div\", { className: controls_css_1.default.controls },\r\n        react_1.default.createElement(KarmaCounter_1.KarmaCounter, null),\r\n        react_1.default.createElement(Comments_1.Comments, null),\r\n        react_1.default.createElement(Actions_1.Actions, null)));\r\n}\r\nexports.Controls = Controls;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Controls/Controls.tsx?");

/***/ }),

/***/ "./src/shared/CardList/Card/Controls/KarmaCounter/KarmaCounter.tsx":
/*!*************************************************************************!*\
  !*** ./src/shared/CardList/Card/Controls/KarmaCounter/KarmaCounter.tsx ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.KarmaCounter = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar karmaCounter_css_1 = __importDefault(__webpack_require__(/*! ./karmaCounter.css */ \"./src/shared/CardList/Card/Controls/KarmaCounter/karmaCounter.css\"));\r\nfunction KarmaCounter() {\r\n    return (react_1.default.createElement(\"div\", { className: karmaCounter_css_1.default.karmaCounter },\r\n        react_1.default.createElement(\"button\", { className: karmaCounter_css_1.default.up },\r\n            react_1.default.createElement(\"svg\", { width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                react_1.default.createElement(\"path\", { d: \"M9.5 0L0 10H19L9.5 0Z\", fill: \"#D9D9D9\" }))),\r\n        react_1.default.createElement(\"span\", { className: karmaCounter_css_1.default.karmaValue }, \"234\"),\r\n        react_1.default.createElement(\"button\", { className: karmaCounter_css_1.default.down },\r\n            react_1.default.createElement(\"svg\", { className: karmaCounter_css_1.default.down, width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                react_1.default.createElement(\"path\", { d: \"M9.5 0L0 10H19L9.5 0Z\", fill: \"#D9D9D9\" })))));\r\n}\r\nexports.KarmaCounter = KarmaCounter;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Controls/KarmaCounter/KarmaCounter.tsx?");

/***/ }),

/***/ "./src/shared/CardList/Card/Controls/KarmaCounter/index.ts":
/*!*****************************************************************!*\
  !*** ./src/shared/CardList/Card/Controls/KarmaCounter/index.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./KarmaCounter */ \"./src/shared/CardList/Card/Controls/KarmaCounter/KarmaCounter.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Controls/KarmaCounter/index.ts?");

/***/ }),

/***/ "./src/shared/CardList/Card/Controls/KarmaCounter/karmaCounter.css":
/*!*************************************************************************!*\
  !*** ./src/shared/CardList/Card/Controls/KarmaCounter/karmaCounter.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"karmaCounter\": \"karmaCounter__karmaCounter--2NVv-\",\n\t\"karmaValue\": \"karmaCounter__karmaValue--2GqW8\",\n\t\"up\": \"karmaCounter__up--e7YNP\",\n\t\"down\": \"karmaCounter__down--37amW\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Controls/KarmaCounter/karmaCounter.css?");

/***/ }),

/***/ "./src/shared/CardList/Card/Controls/controls.css":
/*!********************************************************!*\
  !*** ./src/shared/CardList/Card/Controls/controls.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"controls\": \"controls__controls--Pb8va\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Controls/controls.css?");

/***/ }),

/***/ "./src/shared/CardList/Card/Controls/index.ts":
/*!****************************************************!*\
  !*** ./src/shared/CardList/Card/Controls/index.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Controls */ \"./src/shared/CardList/Card/Controls/Controls.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Controls/index.ts?");

/***/ }),

/***/ "./src/shared/CardList/Card/Menu/CloseButton/CloseButton.tsx":
/*!*******************************************************************!*\
  !*** ./src/shared/CardList/Card/Menu/CloseButton/CloseButton.tsx ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CloseButton = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar closeButton_css_1 = __importDefault(__webpack_require__(/*! ./closeButton.css */ \"./src/shared/CardList/Card/Menu/CloseButton/closeButton.css\"));\r\nfunction CloseButton() {\r\n    return (react_1.default.createElement(\"button\", { className: closeButton_css_1.default.closeButton }, \"\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C\"));\r\n}\r\nexports.CloseButton = CloseButton;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Menu/CloseButton/CloseButton.tsx?");

/***/ }),

/***/ "./src/shared/CardList/Card/Menu/CloseButton/closeButton.css":
/*!*******************************************************************!*\
  !*** ./src/shared/CardList/Card/Menu/CloseButton/closeButton.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"closeButton\": \"closeButton__closeButton---Rg3n\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Menu/CloseButton/closeButton.css?");

/***/ }),

/***/ "./src/shared/CardList/Card/Menu/CloseButton/index.ts":
/*!************************************************************!*\
  !*** ./src/shared/CardList/Card/Menu/CloseButton/index.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CloseButton */ \"./src/shared/CardList/Card/Menu/CloseButton/CloseButton.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Menu/CloseButton/index.ts?");

/***/ }),

/***/ "./src/shared/CardList/Card/Menu/Menu.tsx":
/*!************************************************!*\
  !*** ./src/shared/CardList/Card/Menu/Menu.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Menu = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Dropdown_1 = __webpack_require__(/*! ../../../Dropdown/Dropdown */ \"./src/shared/Dropdown/Dropdown.tsx\");\r\nvar Icon_1 = __webpack_require__(/*! ../../../Icons/Icon */ \"./src/shared/Icons/Icon.tsx\");\r\nvar CloseButton_1 = __webpack_require__(/*! ./CloseButton */ \"./src/shared/CardList/Card/Menu/CloseButton/index.ts\");\r\nvar MenuItem_1 = __webpack_require__(/*! ./MenuItem */ \"./src/shared/CardList/Card/Menu/MenuItem/index.ts\");\r\nvar menu_css_1 = __importDefault(__webpack_require__(/*! ./menu.css */ \"./src/shared/CardList/Card/Menu/menu.css\"));\r\nfunction Menu() {\r\n    return (react_1.default.createElement(\"div\", { className: menu_css_1.default.menu },\r\n        react_1.default.createElement(Dropdown_1.Dropdown, { button: react_1.default.createElement(\"button\", { className: menu_css_1.default.menuButton },\r\n                react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.menu, size: 5 })) },\r\n            react_1.default.createElement(\"div\", { className: menu_css_1.default.menuContainer },\r\n                react_1.default.createElement(MenuItem_1.MenuItem, null),\r\n                react_1.default.createElement(CloseButton_1.CloseButton, null)))));\r\n}\r\nexports.Menu = Menu;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Menu/Menu.tsx?");

/***/ }),

/***/ "./src/shared/CardList/Card/Menu/MenuItem/MenuItem.tsx":
/*!*************************************************************!*\
  !*** ./src/shared/CardList/Card/Menu/MenuItem/MenuItem.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MenuItem = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Icon_1 = __webpack_require__(/*! ../../../../Icons/Icon */ \"./src/shared/Icons/Icon.tsx\");\r\nvar menuItem_css_1 = __importDefault(__webpack_require__(/*! ./menuItem.css */ \"./src/shared/CardList/Card/Menu/MenuItem/menuItem.css\"));\r\nfunction MenuItem() {\r\n    return (react_1.default.createElement(react_1.default.Fragment, null,\r\n        react_1.default.createElement(\"ul\", { className: menuItem_css_1.default.menuList },\r\n            react_1.default.createElement(\"li\", { className: menuItem_css_1.default.menuItem },\r\n                react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.message, size: 14 }),\r\n                react_1.default.createElement(\"p\", { className: menuItem_css_1.default.menuItemTitle }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0430\\u0440\\u0438\\u0438\")),\r\n            react_1.default.createElement(\"li\", { className: menuItem_css_1.default.menuItem },\r\n                react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.share, size: 14 }),\r\n                react_1.default.createElement(\"p\", { className: menuItem_css_1.default.menuItemTitle }, \"\\u041F\\u043E\\u0434\\u0435\\u043B\\u0438\\u0442\\u044C\\u0441\\u044F\")),\r\n            react_1.default.createElement(\"li\", { className: menuItem_css_1.default.menuItem },\r\n                react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.hide, size: 14 }),\r\n                react_1.default.createElement(\"p\", { className: menuItem_css_1.default.menuItemTitle }, \"\\u0421\\u043A\\u0440\\u044B\\u0442\\u044C\")),\r\n            react_1.default.createElement(\"li\", { className: menuItem_css_1.default.menuItem },\r\n                react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.save, size: 14 }),\r\n                react_1.default.createElement(\"p\", { className: menuItem_css_1.default.menuItemTitle }, \"\\u0421\\u043E\\u0445\\u0440\\u0430\\u043D\\u0438\\u0442\\u044C\")),\r\n            react_1.default.createElement(\"li\", { className: menuItem_css_1.default.menuItem },\r\n                react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.complain, size: 14 }),\r\n                react_1.default.createElement(\"p\", { className: menuItem_css_1.default.menuItemTitle }, \"\\u041F\\u043E\\u0436\\u0430\\u043B\\u043E\\u0432\\u0430\\u0442\\u044C\\u0441\\u044F\")))));\r\n}\r\nexports.MenuItem = MenuItem;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Menu/MenuItem/MenuItem.tsx?");

/***/ }),

/***/ "./src/shared/CardList/Card/Menu/MenuItem/index.ts":
/*!*********************************************************!*\
  !*** ./src/shared/CardList/Card/Menu/MenuItem/index.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./MenuItem */ \"./src/shared/CardList/Card/Menu/MenuItem/MenuItem.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Menu/MenuItem/index.ts?");

/***/ }),

/***/ "./src/shared/CardList/Card/Menu/MenuItem/menuItem.css":
/*!*************************************************************!*\
  !*** ./src/shared/CardList/Card/Menu/MenuItem/menuItem.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"menuList\": \"menuItem__menuList--2Oo8Y\",\n\t\"menuItem\": \"menuItem__menuItem--8p8aI\",\n\t\"menuItemTitle\": \"menuItem__menuItemTitle--3zKgV\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Menu/MenuItem/menuItem.css?");

/***/ }),

/***/ "./src/shared/CardList/Card/Menu/index.ts":
/*!************************************************!*\
  !*** ./src/shared/CardList/Card/Menu/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Menu */ \"./src/shared/CardList/Card/Menu/Menu.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Menu/index.ts?");

/***/ }),

/***/ "./src/shared/CardList/Card/Menu/menu.css":
/*!************************************************!*\
  !*** ./src/shared/CardList/Card/Menu/menu.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"menu\": \"menu__menu--2PGKP\",\n\t\"menuButton\": \"menu__menuButton--65wOn\",\n\t\"menuContainer\": \"menu__menuContainer--3DI2w\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Menu/menu.css?");

/***/ }),

/***/ "./src/shared/CardList/Card/Preview/Preview.tsx":
/*!******************************************************!*\
  !*** ./src/shared/CardList/Card/Preview/Preview.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Preview = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar preview_css_1 = __importDefault(__webpack_require__(/*! ./preview.css */ \"./src/shared/CardList/Card/Preview/preview.css\"));\r\nfunction Preview(_a) {\r\n    var img = _a.img;\r\n    return (react_1.default.createElement(\"div\", { className: preview_css_1.default.preview },\r\n        react_1.default.createElement(\"img\", { className: preview_css_1.default.previewImg, src: img, alt: \"\" })));\r\n}\r\nexports.Preview = Preview;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Preview/Preview.tsx?");

/***/ }),

/***/ "./src/shared/CardList/Card/Preview/index.ts":
/*!***************************************************!*\
  !*** ./src/shared/CardList/Card/Preview/index.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Preview */ \"./src/shared/CardList/Card/Preview/Preview.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Preview/index.ts?");

/***/ }),

/***/ "./src/shared/CardList/Card/Preview/preview.css":
/*!******************************************************!*\
  !*** ./src/shared/CardList/Card/Preview/preview.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"preview\": \"preview__preview--5TrA2\",\n\t\"previewImg\": \"preview__previewImg--1NiFk\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Preview/preview.css?");

/***/ }),

/***/ "./src/shared/CardList/Card/TextContent/TextContent.tsx":
/*!**************************************************************!*\
  !*** ./src/shared/CardList/Card/TextContent/TextContent.tsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.TextContent = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar textContent_css_1 = __importDefault(__webpack_require__(/*! ./textContent.css */ \"./src/shared/CardList/Card/TextContent/textContent.css\"));\r\nvar Post_1 = __webpack_require__(/*! ../../../Post */ \"./src/shared/Post/index.ts\");\r\nfunction TextContent(_a) {\r\n    var name = _a.name, text = _a.text;\r\n    var _b = react_1.default.useState(false), isModalOpened = _b[0], setIsModalOpened = _b[1];\r\n    return (react_1.default.createElement(\"div\", { className: textContent_css_1.default.textContent },\r\n        react_1.default.createElement(\"div\", { className: textContent_css_1.default.metaData },\r\n            react_1.default.createElement(\"div\", { className: textContent_css_1.default.userLink },\r\n                react_1.default.createElement(\"img\", { className: textContent_css_1.default.avatar, src: \"https://cdn.dribbble.com/users/1769954/screenshots/14729942/media/60aadac4997286b2fb2793b7ef5b9928.png?compress=1&resize=1600x1200\", alt: \"avatar\" }),\r\n                react_1.default.createElement(\"a\", { href: \"#use-url\", className: textContent_css_1.default.username }, name),\r\n                react_1.default.createElement(\"span\", { className: textContent_css_1.default.createdAt },\r\n                    react_1.default.createElement(\"span\", { className: textContent_css_1.default.publishedLabel }, \"\\u041E\\u043F\\u0443\\u0431\\u043B\\u0438\\u043A\\u043E\\u0432\\u0430\\u043D\\u043E\"),\r\n                    \"4 \\u0447\\u0430\\u0441\\u0430 \\u043D\\u0430\\u0437\\u0430\\u0434\"))),\r\n        react_1.default.createElement(\"h2\", { className: textContent_css_1.default.title },\r\n            react_1.default.createElement(\"a\", { href: \"#post-url\", className: textContent_css_1.default.postLink, onClick: function () {\r\n                    setIsModalOpened(true);\r\n                } }, text),\r\n            isModalOpened && (react_1.default.createElement(Post_1.Post, { onClose: function () {\r\n                    setIsModalOpened(false);\r\n                } })))));\r\n}\r\nexports.TextContent = TextContent;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/TextContent/TextContent.tsx?");

/***/ }),

/***/ "./src/shared/CardList/Card/TextContent/index.ts":
/*!*******************************************************!*\
  !*** ./src/shared/CardList/Card/TextContent/index.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./TextContent */ \"./src/shared/CardList/Card/TextContent/TextContent.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/TextContent/index.ts?");

/***/ }),

/***/ "./src/shared/CardList/Card/TextContent/textContent.css":
/*!**************************************************************!*\
  !*** ./src/shared/CardList/Card/TextContent/textContent.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"textContent\": \"textContent__textContent--3Ca65\",\n\t\"metaData\": \"textContent__metaData--1Q7lR\",\n\t\"userLink\": \"textContent__userLink--2J4y9\",\n\t\"avatar\": \"textContent__avatar--AEvsk\",\n\t\"username\": \"textContent__username--2_6hh\",\n\t\"createdAt\": \"textContent__createdAt--2bxVw\",\n\t\"title\": \"textContent__title--BKX7W\",\n\t\"postLink\": \"textContent__postLink--2zFmU\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/TextContent/textContent.css?");

/***/ }),

/***/ "./src/shared/CardList/Card/index.ts":
/*!*******************************************!*\
  !*** ./src/shared/CardList/Card/index.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Card */ \"./src/shared/CardList/Card/Card.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/index.ts?");

/***/ }),

/***/ "./src/shared/CardList/CardList.tsx":
/*!******************************************!*\
  !*** ./src/shared/CardList/CardList.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CardList = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar Card_1 = __webpack_require__(/*! ./Card */ \"./src/shared/CardList/Card/index.ts\");\r\nvar cardList_css_1 = __importDefault(__webpack_require__(/*! ./cardList.css */ \"./src/shared/CardList/cardList.css\"));\r\nvar postContext_1 = __importDefault(__webpack_require__(/*! ../../context/postContext */ \"./src/context/postContext.tsx\"));\r\nfunction CardList() {\r\n    var posts = react_1.default.useContext(postContext_1.default);\r\n    return (react_1.default.createElement(\"ul\", { className: cardList_css_1.default.cardList }, posts.length ?\r\n        posts.map(function (_a) {\r\n            var text = _a.text, id = _a.id;\r\n            return (react_1.default.createElement(Card_1.Card, { text: text, key: id }));\r\n        })\r\n        :\r\n            react_1.default.createElement(Card_1.Card, { text: \"text\" })));\r\n}\r\nexports.CardList = CardList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/CardList.tsx?");

/***/ }),

/***/ "./src/shared/CardList/cardList.css":
/*!******************************************!*\
  !*** ./src/shared/CardList/cardList.css ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"cardList\": \"cardList__cardList--3mXMp\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/CardList/cardList.css?");

/***/ }),

/***/ "./src/shared/CardList/index.ts":
/*!**************************************!*\
  !*** ./src/shared/CardList/index.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CardList */ \"./src/shared/CardList/CardList.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/index.ts?");

/***/ }),

/***/ "./src/shared/CommentForm/CommentForm.tsx":
/*!************************************************!*\
  !*** ./src/shared/CommentForm/CommentForm.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentForm = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\r\nvar store_1 = __webpack_require__(/*! ../../store */ \"./src/store.ts\");\r\nvar commentform_css_1 = __importDefault(__webpack_require__(/*! ./commentform.css */ \"./src/shared/CommentForm/commentform.css\"));\r\nfunction CommentForm(_a) {\r\n    var myRef = _a.myRef, _b = _a.uncontrolled, uncontrolled = _b === void 0 ? true : _b, _c = _a.mainComment, mainComment = _c === void 0 ? false : _c;\r\n    var value = react_redux_1.useSelector(function (state) { return state.commentText; });\r\n    var dispatch = react_redux_1.useDispatch();\r\n    function handleSubmit(event) {\r\n        event.preventDefault();\r\n    }\r\n    function handleChange(event) {\r\n        dispatch(store_1.updateComment(event.target.value));\r\n    }\r\n    return (react_1.default.createElement(\"form\", { className: mainComment ? commentform_css_1.default.form : commentform_css_1.default.hidden, onSubmit: handleSubmit },\r\n        uncontrolled ?\r\n            react_1.default.createElement(\"textarea\", { ref: myRef, className: commentform_css_1.default.input, placeholder: \"\\u0412\\u0432\\u0435\\u0434\\u0438\\u0442\\u0435 \\u043A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0430\\u0440\\u0438\\u0439\" }) :\r\n            react_1.default.createElement(\"textarea\", { ref: myRef, className: commentform_css_1.default.input, value: value, onChange: handleChange, placeholder: \"\\u0412\\u0432\\u0435\\u0434\\u0438\\u0442\\u0435 \\u043A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0430\\u0440\\u0438\\u0439\" }),\r\n        react_1.default.createElement(\"button\", { className: commentform_css_1.default.button, type: \"submit\" }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\")));\r\n}\r\nexports.CommentForm = CommentForm;\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/CommentForm.tsx?");

/***/ }),

/***/ "./src/shared/CommentForm/commentform.css":
/*!************************************************!*\
  !*** ./src/shared/CommentForm/commentform.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"form\": \"commentform__form--nmH4h\",\n\t\"input\": \"commentform__input--Cyl5U\",\n\t\"button\": \"commentform__button--cx-_X\",\n\t\"hidden\": \"commentform__hidden--1Rtsk\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/commentform.css?");

/***/ }),

/***/ "./src/shared/CommentForm/index.ts":
/*!*****************************************!*\
  !*** ./src/shared/CommentForm/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentForm */ \"./src/shared/CommentForm/CommentForm.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CommentForm/index.ts?");

/***/ }),

/***/ "./src/shared/Content/Content.tsx":
/*!****************************************!*\
  !*** ./src/shared/Content/Content.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Content = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar content_css_1 = __importDefault(__webpack_require__(/*! ./content.css */ \"./src/shared/Content/content.css\"));\r\nfunction Content(_a) {\r\n    var children = _a.children;\r\n    return (react_1.default.createElement(\"main\", { className: content_css_1.default.content }, children));\r\n}\r\nexports.Content = Content;\r\n;\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/Content.tsx?");

/***/ }),

/***/ "./src/shared/Content/content.css":
/*!****************************************!*\
  !*** ./src/shared/Content/content.css ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"content\": \"content__content--3z6rw\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Content/content.css?");

/***/ }),

/***/ "./src/shared/Content/index.ts":
/*!*************************************!*\
  !*** ./src/shared/Content/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Content */ \"./src/shared/Content/Content.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Content/index.ts?");

/***/ }),

/***/ "./src/shared/Dropdown/Dropdown.tsx":
/*!******************************************!*\
  !*** ./src/shared/Dropdown/Dropdown.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Dropdown = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar dropdown_css_1 = __importDefault(__webpack_require__(/*! ./dropdown.css */ \"./src/shared/Dropdown/dropdown.css\"));\r\nvar DropdownPortal_1 = __webpack_require__(/*! ./DropdownPortal */ \"./src/shared/Dropdown/DropdownPortal.tsx\");\r\nvar NOOP = function () { };\r\nfunction Dropdown(_a) {\r\n    var button = _a.button, children = _a.children, isOpen = _a.isOpen, _b = _a.onOpen, onOpen = _b === void 0 ? NOOP : _b, _c = _a.onClose, onClose = _c === void 0 ? NOOP : _c;\r\n    var _d = react_1.default.useState(isOpen), isDropdownOpen = _d[0], setIsDropdownOpen = _d[1];\r\n    var _e = react_1.default.useState({ x: 0, y: 0 }), dropdownCoords = _e[0], setDropdownCoords = _e[1];\r\n    var ref = react_1.default.useRef(null);\r\n    react_1.default.useEffect(function () { return isDropdownOpen ? onOpen() : onClose(); }, [isDropdownOpen]);\r\n    react_1.default.useEffect(function () { return setIsDropdownOpen(isOpen); }, [isOpen]);\r\n    var handleOpen = function (event) {\r\n        event.preventDefault();\r\n        if (isOpen === undefined) {\r\n            setIsDropdownOpen(!isDropdownOpen);\r\n        }\r\n        var boundings = event.currentTarget.getBoundingClientRect();\r\n        setDropdownCoords({\r\n            x: boundings.x,\r\n            y: event.pageY\r\n        });\r\n    };\r\n    react_1.default.useEffect(function () {\r\n        function handleClick(event) {\r\n            var _a;\r\n            if (event.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {\r\n                setIsDropdownOpen(false);\r\n            }\r\n        }\r\n        document.addEventListener(\"click\", handleClick);\r\n        return function () { document.removeEventListener(\"click\", handleClick); };\r\n    }, []);\r\n    return (react_1.default.createElement(\"div\", { className: dropdown_css_1.default.container, ref: ref },\r\n        react_1.default.createElement(\"div\", { onClick: handleOpen, className: dropdown_css_1.default.button }, button),\r\n        isDropdownOpen && (react_1.default.createElement(DropdownPortal_1.DropdownPortal, { coords: dropdownCoords, children: children, onClick: function () { return setIsDropdownOpen(false); } }))));\r\n}\r\nexports.Dropdown = Dropdown;\r\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/Dropdown.tsx?");

/***/ }),

/***/ "./src/shared/Dropdown/DropdownPortal.tsx":
/*!************************************************!*\
  !*** ./src/shared/Dropdown/DropdownPortal.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.DropdownPortal = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\r\nvar dropdown_css_1 = __importDefault(__webpack_require__(/*! ./dropdown.css */ \"./src/shared/Dropdown/dropdown.css\"));\r\nvar NOOP = function () { };\r\nfunction DropdownPortal(_a) {\r\n    var children = _a.children, onClick = _a.onClick, coords = _a.coords;\r\n    var node = document.querySelector(\"#dropdown_root\");\r\n    if (!node)\r\n        return null;\r\n    return react_dom_1.default.createPortal((react_1.default.createElement(\"div\", { className: dropdown_css_1.default.listContainer, style: { left: coords.x, top: coords.y } },\r\n        react_1.default.createElement(\"div\", { className: dropdown_css_1.default.list, onClick: onClick }, children))), node);\r\n}\r\nexports.DropdownPortal = DropdownPortal;\r\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/DropdownPortal.tsx?");

/***/ }),

/***/ "./src/shared/Dropdown/dropdown.css":
/*!******************************************!*\
  !*** ./src/shared/Dropdown/dropdown.css ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"container\": \"dropdown__container--1PHA3\",\n\t\"listContainer\": \"dropdown__listContainer--1PKIn\",\n\t\"list\": \"dropdown__list--L3_uZ\",\n\t\"button\": \"dropdown__button--2C7gK\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Dropdown/dropdown.css?");

/***/ }),

/***/ "./src/shared/Header/Header.tsx":
/*!**************************************!*\
  !*** ./src/shared/Header/Header.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Header = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar header_css_1 = __importDefault(__webpack_require__(/*! ./header.css */ \"./src/shared/Header/header.css\"));\r\nvar SearchBlock_1 = __webpack_require__(/*! ./SearchBlock/SearchBlock */ \"./src/shared/Header/SearchBlock/SearchBlock.tsx\");\r\nvar SortBLock_1 = __webpack_require__(/*! ./SortBlock/SortBLock */ \"./src/shared/Header/SortBlock/SortBLock.tsx\");\r\nvar ThreadTitle_1 = __webpack_require__(/*! ./ThreadTitle/ThreadTitle */ \"./src/shared/Header/ThreadTitle/ThreadTitle.tsx\");\r\nfunction Header() {\r\n    return (react_1.default.createElement(\"header\", { className: header_css_1.default.header },\r\n        react_1.default.createElement(SearchBlock_1.SearchBlock, null),\r\n        react_1.default.createElement(ThreadTitle_1.ThreadTitle, null),\r\n        react_1.default.createElement(SortBLock_1.SortBLock, null)));\r\n}\r\nexports.Header = Header;\r\n;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/SearchBlock.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/SearchBlock.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SearchBlock = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar searchBlock_css_1 = __importDefault(__webpack_require__(/*! ./searchBlock.css */ \"./src/shared/Header/SearchBlock/searchBlock.css\"));\r\nvar UserBlock_1 = __webpack_require__(/*! ./UserBlock */ \"./src/shared/Header/SearchBlock/UserBlock/index.ts\");\r\nvar context_1 = __webpack_require__(/*! ../../../context */ \"./src/context/index.ts\");\r\nfunction SearchBlock() {\r\n    var _a = react_1.useContext(context_1.userContext), name = _a.name, iconImg = _a.iconImg;\r\n    return (react_1.default.createElement(\"div\", { className: searchBlock_css_1.default.searchBlock },\r\n        react_1.default.createElement(UserBlock_1.UserBlock, { avatarSrc: iconImg, username: name })));\r\n}\r\nexports.SearchBlock = SearchBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/SearchBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar iconAnon_1 = __webpack_require__(/*! ../../../Icons/iconAnon */ \"./src/shared/Icons/iconAnon.tsx\");\r\nvar userBlock_css_1 = __importDefault(__webpack_require__(/*! ./userBlock.css */ \"./src/shared/Header/SearchBlock/UserBlock/userBlock.css\"));\r\nfunction UserBlock(_a) {\r\n    var avatarSrc = _a.avatarSrc, username = _a.username;\r\n    return (react_1.default.createElement(\"a\", { href: \"https://www.reddit.com/api/v1/authorize?client_id=SCJobOW3EGzptg&response_type=code&state=RANDOM_STRING&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity\", className: userBlock_css_1.default.userBox },\r\n        react_1.default.createElement(\"div\", { className: userBlock_css_1.default.avatarBox }, avatarSrc\r\n            ? react_1.default.createElement(\"img\", { src: avatarSrc, alt: \"user avatar\", className: userBlock_css_1.default.avatarImage })\r\n            : react_1.default.createElement(iconAnon_1.IconAnon, null)),\r\n        react_1.default.createElement(\"div\", { className: userBlock_css_1.default.username },\r\n            react_1.default.createElement(\"span\", null, username || 'Аноним'))));\r\n}\r\nexports.UserBlock = UserBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/index.ts":
/*!**********************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/index.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./UserBlock */ \"./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/userBlock.css":
/*!***************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/userBlock.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"userBox\": \"userBlock__userBox--1HmtG\",\n\t\"avatarBox\": \"userBlock__avatarBox--1Hk8O\",\n\t\"avatarImage\": \"userBlock__avatarImage--2CyNo\",\n\t\"username\": \"userBlock__username--1RhLC\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/userBlock.css?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/searchBlock.css":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/searchBlock.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"searchBlock\": \"searchBlock__searchBlock--2I72c\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/searchBlock.css?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/SortBLock.tsx":
/*!***************************************************!*\
  !*** ./src/shared/Header/SortBlock/SortBLock.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SortBLock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar sortBlock_css_1 = __importDefault(__webpack_require__(/*! ./sortBlock.css */ \"./src/shared/Header/SortBlock/sortBlock.css\"));\r\nfunction SortBLock() {\r\n    return (react_1.default.createElement(\"div\", { className: sortBlock_css_1.default.sortBlock }, \"sorting dropdown\"));\r\n}\r\nexports.SortBLock = SortBLock;\r\n;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/SortBLock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/sortBlock.css":
/*!***************************************************!*\
  !*** ./src/shared/Header/SortBlock/sortBlock.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"sortBlock\": \"sortBlock__sortBlock--340Ig\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/sortBlock.css?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/ThreadTitle.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/ThreadTitle.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ThreadTitle = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar threadTitle_css_1 = __importDefault(__webpack_require__(/*! ./threadTitle.css */ \"./src/shared/Header/ThreadTitle/threadTitle.css\"));\r\nfunction ThreadTitle() {\r\n    return (react_1.default.createElement(\"h1\", { className: threadTitle_css_1.default.threadTitle }, \"Header\"));\r\n}\r\nexports.ThreadTitle = ThreadTitle;\r\n;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/ThreadTitle.tsx?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/threadTitle.css":
/*!*******************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/threadTitle.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"threadTitle\": \"threadTitle__threadTitle--3z99b\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/threadTitle.css?");

/***/ }),

/***/ "./src/shared/Header/header.css":
/*!**************************************!*\
  !*** ./src/shared/Header/header.css ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"header\": \"header__header--1FWjL\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Header/header.css?");

/***/ }),

/***/ "./src/shared/Icons/Icon.tsx":
/*!***********************************!*\
  !*** ./src/shared/Icons/Icon.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Icon = exports.EIcons = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar iconAnon_1 = __webpack_require__(/*! ./iconAnon */ \"./src/shared/Icons/iconAnon.tsx\");\r\nvar IconHide_1 = __webpack_require__(/*! ./IconHide */ \"./src/shared/Icons/IconHide.tsx\");\r\nvar IconMenu_1 = __webpack_require__(/*! ./IconMenu */ \"./src/shared/Icons/IconMenu.tsx\");\r\nvar IconWarning_1 = __webpack_require__(/*! ./IconWarning */ \"./src/shared/Icons/IconWarning.tsx\");\r\nvar IconMessage_1 = __webpack_require__(/*! ./IconMessage */ \"./src/shared/Icons/IconMessage.tsx\");\r\nvar IconSave_1 = __webpack_require__(/*! ./IconSave */ \"./src/shared/Icons/IconSave.tsx\");\r\nvar IconShare_1 = __webpack_require__(/*! ./IconShare */ \"./src/shared/Icons/IconShare.tsx\");\r\nvar IconComment_1 = __webpack_require__(/*! ./IconComment */ \"./src/shared/Icons/IconComment.tsx\");\r\nvar IconKarmaUp_1 = __webpack_require__(/*! ./IconKarmaUp */ \"./src/shared/Icons/IconKarmaUp.tsx\");\r\nvar IconKarmaDown_1 = __webpack_require__(/*! ./IconKarmaDown */ \"./src/shared/Icons/IconKarmaDown.tsx\");\r\nvar Icons = {\r\n    menu: IconMenu_1.IconMenu,\r\n    complain: IconWarning_1.IconWarning,\r\n    save: IconSave_1.IconSave,\r\n    message: IconMessage_1.IconMessage,\r\n    share: IconShare_1.IconShare,\r\n    hide: IconHide_1.IconHide,\r\n    anonIcon: iconAnon_1.IconAnon,\r\n    comment: IconComment_1.IconComment,\r\n    karmaUp: IconKarmaUp_1.IconKarmaUp,\r\n    karmaDown: IconKarmaDown_1.IconKarmaDown,\r\n};\r\nvar EIcons;\r\n(function (EIcons) {\r\n    EIcons[\"menu\"] = \"menu\";\r\n    EIcons[\"complain\"] = \"complain\";\r\n    EIcons[\"save\"] = \"save\";\r\n    EIcons[\"message\"] = \"message\";\r\n    EIcons[\"share\"] = \"share\";\r\n    EIcons[\"hide\"] = \"hide\";\r\n    EIcons[\"anonIcon\"] = \"anonIcon\";\r\n    EIcons[\"comment\"] = \"comment\";\r\n    EIcons[\"karmaUp\"] = \"karmaUp\";\r\n    EIcons[\"karmaDown\"] = \"karmaDown\";\r\n})(EIcons = exports.EIcons || (exports.EIcons = {}));\r\nfunction Icon(_a) {\r\n    var size = _a.size, name = _a.name;\r\n    var IconName = Icons[name];\r\n    return react_1.default.createElement(IconName, { size: size });\r\n}\r\nexports.Icon = Icon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/Icon.tsx?");

/***/ }),

/***/ "./src/shared/Icons/IconComment.tsx":
/*!******************************************!*\
  !*** ./src/shared/Icons/IconComment.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.IconComment = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction IconComment(_a) {\r\n    var size = _a.size;\r\n    return (react_1.default.createElement(\"svg\", { width: size, height: size, viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M12.75 0H1.41667C0.6375 0 0 0.6375 0 1.41667V9.91667C0 10.6958 0.6375 11.3333 1.41667 11.3333H11.3333L14.1667 14.1667V1.41667C14.1667 0.6375 13.5292 0 12.75 0ZM11.3333 8.5H2.83333V7.08333H11.3333V8.5ZM11.3333 6.375H2.83333V4.95833H11.3333V6.375ZM11.3333 4.25H2.83333V2.83333H11.3333V4.25Z\", fill: \"#C4C4C4\" })));\r\n}\r\nexports.IconComment = IconComment;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/IconComment.tsx?");

/***/ }),

/***/ "./src/shared/Icons/IconHide.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/IconHide.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.IconHide = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction IconHide(_a) {\r\n    var size = _a.size;\r\n    return (react_1.default.createElement(\"svg\", { width: size, height: size, viewBox: \"0 0 14 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M7 0C3.136 0 0 3.136 0 7C0 10.864 3.136 14 7 14C10.864 14 14 10.864 14 7C14 3.136 10.864 0 7 0ZM7 12.6C3.906 12.6 1.4 10.094 1.4 7C1.4 5.705 1.841 4.515 2.583 3.57L10.43 11.417C9.485 12.159 8.295 12.6 7 12.6ZM11.417 10.43L3.57 2.583C4.515 1.841 5.705 1.4 7 1.4C10.094 1.4 12.6 3.906 12.6 7C12.6 8.295 12.159 9.485 11.417 10.43Z\", fill: \"#999999\" })));\r\n}\r\nexports.IconHide = IconHide;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/IconHide.tsx?");

/***/ }),

/***/ "./src/shared/Icons/IconKarmaDown.tsx":
/*!********************************************!*\
  !*** ./src/shared/Icons/IconKarmaDown.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.IconKarmaDown = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction IconKarmaDown(_a) {\r\n    var size = _a.size;\r\n    return (react_1.default.createElement(\"svg\", { width: size, height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z\", fill: \"#C4C4C4\" })));\r\n}\r\nexports.IconKarmaDown = IconKarmaDown;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/IconKarmaDown.tsx?");

/***/ }),

/***/ "./src/shared/Icons/IconKarmaUp.tsx":
/*!******************************************!*\
  !*** ./src/shared/Icons/IconKarmaUp.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.IconKarmaUp = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction IconKarmaUp(_a) {\r\n    var size = _a.size;\r\n    return (react_1.default.createElement(\"svg\", { width: size, height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M9.5 0L0 10H19L9.5 0Z\", fill: \"#C4C4C4\" })));\r\n}\r\nexports.IconKarmaUp = IconKarmaUp;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/IconKarmaUp.tsx?");

/***/ }),

/***/ "./src/shared/Icons/IconMenu.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/IconMenu.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.IconMenu = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction IconMenu(_a) {\r\n    var size = _a.size;\r\n    return (react_1.default.createElement(\"svg\", { width: size, height: \"20\", viewBox: \"0 0 5 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"2.5\", r: \"2.5\", fill: \"#D9D9D9\" }),\r\n        react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"10\", r: \"2.5\", fill: \"#D9D9D9\" }),\r\n        react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"17.5\", r: \"2.5\", fill: \"#D9D9D9\" })));\r\n}\r\nexports.IconMenu = IconMenu;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/IconMenu.tsx?");

/***/ }),

/***/ "./src/shared/Icons/IconMessage.tsx":
/*!******************************************!*\
  !*** ./src/shared/Icons/IconMessage.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.IconMessage = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction IconMessage(_a) {\r\n    var size = _a.size;\r\n    return (react_1.default.createElement(\"svg\", { width: size, height: size, viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M12.75 0.416626H1.41667C0.6375 0.416626 0 1.05413 0 1.83329V10.3333C0 11.1125 0.6375 11.75 1.41667 11.75H11.3333L14.1667 14.5833V1.83329C14.1667 1.05413 13.5292 0.416626 12.75 0.416626ZM11.3333 8.91663H2.83333V7.49996H11.3333V8.91663ZM11.3333 6.79163H2.83333V5.37496H11.3333V6.79163ZM11.3333 4.66663H2.83333V3.24996H11.3333V4.66663Z\", fill: \"#999999\" })));\r\n}\r\nexports.IconMessage = IconMessage;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/IconMessage.tsx?");

/***/ }),

/***/ "./src/shared/Icons/IconSave.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/IconSave.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.IconSave = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction IconSave(_a) {\r\n    var size = _a.size;\r\n    return (react_1.default.createElement(\"svg\", { width: size, height: size, viewBox: \"0 0 14 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M1.4 2.8H0V12.6C0 13.37 0.63 14 1.4 14H11.2V12.6H1.4V2.8ZM12.6 0H4.2C3.43 0 2.8 0.63 2.8 1.4V9.8C2.8 10.57 3.43 11.2 4.2 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM11.9 6.3H9.1V9.1H7.7V6.3H4.9V4.9H7.7V2.1H9.1V4.9H11.9V6.3Z\", fill: \"#979797\" })));\r\n}\r\nexports.IconSave = IconSave;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/IconSave.tsx?");

/***/ }),

/***/ "./src/shared/Icons/IconShare.tsx":
/*!****************************************!*\
  !*** ./src/shared/Icons/IconShare.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.IconShare = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction IconShare(_a) {\r\n    var size = _a.size;\r\n    return (react_1.default.createElement(\"svg\", { width: size, height: size, viewBox: \"0 0 12 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z\", fill: \"#999999\" })));\r\n}\r\nexports.IconShare = IconShare;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/IconShare.tsx?");

/***/ }),

/***/ "./src/shared/Icons/IconWarning.tsx":
/*!******************************************!*\
  !*** ./src/shared/Icons/IconWarning.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.IconWarning = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction IconWarning(_a) {\r\n    var size = _a.size;\r\n    return (react_1.default.createElement(\"svg\", { width: size, height: size, viewBox: \"0 0 16 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M0 14H16L8 0L0 14ZM8.72727 11.7895H7.27273V10.3158H8.72727V11.7895ZM8.72727 8.8421H7.27273V5.89474H8.72727V8.8421Z\", fill: \"#999999\" })));\r\n}\r\nexports.IconWarning = IconWarning;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/IconWarning.tsx?");

/***/ }),

/***/ "./src/shared/Icons/iconAnon.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/iconAnon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.IconAnon = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nfunction IconAnon(_a) {\r\n    var size = _a.size;\r\n    return (react_1.default.createElement(\"svg\", { width: size, height: size, viewBox: \"0 0 50 50\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"path\", { d: \"M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z\", fill: \"#D9D9D9\" })));\r\n}\r\nexports.IconAnon = IconAnon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/iconAnon.tsx?");

/***/ }),

/***/ "./src/shared/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./src/shared/Layout/Layout.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Layout = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar layout_css_1 = __importDefault(__webpack_require__(/*! ./layout.css */ \"./src/shared/Layout/layout.css\"));\r\nfunction Layout(_a) {\r\n    var children = _a.children;\r\n    return (react_1.default.createElement(\"div\", { className: layout_css_1.default.layout }, children));\r\n}\r\nexports.Layout = Layout;\r\n;\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Layout.tsx?");

/***/ }),

/***/ "./src/shared/Layout/index.ts":
/*!************************************!*\
  !*** ./src/shared/Layout/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Layout */ \"./src/shared/Layout/Layout.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Layout/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/layout.css":
/*!**************************************!*\
  !*** ./src/shared/Layout/layout.css ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"layout\": \"layout__layout--1BrJT\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Layout/layout.css?");

/***/ }),

/***/ "./src/shared/Post/Post.tsx":
/*!**********************************!*\
  !*** ./src/shared/Post/Post.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Post = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\r\nvar CommentForm_1 = __webpack_require__(/*! ../CommentForm */ \"./src/shared/CommentForm/index.ts\");\r\nvar post_css_1 = __importDefault(__webpack_require__(/*! ./post.css */ \"./src/shared/Post/post.css\"));\r\nvar PostsComments_1 = __webpack_require__(/*! ./PostsComments */ \"./src/shared/Post/PostsComments/index.ts\");\r\nfunction Post(props) {\r\n    var ref = react_1.default.useRef(null);\r\n    var node = document.querySelector(\"#modal_root\");\r\n    react_1.default.useEffect(function () {\r\n        function handleClick(event) {\r\n            var _a, _b;\r\n            if (event.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {\r\n                (_b = props.onClose) === null || _b === void 0 ? void 0 : _b.call(props);\r\n            }\r\n        }\r\n        document.addEventListener(\"click\", handleClick);\r\n        return function () {\r\n            document.removeEventListener('click', handleClick);\r\n        };\r\n    }, []);\r\n    if (!node)\r\n        return null;\r\n    return react_dom_1.default.createPortal((react_1.default.createElement(\"div\", { className: post_css_1.default.modal, ref: ref },\r\n        react_1.default.createElement(\"h2\", { className: post_css_1.default.title }, \"\\u0421\\u043B\\u0435\\u0434\\u0443\\u0435\\u0442 \\u041E\\u0442\\u043C\\u0435\\u0442\\u0438\\u0442\\u044C, \\u0447\\u0442\\u043E \\u043D\\u043E\\u0432\\u0430\\u044F \\u043C\\u043E\\u0434\\u0435\\u043B\\u044C \\u043E\\u0440\\u0433\\u0430\\u043D\\u0438\\u0437\\u0430\\u0446\\u0438\\u043E\\u043D\\u043D\\u043E\\u0439 \\u0434\\u0435\\u044F\\u0442\\u0435\\u043B\\u044C\\u043D\\u043E\\u0441\\u0442\\u0438 \\u043F\\u043E\\u043C\\u043E\\u0436\\u0435\\u0442\"),\r\n        react_1.default.createElement(\"div\", { className: post_css_1.default.content },\r\n            react_1.default.createElement(\"p\", { className: post_css_1.default.descr }, \"\\u0415\\u0441\\u0442\\u044C \\u043D\\u0430\\u0434 \\u0447\\u0435\\u043C \\u0437\\u0430\\u0434\\u0443\\u043C\\u0430\\u0442\\u044C\\u0441\\u044F: \\u0442\\u0449\\u044F\\u0442\\u0435\\u043B\\u044C\\u043D\\u043E\\u0435 \\u0438\\u0441\\u043B\\u0435\\u0434\\u043E\\u0432\\u0430\\u043D\\u0438\\u0435 \\u043A\\u043E\\u043D\\u043A\\u0443\\u0440\\u0435\\u043D\\u0442\\u043E\\u0432 \\u043F\\u0440\\u0435\\u0434\\u0441\\u0442\\u0430\\u0432\\u043B\\u044F\\u044E\\u0442 \\u0441\\u043E\\u0431\\u043E\\u0439 \\u0415\\u0441\\u0442\\u044C \\u043D\\u0430\\u0434 \\u0447\\u0435\\u043C \\u0437\\u0430\\u0434\\u0443\\u043C\\u0430\\u0442\\u044C\\u0441\\u044F: \\u0442\\u0449\\u044F\\u0442\\u0435\\u043B\\u044C\\u043D\\u043E\\u0435 \\u0438\\u0441\\u043B\\u0435\\u0434\\u043E\\u0432\\u0430\\u043D\\u0438\\u0435 \\u043A\\u043E\\u043D\\u043A\\u0443\\u0440\\u0435\\u043D\\u0442\\u043E\\u0432 \\u043F\\u0440\\u0435\\u0434\\u0441\\u0442\\u0430\\u0432\\u043B\\u044F\\u044E\\u0442 \\u0441\\u043E\\u0431\\u043E\\u0439 \\u0415\\u0441\\u0442\\u044C \\u043D\\u0430\\u0434 \\u0447\\u0435\\u043C \\u0437\\u0430\\u0434\\u0443\\u043C\\u0430\\u0442\\u044C\\u0441\\u044F: \\u0442\\u0449\\u044F\\u0442\\u0435\\u043B\\u044C\\u043D\\u043E\\u0435 \\u0438\\u0441\\u043B\\u0435\\u0434\\u043E\\u0432\\u0430\\u043D\\u0438\\u0435 \\u043A\\u043E\\u043D\\u043A\\u0443\\u0440\\u0435\\u043D\\u0442\\u043E\\u0432 \\u043F\\u0440\\u0435\\u0434\\u0441\\u0442\\u0430\\u0432\\u043B\\u044F\\u044E\\u0442 \\u0441\\u043E\\u0431\\u043E\\u0439 \\u0415\\u0441\\u0442\\u044C \\u043D\\u0430\\u0434 \\u0447\\u0435\\u043C \\u0437\\u0430\\u0434\\u0443\\u043C\\u0430\\u0442\\u044C\\u0441\\u044F: \\u0442\\u0449\\u044F\\u0442\\u0435\\u043B\\u044C\\u043D\\u043E\\u0435 \\u0438\\u0441\\u043B\\u0435\\u0434\\u043E\\u0432\\u0430\\u043D\\u0438\\u0435 \\u043A\\u043E\\u043D\\u043A\\u0443\\u0440\\u0435\\u043D\\u0442\\u043E\\u0432 \\u043F\\u0440\\u0435\\u0434\\u0441\\u0442\\u0430\\u0432\\u043B\\u044F\\u044E\\u0442 \\u0441\\u043E\\u0431\\u043E\\u0439 \\u0415\\u0441\\u0442\\u044C \\u043D\\u0430\\u0434 \\u0447\\u0435\\u043C \\u0437\\u0430\\u0434\\u0443\\u043C\\u0430\\u0442\\u044C\\u0441\\u044F: \\u0442\\u0449\\u044F\\u0442\\u0435\\u043B\\u044C\\u043D\\u043E\\u0435 \\u0438\\u0441\\u043B\\u0435\\u0434\\u043E\\u0432\\u0430\\u043D\\u0438\\u0435 \\u043A\\u043E\\u043D\\u043A\\u0443\\u0440\\u0435\\u043D\\u0442\\u043E\\u0432 \\u043F\\u0440\\u0435\\u0434\\u0441\\u0442\\u0430\\u0432\\u043B\\u044F\\u044E\\u0442 \\u0441\\u043E\\u0431\\u043E\\u0439 \\u0415\\u0441\\u0442\\u044C \\u043D\\u0430\\u0434 \\u0447\\u0435\\u043C \\u0437\\u0430\\u0434\\u0443\\u043C\\u0430\\u0442\\u044C\\u0441\\u044F: \\u0442\\u0449\\u044F\\u0442\\u0435\\u043B\\u044C\\u043D\\u043E\\u0435 \\u0438\\u0441\\u043B\\u0435\\u0434\\u043E\\u0432\\u0430\\u043D\\u0438\\u0435 \\u043A\\u043E\\u043D\\u043A\\u0443\\u0440\\u0435\\u043D\\u0442\\u043E\\u0432 \\u043F\\u0440\\u0435\\u0434\\u0441\\u0442\\u0430\\u0432\\u043B\\u044F\\u044E\\u0442 \\u0441\\u043E\\u0431\\u043E\\u0439\")),\r\n        react_1.default.createElement(CommentForm_1.CommentForm, { mainComment: true, uncontrolled: false }),\r\n        react_1.default.createElement(PostsComments_1.PostsComments, null))), node);\r\n}\r\nexports.Post = Post;\r\n\n\n//# sourceURL=webpack:///./src/shared/Post/Post.tsx?");

/***/ }),

/***/ "./src/shared/Post/PostsComments/PostsComments.tsx":
/*!*********************************************************!*\
  !*** ./src/shared/Post/PostsComments/PostsComments.tsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.PostsComments = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar commentContext_1 = __webpack_require__(/*! ../../../context/commentContext */ \"./src/context/commentContext.ts\");\r\nvar CommentForm_1 = __webpack_require__(/*! ../../CommentForm */ \"./src/shared/CommentForm/index.ts\");\r\nvar Icon_1 = __webpack_require__(/*! ../../Icons/Icon */ \"./src/shared/Icons/Icon.tsx\");\r\nvar postscomments_css_1 = __importDefault(__webpack_require__(/*! ./postscomments.css */ \"./src/shared/Post/PostsComments/postscomments.css\"));\r\nfunction commentSearch(arr, search) {\r\n    var result = false;\r\n    if (!arr)\r\n        return false;\r\n    var i;\r\n    result = false;\r\n    for (i = 0; i < arr.length; i++) {\r\n        if (arr[i] && arr[i].comments) {\r\n            result = commentSearch(arr[i].comments, search);\r\n        }\r\n        if (arr[i].id == search) {\r\n            result = arr[i];\r\n            break;\r\n        }\r\n    }\r\n    return result;\r\n}\r\nfunction PostsComments(_a) {\r\n    var comments = _a.comments;\r\n    var _b = react_1.default.useContext(commentContext_1.commentContext), activeComment = _b.activeComment, onChangeActive = _b.onChangeActive, allComments = _b.allComments, onChangeComments = _b.onChangeComments;\r\n    var commentsReady;\r\n    if (!allComments)\r\n        return null;\r\n    if (comments && typeof comments !== \"undefined\") {\r\n        commentsReady = comments;\r\n    }\r\n    else {\r\n        commentsReady = allComments;\r\n    }\r\n    react_1.default.useEffect(function () {\r\n        if (activeComment >= 0) {\r\n            var our_element = commentSearch(allComments, activeComment);\r\n            our_element.ref.current.parentNode.style.display === \"none\" ? our_element.ref.current.parentNode.style.display = \"flex\" : our_element.ref.current.parentNode.style.display = \"none\";\r\n            our_element.ref.current.placeholder = \"Введите комментарий\";\r\n            our_element.ref.current.focus();\r\n        }\r\n    }, [activeComment]);\r\n    return (react_1.default.createElement(\"div\", null, commentsReady.map(function (_a, index) {\r\n        var name = _a.name, time = _a.time, text = _a.text, comments = _a.comments, category = _a.category, _b = _a.visibleComment, visibleComment = _b === void 0 ? false : _b, ref = _a.ref, id = _a.id;\r\n        return (react_1.default.createElement(\"div\", { className: postscomments_css_1.default.commentContainer, key: Math.random() },\r\n            react_1.default.createElement(\"div\", { className: postscomments_css_1.default.leftCommentBlock },\r\n                react_1.default.createElement(\"div\", { className: postscomments_css_1.default.karmaCounter },\r\n                    react_1.default.createElement(\"button\", { className: postscomments_css_1.default.up },\r\n                        react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.karmaUp, size: 19 })),\r\n                    react_1.default.createElement(\"span\", { className: postscomments_css_1.default.karmaValue }),\r\n                    react_1.default.createElement(\"button\", { className: postscomments_css_1.default.down },\r\n                        react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.karmaDown, size: 19 }))),\r\n                react_1.default.createElement(\"div\", { className: postscomments_css_1.default.greyPillar })),\r\n            react_1.default.createElement(\"div\", { className: postscomments_css_1.default.rightCommentBlock },\r\n                react_1.default.createElement(\"div\", { className: postscomments_css_1.default.metaData },\r\n                    react_1.default.createElement(\"div\", { className: postscomments_css_1.default.userLink },\r\n                        react_1.default.createElement(\"img\", { className: postscomments_css_1.default.avatar, src: \"https://cf.bstatic.com/xdata/images/hotel/square200/185864689.jpg?k=5eb72cfa721a10530a817680daf950124600cc58cbf9930cfe5f5439254e3ad8&o=\", alt: \"avatar\" }),\r\n                        react_1.default.createElement(\"a\", { href: \"#user-url\", className: postscomments_css_1.default.username }, name)),\r\n                    react_1.default.createElement(\"div\", { className: postscomments_css_1.default.createdAt },\r\n                        react_1.default.createElement(\"span\", { className: postscomments_css_1.default.publishedLabel }, \"\\u041E\\u043F\\u0443\\u0431\\u043B\\u0438\\u043A\\u043E\\u0432\\u0430\\u043D\\u043E\\u00A0\"),\r\n                        time),\r\n                    react_1.default.createElement(\"div\", { className: postscomments_css_1.default.category }, category)),\r\n                react_1.default.createElement(\"div\", { className: postscomments_css_1.default.commentText },\r\n                    react_1.default.createElement(\"p\", { className: postscomments_css_1.default.commentDescr }, text),\r\n                    react_1.default.createElement(\"span\", { className: postscomments_css_1.default.commentAction, onClick: function (e) {\r\n                            var our_element = commentSearch(allComments, id);\r\n                            our_element.ref.current.parentNode.style.display === \"none\" ? our_element.ref.current.parentNode.style.display = \"flex\" : our_element.ref.current.parentNode.style.display = \"none\";\r\n                            our_element.ref.current.focus();\r\n                            onChangeActive(id);\r\n                            e.stopPropagation();\r\n                        } },\r\n                        react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.message, size: 14 }),\r\n                        react_1.default.createElement(\"span\", { \"data-test\": \"\" + Math.random() }, \"\\u041E\\u0442\\u0432\\u0435\\u0442\\u0438\\u0442\\u044C\")),\r\n                    react_1.default.createElement(\"span\", { className: postscomments_css_1.default.commentAction },\r\n                        react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.share, size: 14 }),\r\n                        react_1.default.createElement(\"span\", null, \"\\u041F\\u043E\\u0434\\u0435\\u043B\\u0438\\u0442\\u044C\\u0441\\u044F\")),\r\n                    react_1.default.createElement(\"span\", { className: postscomments_css_1.default.commentAction },\r\n                        react_1.default.createElement(Icon_1.Icon, { name: Icon_1.EIcons.complain, size: 14 }),\r\n                        react_1.default.createElement(\"span\", null, \"\\u041F\\u043E\\u0436\\u0430\\u043B\\u043E\\u0432\\u0430\\u0442\\u044C\\u0441\\u044F\"))),\r\n                react_1.default.createElement(CommentForm_1.CommentForm, { myRef: ref, uncontrolled: true }),\r\n                comments &&\r\n                    react_1.default.createElement(\"div\", null,\r\n                        react_1.default.createElement(PostsComments, { comments: comments })))));\r\n    })));\r\n}\r\nexports.PostsComments = PostsComments;\r\n\n\n//# sourceURL=webpack:///./src/shared/Post/PostsComments/PostsComments.tsx?");

/***/ }),

/***/ "./src/shared/Post/PostsComments/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Post/PostsComments/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./PostsComments */ \"./src/shared/Post/PostsComments/PostsComments.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Post/PostsComments/index.ts?");

/***/ }),

/***/ "./src/shared/Post/PostsComments/postscomments.css":
/*!*********************************************************!*\
  !*** ./src/shared/Post/PostsComments/postscomments.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"commentContainer\": \"postscomments__commentContainer--2u0Y3\",\n\t\"leftCommentBlock\": \"postscomments__leftCommentBlock--320ma\",\n\t\"karmaCounter\": \"postscomments__karmaCounter--18NqF\",\n\t\"up\": \"postscomments__up--d5V2B\",\n\t\"karmaValue\": \"postscomments__karmaValue--1d-Pr\",\n\t\"down\": \"postscomments__down--1tNkZ\",\n\t\"greyPillar\": \"postscomments__greyPillar--Ur2Vf\",\n\t\"rightCommentBlock\": \"postscomments__rightCommentBlock--1JANe\",\n\t\"userLink\": \"postscomments__userLink--1lCRF\",\n\t\"metaData\": \"postscomments__metaData--WbLnC\",\n\t\"avatar\": \"postscomments__avatar--3tpMw\",\n\t\"username\": \"postscomments__username--ub4Mv\",\n\t\"createdAt\": \"postscomments__createdAt--3dmzz\",\n\t\"publishedLabel\": \"postscomments__publishedLabel--9ONJ-\",\n\t\"category\": \"postscomments__category---QCPq\",\n\t\"commentText\": \"postscomments__commentText--1PffW\",\n\t\"commentDescr\": \"postscomments__commentDescr--2sIdE\",\n\t\"commentAction\": \"postscomments__commentAction--2yXM6\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Post/PostsComments/postscomments.css?");

/***/ }),

/***/ "./src/shared/Post/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Post/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Post */ \"./src/shared/Post/Post.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Post/index.ts?");

/***/ }),

/***/ "./src/shared/Post/post.css":
/*!**********************************!*\
  !*** ./src/shared/Post/post.css ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n\t\"modal\": \"post__modal--75X8Z\",\n\t\"title\": \"post__title--dXQSv\",\n\t\"content\": \"post__content--3guAH\",\n\t\"descr\": \"post__descr--v_Sed\"\n});\n\n\n//# sourceURL=webpack:///./src/shared/Post/post.css?");

/***/ }),

/***/ "./src/store.ts":
/*!**********************!*\
  !*** ./src/store.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __assign = (this && this.__assign) || function () {\r\n    __assign = Object.assign || function(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\r\n                t[p] = s[p];\r\n        }\r\n        return t;\r\n    };\r\n    return __assign.apply(this, arguments);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.rootReducer = exports.updateComment = exports.UPDATE_COMMENT = void 0;\r\nvar initialState = {\r\n    commentText: \"Привет, Skillbox\",\r\n};\r\nexports.UPDATE_COMMENT = \"UPDATE_COMMENT\";\r\nexports.updateComment = function (text) { return ({\r\n    type: exports.UPDATE_COMMENT,\r\n    text: text,\r\n}); };\r\nexports.rootReducer = function (state, action) {\r\n    if (state === void 0) { state = initialState; }\r\n    switch (action.type) {\r\n        case exports.UPDATE_COMMENT:\r\n            return __assign(__assign({}, state), { commentText: action.text });\r\n        default:\r\n            return state;\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/store.ts?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

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

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

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

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");\n\n//# sourceURL=webpack:///external_%22redux-devtools-extension%22?");

/***/ })

/******/ });