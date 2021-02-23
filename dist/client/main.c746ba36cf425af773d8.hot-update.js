webpackHotUpdate("main",{

/***/ "./src/shared/LayoutApp/Header/Header.tsx":
/*!************************************************!*\
  !*** ./src/shared/LayoutApp/Header/Header.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Header = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar SearchBlock_1 = __webpack_require__(/*! ./SearchBlock/SearchBlock */ \"./src/shared/LayoutApp/Header/SearchBlock/SearchBlock.tsx\");\r\nvar ThreadTitle_1 = __webpack_require__(/*! ./ThreadTitle/ThreadTitle */ \"./src/shared/LayoutApp/Header/ThreadTitle/ThreadTitle.tsx\");\r\nvar SortBlock_1 = __webpack_require__(/*! ./SortBlock/SortBlock */ \"./src/shared/LayoutApp/Header/SortBlock/SortBlock.tsx\");\r\nvar header_css_1 = __importDefault(__webpack_require__(/*! ./header.css */ \"./src/shared/LayoutApp/Header/header.css\"));\r\nfunction Header() {\r\n    return (react_1.default.createElement(\"header\", { className: header_css_1.default.header },\r\n        react_1.default.createElement(SearchBlock_1.SearchBlock, null),\r\n        react_1.default.createElement(ThreadTitle_1.ThreadTitle, null),\r\n        react_1.default.createElement(SortBlock_1.SortBlock, null)));\r\n}\r\nexports.Header = Header;\r\n\n\n//# sourceURL=webpack:///./src/shared/LayoutApp/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/LayoutApp/Header/SearchBlock/SearchBlock.tsx":
/*!*****************************************************************!*\
  !*** ./src/shared/LayoutApp/Header/SearchBlock/SearchBlock.tsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.SearchBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nvar searchblock_css_1 = __importDefault(__webpack_require__(/*! ./searchblock.css */ \"./src/shared/LayoutApp/Header/SearchBlock/searchblock.css\"));\r\nvar UserBlock_1 = __webpack_require__(/*! ./UserBlock */ \"./src/shared/LayoutApp/Header/SearchBlock/UserBlock/index.ts\");\r\nfunction SearchBlock(_a) {\r\n    var token = _a.token;\r\n    var _b = react_1.default.useState({}), data = _b[0], setData = _b[1];\r\n    react_1.default.useEffect(function () {\r\n        axios_1.default\r\n            .get(\"https://oauth.reddit.com/api/v1/me\", {\r\n            headers: headers\r\n        });\r\n    });\r\n    return (react_1.default.createElement(\"div\", { className: searchblock_css_1.default.searchBlock },\r\n        react_1.default.createElement(UserBlock_1.UserBlock, null)));\r\n}\r\nexports.SearchBlock = SearchBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/LayoutApp/Header/SearchBlock/SearchBlock.tsx?");

/***/ })

})