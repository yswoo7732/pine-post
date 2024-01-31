"use strict";
(() => {
var exports = {};
exports.id = 453;
exports.ids = [453];
exports.modules = {

/***/ 891:
/***/ ((module) => {

module.exports = require("@notionhq/client");

/***/ }),

/***/ 3510:
/***/ ((module) => {

module.exports = require("https-proxy-agent");

/***/ }),

/***/ 6555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ }),

/***/ 2677:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _notionhq_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(891);
/* harmony import */ var _notionhq_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_notionhq_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var https_proxy_agent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3510);
/* harmony import */ var https_proxy_agent__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(https_proxy_agent__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _transactionId__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9234);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_transactionId__WEBPACK_IMPORTED_MODULE_2__]);
_transactionId__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// pages/api/hello.js



// 환경 변수를 통해 프록시 설정 적용
const httpsProxy = process.env.HTTPS_PROXY || "";
const agent = new https_proxy_agent__WEBPACK_IMPORTED_MODULE_1__.HttpsProxyAgent(httpsProxy);
const client = new _notionhq_client__WEBPACK_IMPORTED_MODULE_0__.Client({
    auth: process.env.NOTION_KEY
});
async function handler(req, res) {
    // const requestId = generateUniqueTransactionId();
    try {
        // 서버 측에서 Notion API 호출 전 로그 출력
        setTimeout(()=>{
            console.log(`[${requestId}] Calling Notion API`);
        }, 3000);
        // Notion API 호출
        const response = await client.databases.query({
            database_id: `${process.env.NOTION_DATABASE}`,
            filter: {
                property: "Status",
                status: {
                    equals: "Published"
                }
            },
            page_size: 10
        });
        // 서버 측에서 Notion API 호출 후 로그 출력
        setTimeout(()=>{
            console.log(`[${requestId}] Notion API response:`, response);
        }, 3000);
        res.status(200).json({
            message: "Hello"
        });
    } catch (error) {
        // console.error(`[${requestId}] Error calling Notion API`, error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9234:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export generateUniqueTransactionId */
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6555);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_0__]);
uuid__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// transactionId.js

let currentRequestId = null;
function generateUniqueTransactionId() {
    // 서버 측에서 요청이 없는 경우 또는 처음 요청인 경우 새로운 UUID 생성
    if (!currentRequestId) {
        currentRequestId = uuidv4();
    }
    return currentRequestId;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2677));
module.exports = __webpack_exports__;

})();