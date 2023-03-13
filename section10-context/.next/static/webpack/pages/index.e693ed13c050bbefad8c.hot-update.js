webpackHotUpdate_N_E("pages/index",{

/***/ "./store/notification-context.js":
/*!***************************************!*\
  !*** ./store/notification-context.js ***!
  \***************************************/
/*! exports provided: NotificationContextProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NotificationContextProvider\", function() { return NotificationContextProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/home/rom/Documents/dev/nextjs/tuto/section10-context/store/notification-context.js\",\n    _s = $RefreshSig$();\n\n\nvar NotificationContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({\n  notification: null,\n  // {title, message, status}\n  showNotification: function showNotification(notificationData) {},\n  hideNotification: function hideNotification() {}\n});\nfunction NotificationContextProvider(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(),\n      activeNotification = _useState[0],\n      setActiveNotification = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    if (activeNotification && activeNotification.status === \"error\" || activeNotification.status === \"succes\") {\n      var timer = setTimeout(function () {\n        hideNotificationHandle();\n      }, 3000);\n    }\n  }, [activeNotification]);\n\n  function showNotificationHandler(notificationData) {\n    setActiveNotification(notificationData);\n  }\n\n  function hideNotificationHandle() {\n    setActiveNotification(null);\n  }\n\n  var context = {\n    notification: activeNotification,\n    showNotification: showNotificationHandler,\n    hideNotification: hideNotificationHandle\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(NotificationContext.Provider, {\n    value: context,\n    children: props.children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 5\n  }, this);\n}\n\n_s(NotificationContextProvider, \"Wi3E3Psx/3AX/beWJcnxb8rsCKk=\");\n\n_c = NotificationContextProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotificationContext);\n\nvar _c;\n\n$RefreshReg$(_c, \"NotificationContextProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvbm90aWZpY2F0aW9uLWNvbnRleHQuanM/ODVhMyJdLCJuYW1lcyI6WyJOb3RpZmljYXRpb25Db250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIm5vdGlmaWNhdGlvbiIsInNob3dOb3RpZmljYXRpb24iLCJub3RpZmljYXRpb25EYXRhIiwiaGlkZU5vdGlmaWNhdGlvbiIsIk5vdGlmaWNhdGlvbkNvbnRleHRQcm92aWRlciIsInByb3BzIiwidXNlU3RhdGUiLCJhY3RpdmVOb3RpZmljYXRpb24iLCJzZXRBY3RpdmVOb3RpZmljYXRpb24iLCJ1c2VFZmZlY3QiLCJzdGF0dXMiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJoaWRlTm90aWZpY2F0aW9uSGFuZGxlIiwic2hvd05vdGlmaWNhdGlvbkhhbmRsZXIiLCJjb250ZXh0IiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxtQkFBbUIsZ0JBQUdDLDJEQUFhLENBQUM7QUFDeENDLGNBQVksRUFBRSxJQUQwQjtBQUNwQjtBQUNwQkMsa0JBQWdCLEVBQUUsMEJBQVVDLGdCQUFWLEVBQTRCLENBQUUsQ0FGUjtBQUd4Q0Msa0JBQWdCLEVBQUUsNEJBQVksQ0FBRTtBQUhRLENBQUQsQ0FBekM7QUFNTyxTQUFTQywyQkFBVCxDQUFxQ0MsS0FBckMsRUFBNEM7QUFBQTs7QUFBQSxrQkFDR0Msc0RBQVEsRUFEWDtBQUFBLE1BQzFDQyxrQkFEMEM7QUFBQSxNQUN0QkMscUJBRHNCOztBQUdqREMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFDR0Ysa0JBQWtCLElBQUlBLGtCQUFrQixDQUFDRyxNQUFuQixLQUE4QixPQUFyRCxJQUNBSCxrQkFBa0IsQ0FBQ0csTUFBbkIsS0FBOEIsUUFGaEMsRUFHRTtBQUNBLFVBQU1DLEtBQUssR0FBR0MsVUFBVSxDQUFDLFlBQU07QUFDN0JDLDhCQUFzQjtBQUN2QixPQUZ1QixFQUVyQixJQUZxQixDQUF4QjtBQUdEO0FBQ0YsR0FUUSxFQVNOLENBQUNOLGtCQUFELENBVE0sQ0FBVDs7QUFXQSxXQUFTTyx1QkFBVCxDQUFpQ1osZ0JBQWpDLEVBQW1EO0FBQ2pETSx5QkFBcUIsQ0FBQ04sZ0JBQUQsQ0FBckI7QUFDRDs7QUFFRCxXQUFTVyxzQkFBVCxHQUFrQztBQUNoQ0wseUJBQXFCLENBQUMsSUFBRCxDQUFyQjtBQUNEOztBQUVELE1BQU1PLE9BQU8sR0FBRztBQUNkZixnQkFBWSxFQUFFTyxrQkFEQTtBQUVkTixvQkFBZ0IsRUFBRWEsdUJBRko7QUFHZFgsb0JBQWdCLEVBQUVVO0FBSEosR0FBaEI7QUFNQSxzQkFDRSxxRUFBQyxtQkFBRCxDQUFxQixRQUFyQjtBQUE4QixTQUFLLEVBQUVFLE9BQXJDO0FBQUEsY0FDR1YsS0FBSyxDQUFDVztBQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEOztHQWpDZVosMkI7O0tBQUFBLDJCO0FBbUNETixrRkFBZiIsImZpbGUiOiIuL3N0b3JlL25vdGlmaWNhdGlvbi1jb250ZXh0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBOb3RpZmljYXRpb25Db250ZXh0ID0gY3JlYXRlQ29udGV4dCh7XG4gIG5vdGlmaWNhdGlvbjogbnVsbCwgLy8ge3RpdGxlLCBtZXNzYWdlLCBzdGF0dXN9XG4gIHNob3dOb3RpZmljYXRpb246IGZ1bmN0aW9uIChub3RpZmljYXRpb25EYXRhKSB7fSxcbiAgaGlkZU5vdGlmaWNhdGlvbjogZnVuY3Rpb24gKCkge30sXG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIE5vdGlmaWNhdGlvbkNvbnRleHRQcm92aWRlcihwcm9wcykge1xuICBjb25zdCBbYWN0aXZlTm90aWZpY2F0aW9uLCBzZXRBY3RpdmVOb3RpZmljYXRpb25dID0gdXNlU3RhdGUoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIChhY3RpdmVOb3RpZmljYXRpb24gJiYgYWN0aXZlTm90aWZpY2F0aW9uLnN0YXR1cyA9PT0gXCJlcnJvclwiKSB8fFxuICAgICAgYWN0aXZlTm90aWZpY2F0aW9uLnN0YXR1cyA9PT0gXCJzdWNjZXNcIlxuICAgICkge1xuICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaGlkZU5vdGlmaWNhdGlvbkhhbmRsZSgpO1xuICAgICAgfSwgMzAwMCk7XG4gICAgfVxuICB9LCBbYWN0aXZlTm90aWZpY2F0aW9uXSk7XG5cbiAgZnVuY3Rpb24gc2hvd05vdGlmaWNhdGlvbkhhbmRsZXIobm90aWZpY2F0aW9uRGF0YSkge1xuICAgIHNldEFjdGl2ZU5vdGlmaWNhdGlvbihub3RpZmljYXRpb25EYXRhKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVOb3RpZmljYXRpb25IYW5kbGUoKSB7XG4gICAgc2V0QWN0aXZlTm90aWZpY2F0aW9uKG51bGwpO1xuICB9XG5cbiAgY29uc3QgY29udGV4dCA9IHtcbiAgICBub3RpZmljYXRpb246IGFjdGl2ZU5vdGlmaWNhdGlvbixcbiAgICBzaG93Tm90aWZpY2F0aW9uOiBzaG93Tm90aWZpY2F0aW9uSGFuZGxlcixcbiAgICBoaWRlTm90aWZpY2F0aW9uOiBoaWRlTm90aWZpY2F0aW9uSGFuZGxlLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPE5vdGlmaWNhdGlvbkNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbnRleHR9PlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvTm90aWZpY2F0aW9uQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9uQ29udGV4dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/notification-context.js\n");

/***/ })

})