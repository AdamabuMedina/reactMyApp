webpackHotUpdate("main",{

/***/ "./src/shared/Icon/Icon.tsx":
/*!**********************************!*\
  !*** ./src/shared/Icon/Icon.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Icon = exports.EIcons = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar icon_css_1 = __importDefault(__webpack_require__(/*! ./icon.css */ \"./src/shared/Icon/icon.css\"));\r\nvar classnames_1 = __importDefault(__webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\"));\r\nvar Icons_1 = __webpack_require__(/*! ../LayoutApp/Icons */ \"./src/shared/LayoutApp/Icons/index.ts\");\r\nvar EIcons;\r\n(function (EIcons) {\r\n    EIcons[EIcons[\"block\"] = 0] = \"block\";\r\n    EIcons[EIcons[\"comments\"] = 1] = \"comments\";\r\n    EIcons[EIcons[\"menu\"] = 2] = \"menu\";\r\n    EIcons[EIcons[\"saving\"] = 3] = \"saving\";\r\n    EIcons[EIcons[\"shared\"] = 4] = \"shared\";\r\n    EIcons[EIcons[\"warning\"] = 5] = \"warning\";\r\n    EIcons[EIcons[\"anon\"] = 6] = \"anon\";\r\n})(EIcons = exports.EIcons || (exports.EIcons = {}));\r\nvar getIcon = function (name) {\r\n    switch (name) {\r\n        case EIcons.block:\r\n            return react_1.default.createElement(Icons_1.BlockIcon, null);\r\n        case EIcons.comments:\r\n            return react_1.default.createElement(Icons_1.CommentIcon, null);\r\n        case EIcons.menu:\r\n            return react_1.default.createElement(Icons_1.MenuIcon, null);\r\n        case EIcons.saving:\r\n            return react_1.default.createElement(Icons_1.SaveIcon, null);\r\n        case EIcons.shared:\r\n            return react_1.default.createElement(Icons_1.ShareIcon, null);\r\n        case EIcons.warning:\r\n            return react_1.default.createElement(Icons_1.WarningIcon, null);\r\n        case EIcons.anon:\r\n            return react_1.default.createElement(Icons_1.AnonIcon, null);\r\n    }\r\n};\r\nfunction Icon(props) {\r\n    var _a, _b, _c;\r\n    var name = props.name, size = props.size, mobileSize = props.mobileSize, tabletSize = props.tabletSize, desktopSize = props.desktopSize;\r\n    var classes = classnames_1.default(icon_css_1.default.icon, icon_css_1.default[\"s\" + size], (_a = {}, _a[icon_css_1.default[\"m\" + mobileSize]] = mobileSize, _a), (_b = {}, _b[icon_css_1.default[\"t\" + tabletSize]] = tabletSize, _b), (_c = {}, _c[icon_css_1.default[\"d\" + desktopSize]] = desktopSize, _c));\r\n    return react_1.default.createElement(\"div\", { className: classes }, getIcon((name)));\r\n}\r\nexports.Icon = Icon;\r\n\n\n//# sourceURL=webpack:///./src/shared/Icon/Icon.tsx?");

/***/ }),

/***/ "./src/shared/Icon/index.ts":
/*!**********************************!*\
  !*** ./src/shared/Icon/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Icon */ \"./src/shared/Icon/Icon.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Icon/index.ts?");

/***/ })

})