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
    className: "jsx-2364762764",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-2364762764",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
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
        lineNumber: 50
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
      className: "jsx-2364762764",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
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
      className: "jsx-2364762764",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }));
  }), profilePictureStyle.styles, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2364762764" + " " + "hero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      placeSelf: 'center'
    },
    className: "jsx-2364762764",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-2364762764",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Bryce Kalow"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2364762764" + " " + "blurb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2364762764",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "Engineer working on the web. I am passionate about improving developer experience, creating maintainable and accessible applications at \u2728", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("em", {
    className: "jsx-2364762764",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "scale"), "\u2728, and open source software."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2364762764",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "Currently working on", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.target.com",
    target: "_blank",
    className: "jsx-2364762764",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "Target.com"), ", making cool things with \u269B React and tracking down our next performance improvement \uD83D\uDE80."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: 'grid'
    },
    className: "jsx-2364762764",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2364762764" + " " + "profile-picture-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
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
      lineNumber: 102
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    className: "jsx-2364762764",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("defs", {
    className: "jsx-2364762764",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("clipPath", {
    id: "clipPath",
    className: "jsx-2364762764",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    stroke: "none",
    fill: "white",
    d: "M72 0.94337567297408a5 5 0 0 1 5 0l59.951905283833 34.613248654052a5 5 0 0 1 2.5 4.3301270189222l0 69.226497308104a5 5 0 0 1 -2.5 4.3301270189222l-59.951905283833 34.613248654052a5 5 0 0 1 -5 0l-59.951905283833 -34.613248654052a5 5 0 0 1 -2.5 -4.3301270189222l1.1025426070929e-13 -69.226497308104a5 5 0 0 1 2.5 -4.3301270189222",
    className: "jsx-2364762764",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2364762764",
    __self: this
  }, ".hero.jsx-2364762764{max-width:800px;margin:0 auto;padding-top:5em;display:grid;grid-template-columns:3fr 2fr;grid-template-rows:1fr;grid-column-gap:1em;}h1.jsx-2364762764{color:#34343e;display:inline-block;vertical-align:middle;font-size:3em;margin:0 0 0.5em 0;-webkit-letter-spacing:-0.03em;-moz-letter-spacing:-0.03em;-ms-letter-spacing:-0.03em;letter-spacing:-0.03em;}h1.jsx-2364762764::after{content:'';background-color:#ed6f4d;background:linear-gradient(-140deg,rgba(255,179,158,1) 10%,rgba(237,111,77,1) 60%);height:4px;width:60%;display:block;margin-top:5px;}.blurb.jsx-2364762764{font-size:1.5em;color:#757583;font-weight:normal;}p.jsx-2364762764{margin:0;margin-bottom:1em;}.profile-picture-container.jsx-2364762764{-webkit-filter:drop-shadow(0 2px 3px rgba(0,0,0,0.1));filter:drop-shadow(0 2px 3px rgba(0,0,0,0.1));vertical-align:middle;place-self:center;height:150px;}section.jsx-2364762764{background:white;border-radius:5px;padding:10px;margin:10px;text-align:left;display:inline-block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icnljZS9jb2RlL3BlcnNvbmFsLXNpdGUvcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBIZ0IsQUFHeUIsQUFVRixBQVNILEFBVUssQUFNUCxBQUt3QyxBQU9oQyxTQVhDLEVBaEJPLEdBVEosRUFWUCxBQTZCQSxDQWtCSSxVQVhwQixHQW5Da0IsQUE2QkcsS0FuQkcsQUFxQ1QsQ0E1QjhFLFVBbEI5RSxFQStDRCxDQWxCZCxRQW5CZ0IsRUFUZ0IsQ0ErQ2QsV0FyQ0csS0FzQ0UsYUEvQ0UsQ0FVQSxPQXNDekIsR0Fad0IsWUFuQ0YsT0FnQlQsR0FvQk8sUUFuQlIsRUFoQlosUUFpQmdCLEFBbUJELGFBQ2YsQ0FuQmlCLGVBQ2pCLDhCQVZBIiwiZmlsZSI6Ii9Vc2Vycy9icnljZS9jb2RlL3BlcnNvbmFsLXNpdGUvcGFnZXMvaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJztcblxuY29uc3QgY29sb3JzID0gWycjZWQ2ZjRkJywgJyNmYWNhYTUnLCAnIzcxYzNhZCcsICcjNGNhOWUwJywgJyM1NDg5OWMnLCAnIzYyYjNlMycsICcjYzZkY2RhJ107XG5cbmNvbnN0IG1ha2VSYW5kb21JbnQgPSAobWluOiBudW1iZXIsIG1heDogbnVtYmVyKSA9PiB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xufTtcblxuY29uc3QgbWFrZVJhbmRvbUZsb2F0ID0gKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikgPT4ge1xuICByZXR1cm4gKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pLnRvRml4ZWQoMSk7XG59O1xuXG5jb25zdCBwaWNrUmFuZG9tSXRlbSA9IChpdGVtczogYW55W10pID0+IHtcbiAgcmV0dXJuIGl0ZW1zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGl0ZW1zLmxlbmd0aCldO1xufTtcblxuY29uc3QgZG90cyA9IFtdO1xuXG5jb25zdCBtYWtlRG90cyA9ICgpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNTsgaSsrKSB7XG4gICAgZG90cy5wdXNoKHtcbiAgICAgIHg6IG1ha2VSYW5kb21JbnQoMCwgMTAwKSxcbiAgICAgIHk6IG1ha2VSYW5kb21JbnQoMCwgMTAwKSxcbiAgICAgIHdpZHRoOiBtYWtlUmFuZG9tSW50KDEwLCAyMCksXG4gICAgICByb3RhdGU6IG1ha2VSYW5kb21JbnQoMCwgMTgwKSxcbiAgICAgIGNvbG9yOiBjb2xvcnNbaSAlIDZdXG4gICAgfSk7XG4gIH1cbn07XG5cbm1ha2VEb3RzKCk7XG5cbmNvbnN0IHByb2ZpbGVQaWN0dXJlU3R5bGUgPSBjc3MucmVzb2x2ZWBcbiAgYmFja2dyb3VuZDogY2VudGVyL2NvdmVyIHVybCguL3N0YXRpYy9wcm9maWxlX3BpYy5qcGVnKTtcbiAgY2xpcC1wYXRoOiB1cmwoI2NsaXBQYXRoKTtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuYDtcblxuY29uc3QgSG9tZSA9ICgpID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5Ib21lPC90aXRsZT5cbiAgICA8L0hlYWQ+XG4gICAge2RvdHMubWFwKCh7IHgsIHksIHdpZHRoLCByb3RhdGUsIGNvbG9yIH0sIGkpID0+IChcbiAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2Ake3h9JHt5fSR7Y29sb3J9YH0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBrZXk9e2Ake3h9JHt5fSR7Y29sb3J9LXRvcGB9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgdG9wOiBgJHt5fSVgLFxuICAgICAgICAgICAgbGVmdDogYCR7eH0lYCxcbiAgICAgICAgICAgIHdpZHRoOiBgJHt3aWR0aH1weGAsXG4gICAgICAgICAgICBoZWlnaHQ6ICcycHgnLFxuICAgICAgICAgICAgb3BhY2l0eTogMSAtIHkgLyAxMDAsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGUoJHtyb3RhdGV9ZGVnKWAsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yc1tpICUgNl0sXG4gICAgICAgICAgICB6SW5kZXg6IC0xXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGtleT17YCR7eH0ke3l9JHtjb2xvcn0tYm90YH1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICBib3R0b206IGAke3l9JWAsXG4gICAgICAgICAgICByaWdodDogYCR7eH0lYCxcbiAgICAgICAgICAgIHdpZHRoOiBgJHt3aWR0aH1weGAsXG4gICAgICAgICAgICBoZWlnaHQ6ICcycHgnLFxuICAgICAgICAgICAgb3BhY2l0eTogMSAtICgxIC0geSAvIDEwMCksXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGUoJHtyb3RhdGV9ZGVnKWAsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yc1tpICUgNl0sXG4gICAgICAgICAgICB6SW5kZXg6IC0xXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKSl9XG4gICAge3Byb2ZpbGVQaWN0dXJlU3R5bGUuc3R5bGVzfVxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyb1wiPlxuICAgICAgPGRpdiBzdHlsZT17eyBwbGFjZVNlbGY6ICdjZW50ZXInIH19PlxuICAgICAgICA8aDE+QnJ5Y2UgS2Fsb3c8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsdXJiXCI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBFbmdpbmVlciB3b3JraW5nIG9uIHRoZSB3ZWIuIEkgYW0gcGFzc2lvbmF0ZSBhYm91dCBpbXByb3ZpbmcgZGV2ZWxvcGVyIGV4cGVyaWVuY2UsXG4gICAgICAgICAgICBjcmVhdGluZyBtYWludGFpbmFibGUgYW5kIGFjY2Vzc2libGUgYXBwbGljYXRpb25zIGF0IOKcqDxlbT5zY2FsZTwvZW0+4pyoLCBhbmQgb3BlbiBzb3VyY2VcbiAgICAgICAgICAgIHNvZnR3YXJlLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEN1cnJlbnRseSB3b3JraW5nIG9ueycgJ31cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy50YXJnZXQuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgIFRhcmdldC5jb21cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICwgbWFraW5nIGNvb2wgdGhpbmdzIHdpdGgg4pqbIFJlYWN0IGFuZCB0cmFja2luZyBkb3duIG91ciBuZXh0IHBlcmZvcm1hbmNlIGltcHJvdmVtZW50IPCfmoAuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZ3JpZCcgfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1waWN0dXJlLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICBpbml0aWFsPXt7IHk6IDEwLCBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICBhbmltYXRlPXt7IHk6IDAsIG9wYWNpdHk6IDEgfX1cbiAgICAgICAgICAgIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMSB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtwcm9maWxlUGljdHVyZVN0eWxlLmNsYXNzTmFtZX1cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJwcm9maWxlIHBpY3R1cmVcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHN2Zz5cbiAgICAgIDxkZWZzPlxuICAgICAgICA8Y2xpcFBhdGggaWQ9XCJjbGlwUGF0aFwiPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBzdHJva2U9XCJub25lXCJcbiAgICAgICAgICAgIGZpbGw9XCJ3aGl0ZVwiXG4gICAgICAgICAgICBkPVwiTTcyIDAuOTQzMzc1NjcyOTc0MDhhNSA1IDAgMCAxIDUgMGw1OS45NTE5MDUyODM4MzMgMzQuNjEzMjQ4NjU0MDUyYTUgNSAwIDAgMSAyLjUgNC4zMzAxMjcwMTg5MjIybDAgNjkuMjI2NDk3MzA4MTA0YTUgNSAwIDAgMSAtMi41IDQuMzMwMTI3MDE4OTIyMmwtNTkuOTUxOTA1MjgzODMzIDM0LjYxMzI0ODY1NDA1MmE1IDUgMCAwIDEgLTUgMGwtNTkuOTUxOTA1MjgzODMzIC0zNC42MTMyNDg2NTQwNTJhNSA1IDAgMCAxIC0yLjUgLTQuMzMwMTI3MDE4OTIyMmwxLjEwMjU0MjYwNzA5MjllLTEzIC02OS4yMjY0OTczMDgxMDRhNSA1IDAgMCAxIDIuNSAtNC4zMzAxMjcwMTg5MjIyXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2NsaXBQYXRoPlxuICAgICAgPC9kZWZzPlxuICAgIDwvc3ZnPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5oZXJvIHtcbiAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIHBhZGRpbmctdG9wOiA1ZW07XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDJmcjtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gICAgICAgIGdyaWQtY29sdW1uLWdhcDogMWVtO1xuICAgICAgfVxuXG4gICAgICBoMSB7XG4gICAgICAgIGNvbG9yOiAjMzQzNDNlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgICAgICBtYXJnaW46IDAgMCAwLjVlbSAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDNlbTtcbiAgICAgIH1cblxuICAgICAgaDE6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZDZmNGQ7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtMTQwZGVnLCByZ2JhKDI1NSwgMTc5LCAxNTgsIDEpIDEwJSwgcmdiYSgyMzcsIDExMSwgNzcsIDEpIDYwJSk7XG4gICAgICAgIGhlaWdodDogNHB4O1xuICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgfVxuXG4gICAgICAuYmx1cmIge1xuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICBjb2xvcjogIzc1NzU4MztcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIH1cblxuICAgICAgcCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgICAgfVxuXG4gICAgICAucHJvZmlsZS1waWN0dXJlLWNvbnRhaW5lciB7XG4gICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKSk7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIHBsYWNlLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgIH1cblxuICAgICAgc2VjdGlvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl19 */\n/*@ sourceURL=/Users/bryce/code/personal-site/pages/index.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.fd2f196e899247e421fe.hot-update.js.map