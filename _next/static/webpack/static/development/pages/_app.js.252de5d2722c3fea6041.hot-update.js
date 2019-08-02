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
    onChange: function onChange() {
      setShapes(curShapes.map(function (shape) {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, shape, {
          x: makeRandomInt(2, 98),
          y: makeRandomInt(2, 98)
        });
      }));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), curShapes.map(function (shape, i) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
      key: shape.uuid,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: shapeStyles(shape),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: shapeStyles(shape),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Shapes);

/***/ }),

/***/ "./components/toggle-switch.tsx":
/*!**************************************!*\
  !*** ./components/toggle-switch.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/bryce/code/personal-site/components/toggle-switch.tsx";



var ToggleSwitch = function ToggleSwitch(_ref) {
  var onChange = _ref.onChange;
  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1915073092",
    __self: this
  }, ".switch.jsx-1915073092{position:relative;display:inline-block;width:40px;height:20px;background-color:rgba(0,0,0,0.25);border-radius:20px;-webkit-transition:all 0.3s;transition:all 0.3s;}.switch.jsx-1915073092::after{content:'';position:absolute;width:18px;height:18px;border-radius:50%;background-color:white;top:1px;left:1px;-webkit-transition:all 0.3s;transition:all 0.3s;}.checkbox.jsx-1915073092:checked+.switch.jsx-1915073092::after{left:20px;}.checkbox.jsx-1915073092:checked+.switch.jsx-1915073092{background-color:#7983ff;}.checkbox.jsx-1915073092{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icnljZS9jb2RlL3BlcnNvbmFsLXNpdGUvY29tcG9uZW50cy90b2dnbGUtc3dpdGNoLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJZ0IsQUFHMkIsQUFTUCxBQVlELEFBR2UsQUFHWixVQUxmLENBWm9CLEVBa0JwQixLQTNCdUIsT0F3QnZCLElBZGEsVUFUQSxDQVVDLFVBVEEsRUFVTSxVQVRtQixRQVVkLHVCQUNmLEdBVlcsS0FXVixTQUNXLEtBWEEsMkNBWXRCLEtBWEEiLCJmaWxlIjoiL1VzZXJzL2JyeWNlL2NvZGUvcGVyc29uYWwtc2l0ZS9jb21wb25lbnRzL3RvZ2dsZS1zd2l0Y2gudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgVG9nZ2xlU3dpdGNoID0gKHsgb25DaGFuZ2UgfSkgPT4ge1xuICA8PlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5zd2l0Y2gge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgICB9XG4gICAgICAuc3dpdGNoOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIHRvcDogMXB4O1xuICAgICAgICBsZWZ0OiAxcHg7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgICAgfVxuXG4gICAgICAuY2hlY2tib3g6Y2hlY2tlZCArIC5zd2l0Y2g6OmFmdGVyIHtcbiAgICAgICAgbGVmdDogMjBweDtcbiAgICAgIH1cbiAgICAgIC5jaGVja2JveDpjaGVja2VkICsgLnN3aXRjaCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTgzZmY7XG4gICAgICB9XG4gICAgICAuY2hlY2tib3gge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJ0b2dnbGVcIiBjbGFzc05hbWU9XCJjaGVja2JveFwiIG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz5cbiAgICA8bGFiZWwgaHRtbEZvcj1cInRvZ2dsZVwiIGNsYXNzTmFtZT1cInN3aXRjaFwiIC8+XG4gIDwvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRvZ2dsZVN3aXRjaDtcbiJdfQ== */\n/*@ sourceURL=/Users/bryce/code/personal-site/components/toggle-switch.tsx */"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "checkbox",
    id: "toggle",
    onChange: onChange,
    className: "jsx-1915073092" + " " + "checkbox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "toggle",
    className: "jsx-1915073092" + " " + "switch",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ToggleSwitch);

/***/ })

})
//# sourceMappingURL=_app.js.252de5d2722c3fea6041.hot-update.js.map