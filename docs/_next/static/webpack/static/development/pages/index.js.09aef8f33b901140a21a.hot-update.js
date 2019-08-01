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
    id: "1946953225",
    __self: undefined
  }, ".jsx-1946953225{background:center/cover url(./static/profile_pic.jpeg);-webkit-clip-path:url(#clipPath);clip-path:url(#clipPath);width:150px;height:170px;display:inline-block;}"),
  className: "jsx-1946953225"
};

var Home = function Home() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-435325605",
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
    className: "jsx-435325605",
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
      className: "jsx-435325605",
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
      className: "jsx-435325605",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }));
  }), profilePictureStyle.styles, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-435325605" + " " + "hero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      alignSelf: 'center',
      justifySelf: 'center'
    },
    className: "jsx-435325605",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-435325605",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "Bryce Kalow"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-435325605" + " " + "blurb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "Engineer")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-435325605",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-435325605" + " " + "profile-picture-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
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
      lineNumber: 90
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    className: "jsx-435325605",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("defs", {
    className: "jsx-435325605",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("clipPath", {
    id: "clipPath",
    className: "jsx-435325605",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    stroke: "none",
    fill: "white",
    d: "M72 0.94337567297408a5 5 0 0 1 5 0l59.951905283833 34.613248654052a5 5 0 0 1 2.5 4.3301270189222l0 69.226497308104a5 5 0 0 1 -2.5 4.3301270189222l-59.951905283833 34.613248654052a5 5 0 0 1 -5 0l-59.951905283833 -34.613248654052a5 5 0 0 1 -2.5 -4.3301270189222l1.1025426070929e-13 -69.226497308104a5 5 0 0 1 2.5 -4.3301270189222",
    className: "jsx-435325605",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "435325605",
    __self: this
  }, ".hero.jsx-435325605{max-width:800px;margin:0 auto;padding-top:5em;display:grid;grid-template-columns:3fr 2fr;grid-template-rows:1fr;}h1.jsx-435325605{color:#34343e;display:inline-block;vertical-align:middle;font-size:3em;margin:0 0 0.3em 0;-webkit-letter-spacing:-0.03em;-moz-letter-spacing:-0.03em;-ms-letter-spacing:-0.03em;letter-spacing:-0.03em;}.blurb.jsx-435325605{font-size:1.5em;color:#757583;font-weight:normal;}h1.jsx-435325605::first-letter{margin-left:-0.1em;}h1.jsx-435325605::after{content:'';background-color:#ed6f4d;height:4px;width:60%;display:block;margin-top:5px;}.profile-picture-container.jsx-435325605{-webkit-filter:drop-shadow(0 2px 3px rgba(0,0,0,0.1));filter:drop-shadow(0 2px 3px rgba(0,0,0,0.1));display:inline-block;vertical-align:middle;margin:0 auto;}section.jsx-435325605{background:white;border-radius:5px;padding:10px;margin:10px;text-align:left;display:inline-block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icnljZS9jb2RlL3BlcnNvbmFsLXNpdGUvcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThHZ0IsQUFHeUIsQUFTRixBQVNFLEFBTUcsQUFJUixBQVNzQyxBQU9oQyxXQWZRLEdBbkJKLEVBVFAsQUFrQkEsQ0EwQkksRUFwQnBCLFdBdkJrQixBQWtCRyxLQVRHLEFBbUNULENBaEJGLFVBM0JFLENBNEJILENBZ0JFLENBMUJkLFFBVGdCLEFBb0JBLEVBNUJnQixDQTRDZCxXQW5DRyxBQW9CSixLQWdCTSxVQWZ2QixHQTdCeUIsQ0FTQSxPQW9DekIsR0FadUIsWUFoQ3ZCLFNBaUN3QixzQkFDUixjQUNoQiwwQ0ExQkEiLCJmaWxlIjoiL1VzZXJzL2JyeWNlL2NvZGUvcGVyc29uYWwtc2l0ZS9wYWdlcy9pbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBjc3MgZnJvbSAnc3R5bGVkLWpzeC9jc3MnO1xuXG5jb25zdCBjb2xvcnMgPSBbJyNlZDZmNGQnLCAnI2ZhY2FhNScsICcjNzFjM2FkJywgJyM0Y2E5ZTAnLCAnIzU0ODk5YycsICcjNjJiM2UzJywgJyNjNmRjZGEnXTtcblxuY29uc3QgbWFrZVJhbmRvbUludCA9IChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpID0+IHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG59O1xuXG5jb25zdCBtYWtlUmFuZG9tRmxvYXQgPSAobWluOiBudW1iZXIsIG1heDogbnVtYmVyKSA9PiB7XG4gIHJldHVybiAoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbikudG9GaXhlZCgxKTtcbn07XG5cbmNvbnN0IHBpY2tSYW5kb21JdGVtID0gKGl0ZW1zOiBhbnlbXSkgPT4ge1xuICByZXR1cm4gaXRlbXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogaXRlbXMubGVuZ3RoKV07XG59O1xuXG5jb25zdCBkb3RzID0gW107XG5cbmNvbnN0IG1ha2VEb3RzID0gKCkgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDI1OyBpKyspIHtcbiAgICBkb3RzLnB1c2goe1xuICAgICAgeDogbWFrZVJhbmRvbUludCgwLCAxMDApLFxuICAgICAgeTogbWFrZVJhbmRvbUludCgwLCAxMDApLFxuICAgICAgd2lkdGg6IG1ha2VSYW5kb21JbnQoMTAsIDIwKSxcbiAgICAgIHJvdGF0ZTogbWFrZVJhbmRvbUludCgwLCAxODApLFxuICAgICAgY29sb3I6IGNvbG9yc1tpICUgNl1cbiAgICB9KTtcbiAgfVxufTtcblxuLy8gbWFrZURvdHMoKTtcblxuY29uc3QgcHJvZmlsZVBpY3R1cmVTdHlsZSA9IGNzcy5yZXNvbHZlYFxuICBiYWNrZ3JvdW5kOiBjZW50ZXIvY292ZXIgdXJsKC4vc3RhdGljL3Byb2ZpbGVfcGljLmpwZWcpO1xuICBjbGlwLXBhdGg6IHVybCgjY2xpcFBhdGgpO1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTcwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbmA7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+SG9tZTwvdGl0bGU+XG4gICAgPC9IZWFkPlxuICAgIHtkb3RzLm1hcCgoeyB4LCB5LCB3aWR0aCwgcm90YXRlLCBjb2xvciB9LCBpKSA9PiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXtgJHt4fSR7eX0ke2NvbG9yfWB9PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAga2V5PXtgJHt4fSR7eX0ke2NvbG9yfS10b3BgfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIHRvcDogYCR7eX0lYCxcbiAgICAgICAgICAgIGxlZnQ6IGAke3h9JWAsXG4gICAgICAgICAgICB3aWR0aDogYCR7d2lkdGh9cHhgLFxuICAgICAgICAgICAgaGVpZ2h0OiAnMnB4JyxcbiAgICAgICAgICAgIG9wYWNpdHk6IDEgLSB5IC8gMTAwLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBgcm90YXRlKCR7cm90YXRlfWRlZylgLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnNbaSAlIDZdLFxuICAgICAgICAgICAgekluZGV4OiAtMVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBrZXk9e2Ake3h9JHt5fSR7Y29sb3J9LWJvdGB9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgYm90dG9tOiBgJHt5fSVgLFxuICAgICAgICAgICAgcmlnaHQ6IGAke3h9JWAsXG4gICAgICAgICAgICB3aWR0aDogYCR7d2lkdGh9cHhgLFxuICAgICAgICAgICAgaGVpZ2h0OiAnMnB4JyxcbiAgICAgICAgICAgIG9wYWNpdHk6IDEgLSAoMSAtIHkgLyAxMDApLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBgcm90YXRlKCR7cm90YXRlfWRlZylgLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcnNbaSAlIDZdLFxuICAgICAgICAgICAgekluZGV4OiAtMVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICkpfVxuICAgIHtwcm9maWxlUGljdHVyZVN0eWxlLnN0eWxlc31cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm9cIj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgYWxpZ25TZWxmOiAnY2VudGVyJywganVzdGlmeVNlbGY6ICdjZW50ZXInIH19PlxuICAgICAgICA8aDE+QnJ5Y2UgS2Fsb3c8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsdXJiXCI+RW5naW5lZXI8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLXBpY3R1cmUtY29udGFpbmVyXCI+XG4gICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgIGluaXRpYWw9e3sgeTogMTAsIG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgIGFuaW1hdGU9e3sgeTogMCwgb3BhY2l0eTogMSB9fVxuICAgICAgICAgICAgd2hpbGVIb3Zlcj17eyBzY2FsZTogMS4xIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9e3Byb2ZpbGVQaWN0dXJlU3R5bGUuY2xhc3NOYW1lfVxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cInByb2ZpbGUgcGljdHVyZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8c3ZnPlxuICAgICAgPGRlZnM+XG4gICAgICAgIDxjbGlwUGF0aCBpZD1cImNsaXBQYXRoXCI+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIHN0cm9rZT1cIm5vbmVcIlxuICAgICAgICAgICAgZmlsbD1cIndoaXRlXCJcbiAgICAgICAgICAgIGQ9XCJNNzIgMC45NDMzNzU2NzI5NzQwOGE1IDUgMCAwIDEgNSAwbDU5Ljk1MTkwNTI4MzgzMyAzNC42MTMyNDg2NTQwNTJhNSA1IDAgMCAxIDIuNSA0LjMzMDEyNzAxODkyMjJsMCA2OS4yMjY0OTczMDgxMDRhNSA1IDAgMCAxIC0yLjUgNC4zMzAxMjcwMTg5MjIybC01OS45NTE5MDUyODM4MzMgMzQuNjEzMjQ4NjU0MDUyYTUgNSAwIDAgMSAtNSAwbC01OS45NTE5MDUyODM4MzMgLTM0LjYxMzI0ODY1NDA1MmE1IDUgMCAwIDEgLTIuNSAtNC4zMzAxMjcwMTg5MjIybDEuMTAyNTQyNjA3MDkyOWUtMTMgLTY5LjIyNjQ5NzMwODEwNGE1IDUgMCAwIDEgMi41IC00LjMzMDEyNzAxODkyMjJcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvY2xpcFBhdGg+XG4gICAgICA8L2RlZnM+XG4gICAgPC9zdmc+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmhlcm8ge1xuICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgcGFkZGluZy10b3A6IDVlbTtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMmZyO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcbiAgICAgIH1cblxuICAgICAgaDEge1xuICAgICAgICBjb2xvcjogIzM0MzQzZTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBmb250LXNpemU6IDNlbTtcbiAgICAgICAgbWFyZ2luOiAwIDAgMC4zZW0gMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAzZW07XG4gICAgICB9XG5cbiAgICAgIC5ibHVyYiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgIGNvbG9yOiAjNzU3NTgzO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgfVxuXG4gICAgICBoMTo6Zmlyc3QtbGV0dGVyIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0wLjFlbTtcbiAgICAgIH1cblxuICAgICAgaDE6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZDZmNGQ7XG4gICAgICAgIGhlaWdodDogNHB4O1xuICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgfVxuXG4gICAgICAucHJvZmlsZS1waWN0dXJlLWNvbnRhaW5lciB7XG4gICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKSk7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICB9XG5cbiAgICAgIHNlY3Rpb24ge1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdfQ== */\n/*@ sourceURL=/Users/bryce/code/personal-site/pages/index.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.09aef8f33b901140a21a.hot-update.js.map