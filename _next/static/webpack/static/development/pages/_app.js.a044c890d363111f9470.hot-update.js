webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/shapes.tsx":
/*!*******************************!*\
  !*** ./components/shapes.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _toggle_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toggle-switch */ "./components/toggle-switch.tsx");


var _jsxFileName = "/Users/bryce/code/personal-site/components/shapes.tsx";


var colors = ['#ed6f4d', '#facaa5', '#71c3ad', '#4ca9e0', '#54899c', '#62b3e3', '#c6dcda'];
var shapeNames = ['line', 'square', 'circle'];

var makeRandomInt = function makeRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
}

var shapes = [];

var makeShapes = function makeShapes() {
  shapes = [];

  for (var i = 0; i < 40; i++) {
    var shape = shapeNames[i % 3];
    shapes.push({
      x: makeRandomInt(2, 98),
      y: makeRandomInt(2, 98),
      width: makeRandomInt(shape === 'line' ? 10 : 5, shape === 'line' ? 15 : 8),
      rotate: makeRandomInt(0, 180),
      color: colors[makeRandomInt(0, colors.length - 1)],
      shape: shapeNames[i % 3],
      id: uuidv4()
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
    zIndex: -1,
    transition: 'all 10s ease-in-out'
  };
};

var Shapes = function Shapes() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(shapes),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      curShapes = _React$useState2[0],
      setShapes = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      isMoving = _React$useState4[0],
      setIsMoving = _React$useState4[1];

  var timeout = react__WEBPACK_IMPORTED_MODULE_2___default.a.useRef();
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    setShapes(curShapes.map(function (shape) {
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, shape, {
        x: makeRandomInt(2, 98),
        y: makeRandomInt(2, 98)
      });
    }));
    timeout.current = setInterval(function () {
      return setShapes(curShapes.map(function (shape) {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, shape, {
          x: makeRandomInt(2, 98),
          y: makeRandomInt(2, 98)
        });
      }));
    }, 9000);
    return function () {
      return clearInterval(timeout.current);
    };
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_toggle_switch__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onChange: function onChange(e) {
      console.log(e.target.checked);
      clearInterval(timeout.current);
    },
    checked: isMoving,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), curShapes.map(function (shape, i) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
      key: shape.uuid,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: shapeStyles(shape),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: shapeStyles(shape),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Shapes);

/***/ })

})
//# sourceMappingURL=_app.js.a044c890d363111f9470.hot-update.js.map