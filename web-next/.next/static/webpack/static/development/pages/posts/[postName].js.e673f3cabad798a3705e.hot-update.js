webpackHotUpdate("static/development/pages/posts/[postName].js",{

/***/ "./pages/posts/[postName].js":
/*!***********************************!*\
  !*** ./pages/posts/[postName].js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_topic_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static/topic.json */ "./static/topic.json");
var _static_topic_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../static/topic.json */ "./static/topic.json", 1);
var _jsxFileName = "/Users/becondethuong321/Documents/web-Phong-Kham/web-next/pages/posts/[postName].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var OtherTopic = function OtherTopic(props) {
  props.posts.map(function (post) {
    __jsx("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, "This is topic ", post.name);
  });
};

var Post = function Post() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])(); // how do I get the name of this link name?

  _static_topic_json__WEBPACK_IMPORTED_MODULE_3__.map(function (post) {});
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Hi, dynamic part of this link is ", router.query.postName));
};

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ })

})
//# sourceMappingURL=[postName].js.e673f3cabad798a3705e.hot-update.js.map