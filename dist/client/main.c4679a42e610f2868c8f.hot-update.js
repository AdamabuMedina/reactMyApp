webpackHotUpdate("main",{

/***/ "./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.UserBlock = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar hooks_1 = __webpack_require__(/*! ../../../../hooks */ \"./src/hooks/index.ts\");\r\nvar Break_1 = __webpack_require__(/*! ../../../Break */ \"./src/shared/Break/index.ts\");\r\nvar iconAnon_1 = __webpack_require__(/*! ../../../Icons/iconAnon */ \"./src/shared/Icons/iconAnon.tsx\");\r\nvar userBlock_css_1 = __importDefault(__webpack_require__(/*! ./userBlock.css */ \"./src/shared/Header/SearchBlock/UserBlock/userBlock.css\"));\r\nfunction UserBlock() {\r\n    var _a = hooks_1.useUserData(), data = _a.data, loading = _a.loading;\r\n    var _b = react_1.default.useState(0), innerWidth = _b[0], setInnerWidth = _b[1];\r\n    react_1.default.useEffect(function () {\r\n        setInnerWidth(window.innerWidth);\r\n    }, [innerWidth]);\r\n    return (react_1.default.createElement(\"a\", { href: \"https://www.reddit.com/api/v1/authorize?client_id=SCJobOW3EGzptg&response_type=code&state=RANDOM_STRING&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity\", className: userBlock_css_1.default.userBox },\r\n        react_1.default.createElement(\"div\", { className: userBlock_css_1.default.avatarBox }, data.iconImg\r\n            ? react_1.default.createElement(\"img\", { src: data.iconImg, alt: \"user avatar\", className: userBlock_css_1.default.avatarImage })\r\n            : react_1.default.createElement(iconAnon_1.IconAnon, null)),\r\n        react_1.default.createElement(\"div\", { className: userBlock_css_1.default.username },\r\n            react_1.default.createElement(Break_1.Break, { size: 12 }),\r\n            loading\r\n                ? react_1.default.createElement(\"span\", null, \"Loading\")\r\n                : data.name || \"Аноним\")));\r\n}\r\nexports.UserBlock = UserBlock;\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/index.ts":
/*!**********************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/index.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./UserBlock */ \"./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/index.ts?");

/***/ })

})