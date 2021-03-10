webpackHotUpdate("main",{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\r\n//import {nanoid} from 'nanoid';\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"./node_modules/react-hot-loader/root.js\");\r\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout/Layout */ \"./src/shared/Layout/Layout.tsx\");\r\nvar Header_1 = __webpack_require__(/*! ./shared/Header/Header */ \"./src/shared/Header/Header.tsx\");\r\nvar Content_1 = __webpack_require__(/*! ./shared/Content/Content */ \"./src/shared/Content/Content.tsx\");\r\nvar CardList_1 = __webpack_require__(/*! ./shared/CardList/CardList */ \"./src/shared/CardList/CardList.tsx\");\r\nvar useToken_1 = __importDefault(__webpack_require__(/*! ./hooks/useToken */ \"./src/hooks/useToken.ts\"));\r\nvar tokenContext_1 = __importDefault(__webpack_require__(/*! ./shared/context/tokenContext */ \"./src/shared/context/tokenContext.ts\"));\r\nvar userContext_1 = __webpack_require__(/*! ./shared/context/userContext */ \"./src/shared/context/userContext.tsx\");\r\nvar PostsContext_1 = __webpack_require__(/*! ./shared/context/PostsContext */ \"./src/shared/context/PostsContext.tsx\");\r\nfunction AppComponent() {\r\n    var token = useToken_1.default()[0];\r\n    return (react_1.default.createElement(tokenContext_1.default.Provider, { value: token },\r\n        react_1.default.createElement(userContext_1.UserContextProvider, null,\r\n            react_1.default.createElement(PostsContext_1.PostsContextProvider, null,\r\n                react_1.default.createElement(Layout_1.Layout, null,\r\n                    react_1.default.createElement(Header_1.Header, null),\r\n                    react_1.default.createElement(Content_1.Content, null,\r\n                        react_1.default.createElement(CardList_1.CardList, null)))))));\r\n}\r\n;\r\nexports.App = root_1.hot(function () { return react_1.default.createElement(AppComponent, null); });\r\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/shared/CardList/Card/Card.tsx":
/*!*******************************************!*\
  !*** ./src/shared/CardList/Card/Card.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Card = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar Card_css_1 = __importDefault(__webpack_require__(/*! ./Card.css */ \"./src/shared/CardList/Card/Card.css\"));\r\nvar Controls_1 = __webpack_require__(/*! ./Controls/Controls */ \"./src/shared/CardList/Card/Controls/Controls.tsx\");\r\nvar Menu_1 = __webpack_require__(/*! ./Menu/Menu */ \"./src/shared/CardList/Card/Menu/Menu.tsx\");\r\nvar Preview_1 = __webpack_require__(/*! ./Preview/Preview */ \"./src/shared/CardList/Card/Preview/Preview.tsx\");\r\nvar TextContent_1 = __webpack_require__(/*! ./TextContent/TextContent */ \"./src/shared/CardList/Card/TextContent/TextContent.tsx\");\r\nfunction Card(_a) {\r\n    var posts = _a.posts;\r\n    var thumbnail = posts.thumbnail, author = posts.author, title = posts.title;\r\n    console.log(posts);\r\n    function PreviewShow() {\r\n        if (thumbnail) {\r\n            if (thumbnail.indexOf('jpg') === -1) {\r\n                return;\r\n            }\r\n        }\r\n        return react_1.default.createElement(Preview_1.Preview, { img: thumbnail });\r\n    }\r\n    return (react_1.default.createElement(\"li\", { className: Card_css_1.default.card },\r\n        react_1.default.createElement(TextContent_1.TextContent, { name: author, title: title }),\r\n        PreviewShow(),\r\n        react_1.default.createElement(Menu_1.Menu, null),\r\n        react_1.default.createElement(Controls_1.Controls, null)));\r\n}\r\nexports.Card = Card;\r\n;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Card.tsx?");

/***/ }),

/***/ "./src/shared/CardList/CardList.tsx":
/*!******************************************!*\
  !*** ./src/shared/CardList/CardList.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CardList = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar PostsContext_1 = __importDefault(__webpack_require__(/*! ../context/PostsContext */ \"./src/shared/context/PostsContext.tsx\"));\r\nvar Card_1 = __webpack_require__(/*! ./Card/Card */ \"./src/shared/CardList/Card/Card.tsx\");\r\nvar cardList_css_1 = __importDefault(__webpack_require__(/*! ./cardList.css */ \"./src/shared/CardList/cardList.css\"));\r\nfunction CardList() {\r\n    var posts = react_1.useContext(PostsContext_1.default).posts;\r\n    return (react_1.default.createElement(\"ul\", { className: cardList_css_1.default.cardList }, posts\r\n        ? posts.map(function (item) {\r\n            var data = item.data;\r\n            return react_1.default.createElement(Card_1.Card, { posts: data });\r\n        })\r\n        : react_1.default.createElement(Card_1.Card, { posts: \"text\" })));\r\n}\r\nexports.CardList = CardList;\r\n;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/CardList.tsx?");

/***/ })

})