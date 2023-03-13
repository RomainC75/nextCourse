webpackHotUpdate_N_E("pages/index",{

/***/ "./components/input/newsletter-registration.js":
/*!*****************************************************!*\
  !*** ./components/input/newsletter-registration.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _newsletter_registration_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newsletter-registration.module.css */ \"./components/input/newsletter-registration.module.css\");\n/* harmony import */ var _newsletter_registration_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_newsletter_registration_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_notification_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/notification-context */ \"./store/notification-context.js\");\n\n\nvar _jsxFileName = \"/home/rom/Documents/dev/nextjs/tuto/section10-context/components/input/newsletter-registration.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction NewsletterRegistration() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isEmailRegistered = _useState[0],\n      setIsEmailRegistered = _useState[1];\n\n  var notificationCtx = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_store_notification_context__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    console.log('notification');\n  });\n  var inputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n\n  function registrationHandler(event) {\n    event.preventDefault();\n    console.log(\"==>\", inputRef.current.value);\n    notificationCtx.showNotification({\n      title: \"Signing up ...\",\n      message: \"Registering for newsletter.\",\n      status: \"pending\"\n    });\n    fetch(\"/api/registration\", {\n      method: \"POST\",\n      body: JSON.stringify({\n        email: inputRef.current.value\n      }),\n      headers: {\n        \"Content-type\": \"application/json\"\n      }\n    }).then(function (raw) {\n      // fetch!=axios\n      // fetch doen't execute the catch block when receiving a 400/500 status code\n      if (raw.ok) {\n        return raw.json();\n      }\n\n      return raw.json().then(function (data) {\n        throw new Error(\"error message\");\n      });\n    }).then(function (data) {\n      // setIsEmailRegistered(true);\n      notificationCtx.showNotification({\n        title: \"Success ! \",\n        message: \"Succesfully registered for newsletter !\",\n        status: \"succes\"\n      });\n    })[\"catch\"](function (err) {\n      notificationCtx.showNotification({\n        title: \"Error ! \",\n        message: err.message || \"Something went wrong !\",\n        status: \"error\"\n      });\n    });\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: _newsletter_registration_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.newsletter,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n      children: \"Sign up to stay updated!\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n      onSubmit: registrationHandler,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _newsletter_registration_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.control,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"email\",\n          id: \"email\",\n          placeholder: \"Your email\",\n          \"aria-label\": \"Your email\",\n          ref: inputRef\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          children: \"Register\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }, this), isEmailRegistered && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      style: {\n        color: \"red\"\n      },\n      children: \"REGISTERED\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 29\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 61,\n    columnNumber: 5\n  }, this);\n}\n\n_s(NewsletterRegistration, \"Q5fyOCwEZgkQWBHVIyzVXWBmgvE=\");\n\n_c = NewsletterRegistration;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsletterRegistration);\n\nvar _c;\n\n$RefreshReg$(_c, \"NewsletterRegistration\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbnB1dC9uZXdzbGV0dGVyLXJlZ2lzdHJhdGlvbi5qcz9hN2E0Il0sIm5hbWVzIjpbIk5ld3NsZXR0ZXJSZWdpc3RyYXRpb24iLCJ1c2VTdGF0ZSIsImlzRW1haWxSZWdpc3RlcmVkIiwic2V0SXNFbWFpbFJlZ2lzdGVyZWQiLCJub3RpZmljYXRpb25DdHgiLCJ1c2VDb250ZXh0IiwiTm90aWZpY2F0aW9uQ29udGV4dCIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJpbnB1dFJlZiIsInVzZVJlZiIsInJlZ2lzdHJhdGlvbkhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsInZhbHVlIiwic2hvd05vdGlmaWNhdGlvbiIsInRpdGxlIiwibWVzc2FnZSIsInN0YXR1cyIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlbWFpbCIsImhlYWRlcnMiLCJ0aGVuIiwicmF3Iiwib2siLCJqc29uIiwiZGF0YSIsIkVycm9yIiwiZXJyIiwiY2xhc3NlcyIsIm5ld3NsZXR0ZXIiLCJjb250cm9sIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBRUEsU0FBU0Esc0JBQVQsR0FBa0M7QUFBQTs7QUFBQSxrQkFDa0JDLHNEQUFRLENBQUMsS0FBRCxDQUQxQjtBQUFBLE1BQ3pCQyxpQkFEeUI7QUFBQSxNQUNOQyxvQkFETTs7QUFFaEMsTUFBTUMsZUFBZSxHQUFHQyx3REFBVSxDQUFDQyxtRUFBRCxDQUFsQztBQUVBQyx5REFBUyxDQUFDLFlBQUk7QUFDWkMsV0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWjtBQUNELEdBRlEsQ0FBVDtBQUtBLE1BQU1DLFFBQVEsR0FBR0Msb0RBQU0sRUFBdkI7O0FBQ0EsV0FBU0MsbUJBQVQsQ0FBNkJDLEtBQTdCLEVBQW9DO0FBQ2xDQSxTQUFLLENBQUNDLGNBQU47QUFDQU4sV0FBTyxDQUFDQyxHQUFSLENBQVksS0FBWixFQUFtQkMsUUFBUSxDQUFDSyxPQUFULENBQWlCQyxLQUFwQztBQUVBWixtQkFBZSxDQUFDYSxnQkFBaEIsQ0FBaUM7QUFDL0JDLFdBQUssRUFBRSxnQkFEd0I7QUFFL0JDLGFBQU8sRUFBRSw2QkFGc0I7QUFHL0JDLFlBQU0sRUFBRTtBQUh1QixLQUFqQztBQU1BQyxTQUFLLENBQUMsbUJBQUQsRUFBc0I7QUFDekJDLFlBQU0sRUFBRSxNQURpQjtBQUV6QkMsVUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUFFQyxhQUFLLEVBQUVoQixRQUFRLENBQUNLLE9BQVQsQ0FBaUJDO0FBQTFCLE9BQWYsQ0FGbUI7QUFHekJXLGFBQU8sRUFBRTtBQUNQLHdCQUFnQjtBQURUO0FBSGdCLEtBQXRCLENBQUwsQ0FPR0MsSUFQSCxDQU9RLFVBQUNDLEdBQUQsRUFBUztBQUNiO0FBQ0E7QUFDQSxVQUFJQSxHQUFHLENBQUNDLEVBQVIsRUFBWTtBQUNWLGVBQU9ELEdBQUcsQ0FBQ0UsSUFBSixFQUFQO0FBQ0Q7O0FBQ0QsYUFBT0YsR0FBRyxDQUFDRSxJQUFKLEdBQVdILElBQVgsQ0FBZ0IsVUFBQ0ksSUFBRCxFQUFVO0FBQy9CLGNBQU0sSUFBSUMsS0FBSixDQUFVLGVBQVYsQ0FBTjtBQUNELE9BRk0sQ0FBUDtBQUdELEtBaEJILEVBaUJHTCxJQWpCSCxDQWlCUSxVQUFDSSxJQUFELEVBQVU7QUFDZDtBQUNBNUIscUJBQWUsQ0FBQ2EsZ0JBQWhCLENBQWlDO0FBQy9CQyxhQUFLLEVBQUUsWUFEd0I7QUFFL0JDLGVBQU8sRUFBRSx5Q0FGc0I7QUFHL0JDLGNBQU0sRUFBRTtBQUh1QixPQUFqQztBQUtELEtBeEJILFdBeUJTLFVBQUNjLEdBQUQsRUFBUztBQUNkOUIscUJBQWUsQ0FBQ2EsZ0JBQWhCLENBQWlDO0FBQy9CQyxhQUFLLEVBQUUsVUFEd0I7QUFFL0JDLGVBQU8sRUFBRWUsR0FBRyxDQUFDZixPQUFKLElBQWUsd0JBRk87QUFHL0JDLGNBQU0sRUFBRTtBQUh1QixPQUFqQztBQUtELEtBL0JIO0FBZ0NEOztBQUVELHNCQUNFO0FBQVMsYUFBUyxFQUFFZSwwRUFBTyxDQUFDQyxVQUE1QjtBQUFBLDRCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFNLGNBQVEsRUFBRXhCLG1CQUFoQjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBRXVCLDBFQUFPLENBQUNFLE9BQXhCO0FBQUEsZ0NBQ0U7QUFDRSxjQUFJLEVBQUMsT0FEUDtBQUVFLFlBQUUsRUFBQyxPQUZMO0FBR0UscUJBQVcsRUFBQyxZQUhkO0FBSUUsd0JBQVcsWUFKYjtBQUtFLGFBQUcsRUFBRTNCO0FBTFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixFQWNHUixpQkFBaUIsaUJBQUk7QUFBRyxXQUFLLEVBQUU7QUFBRW9DLGFBQUssRUFBRTtBQUFULE9BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFrQkQ7O0dBeEVRdEMsc0I7O0tBQUFBLHNCO0FBMEVNQSxxRkFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvaW5wdXQvbmV3c2xldHRlci1yZWdpc3RyYXRpb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL25ld3NsZXR0ZXItcmVnaXN0cmF0aW9uLm1vZHVsZS5jc3NcIjtcblxuaW1wb3J0IE5vdGlmaWNhdGlvbkNvbnRleHQgZnJvbSBcIi4uLy4uL3N0b3JlL25vdGlmaWNhdGlvbi1jb250ZXh0XCI7XG5cbmZ1bmN0aW9uIE5ld3NsZXR0ZXJSZWdpc3RyYXRpb24oKSB7XG4gIGNvbnN0IFtpc0VtYWlsUmVnaXN0ZXJlZCwgc2V0SXNFbWFpbFJlZ2lzdGVyZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBub3RpZmljYXRpb25DdHggPSB1c2VDb250ZXh0KE5vdGlmaWNhdGlvbkNvbnRleHQpO1xuXG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGNvbnNvbGUubG9nKCdub3RpZmljYXRpb24nKVxuICB9KVxuICBcblxuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZigpO1xuICBmdW5jdGlvbiByZWdpc3RyYXRpb25IYW5kbGVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zb2xlLmxvZyhcIj09PlwiLCBpbnB1dFJlZi5jdXJyZW50LnZhbHVlKTtcblxuICAgIG5vdGlmaWNhdGlvbkN0eC5zaG93Tm90aWZpY2F0aW9uKHtcbiAgICAgIHRpdGxlOiBcIlNpZ25pbmcgdXAgLi4uXCIsXG4gICAgICBtZXNzYWdlOiBcIlJlZ2lzdGVyaW5nIGZvciBuZXdzbGV0dGVyLlwiLFxuICAgICAgc3RhdHVzOiBcInBlbmRpbmdcIixcbiAgICB9KTtcblxuICAgIGZldGNoKFwiL2FwaS9yZWdpc3RyYXRpb25cIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWw6IGlucHV0UmVmLmN1cnJlbnQudmFsdWUgfSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICB9KVxuICAgICAgLnRoZW4oKHJhdykgPT4ge1xuICAgICAgICAvLyBmZXRjaCE9YXhpb3NcbiAgICAgICAgLy8gZmV0Y2ggZG9lbid0IGV4ZWN1dGUgdGhlIGNhdGNoIGJsb2NrIHdoZW4gcmVjZWl2aW5nIGEgNDAwLzUwMCBzdGF0dXMgY29kZVxuICAgICAgICBpZiAocmF3Lm9rKSB7XG4gICAgICAgICAgcmV0dXJuIHJhdy5qc29uKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJhdy5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImVycm9yIG1lc3NhZ2VcIik7XG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIC8vIHNldElzRW1haWxSZWdpc3RlcmVkKHRydWUpO1xuICAgICAgICBub3RpZmljYXRpb25DdHguc2hvd05vdGlmaWNhdGlvbih7XG4gICAgICAgICAgdGl0bGU6IFwiU3VjY2VzcyAhIFwiLFxuICAgICAgICAgIG1lc3NhZ2U6IFwiU3VjY2VzZnVsbHkgcmVnaXN0ZXJlZCBmb3IgbmV3c2xldHRlciAhXCIsXG4gICAgICAgICAgc3RhdHVzOiBcInN1Y2Nlc1wiLFxuICAgICAgICB9KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBub3RpZmljYXRpb25DdHguc2hvd05vdGlmaWNhdGlvbih7XG4gICAgICAgICAgdGl0bGU6IFwiRXJyb3IgISBcIixcbiAgICAgICAgICBtZXNzYWdlOiBlcnIubWVzc2FnZSB8fCBcIlNvbWV0aGluZyB3ZW50IHdyb25nICFcIixcbiAgICAgICAgICBzdGF0dXM6IFwiZXJyb3JcIixcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLm5ld3NsZXR0ZXJ9PlxuICAgICAgPGgyPlNpZ24gdXAgdG8gc3RheSB1cGRhdGVkITwvaDI+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17cmVnaXN0cmF0aW9uSGFuZGxlcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJZb3VyIGVtYWlsXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJZb3VyIGVtYWlsXCJcbiAgICAgICAgICAgIHJlZj17aW5wdXRSZWZ9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uPlJlZ2lzdGVyPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgICAge2lzRW1haWxSZWdpc3RlcmVkICYmIDxwIHN0eWxlPXt7IGNvbG9yOiBcInJlZFwiIH19PlJFR0lTVEVSRUQ8L3A+fVxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmV3c2xldHRlclJlZ2lzdHJhdGlvbjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/input/newsletter-registration.js\n");

/***/ })

})