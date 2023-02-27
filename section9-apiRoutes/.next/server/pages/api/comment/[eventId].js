module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/comment/[eventId].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dummy-data.js":
/*!***********************!*\
  !*** ./dummy-data.js ***!
  \***********************/
/*! exports provided: getFeaturedEvents, getAllEvents, getFilteredEvents, getEventById, saveComment, getCommentsOnEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFeaturedEvents\", function() { return getFeaturedEvents; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllEvents\", function() { return getAllEvents; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFilteredEvents\", function() { return getFilteredEvents; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getEventById\", function() { return getEventById; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveComment\", function() { return saveComment; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCommentsOnEvent\", function() { return getCommentsOnEvent; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst DUMMY_EVENTS = [{\n  id: 'e1',\n  title: 'Programming for everyone',\n  description: 'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',\n  location: 'Somestreet 25, 12345 San Somewhereo',\n  date: '2021-05-12',\n  image: 'images/coding-event.jpg',\n  isFeatured: false\n}, {\n  id: 'e2',\n  title: 'Networking for introverts',\n  description: \"We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!\",\n  location: 'New Wall Street 5, 98765 New Work',\n  date: '2021-05-30',\n  image: 'images/introvert-event.jpg',\n  isFeatured: true\n}, {\n  id: 'e3',\n  title: 'Networking for extroverts',\n  description: 'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',\n  location: 'My Street 12, 10115 Broke City',\n  date: '2022-04-10',\n  image: 'images/extrovert-event.jpg',\n  isFeatured: true\n}];\nfunction getFeaturedEvents() {\n  return DUMMY_EVENTS.filter(event => event.isFeatured);\n}\nfunction getAllEvents() {\n  return DUMMY_EVENTS;\n}\nfunction getFilteredEvents(dateFilter) {\n  const {\n    year,\n    month\n  } = dateFilter;\n  let filteredEvents = DUMMY_EVENTS.filter(event => {\n    const eventDate = new Date(event.date);\n    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;\n  });\n  return filteredEvents;\n}\nfunction getEventById(id) {\n  return DUMMY_EVENTS.find(event => event.id === id);\n} // ==============================\n\nconst DUMMY_COMMENTS = [];\nfunction saveComment(comment, eventId) {\n  const newComment = _objectSpread(_objectSpread({}, comment), {}, {\n    eventId\n  });\n\n  DUMMY_COMMENTS.push(newComment);\n  return newComment;\n}\nfunction getCommentsOnEvent(eventId) {\n  const foundComments = DUMMY_COMMENTS.filter(comment => comment.eventId === eventId);\n  return foundComments;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kdW1teS1kYXRhLmpzPzQ3NmIiXSwibmFtZXMiOlsiRFVNTVlfRVZFTlRTIiwiaWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwibG9jYXRpb24iLCJkYXRlIiwiaW1hZ2UiLCJpc0ZlYXR1cmVkIiwiZ2V0RmVhdHVyZWRFdmVudHMiLCJmaWx0ZXIiLCJldmVudCIsImdldEFsbEV2ZW50cyIsImdldEZpbHRlcmVkRXZlbnRzIiwiZGF0ZUZpbHRlciIsInllYXIiLCJtb250aCIsImZpbHRlcmVkRXZlbnRzIiwiZXZlbnREYXRlIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXRFdmVudEJ5SWQiLCJmaW5kIiwiRFVNTVlfQ09NTUVOVFMiLCJzYXZlQ29tbWVudCIsImNvbW1lbnQiLCJldmVudElkIiwibmV3Q29tbWVudCIsInB1c2giLCJnZXRDb21tZW50c09uRXZlbnQiLCJmb3VuZENvbW1lbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsTUFBTUEsWUFBWSxHQUFHLENBQ25CO0FBQ0VDLElBQUUsRUFBRSxJQUROO0FBRUVDLE9BQUssRUFBRSwwQkFGVDtBQUdFQyxhQUFXLEVBQ1QsNEpBSko7QUFLRUMsVUFBUSxFQUFFLHFDQUxaO0FBTUVDLE1BQUksRUFBRSxZQU5SO0FBT0VDLE9BQUssRUFBRSx5QkFQVDtBQVFFQyxZQUFVLEVBQUU7QUFSZCxDQURtQixFQVduQjtBQUNFTixJQUFFLEVBQUUsSUFETjtBQUVFQyxPQUFLLEVBQUUsMkJBRlQ7QUFHRUMsYUFBVyxFQUNULDBJQUpKO0FBS0VDLFVBQVEsRUFBRSxtQ0FMWjtBQU1FQyxNQUFJLEVBQUUsWUFOUjtBQU9FQyxPQUFLLEVBQUUsNEJBUFQ7QUFRRUMsWUFBVSxFQUFFO0FBUmQsQ0FYbUIsRUFxQm5CO0FBQ0VOLElBQUUsRUFBRSxJQUROO0FBRUVDLE9BQUssRUFBRSwyQkFGVDtBQUdFQyxhQUFXLEVBQ1QsNklBSko7QUFLRUMsVUFBUSxFQUFFLGdDQUxaO0FBTUVDLE1BQUksRUFBRSxZQU5SO0FBT0VDLE9BQUssRUFBRSw0QkFQVDtBQVFFQyxZQUFVLEVBQUU7QUFSZCxDQXJCbUIsQ0FBckI7QUFpQ08sU0FBU0MsaUJBQVQsR0FBNkI7QUFDbEMsU0FBT1IsWUFBWSxDQUFDUyxNQUFiLENBQXFCQyxLQUFELElBQVdBLEtBQUssQ0FBQ0gsVUFBckMsQ0FBUDtBQUNEO0FBRU0sU0FBU0ksWUFBVCxHQUF3QjtBQUM3QixTQUFPWCxZQUFQO0FBQ0Q7QUFFTSxTQUFTWSxpQkFBVCxDQUEyQkMsVUFBM0IsRUFBdUM7QUFDNUMsUUFBTTtBQUFFQyxRQUFGO0FBQVFDO0FBQVIsTUFBa0JGLFVBQXhCO0FBRUEsTUFBSUcsY0FBYyxHQUFHaEIsWUFBWSxDQUFDUyxNQUFiLENBQXFCQyxLQUFELElBQVc7QUFDbEQsVUFBTU8sU0FBUyxHQUFHLElBQUlDLElBQUosQ0FBU1IsS0FBSyxDQUFDTCxJQUFmLENBQWxCO0FBQ0EsV0FBT1ksU0FBUyxDQUFDRSxXQUFWLE9BQTRCTCxJQUE1QixJQUFvQ0csU0FBUyxDQUFDRyxRQUFWLE9BQXlCTCxLQUFLLEdBQUcsQ0FBNUU7QUFDRCxHQUhvQixDQUFyQjtBQUtBLFNBQU9DLGNBQVA7QUFDRDtBQUVNLFNBQVNLLFlBQVQsQ0FBc0JwQixFQUF0QixFQUEwQjtBQUMvQixTQUFPRCxZQUFZLENBQUNzQixJQUFiLENBQW1CWixLQUFELElBQVdBLEtBQUssQ0FBQ1QsRUFBTixLQUFhQSxFQUExQyxDQUFQO0FBQ0QsQyxDQUVEOztBQUVBLE1BQU1zQixjQUFjLEdBQUcsRUFBdkI7QUFFTyxTQUFTQyxXQUFULENBQXFCQyxPQUFyQixFQUE4QkMsT0FBOUIsRUFBc0M7QUFDM0MsUUFBTUMsVUFBVSxtQ0FBT0YsT0FBUDtBQUFlQztBQUFmLElBQWhCOztBQUNBSCxnQkFBYyxDQUFDSyxJQUFmLENBQW9CRCxVQUFwQjtBQUNBLFNBQU9BLFVBQVA7QUFDRDtBQUVNLFNBQVNFLGtCQUFULENBQTRCSCxPQUE1QixFQUFvQztBQUN6QyxRQUFNSSxhQUFhLEdBQUdQLGNBQWMsQ0FBQ2QsTUFBZixDQUFzQmdCLE9BQU8sSUFBRUEsT0FBTyxDQUFDQyxPQUFSLEtBQWtCQSxPQUFqRCxDQUF0QjtBQUNBLFNBQU9JLGFBQVA7QUFDRCIsImZpbGUiOiIuL2R1bW15LWRhdGEuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBEVU1NWV9FVkVOVFMgPSBbXG4gIHtcbiAgICBpZDogJ2UxJyxcbiAgICB0aXRsZTogJ1Byb2dyYW1taW5nIGZvciBldmVyeW9uZScsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnRXZlcnlvbmUgY2FuIGxlYXJuIHRvIGNvZGUhIFllcywgZXZlcnlvbmUhIEluIHRoaXMgbGl2ZSBldmVudCwgd2UgYXJlIGdvaW5nIHRvIGdvIHRocm91Z2ggYWxsIHRoZSBrZXkgYmFzaWNzIGFuZCBnZXQgeW91IHN0YXJ0ZWQgd2l0aCBwcm9ncmFtbWluZyBhcyB3ZWxsLicsXG4gICAgbG9jYXRpb246ICdTb21lc3RyZWV0IDI1LCAxMjM0NSBTYW4gU29tZXdoZXJlbycsXG4gICAgZGF0ZTogJzIwMjEtMDUtMTInLFxuICAgIGltYWdlOiAnaW1hZ2VzL2NvZGluZy1ldmVudC5qcGcnLFxuICAgIGlzRmVhdHVyZWQ6IGZhbHNlLFxuICB9LFxuICB7XG4gICAgaWQ6ICdlMicsXG4gICAgdGl0bGU6ICdOZXR3b3JraW5nIGZvciBpbnRyb3ZlcnRzJyxcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiV2Uga25vdzogTmV0d29ya2luZyBpcyBubyBmdW4gaWYgeW91IGFyZSBhbiBpbnRyb3ZlcnQgcGVyc29uLiBUaGF0J3Mgd2h5IHdlIGNhbWUgdXAgd2l0aCB0aGlzIGV2ZW50IC0gaXQnbGwgYmUgc28gbXVjaCBlYXNpZXIuIFByb21pc2VkIVwiLFxuICAgIGxvY2F0aW9uOiAnTmV3IFdhbGwgU3RyZWV0IDUsIDk4NzY1IE5ldyBXb3JrJyxcbiAgICBkYXRlOiAnMjAyMS0wNS0zMCcsXG4gICAgaW1hZ2U6ICdpbWFnZXMvaW50cm92ZXJ0LWV2ZW50LmpwZycsXG4gICAgaXNGZWF0dXJlZDogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIGlkOiAnZTMnLFxuICAgIHRpdGxlOiAnTmV0d29ya2luZyBmb3IgZXh0cm92ZXJ0cycsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnWW91IHByb2JhYmx5IG5lZWQgbm8gaGVscCB3aXRoIG5ldHdvcmtpbmcgaW4gZ2VuZXJhbC4gQnV0IGZvY3VzaW5nIHlvdXIgZW5lcmd5IGNvcnJlY3RseSAtIHRoYXQgaXMgc29tZXRoaW5nIHdoZXJlIG1vc3QgcGVvcGxlIGNhbiBpbXByb3ZlLicsXG4gICAgbG9jYXRpb246ICdNeSBTdHJlZXQgMTIsIDEwMTE1IEJyb2tlIENpdHknLFxuICAgIGRhdGU6ICcyMDIyLTA0LTEwJyxcbiAgICBpbWFnZTogJ2ltYWdlcy9leHRyb3ZlcnQtZXZlbnQuanBnJyxcbiAgICBpc0ZlYXR1cmVkOiB0cnVlLFxuICB9LFxuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZlYXR1cmVkRXZlbnRzKCkge1xuICByZXR1cm4gRFVNTVlfRVZFTlRTLmZpbHRlcigoZXZlbnQpID0+IGV2ZW50LmlzRmVhdHVyZWQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsRXZlbnRzKCkge1xuICByZXR1cm4gRFVNTVlfRVZFTlRTO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmlsdGVyZWRFdmVudHMoZGF0ZUZpbHRlcikge1xuICBjb25zdCB7IHllYXIsIG1vbnRoIH0gPSBkYXRlRmlsdGVyO1xuXG4gIGxldCBmaWx0ZXJlZEV2ZW50cyA9IERVTU1ZX0VWRU5UUy5maWx0ZXIoKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgZXZlbnREYXRlID0gbmV3IERhdGUoZXZlbnQuZGF0ZSk7XG4gICAgcmV0dXJuIGV2ZW50RGF0ZS5nZXRGdWxsWWVhcigpID09PSB5ZWFyICYmIGV2ZW50RGF0ZS5nZXRNb250aCgpID09PSBtb250aCAtIDE7XG4gIH0pO1xuXG4gIHJldHVybiBmaWx0ZXJlZEV2ZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEV2ZW50QnlJZChpZCkge1xuICByZXR1cm4gRFVNTVlfRVZFTlRTLmZpbmQoKGV2ZW50KSA9PiBldmVudC5pZCA9PT0gaWQpO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgRFVNTVlfQ09NTUVOVFMgPSBbXVxuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUNvbW1lbnQoY29tbWVudCwgZXZlbnRJZCl7XG4gIGNvbnN0IG5ld0NvbW1lbnQgPSB7Li4uY29tbWVudCxldmVudElkfVxuICBEVU1NWV9DT01NRU5UUy5wdXNoKG5ld0NvbW1lbnQpXG4gIHJldHVybiBuZXdDb21tZW50XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb21tZW50c09uRXZlbnQoZXZlbnRJZCl7XG4gIGNvbnN0IGZvdW5kQ29tbWVudHMgPSBEVU1NWV9DT01NRU5UUy5maWx0ZXIoY29tbWVudD0+Y29tbWVudC5ldmVudElkPT09ZXZlbnRJZClcbiAgcmV0dXJuIGZvdW5kQ29tbWVudHNcbn1cblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./dummy-data.js\n");

/***/ }),

/***/ "./helpers/mongodb.js":
/*!****************************!*\
  !*** ./helpers/mongodb.js ***!
  \****************************/
/*! exports provided: mongoEmailRegistrationHandler, mongoCommentSavingHandler, getAllComments, mongoConnect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mongoEmailRegistrationHandler\", function() { return mongoEmailRegistrationHandler; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mongoCommentSavingHandler\", function() { return mongoCommentSavingHandler; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllComments\", function() { return getAllComments; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mongoConnect\", function() { return mongoConnect; });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst mongoConnect = async res => {\n  const {\n    MongoClient\n  } = __webpack_require__(/*! mongodb */ \"mongodb\");\n\n  const url = \"mongodb+srv://mongoAUser:i6m3jV7kqz8XP2S@cluster0.cl4dl.mongodb.net/nextjs\";\n  const client = new MongoClient(url);\n  await client.connect();\n  return client;\n};\n\nconst mongoEmailRegistrationHandler = async (client, collection, data) => {\n  const db = client.db();\n  const ans = await db.collection(collection).insertOne({\n    email: data.email\n  });\n  console.log(\"ans : \", ans);\n  await client.close();\n  return ans;\n};\n\nconst mongoCommentSavingHandler = async (client, collection, data) => {\n  const db = client.db();\n  const ans = await db.collection(collection).insertOne(data);\n  console.log(\"ans : \", ans);\n  await client.close();\n  return ans;\n};\n\nconst getAllComments = async (client, collection, eventId) => {\n  const db = client.db();\n  const ans = await db.collection(collection).find({\n    eventId\n  }) //   .toSort({ _id: -1 })\n  .toArray();\n  console.log(\"==>ans : \", ans);\n  await client.close();\n  return ans;\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9oZWxwZXJzL21vbmdvZGIuanM/N2QxMCJdLCJuYW1lcyI6WyJtb25nb0Nvbm5lY3QiLCJyZXMiLCJNb25nb0NsaWVudCIsInJlcXVpcmUiLCJ1cmwiLCJjbGllbnQiLCJjb25uZWN0IiwibW9uZ29FbWFpbFJlZ2lzdHJhdGlvbkhhbmRsZXIiLCJjb2xsZWN0aW9uIiwiZGF0YSIsImRiIiwiYW5zIiwiaW5zZXJ0T25lIiwiZW1haWwiLCJjb25zb2xlIiwibG9nIiwiY2xvc2UiLCJtb25nb0NvbW1lbnRTYXZpbmdIYW5kbGVyIiwiZ2V0QWxsQ29tbWVudHMiLCJldmVudElkIiwiZmluZCIsInRvQXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUEsTUFBTUEsWUFBWSxHQUFHLE1BQU9DLEdBQVAsSUFBZTtBQUNsQyxRQUFNO0FBQUVDO0FBQUYsTUFBa0JDLG1CQUFPLENBQUMsd0JBQUQsQ0FBL0I7O0FBQ0EsUUFBTUMsR0FBRyxHQUNQLDRFQURGO0FBRUEsUUFBTUMsTUFBTSxHQUFHLElBQUlILFdBQUosQ0FBZ0JFLEdBQWhCLENBQWY7QUFDQSxRQUFNQyxNQUFNLENBQUNDLE9BQVAsRUFBTjtBQUNBLFNBQU9ELE1BQVA7QUFDRCxDQVBEOztBQVNBLE1BQU1FLDZCQUE2QixHQUFHLE9BQU9GLE1BQVAsRUFBZUcsVUFBZixFQUEyQkMsSUFBM0IsS0FBb0M7QUFFdEUsUUFBTUMsRUFBRSxHQUFHTCxNQUFNLENBQUNLLEVBQVAsRUFBWDtBQUNBLFFBQU1DLEdBQUcsR0FBRyxNQUFNRCxFQUFFLENBQ2pCRixVQURlLENBQ0pBLFVBREksRUFFZkksU0FGZSxDQUVMO0FBQUVDLFNBQUssRUFBRUosSUFBSSxDQUFDSTtBQUFkLEdBRkssQ0FBbEI7QUFHQUMsU0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQkosR0FBdEI7QUFDQSxRQUFNTixNQUFNLENBQUNXLEtBQVAsRUFBTjtBQUNBLFNBQU9MLEdBQVA7QUFFSCxDQVZEOztBQVlBLE1BQU1NLHlCQUF5QixHQUFHLE9BQU9aLE1BQVAsRUFBZUcsVUFBZixFQUEyQkMsSUFBM0IsS0FBb0M7QUFFbEUsUUFBTUMsRUFBRSxHQUFHTCxNQUFNLENBQUNLLEVBQVAsRUFBWDtBQUNBLFFBQU1DLEdBQUcsR0FBRyxNQUFNRCxFQUFFLENBQUNGLFVBQUgsQ0FBY0EsVUFBZCxFQUEwQkksU0FBMUIsQ0FBb0NILElBQXBDLENBQWxCO0FBQ0FLLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JKLEdBQXRCO0FBQ0EsUUFBTU4sTUFBTSxDQUFDVyxLQUFQLEVBQU47QUFDQSxTQUFPTCxHQUFQO0FBRUgsQ0FSRDs7QUFVQSxNQUFNTyxjQUFjLEdBQUcsT0FBT2IsTUFBUCxFQUFlRyxVQUFmLEVBQTJCVyxPQUEzQixLQUF1QztBQUMxRCxRQUFNVCxFQUFFLEdBQUdMLE1BQU0sQ0FBQ0ssRUFBUCxFQUFYO0FBQ0EsUUFBTUMsR0FBRyxHQUFHLE1BQU1ELEVBQUUsQ0FDakJGLFVBRGUsQ0FDSkEsVUFESSxFQUVmWSxJQUZlLENBRVY7QUFBRUQ7QUFBRixHQUZVLEVBR2xCO0FBSGtCLEdBSWZFLE9BSmUsRUFBbEI7QUFNQVAsU0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWixFQUF5QkosR0FBekI7QUFDQSxRQUFNTixNQUFNLENBQUNXLEtBQVAsRUFBTjtBQUNBLFNBQU9MLEdBQVA7QUFDSCxDQVhEIiwiZmlsZSI6Ii4vaGVscGVycy9tb25nb2RiLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuXG5jb25zdCBtb25nb0Nvbm5lY3QgPSBhc3luYyAocmVzKSA9PiB7XG4gIGNvbnN0IHsgTW9uZ29DbGllbnQgfSA9IHJlcXVpcmUoXCJtb25nb2RiXCIpO1xuICBjb25zdCB1cmwgPVxuICAgIFwibW9uZ29kYitzcnY6Ly9tb25nb0FVc2VyOmk2bTNqVjdrcXo4WFAyU0BjbHVzdGVyMC5jbDRkbC5tb25nb2RiLm5ldC9uZXh0anNcIjtcbiAgY29uc3QgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVybCk7XG4gIGF3YWl0IGNsaWVudC5jb25uZWN0KCk7XG4gIHJldHVybiBjbGllbnQ7XG59O1xuXG5jb25zdCBtb25nb0VtYWlsUmVnaXN0cmF0aW9uSGFuZGxlciA9IGFzeW5jIChjbGllbnQsIGNvbGxlY3Rpb24sIGRhdGEpID0+IHtcbiAgXG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcbiAgICBjb25zdCBhbnMgPSBhd2FpdCBkYlxuICAgICAgLmNvbGxlY3Rpb24oY29sbGVjdGlvbilcbiAgICAgIC5pbnNlcnRPbmUoeyBlbWFpbDogZGF0YS5lbWFpbCB9KTtcbiAgICBjb25zb2xlLmxvZyhcImFucyA6IFwiLCBhbnMpO1xuICAgIGF3YWl0IGNsaWVudC5jbG9zZSgpO1xuICAgIHJldHVybiBhbnM7XG4gIFxufTtcblxuY29uc3QgbW9uZ29Db21tZW50U2F2aW5nSGFuZGxlciA9IGFzeW5jIChjbGllbnQsIGNvbGxlY3Rpb24sIGRhdGEpID0+IHtcbiAgXG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcbiAgICBjb25zdCBhbnMgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKGNvbGxlY3Rpb24pLmluc2VydE9uZShkYXRhKTtcbiAgICBjb25zb2xlLmxvZyhcImFucyA6IFwiLCBhbnMpO1xuICAgIGF3YWl0IGNsaWVudC5jbG9zZSgpO1xuICAgIHJldHVybiBhbnM7XG4gIFxufTtcblxuY29uc3QgZ2V0QWxsQ29tbWVudHMgPSBhc3luYyAoY2xpZW50LCBjb2xsZWN0aW9uLCBldmVudElkKSA9PiB7XG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcbiAgICBjb25zdCBhbnMgPSBhd2FpdCBkYlxuICAgICAgLmNvbGxlY3Rpb24oY29sbGVjdGlvbilcbiAgICAgIC5maW5kKHsgZXZlbnRJZCB9KVxuICAgIC8vICAgLnRvU29ydCh7IF9pZDogLTEgfSlcbiAgICAgIC50b0FycmF5KCk7XG5cbiAgICBjb25zb2xlLmxvZyhcIj09PmFucyA6IFwiLCBhbnMpO1xuICAgIGF3YWl0IGNsaWVudC5jbG9zZSgpO1xuICAgIHJldHVybiBhbnM7XG59O1xuXG5leHBvcnQge1xuICBtb25nb0VtYWlsUmVnaXN0cmF0aW9uSGFuZGxlcixcbiAgbW9uZ29Db21tZW50U2F2aW5nSGFuZGxlcixcbiAgZ2V0QWxsQ29tbWVudHMsXG4gIG1vbmdvQ29ubmVjdCxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./helpers/mongodb.js\n");

/***/ }),

/***/ "./pages/api/comment/[eventId].js":
/*!****************************************!*\
  !*** ./pages/api/comment/[eventId].js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dummy_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../dummy-data */ \"./dummy-data.js\");\n/* harmony import */ var _helpers_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers/mongodb */ \"./helpers/mongodb.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nasync function handler(req, res) {\n  const {\n    eventId\n  } = req.query;\n  console.log(\"==> eventId : \", eventId, req.url, req.body);\n  let client;\n\n  try {\n    client = await Object(_helpers_mongodb__WEBPACK_IMPORTED_MODULE_1__[\"mongoConnect\"])();\n  } catch (error) {\n    return res.status(500).json({\n      message: \"connecting to the db failed\"\n    });\n  }\n\n  if (req.method === \"POST\") {\n    try {\n      const newComment = JSON.parse(req.body);\n      const id = new Date().toISOString();\n      const comment = Object(_helpers_mongodb__WEBPACK_IMPORTED_MODULE_1__[\"mongoCommentSavingHandler\"])(client, \"comment\", _objectSpread(_objectSpread({}, newComment), {}, {\n        id,\n        eventId\n      }));\n      return res.status(201).json({\n        message: \"comment saved\",\n        comment: _objectSpread(_objectSpread({}, comment), {}, {\n          id\n        })\n      });\n    } catch (error) {\n      return res.status(400).json({\n        message: \"saving comment failed\"\n      });\n    }\n  }\n\n  const foundComments = await Object(_helpers_mongodb__WEBPACK_IMPORTED_MODULE_1__[\"getAllComments\"])(client, \"comment\", eventId);\n  res.status(200).json(foundComments);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvY29tbWVudC9bZXZlbnRJZF0uanM/OTE4NCJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwiZXZlbnRJZCIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsInVybCIsImJvZHkiLCJjbGllbnQiLCJtb25nb0Nvbm5lY3QiLCJlcnJvciIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwibWV0aG9kIiwibmV3Q29tbWVudCIsIkpTT04iLCJwYXJzZSIsImlkIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwiY29tbWVudCIsIm1vbmdvQ29tbWVudFNhdmluZ0hhbmRsZXIiLCJmb3VuZENvbW1lbnRzIiwiZ2V0QWxsQ29tbWVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBTUEsZUFBZUEsT0FBZixDQUF1QkMsR0FBdkIsRUFBNEJDLEdBQTVCLEVBQWlDO0FBQy9CLFFBQU07QUFBRUM7QUFBRixNQUFjRixHQUFHLENBQUNHLEtBQXhCO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLEVBQThCSCxPQUE5QixFQUF1Q0YsR0FBRyxDQUFDTSxHQUEzQyxFQUFnRE4sR0FBRyxDQUFDTyxJQUFwRDtBQUNBLE1BQUlDLE1BQUo7O0FBQ0EsTUFBSTtBQUNGQSxVQUFNLEdBQUcsTUFBTUMscUVBQVksRUFBM0I7QUFDRCxHQUZELENBRUUsT0FBT0MsS0FBUCxFQUFjO0FBQ2QsV0FBT1QsR0FBRyxDQUFDVSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsYUFBTyxFQUFFO0FBQVgsS0FBckIsQ0FBUDtBQUNEOztBQUVELE1BQUliLEdBQUcsQ0FBQ2MsTUFBSixLQUFlLE1BQW5CLEVBQTJCO0FBQ3pCLFFBQUk7QUFDRixZQUFNQyxVQUFVLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXakIsR0FBRyxDQUFDTyxJQUFmLENBQW5CO0FBQ0EsWUFBTVcsRUFBRSxHQUFHLElBQUlDLElBQUosR0FBV0MsV0FBWCxFQUFYO0FBQ0EsWUFBTUMsT0FBTyxHQUFHQyxrRkFBeUIsQ0FBQ2QsTUFBRCxFQUFTLFNBQVQsa0NBQ3BDTyxVQURvQztBQUV2Q0csVUFGdUM7QUFHdkNoQjtBQUh1QyxTQUF6QztBQU1BLGFBQU9ELEdBQUcsQ0FBQ1UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQzFCQyxlQUFPLEVBQUUsZUFEaUI7QUFFMUJRLGVBQU8sa0NBQU9BLE9BQVA7QUFBZ0JIO0FBQWhCO0FBRm1CLE9BQXJCLENBQVA7QUFJRCxLQWJELENBYUUsT0FBT1IsS0FBUCxFQUFjO0FBQ1osYUFBT1QsR0FBRyxDQUFDVSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBQ0MsZUFBTyxFQUFHO0FBQVgsT0FBckIsQ0FBUDtBQUNIO0FBQ0Y7O0FBRUQsUUFBTVUsYUFBYSxHQUFHLE1BQU1DLHVFQUFjLENBQUNoQixNQUFELEVBQVMsU0FBVCxFQUFvQk4sT0FBcEIsQ0FBMUM7QUFDQUQsS0FBRyxDQUFDVSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJXLGFBQXJCO0FBQ0Q7O0FBRWN4QixzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2FwaS9jb21tZW50L1tldmVudElkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldENvbW1lbnRzT25FdmVudCwgc2F2ZUNvbW1lbnQgfSBmcm9tIFwiLi4vLi4vLi4vZHVtbXktZGF0YVwiO1xuaW1wb3J0IHtcbiAgZ2V0QWxsQ29tbWVudHMsXG4gIG1vbmdvQ29tbWVudFNhdmluZ0hhbmRsZXIsXG4gIG1vbmdvQ29ubmVjdCxcbn0gZnJvbSBcIi4uLy4uLy4uL2hlbHBlcnMvbW9uZ29kYlwiO1xuXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IHsgZXZlbnRJZCB9ID0gcmVxLnF1ZXJ5O1xuICBjb25zb2xlLmxvZyhcIj09PiBldmVudElkIDogXCIsIGV2ZW50SWQsIHJlcS51cmwsIHJlcS5ib2R5KTtcbiAgbGV0IGNsaWVudDtcbiAgdHJ5IHtcbiAgICBjbGllbnQgPSBhd2FpdCBtb25nb0Nvbm5lY3QoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBcImNvbm5lY3RpbmcgdG8gdGhlIGRiIGZhaWxlZFwiIH0pO1xuICB9XG5cbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IG5ld0NvbW1lbnQgPSBKU09OLnBhcnNlKHJlcS5ib2R5KTtcbiAgICAgIGNvbnN0IGlkID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuICAgICAgY29uc3QgY29tbWVudCA9IG1vbmdvQ29tbWVudFNhdmluZ0hhbmRsZXIoY2xpZW50LCBcImNvbW1lbnRcIiwge1xuICAgICAgICAuLi5uZXdDb21tZW50LFxuICAgICAgICBpZCxcbiAgICAgICAgZXZlbnRJZCxcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLmpzb24oe1xuICAgICAgICBtZXNzYWdlOiBcImNvbW1lbnQgc2F2ZWRcIixcbiAgICAgICAgY29tbWVudDogeyAuLi5jb21tZW50LCBpZCB9LFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHttZXNzYWdlIDogXCJzYXZpbmcgY29tbWVudCBmYWlsZWRcIn0pXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZm91bmRDb21tZW50cyA9IGF3YWl0IGdldEFsbENvbW1lbnRzKGNsaWVudCwgXCJjb21tZW50XCIsIGV2ZW50SWQpO1xuICByZXMuc3RhdHVzKDIwMCkuanNvbihmb3VuZENvbW1lbnRzKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/comment/[eventId].js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ })

/******/ });