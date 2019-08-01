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

var Home = function Home() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-884512948",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-884512948",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
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
        lineNumber: 51
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
      className: "jsx-884512948",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
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
      className: "jsx-884512948",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }));
  }), profilePictureStyle.styles, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-884512948" + " " + "hero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      placeSelf: 'center',
      gridArea: 'blurb'
    },
    className: "jsx-884512948",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-884512948",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "Bryce Kalow"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-884512948" + " " + "blurb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-884512948",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "Engineer working on the web. I am passionate about improving developer experience, creating maintainable and accessible applications at \u2728", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("em", {
    className: "jsx-884512948",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "scale"), "\u2728, and open source software."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-884512948",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Currently working on", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.target.com",
    target: "_blank",
    className: "jsx-884512948",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "Target.com"), ", making cool things with \u269B React and tracking down our next performance improvement \uD83D\uDE80."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: 'grid',
      gridArea: 'picture'
    },
    className: "jsx-884512948",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-884512948" + " " + "profile-picture-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
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
      lineNumber: 103
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    style: {
      display: 'none'
    },
    className: "jsx-884512948",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("defs", {
    className: "jsx-884512948",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("clipPath", {
    id: "clipPath",
    className: "jsx-884512948",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    stroke: "none",
    fill: "white",
    d: "M72 0.94337567297408a5 5 0 0 1 5 0l59.951905283833 34.613248654052a5 5 0 0 1 2.5 4.3301270189222l0 69.226497308104a5 5 0 0 1 -2.5 4.3301270189222l-59.951905283833 34.613248654052a5 5 0 0 1 -5 0l-59.951905283833 -34.613248654052a5 5 0 0 1 -2.5 -4.3301270189222l1.1025426070929e-13 -69.226497308104a5 5 0 0 1 2.5 -4.3301270189222",
    className: "jsx-884512948",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "884512948",
    __self: this
  }, ".hero.jsx-884512948{max-width:800px;margin:0 auto;padding:5em;display:grid;grid-template-areas:'blurb picture';grid-template-columns:3fr 2fr;grid-template-rows:1fr;grid-column-gap:1em;grid-row-gap:2em;}@media (max-width:667px){.hero.jsx-884512948{padding:2em;grid-template-areas: 'picture' 'blurb';grid-template-columns:1fr;}}h1.jsx-884512948{color:#34343e;display:inline-block;vertical-align:middle;font-size:3em;margin:0 0 0.5em 0;-webkit-letter-spacing:-0.03em;-moz-letter-spacing:-0.03em;-ms-letter-spacing:-0.03em;letter-spacing:-0.03em;}h1.jsx-884512948::after{content:'';background-color:#ed6f4d;background:linear-gradient(-140deg,rgba(255,179,158,1) 10%,rgba(237,111,77,1) 60%);height:4px;width:60%;display:block;margin-top:5px;}.blurb.jsx-884512948{font-size:1.5em;color:#757583;font-weight:normal;}p.jsx-884512948{margin:0;margin-bottom:1em;}.profile-picture-container.jsx-884512948{-webkit-filter:drop-shadow(0 2px 3px rgba(0,0,0,0.1));filter:drop-shadow(0 2px 3px rgba(0,0,0,0.1));vertical-align:middle;place-self:center;height:150px;}section.jsx-884512948{background:white;border-radius:5px;padding:10px;margin:10px;text-align:left;display:inline-block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icnljZS9jb2RlL3BlcnNvbmFsLXNpdGUvcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJIZ0IsQUFHeUIsQUFhRixBQVNBLEFBU0gsQUFVSyxBQU1QLEFBS3dDLEFBT2hDLFNBWEMsRUFoQk8sQ0FoQmQsRUFPVSxFQXRCUCxBQXlDQSxDQWtCSSxVQVhwQixHQS9DYyxBQXlDTyxLQW5CRyxBQXFDVCxDQTVCOEUsTUE5QjlFLE1BMkRELENBbEJkLEVBM0I4QixJQWJRLEVBcUJ0QixHQXNDRSxXQXJDRyxLQXNDRSxDQTlDckIsYUFTdUIsQ0F0Qk8sTUE0RGhDLEdBWndCLG1CQW5CWCxFQTVCWSxDQWdETCxRQW5CUixVQUNJLEFBbUJELElBaERPLFNBaUR0QixDQW5CaUIsVUE3QkUsS0E4Qm5CLFlBN0JBLGtCQW1CQSIsImZpbGUiOiIvVXNlcnMvYnJ5Y2UvY29kZS9wZXJzb25hbC1zaXRlL3BhZ2VzL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XG5pbXBvcnQgeyBOT05BTUUgfSBmcm9tICdkbnMnO1xuXG5jb25zdCBjb2xvcnMgPSBbJyNlZDZmNGQnLCAnI2ZhY2FhNScsICcjNzFjM2FkJywgJyM0Y2E5ZTAnLCAnIzU0ODk5YycsICcjNjJiM2UzJywgJyNjNmRjZGEnXTtcblxuY29uc3QgbWFrZVJhbmRvbUludCA9IChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpID0+IHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG59O1xuXG5jb25zdCBtYWtlUmFuZG9tRmxvYXQgPSAobWluOiBudW1iZXIsIG1heDogbnVtYmVyKSA9PiB7XG4gIHJldHVybiAoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbikudG9GaXhlZCgxKTtcbn07XG5cbmNvbnN0IHBpY2tSYW5kb21JdGVtID0gKGl0ZW1zOiBhbnlbXSkgPT4ge1xuICByZXR1cm4gaXRlbXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaXRlbXMubGVuZ3RoKV07XG59O1xuXG5jb25zdCBkb3RzID0gW107XG5cbmNvbnN0IG1ha2VEb3RzID0gKCkgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDI1OyBpKyspIHtcbiAgICBkb3RzLnB1c2goe1xuICAgICAgeDogbWFrZVJhbmRvbUludCgwLCAxMDApLFxuICAgICAgeTogbWFrZVJhbmRvbUludCgwLCAxMDApLFxuICAgICAgd2lkdGg6IG1ha2VSYW5kb21JbnQoMTAsIDIwKSxcbiAgICAgIHJvdGF0ZTogbWFrZVJhbmRvbUludCgwLCAxODApLFxuICAgICAgY29sb3I6IGNvbG9yc1tpICUgNl1cbiAgICB9KTtcbiAgfVxufTtcblxubWFrZURvdHMoKTtcblxuY29uc3QgcHJvZmlsZVBpY3R1cmVTdHlsZSA9IGNzcy5yZXNvbHZlYFxuICBiYWNrZ3JvdW5kOiBjZW50ZXIvY292ZXIgdXJsKC4vc3RhdGljL3Byb2ZpbGVfcGljLmpwZWcpO1xuICBjbGlwLXBhdGg6IHVybCgjY2xpcFBhdGgpO1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG5gO1xuXG5jb25zdCBIb21lID0gKCkgPT4gKFxuICA8ZGl2PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPkhvbWU8L3RpdGxlPlxuICAgIDwvSGVhZD5cbiAgICB7ZG90cy5tYXAoKHsgeCwgeSwgd2lkdGgsIHJvdGF0ZSwgY29sb3IgfSwgaSkgPT4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17YCR7eH0ke3l9JHtjb2xvcn1gfT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGtleT17YCR7eH0ke3l9JHtjb2xvcn0tdG9wYH1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICB0b3A6IGAke3l9JWAsXG4gICAgICAgICAgICBsZWZ0OiBgJHt4fSVgLFxuICAgICAgICAgICAgd2lkdGg6IGAke3dpZHRofXB4YCxcbiAgICAgICAgICAgIGhlaWdodDogJzJweCcsXG4gICAgICAgICAgICBvcGFjaXR5OiAxIC0geSAvIDEwMCxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZSgke3JvdGF0ZX1kZWcpYCxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzW2kgJSA2XSxcbiAgICAgICAgICAgIHpJbmRleDogLTFcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAga2V5PXtgJHt4fSR7eX0ke2NvbG9yfS1ib3RgfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIGJvdHRvbTogYCR7eX0lYCxcbiAgICAgICAgICAgIHJpZ2h0OiBgJHt4fSVgLFxuICAgICAgICAgICAgd2lkdGg6IGAke3dpZHRofXB4YCxcbiAgICAgICAgICAgIGhlaWdodDogJzJweCcsXG4gICAgICAgICAgICBvcGFjaXR5OiAxIC0gKDEgLSB5IC8gMTAwKSxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZSgke3JvdGF0ZX1kZWcpYCxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzW2kgJSA2XSxcbiAgICAgICAgICAgIHpJbmRleDogLTFcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApKX1cbiAgICB7cHJvZmlsZVBpY3R1cmVTdHlsZS5zdHlsZXN9XG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvXCI+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHBsYWNlU2VsZjogJ2NlbnRlcicsIGdyaWRBcmVhOiAnYmx1cmInIH19PlxuICAgICAgICA8aDE+QnJ5Y2UgS2Fsb3c8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsdXJiXCI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBFbmdpbmVlciB3b3JraW5nIG9uIHRoZSB3ZWIuIEkgYW0gcGFzc2lvbmF0ZSBhYm91dCBpbXByb3ZpbmcgZGV2ZWxvcGVyIGV4cGVyaWVuY2UsXG4gICAgICAgICAgICBjcmVhdGluZyBtYWludGFpbmFibGUgYW5kIGFjY2Vzc2libGUgYXBwbGljYXRpb25zIGF0IOKcqDxlbT5zY2FsZTwvZW0+4pyoLCBhbmQgb3BlbiBzb3VyY2VcbiAgICAgICAgICAgIHNvZnR3YXJlLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEN1cnJlbnRseSB3b3JraW5nIG9ueycgJ31cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy50YXJnZXQuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgIFRhcmdldC5jb21cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICwgbWFraW5nIGNvb2wgdGhpbmdzIHdpdGgg4pqbIFJlYWN0IGFuZCB0cmFja2luZyBkb3duIG91ciBuZXh0IHBlcmZvcm1hbmNlIGltcHJvdmVtZW50IPCfmoAuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZ3JpZCcsIGdyaWRBcmVhOiAncGljdHVyZScgfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1waWN0dXJlLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICBpbml0aWFsPXt7IHk6IDEwLCBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICBhbmltYXRlPXt7IHk6IDAsIG9wYWNpdHk6IDEgfX1cbiAgICAgICAgICAgIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMSB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtwcm9maWxlUGljdHVyZVN0eWxlLmNsYXNzTmFtZX1cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJwcm9maWxlIHBpY3R1cmVcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHN2ZyBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX0+XG4gICAgICA8ZGVmcz5cbiAgICAgICAgPGNsaXBQYXRoIGlkPVwiY2xpcFBhdGhcIj5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgc3Ryb2tlPVwibm9uZVwiXG4gICAgICAgICAgICBmaWxsPVwid2hpdGVcIlxuICAgICAgICAgICAgZD1cIk03MiAwLjk0MzM3NTY3Mjk3NDA4YTUgNSAwIDAgMSA1IDBsNTkuOTUxOTA1MjgzODMzIDM0LjYxMzI0ODY1NDA1MmE1IDUgMCAwIDEgMi41IDQuMzMwMTI3MDE4OTIyMmwwIDY5LjIyNjQ5NzMwODEwNGE1IDUgMCAwIDEgLTIuNSA0LjMzMDEyNzAxODkyMjJsLTU5Ljk1MTkwNTI4MzgzMyAzNC42MTMyNDg2NTQwNTJhNSA1IDAgMCAxIC01IDBsLTU5Ljk1MTkwNTI4MzgzMyAtMzQuNjEzMjQ4NjU0MDUyYTUgNSAwIDAgMSAtMi41IC00LjMzMDEyNzAxODkyMjJsMS4xMDI1NDI2MDcwOTI5ZS0xMyAtNjkuMjI2NDk3MzA4MTA0YTUgNSAwIDAgMSAyLjUgLTQuMzMwMTI3MDE4OTIyMlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9jbGlwUGF0aD5cbiAgICAgIDwvZGVmcz5cbiAgICA8L3N2Zz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuaGVybyB7XG4gICAgICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBwYWRkaW5nOiA1ZW07XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdibHVyYiBwaWN0dXJlJztcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMmZyO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiAxZW07XG4gICAgICAgIGdyaWQtcm93LWdhcDogMmVtO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNjY3cHgpIHtcbiAgICAgICAgLmhlcm8ge1xuICAgICAgICAgIHBhZGRpbmc6IDJlbTtcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxuICAgICAgICAgICAgJ3BpY3R1cmUnXG4gICAgICAgICAgICAnYmx1cmInO1xuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGgxIHtcbiAgICAgICAgY29sb3I6ICMzNDM0M2U7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgZm9udC1zaXplOiAzZW07XG4gICAgICAgIG1hcmdpbjogMCAwIDAuNWVtIDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wM2VtO1xuICAgICAgfVxuXG4gICAgICBoMTo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VkNmY0ZDtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC0xNDBkZWcsIHJnYmEoMjU1LCAxNzksIDE1OCwgMSkgMTAlLCByZ2JhKDIzNywgMTExLCA3NywgMSkgNjAlKTtcbiAgICAgICAgaGVpZ2h0OiA0cHg7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICB9XG5cbiAgICAgIC5ibHVyYiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgIGNvbG9yOiAjNzU3NTgzO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgICB9XG5cbiAgICAgIC5wcm9maWxlLXBpY3R1cmUtY29udGFpbmVyIHtcbiAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpKTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgcGxhY2Utc2VsZjogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgfVxuXG4gICAgICBzZWN0aW9uIHtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXX0= */\n/*@ sourceURL=/Users/bryce/code/personal-site/pages/index.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.7c75ac032dd69f951e2a.hot-update.js.map