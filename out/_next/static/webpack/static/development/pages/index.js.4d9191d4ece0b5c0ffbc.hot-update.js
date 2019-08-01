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
    id: "866894694",
    __self: undefined
  }, "svg.jsx-866894694{width:24px;height:24px;}"),
  className: "jsx-866894694"
};

var Home = function Home() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2466366368",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-2466366368",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
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
        lineNumber: 57
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
      className: "jsx-2466366368",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
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
      className: "jsx-2466366368",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }));
  }), profilePictureStyle.styles, socialIconStyle.styles, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2466366368" + " " + "hero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      placeSelf: 'center',
      gridArea: 'blurb'
    },
    className: "jsx-2466366368",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-2466366368",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Bryce Kalow"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2466366368" + " " + "blurb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2466366368",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "Engineer working on the web. I am passionate about improving developer experience, creating maintainable and accessible applications at \u2728", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("em", {
    className: "jsx-2466366368",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "scale"), "\u2728, and open source software."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2466366368",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "Currently working on", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.target.com",
    target: "_blank",
    className: "jsx-2466366368",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "Target.com"), ", making cool things with \u269BReact and tracking down our next performance improvement. \uD83D\uDE80")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://twitter.com/brkalow",
    target: "_blank",
    title: "Bryce Kalow Twitter",
    className: "jsx-2466366368" + " " + "social-logo-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].svg, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 72 72",
    initial: {
      fill: '#000000'
    },
    whileHover: {
      fill: '#1da1f2'
    },
    className: socialIconStyle.className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M67.812 16.141a26.246 26.246 0 0 1-7.519 2.06 13.134 13.134 0 0 0 5.756-7.244 26.127 26.127 0 0 1-8.313 3.176A13.075 13.075 0 0 0 48.182 10c-7.229 0-13.092 5.861-13.092 13.093 0 1.026.118 2.021.338 2.981-10.885-.548-20.528-5.757-26.987-13.679a13.048 13.048 0 0 0-1.771 6.581c0 4.542 2.312 8.551 5.824 10.898a13.048 13.048 0 0 1-5.93-1.638c-.002.055-.002.11-.002.162 0 6.345 4.513 11.638 10.504 12.84a13.177 13.177 0 0 1-3.449.457c-.846 0-1.667-.078-2.465-.231 1.667 5.2 6.499 8.986 12.23 9.09a26.276 26.276 0 0 1-16.26 5.606A26.21 26.21 0 0 1 4 55.976a37.036 37.036 0 0 0 20.067 5.882c24.083 0 37.251-19.949 37.251-37.249 0-.566-.014-1.134-.039-1.694a26.597 26.597 0 0 0 6.533-6.774z",
    className: "jsx-2466366368",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://github.com/BRKalow",
    target: "_blank",
    title: "Bryce Kalow GitHub",
    className: "jsx-2466366368" + " " + "social-logo-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    viewBox: "0 0 16 16",
    version: "1.1",
    width: "32",
    className: "jsx-2466366368" + " " + (socialIconStyle.className || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    fillRule: "evenodd",
    d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z",
    className: "jsx-2466366368",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.linkedin.com/in/bryce-kalow-86a57183/",
    target: "_blank",
    title: "Bryce Kalow LinkedIn",
    className: "jsx-2466366368" + " " + "social-logo-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    viewBox: "0 0 18 18",
    className: "jsx-2466366368" + " " + (socialIconStyle.className || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M18 18h-4v-6.75c0-1.06-1.19-1.94-2.25-1.94S10 10.19 10 11.25V18H6V6h4v2c.66-1.07 2.36-1.76 3.5-1.76 2.5 0 4.5 2.04 4.5 4.51V18zM4 18H0V6h4v12zM2 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4z",
    className: "jsx-2466366368",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: 'grid',
      gridArea: 'picture'
    },
    className: "jsx-2466366368",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2466366368" + " " + "profile-picture-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
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
      lineNumber: 149
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    style: {
      height: '0px'
    },
    className: "jsx-2466366368",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("defs", {
    className: "jsx-2466366368",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("clipPath", {
    id: "clipPath",
    className: "jsx-2466366368",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    stroke: "none",
    fill: "white",
    d: "M72 0.94337567297408a5 5 0 0 1 5 0l59.951905283833 34.613248654052a5 5 0 0 1 2.5 4.3301270189222l0 69.226497308104a5 5 0 0 1 -2.5 4.3301270189222l-59.951905283833 34.613248654052a5 5 0 0 1 -5 0l-59.951905283833 -34.613248654052a5 5 0 0 1 -2.5 -4.3301270189222l1.1025426070929e-13 -69.226497308104a5 5 0 0 1 2.5 -4.3301270189222",
    className: "jsx-2466366368",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2466366368",
    __self: this
  }, ".hero.jsx-2466366368{max-width:800px;margin:0 auto;padding:5em;display:grid;grid-template-areas:'blurb picture';grid-template-columns:3fr 2fr;grid-template-rows:1fr;grid-column-gap:1em;grid-row-gap:2em;}@media (max-width:667px){.hero.jsx-2466366368{padding:2em;grid-template-areas: 'picture' 'blurb';grid-template-columns:1fr;}}h1.jsx-2466366368{color:#34343e;display:inline-block;vertical-align:middle;font-size:3em;margin:0 0 0.5em 0;-webkit-letter-spacing:-0.03em;-moz-letter-spacing:-0.03em;-ms-letter-spacing:-0.03em;letter-spacing:-0.03em;}h1.jsx-2466366368::after{content:'';background-color:#ed6f4d;background:linear-gradient(-140deg,rgba(255,179,158,1) 10%,rgba(237,111,77,1) 60%);height:4px;width:60%;display:block;margin-top:5px;}.blurb.jsx-2466366368{font-size:1.5em;color:#757583;font-weight:normal;}p.jsx-2466366368{margin:0;margin-bottom:1em;}.profile-picture-container.jsx-2466366368{-webkit-filter:drop-shadow(0 2px 3px rgba(0,0,0,0.1));filter:drop-shadow(0 2px 3px rgba(0,0,0,0.1));vertical-align:middle;place-self:center;height:150px;}.social-logo-link.jsx-2466366368{padding-right:0.75em;}section.jsx-2466366368{background:white;border-radius:5px;padding:10px;margin:10px;text-align:left;display:inline-block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icnljZS9jb2RlL3BlcnNvbmFsLXNpdGUvcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlLZ0IsQUFHeUIsQUFhRixBQVNBLEFBU0gsQUFVSyxBQU1QLEFBS3dDLEFBTzVCLEFBSUosU0FmQyxFQWhCTyxDQWhCZCxFQU9VLEVBdEJQLEFBeUNBLENBc0JJLElBSnBCLE1BWEEsR0EvQ2MsQUF5Q08sS0FuQkcsQUF5Q1QsQ0FoQzhFLE1BOUI5RSxNQStERCxDQXRCZCxFQTNCOEIsSUFiUSxFQXFCdEIsR0EwQ0UsV0F6Q0csS0EwQ0UsQ0FsRHJCLGFBU3VCLENBdEJPLE1BZ0VoQyxHQWhCd0IsbUJBbkJYLEVBNUJZLENBZ0RMLFFBbkJSLFVBQ0ksQUFtQkQsSUFoRE8sU0FpRHRCLENBbkJpQixVQTdCRSxLQThCbkIsWUE3QkEsa0JBbUJBIiwiZmlsZSI6Ii9Vc2Vycy9icnljZS9jb2RlL3BlcnNvbmFsLXNpdGUvcGFnZXMvaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJztcblxuY29uc3QgY29sb3JzID0gWycjZWQ2ZjRkJywgJyNmYWNhYTUnLCAnIzcxYzNhZCcsICcjNGNhOWUwJywgJyM1NDg5OWMnLCAnIzYyYjNlMycsICcjYzZkY2RhJ107XG5cbmNvbnN0IG1ha2VSYW5kb21JbnQgPSAobWluOiBudW1iZXIsIG1heDogbnVtYmVyKSA9PiB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xufTtcblxuY29uc3QgbWFrZVJhbmRvbUZsb2F0ID0gKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikgPT4ge1xuICByZXR1cm4gKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pLnRvRml4ZWQoMSk7XG59O1xuXG5jb25zdCBwaWNrUmFuZG9tSXRlbSA9IChpdGVtczogYW55W10pID0+IHtcbiAgcmV0dXJuIGl0ZW1zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGl0ZW1zLmxlbmd0aCldO1xufTtcblxuY29uc3QgZG90cyA9IFtdO1xuXG5jb25zdCBtYWtlRG90cyA9ICgpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNTsgaSsrKSB7XG4gICAgZG90cy5wdXNoKHtcbiAgICAgIHg6IG1ha2VSYW5kb21JbnQoMCwgMTAwKSxcbiAgICAgIHk6IG1ha2VSYW5kb21JbnQoMCwgMTAwKSxcbiAgICAgIHdpZHRoOiBtYWtlUmFuZG9tSW50KDEwLCAyMCksXG4gICAgICByb3RhdGU6IG1ha2VSYW5kb21JbnQoMCwgMTgwKSxcbiAgICAgIGNvbG9yOiBjb2xvcnNbaSAlIDZdXG4gICAgfSk7XG4gIH1cbn07XG5cbm1ha2VEb3RzKCk7XG5cbmNvbnN0IHByb2ZpbGVQaWN0dXJlU3R5bGUgPSBjc3MucmVzb2x2ZWBcbiAgYmFja2dyb3VuZDogY2VudGVyL2NvdmVyIHVybCguL3N0YXRpYy9wcm9maWxlX3BpYy5qcGVnKTtcbiAgY2xpcC1wYXRoOiB1cmwoI2NsaXBQYXRoKTtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuYDtcblxuY29uc3Qgc29jaWFsSWNvblN0eWxlID0gY3NzLnJlc29sdmVgXG4gIHN2ZyB7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICB9XG5gO1xuXG5jb25zdCBIb21lID0gKCkgPT4gKFxuICA8ZGl2PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPkhvbWU8L3RpdGxlPlxuICAgIDwvSGVhZD5cbiAgICB7ZG90cy5tYXAoKHsgeCwgeSwgd2lkdGgsIHJvdGF0ZSwgY29sb3IgfSwgaSkgPT4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17YCR7eH0ke3l9JHtjb2xvcn1gfT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGtleT17YCR7eH0ke3l9JHtjb2xvcn0tdG9wYH1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICB0b3A6IGAke3l9JWAsXG4gICAgICAgICAgICBsZWZ0OiBgJHt4fSVgLFxuICAgICAgICAgICAgd2lkdGg6IGAke3dpZHRofXB4YCxcbiAgICAgICAgICAgIGhlaWdodDogJzJweCcsXG4gICAgICAgICAgICBvcGFjaXR5OiAxIC0geSAvIDEwMCxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZSgke3JvdGF0ZX1kZWcpYCxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzW2kgJSA2XSxcbiAgICAgICAgICAgIHpJbmRleDogLTFcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAga2V5PXtgJHt4fSR7eX0ke2NvbG9yfS1ib3RgfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIGJvdHRvbTogYCR7eX0lYCxcbiAgICAgICAgICAgIHJpZ2h0OiBgJHt4fSVgLFxuICAgICAgICAgICAgd2lkdGg6IGAke3dpZHRofXB4YCxcbiAgICAgICAgICAgIGhlaWdodDogJzJweCcsXG4gICAgICAgICAgICBvcGFjaXR5OiAxIC0gKDEgLSB5IC8gMTAwKSxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZSgke3JvdGF0ZX1kZWcpYCxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzW2kgJSA2XSxcbiAgICAgICAgICAgIHpJbmRleDogLTFcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApKX1cbiAgICB7cHJvZmlsZVBpY3R1cmVTdHlsZS5zdHlsZXN9XG4gICAge3NvY2lhbEljb25TdHlsZS5zdHlsZXN9XG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvXCI+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHBsYWNlU2VsZjogJ2NlbnRlcicsIGdyaWRBcmVhOiAnYmx1cmInIH19PlxuICAgICAgICA8aDE+QnJ5Y2UgS2Fsb3c8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsdXJiXCI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBFbmdpbmVlciB3b3JraW5nIG9uIHRoZSB3ZWIuIEkgYW0gcGFzc2lvbmF0ZSBhYm91dCBpbXByb3ZpbmcgZGV2ZWxvcGVyIGV4cGVyaWVuY2UsXG4gICAgICAgICAgICBjcmVhdGluZyBtYWludGFpbmFibGUgYW5kIGFjY2Vzc2libGUgYXBwbGljYXRpb25zIGF0IOKcqDxlbT5zY2FsZTwvZW0+4pyoLCBhbmQgb3BlbiBzb3VyY2VcbiAgICAgICAgICAgIHNvZnR3YXJlLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEN1cnJlbnRseSB3b3JraW5nIG9ueycgJ31cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy50YXJnZXQuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgIFRhcmdldC5jb21cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICwgbWFraW5nIGNvb2wgdGhpbmdzIHdpdGgg4pqbUmVhY3QgYW5kIHRyYWNraW5nIGRvd24gb3VyIG5leHQgcGVyZm9ybWFuY2UgaW1wcm92ZW1lbnQuIPCfmoBcbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2Jya2Fsb3dcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgdGl0bGU9XCJCcnljZSBLYWxvdyBUd2l0dGVyXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzb2NpYWwtbG9nby1saW5rXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxtb3Rpb24uc3ZnXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNzIgNzJcIlxuICAgICAgICAgICAgaW5pdGlhbD17eyBmaWxsOiAnIzAwMDAwMCcgfX1cbiAgICAgICAgICAgIHdoaWxlSG92ZXI9e3sgZmlsbDogJyMxZGExZjInIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9e3NvY2lhbEljb25TdHlsZS5jbGFzc05hbWV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHBhdGggZD1cIk02Ny44MTIgMTYuMTQxYTI2LjI0NiAyNi4yNDYgMCAwIDEtNy41MTkgMi4wNiAxMy4xMzQgMTMuMTM0IDAgMCAwIDUuNzU2LTcuMjQ0IDI2LjEyNyAyNi4xMjcgMCAwIDEtOC4zMTMgMy4xNzZBMTMuMDc1IDEzLjA3NSAwIDAgMCA0OC4xODIgMTBjLTcuMjI5IDAtMTMuMDkyIDUuODYxLTEzLjA5MiAxMy4wOTMgMCAxLjAyNi4xMTggMi4wMjEuMzM4IDIuOTgxLTEwLjg4NS0uNTQ4LTIwLjUyOC01Ljc1Ny0yNi45ODctMTMuNjc5YTEzLjA0OCAxMy4wNDggMCAwIDAtMS43NzEgNi41ODFjMCA0LjU0MiAyLjMxMiA4LjU1MSA1LjgyNCAxMC44OThhMTMuMDQ4IDEzLjA0OCAwIDAgMS01LjkzLTEuNjM4Yy0uMDAyLjA1NS0uMDAyLjExLS4wMDIuMTYyIDAgNi4zNDUgNC41MTMgMTEuNjM4IDEwLjUwNCAxMi44NGExMy4xNzcgMTMuMTc3IDAgMCAxLTMuNDQ5LjQ1N2MtLjg0NiAwLTEuNjY3LS4wNzgtMi40NjUtLjIzMSAxLjY2NyA1LjIgNi40OTkgOC45ODYgMTIuMjMgOS4wOWEyNi4yNzYgMjYuMjc2IDAgMCAxLTE2LjI2IDUuNjA2QTI2LjIxIDI2LjIxIDAgMCAxIDQgNTUuOTc2YTM3LjAzNiAzNy4wMzYgMCAwIDAgMjAuMDY3IDUuODgyYzI0LjA4MyAwIDM3LjI1MS0xOS45NDkgMzcuMjUxLTM3LjI0OSAwLS41NjYtLjAxNC0xLjEzNC0uMDM5LTEuNjk0YTI2LjU5NyAyNi41OTcgMCAwIDAgNi41MzMtNi43NzR6XCIgLz5cbiAgICAgICAgICA8L21vdGlvbi5zdmc+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL0JSS2Fsb3dcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgdGl0bGU9XCJCcnljZSBLYWxvdyBHaXRIdWJcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInNvY2lhbC1sb2dvLWxpbmtcIlxuICAgICAgICA+XG4gICAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgdmVyc2lvbj1cIjEuMVwiIHdpZHRoPVwiMzJcIiBjbGFzc05hbWU9e3NvY2lhbEljb25TdHlsZS5jbGFzc05hbWV9PlxuICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgZD1cIk04IDBDMy41OCAwIDAgMy41OCAwIDhjMCAzLjU0IDIuMjkgNi41MyA1LjQ3IDcuNTkuNC4wNy41NS0uMTcuNTUtLjM4IDAtLjE5LS4wMS0uODItLjAxLTEuNDktMi4wMS4zNy0yLjUzLS40OS0yLjY5LS45NC0uMDktLjIzLS40OC0uOTQtLjgyLTEuMTMtLjI4LS4xNS0uNjgtLjUyLS4wMS0uNTMuNjMtLjAxIDEuMDguNTggMS4yMy44Mi43MiAxLjIxIDEuODcuODcgMi4zMy42Ni4wNy0uNTIuMjgtLjg3LjUxLTEuMDctMS43OC0uMi0zLjY0LS44OS0zLjY0LTMuOTUgMC0uODcuMzEtMS41OS44Mi0yLjE1LS4wOC0uMi0uMzYtMS4wMi4wOC0yLjEyIDAgMCAuNjctLjIxIDIuMi44Mi42NC0uMTggMS4zMi0uMjcgMi0uMjcuNjggMCAxLjM2LjA5IDIgLjI3IDEuNTMtMS4wNCAyLjItLjgyIDIuMi0uODIuNDQgMS4xLjE2IDEuOTIuMDggMi4xMi41MS41Ni44MiAxLjI3LjgyIDIuMTUgMCAzLjA3LTEuODcgMy43NS0zLjY1IDMuOTUuMjkuMjUuNTQuNzMuNTQgMS40OCAwIDEuMDctLjAxIDEuOTMtLjAxIDIuMiAwIC4yMS4xNS40Ni41NS4zOEE4LjAxMyA4LjAxMyAwIDAgMCAxNiA4YzAtNC40Mi0zLjU4LTgtOC04elwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2E+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9icnljZS1rYWxvdy04NmE1NzE4My9cIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgdGl0bGU9XCJCcnljZSBLYWxvdyBMaW5rZWRJblwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwic29jaWFsLWxvZ28tbGlua1wiXG4gICAgICAgID5cbiAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMTggMThcIiBjbGFzc05hbWU9e3NvY2lhbEljb25TdHlsZS5jbGFzc05hbWV9PlxuICAgICAgICAgICAgPHBhdGggZD1cIk0xOCAxOGgtNHYtNi43NWMwLTEuMDYtMS4xOS0xLjk0LTIuMjUtMS45NFMxMCAxMC4xOSAxMCAxMS4yNVYxOEg2VjZoNHYyYy42Ni0xLjA3IDIuMzYtMS43NiAzLjUtMS43NiAyLjUgMCA0LjUgMi4wNCA0LjUgNC41MVYxOHpNNCAxOEgwVjZoNHYxMnpNMiAwYTIgMiAwIDEgMSAwIDQgMiAyIDAgMCAxIDAtNHpcIiAvPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2dyaWQnLCBncmlkQXJlYTogJ3BpY3R1cmUnIH19PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtcGljdHVyZS1jb250YWluZXJcIj5cbiAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgaW5pdGlhbD17eyB5OiAxMCwgb3BhY2l0eTogMCB9fVxuICAgICAgICAgICAgYW5pbWF0ZT17eyB5OiAwLCBvcGFjaXR5OiAxIH19XG4gICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjEgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17cHJvZmlsZVBpY3R1cmVTdHlsZS5jbGFzc05hbWV9XG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwicHJvZmlsZSBwaWN0dXJlXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzdmcgc3R5bGU9e3sgaGVpZ2h0OiAnMHB4JyB9fT5cbiAgICAgIDxkZWZzPlxuICAgICAgICA8Y2xpcFBhdGggaWQ9XCJjbGlwUGF0aFwiPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBzdHJva2U9XCJub25lXCJcbiAgICAgICAgICAgIGZpbGw9XCJ3aGl0ZVwiXG4gICAgICAgICAgICBkPVwiTTcyIDAuOTQzMzc1NjcyOTc0MDhhNSA1IDAgMCAxIDUgMGw1OS45NTE5MDUyODM4MzMgMzQuNjEzMjQ4NjU0MDUyYTUgNSAwIDAgMSAyLjUgNC4zMzAxMjcwMTg5MjIybDAgNjkuMjI2NDk3MzA4MTA0YTUgNSAwIDAgMSAtMi41IDQuMzMwMTI3MDE4OTIyMmwtNTkuOTUxOTA1MjgzODMzIDM0LjYxMzI0ODY1NDA1MmE1IDUgMCAwIDEgLTUgMGwtNTkuOTUxOTA1MjgzODMzIC0zNC42MTMyNDg2NTQwNTJhNSA1IDAgMCAxIC0yLjUgLTQuMzMwMTI3MDE4OTIyMmwxLjEwMjU0MjYwNzA5MjllLTEzIC02OS4yMjY0OTczMDgxMDRhNSA1IDAgMCAxIDIuNSAtNC4zMzAxMjcwMTg5MjIyXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2NsaXBQYXRoPlxuICAgICAgPC9kZWZzPlxuICAgIDwvc3ZnPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5oZXJvIHtcbiAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDVlbTtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2JsdXJiIHBpY3R1cmUnO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAyZnI7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICAgICAgICBncmlkLWNvbHVtbi1nYXA6IDFlbTtcbiAgICAgICAgZ3JpZC1yb3ctZ2FwOiAyZW07XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2NjdweCkge1xuICAgICAgICAuaGVybyB7XG4gICAgICAgICAgcGFkZGluZzogMmVtO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAgICAgICAncGljdHVyZSdcbiAgICAgICAgICAgICdibHVyYic7XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaDEge1xuICAgICAgICBjb2xvcjogIzM0MzQzZTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBmb250LXNpemU6IDNlbTtcbiAgICAgICAgbWFyZ2luOiAwIDAgMC41ZW0gMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAzZW07XG4gICAgICB9XG5cbiAgICAgIGgxOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWQ2ZjRkO1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTE0MGRlZywgcmdiYSgyNTUsIDE3OSwgMTU4LCAxKSAxMCUsIHJnYmEoMjM3LCAxMTEsIDc3LCAxKSA2MCUpO1xuICAgICAgICBoZWlnaHQ6IDRweDtcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgIH1cblxuICAgICAgLmJsdXJiIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgY29sb3I6ICM3NTc1ODM7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICB9XG5cbiAgICAgIHAge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICAgIH1cblxuICAgICAgLnByb2ZpbGUtcGljdHVyZS1jb250YWluZXIge1xuICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMSkpO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICB9XG5cbiAgICAgIC5zb2NpYWwtbG9nby1saW5rIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMC43NWVtO1xuICAgICAgfVxuXG4gICAgICBzZWN0aW9uIHtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXX0= */\n/*@ sourceURL=/Users/bryce/code/personal-site/pages/index.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.4d9191d4ece0b5c0ffbc.hot-update.js.map