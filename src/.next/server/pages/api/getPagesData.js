"use strict";
(() => {
var exports = {};
exports.id = 905;
exports.ids = [905];
exports.modules = {

/***/ 891:
/***/ ((module) => {

module.exports = require("@notionhq/client");

/***/ }),

/***/ 6264:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_notion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2914);

async function handler(req, res) {
    try {
        const { id  } = req.query;
        const response = await (0,_lib_notion__WEBPACK_IMPORTED_MODULE_0__/* .getPages */ .UQ)(`${id}`);
        res.status(200).json(response);
        console.info("getPagesData: ", response);
    } catch (error) {
        console.error("getPagesData Error: ", error);
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [914], () => (__webpack_exec__(6264)));
module.exports = __webpack_exports__;

})();