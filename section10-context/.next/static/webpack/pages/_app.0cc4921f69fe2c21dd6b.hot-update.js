webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/layout/layout.js":
/*!*************************************!*\
  !*** ./components/layout/layout.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _main_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-header */ \"./components/layout/main-header.js\");\n/* harmony import */ var _store_notification_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/notification-context */ \"./store/notification-context.js\");\n\n\nvar _jsxFileName = \"/home/rom/Documents/dev/nextjs/tuto/section10-context/components/layout/layout.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction Layout(props) {\n  _s();\n\n  var notificationCtx = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_store_notification_context__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n  var activeNotification = notificationCtx.notification;\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    console.log('==>', activeNotification);\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_main_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      children: props.children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, this), activeNotification && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Notification, {\n      title: activeNotification.title,\n      message: activeNotification.message,\n      status: activeNotification.status\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Layout, \"B7WRb6FnxY3WZS4SRCN6vfY2hcw=\");\n\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\n\nvar _c;\n\n$RefreshReg$(_c, \"Layout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmpzPzg1ZDQiXSwibmFtZXMiOlsiTGF5b3V0IiwicHJvcHMiLCJub3RpZmljYXRpb25DdHgiLCJ1c2VDb250ZXh0IiwiTm90aWZpY2F0aW9uQ29udGV4dCIsImFjdGl2ZU5vdGlmaWNhdGlvbiIsIm5vdGlmaWNhdGlvbiIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJjaGlsZHJlbiIsInRpdGxlIiwibWVzc2FnZSIsInN0YXR1cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsQ0FBZ0JDLEtBQWhCLEVBQXVCO0FBQUE7O0FBQ3JCLE1BQU1DLGVBQWUsR0FBR0Msd0RBQVUsQ0FBQ0MsbUVBQUQsQ0FBbEM7QUFFQSxNQUFNQyxrQkFBa0IsR0FBR0gsZUFBZSxDQUFDSSxZQUEzQztBQUVBQyx5REFBUyxDQUFDLFlBQUk7QUFDWkMsV0FBTyxDQUFDQyxHQUFSLENBQVksS0FBWixFQUFtQkosa0JBQW5CO0FBQ0QsR0FGUSxFQUVQLEVBRk8sQ0FBVDtBQUdBLHNCQUNFLHFFQUFDLDhDQUFEO0FBQUEsNEJBQ0UscUVBQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBQSxnQkFBT0osS0FBSyxDQUFDUztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixFQUdHTCxrQkFBa0IsaUJBQ2pCLHFFQUFDLFlBQUQ7QUFBYyxXQUFLLEVBQUVBLGtCQUFrQixDQUFDTSxLQUF4QztBQUErQyxhQUFPLEVBQUVOLGtCQUFrQixDQUFDTyxPQUEzRTtBQUFvRixZQUFNLEVBQUVQLGtCQUFrQixDQUFDUTtBQUEvRztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFTRDs7R0FqQlFiLE07O0tBQUFBLE07QUFtQk1BLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgTWFpbkhlYWRlciBmcm9tIFwiLi9tYWluLWhlYWRlclwiO1xuaW1wb3J0IE5vdGlmaWNhdGlvbkNvbnRleHQgZnJvbSBcIi4uLy4uL3N0b3JlL25vdGlmaWNhdGlvbi1jb250ZXh0XCI7XG5cbmZ1bmN0aW9uIExheW91dChwcm9wcykge1xuICBjb25zdCBub3RpZmljYXRpb25DdHggPSB1c2VDb250ZXh0KE5vdGlmaWNhdGlvbkNvbnRleHQpO1xuXG4gIGNvbnN0IGFjdGl2ZU5vdGlmaWNhdGlvbiA9IG5vdGlmaWNhdGlvbkN0eC5ub3RpZmljYXRpb247XG5cbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgY29uc29sZS5sb2coJz09PicsIGFjdGl2ZU5vdGlmaWNhdGlvbilcbiAgfSxbXSlcbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8TWFpbkhlYWRlciAvPlxuICAgICAgPG1haW4+e3Byb3BzLmNoaWxkcmVufTwvbWFpbj5cbiAgICAgIHthY3RpdmVOb3RpZmljYXRpb24gJiYgKFxuICAgICAgICA8Tm90aWZpY2F0aW9uIHRpdGxlPXthY3RpdmVOb3RpZmljYXRpb24udGl0bGV9IG1lc3NhZ2U9e2FjdGl2ZU5vdGlmaWNhdGlvbi5tZXNzYWdlfSBzdGF0dXM9e2FjdGl2ZU5vdGlmaWNhdGlvbi5zdGF0dXN9IC8+XG4gICAgICApfVxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout/layout.js\n");

/***/ })

})