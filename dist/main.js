/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/table */ \"./src/scripts/table.js\");\n// import Example from \"./scripts/example\";\n\n// // document.addEventListener(\"DOMContentLoaded\", () => {\n// //     const main = document.getElementById(\"main\");\n// //     new Example(main);\n// // });\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const figure = document.querySelector(\"#periodic-table\");\n  let table = new _scripts_table__WEBPACK_IMPORTED_MODULE_0__[\"default\"](figure);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFb0M7QUFFcENDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBSTtFQUU5QyxNQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLGlCQUFpQixDQUFDO0VBQ3hELElBQUlDLEtBQUssR0FBRyxJQUFJTCxzREFBSyxDQUFDRyxNQUFNLENBQUM7QUFDakMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IEV4YW1wbGUgZnJvbSBcIi4vc2NyaXB0cy9leGFtcGxlXCI7XG5cbi8vIC8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbi8vIC8vICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuLy8gLy8gICAgIG5ldyBFeGFtcGxlKG1haW4pO1xuLy8gLy8gfSk7XG5cbmltcG9ydCBUYWJsZSBmcm9tIFwiLi9zY3JpcHRzL3RhYmxlXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpPT57XG5cbiAgICBjb25zdCBmaWd1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BlcmlvZGljLXRhYmxlXCIpO1xuICAgIGxldCB0YWJsZSA9IG5ldyBUYWJsZShmaWd1cmUpO1xufSk7XG5cbiJdLCJuYW1lcyI6WyJUYWJsZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImZpZ3VyZSIsInF1ZXJ5U2VsZWN0b3IiLCJ0YWJsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/table.js":
/*!******************************!*\
  !*** ./src/scripts/table.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// const { findRelativeConfig } = require(\"@babel/core/lib/config/files\");\n// const { at } = require(\"core-js/core/string\");\n\nlet allElements = \"\";\nvar requestOptions = {\n  method: 'GET',\n  redirect: 'follow'\n};\nfetch(\"https://periodic-table-elements-info.herokuapp.com/elements\", requestOptions).then(response => response.json()).then(result => allElements = result).catch(error => console.log('error', error));\nclass Table {\n  constructor(ele) {\n    this.ele = ele;\n    this.setupTable();\n  }\n  setupTable() {\n    for (let i = 0; i < allElements.length; i++) {\n      const div = document.createElement(\"div\");\n      div.classList.add(\"element\");\n      const atomicNum = document.createElement(\"div\");\n      atomicNum.classList.add(\"atomicNum\");\n      atomicNum.innerHTML = allElements[i].atomicNumber;\n      const symbol = document.createElement(\"div\");\n      symbol.innerHTML = allElements[i].symbol;\n      symbol.classList.add(\"symbol\");\n      const name = document.createElement(\"div\");\n      symbol.innerHTML = allElements[i].name;\n      name.classList.add(\"name\");\n      div.appendChild(atomicNum);\n      div.appendChild(symbol);\n      div.appendChild(name);\n      this.ele.appendChild(div);\n    }\n    ;\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Table);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy90YWJsZS5qcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFHQSxJQUFJQSxXQUFXLEdBQUcsRUFBRTtBQUVwQixJQUFJQyxjQUFjLEdBQUc7RUFDakJDLE1BQU0sRUFBRSxLQUFLO0VBQ2JDLFFBQVEsRUFBRTtBQUVaLENBQUM7QUFFREMsS0FBSyxDQUFDLDZEQUE2RCxFQUFFSCxjQUFjLENBQUMsQ0FDakZJLElBQUksQ0FBQ0MsUUFBUSxJQUFJQSxRQUFRLENBQUNDLElBQUksRUFBRSxDQUFDLENBQ2pDRixJQUFJLENBQUNHLE1BQU0sSUFBSVIsV0FBVyxHQUFHUSxNQUFNLENBQUMsQ0FDcENDLEtBQUssQ0FBQ0MsS0FBSyxJQUFJQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxPQUFPLEVBQUVGLEtBQUssQ0FBQyxDQUFDO0FBRWhELE1BQU1HLEtBQUs7RUFDUEMsV0FBVyxDQUFDQyxHQUFHLEVBQUM7SUFDWixJQUFJLENBQUNBLEdBQUcsR0FBR0EsR0FBRztJQUNkLElBQUksQ0FBQ0MsVUFBVSxFQUFFO0VBQ3JCO0VBRUFBLFVBQVUsR0FBRTtJQUVSLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHakIsV0FBVyxDQUFDa0IsTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBQztNQUN4QyxNQUFNRSxHQUFHLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztNQUV6Q0YsR0FBRyxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUM7TUFFNUIsTUFBTUMsU0FBUyxHQUFHSixRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7TUFDL0NHLFNBQVMsQ0FBQ0YsU0FBUyxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDO01BQ3BDQyxTQUFTLENBQUNDLFNBQVMsR0FBR3pCLFdBQVcsQ0FBQ2lCLENBQUMsQ0FBQyxDQUFDUyxZQUFZO01BRWpELE1BQU1DLE1BQU0sR0FBR1AsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO01BQzVDTSxNQUFNLENBQUNGLFNBQVMsR0FBR3pCLFdBQVcsQ0FBQ2lCLENBQUMsQ0FBQyxDQUFDVSxNQUFNO01BQ3hDQSxNQUFNLENBQUNMLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFFBQVEsQ0FBQztNQUU5QixNQUFNSyxJQUFJLEdBQUdSLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztNQUMxQ00sTUFBTSxDQUFDRixTQUFTLEdBQUd6QixXQUFXLENBQUNpQixDQUFDLENBQUMsQ0FBQ1csSUFBSTtNQUN0Q0EsSUFBSSxDQUFDTixTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7TUFFMUJKLEdBQUcsQ0FBQ1UsV0FBVyxDQUFDTCxTQUFTLENBQUM7TUFDMUJMLEdBQUcsQ0FBQ1UsV0FBVyxDQUFDRixNQUFNLENBQUM7TUFDdkJSLEdBQUcsQ0FBQ1UsV0FBVyxDQUFDRCxJQUFJLENBQUM7TUFDckIsSUFBSSxDQUFDYixHQUFHLENBQUNjLFdBQVcsQ0FBQ1YsR0FBRyxDQUFDO0lBQzdCO0lBQUM7RUFDSjtBQUNMO0FBRUEsK0RBQWVOLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXByb2plY3QvLi9zcmMvc2NyaXB0cy90YWJsZS5qcz8xZWYxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IHsgZmluZFJlbGF0aXZlQ29uZmlnIH0gPSByZXF1aXJlKFwiQGJhYmVsL2NvcmUvbGliL2NvbmZpZy9maWxlc1wiKTtcbi8vIGNvbnN0IHsgYXQgfSA9IHJlcXVpcmUoXCJjb3JlLWpzL2NvcmUvc3RyaW5nXCIpO1xuXG5cbmxldCBhbGxFbGVtZW50cyA9IFwiXCI7XG5cbnZhciByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIHJlZGlyZWN0OiAnZm9sbG93J1xuXG4gIH07XG4gIFxuICBmZXRjaChcImh0dHBzOi8vcGVyaW9kaWMtdGFibGUtZWxlbWVudHMtaW5mby5oZXJva3VhcHAuY29tL2VsZW1lbnRzXCIsIHJlcXVlc3RPcHRpb25zKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihyZXN1bHQgPT4gYWxsRWxlbWVudHMgPSByZXN1bHQpXG4gICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKCdlcnJvcicsIGVycm9yKSk7XG5cbmNsYXNzIFRhYmxle1xuICAgIGNvbnN0cnVjdG9yKGVsZSl7XG4gICAgICAgIHRoaXMuZWxlID0gZWxlO1xuICAgICAgICB0aGlzLnNldHVwVGFibGUoKTtcbiAgICB9XG5cbiAgICBzZXR1cFRhYmxlKCl7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxFbGVtZW50cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcImVsZW1lbnRcIik7XG5cbiAgICAgICAgICAgIGNvbnN0IGF0b21pY051bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7ICAgICAgICBcbiAgICAgICAgICAgIGF0b21pY051bS5jbGFzc0xpc3QuYWRkKFwiYXRvbWljTnVtXCIpO1xuICAgICAgICAgICAgYXRvbWljTnVtLmlubmVySFRNTCA9IGFsbEVsZW1lbnRzW2ldLmF0b21pY051bWJlcjsgXG5cbiAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBzeW1ib2wuaW5uZXJIVE1MID0gYWxsRWxlbWVudHNbaV0uc3ltYm9sO1xuICAgICAgICAgICAgc3ltYm9sLmNsYXNzTGlzdC5hZGQoXCJzeW1ib2xcIik7XG5cbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgc3ltYm9sLmlubmVySFRNTCA9IGFsbEVsZW1lbnRzW2ldLm5hbWVcbiAgICAgICAgICAgIG5hbWUuY2xhc3NMaXN0LmFkZChcIm5hbWVcIik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChhdG9taWNOdW0pO1xuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKHN5bWJvbCk7XG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgICAgICAgICB0aGlzLmVsZS5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICB9O1xuICAgICB9XG59ICAgIFxuXG5leHBvcnQgZGVmYXVsdCBUYWJsZTsiXSwibmFtZXMiOlsiYWxsRWxlbWVudHMiLCJyZXF1ZXN0T3B0aW9ucyIsIm1ldGhvZCIsInJlZGlyZWN0IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwicmVzdWx0IiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJUYWJsZSIsImNvbnN0cnVjdG9yIiwiZWxlIiwic2V0dXBUYWJsZSIsImkiLCJsZW5ndGgiLCJkaXYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhdG9taWNOdW0iLCJpbm5lckhUTUwiLCJhdG9taWNOdW1iZXIiLCJzeW1ib2wiLCJuYW1lIiwiYXBwZW5kQ2hpbGQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/table.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXByb2plY3QvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;