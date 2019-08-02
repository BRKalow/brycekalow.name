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
    backgroundColor: '#ffffff'
  },
  dark: {
    color: 'white',
    backgroundColor: '#09090b'
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
    id: "2084934960",
    dynamic: [activeTheme.color, activeTheme.backgroundColor],
    __self: this
  }, "@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');:root{overflow-x:hidden;}body{font-family:Open Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial, sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;font-size:0.9em;margin:0;-webkit-font-smoothing:antialiased;padding:5em;box-sizing:border-box;color:".concat(activeTheme.color, ";background-color:").concat(activeTheme.backgroundColor, ";}@media (max-width:667px){body{padding:2em;}}h1{color:#34343e;}:root,body,main,#__next{height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icnljZS9jb2RlL3BlcnNvbmFsLXNpdGUvY29tcG9uZW50cy9zdHlsZS1wcm92aWRlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0N5QixBQUU4RixBQUdqRSxBQUs4QyxBQVlsRCxBQUtBLEFBT0YsWUFYWixBQVlGLEVBUEEsSUF0QkEsMkhBS2tCLGdCQUNQLFNBQzBCLG1DQUN2QixZQUNVLHNCQUNhLG1DQUNXLDhDQUNoRCIsImZpbGUiOiIvVXNlcnMvYnJ5Y2UvY29kZS9wZXJzb25hbC1zaXRlL2NvbXBvbmVudHMvc3R5bGUtcHJvdmlkZXIudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIFRoZW1lIHtcbiAgY29sb3I6IHN0cmluZztcbiAgYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XG59XG5cbmNvbnN0IHRoZW1lczogUmVjb3JkPFRoZW1lcywgVGhlbWU+ID0ge1xuICBpbml0aWFsOiB7XG4gICAgY29sb3I6ICcjMzEzMTNmJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJ1xuICB9LFxuICBkYXJrOiB7XG4gICAgY29sb3I6ICd3aGl0ZScsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzA5MDkwYidcbiAgfVxufTtcblxudHlwZSBUaGVtZXMgPSAnaW5pdGlhbCcgfCAnZGFyayc7XG5cbmNvbnN0IFRoZW1lQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8e1xuICB0aGVtZTogVGhlbWU7XG4gIHNldFRoZW1lOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxUaGVtZXM+Pjtcbn0+KHtcbiAgdGhlbWU6IHRoZW1lcy5pbml0aWFsLFxuICBzZXRUaGVtZTogKCkgPT4ge31cbn0pO1xuXG5jb25zdCBTdHlsZVByb3ZpZGVyOiBSZWFjdC5GQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSBSZWFjdC51c2VTdGF0ZTxUaGVtZXM+KCdpbml0aWFsJyk7XG4gIGNvbnN0IGFjdGl2ZVRoZW1lID0gdGhlbWVzW3RoZW1lXTtcbiAgY29uc3QgdGhlbWVDb250ZXh0VmFsdWUgPSBSZWFjdC51c2VNZW1vKCgpID0+ICh7IHRoZW1lOiB0aGVtZXNbdGhlbWVdLCBuYW1lOiB0aGVtZSwgc2V0VGhlbWUgfSksIFtcbiAgICB0aGVtZSxcbiAgICBzZXRUaGVtZVxuICBdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2Fuczo0MDAsNzAwJmRpc3BsYXk9c3dhcCcpO1xuXG4gICAgICAgIDpyb290IHtcbiAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgIH1cblxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBIZWx2ZXRpY2EsIEFyaWFsLFxuICAgICAgICAgICAgc2Fucy1zZXJpZiwgQXBwbGUgQ29sb3IgRW1vamksIFNlZ29lIFVJIEVtb2ppLCBTZWdvZSBVSSBTeW1ib2w7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgcGFkZGluZzogNWVtO1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgY29sb3I6ICR7YWN0aXZlVGhlbWUuY29sb3J9O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7YWN0aXZlVGhlbWUuYmFja2dyb3VuZENvbG9yfTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NjdweCkge1xuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgcGFkZGluZzogMmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGgxIHtcbiAgICAgICAgICBjb2xvcjogIzM0MzQzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIDpyb290LFxuICAgICAgICBib2R5LFxuICAgICAgICBtYWluLFxuICAgICAgICAjX19uZXh0IHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxUaGVtZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3RoZW1lQ29udGV4dFZhbHVlfT57Y2hpbGRyZW59PC9UaGVtZUNvbnRleHQuUHJvdmlkZXI+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdHlsZVByb3ZpZGVyO1xuIl19 */\n/*@ sourceURL=/Users/bryce/code/personal-site/components/style-provider.tsx */")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ThemeContext.Provider, {
    value: themeContextValue,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (StyleProvider);

/***/ })

})
//# sourceMappingURL=_app.js.5721bbd1c3100fdf5993.hot-update.js.map