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
var shapes = ['line', 'square', 'circle'];

var makeRandomInt = function makeRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var dots = [];

var makeDots = function makeDots() {
  for (var i = 0; i < 25; i++) {
    var shape = shapes[makeRandomInt(0, shapes.length - 1)];
    dots.push({
      x: makeRandomInt(0, 100),
      y: makeRandomInt(0, 100),
      width: makeRandomInt(5, shape === 'line' ? 20 : 10),
      rotate: makeRandomInt(0, 180),
      color: colors[i % 6],
      shape: shape
    });
  }
};

makeDots();

var Dots = function Dots() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, dots.map(function (_ref, i) {
    var x = _ref.x,
        y = _ref.y,
        width = _ref.width,
        rotate = _ref.rotate,
        color = _ref.color,
        shape = _ref.shape;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      key: "".concat(x).concat(y).concat(color),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: "".concat(x).concat(y).concat(color, "-top"),
      style: {
        position: 'absolute',
        top: "".concat(y, "%"),
        left: "".concat(x, "%"),
        width: "".concat(width, "px"),
        height: "".concat(shape === 'line' ? '2' : width, "px"),
        opacity: 1 - y / 100,
        transform: "rotate(".concat(rotate, "deg)"),
        backgroundColor: colors[i % 6],
        zIndex: -1,
        borderRadius: shape === 'circle' ? '50%' : 0
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: "".concat(x).concat(y).concat(color, "-bot"),
      style: {
        position: 'absolute',
        bottom: "".concat(y, "%"),
        right: "".concat(x, "%"),
        width: "".concat(width, "px"),
        height: "".concat(shape === 'line' ? '2' : width, "px"),
        opacity: 1 - (1 - y / 100),
        transform: "rotate(".concat(rotate, "deg)"),
        backgroundColor: colors[i % 6],
        zIndex: -1,
        borderRadius: shape === 'circle' ? '50%' : 0
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Dots);

/***/ })

})
//# sourceMappingURL=index.js.ef096c23b94b29ac0567.hot-update.js.map