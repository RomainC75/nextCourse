webpackHotUpdate_N_E("pages/events/[eventId]",{

/***/ "./components/input/comments.js":
/*!**************************************!*\
  !*** ./components/input/comments.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_rom_Documents_dev_nextjs_tuto_section10_context_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_rom_Documents_dev_nextjs_tuto_section10_context_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_rom_Documents_dev_nextjs_tuto_section10_context_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_rom_Documents_dev_nextjs_tuto_section10_context_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _comment_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comment-list */ \"./components/input/comment-list.js\");\n/* harmony import */ var _new_comment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-comment */ \"./components/input/new-comment.js\");\n/* harmony import */ var _comments_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comments.module.css */ \"./components/input/comments.module.css\");\n/* harmony import */ var _comments_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_comments_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _store_notification_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/notification-context */ \"./store/notification-context.js\");\n\n\n\n\nvar _jsxFileName = \"/home/rom/Documents/dev/nextjs/tuto/section10-context/components/input/comments.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Comments(props) {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useContext\"])(_store_notification_context__WEBPACK_IMPORTED_MODULE_7__[\"default\"]),\n      hideNotification = _useContext.hideNotification;\n\n  var eventId = props.eventId;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      showComments = _useState[0],\n      setShowComments = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      commentsState = _useState2[0],\n      setCommentsState = _useState2[1];\n\n  function toggleCommentsHandler() {\n    setShowComments(function (prevStatus) {\n      return !prevStatus;\n    });\n  }\n\n  function addCommentHandler(_x) {\n    return _addCommentHandler.apply(this, arguments);\n  }\n\n  function _addCommentHandler() {\n    _addCommentHandler = Object(_home_rom_Documents_dev_nextjs_tuto_section10_context_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_home_rom_Documents_dev_nextjs_tuto_section10_context_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(commentData) {\n      var rawComments, comments;\n      return _home_rom_Documents_dev_nextjs_tuto_section10_context_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return fetch(\"/api/comment/\".concat(eventId), {\n                method: \"POST\",\n                body: JSON.stringify(commentData)\n              });\n\n            case 2:\n              _context.next = 4;\n              return fetch(\"/api/comment/\".concat(eventId));\n\n            case 4:\n              rawComments = _context.sent;\n              _context.next = 7;\n              return rawComments.json();\n\n            case 7:\n              comments = _context.sent;\n              console.log(\"==> COMMENTS \", comments); // if()\n\n              if (Array.isArray(comments)) {\n                setCommentsState(comments);\n              }\n\n            case 10:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _addCommentHandler.apply(this, arguments);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"section\", {\n    className: _comments_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.comments,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n      onClick: toggleCommentsHandler,\n      children: [showComments ? \"Hide\" : \"Show\", \" Comments\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, this), showComments && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_new_comment__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      onAddComment: addCommentHandler\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 24\n    }, this), showComments && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_comment_list__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      comments: commentsState\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 24\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Comments, \"LsY7ruc55iP2bJtnDmr/bPLP7Ts=\");\n\n_c = Comments;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Comments);\n\nvar _c;\n\n$RefreshReg$(_c, \"Comments\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbnB1dC9jb21tZW50cy5qcz83NDFkIl0sIm5hbWVzIjpbIkNvbW1lbnRzIiwicHJvcHMiLCJ1c2VDb250ZXh0IiwiTm90aWZpY2F0aW9uQ29udGV4dCIsImhpZGVOb3RpZmljYXRpb24iLCJldmVudElkIiwidXNlU3RhdGUiLCJzaG93Q29tbWVudHMiLCJzZXRTaG93Q29tbWVudHMiLCJjb21tZW50c1N0YXRlIiwic2V0Q29tbWVudHNTdGF0ZSIsInRvZ2dsZUNvbW1lbnRzSGFuZGxlciIsInByZXZTdGF0dXMiLCJhZGRDb21tZW50SGFuZGxlciIsImNvbW1lbnREYXRhIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInJhd0NvbW1lbnRzIiwianNvbiIsImNvbW1lbnRzIiwiY29uc29sZSIsImxvZyIsIkFycmF5IiwiaXNBcnJheSIsImNsYXNzZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUFBOztBQUFBLG9CQUNJQyx3REFBVSxDQUFDQyxtRUFBRCxDQURkO0FBQUEsTUFDaEJDLGdCQURnQixlQUNoQkEsZ0JBRGdCOztBQUFBLE1BR2ZDLE9BSGUsR0FHSEosS0FIRyxDQUdmSSxPQUhlOztBQUFBLGtCQUtpQkMsc0RBQVEsQ0FBQyxLQUFELENBTHpCO0FBQUEsTUFLaEJDLFlBTGdCO0FBQUEsTUFLRkMsZUFMRTs7QUFBQSxtQkFNbUJGLHNEQUFRLENBQUMsRUFBRCxDQU4zQjtBQUFBLE1BTWhCRyxhQU5nQjtBQUFBLE1BTURDLGdCQU5DOztBQVF2QixXQUFTQyxxQkFBVCxHQUFpQztBQUMvQkgsbUJBQWUsQ0FBQyxVQUFDSSxVQUFEO0FBQUEsYUFBZ0IsQ0FBQ0EsVUFBakI7QUFBQSxLQUFELENBQWY7QUFDRDs7QUFWc0IsV0FZUkMsaUJBWlE7QUFBQTtBQUFBOztBQUFBO0FBQUEsOFVBWXZCLGlCQUFpQ0MsV0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDUUMsS0FBSyx3QkFBaUJWLE9BQWpCLEdBQTRCO0FBQ3JDVyxzQkFBTSxFQUFFLE1BRDZCO0FBRXJDQyxvQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUwsV0FBZjtBQUYrQixlQUE1QixDQURiOztBQUFBO0FBQUE7QUFBQSxxQkFNOEJDLEtBQUssd0JBQWlCVixPQUFqQixFQU5uQzs7QUFBQTtBQU1VZSx5QkFOVjtBQUFBO0FBQUEscUJBTzJCQSxXQUFXLENBQUNDLElBQVosRUFQM0I7O0FBQUE7QUFPVUMsc0JBUFY7QUFRSUMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLGVBQVosRUFBNkJGLFFBQTdCLEVBUkosQ0FTSTs7QUFDQSxrQkFBR0csS0FBSyxDQUFDQyxPQUFOLENBQWNKLFFBQWQsQ0FBSCxFQUEyQjtBQUN6QlosZ0NBQWdCLENBQUNZLFFBQUQsQ0FBaEI7QUFDRDs7QUFaTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVp1QjtBQUFBO0FBQUE7O0FBNEJ2QixzQkFDRTtBQUFTLGFBQVMsRUFBRUssMkRBQU8sQ0FBQ0wsUUFBNUI7QUFBQSw0QkFDRTtBQUFRLGFBQU8sRUFBRVgscUJBQWpCO0FBQUEsaUJBQ0dKLFlBQVksR0FBRyxNQUFILEdBQVksTUFEM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFJR0EsWUFBWSxpQkFBSSxxRUFBQyxvREFBRDtBQUFZLGtCQUFZLEVBQUVNO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKbkIsRUFLR04sWUFBWSxpQkFBSSxxRUFBQyxxREFBRDtBQUFhLGNBQVEsRUFBRUU7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVNEOztHQXJDUVQsUTs7S0FBQUEsUTtBQXVDTUEsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2lucHV0L2NvbW1lbnRzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb21tZW50TGlzdCBmcm9tIFwiLi9jb21tZW50LWxpc3RcIjtcbmltcG9ydCBOZXdDb21tZW50IGZyb20gXCIuL25ldy1jb21tZW50XCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9jb21tZW50cy5tb2R1bGUuY3NzXCI7XG5cbmltcG9ydCBOb3RpZmljYXRpb25Db250ZXh0IGZyb20gXCIuLi8uLi9zdG9yZS9ub3RpZmljYXRpb24tY29udGV4dFwiO1xuXG5mdW5jdGlvbiBDb21tZW50cyhwcm9wcykge1xuICBjb25zdCB7aGlkZU5vdGlmaWNhdGlvbn0gPSB1c2VDb250ZXh0KE5vdGlmaWNhdGlvbkNvbnRleHQpXG5cbiAgY29uc3QgeyBldmVudElkIH0gPSBwcm9wcztcblxuICBjb25zdCBbc2hvd0NvbW1lbnRzLCBzZXRTaG93Q29tbWVudHNdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY29tbWVudHNTdGF0ZSwgc2V0Q29tbWVudHNTdGF0ZV0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgZnVuY3Rpb24gdG9nZ2xlQ29tbWVudHNIYW5kbGVyKCkge1xuICAgIHNldFNob3dDb21tZW50cygocHJldlN0YXR1cykgPT4gIXByZXZTdGF0dXMpO1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gYWRkQ29tbWVudEhhbmRsZXIoY29tbWVudERhdGEpIHtcbiAgICBhd2FpdCBmZXRjaChgL2FwaS9jb21tZW50LyR7ZXZlbnRJZH1gLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY29tbWVudERhdGEpLFxuICAgIH0pO1xuICAgIFxuICAgICAgY29uc3QgcmF3Q29tbWVudHMgPSBhd2FpdCBmZXRjaChgL2FwaS9jb21tZW50LyR7ZXZlbnRJZH1gKTtcbiAgICAgIGNvbnN0IGNvbW1lbnRzID0gYXdhaXQgcmF3Q29tbWVudHMuanNvbigpO1xuICAgICAgY29uc29sZS5sb2coXCI9PT4gQ09NTUVOVFMgXCIsIGNvbW1lbnRzKTtcbiAgICAgIC8vIGlmKClcbiAgICAgIGlmKEFycmF5LmlzQXJyYXkoY29tbWVudHMpKXtcbiAgICAgICAgc2V0Q29tbWVudHNTdGF0ZShjb21tZW50cyk7XG4gICAgICB9XG4gICAgXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb21tZW50c30+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZUNvbW1lbnRzSGFuZGxlcn0+XG4gICAgICAgIHtzaG93Q29tbWVudHMgPyBcIkhpZGVcIiA6IFwiU2hvd1wifSBDb21tZW50c1xuICAgICAgPC9idXR0b24+XG4gICAgICB7c2hvd0NvbW1lbnRzICYmIDxOZXdDb21tZW50IG9uQWRkQ29tbWVudD17YWRkQ29tbWVudEhhbmRsZXJ9IC8+fVxuICAgICAge3Nob3dDb21tZW50cyAmJiA8Q29tbWVudExpc3QgY29tbWVudHM9e2NvbW1lbnRzU3RhdGV9IC8+fVxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/input/comments.js\n");

/***/ })

})