webpackHotUpdate_N_E("pages/events/[eventId]",{

/***/ "./components/input/comments.js":
/*!**************************************!*\
  !*** ./components/input/comments.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_rom_Documents_dev_nextjs_tuto_section10_context_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_rom_Documents_dev_nextjs_tuto_section10_context_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_rom_Documents_dev_nextjs_tuto_section10_context_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_rom_Documents_dev_nextjs_tuto_section10_context_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _comment_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comment-list */ \"./components/input/comment-list.js\");\n/* harmony import */ var _new_comment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-comment */ \"./components/input/new-comment.js\");\n/* harmony import */ var _comments_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comments.module.css */ \"./components/input/comments.module.css\");\n/* harmony import */ var _comments_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_comments_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _store_notification_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/notification-context */ \"./store/notification-context.js\");\n\n\n\n\nvar _jsxFileName = \"/home/rom/Documents/dev/nextjs/tuto/section10-context/components/input/comments.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Comments(props) {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useContext\"])(_store_notification_context__WEBPACK_IMPORTED_MODULE_7__[\"default\"]),\n      hideNotification = _useContext.hideNotification,\n      showNotification = _useContext.showNotification;\n\n  var eventId = props.eventId;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      showComments = _useState[0],\n      setShowComments = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      commentsState = _useState2[0],\n      setCommentsState = _useState2[1];\n\n  function toggleCommentsHandler() {\n    setShowComments(function (prevStatus) {\n      return !prevStatus;\n    });\n  }\n\n  function addCommentHandler(_x) {\n    return _addCommentHandler.apply(this, arguments);\n  }\n\n  function _addCommentHandler() {\n    _addCommentHandler = Object(_home_rom_Documents_dev_nextjs_tuto_section10_context_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_home_rom_Documents_dev_nextjs_tuto_section10_context_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(commentData) {\n      var res, rawComments, comments;\n      return _home_rom_Documents_dev_nextjs_tuto_section10_context_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              showNotification({\n                title: \"Pending\",\n                message: \"waiting for the response ...\",\n                status: \"pending\"\n              });\n              _context.next = 4;\n              return fetch(\"/api/comment/\".concat(eventId), {\n                method: \"POST\",\n                body: JSON.stringify(commentData)\n              });\n\n            case 4:\n              res = _context.sent;\n              console.log('res : ', res);\n              _context.next = 8;\n              return fetch(\"/api/comment/\".concat(eventId));\n\n            case 8:\n              rawComments = _context.sent;\n              _context.next = 11;\n              return rawComments.json();\n\n            case 11:\n              comments = _context.sent;\n              showNotification({\n                title: \"Success\",\n                message: \"job done \",\n                status: \"success\"\n              });\n\n              if (Array.isArray(comments)) {\n                setCommentsState(comments);\n              }\n\n              _context.next = 20;\n              break;\n\n            case 16:\n              _context.prev = 16;\n              _context.t0 = _context[\"catch\"](0);\n              console.log('error : ', _context.t0);\n              showNotification({\n                title: \"Success\",\n                message: \"job done \",\n                status: \"success\"\n              });\n\n            case 20:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 16]]);\n    }));\n    return _addCommentHandler.apply(this, arguments);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"section\", {\n    className: _comments_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.comments,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n      onClick: toggleCommentsHandler,\n      children: [showComments ? \"Hide\" : \"Show\", \" Comments\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, this), showComments && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_new_comment__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      onAddComment: addCommentHandler\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 24\n    }, this), showComments && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_comment_list__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      comments: commentsState\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 24\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 57,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Comments, \"7KrKxvSacGhYCRGApScfhQ0plSs=\");\n\n_c = Comments;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Comments);\n\nvar _c;\n\n$RefreshReg$(_c, \"Comments\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbnB1dC9jb21tZW50cy5qcz83NDFkIl0sIm5hbWVzIjpbIkNvbW1lbnRzIiwicHJvcHMiLCJ1c2VDb250ZXh0IiwiTm90aWZpY2F0aW9uQ29udGV4dCIsImhpZGVOb3RpZmljYXRpb24iLCJzaG93Tm90aWZpY2F0aW9uIiwiZXZlbnRJZCIsInVzZVN0YXRlIiwic2hvd0NvbW1lbnRzIiwic2V0U2hvd0NvbW1lbnRzIiwiY29tbWVudHNTdGF0ZSIsInNldENvbW1lbnRzU3RhdGUiLCJ0b2dnbGVDb21tZW50c0hhbmRsZXIiLCJwcmV2U3RhdHVzIiwiYWRkQ29tbWVudEhhbmRsZXIiLCJjb21tZW50RGF0YSIsInRpdGxlIiwibWVzc2FnZSIsInN0YXR1cyIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwicmF3Q29tbWVudHMiLCJqc29uIiwiY29tbWVudHMiLCJBcnJheSIsImlzQXJyYXkiLCJjbGFzc2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFBQTs7QUFBQSxvQkFFckJDLHdEQUFVLENBQUNDLG1FQUFELENBRlc7QUFBQSxNQUNmQyxnQkFEZSxlQUNmQSxnQkFEZTtBQUFBLE1BQ0dDLGdCQURILGVBQ0dBLGdCQURIOztBQUFBLE1BSWZDLE9BSmUsR0FJSEwsS0FKRyxDQUlmSyxPQUplOztBQUFBLGtCQU1pQkMsc0RBQVEsQ0FBQyxLQUFELENBTnpCO0FBQUEsTUFNaEJDLFlBTmdCO0FBQUEsTUFNRkMsZUFORTs7QUFBQSxtQkFPbUJGLHNEQUFRLENBQUMsRUFBRCxDQVAzQjtBQUFBLE1BT2hCRyxhQVBnQjtBQUFBLE1BT0RDLGdCQVBDOztBQVN2QixXQUFTQyxxQkFBVCxHQUFpQztBQUMvQkgsbUJBQWUsQ0FBQyxVQUFDSSxVQUFEO0FBQUEsYUFBZ0IsQ0FBQ0EsVUFBakI7QUFBQSxLQUFELENBQWY7QUFDRDs7QUFYc0IsV0FhUkMsaUJBYlE7QUFBQTtBQUFBOztBQUFBO0FBQUEsOFVBYXZCLGlCQUFpQ0MsV0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFSVYsOEJBQWdCLENBQUM7QUFDZlcscUJBQUssRUFBRSxTQURRO0FBRWZDLHVCQUFPLEVBQUUsOEJBRk07QUFHZkMsc0JBQU0sRUFBRTtBQUhPLGVBQUQsQ0FBaEI7QUFGSjtBQUFBLHFCQU9zQkMsS0FBSyx3QkFBaUJiLE9BQWpCLEdBQTRCO0FBQ2pEYyxzQkFBTSxFQUFFLE1BRHlDO0FBRWpEQyxvQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVIsV0FBZjtBQUYyQyxlQUE1QixDQVAzQjs7QUFBQTtBQU9VUyxpQkFQVjtBQVdJQyxxQkFBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQkYsR0FBdEI7QUFYSjtBQUFBLHFCQWE4QkwsS0FBSyx3QkFBaUJiLE9BQWpCLEVBYm5DOztBQUFBO0FBYVVxQix5QkFiVjtBQUFBO0FBQUEscUJBYzJCQSxXQUFXLENBQUNDLElBQVosRUFkM0I7O0FBQUE7QUFjVUMsc0JBZFY7QUFnQkl4Qiw4QkFBZ0IsQ0FBQztBQUNmVyxxQkFBSyxFQUFFLFNBRFE7QUFFZkMsdUJBQU8sRUFBRSxXQUZNO0FBR2ZDLHNCQUFNLEVBQUU7QUFITyxlQUFELENBQWhCOztBQU1BLGtCQUFJWSxLQUFLLENBQUNDLE9BQU4sQ0FBY0YsUUFBZCxDQUFKLEVBQTZCO0FBQzNCbEIsZ0NBQWdCLENBQUNrQixRQUFELENBQWhCO0FBQ0Q7O0FBeEJMO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBMEJJSixxQkFBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtBQUNBckIsOEJBQWdCLENBQUM7QUFDZlcscUJBQUssRUFBRSxTQURRO0FBRWZDLHVCQUFPLEVBQUUsV0FGTTtBQUdmQyxzQkFBTSxFQUFFO0FBSE8sZUFBRCxDQUFoQjs7QUEzQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FidUI7QUFBQTtBQUFBOztBQWdEdkIsc0JBQ0U7QUFBUyxhQUFTLEVBQUVjLDJEQUFPLENBQUNILFFBQTVCO0FBQUEsNEJBQ0U7QUFBUSxhQUFPLEVBQUVqQixxQkFBakI7QUFBQSxpQkFDR0osWUFBWSxHQUFHLE1BQUgsR0FBWSxNQUQzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUlHQSxZQUFZLGlCQUFJLHFFQUFDLG9EQUFEO0FBQVksa0JBQVksRUFBRU07QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpuQixFQUtHTixZQUFZLGlCQUFJLHFFQUFDLHFEQUFEO0FBQWEsY0FBUSxFQUFFRTtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBU0Q7O0dBekRRVixROztLQUFBQSxRO0FBMkRNQSx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvaW5wdXQvY29tbWVudHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENvbW1lbnRMaXN0IGZyb20gXCIuL2NvbW1lbnQtbGlzdFwiO1xuaW1wb3J0IE5ld0NvbW1lbnQgZnJvbSBcIi4vbmV3LWNvbW1lbnRcIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL2NvbW1lbnRzLm1vZHVsZS5jc3NcIjtcblxuaW1wb3J0IE5vdGlmaWNhdGlvbkNvbnRleHQgZnJvbSBcIi4uLy4uL3N0b3JlL25vdGlmaWNhdGlvbi1jb250ZXh0XCI7XG5cbmZ1bmN0aW9uIENvbW1lbnRzKHByb3BzKSB7XG4gIGNvbnN0IHsgaGlkZU5vdGlmaWNhdGlvbiwgc2hvd05vdGlmaWNhdGlvbiB9ID1cbiAgICB1c2VDb250ZXh0KE5vdGlmaWNhdGlvbkNvbnRleHQpO1xuXG4gIGNvbnN0IHsgZXZlbnRJZCB9ID0gcHJvcHM7XG5cbiAgY29uc3QgW3Nob3dDb21tZW50cywgc2V0U2hvd0NvbW1lbnRzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2NvbW1lbnRzU3RhdGUsIHNldENvbW1lbnRzU3RhdGVdID0gdXNlU3RhdGUoW10pO1xuXG4gIGZ1bmN0aW9uIHRvZ2dsZUNvbW1lbnRzSGFuZGxlcigpIHtcbiAgICBzZXRTaG93Q29tbWVudHMoKHByZXZTdGF0dXMpID0+ICFwcmV2U3RhdHVzKTtcbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGFkZENvbW1lbnRIYW5kbGVyKGNvbW1lbnREYXRhKSB7XG4gICAgdHJ5IHtcbiAgICAgIHNob3dOb3RpZmljYXRpb24oe1xuICAgICAgICB0aXRsZTogXCJQZW5kaW5nXCIsXG4gICAgICAgIG1lc3NhZ2U6IFwid2FpdGluZyBmb3IgdGhlIHJlc3BvbnNlIC4uLlwiLFxuICAgICAgICBzdGF0dXM6IFwicGVuZGluZ1wiLFxuICAgICAgfSk7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgL2FwaS9jb21tZW50LyR7ZXZlbnRJZH1gLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNvbW1lbnREYXRhKSxcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coJ3JlcyA6ICcsIHJlcylcblxuICAgICAgY29uc3QgcmF3Q29tbWVudHMgPSBhd2FpdCBmZXRjaChgL2FwaS9jb21tZW50LyR7ZXZlbnRJZH1gKTtcbiAgICAgIGNvbnN0IGNvbW1lbnRzID0gYXdhaXQgcmF3Q29tbWVudHMuanNvbigpO1xuICAgICAgXG4gICAgICBzaG93Tm90aWZpY2F0aW9uKHtcbiAgICAgICAgdGl0bGU6IFwiU3VjY2Vzc1wiLFxuICAgICAgICBtZXNzYWdlOiBcImpvYiBkb25lIFwiLFxuICAgICAgICBzdGF0dXM6IFwic3VjY2Vzc1wiLFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGNvbW1lbnRzKSkge1xuICAgICAgICBzZXRDb21tZW50c1N0YXRlKGNvbW1lbnRzKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coJ2Vycm9yIDogJyxlcnJvcilcbiAgICAgIHNob3dOb3RpZmljYXRpb24oe1xuICAgICAgICB0aXRsZTogXCJTdWNjZXNzXCIsXG4gICAgICAgIG1lc3NhZ2U6IFwiam9iIGRvbmUgXCIsXG4gICAgICAgIHN0YXR1czogXCJzdWNjZXNzXCIsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb21tZW50c30+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZUNvbW1lbnRzSGFuZGxlcn0+XG4gICAgICAgIHtzaG93Q29tbWVudHMgPyBcIkhpZGVcIiA6IFwiU2hvd1wifSBDb21tZW50c1xuICAgICAgPC9idXR0b24+XG4gICAgICB7c2hvd0NvbW1lbnRzICYmIDxOZXdDb21tZW50IG9uQWRkQ29tbWVudD17YWRkQ29tbWVudEhhbmRsZXJ9IC8+fVxuICAgICAge3Nob3dDb21tZW50cyAmJiA8Q29tbWVudExpc3QgY29tbWVudHM9e2NvbW1lbnRzU3RhdGV9IC8+fVxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/input/comments.js\n");

/***/ })

})