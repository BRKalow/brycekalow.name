webpackHotUpdate("static/development/pages/index.js",{

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
  for (var i = 0; i < 25; i++) {
    var shape = shapes[makeRandomInt(0, shapeNames.length - 1)];
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
        lineNumber: 46
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: shapeStyles(shape),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: shapeStyles(shape),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Shapes);

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_style_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/style-provider */ "./components/style-provider.tsx");
/* harmony import */ var _components_social_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/social-icons */ "./components/social-icons.tsx");
/* harmony import */ var _components_shapes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/shapes */ "./components/shapes.tsx");
var _jsxFileName = "/Users/bryce/code/personal-site/pages/index.tsx";







var profilePictureStyle = {
  styles: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3413111719",
    __self: undefined
  }, "div.jsx-3413111719{background:center/cover url(./static/profile_pic.jpeg);-webkit-clip-path:url(#clipPath);clip-path:url(#clipPath);width:150px;height:150px;}"),
  className: "jsx-3413111719"
};

var Home = function Home() {
  var t = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(_components_style_provider__WEBPACK_IMPORTED_MODULE_4__["ThemeContext"]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["657964020", [t.name === 'dark' ? '0.2' : '0.1']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["657964020", [t.name === 'dark' ? '0.2' : '0.1']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Bryce Kalow")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_shapes__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), profilePictureStyle.styles, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["657964020", [t.name === 'dark' ? '0.2' : '0.1']]]) + " " + "hero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["657964020", [t.name === 'dark' ? '0.2' : '0.1']]]) + " " + "hero-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["657964020", [t.name === 'dark' ? '0.2' : '0.1']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Bryce Kalow"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["657964020", [t.name === 'dark' ? '0.2' : '0.1']]]) + " " + "blurb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["657964020", [t.name === 'dark' ? '0.2' : '0.1']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Engineer working on the web. I am passionate about improving developer experience, creating maintainable and accessible applications at \u2728", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("em", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["657964020", [t.name === 'dark' ? '0.2' : '0.1']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "scale"), "\u2728, and open source software."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["657964020", [t.name === 'dark' ? '0.2' : '0.1']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Currently working on", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.target.com",
    target: "_blank",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["657964020", [t.name === 'dark' ? '0.2' : '0.1']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Target.com"), ", making cool things with \u269BReact and tracking down our next performance improvement. \uD83D\uDE80")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_social_icons__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["657964020", [t.name === 'dark' ? '0.2' : '0.1']]]) + " " + "hero-profile-picture",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["657964020", [t.name === 'dark' ? '0.2' : '0.1']]]) + " " + "profile-picture-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
    initial: {
      y: 10,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1
    },
    whileHover: {
      scale: 1.1
    },
    className: profilePictureStyle.className,
    "aria-label": "profile picture",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    style: {
      height: '0px'
    },
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["657964020", [t.name === 'dark' ? '0.2' : '0.1']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("defs", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["657964020", [t.name === 'dark' ? '0.2' : '0.1']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("clipPath", {
    id: "clipPath",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["657964020", [t.name === 'dark' ? '0.2' : '0.1']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    stroke: "none",
    fill: "white",
    d: "M72 0.94337567297408a5 5 0 0 1 5 0l59.951905283833 34.613248654052a5 5 0 0 1 2.5 4.3301270189222l0 69.226497308104a5 5 0 0 1 -2.5 4.3301270189222l-59.951905283833 34.613248654052a5 5 0 0 1 -5 0l-59.951905283833 -34.613248654052a5 5 0 0 1 -2.5 -4.3301270189222l1.1025426070929e-13 -69.226497308104a5 5 0 0 1 2.5 -4.3301270189222",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["657964020", [t.name === 'dark' ? '0.2' : '0.1']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "657964020",
    dynamic: [t.name === 'dark' ? '0.2' : '0.1'],
    __self: this
  }, ".hero.__jsx-style-dynamic-selector{max-width:1000px;margin:0 auto;padding:5em;display:grid;grid-template-areas:'text picture';grid-template-columns:3fr 2fr;grid-template-rows:1fr;grid-column-gap:1em;grid-row-gap:2em;}@media (max-width:667px){.hero.__jsx-style-dynamic-selector{padding:2em;grid-template-areas: 'picture' 'text';grid-template-columns:1fr;}}h1.__jsx-style-dynamic-selector{display:inline-block;vertical-align:middle;font-size:3em;margin:0 0 0.5em 0;-webkit-letter-spacing:-0.03em;-moz-letter-spacing:-0.03em;-ms-letter-spacing:-0.03em;letter-spacing:-0.03em;text-shadow:-3px 3px 0 rgba(0,99,255,0.25);}h1.__jsx-style-dynamic-selector::after{content:'';background-color:#ed6f4d;background:linear-gradient( -140deg, rgba(255,179,158,1) 10%, rgba(237,111,77,1) 60% );height:4px;width:60%;display:block;margin-top:5px;}.hero-text.__jsx-style-dynamic-selector{place-self:center;grid-area:text;}.blurb.__jsx-style-dynamic-selector{font-size:1.5em;font-weight:normal;}p.__jsx-style-dynamic-selector{margin:0;margin-bottom:1em;}.hero-profile-picture.__jsx-style-dynamic-selector{display:grid;grid-area:picture;}.profile-picture-container.__jsx-style-dynamic-selector{-webkit-filter:drop-shadow(0 2px 3px rgba(0,0,0,".concat(t.name === 'dark' ? '0.2' : '0.1', "));filter:drop-shadow(0 2px 3px rgba(0,0,0,").concat(t.name === 'dark' ? '0.2' : '0.1', "));vertical-align:middle;place-self:center;height:150px;}section.__jsx-style-dynamic-selector{background:white;border-radius:5px;padding:10px;margin:10px;text-align:left;display:inline-block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icnljZS9jb2RlL3BlcnNvbmFsLXNpdGUvcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVFa0IsQUFHNEIsQUFhSCxBQVNPLEFBU1YsQUFjTyxBQUtGLEFBS1AsQUFLSSxBQUs2RCxBQU96RCxTQWhCQyxFQXhCTyxDQWhCZixDQTZDUSxHQVZDLENBbERMLEFBd0VJLENBM0JILEdBdkJPLE1Ba0N4QixJQXZEYyxBQTREZCxFQWZBLEVBS0EsQUFzQmUsQ0FyQ1osT0FsQ1ksQUFxQkMsS0FtREYsRUExRGdCLE1BYk8sQ0FxQmhCLEdBbURILGdCQTFEaEIsQUFRdUIsQUFtREYsZUF4RVMsTUF5RWhDLHdCQXhFeUIsRUFnQ1osV0FDRCxVQWhDVSxBQWlDTixNQTBCUSxRQXpCUCxNQWpDRSxRQTJEQyxDQXpCcEIsUUFqQ0EsSUFrQmdELEtBeUNqQyxhQUNmLHlCQXpDQSIsImZpbGUiOiIvVXNlcnMvYnJ5Y2UvY29kZS9wZXJzb25hbC1zaXRlL3BhZ2VzL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XG5pbXBvcnQgeyBUaGVtZUNvbnRleHQgfSBmcm9tICcuLi9jb21wb25lbnRzL3N0eWxlLXByb3ZpZGVyJztcbmltcG9ydCBTb2NpYWxJY29ucyBmcm9tICcuLi9jb21wb25lbnRzL3NvY2lhbC1pY29ucyc7XG5pbXBvcnQgU2hhcGVzIGZyb20gJy4uL2NvbXBvbmVudHMvc2hhcGVzJztcblxuY29uc3QgcHJvZmlsZVBpY3R1cmVTdHlsZSA9IGNzcy5yZXNvbHZlYFxuICBkaXYge1xuICAgIGJhY2tncm91bmQ6IGNlbnRlci9jb3ZlciB1cmwoLi9zdGF0aWMvcHJvZmlsZV9waWMuanBlZyk7XG4gICAgY2xpcC1wYXRoOiB1cmwoI2NsaXBQYXRoKTtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgfVxuYDtcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgdCA9IFJlYWN0LnVzZUNvbnRleHQoVGhlbWVDb250ZXh0KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkJyeWNlIEthbG93PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxTaGFwZXMgLz5cbiAgICAgIHtwcm9maWxlUGljdHVyZVN0eWxlLnN0eWxlc31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyb1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tdGV4dFwiPlxuICAgICAgICAgIDxoMT5CcnljZSBLYWxvdzwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibHVyYlwiPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIEVuZ2luZWVyIHdvcmtpbmcgb24gdGhlIHdlYi4gSSBhbSBwYXNzaW9uYXRlIGFib3V0IGltcHJvdmluZyBkZXZlbG9wZXIgZXhwZXJpZW5jZSxcbiAgICAgICAgICAgICAgY3JlYXRpbmcgbWFpbnRhaW5hYmxlIGFuZCBhY2Nlc3NpYmxlIGFwcGxpY2F0aW9ucyBhdCDinKg8ZW0+c2NhbGU8L2VtPuKcqCwgYW5kIG9wZW5cbiAgICAgICAgICAgICAgc291cmNlIHNvZnR3YXJlLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIEN1cnJlbnRseSB3b3JraW5nIG9ueycgJ31cbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnRhcmdldC5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICBUYXJnZXQuY29tXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgLCBtYWtpbmcgY29vbCB0aGluZ3Mgd2l0aCDimptSZWFjdCBhbmQgdHJhY2tpbmcgZG93biBvdXIgbmV4dCBwZXJmb3JtYW5jZSBpbXByb3ZlbWVudC5cbiAgICAgICAgICAgICAg8J+agFxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxTb2NpYWxJY29ucyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLXByb2ZpbGUtcGljdHVyZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1waWN0dXJlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgaW5pdGlhbD17eyB5OiAxMCwgb3BhY2l0eTogMCB9fVxuICAgICAgICAgICAgICBhbmltYXRlPXt7IHk6IDAsIG9wYWNpdHk6IDEgfX1cbiAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4xIH19XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17cHJvZmlsZVBpY3R1cmVTdHlsZS5jbGFzc05hbWV9XG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJwcm9maWxlIHBpY3R1cmVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdmcgc3R5bGU9e3sgaGVpZ2h0OiAnMHB4JyB9fT5cbiAgICAgICAgPGRlZnM+XG4gICAgICAgICAgPGNsaXBQYXRoIGlkPVwiY2xpcFBhdGhcIj5cbiAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgIHN0cm9rZT1cIm5vbmVcIlxuICAgICAgICAgICAgICBmaWxsPVwid2hpdGVcIlxuICAgICAgICAgICAgICBkPVwiTTcyIDAuOTQzMzc1NjcyOTc0MDhhNSA1IDAgMCAxIDUgMGw1OS45NTE5MDUyODM4MzMgMzQuNjEzMjQ4NjU0MDUyYTUgNSAwIDAgMSAyLjUgNC4zMzAxMjcwMTg5MjIybDAgNjkuMjI2NDk3MzA4MTA0YTUgNSAwIDAgMSAtMi41IDQuMzMwMTI3MDE4OTIyMmwtNTkuOTUxOTA1MjgzODMzIDM0LjYxMzI0ODY1NDA1MmE1IDUgMCAwIDEgLTUgMGwtNTkuOTUxOTA1MjgzODMzIC0zNC42MTMyNDg2NTQwNTJhNSA1IDAgMCAxIC0yLjUgLTQuMzMwMTI3MDE4OTIyMmwxLjEwMjU0MjYwNzA5MjllLTEzIC02OS4yMjY0OTczMDgxMDRhNSA1IDAgMCAxIDIuNSAtNC4zMzAxMjcwMTg5MjIyXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9jbGlwUGF0aD5cbiAgICAgICAgPC9kZWZzPlxuICAgICAgPC9zdmc+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5oZXJvIHtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMDBweDtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBwYWRkaW5nOiA1ZW07XG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAndGV4dCBwaWN0dXJlJztcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAyZnI7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gICAgICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiAxZW07XG4gICAgICAgICAgZ3JpZC1yb3ctZ2FwOiAyZW07XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjY3cHgpIHtcbiAgICAgICAgICAuaGVybyB7XG4gICAgICAgICAgICBwYWRkaW5nOiAyZW07XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICAgICAgICAncGljdHVyZSdcbiAgICAgICAgICAgICAgJ3RleHQnO1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaDEge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgICAgICAgIG1hcmdpbjogMCAwIDAuNWVtIDA7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAzZW07XG4gICAgICAgICAgdGV4dC1zaGFkb3c6IC0zcHggM3B4IDAgcmdiYSgwLCA5OSwgMjU1LCAwLjI1KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGgxOjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VkNmY0ZDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgICAtMTQwZGVnLFxuICAgICAgICAgICAgcmdiYSgyNTUsIDE3OSwgMTU4LCAxKSAxMCUsXG4gICAgICAgICAgICByZ2JhKDIzNywgMTExLCA3NywgMSkgNjAlXG4gICAgICAgICAgKTtcbiAgICAgICAgICBoZWlnaHQ6IDRweDtcbiAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZXJvLXRleHQge1xuICAgICAgICAgIHBsYWNlLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgICBncmlkLWFyZWE6IHRleHQ7XG4gICAgICAgIH1cblxuICAgICAgICAuYmx1cmIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHAge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgICAgIH1cblxuICAgICAgICAuaGVyby1wcm9maWxlLXBpY3R1cmUge1xuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgZ3JpZC1hcmVhOiBwaWN0dXJlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnByb2ZpbGUtcGljdHVyZS1jb250YWluZXIge1xuICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCAycHggM3B4IHJnYmEoMCwgMCwgMCwgJHt0Lm5hbWUgPT09ICdkYXJrJyA/ICcwLjInIDogJzAuMSd9KSk7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdfQ== */\n/*@ sourceURL=/Users/bryce/code/personal-site/pages/index.tsx */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.d330fc16d2d72a508182.hot-update.js.map