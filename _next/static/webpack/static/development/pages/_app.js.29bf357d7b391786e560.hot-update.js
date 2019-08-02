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


var initialTheme = {
  color: '#31313f',
  backgroundColor: '#ffffff'
};
var ThemeContext = react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext(initialTheme);

var StyleProvider = function StyleProvider(_ref) {
  var children = _ref.children;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(initialTheme),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      theme = _React$useState2[0],
      setTheme = _React$useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "470267585",
    __self: this
  }, "@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');:root{overflow-x:hidden;}body{font-family:Open Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial, sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;font-size:0.9em;margin:0;-webkit-font-smoothing:antialiased;padding:5em;box-sizing:border-box;color:#31313f;background-color:#09090b;}@media (max-width:667px){body{padding:2em;}}:root,body,main,#__next{height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icnljZS9jb2RlL3BlcnNvbmFsLXNpdGUvY29tcG9uZW50cy9zdHlsZS1wcm92aWRlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY3lCLEFBRThGLEFBR2pFLEFBSzhDLEFBY2xELEFBUUYsWUFQWixBQVFGLE1BM0JBLDJIQUtrQixnQkFDUCxTQUMwQixtQ0FDdkIsWUFDVSxzQkFDUixjQUVXLHlCQUUzQiIsImZpbGUiOiIvVXNlcnMvYnJ5Y2UvY29kZS9wZXJzb25hbC1zaXRlL2NvbXBvbmVudHMvc3R5bGUtcHJvdmlkZXIudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgaW5pdGlhbFRoZW1lID0ge1xuICBjb2xvcjogJyMzMTMxM2YnLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJ1xufTtcblxuY29uc3QgVGhlbWVDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChpbml0aWFsVGhlbWUpO1xuXG5jb25zdCBTdHlsZVByb3ZpZGVyOiBSZWFjdC5GQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSBSZWFjdC51c2VTdGF0ZShpbml0aWFsVGhlbWUpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOjQwMCw3MDAmZGlzcGxheT1zd2FwJyk7XG5cbiAgICAgICAgOnJvb3Qge1xuICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIEhlbHZldGljYSwgQXJpYWwsXG4gICAgICAgICAgICBzYW5zLXNlcmlmLCBBcHBsZSBDb2xvciBFbW9qaSwgU2Vnb2UgVUkgRW1vamksIFNlZ29lIFVJIFN5bWJvbDtcbiAgICAgICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgICBwYWRkaW5nOiA1ZW07XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBjb2xvcjogIzMxMzEzZjtcbiAgICAgICAgICAvKiBkYXJrOiB3aGl0ZSAqL1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwOTA5MGI7XG4gICAgICAgICAgLyogZGFyazogIzA5MDkwYiAqL1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY2N3B4KSB7XG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAyZW07XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgOnJvb3QsXG4gICAgICAgIGJvZHksXG4gICAgICAgIG1haW4sXG4gICAgICAgICNfX25leHQge1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPFRoZW1lQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dGhlbWV9PntjaGlsZHJlbn08L1RoZW1lQ29udGV4dC5Qcm92aWRlcj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0eWxlUHJvdmlkZXI7XG4iXX0= */\n/*@ sourceURL=/Users/bryce/code/personal-site/components/style-provider.tsx */"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ThemeContext.Provider, {
    value: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (StyleProvider);

/***/ })

})
//# sourceMappingURL=_app.js.29bf357d7b391786e560.hot-update.js.map