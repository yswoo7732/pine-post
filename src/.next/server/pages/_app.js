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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./lib/react-query/index.ts":
/*!**********************************!*\
  !*** ./lib/react-query/index.ts ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"queryClient\": () => (/* binding */ queryClient)\n/* harmony export */ });\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tanstack/react-query */ \"@tanstack/react-query\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__]);\n_tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_0__.QueryClient({\n    defaultOptions: {\n        queries: {\n            staleTime: 1000 * 60\n        }\n    }\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcmVhY3QtcXVlcnkvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBb0Q7QUFFN0MsTUFBTUMsV0FBVyxHQUFHLElBQUlELDhEQUFXLENBQUM7SUFDekNFLGNBQWMsRUFBRTtRQUNkQyxPQUFPLEVBQUU7WUFDUEMsU0FBUyxFQUFFLElBQUksR0FBRyxFQUFFO1NBQ3JCO0tBQ0Y7Q0FDRixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcnRpY2xlLy4vbGliL3JlYWN0LXF1ZXJ5L2luZGV4LnRzPzhmNDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUXVlcnlDbGllbnQgfSBmcm9tICdAdGFuc3RhY2svcmVhY3QtcXVlcnknO1xuXG5leHBvcnQgY29uc3QgcXVlcnlDbGllbnQgPSBuZXcgUXVlcnlDbGllbnQoe1xuICBkZWZhdWx0T3B0aW9uczoge1xuICAgIHF1ZXJpZXM6IHtcbiAgICAgIHN0YWxlVGltZTogMTAwMCAqIDYwLFxuICAgIH0sXG4gIH0sXG59KTtcbiJdLCJuYW1lcyI6WyJRdWVyeUNsaWVudCIsInF1ZXJ5Q2xpZW50IiwiZGVmYXVsdE9wdGlvbnMiLCJxdWVyaWVzIiwic3RhbGVUaW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/react-query/index.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/react-query */ \"./lib/react-query/index.ts\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tanstack/react-query */ \"@tanstack/react-query\");\n/* harmony import */ var _tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tanstack/react-query-devtools */ \"@tanstack/react-query-devtools\");\n/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nextjs-progressbar */ \"nextjs-progressbar\");\n/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nextjs_progressbar__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_react_query__WEBPACK_IMPORTED_MODULE_1__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__, _tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_3__]);\n([_lib_react_query__WEBPACK_IMPORTED_MODULE_1__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__, _tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    const getLayout = Component.getLayout || ((page)=>page);\n    const { title  } = pageProps;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClientProvider, {\n        client: _lib_react_query__WEBPACK_IMPORTED_MODULE_1__.queryClient,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.Hydrate, {\n                state: pageProps.dehydratedState,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((nextjs_progressbar__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        color: \"#00C851\",\n                        startPosition: 0.3,\n                        stopDelayMs: 200,\n                        height: 1,\n                        showOnShallow: true,\n                        options: {\n                            showSpinner: false\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/wys/workspace/pine-post/src/pages/_app.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, this),\n                    getLayout(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/Users/wys/workspace/pine-post/src/pages/_app.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 20\n                    }, this))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/wys/workspace/pine-post/src/pages/_app.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_3__.ReactQueryDevtools, {}, void 0, false, {\n                fileName: \"/Users/wys/workspace/pine-post/src/pages/_app.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/wys/workspace/pine-post/src/pages/_app.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n// function App({ Component, pageProps }: AppPropsWithLayout) {\n//   return <Component {...pageProps} />;\n// }\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBZ0Q7QUFFcUI7QUFDRDtBQUNyQjtBQUNqQjtBQUU5QixTQUFTSyxHQUFHLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQXNCLEVBQUU7SUFDekQsTUFBTUMsU0FBUyxHQUFHRixTQUFTLENBQUNFLFNBQVMsSUFBSSxDQUFDQyxDQUFBQSxJQUFJLEdBQUlBLElBQUksQ0FBQztJQUN2RCxNQUFNLEVBQUVDLEtBQUssR0FBRSxHQUFHSCxTQUFTO0lBRTNCLHFCQUNFLDhEQUFDTCxzRUFBbUI7UUFBQ1MsTUFBTSxFQUFFWCx5REFBVzs7MEJBQ3RDLDhEQUFDQywwREFBTztnQkFBQ1csS0FBSyxFQUFFTCxTQUFTLENBQUNNLGVBQWU7O2tDQUN2Qyw4REFBQ1QsMkRBQWE7d0JBQ1pVLEtBQUssRUFBRSxTQUFTO3dCQUNoQkMsYUFBYSxFQUFFLEdBQUc7d0JBQ2xCQyxXQUFXLEVBQUUsR0FBRzt3QkFDaEJDLE1BQU0sRUFBRSxDQUFDO3dCQUNUQyxhQUFhLEVBQUUsSUFBSTt3QkFDbkJDLE9BQU8sRUFBRTs0QkFBRUMsV0FBVyxFQUFFLEtBQUs7eUJBQUU7Ozs7OzRCQUMvQjtvQkFDRFosU0FBUyxlQUFDLDhEQUFDRixTQUFTO3dCQUFFLEdBQUdDLFNBQVM7Ozs7OzRCQUFJLENBQUM7Ozs7OztvQkFHaEM7MEJBQ1YsOERBQUNKLDhFQUFrQjs7OztvQkFBRzs7Ozs7O1lBQ0YsQ0FDdEI7Q0FDSDtBQUNELCtEQUErRDtBQUMvRCx5Q0FBeUM7QUFDekMsSUFBSTtBQUVKLGlFQUFlRSxHQUFHLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcnRpY2xlLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBxdWVyeUNsaWVudCB9IGZyb20gJ0AvbGliL3JlYWN0LXF1ZXJ5JztcbmltcG9ydCB7IEFwcFByb3BzV2l0aExheW91dCB9IGZyb20gJ0AvdHlwZXMnO1xuaW1wb3J0IHsgSHlkcmF0ZSwgUXVlcnlDbGllbnRQcm92aWRlciB9IGZyb20gJ0B0YW5zdGFjay9yZWFjdC1xdWVyeSc7XG5pbXBvcnQgeyBSZWFjdFF1ZXJ5RGV2dG9vbHMgfSBmcm9tICdAdGFuc3RhY2svcmVhY3QtcXVlcnktZGV2dG9vbHMnO1xuaW1wb3J0IE5leHROUHJvZ3Jlc3MgZnJvbSAnbmV4dGpzLXByb2dyZXNzYmFyJztcbmltcG9ydCAnQC9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuXG5mdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wc1dpdGhMYXlvdXQpIHtcbiAgY29uc3QgZ2V0TGF5b3V0ID0gQ29tcG9uZW50LmdldExheW91dCB8fCAocGFnZSA9PiBwYWdlKTtcbiAgY29uc3QgeyB0aXRsZSB9ID0gcGFnZVByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtxdWVyeUNsaWVudH0+XG4gICAgICA8SHlkcmF0ZSBzdGF0ZT17cGFnZVByb3BzLmRlaHlkcmF0ZWRTdGF0ZX0+XG4gICAgICAgIDxOZXh0TlByb2dyZXNzXG4gICAgICAgICAgY29sb3I9eycjMDBDODUxJ31cbiAgICAgICAgICBzdGFydFBvc2l0aW9uPXswLjN9XG4gICAgICAgICAgc3RvcERlbGF5TXM9ezIwMH1cbiAgICAgICAgICBoZWlnaHQ9ezF9XG4gICAgICAgICAgc2hvd09uU2hhbGxvdz17dHJ1ZX1cbiAgICAgICAgICBvcHRpb25zPXt7IHNob3dTcGlubmVyOiBmYWxzZSB9fVxuICAgICAgICAvPlxuICAgICAgICB7Z2V0TGF5b3V0KDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz4pfVxuICAgICAgICB7LyogPFJvb3RMYXlvdXQgdGl0bGU9e3RpdGxlfT4gKi99XG4gICAgICAgIHsvKiA8L1Jvb3RMYXlvdXQ+ICovfVxuICAgICAgPC9IeWRyYXRlPlxuICAgICAgPFJlYWN0UXVlcnlEZXZ0b29scyAvPlxuICAgIDwvUXVlcnlDbGllbnRQcm92aWRlcj5cbiAgKTtcbn1cbi8vIGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzV2l0aExheW91dCkge1xuLy8gICByZXR1cm4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPjtcbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIl0sIm5hbWVzIjpbInF1ZXJ5Q2xpZW50IiwiSHlkcmF0ZSIsIlF1ZXJ5Q2xpZW50UHJvdmlkZXIiLCJSZWFjdFF1ZXJ5RGV2dG9vbHMiLCJOZXh0TlByb2dyZXNzIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiZ2V0TGF5b3V0IiwicGFnZSIsInRpdGxlIiwiY2xpZW50Iiwic3RhdGUiLCJkZWh5ZHJhdGVkU3RhdGUiLCJjb2xvciIsInN0YXJ0UG9zaXRpb24iLCJzdG9wRGVsYXlNcyIsImhlaWdodCIsInNob3dPblNoYWxsb3ciLCJvcHRpb25zIiwic2hvd1NwaW5uZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "nextjs-progressbar":
/*!*************************************!*\
  !*** external "nextjs-progressbar" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("nextjs-progressbar");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@tanstack/react-query":
/*!****************************************!*\
  !*** external "@tanstack/react-query" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ "@tanstack/react-query-devtools":
/*!*************************************************!*\
  !*** external "@tanstack/react-query-devtools" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@tanstack/react-query-devtools");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();