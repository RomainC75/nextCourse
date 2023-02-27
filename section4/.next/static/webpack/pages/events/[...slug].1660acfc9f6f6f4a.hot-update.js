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

/***/ "./pages/dummy-data.js":
/*!*****************************!*\
  !*** ./pages/dummy-data.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAllEvents\": function() { return /* binding */ getAllEvents; },\n/* harmony export */   \"getEventById\": function() { return /* binding */ getEventById; },\n/* harmony export */   \"getFeaturedEvents\": function() { return /* binding */ getFeaturedEvents; },\n/* harmony export */   \"getFilteredEvents\": function() { return /* binding */ getFilteredEvents; }\n/* harmony export */ });\nconst DUMMY_EVENTS = [\n    {\n        id: \"e1\",\n        title: \"Programming for everyone\",\n        description: \"Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.\",\n        location: \"Somestreet 25, 12345 San Somewhereo\",\n        date: \"2021-05-12\",\n        image: \"images/coding-event.jpg\",\n        isFeatured: false\n    },\n    {\n        id: \"e2\",\n        title: \"Networking for introverts\",\n        description: \"We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!\",\n        location: \"New Wall Street 5, 98765 New Work\",\n        date: \"2021-05-30\",\n        image: \"images/introvert-event.jpg\",\n        isFeatured: true\n    },\n    {\n        id: \"e3\",\n        title: \"Networking for extroverts\",\n        description: \"You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.\",\n        location: \"My Street 12, 10115 Broke City\",\n        date: \"2022-04-10\",\n        image: \"images/extrovert-event.jpg\",\n        isFeatured: true\n    }\n];\nfunction getFeaturedEvents() {\n    return DUMMY_EVENTS.filter((event)=>event.isFeatured);\n}\nfunction getAllEvents() {\n    return DUMMY_EVENTS;\n}\nfunction getFilteredEvents(dateFilter) {\n    const { year , month  } = dateFilter;\n    console.log(\"search : \", year, month);\n    let filteredEvents = DUMMY_EVENTS.filter((event)=>{\n        const eventDate = new Date(event.date);\n        console.log(eventDate, eventDate.getFullYear(), eventDate.getMonth());\n        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;\n    });\n    return filteredEvents;\n}\nfunction getEventById(id) {\n    return DUMMY_EVENTS.find((event)=>event.id === id);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kdW1teS1kYXRhLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxNQUFNQSxlQUFlO0lBQ2pCO1FBQ0VDLElBQUk7UUFDSkMsT0FBTztRQUNQQyxhQUNFO1FBQ0ZDLFVBQVU7UUFDVkMsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLFlBQVksS0FBSztJQUNuQjtJQUNBO1FBQ0VOLElBQUk7UUFDSkMsT0FBTztRQUNQQyxhQUNFO1FBQ0ZDLFVBQVU7UUFDVkMsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLFlBQVksSUFBSTtJQUNsQjtJQUNBO1FBQ0VOLElBQUk7UUFDSkMsT0FBTztRQUNQQyxhQUNFO1FBQ0ZDLFVBQVU7UUFDVkMsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLFlBQVksSUFBSTtJQUNsQjtDQUNEO0FBRU0sU0FBU0Msb0JBQW9CO0lBQ2xDLE9BQU9SLGFBQWFTLE1BQU0sQ0FBQyxDQUFDQyxRQUFVQSxNQUFNSCxVQUFVO0FBQ3hELENBQUM7QUFFTSxTQUFTSSxlQUFlO0lBQzdCLE9BQU9YO0FBQ1QsQ0FBQztBQUVNLFNBQVNZLGtCQUFrQkMsVUFBVSxFQUFFO0lBQzVDLE1BQU0sRUFBRUMsS0FBSSxFQUFFQyxNQUFLLEVBQUUsR0FBR0Y7SUFDeEJHLFFBQVFDLEdBQUcsQ0FBQyxhQUFhSCxNQUFLQztJQUM5QixJQUFJRyxpQkFBaUJsQixhQUFhUyxNQUFNLENBQUMsQ0FBQ0MsUUFBVTtRQUNsRCxNQUFNUyxZQUFZLElBQUlDLEtBQUtWLE1BQU1MLElBQUk7UUFDckNXLFFBQVFDLEdBQUcsQ0FBQ0UsV0FBV0EsVUFBVUUsV0FBVyxJQUFJRixVQUFVRyxRQUFRO1FBQ2xFLE9BQU9ILFVBQVVFLFdBQVcsT0FBT1AsUUFBUUssVUFBVUcsUUFBUSxPQUFPUCxRQUFRO0lBQzlFO0lBRUEsT0FBT0c7QUFDVCxDQUFDO0FBRU0sU0FBU0ssYUFBYXRCLEVBQUUsRUFBRTtJQUMvQixPQUFPRCxhQUFhd0IsSUFBSSxDQUFDLENBQUNkLFFBQVVBLE1BQU1ULEVBQUUsS0FBS0E7QUFDbkQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9kdW1teS1kYXRhLmpzP2NhYTciXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRFVNTVlfRVZFTlRTID0gW1xuICAgIHtcbiAgICAgIGlkOiAnZTEnLFxuICAgICAgdGl0bGU6ICdQcm9ncmFtbWluZyBmb3IgZXZlcnlvbmUnLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICdFdmVyeW9uZSBjYW4gbGVhcm4gdG8gY29kZSEgWWVzLCBldmVyeW9uZSEgSW4gdGhpcyBsaXZlIGV2ZW50LCB3ZSBhcmUgZ29pbmcgdG8gZ28gdGhyb3VnaCBhbGwgdGhlIGtleSBiYXNpY3MgYW5kIGdldCB5b3Ugc3RhcnRlZCB3aXRoIHByb2dyYW1taW5nIGFzIHdlbGwuJyxcbiAgICAgIGxvY2F0aW9uOiAnU29tZXN0cmVldCAyNSwgMTIzNDUgU2FuIFNvbWV3aGVyZW8nLFxuICAgICAgZGF0ZTogJzIwMjEtMDUtMTInLFxuICAgICAgaW1hZ2U6ICdpbWFnZXMvY29kaW5nLWV2ZW50LmpwZycsXG4gICAgICBpc0ZlYXR1cmVkOiBmYWxzZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnZTInLFxuICAgICAgdGl0bGU6ICdOZXR3b3JraW5nIGZvciBpbnRyb3ZlcnRzJyxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIldlIGtub3c6IE5ldHdvcmtpbmcgaXMgbm8gZnVuIGlmIHlvdSBhcmUgYW4gaW50cm92ZXJ0IHBlcnNvbi4gVGhhdCdzIHdoeSB3ZSBjYW1lIHVwIHdpdGggdGhpcyBldmVudCAtIGl0J2xsIGJlIHNvIG11Y2ggZWFzaWVyLiBQcm9taXNlZCFcIixcbiAgICAgIGxvY2F0aW9uOiAnTmV3IFdhbGwgU3RyZWV0IDUsIDk4NzY1IE5ldyBXb3JrJyxcbiAgICAgIGRhdGU6ICcyMDIxLTA1LTMwJyxcbiAgICAgIGltYWdlOiAnaW1hZ2VzL2ludHJvdmVydC1ldmVudC5qcGcnLFxuICAgICAgaXNGZWF0dXJlZDogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAnZTMnLFxuICAgICAgdGl0bGU6ICdOZXR3b3JraW5nIGZvciBleHRyb3ZlcnRzJyxcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAnWW91IHByb2JhYmx5IG5lZWQgbm8gaGVscCB3aXRoIG5ldHdvcmtpbmcgaW4gZ2VuZXJhbC4gQnV0IGZvY3VzaW5nIHlvdXIgZW5lcmd5IGNvcnJlY3RseSAtIHRoYXQgaXMgc29tZXRoaW5nIHdoZXJlIG1vc3QgcGVvcGxlIGNhbiBpbXByb3ZlLicsXG4gICAgICBsb2NhdGlvbjogJ015IFN0cmVldCAxMiwgMTAxMTUgQnJva2UgQ2l0eScsXG4gICAgICBkYXRlOiAnMjAyMi0wNC0xMCcsXG4gICAgICBpbWFnZTogJ2ltYWdlcy9leHRyb3ZlcnQtZXZlbnQuanBnJyxcbiAgICAgIGlzRmVhdHVyZWQ6IHRydWUsXG4gICAgfSxcbiAgXTtcbiAgXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRGZWF0dXJlZEV2ZW50cygpIHtcbiAgICByZXR1cm4gRFVNTVlfRVZFTlRTLmZpbHRlcigoZXZlbnQpID0+IGV2ZW50LmlzRmVhdHVyZWQpO1xuICB9XG4gIFxuICBleHBvcnQgZnVuY3Rpb24gZ2V0QWxsRXZlbnRzKCkge1xuICAgIHJldHVybiBEVU1NWV9FVkVOVFM7XG4gIH1cbiAgXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRGaWx0ZXJlZEV2ZW50cyhkYXRlRmlsdGVyKSB7XG4gICAgY29uc3QgeyB5ZWFyLCBtb250aCB9ID0gZGF0ZUZpbHRlcjtcbiAgICBjb25zb2xlLmxvZygnc2VhcmNoIDogJywgeWVhcixtb250aClcbiAgICBsZXQgZmlsdGVyZWRFdmVudHMgPSBEVU1NWV9FVkVOVFMuZmlsdGVyKChldmVudCkgPT4ge1xuICAgICAgY29uc3QgZXZlbnREYXRlID0gbmV3IERhdGUoZXZlbnQuZGF0ZSk7XG4gICAgICBjb25zb2xlLmxvZyhldmVudERhdGUsIGV2ZW50RGF0ZS5nZXRGdWxsWWVhcigpLCBldmVudERhdGUuZ2V0TW9udGgoKSlcbiAgICAgIHJldHVybiBldmVudERhdGUuZ2V0RnVsbFllYXIoKSA9PT0geWVhciAmJiBldmVudERhdGUuZ2V0TW9udGgoKSA9PT0gbW9udGggLSAxO1xuICAgIH0pO1xuICBcbiAgICByZXR1cm4gZmlsdGVyZWRFdmVudHM7XG4gIH1cbiAgXG4gIGV4cG9ydCBmdW5jdGlvbiBnZXRFdmVudEJ5SWQoaWQpIHtcbiAgICByZXR1cm4gRFVNTVlfRVZFTlRTLmZpbmQoKGV2ZW50KSA9PiBldmVudC5pZCA9PT0gaWQpO1xuICB9XG4gICJdLCJuYW1lcyI6WyJEVU1NWV9FVkVOVFMiLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJsb2NhdGlvbiIsImRhdGUiLCJpbWFnZSIsImlzRmVhdHVyZWQiLCJnZXRGZWF0dXJlZEV2ZW50cyIsImZpbHRlciIsImV2ZW50IiwiZ2V0QWxsRXZlbnRzIiwiZ2V0RmlsdGVyZWRFdmVudHMiLCJkYXRlRmlsdGVyIiwieWVhciIsIm1vbnRoIiwiY29uc29sZSIsImxvZyIsImZpbHRlcmVkRXZlbnRzIiwiZXZlbnREYXRlIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXRFdmVudEJ5SWQiLCJmaW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/dummy-data.js\n"));

/***/ })

});