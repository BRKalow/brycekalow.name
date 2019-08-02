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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime-corejs2/helpers/esm/readOnlyError.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);



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
    transition: 'all 0.5s ease-in-out'
  };
};

var Shapes = function Shapes() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(shapes),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      curShapes = _React$useState2[0],
      setShapes = _React$useState2[1];

  var timeout = react__WEBPACK_IMPORTED_MODULE_3___default.a.useRef();
  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {
    timeout = (Object(_babel_runtime_corejs2_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_2__["default"])("timeout"), setTimeout(function () {
      return setShapes(curShapes.map(function (shape) {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, shape, {
          x: makeRandomInt(2, 98),
          y: makeRandomInt(2, 98)
        });
      }));
    }));
  });
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    onClick: function onClick() {
      setShapes(curShapes.map(function (shape) {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, shape, {
          x: makeRandomInt(2, 98),
          y: makeRandomInt(2, 98)
        });
      }));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "random"), curShapes.map(function (shape, i) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
      key: shape.uuid,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      style: shapeStyles(shape),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      style: shapeStyles(shape),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Shapes);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/readOnlyError.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/readOnlyError.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _readOnlyError; });
function _readOnlyError(name) {
  throw new Error("\"" + name + "\" is read-only");
}

/***/ })

})
//# sourceMappingURL=_app.js.7d118e73320500979773.hot-update.js.map