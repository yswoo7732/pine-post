"use strict";
(() => {
var exports = {};
exports.id = 336;
exports.ids = [336];
exports.modules = {

/***/ 891:
/***/ ((module) => {

module.exports = require("@notionhq/client");

/***/ }),

/***/ 4830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_notion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2914);

async function handler(req, res) {
    const { cursor  } = req.query;
    const jsonData = req.body;
    try {
        const response = await (0,_lib_notion__WEBPACK_IMPORTED_MODULE_0__/* .getDatabasesPages */ .Or)(cursor, jsonData);
        res.status(200).json(response);
        console.info("getData: ", response);
    } catch (e) {
        console.error("getData Error: ", e);
        res.status(500).json(e);
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [914], () => (__webpack_exec__(4830)));
module.exports = __webpack_exports__;

})();