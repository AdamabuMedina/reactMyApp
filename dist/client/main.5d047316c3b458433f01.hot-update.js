webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./src/shared/CardList/Card/TextContent/textContent.css":
false,

/***/ "./src/shared/CardList/Card/Card.tsx":
/*!*******************************************!*\
  !*** ./src/shared/CardList/Card/Card.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Card = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar Card_css_1 = __importDefault(__webpack_require__(/*! ./Card.css */ \"./src/shared/CardList/Card/Card.css\"));\r\nvar Controls_1 = __webpack_require__(/*! ./Controls/Controls */ \"./src/shared/CardList/Card/Controls/Controls.tsx\");\r\nvar Menu_1 = __webpack_require__(/*! ./Menu/Menu */ \"./src/shared/CardList/Card/Menu/Menu.tsx\");\r\nvar Preview_1 = __webpack_require__(/*! ./Preview/Preview */ \"./src/shared/CardList/Card/Preview/Preview.tsx\");\r\nvar TextContent_1 = __webpack_require__(/*! ./TextContent/TextContent */ \"./src/shared/CardList/Card/TextContent/TextContent.tsx\");\r\nfunction Card(_a) {\r\n    var posts = _a.posts;\r\n    var thumbnail = posts.thumbnail, author = posts.author, title = posts.title;\r\n    console.log(posts);\r\n    function PreviewShow() {\r\n        if (thumbnail) {\r\n            if (thumbnail.indexOf('jpg') === -1) {\r\n                return;\r\n            }\r\n        }\r\n        return react_1.default.createElement(Preview_1.Preview, { img: thumbnail });\r\n    }\r\n    return (react_1.default.createElement(\"li\", { className: Card_css_1.default.card },\r\n        react_1.default.createElement(TextContent_1.TextContent, { name: author, title: title }),\r\n        PreviewShow(),\r\n        react_1.default.createElement(Menu_1.Menu, null),\r\n        react_1.default.createElement(Controls_1.Controls, null)));\r\n}\r\nexports.Card = Card;\r\n;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Card.tsx?");

/***/ }),

/***/ "./src/shared/CardList/Card/TextContent/TextContent.tsx":
/*!**************************************************************!*\
  !*** ./src/shared/CardList/Card/TextContent/TextContent.tsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected token (24:30)\\nFile was processed with these loaders:\\n * ./node_modules/ts-loader/index.js\\nYou may need an additional loader to handle the result of these loaders.\\n|                     setIsModalOpened(true);\\n|                 } }, title),\\n>             isModalOpened && ())));\\n| }\\n| exports.TextContent = TextContent;\");\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/TextContent/TextContent.tsx?");

/***/ }),

/***/ "./src/shared/CardList/Card/TextContent/textContent.css":
false

})