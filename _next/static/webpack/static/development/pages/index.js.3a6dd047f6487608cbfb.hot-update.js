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
}; // makeDots();


var profilePictureStyle = {
  styles: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "795146734",
    __self: undefined
  }, ".jsx-795146734{background:center/cover url(./static/profile_pic.jpeg);-webkit-clip-path:url(#clipPath);clip-path:url(#clipPath);width:150px;height:150px;}"),
  className: "jsx-795146734"
};

var Home = function Home() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2038002017",
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
    className: "jsx-2038002017",
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
      className: "jsx-2038002017",
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
      className: "jsx-2038002017",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }));
  }), profilePictureStyle.styles, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2038002017" + " " + "hero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      placeSelf: 'center'
    },
    className: "jsx-2038002017",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-2038002017",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Bryce Kalow"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2038002017" + " " + "blurb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "I'm an engineer working on the web. Always trying to improve developer experience and create accessible applications at \u2728scale\u2728. Currently working on", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.target.com",
    target: "_blank",
    className: "jsx-2038002017",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "Target.com"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: 'grid'
    },
    className: "jsx-2038002017",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2038002017" + " " + "profile-picture-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
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
      lineNumber: 95
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    className: "jsx-2038002017",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("defs", {
    className: "jsx-2038002017",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("clipPath", {
    id: "clipPath",
    className: "jsx-2038002017",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    stroke: "none",
    fill: "white",
    d: "M72 0.94337567297408a5 5 0 0 1 5 0l59.951905283833 34.613248654052a5 5 0 0 1 2.5 4.3301270189222l0 69.226497308104a5 5 0 0 1 -2.5 4.3301270189222l-59.951905283833 34.613248654052a5 5 0 0 1 -5 0l-59.951905283833 -34.613248654052a5 5 0 0 1 -2.5 -4.3301270189222l1.1025426070929e-13 -69.226497308104a5 5 0 0 1 2.5 -4.3301270189222",
    className: "jsx-2038002017",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2038002017",
    __self: this
  }, ".hero.jsx-2038002017{max-width:800px;margin:0 auto;padding-top:5em;display:grid;grid-template-columns:3fr 2fr;grid-template-rows:1fr;grid-column-gap:1em;}h1.jsx-2038002017{color:#34343e;display:inline-block;vertical-align:middle;font-size:3em;margin:0 0 0.3em 0;-webkit-letter-spacing:-0.03em;-moz-letter-spacing:-0.03em;-ms-letter-spacing:-0.03em;letter-spacing:-0.03em;}h1.jsx-2038002017::after{content:'';background-color:#ed6f4d;height:4px;width:60%;display:block;margin-top:5px;}.blurb.jsx-2038002017{font-size:1.5em;color:#757583;font-weight:normal;}.profile-picture-container.jsx-2038002017{-webkit-filter:drop-shadow(0 2px 3px rgba(0,0,0,0.1));filter:drop-shadow(0 2px 3px rgba(0,0,0,0.1));vertical-align:middle;place-self:center;height:150px;}section.jsx-2038002017{background:white;border-radius:5px;padding:10px;margin:10px;text-align:left;display:inline-block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icnljZS9jb2RlL3BlcnNvbmFsLXNpdGUvcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1IZ0IsQUFHeUIsQUFVRixBQVNILEFBU0ssQUFNaUMsQUFPaEMsV0FyQlEsR0FUSixFQVZQLEFBNEJBLENBYUksYUF4Q0YsQUE0QkcsS0FsQkcsQUErQlQsQ0F0QkYsVUFsQkUsQ0FtQkgsQ0FzQkUsQ0FiZCxRQWxCZ0IsQUFVQSxFQW5CZ0IsQ0F5Q2QsV0EvQkcsQUFVSixLQXNCTSxVQXJCdkIsR0FwQnlCLENBVUEsT0FnQ3pCLEdBWndCLFlBN0JGLFVBOEJGLFVBN0JwQixRQThCZSxhQUNmLDhDQXRCQSIsImZpbGUiOiIvVXNlcnMvYnJ5Y2UvY29kZS9wZXJzb25hbC1zaXRlL3BhZ2VzL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XG5cbmNvbnN0IGNvbG9ycyA9IFsnI2VkNmY0ZCcsICcjZmFjYWE1JywgJyM3MWMzYWQnLCAnIzRjYTllMCcsICcjNTQ4OTljJywgJyM2MmIzZTMnLCAnI2M2ZGNkYSddO1xuXG5jb25zdCBtYWtlUmFuZG9tSW50ID0gKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikgPT4ge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbn07XG5cbmNvbnN0IG1ha2VSYW5kb21GbG9hdCA9IChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpID0+IHtcbiAgcmV0dXJuIChNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKS50b0ZpeGVkKDEpO1xufTtcblxuY29uc3QgcGlja1JhbmRvbUl0ZW0gPSAoaXRlbXM6IGFueVtdKSA9PiB7XG4gIHJldHVybiBpdGVtc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpdGVtcy5sZW5ndGgpXTtcbn07XG5cbmNvbnN0IGRvdHMgPSBbXTtcblxuY29uc3QgbWFrZURvdHMgPSAoKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMjU7IGkrKykge1xuICAgIGRvdHMucHVzaCh7XG4gICAgICB4OiBtYWtlUmFuZG9tSW50KDAsIDEwMCksXG4gICAgICB5OiBtYWtlUmFuZG9tSW50KDAsIDEwMCksXG4gICAgICB3aWR0aDogbWFrZVJhbmRvbUludCgxMCwgMjApLFxuICAgICAgcm90YXRlOiBtYWtlUmFuZG9tSW50KDAsIDE4MCksXG4gICAgICBjb2xvcjogY29sb3JzW2kgJSA2XVxuICAgIH0pO1xuICB9XG59O1xuXG4vLyBtYWtlRG90cygpO1xuXG5jb25zdCBwcm9maWxlUGljdHVyZVN0eWxlID0gY3NzLnJlc29sdmVgXG4gIGJhY2tncm91bmQ6IGNlbnRlci9jb3ZlciB1cmwoLi9zdGF0aWMvcHJvZmlsZV9waWMuanBlZyk7XG4gIGNsaXAtcGF0aDogdXJsKCNjbGlwUGF0aCk7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbmA7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+SG9tZTwvdGl0bGU+XG4gICAgPC9IZWFkPlxuICAgIHtkb3RzLm1hcCgoeyB4LCB5LCB3aWR0aCwgcm90YXRlLCBjb2xvciB9LCBpKSA9PiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtgJHt4fSR7eX0ke2NvbG9yfWB9PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAga2V5PXtgJHt4fSR7eX0ke2NvbG9yfS10b3BgfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIHRvcDogYCR7eX0lYCxcbiAgICAgICAgICAgIGxlZnQ6IGAke3h9JWAsXG4gICAgICAgICAgICB3aWR0aDogYCR7d2lkdGh9cHhgLFxuICAgICAgICAgICAgaGVpZ2h0OiAnMnB4JyxcbiAgICAgICAgICAgIG9wYWNpdHk6IDEgLSB5IC8gMTAwLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBgcm90YXRlKCR7cm90YXRlfWRlZylgLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnNbaSAlIDZdLFxuICAgICAgICAgICAgekluZGV4OiAtMVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBrZXk9e2Ake3h9JHt5fSR7Y29sb3J9LWJvdGB9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgYm90dG9tOiBgJHt5fSVgLFxuICAgICAgICAgICAgcmlnaHQ6IGAke3h9JWAsXG4gICAgICAgICAgICB3aWR0aDogYCR7d2lkdGh9cHhgLFxuICAgICAgICAgICAgaGVpZ2h0OiAnMnB4JyxcbiAgICAgICAgICAgIG9wYWNpdHk6IDEgLSAoMSAtIHkgLyAxMDApLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBgcm90YXRlKCR7cm90YXRlfWRlZylgLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnNbaSAlIDZdLFxuICAgICAgICAgICAgekluZGV4OiAtMVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICkpfVxuICAgIHtwcm9maWxlUGljdHVyZVN0eWxlLnN0eWxlc31cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm9cIj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgcGxhY2VTZWxmOiAnY2VudGVyJyB9fT5cbiAgICAgICAgPGgxPkJyeWNlIEthbG93PC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibHVyYlwiPlxuICAgICAgICAgIEknbSBhbiBlbmdpbmVlciB3b3JraW5nIG9uIHRoZSB3ZWIuIEFsd2F5cyB0cnlpbmcgdG8gaW1wcm92ZSBkZXZlbG9wZXIgZXhwZXJpZW5jZSBhbmRcbiAgICAgICAgICBjcmVhdGUgYWNjZXNzaWJsZSBhcHBsaWNhdGlvbnMgYXQg4pyoc2NhbGXinKguIEN1cnJlbnRseSB3b3JraW5nIG9ueycgJ31cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cudGFyZ2V0LmNvbVwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgVGFyZ2V0LmNvbVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2dyaWQnIH19PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2ZpbGUtcGljdHVyZS1jb250YWluZXJcIj5cbiAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgaW5pdGlhbD17eyB5OiAxMCwgb3BhY2l0eTogMCB9fVxuICAgICAgICAgICAgYW5pbWF0ZT17eyB5OiAwLCBvcGFjaXR5OiAxIH19XG4gICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjEgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17cHJvZmlsZVBpY3R1cmVTdHlsZS5jbGFzc05hbWV9XG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwicHJvZmlsZSBwaWN0dXJlXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxzdmc+XG4gICAgICA8ZGVmcz5cbiAgICAgICAgPGNsaXBQYXRoIGlkPVwiY2xpcFBhdGhcIj5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgc3Ryb2tlPVwibm9uZVwiXG4gICAgICAgICAgICBmaWxsPVwid2hpdGVcIlxuICAgICAgICAgICAgZD1cIk03MiAwLjk0MzM3NTY3Mjk3NDA4YTUgNSAwIDAgMSA1IDBsNTkuOTUxOTA1MjgzODMzIDM0LjYxMzI0ODY1NDA1MmE1IDUgMCAwIDEgMi41IDQuMzMwMTI3MDE4OTIyMmwwIDY5LjIyNjQ5NzMwODEwNGE1IDUgMCAwIDEgLTIuNSA0LjMzMDEyNzAxODkyMjJsLTU5Ljk1MTkwNTI4MzgzMyAzNC42MTMyNDg2NTQwNTJhNSA1IDAgMCAxIC01IDBsLTU5Ljk1MTkwNTI4MzgzMyAtMzQuNjEzMjQ4NjU0MDUyYTUgNSAwIDAgMSAtMi41IC00LjMzMDEyNzAxODkyMjJsMS4xMDI1NDI2MDcwOTI5ZS0xMyAtNjkuMjI2NDk3MzA4MTA0YTUgNSAwIDAgMSAyLjUgLTQuMzMwMTI3MDE4OTIyMlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9jbGlwUGF0aD5cbiAgICAgIDwvZGVmcz5cbiAgICA8L3N2Zz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuaGVybyB7XG4gICAgICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBwYWRkaW5nLXRvcDogNWVtO1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAyZnI7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICAgICAgICBncmlkLWNvbHVtbi1nYXA6IDFlbTtcbiAgICAgIH1cblxuICAgICAgaDEge1xuICAgICAgICBjb2xvcjogIzM0MzQzZTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBmb250LXNpemU6IDNlbTtcbiAgICAgICAgbWFyZ2luOiAwIDAgMC4zZW0gMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAzZW07XG4gICAgICB9XG5cbiAgICAgIGgxOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWQ2ZjRkO1xuICAgICAgICBoZWlnaHQ6IDRweDtcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgIH1cblxuICAgICAgLmJsdXJiIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgY29sb3I6ICM3NTc1ODM7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICB9XG5cbiAgICAgIC5wcm9maWxlLXBpY3R1cmUtY29udGFpbmVyIHtcbiAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpKTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgcGxhY2Utc2VsZjogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgfVxuXG4gICAgICBzZWN0aW9uIHtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXX0= */\n/*@ sourceURL=/Users/bryce/code/personal-site/pages/index.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.3a6dd047f6487608cbfb.hot-update.js.map