/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("// import Example from \"./scripts/example\";\n\n// // document.addEventListener(\"DOMContentLoaded\", () => {\n// //     const main = document.getElementById(\"main\");\n// //     new Example(main);\n// // });\n\nconst Table = __webpack_require__(/*! ./scripts/table.js */ \"./src/scripts/table.js\");\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const figure = document.querySelector(\"#periodic-table\");\n  new Table(figure);\n  figure.addEventListener('click', function (event) {\n    let cell = event.target;\n    let number = cell.querySelector(\".atomicNum\").innerText;\n    console.log(number);\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsS0FBSyxHQUFHQyxtQkFBTyxDQUFDLGtEQUFvQixDQUFDO0FBRTNDQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLE1BQUk7RUFFOUMsTUFBTUMsTUFBTSxHQUFHRixRQUFRLENBQUNHLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztFQUN4RCxJQUFJTCxLQUFLLENBQUNJLE1BQU0sQ0FBQztFQUNqQkEsTUFBTSxDQUFDRCxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBU0csS0FBSyxFQUFDO0lBQzVDLElBQUlDLElBQUksR0FBR0QsS0FBSyxDQUFDRSxNQUFNO0lBQ3ZCLElBQUlDLE1BQU0sR0FBR0YsSUFBSSxDQUFDRixhQUFhLENBQUMsWUFBWSxDQUFDLENBQUNLLFNBQVM7SUFDdkRDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxNQUFNLENBQUM7RUFHdkIsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IEV4YW1wbGUgZnJvbSBcIi4vc2NyaXB0cy9leGFtcGxlXCI7XG5cbi8vIC8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbi8vIC8vICAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuLy8gLy8gICAgIG5ldyBFeGFtcGxlKG1haW4pO1xuLy8gLy8gfSk7XG5cbmNvbnN0IFRhYmxlID0gcmVxdWlyZShcIi4vc2NyaXB0cy90YWJsZS5qc1wiKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCk9PntcblxuICAgIGNvbnN0IGZpZ3VyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGVyaW9kaWMtdGFibGVcIik7XG4gICAgbmV3IFRhYmxlKGZpZ3VyZSk7XG4gICAgZmlndXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICBsZXQgY2VsbCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgbGV0IG51bWJlciA9IGNlbGwucXVlcnlTZWxlY3RvcihcIi5hdG9taWNOdW1cIikuaW5uZXJUZXh0O1xuICAgICAgICBjb25zb2xlLmxvZyhudW1iZXIpO1xuXG5cbiAgICB9KTtcbn0pO1xuXG4iXSwibmFtZXMiOlsiVGFibGUiLCJyZXF1aXJlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZmlndXJlIiwicXVlcnlTZWxlY3RvciIsImV2ZW50IiwiY2VsbCIsInRhcmdldCIsIm51bWJlciIsImlubmVyVGV4dCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/table.js":
/*!******************************!*\
  !*** ./src/scripts/table.js ***!
  \******************************/
/***/ (function(module) {

eval("function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n// const { findRelativeConfig } = require(\"@babel/core/lib/config/files\");\n// const { at } = require(\"core-js/core/string\");\n\nclass Table {\n  constructor(ele) {\n    _defineProperty(this, \"allElements\", void 0);\n    this.ele = ele;\n    this.fetchData();\n    // this.handleClick = this.handleClick.bind(this)\n  }\n\n  fetchData() {\n    var requestOptions = {\n      method: 'GET',\n      redirect: 'follow'\n    };\n    fetch(\"https://periodic-table-elements-info.herokuapp.com/elements\", requestOptions).then(response => response.json()).then(result => {\n      this.allElements = result;\n      this.setupTable();\n    }).catch(error => console.log('error', error));\n  }\n  setupTable() {\n    for (let i = 0; i < this.allElements.length; i++) {\n      const div = document.createElement(\"div\");\n      div.classList.add(\"element\");\n      const atomicNum = document.createElement(\"div\");\n      atomicNum.classList.add(\"atomicNum\");\n      atomicNum.innerHTML = this.allElements[i].atomicNumber;\n      const symbol = document.createElement(\"h2\");\n      symbol.innerHTML = this.allElements[i].symbol;\n      symbol.classList.add(\"symbol\");\n\n      // const name = document.createElement(\"div\");\n      // symbol.innerHTML = this.allElements[i].name\n      // name.classList.add(\"name\");\n\n      div.appendChild(atomicNum);\n      div.appendChild(symbol);\n      // div.appendChild(name);\n      this.ele.appendChild(div);\n    }\n    ;\n  }\n\n  //  handleClick(e){\n  //     const el = e.target;\n  //     if (el.classList.contains(\"element\")){\n  //         console.log(\"hi\")\n  //     }\n  //  }\n}\n\nmodule.exports = Table;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy90YWJsZS5qcy5qcyIsIm5hbWVzIjpbIlRhYmxlIiwiY29uc3RydWN0b3IiLCJlbGUiLCJmZXRjaERhdGEiLCJyZXF1ZXN0T3B0aW9ucyIsIm1ldGhvZCIsInJlZGlyZWN0IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwicmVzdWx0IiwiYWxsRWxlbWVudHMiLCJzZXR1cFRhYmxlIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJpIiwibGVuZ3RoIiwiZGl2IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXRvbWljTnVtIiwiaW5uZXJIVE1MIiwiYXRvbWljTnVtYmVyIiwic3ltYm9sIiwiYXBwZW5kQ2hpbGQiLCJtb2R1bGUiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXByb2plY3QvLi9zcmMvc2NyaXB0cy90YWJsZS5qcz8xZWYxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IHsgZmluZFJlbGF0aXZlQ29uZmlnIH0gPSByZXF1aXJlKFwiQGJhYmVsL2NvcmUvbGliL2NvbmZpZy9maWxlc1wiKTtcbi8vIGNvbnN0IHsgYXQgfSA9IHJlcXVpcmUoXCJjb3JlLWpzL2NvcmUvc3RyaW5nXCIpO1xuXG5cblxuY2xhc3MgVGFibGV7XG4gICAgYWxsRWxlbWVudHNcblxuICAgIGNvbnN0cnVjdG9yKGVsZSl7XG4gICAgICAgIHRoaXMuZWxlID0gZWxlO1xuICAgICAgICB0aGlzLmZldGNoRGF0YSgpO1xuICAgICAgICAvLyB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpXG4gICAgfVxuICAgIFxuICAgIGZldGNoRGF0YSgpe1xuXG4gICAgICAgIHZhciByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICByZWRpcmVjdDogJ2ZvbGxvdydcbiAgICAgICAgfTtcbiAgXG4gICAgICAgIGZldGNoKFwiaHR0cHM6Ly9wZXJpb2RpYy10YWJsZS1lbGVtZW50cy1pbmZvLmhlcm9rdWFwcC5jb20vZWxlbWVudHNcIiwgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWxsRWxlbWVudHMgPSByZXN1bHRcbiAgICAgICAgICAgICAgICB0aGlzLnNldHVwVGFibGUoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coJ2Vycm9yJywgZXJyb3IpKTtcblxuICAgIH1cbiAgICBzZXR1cFRhYmxlKCl7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmFsbEVsZW1lbnRzLmxlbmd0aDsgaSsrKXtcblxuICAgICAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJlbGVtZW50XCIpO1xuXG4gICAgICAgICAgICBjb25zdCBhdG9taWNOdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpOyAgICAgICAgXG4gICAgICAgICAgICBhdG9taWNOdW0uY2xhc3NMaXN0LmFkZChcImF0b21pY051bVwiKTtcbiAgICAgICAgICAgIGF0b21pY051bS5pbm5lckhUTUwgPSB0aGlzLmFsbEVsZW1lbnRzW2ldLmF0b21pY051bWJlcjsgXG5cbiAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgICAgICAgIHN5bWJvbC5pbm5lckhUTUwgPSB0aGlzLmFsbEVsZW1lbnRzW2ldLnN5bWJvbDtcbiAgICAgICAgICAgIHN5bWJvbC5jbGFzc0xpc3QuYWRkKFwic3ltYm9sXCIpO1xuXG4gICAgICAgICAgICAvLyBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIC8vIHN5bWJvbC5pbm5lckhUTUwgPSB0aGlzLmFsbEVsZW1lbnRzW2ldLm5hbWVcbiAgICAgICAgICAgIC8vIG5hbWUuY2xhc3NMaXN0LmFkZChcIm5hbWVcIik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChhdG9taWNOdW0pO1xuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKHN5bWJvbCk7XG4gICAgICAgICAgICAvLyBkaXYuYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgICAgICAgICB0aGlzLmVsZS5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICB9O1xuICAgICB9XG5cbiAgICAvLyAgaGFuZGxlQ2xpY2soZSl7XG4gICAgLy8gICAgIGNvbnN0IGVsID0gZS50YXJnZXQ7XG4gICAgLy8gICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoXCJlbGVtZW50XCIpKXtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwiaGlcIilcbiAgICAvLyAgICAgfVxuICAgIC8vICB9XG59ICAgIFxuXG5tb2R1bGUuZXhwb3J0cyA9IFRhYmxlOyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBSUEsTUFBTUEsS0FBSztFQUdQQyxXQUFXLENBQUNDLEdBQUcsRUFBQztJQUFBO0lBQ1osSUFBSSxDQUFDQSxHQUFHLEdBQUdBLEdBQUc7SUFDZCxJQUFJLENBQUNDLFNBQVMsRUFBRTtJQUNoQjtFQUNKOztFQUVBQSxTQUFTLEdBQUU7SUFFUCxJQUFJQyxjQUFjLEdBQUc7TUFDakJDLE1BQU0sRUFBRSxLQUFLO01BQ2JDLFFBQVEsRUFBRTtJQUNkLENBQUM7SUFFREMsS0FBSyxDQUFDLDZEQUE2RCxFQUFFSCxjQUFjLENBQUMsQ0FDL0VJLElBQUksQ0FBQ0MsUUFBUSxJQUFJQSxRQUFRLENBQUNDLElBQUksRUFBRSxDQUFDLENBQ2pDRixJQUFJLENBQUNHLE1BQU0sSUFBSTtNQUNaLElBQUksQ0FBQ0MsV0FBVyxHQUFHRCxNQUFNO01BQ3pCLElBQUksQ0FBQ0UsVUFBVSxFQUFFO0lBQ3JCLENBQUMsQ0FBQyxDQUNEQyxLQUFLLENBQUNDLEtBQUssSUFBSUMsT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBTyxFQUFFRixLQUFLLENBQUMsQ0FBQztFQUVwRDtFQUNBRixVQUFVLEdBQUU7SUFFUixLQUFLLElBQUlLLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRyxJQUFJLENBQUNOLFdBQVcsQ0FBQ08sTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBQztNQUU3QyxNQUFNRSxHQUFHLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEtBQUssQ0FBQztNQUV6Q0YsR0FBRyxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxTQUFTLENBQUM7TUFFNUIsTUFBTUMsU0FBUyxHQUFHSixRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7TUFDL0NHLFNBQVMsQ0FBQ0YsU0FBUyxDQUFDQyxHQUFHLENBQUMsV0FBVyxDQUFDO01BQ3BDQyxTQUFTLENBQUNDLFNBQVMsR0FBRyxJQUFJLENBQUNkLFdBQVcsQ0FBQ00sQ0FBQyxDQUFDLENBQUNTLFlBQVk7TUFFdEQsTUFBTUMsTUFBTSxHQUFHUCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxJQUFJLENBQUM7TUFDM0NNLE1BQU0sQ0FBQ0YsU0FBUyxHQUFHLElBQUksQ0FBQ2QsV0FBVyxDQUFDTSxDQUFDLENBQUMsQ0FBQ1UsTUFBTTtNQUM3Q0EsTUFBTSxDQUFDTCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7O01BRTlCO01BQ0E7TUFDQTs7TUFFQUosR0FBRyxDQUFDUyxXQUFXLENBQUNKLFNBQVMsQ0FBQztNQUMxQkwsR0FBRyxDQUFDUyxXQUFXLENBQUNELE1BQU0sQ0FBQztNQUN2QjtNQUNBLElBQUksQ0FBQzFCLEdBQUcsQ0FBQzJCLFdBQVcsQ0FBQ1QsR0FBRyxDQUFDO0lBQzdCO0lBQUM7RUFDSjs7RUFFRDtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7QUFDSjs7QUFFQVUsTUFBTSxDQUFDQyxPQUFPLEdBQUcvQixLQUFLIn0=\n//# sourceURL=webpack-internal:///./src/scripts/table.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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