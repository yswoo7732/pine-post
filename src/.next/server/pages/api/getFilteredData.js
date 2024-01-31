"use strict";
(() => {
var exports = {};
exports.id = 879;
exports.ids = [879];
exports.modules = {

/***/ 891:
/***/ ((module) => {

module.exports = require("@notionhq/client");

/***/ }),

/***/ 7645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_notion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2914);

const handler = async (req, res)=>{
    const jsonData = req.body;
    try {
        console.log("getFilteredDatabases req:");
        const response = await (0,_lib_notion__WEBPACK_IMPORTED_MODULE_0__/* .getFilteredDatabases */ .u0)(jsonData);
        res.status(200).json(response);
        console.log("getFilteredDatabases", response);
    } catch (error) {
        console.error("getFilteredData Error", error);
        res.status(500).json(error);
    } finally{
        console.log("api/getFilteredDatabases");
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [914], () => (__webpack_exec__(7645)));
module.exports = __webpack_exports__;

})();