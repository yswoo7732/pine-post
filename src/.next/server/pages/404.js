"use strict";
(() => {
var exports = {};
exports.id = 197;
exports.ids = [197];
exports.modules = {

/***/ 5322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _site_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2899);
/* harmony import */ var _site_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_site_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_Error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3566);
/* harmony import */ var _components_MetaConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(455);




async function getStaticProps() {
    // 여기에서 데이터 가져오기
    return {
        props: {
            title: {
                text: ""
            }
        }
    };
}
const NotFoundPage = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Error__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {});
};
NotFoundPage.getLayout = (page)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MetaConfig__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                title: _site_config__WEBPACK_IMPORTED_MODULE_1__.CONFIG.blog.title,
                description: _site_config__WEBPACK_IMPORTED_MODULE_1__.CONFIG.blog.description,
                type: "website",
                url: _site_config__WEBPACK_IMPORTED_MODULE_1__.CONFIG.link
            }),
            page
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFoundPage);


/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [311,675,455,566], () => (__webpack_exec__(5322)));
module.exports = __webpack_exports__;

})();