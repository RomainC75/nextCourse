"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/events/[...slug]",{

/***/ "./pages/events/[...slug].jsx":
/*!************************************!*\
  !*** ./pages/events/[...slug].jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _dummy_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dummy-data */ \"./pages/dummy-data.js\");\n/* harmony import */ var _components_events_event_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/events/event-list */ \"./components/events/event-list.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst EventSlug = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    console.log(\"query\", router.query);\n    const filteredData = router.query.slug;\n    console.log(\"=>\", filteredData);\n    // console.log('=========>', month, year)\n    const events = (0,_dummy_data__WEBPACK_IMPORTED_MODULE_3__.getFilteredEvents)({\n        month: filteredData[1],\n        year: filteredData[0]\n    });\n    if (events.length === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"No event found\"\n        }, void 0, false, {\n            fileName: \"/home/rom/Documents/dev/nextjs/tuto/section4/pages/events/[...slug].jsx\",\n            lineNumber: 17,\n            columnNumber: 17\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_events_event_list__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        list: events\n    }, void 0, false, {\n        fileName: \"/home/rom/Documents/dev/nextjs/tuto/section4/pages/events/[...slug].jsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(EventSlug, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = EventSlug;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EventSlug);\nvar _c;\n$RefreshReg$(_c, \"EventSlug\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ldmVudHMvWy4uLnNsdWddLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBeUI7QUFDWTtBQUNZO0FBQ1M7QUFFMUQsTUFBTUksWUFBWSxJQUFNOztJQUNwQixNQUFNQyxTQUFTSixzREFBU0E7SUFDeEJLLFFBQVFDLEdBQUcsQ0FBQyxTQUFTRixPQUFPRyxLQUFLO0lBQ2pDLE1BQU1DLGVBQWVKLE9BQU9HLEtBQUssQ0FBQ0UsSUFBSTtJQUN0Q0osUUFBUUMsR0FBRyxDQUFDLE1BQU1FO0lBQ2xCLHlDQUF5QztJQUN6QyxNQUFNRSxTQUFTVCw4REFBaUJBLENBQUM7UUFDN0JVLE9BQU1ILFlBQVksQ0FBQyxFQUFFO1FBQ3JCSSxNQUFLSixZQUFZLENBQUMsRUFBRTtJQUN4QjtJQUNBLElBQUdFLE9BQU9HLE1BQU0sS0FBRyxHQUFFO1FBQ2pCLHFCQUFRLDhEQUFDQztzQkFBRTs7Ozs7O0lBQ2YsQ0FBQztJQUNILHFCQUNFLDhEQUFDWixxRUFBU0E7UUFBQ2EsTUFBTUw7Ozs7OztBQUVyQjtHQWhCTVA7O1FBQ2FILGtEQUFTQTs7O0tBRHRCRztBQWtCTiwrREFBZUEsU0FBU0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ldmVudHMvWy4uLnNsdWddLmpzeD8yZmRlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IGdldEZpbHRlcmVkRXZlbnRzIH0gZnJvbSAnLi4vZHVtbXktZGF0YSdcbmltcG9ydCBFdmVudExpc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9ldmVudHMvZXZlbnQtbGlzdCdcblxuY29uc3QgRXZlbnRTbHVnID0gKCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgY29uc29sZS5sb2coJ3F1ZXJ5Jywgcm91dGVyLnF1ZXJ5KVxuICAgIGNvbnN0IGZpbHRlcmVkRGF0YSA9IHJvdXRlci5xdWVyeS5zbHVnXG4gICAgY29uc29sZS5sb2coJz0+JywgZmlsdGVyZWREYXRhKVxuICAgIC8vIGNvbnNvbGUubG9nKCc9PT09PT09PT0+JywgbW9udGgsIHllYXIpXG4gICAgY29uc3QgZXZlbnRzID0gZ2V0RmlsdGVyZWRFdmVudHMoe1xuICAgICAgICBtb250aDpmaWx0ZXJlZERhdGFbMV0sXG4gICAgICAgIHllYXI6ZmlsdGVyZWREYXRhWzBdXG4gICAgfSlcbiAgICBpZihldmVudHMubGVuZ3RoPT09MCl7XG4gICAgICAgIHJldHVybiAoPHA+Tm8gZXZlbnQgZm91bmQ8L3A+KVxuICAgIH1cbiAgcmV0dXJuIChcbiAgICA8RXZlbnRMaXN0IGxpc3Q9e2V2ZW50c30vPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50U2x1ZyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJvdXRlciIsImdldEZpbHRlcmVkRXZlbnRzIiwiRXZlbnRMaXN0IiwiRXZlbnRTbHVnIiwicm91dGVyIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5IiwiZmlsdGVyZWREYXRhIiwic2x1ZyIsImV2ZW50cyIsIm1vbnRoIiwieWVhciIsImxlbmd0aCIsInAiLCJsaXN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/events/[...slug].jsx\n"));

/***/ })

});