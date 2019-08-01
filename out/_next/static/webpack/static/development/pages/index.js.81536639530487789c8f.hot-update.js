webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/dots.tsx":
/*!*****************************!*\
  !*** ./components/dots.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/bryce/code/personal-site/components/dots.tsx";

var colors = ['#ed6f4d', '#facaa5', '#71c3ad', '#4ca9e0', '#54899c', '#62b3e3', '#c6dcda'];

var makeRandomInt = function makeRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var dots = [];

var makeDots = function makeDots() {
  for (var _i = 0; _i < 25; _i++) {
    dots.push({
      x: makeRandomInt(0, 100),
      y: makeRandomInt(0, 100),
      width: makeRandomInt(10, 20),
      rotate: makeRandomInt(0, 180),
      color: colors[_i % 6]
    });
  }
};

makeDots();

var Dots = function Dots() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "dots.map((", (x, y, width, rotate, color), ", i) => (", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    key: "".concat(x).concat(y).concat(color),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    key: "".concat(x).concat(y).concat(color, "-top"),
    style: {
      position: 'absolute',
      top: "".concat(y, "%"),
      left: "".concat(x, "%"),
      width: "".concat(width, "px"),
      height: '2px',
      opacity: 1 - y / 100,
      transform: "rotate(".concat(rotate, "deg)"),
      backgroundColor: colors[i % 6],
      zIndex: -1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    key: "".concat(x).concat(y).concat(color, "-bot"),
    style: {
      position: 'absolute',
      bottom: "".concat(y, "%"),
      right: "".concat(x, "%"),
      width: "".concat(width, "px"),
      height: '2px',
      opacity: 1 - (1 - y / 100),
      transform: "rotate(".concat(rotate, "deg)"),
      backgroundColor: colors[i % 6],
      zIndex: -1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })), "));");
};

/* harmony default export */ __webpack_exports__["default"] = (Dots);

/***/ })

})
//# sourceMappingURL=index.js.81536639530487789c8f.hot-update.js.map