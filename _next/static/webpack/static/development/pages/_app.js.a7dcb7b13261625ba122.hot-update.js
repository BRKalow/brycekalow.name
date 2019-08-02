webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/shapes.tsx":
/*!*******************************!*\
  !*** ./components/shapes.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/bryce/code/personal-site/components/shapes.tsx";

var colors = ['#ed6f4d', '#facaa5', '#71c3ad', '#4ca9e0', '#54899c', '#62b3e3', '#c6dcda'];
var shapeNames = ['line', 'square', 'circle'];

var makeRandomInt = function makeRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var shapes = [];

var makeShapes = function makeShapes() {
  shapes = [];

  for (var i = 0; i < 30; i++) {
    var shape = shapeNames[makeRandomInt(0, shapeNames.length - 1)];
    shapes.push({
      x: makeRandomInt(0, 100),
      y: makeRandomInt(0, 100),
      width: makeRandomInt(shape === 'line' ? 10 : 5, shape === 'line' ? 15 : 10),
      rotate: makeRandomInt(0, 180),
      color: colors[makeRandomInt(0, colors.length - 1)],
      shape: shape
    });
  }
};

makeShapes();

var shapeStyles = function shapeStyles(_ref) {
  var x = _ref.x,
      y = _ref.y,
      width = _ref.width,
      shape = _ref.shape,
      rotate = _ref.rotate,
      color = _ref.color;
  return {
    position: 'absolute',
    top: "".concat(y, "%"),
    left: "".concat(x, "%"),
    width: "".concat(width, "px"),
    height: "".concat(shape === 'line' ? '2' : width, "px"),
    opacity: 1 - y / 100,
    transform: "rotate(".concat(rotate, "deg)"),
    backgroundColor: shape === 'line' ? color : 'transparent',
    borderColor: color,
    border: shape === 'line' ? '' : "2px solid ".concat(color),
    borderRadius: shape === 'circle' ? '50%' : 0,
    zIndex: -1
  };
};

var Shapes = function Shapes() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, shapes.map(function (shape, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      key: "".concat(shape.x).concat(shape.y).concat(shape.shape),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: shapeStyles(shape),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: shapeStyles(shape),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Shapes);

/***/ })

})
//# sourceMappingURL=_app.js.a7dcb7b13261625ba122.hot-update.js.map