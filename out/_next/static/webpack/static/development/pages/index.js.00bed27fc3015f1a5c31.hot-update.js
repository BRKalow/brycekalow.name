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
/* harmony import */ var _components_social_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/social-icons */ "./components/social-icons.tsx");
var _jsxFileName = "/Users/bryce/code/personal-site/pages/index.tsx";





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
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-884512948",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
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
        lineNumber: 22
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
        lineNumber: 23
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
        lineNumber: 37
      },
      __self: this
    }));
  }), profilePictureStyle.styles, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-884512948" + " " + "hero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
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
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-884512948",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Bryce Kalow"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-884512948" + " " + "blurb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-884512948",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Engineer working on the web. I am passionate about improving developer experience, creating maintainable and accessible applications at \u2728", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("em", {
    className: "jsx-884512948",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "scale"), "\u2728, and open source software."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-884512948",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Currently working on", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.target.com",
    target: "_blank",
    className: "jsx-884512948",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Target.com"), ", making cool things with \u269BReact and tracking down our next performance improvement. \uD83D\uDE80")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_social_icons__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: 'grid',
      gridArea: 'picture'
    },
    className: "jsx-884512948",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-884512948" + " " + "profile-picture-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
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
      lineNumber: 75
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    style: {
      height: '0px'
    },
    className: "jsx-884512948",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("defs", {
    className: "jsx-884512948",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("clipPath", {
    id: "clipPath",
    className: "jsx-884512948",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    stroke: "none",
    fill: "white",
    d: "M72 0.94337567297408a5 5 0 0 1 5 0l59.951905283833 34.613248654052a5 5 0 0 1 2.5 4.3301270189222l0 69.226497308104a5 5 0 0 1 -2.5 4.3301270189222l-59.951905283833 34.613248654052a5 5 0 0 1 -5 0l-59.951905283833 -34.613248654052a5 5 0 0 1 -2.5 -4.3301270189222l1.1025426070929e-13 -69.226497308104a5 5 0 0 1 2.5 -4.3301270189222",
    className: "jsx-884512948",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "884512948",
    __self: this
  }, ".hero.jsx-884512948{max-width:800px;margin:0 auto;padding:5em;display:grid;grid-template-areas:'blurb picture';grid-template-columns:3fr 2fr;grid-template-rows:1fr;grid-column-gap:1em;grid-row-gap:2em;}@media (max-width:667px){.hero.jsx-884512948{padding:2em;grid-template-areas: 'picture' 'blurb';grid-template-columns:1fr;}}h1.jsx-884512948{color:#34343e;display:inline-block;vertical-align:middle;font-size:3em;margin:0 0 0.5em 0;-webkit-letter-spacing:-0.03em;-moz-letter-spacing:-0.03em;-ms-letter-spacing:-0.03em;letter-spacing:-0.03em;}h1.jsx-884512948::after{content:'';background-color:#ed6f4d;background:linear-gradient(-140deg,rgba(255,179,158,1) 10%,rgba(237,111,77,1) 60%);height:4px;width:60%;display:block;margin-top:5px;}.blurb.jsx-884512948{font-size:1.5em;color:#757583;font-weight:normal;}p.jsx-884512948{margin:0;margin-bottom:1em;}.profile-picture-container.jsx-884512948{-webkit-filter:drop-shadow(0 2px 3px rgba(0,0,0,0.1));filter:drop-shadow(0 2px 3px rgba(0,0,0,0.1));vertical-align:middle;place-self:center;height:150px;}section.jsx-884512948{background:white;border-radius:5px;padding:10px;margin:10px;text-align:left;display:inline-block;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icnljZS9jb2RlL3BlcnNvbmFsLXNpdGUvcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStGZ0IsQUFHeUIsQUFhRixBQVNBLEFBU0gsQUFVSyxBQU1QLEFBS3dDLEFBT2hDLFNBWEMsRUFoQk8sQ0FoQmQsRUFPVSxFQXRCUCxBQXlDQSxDQWtCSSxVQVhwQixHQS9DYyxBQXlDTyxLQW5CRyxBQXFDVCxDQTVCOEUsTUE5QjlFLE1BMkRELENBbEJkLEVBM0I4QixJQWJRLEVBcUJ0QixHQXNDRSxXQXJDRyxLQXNDRSxDQTlDckIsYUFTdUIsQ0F0Qk8sTUE0RGhDLEdBWndCLG1CQW5CWCxFQTVCWSxDQWdETCxRQW5CUixVQUNJLEFBbUJELElBaERPLFNBaUR0QixDQW5CaUIsVUE3QkUsS0E4Qm5CLFlBN0JBLGtCQW1CQSIsImZpbGUiOiIvVXNlcnMvYnJ5Y2UvY29kZS9wZXJzb25hbC1zaXRlL3BhZ2VzL2luZGV4LnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2Nzcyc7XG5pbXBvcnQgU29jaWFsSWNvbnMgZnJvbSAnLi4vY29tcG9uZW50cy9zb2NpYWwtaWNvbnMnO1xuaW1wb3J0IERvdHMgZnJvbSAnLi4vY29tcG9uZW50cy9kb3RzJztcblxuY29uc3QgcHJvZmlsZVBpY3R1cmVTdHlsZSA9IGNzcy5yZXNvbHZlYFxuICBiYWNrZ3JvdW5kOiBjZW50ZXIvY292ZXIgdXJsKC4vc3RhdGljL3Byb2ZpbGVfcGljLmpwZWcpO1xuICBjbGlwLXBhdGg6IHVybCgjY2xpcFBhdGgpO1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG5gO1xuXG5jb25zdCBIb21lID0gKCkgPT4gKFxuICA8ZGl2PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPkhvbWU8L3RpdGxlPlxuICAgIDwvSGVhZD5cbiAgICB7ZG90cy5tYXAoKHsgeCwgeSwgd2lkdGgsIHJvdGF0ZSwgY29sb3IgfSwgaSkgPT4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17YCR7eH0ke3l9JHtjb2xvcn1gfT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGtleT17YCR7eH0ke3l9JHtjb2xvcn0tdG9wYH1cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICB0b3A6IGAke3l9JWAsXG4gICAgICAgICAgICBsZWZ0OiBgJHt4fSVgLFxuICAgICAgICAgICAgd2lkdGg6IGAke3dpZHRofXB4YCxcbiAgICAgICAgICAgIGhlaWdodDogJzJweCcsXG4gICAgICAgICAgICBvcGFjaXR5OiAxIC0geSAvIDEwMCxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZSgke3JvdGF0ZX1kZWcpYCxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzW2kgJSA2XSxcbiAgICAgICAgICAgIHpJbmRleDogLTFcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAga2V5PXtgJHt4fSR7eX0ke2NvbG9yfS1ib3RgfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIGJvdHRvbTogYCR7eX0lYCxcbiAgICAgICAgICAgIHJpZ2h0OiBgJHt4fSVgLFxuICAgICAgICAgICAgd2lkdGg6IGAke3dpZHRofXB4YCxcbiAgICAgICAgICAgIGhlaWdodDogJzJweCcsXG4gICAgICAgICAgICBvcGFjaXR5OiAxIC0gKDEgLSB5IC8gMTAwKSxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZSgke3JvdGF0ZX1kZWcpYCxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzW2kgJSA2XSxcbiAgICAgICAgICAgIHpJbmRleDogLTFcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApKX1cbiAgICB7cHJvZmlsZVBpY3R1cmVTdHlsZS5zdHlsZXN9XG4gICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvXCI+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHBsYWNlU2VsZjogJ2NlbnRlcicsIGdyaWRBcmVhOiAnYmx1cmInIH19PlxuICAgICAgICA8aDE+QnJ5Y2UgS2Fsb3c8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsdXJiXCI+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBFbmdpbmVlciB3b3JraW5nIG9uIHRoZSB3ZWIuIEkgYW0gcGFzc2lvbmF0ZSBhYm91dCBpbXByb3ZpbmcgZGV2ZWxvcGVyIGV4cGVyaWVuY2UsXG4gICAgICAgICAgICBjcmVhdGluZyBtYWludGFpbmFibGUgYW5kIGFjY2Vzc2libGUgYXBwbGljYXRpb25zIGF0IOKcqDxlbT5zY2FsZTwvZW0+4pyoLCBhbmQgb3BlbiBzb3VyY2VcbiAgICAgICAgICAgIHNvZnR3YXJlLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIEN1cnJlbnRseSB3b3JraW5nIG9ueycgJ31cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy50YXJnZXQuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgIFRhcmdldC5jb21cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICwgbWFraW5nIGNvb2wgdGhpbmdzIHdpdGgg4pqbUmVhY3QgYW5kIHRyYWNraW5nIGRvd24gb3VyIG5leHQgcGVyZm9ybWFuY2UgaW1wcm92ZW1lbnQuIPCfmoBcbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8U29jaWFsSWNvbnMgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZ3JpZCcsIGdyaWRBcmVhOiAncGljdHVyZScgfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZmlsZS1waWN0dXJlLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICBpbml0aWFsPXt7IHk6IDEwLCBvcGFjaXR5OiAwIH19XG4gICAgICAgICAgICBhbmltYXRlPXt7IHk6IDAsIG9wYWNpdHk6IDEgfX1cbiAgICAgICAgICAgIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMSB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtwcm9maWxlUGljdHVyZVN0eWxlLmNsYXNzTmFtZX1cbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJwcm9maWxlIHBpY3R1cmVcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPHN2ZyBzdHlsZT17eyBoZWlnaHQ6ICcwcHgnIH19PlxuICAgICAgPGRlZnM+XG4gICAgICAgIDxjbGlwUGF0aCBpZD1cImNsaXBQYXRoXCI+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIHN0cm9rZT1cIm5vbmVcIlxuICAgICAgICAgICAgZmlsbD1cIndoaXRlXCJcbiAgICAgICAgICAgIGQ9XCJNNzIgMC45NDMzNzU2NzI5NzQwOGE1IDUgMCAwIDEgNSAwbDU5Ljk1MTkwNTI4MzgzMyAzNC42MTMyNDg2NTQwNTJhNSA1IDAgMCAxIDIuNSA0LjMzMDEyNzAxODkyMjJsMCA2OS4yMjY0OTczMDgxMDRhNSA1IDAgMCAxIC0yLjUgNC4zMzAxMjcwMTg5MjIybC01OS45NTE5MDUyODM4MzMgMzQuNjEzMjQ4NjU0MDUyYTUgNSAwIDAgMSAtNSAwbC01OS45NTE5MDUyODM4MzMgLTM0LjYxMzI0ODY1NDA1MmE1IDUgMCAwIDEgLTIuNSAtNC4zMzAxMjcwMTg5MjIybDEuMTAyNTQyNjA3MDkyOWUtMTMgLTY5LjIyNjQ5NzMwODEwNGE1IDUgMCAwIDEgMi41IC00LjMzMDEyNzAxODkyMjJcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvY2xpcFBhdGg+XG4gICAgICA8L2RlZnM+XG4gICAgPC9zdmc+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmhlcm8ge1xuICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgcGFkZGluZzogNWVtO1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnYmx1cmIgcGljdHVyZSc7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDJmcjtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gICAgICAgIGdyaWQtY29sdW1uLWdhcDogMWVtO1xuICAgICAgICBncmlkLXJvdy1nYXA6IDJlbTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDY2N3B4KSB7XG4gICAgICAgIC5oZXJvIHtcbiAgICAgICAgICBwYWRkaW5nOiAyZW07XG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcbiAgICAgICAgICAgICdwaWN0dXJlJ1xuICAgICAgICAgICAgJ2JsdXJiJztcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBoMSB7XG4gICAgICAgIGNvbG9yOiAjMzQzNDNlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgICAgICBtYXJnaW46IDAgMCAwLjVlbSAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDNlbTtcbiAgICAgIH1cblxuICAgICAgaDE6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZDZmNGQ7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtMTQwZGVnLCByZ2JhKDI1NSwgMTc5LCAxNTgsIDEpIDEwJSwgcmdiYSgyMzcsIDExMSwgNzcsIDEpIDYwJSk7XG4gICAgICAgIGhlaWdodDogNHB4O1xuICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgfVxuXG4gICAgICAuYmx1cmIge1xuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICBjb2xvcjogIzc1NzU4MztcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIH1cblxuICAgICAgcCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgICAgfVxuXG4gICAgICAucHJvZmlsZS1waWN0dXJlLWNvbnRhaW5lciB7XG4gICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xKSk7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIHBsYWNlLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgIH1cblxuICAgICAgc2VjdGlvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl19 */\n/*@ sourceURL=/Users/bryce/code/personal-site/pages/index.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.00bed27fc3015f1a5c31.hot-update.js.map