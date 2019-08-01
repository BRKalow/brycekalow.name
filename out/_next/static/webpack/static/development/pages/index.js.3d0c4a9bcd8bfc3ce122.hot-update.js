webpackHotUpdate("static/development/pages/index.js",{

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
var _jsxFileName = "/Users/bryce/code/personal-site/pages/index.tsx";




var colors = ['#ed6f4d', '#facaa5', '#71c3ad', '#4ca9e0', '#54899c', '#62b3e3', '#c6dcda'];

var makeRandomInt = function makeRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var makeRandomFloat = function makeRandomFloat(min, max) {
  return (Math.random() * (max - min + 1) + min).toFixed(1);
};

var pickRandomItem = function pickRandomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
};

var dots = [];

var makeDots = function makeDots() {
  for (var i = 0; i < 25; i++) {
    dots.push({
      x: makeRandomInt(0, 100),
      y: makeRandomInt(0, 100),
      width: makeRandomInt(10, 20),
      rotate: makeRandomInt(0, 180),
      color: colors[i % 6]
    });
  }
};

makeDots();
var profilePictureStyle = {
  styles: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "795146734",
    __self: undefined
  }, ".jsx-795146734{background:center/cover url(./static/profile_pic.jpeg);-webkit-clip-path:url(#clipPath);clip-path:url(#clipPath);width:150px;height:150px;}"),
  className: "jsx-795146734"
};
var socialIconStyle = {
  styles: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3555706913",
    __self: undefined
  }, "svg.jsx-3555706913{color:black;width:24px;height:24px;padding-right:0.75em;}"),
  className: "jsx-3555706913"
};

var Home = function Home() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4201523840",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-4201523840",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Home")), dots.map(function (_ref, i) {
    var x = _ref.x,
        y = _ref.y,
        width = _ref.width,
        rotate = _ref.rotate,
        color = _ref.color;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      key: "".concat(x).concat(y).concat(color),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
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
      className: "jsx-4201523840",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
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
      className: "jsx-4201523840",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }));
  }), profilePictureStyle.styles, socialIconStyle.styles, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4201523840" + " " + "hero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      placeSelf: 'center',
      gridArea: 'blurb'
    },
    className: "jsx-4201523840",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-4201523840",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "Bryce Kalow"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4201523840" + " " + "blurb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-4201523840",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "Engineer working on the web. I am passionate about improving developer experience, creating maintainable and accessible applications at \u2728", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("em", {
    className: "jsx-4201523840",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "scale"), "\u2728, and open source software."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-4201523840",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "Currently working on", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.target.com",
    target: "_blank",
    className: "jsx-4201523840",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "Target.com"), ", making cool things with \u269BReact and tracking down our next performance improvement. \uD83D\uDE80")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://twitter.com/brkalow",
    target: "_blank",
    title: "Bryce Kalow Twitter",
    className: "jsx-4201523840",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].svg, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 72 72",
    initial: {
      color: '#000'
    },
    whileHover: {
      color: '#1da1f2'
    },
    className: socialIconStyle.className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M67.812 16.141a26.246 26.246 0 0 1-7.519 2.06 13.134 13.134 0 0 0 5.756-7.244 26.127 26.127 0 0 1-8.313 3.176A13.075 13.075 0 0 0 48.182 10c-7.229 0-13.092 5.861-13.092 13.093 0 1.026.118 2.021.338 2.981-10.885-.548-20.528-5.757-26.987-13.679a13.048 13.048 0 0 0-1.771 6.581c0 4.542 2.312 8.551 5.824 10.898a13.048 13.048 0 0 1-5.93-1.638c-.002.055-.002.11-.002.162 0 6.345 4.513 11.638 10.504 12.84a13.177 13.177 0 0 1-3.449.457c-.846 0-1.667-.078-2.465-.231 1.667 5.2 6.499 8.986 12.23 9.09a26.276 26.276 0 0 1-16.26 5.606A26.21 26.21 0 0 1 4 55.976a37.036 37.036 0 0 0 20.067 5.882c24.083 0 37.251-19.949 37.251-37.249 0-.566-.014-1.134-.039-1.694a26.597 26.597 0 0 0 6.533-6.774z",
    className: "jsx-4201523840",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://github.com/BRKalow",
    target: "_blank",
    title: "Bryce Kalow GitHub",
    className: "jsx-4201523840",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    viewBox: "0 0 16 16",
    version: "1.1",
    width: "32",
    className: "jsx-4201523840" + " " + (socialIconStyle.className || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fillRule: "evenodd",
    d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z",
    className: "jsx-4201523840",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.linkedin.com/in/bryce-kalow-86a57183/",
    target: "_blank",
    title: "Bryce Kalow LinkedIn",
    className: "jsx-4201523840",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    viewBox: "0 0 18 18",
    className: "jsx-4201523840" + " " + (socialIconStyle.className || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M18 18h-4v-6.75c0-1.06-1.19-1.94-2.25-1.94S10 10.19 10 11.25V18H6V6h4v2c.66-1.07 2.36-1.76 3.5-1.76 2.5 0 4.5 2.04 4.5 4.51V18zM4 18H0V6h4v12zM2 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4z",
    className: "jsx-4201523840",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: 'grid',
      gridArea: 'picture'
    },
    className: "jsx-4201523840",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4201523840" + " " + "profile-picture-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
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
      lineNumber: 140
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    style: {
      height: '0px'
    },
    className: "jsx-4201523840",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("defs", {
    className: "jsx-4201523840",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("clipPath", {
    id: "clipPath",
    className: "jsx-4201523840",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    stroke: "none",
    fill: "white",
    d: "M72 0.94337567297408a5 5 0 0 1 5 0l59.951905283833 34.613248654052a5 5 0 0 1 2.5 4.3301270189222l0 69.226497308104a5 5 0 0 1 -2.5 4.3301270189222l-59.951905283833 34.613248654052a5 5 0 0 1 -5 0l-59.951905283833 -34.613248654052a5 5 0 0 1 -2.5 -4.3301270189222l1.1025426070929e-13 -69.226497308104a5 5 0 0 1 2.5 -4.3301270189222",
    className: "jsx-4201523840",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4201523840",
    __self: this
  }, ".hero.jsx-4201523840{max-width:800px;margin:0 auto;padding:5em;display:grid;grid-template-areas:'blurb picture';grid-template-columns:3fr 2fr;grid-template-rows:1fr;grid-column-gap:1em;grid-row-gap:2em;}@media (max-width:667px){.hero.jsx-4201523840{padding:2em;grid-template-areas: 'picture' 'blurb';grid-template-columns:1fr;}}h1.jsx-4201523840{color:#34343e;display:inline-block;vertical-align:middle;font-size:3em;margin:0 0 0.5em 0;-webkit-letter-spacing:-0.03em;-moz-letter-spacing:-0.03em;-ms-letter-spacing:-0.03em;letter-spacing:-0.03em;}h1.jsx-4201523840::after{content:'';background-color:#ed6f4d;background:linear-gradient(-140deg,rgba(255,179,158,1) 10%,rgba(237,111,77,1) 60%);height:4px;width:60%;display:block;margin-top:5px;}.blurb.jsx-4201523840{font-size:1.5em;color:#757583;font-weight:normal;}p.jsx-4201523840{margin:0;margin-bottom:1em;}.profile-picture-container.jsx-4201523840{-webkit-filter:drop-shadow(0 2px 3px rgba(0,0,0,0.1));filter:drop-shadow(0 2px 3px rgba(0,0,0,0.1));vertical-align:middle;place-self:center;height:150px;}.social-logo.jsx-4201523840{width:24px;height:24px;padding-right:0.75em;}section.jsx-4201523840{background:white;border-radius:5px;padding:10px;margin:10px;text-align:left;display:inline-block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icnljZS9jb2RlL3BlcnNvbmFsLXNpdGUvcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdLZ0IsQUFHeUIsQUFhRixBQVNBLEFBU0gsQUFVSyxBQU1QLEFBS3dDLEFBT3RDLEFBTU0sU0FqQkMsRUFoQk8sQUE0QmIsQ0E1Q0QsRUFPVSxFQXRCUCxBQXlDQSxDQXdCSSxNQUxHLElBWnZCLEdBL0NjLEFBeUNPLEtBbkJHLEFBMkNULENBbEM4RSxNQTlCOUUsRUEyRGYsSUFNYyxDQXhCZCxFQTNCOEIsSUFiUSxFQXFCdEIsR0E0Q0UsV0EzQ0csS0E0Q0UsQ0FwRHJCLGFBU3VCLENBdEJPLE1Ba0VoQyxHQWxCd0IsbUJBbkJYLEVBNUJZLENBZ0RMLFFBbkJSLFVBQ0ksQUFtQkQsSUFoRE8sU0FpRHRCLENBbkJpQixVQTdCRSxLQThCbkIsWUE3QkEsa0JBbUJBIiwiZmlsZSI6Ii9Vc2Vycy9icnljZS9jb2RlL3BlcnNvbmFsLXNpdGUvcGFnZXMvaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJztcblxuY29uc3QgY29sb3JzID0gWycjZWQ2ZjRkJywgJyNmYWNhYTUnLCAnIzcxYzNhZCcsICcjNGNhOWUwJywgJyM1NDg5OWMnLCAnIzYyYjNlMycsICcjYzZkY2RhJ107XG5cbmNvbnN0IG1ha2VSYW5kb21JbnQgPSAobWluOiBudW1iZXIsIG1heDogbnVtYmVyKSA9PiB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xufTtcblxuY29uc3QgbWFrZVJhbmRvbUZsb2F0ID0gKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikgPT4ge1xuICByZXR1cm4gKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pLnRvRml4ZWQoMSk7XG59O1xuXG5jb25zdCBwaWNrUmFuZG9tSXRlbSA9IChpdGVtczogYW55W10pID0+IHtcbiAgcmV0dXJuIGl0ZW1zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGl0ZW1zLmxlbmd0aCldO1xufTtcblxuY29uc3QgZG90cyA9IFtdO1xuXG5jb25zdCBtYWtlRG90cyA9ICgpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNTsgaSsrKSB7XG4gICAgZG90cy5wdXNoKHtcbiAgICAgIHg6IG1ha2VSYW5kb21JbnQoMCwgMTAwKSxcbiAgICAgIHk6IG1ha2VSYW5kb21JbnQoMCwgMTAwKSxcbiAgICAgIHdpZHRoOiBtYWtlUmFuZG9tSW50KDEwLCAyMCksXG4gICAgICByb3RhdGU6IG1ha2VSYW5kb21JbnQoMCwgMTgwKSxcbiAgICAgIGNvbG9yOiBjb2xvcnNbaSAlIDZdXG4gICAgfSk7XG4gIH1cbn07XG5cbm1ha2VEb3RzKCk7XG5cbmNvbnN0IHByb2ZpbGVQaWN0dXJlU3R5bGUgPSBjc3MucmVzb2x2ZWBcbiAgYmFja2dyb3VuZDogY2VudGVyL2NvdmVyIHVybCguL3N0YXRpYy9wcm9maWxlX3BpYy5qcGVnKTtcbiAgY2xpcC1wYXRoOiB1cmwoI2NsaXBQYXRoKTtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuYDtcblxuY29uc3Qgc29jaWFsSWNvblN0eWxlID0gY3NzLnJlc29sdmVgXG4gIHN2ZyB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjc1ZW07XG4gIH1cbmA7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+SG9tZTwvdGl0bGU+XG4gICAgPC9IZWFkPlxuICAgIHtkb3RzLm1hcCgoeyB4LCB5LCB3aWR0aCwgcm90YXRlLCBjb2xvciB9LCBpKSA9PiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtgJHt4fSR7eX0ke2NvbG9yfWB9PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAga2V5PXtgJHt4fSR7eX0ke2NvbG9yfS10b3BgfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIHRvcDogYCR7eX0lYCxcbiAgICAgICAgICAgIGxlZnQ6IGAke3h9JWAsXG4gICAgICAgICAgICB3aWR0aDogYCR7d2lkdGh9cHhgLFxuICAgICAgICAgICAgaGVpZ2h0OiAnMnB4JyxcbiAgICAgICAgICAgIG9wYWNpdHk6IDEgLSB5IC8gMTAwLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBgcm90YXRlKCR7cm90YXRlfWRlZylgLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnNbaSAlIDZdLFxuICAgICAgICAgICAgekluZGV4OiAtMVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBrZXk9e2Ake3h9JHt5fSR7Y29sb3J9LWJvdGB9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgYm90dG9tOiBgJHt5fSVgLFxuICAgICAgICAgICAgcmlnaHQ6IGAke3h9JWAsXG4gICAgICAgICAgICB3aWR0aDogYCR7d2lkdGh9cHhgLFxuICAgICAgICAgICAgaGVpZ2h0OiAnMnB4JyxcbiAgICAgICAgICAgIG9wYWNpdHk6IDEgLSAoMSAtIHkgLyAxMDApLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBgcm90YXRlKCR7cm90YXRlfWRlZylgLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnNbaSAlIDZdLFxuICAgICAgICAgICAgekluZGV4OiAtMVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICkpfVxuICAgIHtwcm9maWxlUGljdHVyZVN0eWxlLnN0eWxlc31cbiAgICB7c29jaWFsSWNvblN0eWxlLnN0eWxlc31cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm9cIj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgcGxhY2VTZWxmOiAnY2VudGVyJywgZ3JpZEFyZWE6ICdibHVyYicgfX0+XG4gICAgICAgIDxoMT5CcnljZSBLYWxvdzwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmx1cmJcIj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEVuZ2luZWVyIHdvcmtpbmcgb24gdGhlIHdlYi4gSSBhbSBwYXNzaW9uYXRlIGFib3V0IGltcHJvdmluZyBkZXZlbG9wZXIgZXhwZXJpZW5jZSxcbiAgICAgICAgICAgIGNyZWF0aW5nIG1haW50YWluYWJsZSBhbmQgYWNjZXNzaWJsZSBhcHBsaWNhdGlvbnMgYXQg4pyoPGVtPnNjYWxlPC9lbT7inKgsIGFuZCBvcGVuIHNvdXJjZVxuICAgICAgICAgICAgc29mdHdhcmUuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgQ3VycmVudGx5IHdvcmtpbmcgb257JyAnfVxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnRhcmdldC5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgVGFyZ2V0LmNvbVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgLCBtYWtpbmcgY29vbCB0aGluZ3Mgd2l0aCDimptSZWFjdCBhbmQgdHJhY2tpbmcgZG93biBvdXIgbmV4dCBwZXJmb3JtYW5jZSBpbXByb3ZlbWVudC4g8J+agFxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2Jya2Fsb3dcIiB0YXJnZXQ9XCJfYmxhbmtcIiB0aXRsZT1cIkJyeWNlIEthbG93IFR3aXR0ZXJcIj5cbiAgICAgICAgICA8bW90aW9uLnN2Z1xuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDcyIDcyXCJcbiAgICAgICAgICAgIGluaXRpYWw9e3sgY29sb3I6ICcjMDAwJyB9fVxuICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyBjb2xvcjogJyMxZGExZjInIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9e3NvY2lhbEljb25TdHlsZS5jbGFzc05hbWV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGggZD1cIk02Ny44MTIgMTYuMTQxYTI2LjI0NiAyNi4yNDYgMCAwIDEtNy41MTkgMi4wNiAxMy4xMzQgMTMuMTM0IDAgMCAwIDUuNzU2LTcuMjQ0IDI2LjEyNyAyNi4xMjcgMCAwIDEtOC4zMTMgMy4xNzZBMTMuMDc1IDEzLjA3NSAwIDAgMCA0OC4xODIgMTBjLTcuMjI5IDAtMTMuMDkyIDUuODYxLTEzLjA5MiAxMy4wOTMgMCAxLjAyNi4xMTggMi4wMjEuMzM4IDIuOTgxLTEwLjg4NS0uNTQ4LTIwLjUyOC01Ljc1Ny0yNi45ODctMTMuNjc5YTEzLjA0OCAxMy4wNDggMCAwIDAtMS43NzEgNi41ODFjMCA0LjU0MiAyLjMxMiA4LjU1MSA1LjgyNCAxMC44OThhMTMuMDQ4IDEzLjA0OCAwIDAgMS01LjkzLTEuNjM4Yy0uMDAyLjA1NS0uMDAyLjExLS4wMDIuMTYyIDAgNi4zNDUgNC41MTMgMTEuNjM4IDEwLjUwNCAxMi44NGExMy4xNzcgMTMuMTc3IDAgMCAxLTMuNDQ5LjQ1N2MtLjg0NiAwLTEuNjY3LS4wNzgtMi40NjUtLjIzMSAxLjY2NyA1LjIgNi40OTkgOC45ODYgMTIuMjMgOS4wOWEyNi4yNzYgMjYuMjc2IDAgMCAxLTE2LjI2IDUuNjA2QTI2LjIxIDI2LjIxIDAgMCAxIDQgNTUuOTc2YTM3LjAzNiAzNy4wMzYgMCAwIDAgMjAuMDY3IDUuODgyYzI0LjA4MyAwIDM3LjI1MS0xOS45NDkgMzcuMjUxLTM3LjI0OSAwLS41NjYtLjAxNC0xLjEzNC0uMDM5LTEuNjk0YTI2LjU5NyAyNi41OTcgMCAwIDAgNi41MzMtNi43NzR6XCIgLz5cbiAgICAgICAgICA8L21vdGlvbi5zdmc+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9CUkthbG93XCIgdGFyZ2V0PVwiX2JsYW5rXCIgdGl0bGU9XCJCcnljZSBLYWxvdyBHaXRIdWJcIj5cbiAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiB2ZXJzaW9uPVwiMS4xXCIgd2lkdGg9XCIzMlwiIGNsYXNzTmFtZT17c29jaWFsSWNvblN0eWxlLmNsYXNzTmFtZX0+XG4gICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICBkPVwiTTggMEMzLjU4IDAgMCAzLjU4IDAgOGMwIDMuNTQgMi4yOSA2LjUzIDUuNDcgNy41OS40LjA3LjU1LS4xNy41NS0uMzggMC0uMTktLjAxLS44Mi0uMDEtMS40OS0yLjAxLjM3LTIuNTMtLjQ5LTIuNjktLjk0LS4wOS0uMjMtLjQ4LS45NC0uODItMS4xMy0uMjgtLjE1LS42OC0uNTItLjAxLS41My42My0uMDEgMS4wOC41OCAxLjIzLjgyLjcyIDEuMjEgMS44Ny44NyAyLjMzLjY2LjA3LS41Mi4yOC0uODcuNTEtMS4wNy0xLjc4LS4yLTMuNjQtLjg5LTMuNjQtMy45NSAwLS44Ny4zMS0xLjU5LjgyLTIuMTUtLjA4LS4yLS4zNi0xLjAyLjA4LTIuMTIgMCAwIC42Ny0uMjEgMi4yLjgyLjY0LS4xOCAxLjMyLS4yNyAyLS4yNy42OCAwIDEuMzYuMDkgMiAuMjcgMS41My0xLjA0IDIuMi0uODIgMi4yLS44Mi40NCAxLjEuMTYgMS45Mi4wOCAyLjEyLjUxLjU2LjgyIDEuMjcuODIgMi4xNSAwIDMuMDctMS44NyAzLjc1LTMuNjUgMy45NS4yOS4yNS41NC43My41NCAxLjQ4IDAgMS4wNy0uMDEgMS45My0uMDEgMi4yIDAgLjIxLjE1LjQ2LjU1LjM4QTguMDEzIDguMDEzIDAgMCAwIDE2IDhjMC00LjQyLTMuNTgtOC04LTh6XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2JyeWNlLWthbG93LTg2YTU3MTgzL1wiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICB0aXRsZT1cIkJyeWNlIEthbG93IExpbmtlZEluXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCAxOCAxOFwiIGNsYXNzTmFtZT17c29jaWFsSWNvblN0eWxlLmNsYXNzTmFtZX0+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTE4IDE4aC00di02Ljc1YzAtMS4wNi0xLjE5LTEuOTQtMi4yNS0xLjk0UzEwIDEwLjE5IDEwIDExLjI1VjE4SDZWNmg0djJjLjY2LTEuMDcgMi4zNi0xLjc2IDMuNS0xLjc2IDIuNSAwIDQuNSAyLjA0IDQuNSA0LjUxVjE4ek00IDE4SDBWNmg0djEyek0yIDBhMiAyIDAgMSAxIDAgNCAyIDIgMCAwIDEgMC00elwiIC8+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZ3JpZCcsIGdyaWRBcmVhOiAncGljdHVyZScgfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1waWN0dXJlLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICBpbml0aWFsPXt7IHk6IDEwLCBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICBhbmltYXRlPXt7IHk6IDAsIG9wYWNpdHk6IDEgfX1cbiAgICAgICAgICAgIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMSB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtwcm9maWxlUGljdHVyZVN0eWxlLmNsYXNzTmFtZX1cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJwcm9maWxlIHBpY3R1cmVcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHN2ZyBzdHlsZT17eyBoZWlnaHQ6ICcwcHgnIH19PlxuICAgICAgPGRlZnM+XG4gICAgICAgIDxjbGlwUGF0aCBpZD1cImNsaXBQYXRoXCI+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIHN0cm9rZT1cIm5vbmVcIlxuICAgICAgICAgICAgZmlsbD1cIndoaXRlXCJcbiAgICAgICAgICAgIGQ9XCJNNzIgMC45NDMzNzU2NzI5NzQwOGE1IDUgMCAwIDEgNSAwbDU5Ljk1MTkwNTI4MzgzMyAzNC42MTMyNDg2NTQwNTJhNSA1IDAgMCAxIDIuNSA0LjMzMDEyNzAxODkyMjJsMCA2OS4yMjY0OTczMDgxMDRhNSA1IDAgMCAxIC0yLjUgNC4zMzAxMjcwMTg5MjIybC01OS45NTE5MDUyODM4MzMgMzQuNjEzMjQ4NjU0MDUyYTUgNSAwIDAgMSAtNSAwbC01OS45NTE5MDUyODM4MzMgLTM0LjYxMzI0ODY1NDA1MmE1IDUgMCAwIDEgLTIuNSAtNC4zMzAxMjcwMTg5MjIybDEuMTAyNTQyNjA3MDkyOWUtMTMgLTY5LjIyNjQ5NzMwODEwNGE1IDUgMCAwIDEgMi41IC00LjMzMDEyNzAxODkyMjJcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvY2xpcFBhdGg+XG4gICAgICA8L2RlZnM+XG4gICAgPC9zdmc+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmhlcm8ge1xuICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgcGFkZGluZzogNWVtO1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnYmx1cmIgcGljdHVyZSc7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDJmcjtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gICAgICAgIGdyaWQtY29sdW1uLWdhcDogMWVtO1xuICAgICAgICBncmlkLXJvdy1nYXA6IDJlbTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY2N3B4KSB7XG4gICAgICAgIC5oZXJvIHtcbiAgICAgICAgICBwYWRkaW5nOiAyZW07XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgICAgICdwaWN0dXJlJ1xuICAgICAgICAgICAgJ2JsdXJiJztcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBoMSB7XG4gICAgICAgIGNvbG9yOiAjMzQzNDNlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgICAgICBtYXJnaW46IDAgMCAwLjVlbSAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDNlbTtcbiAgICAgIH1cblxuICAgICAgaDE6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZDZmNGQ7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtMTQwZGVnLCByZ2JhKDI1NSwgMTc5LCAxNTgsIDEpIDEwJSwgcmdiYSgyMzcsIDExMSwgNzcsIDEpIDYwJSk7XG4gICAgICAgIGhlaWdodDogNHB4O1xuICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgfVxuXG4gICAgICAuYmx1cmIge1xuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICBjb2xvcjogIzc1NzU4MztcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIH1cblxuICAgICAgcCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgICAgfVxuXG4gICAgICAucHJvZmlsZS1waWN0dXJlLWNvbnRhaW5lciB7XG4gICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKSk7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIHBsYWNlLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgIH1cblxuICAgICAgLnNvY2lhbC1sb2dvIHtcbiAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMC43NWVtO1xuICAgICAgfVxuXG4gICAgICBzZWN0aW9uIHtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXX0= */\n/*@ sourceURL=/Users/bryce/code/personal-site/pages/index.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.3d0c4a9bcd8bfc3ce122.hot-update.js.map