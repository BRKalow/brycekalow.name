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

  var themeContextValue = react__WEBPACK_IMPORTED_MODULE_2___default.a.useMemo(function () {
    return {
      theme: themes[theme],
      setTheme: setTheme
    };
  }, [theme, setTheme]);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "930657697",
    __self: this
  }, "@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');:root{overflow-x:hidden;}body{font-family:Open Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial, sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;font-size:0.9em;margin:0;-webkit-font-smoothing:antialiased;padding:5em;box-sizing:border-box;color:".concat(activeTheme.color, ";background-color:").concat(activeTheme.backgroundColor, ";}@media (max-width:667px){body{padding:2em;}}:root,body,main,#__next{height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icnljZS9jb2RlL3BlcnNvbmFsLXNpdGUvY29tcG9uZW50cy9zdHlsZS1wcm92aWRlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUN5QixBQUU4RixBQUdqRSxBQUs4QyxBQVlsRCxBQVFGLFlBUFosQUFRRixNQXpCQSwySEFLa0IsZ0JBQ1AsU0FDMEIsbUNBQ3ZCLFlBQ1Usc0JBQ2EsbUNBQ1csOENBQ2hEIiwiZmlsZSI6Ii9Vc2Vycy9icnljZS9jb2RlL3BlcnNvbmFsLXNpdGUvY29tcG9uZW50cy9zdHlsZS1wcm92aWRlci50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgVGhlbWUge1xuICBjb2xvcjogc3RyaW5nO1xuICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcbn1cblxuY29uc3QgdGhlbWVzOiBSZWNvcmQ8VGhlbWVzLCBUaGVtZT4gPSB7XG4gIGluaXRpYWw6IHtcbiAgICBjb2xvcjogJyMzMTMxM2YnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnXG4gIH0sXG4gIGRhcms6IHtcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDkwOTBiJ1xuICB9XG59O1xuXG50eXBlIFRoZW1lcyA9ICdpbml0aWFsJyB8ICdkYXJrJztcblxuY29uc3QgVGhlbWVDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDx7XG4gIHRoZW1lOiBUaGVtZTtcbiAgc2V0VGhlbWU6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPFRoZW1lcz4+O1xufT4oe1xuICB0aGVtZTogdGhlbWVzLmluaXRpYWwsXG4gIHNldFRoZW1lOiAoKSA9PiB7fVxufSk7XG5cbmNvbnN0IFN0eWxlUHJvdmlkZXI6IFJlYWN0LkZDID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IFJlYWN0LnVzZVN0YXRlPFRoZW1lcz4oJ2luaXRpYWwnKTtcbiAgY29uc3QgdGhlbWVDb250ZXh0VmFsdWUgPSBSZWFjdC51c2VNZW1vKCgpID0+ICh7IHRoZW1lOiB0aGVtZXNbdGhlbWVdLCBzZXRUaGVtZSB9KSwgW1xuICAgIHRoZW1lLFxuICAgIHNldFRoZW1lXG4gIF0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOjQwMCw3MDAmZGlzcGxheT1zd2FwJyk7XG5cbiAgICAgICAgOnJvb3Qge1xuICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIEhlbHZldGljYSwgQXJpYWwsXG4gICAgICAgICAgICBzYW5zLXNlcmlmLCBBcHBsZSBDb2xvciBFbW9qaSwgU2Vnb2UgVUkgRW1vamksIFNlZ29lIFVJIFN5bWJvbDtcbiAgICAgICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgICBwYWRkaW5nOiA1ZW07XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBjb2xvcjogJHthY3RpdmVUaGVtZS5jb2xvcn07XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHthY3RpdmVUaGVtZS5iYWNrZ3JvdW5kQ29sb3J9O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY2N3B4KSB7XG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAyZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgOnJvb3QsXG4gICAgICAgIGJvZHksXG4gICAgICAgIG1haW4sXG4gICAgICAgICNfX25leHQge1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPFRoZW1lQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dGhlbWVDb250ZXh0VmFsdWV9PntjaGlsZHJlbn08L1RoZW1lQ29udGV4dC5Qcm92aWRlcj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0eWxlUHJvdmlkZXI7XG4iXX0= */\n/*@ sourceURL=/Users/bryce/code/personal-site/components/style-provider.tsx */")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ThemeContext.Provider, {
    value: themeContextValue,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (StyleProvider);

/***/ })

})
//# sourceMappingURL=_app.js.43b4a529a01a4fa7eabc.hot-update.js.map