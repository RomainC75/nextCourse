module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/registration/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./helpers/mongodb.js":
/*!****************************!*\
  !*** ./helpers/mongodb.js ***!
  \****************************/
/*! exports provided: mongoEmailRegistrationHandler, mongoCommentSavingHandler, getAllComments, mongoConnect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mongoEmailRegistrationHandler\", function() { return mongoEmailRegistrationHandler; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mongoCommentSavingHandler\", function() { return mongoCommentSavingHandler; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllComments\", function() { return getAllComments; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mongoConnect\", function() { return mongoConnect; });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst mongoConnect = async res => {\n  const {\n    MongoClient\n  } = __webpack_require__(/*! mongodb */ \"mongodb\");\n\n  const url = \"mongodb+srv://mongoAUser:i6m3jV7kqz8XP2S@cluster0.cl4dl.mongodb.net/nextjs\";\n  const client = new MongoClient(url);\n  await client.connect();\n  return client;\n};\n\nconst mongoEmailRegistrationHandler = async (client, collection, data) => {\n  const db = client.db();\n  const ans = await db.collection(collection).insertOne({\n    email: data.email\n  });\n  console.log(\"ans : \", ans);\n  await client.close();\n  return ans;\n};\n\nconst mongoCommentSavingHandler = async (client, collection, data) => {\n  const db = client.db();\n  const ans = await db.collection(collection).insertOne(data);\n  console.log(\"ans : \", ans);\n  await client.close();\n  return ans;\n};\n\nconst getAllComments = async (client, collection, eventId) => {\n  const db = client.db();\n  const ans = await db.collection(collection).find({\n    eventId\n  }) //   .toSort({ _id: -1 })\n  .toArray();\n  console.log(\"==>ans : \", ans);\n  await client.close();\n  return ans;\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9oZWxwZXJzL21vbmdvZGIuanM/N2QxMCJdLCJuYW1lcyI6WyJtb25nb0Nvbm5lY3QiLCJyZXMiLCJNb25nb0NsaWVudCIsInJlcXVpcmUiLCJ1cmwiLCJjbGllbnQiLCJjb25uZWN0IiwibW9uZ29FbWFpbFJlZ2lzdHJhdGlvbkhhbmRsZXIiLCJjb2xsZWN0aW9uIiwiZGF0YSIsImRiIiwiYW5zIiwiaW5zZXJ0T25lIiwiZW1haWwiLCJjb25zb2xlIiwibG9nIiwiY2xvc2UiLCJtb25nb0NvbW1lbnRTYXZpbmdIYW5kbGVyIiwiZ2V0QWxsQ29tbWVudHMiLCJldmVudElkIiwiZmluZCIsInRvQXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUEsTUFBTUEsWUFBWSxHQUFHLE1BQU9DLEdBQVAsSUFBZTtBQUNsQyxRQUFNO0FBQUVDO0FBQUYsTUFBa0JDLG1CQUFPLENBQUMsd0JBQUQsQ0FBL0I7O0FBQ0EsUUFBTUMsR0FBRyxHQUNQLDRFQURGO0FBRUEsUUFBTUMsTUFBTSxHQUFHLElBQUlILFdBQUosQ0FBZ0JFLEdBQWhCLENBQWY7QUFDQSxRQUFNQyxNQUFNLENBQUNDLE9BQVAsRUFBTjtBQUNBLFNBQU9ELE1BQVA7QUFDRCxDQVBEOztBQVNBLE1BQU1FLDZCQUE2QixHQUFHLE9BQU9GLE1BQVAsRUFBZUcsVUFBZixFQUEyQkMsSUFBM0IsS0FBb0M7QUFFdEUsUUFBTUMsRUFBRSxHQUFHTCxNQUFNLENBQUNLLEVBQVAsRUFBWDtBQUNBLFFBQU1DLEdBQUcsR0FBRyxNQUFNRCxFQUFFLENBQ2pCRixVQURlLENBQ0pBLFVBREksRUFFZkksU0FGZSxDQUVMO0FBQUVDLFNBQUssRUFBRUosSUFBSSxDQUFDSTtBQUFkLEdBRkssQ0FBbEI7QUFHQUMsU0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQkosR0FBdEI7QUFDQSxRQUFNTixNQUFNLENBQUNXLEtBQVAsRUFBTjtBQUNBLFNBQU9MLEdBQVA7QUFFSCxDQVZEOztBQVlBLE1BQU1NLHlCQUF5QixHQUFHLE9BQU9aLE1BQVAsRUFBZUcsVUFBZixFQUEyQkMsSUFBM0IsS0FBb0M7QUFFbEUsUUFBTUMsRUFBRSxHQUFHTCxNQUFNLENBQUNLLEVBQVAsRUFBWDtBQUNBLFFBQU1DLEdBQUcsR0FBRyxNQUFNRCxFQUFFLENBQUNGLFVBQUgsQ0FBY0EsVUFBZCxFQUEwQkksU0FBMUIsQ0FBb0NILElBQXBDLENBQWxCO0FBQ0FLLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JKLEdBQXRCO0FBQ0EsUUFBTU4sTUFBTSxDQUFDVyxLQUFQLEVBQU47QUFDQSxTQUFPTCxHQUFQO0FBRUgsQ0FSRDs7QUFVQSxNQUFNTyxjQUFjLEdBQUcsT0FBT2IsTUFBUCxFQUFlRyxVQUFmLEVBQTJCVyxPQUEzQixLQUF1QztBQUMxRCxRQUFNVCxFQUFFLEdBQUdMLE1BQU0sQ0FBQ0ssRUFBUCxFQUFYO0FBQ0EsUUFBTUMsR0FBRyxHQUFHLE1BQU1ELEVBQUUsQ0FDakJGLFVBRGUsQ0FDSkEsVUFESSxFQUVmWSxJQUZlLENBRVY7QUFBRUQ7QUFBRixHQUZVLEVBR2xCO0FBSGtCLEdBSWZFLE9BSmUsRUFBbEI7QUFNQVAsU0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWixFQUF5QkosR0FBekI7QUFDQSxRQUFNTixNQUFNLENBQUNXLEtBQVAsRUFBTjtBQUNBLFNBQU9MLEdBQVA7QUFDSCxDQVhEIiwiZmlsZSI6Ii4vaGVscGVycy9tb25nb2RiLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuXG5jb25zdCBtb25nb0Nvbm5lY3QgPSBhc3luYyAocmVzKSA9PiB7XG4gIGNvbnN0IHsgTW9uZ29DbGllbnQgfSA9IHJlcXVpcmUoXCJtb25nb2RiXCIpO1xuICBjb25zdCB1cmwgPVxuICAgIFwibW9uZ29kYitzcnY6Ly9tb25nb0FVc2VyOmk2bTNqVjdrcXo4WFAyU0BjbHVzdGVyMC5jbDRkbC5tb25nb2RiLm5ldC9uZXh0anNcIjtcbiAgY29uc3QgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVybCk7XG4gIGF3YWl0IGNsaWVudC5jb25uZWN0KCk7XG4gIHJldHVybiBjbGllbnQ7XG59O1xuXG5jb25zdCBtb25nb0VtYWlsUmVnaXN0cmF0aW9uSGFuZGxlciA9IGFzeW5jIChjbGllbnQsIGNvbGxlY3Rpb24sIGRhdGEpID0+IHtcbiAgXG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcbiAgICBjb25zdCBhbnMgPSBhd2FpdCBkYlxuICAgICAgLmNvbGxlY3Rpb24oY29sbGVjdGlvbilcbiAgICAgIC5pbnNlcnRPbmUoeyBlbWFpbDogZGF0YS5lbWFpbCB9KTtcbiAgICBjb25zb2xlLmxvZyhcImFucyA6IFwiLCBhbnMpO1xuICAgIGF3YWl0IGNsaWVudC5jbG9zZSgpO1xuICAgIHJldHVybiBhbnM7XG4gIFxufTtcblxuY29uc3QgbW9uZ29Db21tZW50U2F2aW5nSGFuZGxlciA9IGFzeW5jIChjbGllbnQsIGNvbGxlY3Rpb24sIGRhdGEpID0+IHtcbiAgXG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcbiAgICBjb25zdCBhbnMgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKGNvbGxlY3Rpb24pLmluc2VydE9uZShkYXRhKTtcbiAgICBjb25zb2xlLmxvZyhcImFucyA6IFwiLCBhbnMpO1xuICAgIGF3YWl0IGNsaWVudC5jbG9zZSgpO1xuICAgIHJldHVybiBhbnM7XG4gIFxufTtcblxuY29uc3QgZ2V0QWxsQ29tbWVudHMgPSBhc3luYyAoY2xpZW50LCBjb2xsZWN0aW9uLCBldmVudElkKSA9PiB7XG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcbiAgICBjb25zdCBhbnMgPSBhd2FpdCBkYlxuICAgICAgLmNvbGxlY3Rpb24oY29sbGVjdGlvbilcbiAgICAgIC5maW5kKHsgZXZlbnRJZCB9KVxuICAgIC8vICAgLnRvU29ydCh7IF9pZDogLTEgfSlcbiAgICAgIC50b0FycmF5KCk7XG5cbiAgICBjb25zb2xlLmxvZyhcIj09PmFucyA6IFwiLCBhbnMpO1xuICAgIGF3YWl0IGNsaWVudC5jbG9zZSgpO1xuICAgIHJldHVybiBhbnM7XG59O1xuXG5leHBvcnQge1xuICBtb25nb0VtYWlsUmVnaXN0cmF0aW9uSGFuZGxlcixcbiAgbW9uZ29Db21tZW50U2F2aW5nSGFuZGxlcixcbiAgZ2V0QWxsQ29tbWVudHMsXG4gIG1vbmdvQ29ubmVjdCxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./helpers/mongodb.js\n");

/***/ }),

/***/ "./pages/api/registration/index.js":
/*!*****************************************!*\
  !*** ./pages/api/registration/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/mongodb */ \"./helpers/mongodb.js\");\n\n\nasync function handle(req, res) {\n  let client;\n\n  try {\n    client = await Object(_helpers_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"mongoConnect\"])();\n  } catch (error) {\n    return res.status(400).json({\n      message: \"connecting to the db failed\"\n    });\n  }\n\n  console.log(req.body);\n\n  if (req.method === \"POST\") {\n    try {\n      const ans = await Object(_helpers_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"mongoEmailRegistrationHandler\"])(client, \"registration\", req.body);\n      return res.status(201).json({\n        message: \"registered\",\n        email: ans\n      });\n    } catch (error) {\n      return res.status(400).json({\n        message: \"inserting email failed\"\n      });\n    }\n  }\n\n  res.status(400).json({\n    message: \"expect a POST request\"\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handle);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvcmVnaXN0cmF0aW9uL2luZGV4LmpzPzg1ZDkiXSwibmFtZXMiOlsiaGFuZGxlIiwicmVxIiwicmVzIiwiY2xpZW50IiwibW9uZ29Db25uZWN0IiwiZXJyb3IiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJib2R5IiwibWV0aG9kIiwiYW5zIiwibW9uZ29FbWFpbFJlZ2lzdHJhdGlvbkhhbmRsZXIiLCJlbWFpbCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBOztBQUtBLGVBQWVBLE1BQWYsQ0FBc0JDLEdBQXRCLEVBQTJCQyxHQUEzQixFQUFnQztBQUM5QixNQUFJQyxNQUFKOztBQUNBLE1BQUk7QUFDRkEsVUFBTSxHQUFHLE1BQU1DLHFFQUFZLEVBQTNCO0FBQ0QsR0FGRCxDQUVFLE9BQU9DLEtBQVAsRUFBYztBQUNkLFdBQU9ILEdBQUcsQ0FBQ0ksTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBQXJCLENBQVA7QUFDRDs7QUFDREMsU0FBTyxDQUFDQyxHQUFSLENBQVlULEdBQUcsQ0FBQ1UsSUFBaEI7O0FBQ0EsTUFBSVYsR0FBRyxDQUFDVyxNQUFKLEtBQWUsTUFBbkIsRUFBMkI7QUFDekIsUUFBSTtBQUNGLFlBQU1DLEdBQUcsR0FBRyxNQUFNQyxzRkFBNkIsQ0FDN0NYLE1BRDZDLEVBRTdDLGNBRjZDLEVBRzdDRixHQUFHLENBQUNVLElBSHlDLENBQS9DO0FBS0EsYUFBT1QsR0FBRyxDQUFDSSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDMUJDLGVBQU8sRUFBRSxZQURpQjtBQUUxQk8sYUFBSyxFQUFFRjtBQUZtQixPQUFyQixDQUFQO0FBSUQsS0FWRCxDQVVFLE9BQU9SLEtBQVAsRUFBYztBQUNaLGFBQU9ILEdBQUcsQ0FBQ0ksTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLGVBQU8sRUFBRTtBQUFYLE9BQXJCLENBQVA7QUFDSDtBQUNGOztBQUNETixLQUFHLENBQUNJLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUFFQyxXQUFPLEVBQUU7QUFBWCxHQUFyQjtBQUNEOztBQUVjUixxRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2FwaS9yZWdpc3RyYXRpb24vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBtb25nb0Nvbm5lY3QsXG4gIG1vbmdvRW1haWxSZWdpc3RyYXRpb25IYW5kbGVyLFxufSBmcm9tIFwiLi4vLi4vLi4vaGVscGVycy9tb25nb2RiXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZShyZXEsIHJlcykge1xuICBsZXQgY2xpZW50O1xuICB0cnkge1xuICAgIGNsaWVudCA9IGF3YWl0IG1vbmdvQ29ubmVjdCgpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6IFwiY29ubmVjdGluZyB0byB0aGUgZGIgZmFpbGVkXCIgfSk7XG4gIH1cbiAgY29uc29sZS5sb2cocmVxLmJvZHkpO1xuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgYW5zID0gYXdhaXQgbW9uZ29FbWFpbFJlZ2lzdHJhdGlvbkhhbmRsZXIoXG4gICAgICAgIGNsaWVudCxcbiAgICAgICAgXCJyZWdpc3RyYXRpb25cIixcbiAgICAgICAgcmVxLmJvZHlcbiAgICAgICk7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLmpzb24oe1xuICAgICAgICBtZXNzYWdlOiBcInJlZ2lzdGVyZWRcIixcbiAgICAgICAgZW1haWw6IGFucyxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6IFwiaW5zZXJ0aW5nIGVtYWlsIGZhaWxlZFwiIH0pO1xuICAgIH1cbiAgfVxuICByZXMuc3RhdHVzKDQwMCkuanNvbih7IG1lc3NhZ2U6IFwiZXhwZWN0IGEgUE9TVCByZXF1ZXN0XCIgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/registration/index.js\n");

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