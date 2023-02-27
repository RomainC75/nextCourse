"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/last-sales",{

/***/ "./pages/last-sales.jsx":
/*!******************************!*\
  !*** ./pages/last-sales.jsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst api_url = \"https://nextjs-course-59b30-default-rtdb.europe-west1.firebasedatabase.app/sales.json\";\nconst LastSales = ()=>{\n    _s();\n    const { data , error , isLoading  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(api_url, (url)=>fetch(url).then((res)=>res.json()));\n    const [sales, setSales] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (data) {\n            const transformedSales = Object.keys(data).map((key)=>({\n                    id: key,\n                    ...data[key]\n                }));\n            console.log(\"transformed : \", transformedSales);\n            setSales(transformedSales);\n        }\n    }, [\n        data\n    ]);\n    if (isLoading) {\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Is loading ...\"\n        }, void 0, false, {\n            fileName: \"/home/rom/Documents/dev/nextjs/tuto/section5/pages/last-sales.jsx\",\n            lineNumber: 20,\n            columnNumber: 9\n        }, undefined);\n    }\n    if (error) {\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"error !\"\n        }, void 0, false, {\n            fileName: \"/home/rom/Documents/dev/nextjs/tuto/section5/pages/last-sales.jsx\",\n            lineNumber: 26,\n            columnNumber: 9\n        }, undefined);\n    }\n    if (!data) {\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"No data\"\n        }, void 0, false, {\n            fileName: \"/home/rom/Documents/dev/nextjs/tuto/section5/pages/last-sales.jsx\",\n            lineNumber: 30,\n            columnNumber: 9\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        children: sales && sales.map((sale)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: [\n                    sale.username,\n                    \" - \",\n                    sale.volume\n                ]\n            }, sale.id, true, {\n                fileName: \"/home/rom/Documents/dev/nextjs/tuto/section5/pages/last-sales.jsx\",\n                lineNumber: 35,\n                columnNumber: 35\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/home/rom/Documents/dev/nextjs/tuto/section5/pages/last-sales.jsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LastSales, \"LsL7BpLV5oz6cZ7L6wqp4lSTmlo=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = LastSales;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LastSales);\nvar _c;\n$RefreshReg$(_c, \"LastSales\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sYXN0LXNhbGVzLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3QjtBQUMwQjtBQUVsRCxNQUFNSSxVQUFVO0FBRWhCLE1BQU1DLFlBQVksSUFBTTs7SUFDcEIsTUFBTSxFQUFDQyxLQUFJLEVBQUVDLE1BQUssRUFBRUMsVUFBUyxFQUFDLEdBQUdSLCtDQUFNQSxDQUFDSSxTQUFTLENBQUNLLE1BQVFDLE1BQU1ELEtBQUtFLElBQUksQ0FBQ0MsQ0FBQUEsTUFBT0EsSUFBSUMsSUFBSTtJQUV6RixNQUFNLENBQUNDLE9BQU9DLFNBQVUsR0FBR1osK0NBQVFBLENBQUMsSUFBSTtJQUV4Q0QsZ0RBQVNBLENBQUMsSUFBSTtRQUNWLElBQUdJLE1BQUs7WUFDSixNQUFNVSxtQkFBbUJDLE9BQU9DLElBQUksQ0FBQ1osTUFBTWEsR0FBRyxDQUFDQyxDQUFBQSxNQUFNO29CQUFDQyxJQUFHRDtvQkFBSyxHQUFHZCxJQUFJLENBQUNjLElBQUk7Z0JBQUM7WUFDM0VFLFFBQVFDLEdBQUcsQ0FBQyxrQkFBa0JQO1lBQzlCRCxTQUFTQztRQUNiLENBQUM7SUFDTCxHQUFFO1FBQUNWO0tBQUs7SUFFUixJQUFHRSxXQUFVO3NCQUNULDhEQUFDZ0I7c0JBQUU7Ozs7OztJQUNQLENBQUM7SUFJRCxJQUFHakIsT0FBTTtzQkFDTCw4REFBQ2lCO3NCQUFFOzs7Ozs7SUFDUCxDQUFDO0lBRUQsSUFBRyxDQUFDbEIsTUFBSztzQkFDTCw4REFBQ2tCO3NCQUFFOzs7Ozs7SUFDUCxDQUFDO0lBRUgscUJBQ0UsOERBQUNDO2tCQUNJWCxTQUFTQSxNQUFNSyxHQUFHLENBQUNPLENBQUFBLHFCQUFNLDhEQUFDQzs7b0JBQ3RCRCxLQUFLRSxRQUFRO29CQUFDO29CQUFJRixLQUFLRyxNQUFNOztlQURDSCxLQUFLTCxFQUFFOzs7Ozs7Ozs7O0FBS2xEO0dBbENNaEI7O1FBQytCTCwyQ0FBTUE7OztLQURyQ0s7QUFvQ04sK0RBQWVBLFNBQVNBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbGFzdC1zYWxlcy5qc3g/NjdjNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IGFwaV91cmwgPSAnaHR0cHM6Ly9uZXh0anMtY291cnNlLTU5YjMwLWRlZmF1bHQtcnRkYi5ldXJvcGUtd2VzdDEuZmlyZWJhc2VkYXRhYmFzZS5hcHAvc2FsZXMuanNvbidcblxuY29uc3QgTGFzdFNhbGVzID0gKCkgPT4ge1xuICAgIGNvbnN0IHtkYXRhLCBlcnJvciwgaXNMb2FkaW5nfSA9IHVzZVNXUihhcGlfdXJsLCAodXJsKSA9PiBmZXRjaCh1cmwpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpKVxuICAgIFxuICAgIGNvbnN0IFtzYWxlcywgc2V0U2FsZXMgXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgICB1c2VFZmZlY3QoKCk9PntcbiAgICAgICAgaWYoZGF0YSl7XG4gICAgICAgICAgICBjb25zdCB0cmFuc2Zvcm1lZFNhbGVzID0gT2JqZWN0LmtleXMoZGF0YSkubWFwKGtleT0+KHtpZDprZXksIC4uLmRhdGFba2V5XSB9KSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0cmFuc2Zvcm1lZCA6ICcgLHRyYW5zZm9ybWVkU2FsZXMpXG4gICAgICAgICAgICBzZXRTYWxlcyh0cmFuc2Zvcm1lZFNhbGVzKVxuICAgICAgICB9XG4gICAgfSxbZGF0YV0pXG5cbiAgICBpZihpc0xvYWRpbmcpe1xuICAgICAgICA8cD5JcyBsb2FkaW5nIC4uLjwvcD5cbiAgICB9XG5cblxuXG4gICAgaWYoZXJyb3Ipe1xuICAgICAgICA8cD5lcnJvciAhPC9wPlxuICAgIH1cblxuICAgIGlmKCFkYXRhKXtcbiAgICAgICAgPHA+Tm8gZGF0YTwvcD5cbiAgICB9XG5cbiAgcmV0dXJuIChcbiAgICA8dWw+XG4gICAgICAgIHtzYWxlcyAmJiBzYWxlcy5tYXAoc2FsZT0+PGxpIGtleT17c2FsZS5pZH0+XG4gICAgICAgICAgICB7c2FsZS51c2VybmFtZX0gLSB7c2FsZS52b2x1bWV9XG4gICAgICAgIDwvbGk+KX1cbiAgICA8L3VsPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExhc3RTYWxlcyJdLCJuYW1lcyI6WyJ1c2VTV1IiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXBpX3VybCIsIkxhc3RTYWxlcyIsImRhdGEiLCJlcnJvciIsImlzTG9hZGluZyIsInVybCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJzYWxlcyIsInNldFNhbGVzIiwidHJhbnNmb3JtZWRTYWxlcyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJwIiwidWwiLCJzYWxlIiwibGkiLCJ1c2VybmFtZSIsInZvbHVtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/last-sales.jsx\n"));

/***/ })

});