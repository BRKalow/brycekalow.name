webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/style-provider.tsx":
/*!***************************************!*\
  !*** ./components/style-provider.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);


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
var ThemeContext = react__WEBPACK_IMPORTED_MODULE_3___default.a.createContext({
  theme: themes.initial,
  setTheme: function setTheme() {}
});

var StyleProvider = function StyleProvider(_ref) {
  var children = _ref.children;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState('initial'),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      theme = _React$useState2[0],
      setTheme = _React$useState2[1];

  var activeTheme = themes[theme];
  var themeContextValue = react__WEBPACK_IMPORTED_MODULE_3___default.a.useMemo(function () {
    return {
      theme: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, themes['initial'], themes[theme]),
      name: theme,
      setTheme: setTheme
    };
  }, [theme, setTheme]);
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3273621989",
    dynamic: [activeTheme.color, activeTheme.backgroundColor],
    __self: this
  }, "@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');:root{overflow-x:hidden;}body{font-family:Open Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial, sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;font-size:0.9em;margin:0;-webkit-font-smoothing:antialiased;padding:5em;box-sizing:border-box;color:".concat(activeTheme.color, ";background-color:").concat(activeTheme.backgroundColor, ";}@media (max-width:667px){body{padding:2em;}}:root,body,main,#__next{height:100%;}h1{color:#34343e;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icnljZS9jb2RlL3BlcnNvbmFsLXNpdGUvY29tcG9uZW50cy9zdHlsZS1wcm92aWRlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUN5QixBQUU4RixBQUdqRSxBQUs4QyxBQVlsRCxBQVFGLEFBSUUsWUFYZCxBQVFGLEVBSUEsSUE3QkEsMkhBS2tCLGdCQUNQLFNBQzBCLG1DQUN2QixZQUNVLHNCQUNhLG1DQUNXLDhDQUNoRCIsImZpbGUiOiIvVXNlcnMvYnJ5Y2UvY29kZS9wZXJzb25hbC1zaXRlL2NvbXBvbmVudHMvc3R5bGUtcHJvdmlkZXIudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIFRoZW1lIHtcbiAgY29sb3I6IHN0cmluZztcbiAgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XG4gIGhlYWRpbmdDb2xvcjogc3RyaW5nO1xufVxuXG5jb25zdCB0aGVtZXM6IFJlY29yZDxUaGVtZXMsIFBhcnRpYWw8VGhlbWU+PiA9IHtcbiAgaW5pdGlhbDoge1xuICAgIGNvbG9yOiAnIzMxMzEzZicsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXG4gICAgaGVhZGluZ0NvbG9yOiAnIzM0MzQzZSdcbiAgfSxcbiAgZGFyazoge1xuICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyMwOTA5MGInLFxuICAgIGhlYWRpbmdDb2xvcjogJyMzNDM0M2UnXG4gIH1cbn07XG5cbnR5cGUgVGhlbWVzID0gJ2luaXRpYWwnIHwgJ2RhcmsnO1xuXG5jb25zdCBUaGVtZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PHtcbiAgdGhlbWU6IFBhcnRpYWw8VGhlbWU+O1xuICBzZXRUaGVtZTogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248VGhlbWVzPj47XG59Pih7XG4gIHRoZW1lOiB0aGVtZXMuaW5pdGlhbCxcbiAgc2V0VGhlbWU6ICgpID0+IHt9XG59KTtcblxuY29uc3QgU3R5bGVQcm92aWRlcjogUmVhY3QuRkMgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gUmVhY3QudXNlU3RhdGU8VGhlbWVzPignaW5pdGlhbCcpO1xuICBjb25zdCBhY3RpdmVUaGVtZSA9IHRoZW1lc1t0aGVtZV07XG4gIGNvbnN0IHRoZW1lQ29udGV4dFZhbHVlID0gUmVhY3QudXNlTWVtbyhcbiAgICAoKSA9PiAoeyB0aGVtZTogeyAuLi50aGVtZXNbJ2luaXRpYWwnXSwgLi4udGhlbWVzW3RoZW1lXSB9LCBuYW1lOiB0aGVtZSwgc2V0VGhlbWUgfSksXG4gICAgW3RoZW1lLCBzZXRUaGVtZV1cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2Fuczo0MDAsNzAwJmRpc3BsYXk9c3dhcCcpO1xuXG4gICAgICAgIDpyb290IHtcbiAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgIH1cblxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBIZWx2ZXRpY2EsIEFyaWFsLFxuICAgICAgICAgICAgc2Fucy1zZXJpZiwgQXBwbGUgQ29sb3IgRW1vamksIFNlZ29lIFVJIEVtb2ppLCBTZWdvZSBVSSBTeW1ib2w7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgcGFkZGluZzogNWVtO1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgY29sb3I6ICR7YWN0aXZlVGhlbWUuY29sb3J9O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7YWN0aXZlVGhlbWUuYmFja2dyb3VuZENvbG9yfTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NjdweCkge1xuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgcGFkZGluZzogMmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIDpyb290LFxuICAgICAgICBib2R5LFxuICAgICAgICBtYWluLFxuICAgICAgICAjX19uZXh0IHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICBoMSB7XG4gICAgICAgICAgY29sb3I6ICMzNDM0M2U7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxUaGVtZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3RoZW1lQ29udGV4dFZhbHVlfT57Y2hpbGRyZW59PC9UaGVtZUNvbnRleHQuUHJvdmlkZXI+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdHlsZVByb3ZpZGVyO1xuIl19 */\n/*@ sourceURL=/Users/bryce/code/personal-site/components/style-provider.tsx */")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ThemeContext.Provider, {
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
//# sourceMappingURL=_app.js.68e2e3fc54a5e4b20aba.hot-update.js.map