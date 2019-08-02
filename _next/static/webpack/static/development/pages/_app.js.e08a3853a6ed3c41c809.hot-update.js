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
var ThemeContext = react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext(themes);

var StyleProvider = function StyleProvider(_ref) {
  var children = _ref.children;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(themes),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      theme = _React$useState2[0],
      setTheme = _React$useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2537413959",
    dynamic: [theme.color, theme.backgroundColor],
    __self: this
  }, "@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');:root{overflow-x:hidden;}body{font-family:Open Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial, sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;font-size:0.9em;margin:0;-webkit-font-smoothing:antialiased;padding:5em;box-sizing:border-box;color:".concat(theme.color, ";background-color:").concat(theme.backgroundColor, ";}@media (max-width:667px){body{padding:2em;}}:root,body,main,#__next{height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icnljZS9jb2RlL3BlcnNvbmFsLXNpdGUvY29tcG9uZW50cy9zdHlsZS1wcm92aWRlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0J5QixBQUU4RixBQUdqRSxBQUs4QyxBQWNsRCxBQVFGLFlBUFosQUFRRixNQTNCQSwySEFLa0IsZ0JBQ1AsU0FDMEIsbUNBQ3ZCLFlBQ1Usc0JBQ2EsbUNBRVcsOENBRWhEIiwiZmlsZSI6Ii9Vc2Vycy9icnljZS9jb2RlL3BlcnNvbmFsLXNpdGUvY29tcG9uZW50cy9zdHlsZS1wcm92aWRlci50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCB0aGVtZXMgPSB7XG4gIGluaXRpYWw6IHtcbiAgICBjb2xvcjogJyMzMTMxM2YnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnXG4gIH0sXG4gIGRhcms6IHtcbiAgICBjb2xvcjogJ3doaXRlJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDkwOTBiJ1xuICB9XG59O1xuXG5jb25zdCBUaGVtZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHRoZW1lcyk7XG5cbmNvbnN0IFN0eWxlUHJvdmlkZXI6IFJlYWN0LkZDID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IFJlYWN0LnVzZVN0YXRlKHRoZW1lcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6NDAwLDcwMCZkaXNwbGF5PXN3YXAnKTtcblxuICAgICAgICA6cm9vdCB7XG4gICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICB9XG5cbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucywgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgSGVsdmV0aWNhLCBBcmlhbCxcbiAgICAgICAgICAgIHNhbnMtc2VyaWYsIEFwcGxlIENvbG9yIEVtb2ppLCBTZWdvZSBVSSBFbW9qaSwgU2Vnb2UgVUkgU3ltYm9sO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAgIHBhZGRpbmc6IDVlbTtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmNvbG9yfTtcbiAgICAgICAgICAvKiBkYXJrOiB3aGl0ZSAqL1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuYmFja2dyb3VuZENvbG9yfTtcbiAgICAgICAgICAvKiBkYXJrOiAjMDkwOTBiICovXG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjY3cHgpIHtcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICA6cm9vdCxcbiAgICAgICAgYm9keSxcbiAgICAgICAgbWFpbixcbiAgICAgICAgI19fbmV4dCB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8VGhlbWVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt0aGVtZX0+e2NoaWxkcmVufTwvVGhlbWVDb250ZXh0LlByb3ZpZGVyPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3R5bGVQcm92aWRlcjtcbiJdfQ== */\n/*@ sourceURL=/Users/bryce/code/personal-site/components/style-provider.tsx */")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ThemeContext.Provider, {
    value: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (StyleProvider);

/***/ })

})
//# sourceMappingURL=_app.js.e08a3853a6ed3c41c809.hot-update.js.map