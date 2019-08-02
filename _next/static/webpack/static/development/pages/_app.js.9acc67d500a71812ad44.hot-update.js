webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/style-provider.tsx":
/*!***************************************!*\
  !*** ./components/style-provider.tsx ***!
  \***************************************/
/*! exports provided: ThemeContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ThemeContext; });
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
    headingColor: 'white'
  }
};
var ThemeContext = react__WEBPACK_IMPORTED_MODULE_3___default.a.createContext({
  theme: themes.initial,
  name: 'initial',
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
    id: "786288190",
    dynamic: [activeTheme.color, activeTheme.backgroundColor, activeTheme.headingColor],
    __self: this
  }, "@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');:root{overflow-x:hidden;}body{font-family:Open Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial, sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;font-size:0.9em;margin:0;-webkit-font-smoothing:antialiased;padding:5em;box-sizing:border-box;color:".concat(activeTheme.color, ";background-color:").concat(activeTheme.backgroundColor, ";-webkit-transition:color 0.5s ease-out,background-color 0.5s ease-out;transition:color 0.5s ease-out,background-color 0.5s ease-out;}@media (max-width:667px){body{padding:2em;}}:root,body,main,#__next{height:100%;}h1{color:").concat(activeTheme.headingColor, ";-webkit-transition:color 0.5s ease-out;transition:color 0.5s ease-out;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icnljZS9jb2RlL3BlcnNvbmFsLXNpdGUvY29tcG9uZW50cy9zdHlsZS1wcm92aWRlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkN5QixBQUU4RixBQUdqRSxBQUs4QyxBQWFsRCxBQVFGLEFBSXVCLFlBWG5DLEFBUUYsTUExQkEsaUJBOEJpQyxzRUFDakMsb0NBMUJrQixnQkFDUCxTQUMwQixtQ0FDdkIsWUFDVSxzQkFDYSxtQ0FDVyw4Q0FDaUIsb0lBQ2pFIiwiZmlsZSI6Ii9Vc2Vycy9icnljZS9jb2RlL3BlcnNvbmFsLXNpdGUvY29tcG9uZW50cy9zdHlsZS1wcm92aWRlci50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbnRlcmZhY2UgVGhlbWUge1xuICBjb2xvcjogc3RyaW5nO1xuICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZztcbiAgaGVhZGluZ0NvbG9yOiBzdHJpbmc7XG59XG5cbmNvbnN0IHRoZW1lczogUmVjb3JkPFRoZW1lcywgUGFydGlhbDxUaGVtZT4+ID0ge1xuICBpbml0aWFsOiB7XG4gICAgY29sb3I6ICcjMzEzMTNmJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJyxcbiAgICBoZWFkaW5nQ29sb3I6ICcjMzQzNDNlJ1xuICB9LFxuICBkYXJrOiB7XG4gICAgY29sb3I6ICd3aGl0ZScsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzA5MDkwYicsXG4gICAgaGVhZGluZ0NvbG9yOiAnd2hpdGUnXG4gIH1cbn07XG5cbnR5cGUgVGhlbWVzID0gJ2luaXRpYWwnIHwgJ2RhcmsnO1xuXG5leHBvcnQgY29uc3QgVGhlbWVDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDx7XG4gIHRoZW1lOiBQYXJ0aWFsPFRoZW1lPjtcbiAgbmFtZTogVGhlbWVzO1xuICBzZXRUaGVtZTogUmVhY3QuRGlzcGF0Y2g8UmVhY3QuU2V0U3RhdGVBY3Rpb248VGhlbWVzPj47XG59Pih7XG4gIHRoZW1lOiB0aGVtZXMuaW5pdGlhbCxcbiAgbmFtZTogJ2luaXRpYWwnLFxuICBzZXRUaGVtZTogKCkgPT4ge31cbn0pO1xuXG5jb25zdCBTdHlsZVByb3ZpZGVyOiBSZWFjdC5GQyA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSBSZWFjdC51c2VTdGF0ZTxUaGVtZXM+KCdpbml0aWFsJyk7XG4gIGNvbnN0IGFjdGl2ZVRoZW1lID0gdGhlbWVzW3RoZW1lXTtcbiAgY29uc3QgdGhlbWVDb250ZXh0VmFsdWUgPSBSZWFjdC51c2VNZW1vKFxuICAgICgpID0+ICh7IHRoZW1lOiB7IC4uLnRoZW1lc1snaW5pdGlhbCddLCAuLi50aGVtZXNbdGhlbWVdIH0sIG5hbWU6IHRoZW1lLCBzZXRUaGVtZSB9KSxcbiAgICBbdGhlbWUsIHNldFRoZW1lXVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zOjQwMCw3MDAmZGlzcGxheT1zd2FwJyk7XG5cbiAgICAgICAgOnJvb3Qge1xuICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIEhlbHZldGljYSwgQXJpYWwsXG4gICAgICAgICAgICBzYW5zLXNlcmlmLCBBcHBsZSBDb2xvciBFbW9qaSwgU2Vnb2UgVUkgRW1vamksIFNlZ29lIFVJIFN5bWJvbDtcbiAgICAgICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgICBwYWRkaW5nOiA1ZW07XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBjb2xvcjogJHthY3RpdmVUaGVtZS5jb2xvcn07XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHthY3RpdmVUaGVtZS5iYWNrZ3JvdW5kQ29sb3J9O1xuICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuNXMgZWFzZS1vdXQsIGJhY2tncm91bmQtY29sb3IgMC41cyBlYXNlLW91dDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NjdweCkge1xuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgcGFkZGluZzogMmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIDpyb290LFxuICAgICAgICBib2R5LFxuICAgICAgICBtYWluLFxuICAgICAgICAjX19uZXh0IHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICBoMSB7XG4gICAgICAgICAgY29sb3I6ICR7YWN0aXZlVGhlbWUuaGVhZGluZ0NvbG9yfTtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjVzIGVhc2Utb3V0O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8VGhlbWVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt0aGVtZUNvbnRleHRWYWx1ZX0+e2NoaWxkcmVufTwvVGhlbWVDb250ZXh0LlByb3ZpZGVyPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3R5bGVQcm92aWRlcjtcbiJdfQ== */\n/*@ sourceURL=/Users/bryce/code/personal-site/components/style-provider.tsx */")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ThemeContext.Provider, {
    value: themeContextValue,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (StyleProvider);

/***/ })

})
//# sourceMappingURL=_app.js.9acc67d500a71812ad44.hot-update.js.map