webpackHotUpdate_N_E("pages/index",{

/***/ "./components/input/newsletter-registration.js":
/*!*****************************************************!*\
  !*** ./components/input/newsletter-registration.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _newsletter_registration_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newsletter-registration.module.css */ \"./components/input/newsletter-registration.module.css\");\n/* harmony import */ var _newsletter_registration_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_newsletter_registration_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_notification_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/notification-context */ \"./store/notification-context.js\");\n\n\nvar _jsxFileName = \"/home/rom/Documents/dev/nextjs/tuto/section10-context/components/input/newsletter-registration.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction NewsletterRegistration() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isEmailRegistered = _useState[0],\n      setIsEmailRegistered = _useState[1];\n\n  var notificationCtx = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_store_notification_context__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    console.log('notification');\n  });\n  var inputRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n\n  function registrationHandler(event) {\n    event.preventDefault();\n    console.log(\"==>\", inputRef.current.value);\n    notificationCtx.showNotification({\n      title: \"Signing up ...\",\n      message: \"Registering for newsletter.\",\n      status: \"pending\"\n    });\n    fetch(\"/api/registration\", {\n      method: \"POST\",\n      body: JSON.stringify({\n        email: inputRef.current.value\n      }),\n      headers: {\n        \"Content-type\": \"application/json\"\n      }\n    }).then(function (raw) {\n      // fetch!=axios\n      // fetch doen't execute the catch block when receiving a 400/500 status code\n      console.log('xxx');\n\n      if (raw.ok) {\n        return raw.json();\n      }\n\n      raw.json().then(function (data) {\n        throw new Error(data.message || \"error message\");\n      });\n    }).then(function (data) {\n      setIsEmailRegistered(true);\n      notificationCtx.showNotification({\n        title: \"Success ! \",\n        message: \"Succesfully registered for newsletter !\",\n        status: \"succes\"\n      });\n    })[\"catch\"](function (err) {\n      notificationCtx.showNotification({\n        title: \"Error ! \",\n        message: err.message || \"Something went wrong !\",\n        status: \"error\"\n      });\n    });\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: _newsletter_registration_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.newsletter,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n      children: \"Sign up to stay updated!\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n      onSubmit: registrationHandler,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _newsletter_registration_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.control,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"email\",\n          id: \"email\",\n          placeholder: \"Your email\",\n          \"aria-label\": \"Your email\",\n          ref: inputRef\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          children: \"Register\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }, this), isEmailRegistered && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      style: {\n        color: \"red\"\n      },\n      children: \"REGISTERED\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 29\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 62,\n    columnNumber: 5\n  }, this);\n}\n\n_s(NewsletterRegistration, \"Q5fyOCwEZgkQWBHVIyzVXWBmgvE=\");\n\n_c = NewsletterRegistration;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsletterRegistration);\n\nvar _c;\n\n$RefreshReg$(_c, \"NewsletterRegistration\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9pbnB1dC9uZXdzbGV0dGVyLXJlZ2lzdHJhdGlvbi5qcz9hN2E0Il0sIm5hbWVzIjpbIk5ld3NsZXR0ZXJSZWdpc3RyYXRpb24iLCJ1c2VTdGF0ZSIsImlzRW1haWxSZWdpc3RlcmVkIiwic2V0SXNFbWFpbFJlZ2lzdGVyZWQiLCJub3RpZmljYXRpb25DdHgiLCJ1c2VDb250ZXh0IiwiTm90aWZpY2F0aW9uQ29udGV4dCIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJpbnB1dFJlZiIsInVzZVJlZiIsInJlZ2lzdHJhdGlvbkhhbmRsZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsInZhbHVlIiwic2hvd05vdGlmaWNhdGlvbiIsInRpdGxlIiwibWVzc2FnZSIsInN0YXR1cyIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlbWFpbCIsImhlYWRlcnMiLCJ0aGVuIiwicmF3Iiwib2siLCJqc29uIiwiZGF0YSIsIkVycm9yIiwiZXJyIiwiY2xhc3NlcyIsIm5ld3NsZXR0ZXIiLCJjb250cm9sIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7O0FBRUEsU0FBU0Esc0JBQVQsR0FBa0M7QUFBQTs7QUFBQSxrQkFDa0JDLHNEQUFRLENBQUMsS0FBRCxDQUQxQjtBQUFBLE1BQ3pCQyxpQkFEeUI7QUFBQSxNQUNOQyxvQkFETTs7QUFFaEMsTUFBTUMsZUFBZSxHQUFHQyx3REFBVSxDQUFDQyxtRUFBRCxDQUFsQztBQUVBQyx5REFBUyxDQUFDLFlBQUk7QUFDWkMsV0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWjtBQUNELEdBRlEsQ0FBVDtBQUtBLE1BQU1DLFFBQVEsR0FBR0Msb0RBQU0sRUFBdkI7O0FBQ0EsV0FBU0MsbUJBQVQsQ0FBNkJDLEtBQTdCLEVBQW9DO0FBQ2xDQSxTQUFLLENBQUNDLGNBQU47QUFDQU4sV0FBTyxDQUFDQyxHQUFSLENBQVksS0FBWixFQUFtQkMsUUFBUSxDQUFDSyxPQUFULENBQWlCQyxLQUFwQztBQUVBWixtQkFBZSxDQUFDYSxnQkFBaEIsQ0FBaUM7QUFDL0JDLFdBQUssRUFBRSxnQkFEd0I7QUFFL0JDLGFBQU8sRUFBRSw2QkFGc0I7QUFHL0JDLFlBQU0sRUFBRTtBQUh1QixLQUFqQztBQU1BQyxTQUFLLENBQUMsbUJBQUQsRUFBc0I7QUFDekJDLFlBQU0sRUFBRSxNQURpQjtBQUV6QkMsVUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUFFQyxhQUFLLEVBQUVoQixRQUFRLENBQUNLLE9BQVQsQ0FBaUJDO0FBQTFCLE9BQWYsQ0FGbUI7QUFHekJXLGFBQU8sRUFBRTtBQUNQLHdCQUFnQjtBQURUO0FBSGdCLEtBQXRCLENBQUwsQ0FPR0MsSUFQSCxDQU9RLFVBQUNDLEdBQUQsRUFBUztBQUNiO0FBQ0E7QUFDQXJCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVo7O0FBQ0EsVUFBSW9CLEdBQUcsQ0FBQ0MsRUFBUixFQUFZO0FBQ1YsZUFBT0QsR0FBRyxDQUFDRSxJQUFKLEVBQVA7QUFDRDs7QUFDREYsU0FBRyxDQUFDRSxJQUFKLEdBQVdILElBQVgsQ0FBZ0IsVUFBQ0ksSUFBRCxFQUFVO0FBQ3hCLGNBQU0sSUFBSUMsS0FBSixDQUFVRCxJQUFJLENBQUNiLE9BQUwsSUFBZ0IsZUFBMUIsQ0FBTjtBQUNELE9BRkQ7QUFHRCxLQWpCSCxFQWtCR1MsSUFsQkgsQ0FrQlEsVUFBQ0ksSUFBRCxFQUFVO0FBQ2Q3QiwwQkFBb0IsQ0FBQyxJQUFELENBQXBCO0FBQ0FDLHFCQUFlLENBQUNhLGdCQUFoQixDQUFpQztBQUMvQkMsYUFBSyxFQUFFLFlBRHdCO0FBRS9CQyxlQUFPLEVBQUUseUNBRnNCO0FBRy9CQyxjQUFNLEVBQUU7QUFIdUIsT0FBakM7QUFLRCxLQXpCSCxXQTBCUyxVQUFDYyxHQUFELEVBQVM7QUFDZDlCLHFCQUFlLENBQUNhLGdCQUFoQixDQUFpQztBQUMvQkMsYUFBSyxFQUFFLFVBRHdCO0FBRS9CQyxlQUFPLEVBQUVlLEdBQUcsQ0FBQ2YsT0FBSixJQUFlLHdCQUZPO0FBRy9CQyxjQUFNLEVBQUU7QUFIdUIsT0FBakM7QUFLRCxLQWhDSDtBQWlDRDs7QUFFRCxzQkFDRTtBQUFTLGFBQVMsRUFBRWUsMEVBQU8sQ0FBQ0MsVUFBNUI7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBTSxjQUFRLEVBQUV4QixtQkFBaEI7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUV1QiwwRUFBTyxDQUFDRSxPQUF4QjtBQUFBLGdDQUNFO0FBQ0UsY0FBSSxFQUFDLE9BRFA7QUFFRSxZQUFFLEVBQUMsT0FGTDtBQUdFLHFCQUFXLEVBQUMsWUFIZDtBQUlFLHdCQUFXLFlBSmI7QUFLRSxhQUFHLEVBQUUzQjtBQUxQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsRUFjR1IsaUJBQWlCLGlCQUFJO0FBQUcsV0FBSyxFQUFFO0FBQUVvQyxhQUFLLEVBQUU7QUFBVCxPQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZHhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBa0JEOztHQXpFUXRDLHNCOztLQUFBQSxzQjtBQTJFTUEscUZBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2lucHV0L25ld3NsZXR0ZXItcmVnaXN0cmF0aW9uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9uZXdzbGV0dGVyLXJlZ2lzdHJhdGlvbi5tb2R1bGUuY3NzXCI7XG5cbmltcG9ydCBOb3RpZmljYXRpb25Db250ZXh0IGZyb20gXCIuLi8uLi9zdG9yZS9ub3RpZmljYXRpb24tY29udGV4dFwiO1xuXG5mdW5jdGlvbiBOZXdzbGV0dGVyUmVnaXN0cmF0aW9uKCkge1xuICBjb25zdCBbaXNFbWFpbFJlZ2lzdGVyZWQsIHNldElzRW1haWxSZWdpc3RlcmVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgbm90aWZpY2F0aW9uQ3R4ID0gdXNlQ29udGV4dChOb3RpZmljYXRpb25Db250ZXh0KTtcblxuICB1c2VFZmZlY3QoKCk9PntcbiAgICBjb25zb2xlLmxvZygnbm90aWZpY2F0aW9uJylcbiAgfSlcbiAgXG5cbiAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWYoKTtcbiAgZnVuY3Rpb24gcmVnaXN0cmF0aW9uSGFuZGxlcihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc29sZS5sb2coXCI9PT5cIiwgaW5wdXRSZWYuY3VycmVudC52YWx1ZSk7XG5cbiAgICBub3RpZmljYXRpb25DdHguc2hvd05vdGlmaWNhdGlvbih7XG4gICAgICB0aXRsZTogXCJTaWduaW5nIHVwIC4uLlwiLFxuICAgICAgbWVzc2FnZTogXCJSZWdpc3RlcmluZyBmb3IgbmV3c2xldHRlci5cIixcbiAgICAgIHN0YXR1czogXCJwZW5kaW5nXCIsXG4gICAgfSk7XG5cbiAgICBmZXRjaChcIi9hcGkvcmVnaXN0cmF0aW9uXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsOiBpbnB1dFJlZi5jdXJyZW50LnZhbHVlIH0pLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgfSlcbiAgICAgIC50aGVuKChyYXcpID0+IHtcbiAgICAgICAgLy8gZmV0Y2ghPWF4aW9zXG4gICAgICAgIC8vIGZldGNoIGRvZW4ndCBleGVjdXRlIHRoZSBjYXRjaCBibG9jayB3aGVuIHJlY2VpdmluZyBhIDQwMC81MDAgc3RhdHVzIGNvZGVcbiAgICAgICAgY29uc29sZS5sb2coJ3h4eCcpXG4gICAgICAgIGlmIChyYXcub2spIHtcbiAgICAgICAgICByZXR1cm4gcmF3Lmpzb24oKTtcbiAgICAgICAgfVxuICAgICAgICByYXcuanNvbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZGF0YS5tZXNzYWdlIHx8IFwiZXJyb3IgbWVzc2FnZVwiKTtcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgc2V0SXNFbWFpbFJlZ2lzdGVyZWQodHJ1ZSk7XG4gICAgICAgIG5vdGlmaWNhdGlvbkN0eC5zaG93Tm90aWZpY2F0aW9uKHtcbiAgICAgICAgICB0aXRsZTogXCJTdWNjZXNzICEgXCIsXG4gICAgICAgICAgbWVzc2FnZTogXCJTdWNjZXNmdWxseSByZWdpc3RlcmVkIGZvciBuZXdzbGV0dGVyICFcIixcbiAgICAgICAgICBzdGF0dXM6IFwic3VjY2VzXCIsXG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIG5vdGlmaWNhdGlvbkN0eC5zaG93Tm90aWZpY2F0aW9uKHtcbiAgICAgICAgICB0aXRsZTogXCJFcnJvciAhIFwiLFxuICAgICAgICAgIG1lc3NhZ2U6IGVyci5tZXNzYWdlIHx8IFwiU29tZXRoaW5nIHdlbnQgd3JvbmcgIVwiLFxuICAgICAgICAgIHN0YXR1czogXCJlcnJvclwiLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzZXMubmV3c2xldHRlcn0+XG4gICAgICA8aDI+U2lnbiB1cCB0byBzdGF5IHVwZGF0ZWQhPC9oMj5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtyZWdpc3RyYXRpb25IYW5kbGVyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udHJvbH0+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgZW1haWxcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIllvdXIgZW1haWxcIlxuICAgICAgICAgICAgcmVmPXtpbnB1dFJlZn1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b24+UmVnaXN0ZXI8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgICB7aXNFbWFpbFJlZ2lzdGVyZWQgJiYgPHAgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIgfX0+UkVHSVNURVJFRDwvcD59XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBOZXdzbGV0dGVyUmVnaXN0cmF0aW9uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/input/newsletter-registration.js\n");

/***/ })

})