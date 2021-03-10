webpackHotUpdate("main",{

/***/ "./src/shared/CardList/Card/Menu/Menu.tsx":
/*!************************************************!*\
  !*** ./src/shared/CardList/Card/Menu/Menu.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Menu = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar Dropdown_1 = __webpack_require__(/*! ../../../Dropdown/Dropdown */ \"./src/shared/Dropdown/Dropdown.tsx\");\r\nvar IconMenu_1 = __importDefault(__webpack_require__(/*! ../../../Icons/IconMenu */ \"./src/shared/Icons/IconMenu.tsx\"));\r\nvar CloseButton_1 = __importDefault(__webpack_require__(/*! ./CloseButton/CloseButton */ \"./src/shared/CardList/Card/Menu/CloseButton/CloseButton.tsx\"));\r\nvar menu_css_1 = __importDefault(__webpack_require__(/*! ./menu.css */ \"./src/shared/CardList/Card/Menu/menu.css\"));\r\nvar MenuItem_1 = __importDefault(__webpack_require__(/*! ./MenuItem/MenuItem */ \"./src/shared/CardList/Card/Menu/MenuItem/MenuItem.tsx\"));\r\nfunction Menu() {\r\n    return (react_1.default.createElement(\"div\", { className: menu_css_1.default.menu },\r\n        react_1.default.createElement(Dropdown_1.Dropdown, { button: react_1.default.createElement(\"button\", { className: menu_css_1.default.menuButton },\r\n                react_1.default.createElement(IconMenu_1.default, null)) },\r\n            react_1.default.createElement(\"div\", { className: menu_css_1.default.menuContainer },\r\n                react_1.default.createElement(MenuItem_1.default, null),\r\n                react_1.default.createElement(CloseButton_1.default, null)))));\r\n}\r\nexports.Menu = Menu;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardList/Card/Menu/Menu.tsx?");

/***/ }),

/***/ "./src/shared/Icons/IconMenu.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/IconMenu.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.IconMenu = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nfunction IconMenu(_a) {\r\n    var size = _a.size;\r\n    return (react_1.default.createElement(\"svg\", { width: size, height: size, viewBox: \"0 0 5 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n        react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"2.5\", r: \"2.5\", fill: \"#D9D9D9\" }),\r\n        react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"10\", r: \"2.5\", fill: \"#D9D9D9\" }),\r\n        react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"17.5\", r: \"2.5\", fill: \"#D9D9D9\" })));\r\n}\r\nexports.IconMenu = IconMenu;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icons/IconMenu.tsx?");

/***/ })

})