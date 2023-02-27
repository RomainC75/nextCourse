"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/last-sales";
exports.ids = ["pages/last-sales"];
exports.modules = {

/***/ "./pages/last-sales.jsx":
/*!******************************!*\
  !*** ./pages/last-sales.jsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst api_url = \"https://nextjs-course-59b30-default-rtdb.europe-west1.firebasedatabase.app/sales.json\";\nconst LastSales = ({ sales  })=>{\n    if (!sales) {\n        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"No data\"\n        }, void 0, false, {\n            fileName: \"/home/rom/Documents/dev/nextjs/tuto/section5/pages/last-sales.jsx\",\n            lineNumber: 5,\n            columnNumber: 9\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        children: sales.map((sale)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: [\n                    sale.username,\n                    \" - \",\n                    sale.volume\n                ]\n            }, sale.id, true, {\n                fileName: \"/home/rom/Documents/dev/nextjs/tuto/section5/pages/last-sales.jsx\",\n                lineNumber: 10,\n                columnNumber: 26\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/home/rom/Documents/dev/nextjs/tuto/section5/pages/last-sales.jsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LastSales);\nasync function getStaticProps() {\n    return fetch(api_url).then((ans)=>ans.json()).then((data)=>{\n        const transformedSales = Object.keys(data).map((key)=>({\n                id: key,\n                ...data[key]\n            }));\n        return {\n            props: {\n                sales: transformedSales\n            },\n            revalidate: 10\n        };\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sYXN0LXNhbGVzLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLE1BQU1BLFVBQVU7QUFFaEIsTUFBTUMsWUFBWSxDQUFDLEVBQUNDLE1BQUssRUFBQyxHQUFLO0lBQzNCLElBQUcsQ0FBQ0EsT0FBTTtzQkFDTiw4REFBQ0M7c0JBQUU7Ozs7OztJQUNQLENBQUM7SUFFSCxxQkFDRSw4REFBQ0M7a0JBQ0lGLE1BQU1HLEdBQUcsQ0FBQ0MsQ0FBQUEscUJBQU0sOERBQUNDOztvQkFDYkQsS0FBS0UsUUFBUTtvQkFBQztvQkFBSUYsS0FBS0csTUFBTTs7ZUFEUkgsS0FBS0ksRUFBRTs7Ozs7Ozs7OztBQUt6QztBQUVBLGlFQUFlVCxTQUFTQSxFQUFBO0FBR2pCLGVBQWVVLGlCQUFnQjtJQUNsQyxPQUFPQyxNQUFNWixTQUNaYSxJQUFJLENBQUNDLENBQUFBLE1BQUtBLElBQUlDLElBQUksSUFDbEJGLElBQUksQ0FBQ0csQ0FBQUEsT0FBTTtRQUNSLE1BQU1DLG1CQUFtQkMsT0FBT0MsSUFBSSxDQUFDSCxNQUFNWCxHQUFHLENBQUNlLENBQUFBLE1BQU07Z0JBQUNWLElBQUdVO2dCQUFLLEdBQUdKLElBQUksQ0FBQ0ksSUFBSTtZQUFDO1FBQzNFLE9BQU07WUFDRkMsT0FBTTtnQkFDRm5CLE9BQU9lO1lBQ1g7WUFDQUssWUFBVztRQUNmO0lBQ0o7QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VjdGlvbjUvLi9wYWdlcy9sYXN0LXNhbGVzLmpzeD82N2M2Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFwaV91cmwgPSAnaHR0cHM6Ly9uZXh0anMtY291cnNlLTU5YjMwLWRlZmF1bHQtcnRkYi5ldXJvcGUtd2VzdDEuZmlyZWJhc2VkYXRhYmFzZS5hcHAvc2FsZXMuanNvbidcblxuY29uc3QgTGFzdFNhbGVzID0gKHtzYWxlc30pID0+IHtcbiAgICBpZighc2FsZXMpe1xuICAgICAgICA8cD5ObyBkYXRhPC9wPlxuICAgIH1cblxuICByZXR1cm4gKFxuICAgIDx1bD5cbiAgICAgICAge3NhbGVzLm1hcChzYWxlPT48bGkga2V5PXtzYWxlLmlkfT5cbiAgICAgICAgICAgIHtzYWxlLnVzZXJuYW1lfSAtIHtzYWxlLnZvbHVtZX1cbiAgICAgICAgPC9saT4pfVxuICAgIDwvdWw+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGFzdFNhbGVzXG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCl7XG4gICAgcmV0dXJuIGZldGNoKGFwaV91cmwpXG4gICAgLnRoZW4oYW5zPT5hbnMuanNvbigpKVxuICAgIC50aGVuKGRhdGE9PntcbiAgICAgICAgY29uc3QgdHJhbnNmb3JtZWRTYWxlcyA9IE9iamVjdC5rZXlzKGRhdGEpLm1hcChrZXk9Pih7aWQ6a2V5LCAuLi5kYXRhW2tleV0gfSkpXG4gICAgICAgIHJldHVybntcbiAgICAgICAgICAgIHByb3BzOntcbiAgICAgICAgICAgICAgICBzYWxlczogdHJhbnNmb3JtZWRTYWxlcyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXZhbGlkYXRlOjEwXG4gICAgICAgIH1cbiAgICB9KVxufSJdLCJuYW1lcyI6WyJhcGlfdXJsIiwiTGFzdFNhbGVzIiwic2FsZXMiLCJwIiwidWwiLCJtYXAiLCJzYWxlIiwibGkiLCJ1c2VybmFtZSIsInZvbHVtZSIsImlkIiwiZ2V0U3RhdGljUHJvcHMiLCJmZXRjaCIsInRoZW4iLCJhbnMiLCJqc29uIiwiZGF0YSIsInRyYW5zZm9ybWVkU2FsZXMiLCJPYmplY3QiLCJrZXlzIiwia2V5IiwicHJvcHMiLCJyZXZhbGlkYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/last-sales.jsx\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/last-sales.jsx"));
module.exports = __webpack_exports__;

})();