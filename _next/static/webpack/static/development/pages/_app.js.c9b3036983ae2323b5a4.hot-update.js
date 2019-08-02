webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/theme-switcher.jsx":
/*!***************************************!*\
  !*** ./components/theme-switcher.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style-provider */ "./components/style-provider.tsx");
var _jsxFileName = "/Users/bryce/code/personal-site/components/theme-switcher.jsx";



var ThemeSwitcher = function ThemeSwitcher() {
  var t = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(_style_provider__WEBPACK_IMPORTED_MODULE_1__["ThemeContext"]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return t.name === 'initial' ? t.setTheme('dark') : t.setTheme('initial');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "dark");
};

/* harmony default export */ __webpack_exports__["default"] = (ThemeSwitcher);

/***/ })

})
//# sourceMappingURL=_app.js.c9b3036983ae2323b5a4.hot-update.js.map