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
    className: "jsx-625621024",
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
    className: "jsx-625621024",
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
      className: "jsx-625621024",
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
      className: "jsx-625621024",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }));
  }), profilePictureStyle.styles, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-625621024" + " " + "hero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      placeSelf: 'center'
    },
    className: "jsx-625621024",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-625621024",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Bryce Kalow"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-625621024" + " " + "blurb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-625621024",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "Engineer working on the web. I am passionate about improving developer experience, creating maintainable and accessible applications at \u2728", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("em", {
    className: "jsx-625621024",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "scale"), "\u2728, and open source software."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-625621024",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "Currently working on", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.target.com",
    target: "_blank",
    className: "jsx-625621024",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "Target.com"), ", making cool things with \u269B React and tracking down our next performance improvement."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: 'grid'
    },
    className: "jsx-625621024",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-625621024" + " " + "profile-picture-container",
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
    className: "jsx-625621024",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("defs", {
    className: "jsx-625621024",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("clipPath", {
    id: "clipPath",
    className: "jsx-625621024",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    stroke: "none",
    fill: "white",
    d: "M72 0.94337567297408a5 5 0 0 1 5 0l59.951905283833 34.613248654052a5 5 0 0 1 2.5 4.3301270189222l0 69.226497308104a5 5 0 0 1 -2.5 4.3301270189222l-59.951905283833 34.613248654052a5 5 0 0 1 -5 0l-59.951905283833 -34.613248654052a5 5 0 0 1 -2.5 -4.3301270189222l1.1025426070929e-13 -69.226497308104a5 5 0 0 1 2.5 -4.3301270189222",
    className: "jsx-625621024",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "625621024",
    __self: this
  }, ".hero.jsx-625621024{max-width:800px;margin:0 auto;padding-top:5em;display:grid;grid-template-columns:3fr 2fr;grid-template-rows:1fr;grid-column-gap:1em;}h1.jsx-625621024{color:#34343e;display:inline-block;vertical-align:middle;font-size:3em;margin:0 0 0.3em 0;-webkit-letter-spacing:-0.03em;-moz-letter-spacing:-0.03em;-ms-letter-spacing:-0.03em;letter-spacing:-0.03em;}h1.jsx-625621024::after{content:'';background-color:#ed6f4d;height:4px;width:60%;display:block;margin-top:5px;}.blurb.jsx-625621024{font-size:1.5em;color:#757583;font-weight:normal;}p.jsx-625621024{margin:0;margin-bottom:1em;}.profile-picture-container.jsx-625621024{-webkit-filter:drop-shadow(0 2px 3px rgba(0,0,0,0.1));filter:drop-shadow(0 2px 3px rgba(0,0,0,0.1));vertical-align:middle;place-self:center;height:150px;}section.jsx-625621024{background:white;border-radius:5px;padding:10px;margin:10px;text-align:left;display:inline-block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icnljZS9jb2RlL3BlcnNvbmFsLXNpdGUvcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBIZ0IsQUFHeUIsQUFVRixBQVNILEFBU0ssQUFNUCxBQUt3QyxBQU9oQyxTQVhDLEVBZk8sR0FUSixFQVZQLEFBNEJBLENBa0JJLFVBWHBCLEdBbENrQixBQTRCRyxLQWxCRyxBQW9DVCxDQTNCRixVQWxCRSxDQW1CSCxDQTJCRSxDQWxCZCxRQWxCZ0IsQUFVQSxFQW5CZ0IsQ0E4Q2QsV0FwQ0csQUFVSixLQTJCTSxVQTFCdkIsR0FwQnlCLENBVUEsT0FxQ3pCLEdBWndCLFlBbENGLFVBbUNGLFVBbENwQixRQW1DZSxhQUNmLDhDQTNCQSIsImZpbGUiOiIvVXNlcnMvYnJ5Y2UvY29kZS9wZXJzb25hbC1zaXRlL3BhZ2VzL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XG5cbmNvbnN0IGNvbG9ycyA9IFsnI2VkNmY0ZCcsICcjZmFjYWE1JywgJyM3MWMzYWQnLCAnIzRjYTllMCcsICcjNTQ4OTljJywgJyM2MmIzZTMnLCAnI2M2ZGNkYSddO1xuXG5jb25zdCBtYWtlUmFuZG9tSW50ID0gKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikgPT4ge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbn07XG5cbmNvbnN0IG1ha2VSYW5kb21GbG9hdCA9IChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpID0+IHtcbiAgcmV0dXJuIChNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKS50b0ZpeGVkKDEpO1xufTtcblxuY29uc3QgcGlja1JhbmRvbUl0ZW0gPSAoaXRlbXM6IGFueVtdKSA9PiB7XG4gIHJldHVybiBpdGVtc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpdGVtcy5sZW5ndGgpXTtcbn07XG5cbmNvbnN0IGRvdHMgPSBbXTtcblxuY29uc3QgbWFrZURvdHMgPSAoKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMjU7IGkrKykge1xuICAgIGRvdHMucHVzaCh7XG4gICAgICB4OiBtYWtlUmFuZG9tSW50KDAsIDEwMCksXG4gICAgICB5OiBtYWtlUmFuZG9tSW50KDAsIDEwMCksXG4gICAgICB3aWR0aDogbWFrZVJhbmRvbUludCgxMCwgMjApLFxuICAgICAgcm90YXRlOiBtYWtlUmFuZG9tSW50KDAsIDE4MCksXG4gICAgICBjb2xvcjogY29sb3JzW2kgJSA2XVxuICAgIH0pO1xuICB9XG59O1xuXG4vLyBtYWtlRG90cygpO1xuXG5jb25zdCBwcm9maWxlUGljdHVyZVN0eWxlID0gY3NzLnJlc29sdmVgXG4gIGJhY2tncm91bmQ6IGNlbnRlci9jb3ZlciB1cmwoLi9zdGF0aWMvcHJvZmlsZV9waWMuanBlZyk7XG4gIGNsaXAtcGF0aDogdXJsKCNjbGlwUGF0aCk7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbmA7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+SG9tZTwvdGl0bGU+XG4gICAgPC9IZWFkPlxuICAgIHtkb3RzLm1hcCgoeyB4LCB5LCB3aWR0aCwgcm90YXRlLCBjb2xvciB9LCBpKSA9PiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtgJHt4fSR7eX0ke2NvbG9yfWB9PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAga2V5PXtgJHt4fSR7eX0ke2NvbG9yfS10b3BgfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIHRvcDogYCR7eX0lYCxcbiAgICAgICAgICAgIGxlZnQ6IGAke3h9JWAsXG4gICAgICAgICAgICB3aWR0aDogYCR7d2lkdGh9cHhgLFxuICAgICAgICAgICAgaGVpZ2h0OiAnMnB4JyxcbiAgICAgICAgICAgIG9wYWNpdHk6IDEgLSB5IC8gMTAwLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBgcm90YXRlKCR7cm90YXRlfWRlZylgLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnNbaSAlIDZdLFxuICAgICAgICAgICAgekluZGV4OiAtMVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBrZXk9e2Ake3h9JHt5fSR7Y29sb3J9LWJvdGB9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgYm90dG9tOiBgJHt5fSVgLFxuICAgICAgICAgICAgcmlnaHQ6IGAke3h9JWAsXG4gICAgICAgICAgICB3aWR0aDogYCR7d2lkdGh9cHhgLFxuICAgICAgICAgICAgaGVpZ2h0OiAnMnB4JyxcbiAgICAgICAgICAgIG9wYWNpdHk6IDEgLSAoMSAtIHkgLyAxMDApLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBgcm90YXRlKCR7cm90YXRlfWRlZylgLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnNbaSAlIDZdLFxuICAgICAgICAgICAgekluZGV4OiAtMVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICkpfVxuICAgIHtwcm9maWxlUGljdHVyZVN0eWxlLnN0eWxlc31cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm9cIj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgcGxhY2VTZWxmOiAnY2VudGVyJyB9fT5cbiAgICAgICAgPGgxPkJyeWNlIEthbG93PC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibHVyYlwiPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgRW5naW5lZXIgd29ya2luZyBvbiB0aGUgd2ViLiBJIGFtIHBhc3Npb25hdGUgYWJvdXQgaW1wcm92aW5nIGRldmVsb3BlciBleHBlcmllbmNlLFxuICAgICAgICAgICAgY3JlYXRpbmcgbWFpbnRhaW5hYmxlIGFuZCBhY2Nlc3NpYmxlIGFwcGxpY2F0aW9ucyBhdCDinKg8ZW0+c2NhbGU8L2VtPuKcqCwgYW5kIG9wZW4gc291cmNlXG4gICAgICAgICAgICBzb2Z0d2FyZS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBDdXJyZW50bHkgd29ya2luZyBvbnsnICd9XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cudGFyZ2V0LmNvbVwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICBUYXJnZXQuY29tXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAsIG1ha2luZyBjb29sIHRoaW5ncyB3aXRoIOKamyBSZWFjdCBhbmQgdHJhY2tpbmcgZG93biBvdXIgbmV4dCBwZXJmb3JtYW5jZSBpbXByb3ZlbWVudC5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdncmlkJyB9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLXBpY3R1cmUtY29udGFpbmVyXCI+XG4gICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgIGluaXRpYWw9e3sgeTogMTAsIG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgIGFuaW1hdGU9e3sgeTogMCwgb3BhY2l0eTogMSB9fVxuICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4xIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9e3Byb2ZpbGVQaWN0dXJlU3R5bGUuY2xhc3NOYW1lfVxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cInByb2ZpbGUgcGljdHVyZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8c3ZnPlxuICAgICAgPGRlZnM+XG4gICAgICAgIDxjbGlwUGF0aCBpZD1cImNsaXBQYXRoXCI+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIHN0cm9rZT1cIm5vbmVcIlxuICAgICAgICAgICAgZmlsbD1cIndoaXRlXCJcbiAgICAgICAgICAgIGQ9XCJNNzIgMC45NDMzNzU2NzI5NzQwOGE1IDUgMCAwIDEgNSAwbDU5Ljk1MTkwNTI4MzgzMyAzNC42MTMyNDg2NTQwNTJhNSA1IDAgMCAxIDIuNSA0LjMzMDEyNzAxODkyMjJsMCA2OS4yMjY0OTczMDgxMDRhNSA1IDAgMCAxIC0yLjUgNC4zMzAxMjcwMTg5MjIybC01OS45NTE5MDUyODM4MzMgMzQuNjEzMjQ4NjU0MDUyYTUgNSAwIDAgMSAtNSAwbC01OS45NTE5MDUyODM4MzMgLTM0LjYxMzI0ODY1NDA1MmE1IDUgMCAwIDEgLTIuNSAtNC4zMzAxMjcwMTg5MjIybDEuMTAyNTQyNjA3MDkyOWUtMTMgLTY5LjIyNjQ5NzMwODEwNGE1IDUgMCAwIDEgMi41IC00LjMzMDEyNzAxODkyMjJcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvY2xpcFBhdGg+XG4gICAgICA8L2RlZnM+XG4gICAgPC9zdmc+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmhlcm8ge1xuICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgcGFkZGluZy10b3A6IDVlbTtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMmZyO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiAxZW07XG4gICAgICB9XG5cbiAgICAgIGgxIHtcbiAgICAgICAgY29sb3I6ICMzNDM0M2U7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgZm9udC1zaXplOiAzZW07XG4gICAgICAgIG1hcmdpbjogMCAwIDAuM2VtIDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wM2VtO1xuICAgICAgfVxuXG4gICAgICBoMTo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VkNmY0ZDtcbiAgICAgICAgaGVpZ2h0OiA0cHg7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICB9XG5cbiAgICAgIC5ibHVyYiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgIGNvbG9yOiAjNzU3NTgzO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgfVxuXG4gICAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgICB9XG5cbiAgICAgIC5wcm9maWxlLXBpY3R1cmUtY29udGFpbmVyIHtcbiAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEpKTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgcGxhY2Utc2VsZjogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgfVxuXG4gICAgICBzZWN0aW9uIHtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXX0= */\n/*@ sourceURL=/Users/bryce/code/personal-site/pages/index.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.357554035cf2d1525a80.hot-update.js.map