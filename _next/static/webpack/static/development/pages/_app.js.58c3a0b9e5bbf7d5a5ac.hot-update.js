webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/style-provider.tsx":
/*!***************************************!*\
  !*** ./components/style-provider.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/bryce/code/personal-site/components/style-provider.tsx";


var themes = {
  initial: {
    color: '#31313f',
    backgroundColor: '#ffffff',
    headingColor: '#34343e'
  },
  dark: {
    color: 'white',
    backgroundColor: '#09090b',
    headingColor: '#34343e'
  }
};
var ThemeContext = react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext({
  theme: themes.initial,
  setTheme: function setTheme() {}
});

var StyleProvider = function StyleProvider(_ref) {
  var children = _ref.children;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState('initial'),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      theme = _React$useState2[0],
      setTheme = _React$useState2[1];

  var activeTheme = themes[theme];
  var themeContextValue = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(function () {
    return {
      theme: themes[theme],
      name: theme,
      setTheme: setTheme
    };
  }, [theme, setTheme]);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3273621989",
    dynamic: [activeTheme.color, activeTheme.backgroundColor],
    __self: this
  }, "@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');:root{overflow-x:hidden;}body{font-family:Open Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial, sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;font-size:0.9em;margin:0;-webkit-font-smoothing:antialiased;padding:5em;box-sizing:border-box;color:".concat(activeTheme.color, ";background-color:").concat(activeTheme.backgroundColor, ";}@media (max-width:667px){body{padding:2em;}}:root,body,main,#__next{height:100%;}h1{color:#34343e;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icnljZS9jb2RlL3BlcnNvbmFsLXNpdGUvY29tcG9uZW50cy9zdHlsZS1wcm92aWRlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUN5QixBQUU4RixBQUdqRSxBQUs4QyxBQVlsRCxBQVFGLEFBSUUsWUFYZCxBQVFGLEVBSUEsSUE3QkEsMkhBS2tCLGdCQUNQLFNBQzBCLG1DQUN2QixZQUNVLHNCQUNhLG1DQUNXLDhDQUNoRCIsImZpbGUiOiIvVXNlcnMvYnJ5Y2UvY29kZS9wZXJzb25hbC1zaXRlL2NvbXBvbmVudHMvc3R5bGUtcHJvdmlkZXIudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIFRoZW1lIHtcbiAgY29sb3I6IHN0cmluZztcbiAgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XG4gIGhlYWRpbmdDb2xvcjogc3RyaW5nO1xufVxuXG5jb25zdCB0aGVtZXM6IFJlY29yZDxUaGVtZXMsIFRoZW1lPiA9IHtcbiAgaW5pdGlhbDoge1xuICAgIGNvbG9yOiAnIzMxMzEzZicsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXG4gICAgaGVhZGluZ0NvbG9yOiAnIzM0MzQzZSdcbiAgfSxcbiAgZGFyazoge1xuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyMwOTA5MGInLFxuICAgIGhlYWRpbmdDb2xvcjogJyMzNDM0M2UnXG4gIH1cbn07XG5cbnR5cGUgVGhlbWVzID0gJ2luaXRpYWwnIHwgJ2RhcmsnO1xuXG5jb25zdCBUaGVtZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PHtcbiAgdGhlbWU6IFRoZW1lO1xuICBzZXRUaGVtZTogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248VGhlbWVzPj47XG59Pih7XG4gIHRoZW1lOiB0aGVtZXMuaW5pdGlhbCxcbiAgc2V0VGhlbWU6ICgpID0+IHt9XG59KTtcblxuY29uc3QgU3R5bGVQcm92aWRlcjogUmVhY3QuRkMgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gUmVhY3QudXNlU3RhdGU8VGhlbWVzPignaW5pdGlhbCcpO1xuICBjb25zdCBhY3RpdmVUaGVtZSA9IHRoZW1lc1t0aGVtZV07XG4gIGNvbnN0IHRoZW1lQ29udGV4dFZhbHVlID0gUmVhY3QudXNlTWVtbygoKSA9PiAoeyB0aGVtZTogdGhlbWVzW3RoZW1lXSwgbmFtZTogdGhlbWUsIHNldFRoZW1lIH0pLCBbXG4gICAgdGhlbWUsXG4gICAgc2V0VGhlbWVcbiAgXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6NDAwLDcwMCZkaXNwbGF5PXN3YXAnKTtcblxuICAgICAgICA6cm9vdCB7XG4gICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICB9XG5cbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgSGVsdmV0aWNhLCBBcmlhbCxcbiAgICAgICAgICAgIHNhbnMtc2VyaWYsIEFwcGxlIENvbG9yIEVtb2ppLCBTZWdvZSBVSSBFbW9qaSwgU2Vnb2UgVUkgU3ltYm9sO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAgIHBhZGRpbmc6IDVlbTtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIGNvbG9yOiAke2FjdGl2ZVRoZW1lLmNvbG9yfTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2FjdGl2ZVRoZW1lLmJhY2tncm91bmRDb2xvcn07XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjY3cHgpIHtcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICA6cm9vdCxcbiAgICAgICAgYm9keSxcbiAgICAgICAgbWFpbixcbiAgICAgICAgI19fbmV4dCB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgaDEge1xuICAgICAgICAgIGNvbG9yOiAjMzQzNDNlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8VGhlbWVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt0aGVtZUNvbnRleHRWYWx1ZX0+e2NoaWxkcmVufTwvVGhlbWVDb250ZXh0LlByb3ZpZGVyPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3R5bGVQcm92aWRlcjtcbiJdfQ== */\n/*@ sourceURL=/Users/bryce/code/personal-site/components/style-provider.tsx */")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ThemeContext.Provider, {
    value: themeContextValue,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (StyleProvider);

/***/ })

})
//# sourceMappingURL=_app.js.58c3a0b9e5bbf7d5a5ac.hot-update.js.map