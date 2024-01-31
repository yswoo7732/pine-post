"use strict";
exports.id = 914;
exports.ids = [914];
exports.modules = {

/***/ 2914:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cp": () => (/* binding */ getDatabases),
/* harmony export */   "Oi": () => (/* binding */ getCategoryDatabases),
/* harmony export */   "Or": () => (/* binding */ getDatabasesPages),
/* harmony export */   "UQ": () => (/* binding */ getPages),
/* harmony export */   "Vl": () => (/* binding */ getBlocks),
/* harmony export */   "u0": () => (/* binding */ getFilteredDatabases)
/* harmony export */ });
/* harmony import */ var _notionhq_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(891);
/* harmony import */ var _notionhq_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_notionhq_client__WEBPACK_IMPORTED_MODULE_0__);

// 환경 변수를 통해 프록시 설정 적용
const httpsProxy = process.env.HTTPS_PROXY || "";
// const agent = new HttpsProxyAgent(httpsProxy);
const client = new _notionhq_client__WEBPACK_IMPORTED_MODULE_0__.Client({
    auth: process.env.NOTION_KEY
});
// 카테고리 DB 조회
async function getCategoryDatabases() {
    console.log("notion getCategoryDatabases req:");
    try {
        const res = await client.databases.query({
            database_id: `${process.env.NOTION_CATEGORY_DB}`,
            page_size: 100
        });
        return res;
    } catch (error) {
        if (error instanceof Error && "code" in error) {
            // Notion API specific error handling
            switch(error.code){
                case _notionhq_client__WEBPACK_IMPORTED_MODULE_0__.APIErrorCode.RateLimited:
                    console.log("Rate limited. Please try again later.");
                    break;
                case _notionhq_client__WEBPACK_IMPORTED_MODULE_0__.APIErrorCode.ObjectNotFound:
                    console.log("Not found. The resource may not exist.");
                    break;
                default:
                    console.error("Unhandled Notion API error:", error.message);
            }
        } else {
            // Generic error handling
            console.error("Unexpected error:", error.message);
        }
    }
}
// 컨텐츠 DB 조회
async function getDatabases() {
    console.log("notion getDatabases req:");
    try {
        const res = await client.databases.query({
            database_id: `${process.env.NOTION_DATABASE}`,
            filter: {
                property: "Status",
                status: {
                    equals: "Published"
                }
            },
            page_size: 10
        });
        return res;
    } catch (error) {
        if (error instanceof Error && "code" in error) {
            // Notion API specific error handling
            switch(error.code){
                case _notionhq_client__WEBPACK_IMPORTED_MODULE_0__.APIErrorCode.RateLimited:
                    console.log("Rate limited. Please try again later.");
                    break;
                case _notionhq_client__WEBPACK_IMPORTED_MODULE_0__.APIErrorCode.ObjectNotFound:
                    console.log("Not found. The resource may not exist.");
                    break;
                default:
                    console.error("Unhandled Notion API error:", error.message);
            }
        } else {
            // Generic error handling
            console.error("Unexpected error:", error.message);
        }
    }
}
async function getFilteredDatabases(filter) {
    console.log("notion getFilteredDatabases req:", filter);
    try {
        const filteredRows = await client.databases.query({
            database_id: `${process.env.NOTION_DATABASE}`,
            filter: {
                and: [
                    filter,
                    {
                        property: "Status",
                        status: {
                            equals: "Published"
                        }
                    }, 
                ]
            },
            page_size: 10
        });
        return filteredRows;
    } catch (error) {
        if (error instanceof Error && "code" in error) {
            // Notion API specific error handling
            switch(error.code){
                case _notionhq_client__WEBPACK_IMPORTED_MODULE_0__.APIErrorCode.RateLimited:
                    console.log("Rate limited. Please try again later.");
                    break;
                case _notionhq_client__WEBPACK_IMPORTED_MODULE_0__.APIErrorCode.ObjectNotFound:
                    console.log("Not found. The resource may not exist.");
                    break;
                default:
                    console.error("Unhandled Notion API error:", error.message);
            }
        } else {
            // Generic error handling
            console.error("Unexpected error:", error.message);
        }
    }
}
async function getDatabasesPages(cursor, filter) {
    console.log("notion getDatabasesPages req:", cursor, filter);
    try {
        const res = await client.databases.query({
            database_id: `${process.env.NOTION_DATABASE}`,
            filter: {
                and: [
                    filter,
                    {
                        property: "Status",
                        status: {
                            equals: "Published"
                        }
                    }, 
                ]
            },
            page_size: 10,
            start_cursor: cursor
        });
        return res;
    } catch (error) {
        if (error instanceof Error && "code" in error) {
            // Notion API specific error handling
            switch(error.code){
                case _notionhq_client__WEBPACK_IMPORTED_MODULE_0__.APIErrorCode.RateLimited:
                    console.log("Rate limited. Please try again later.");
                    break;
                case _notionhq_client__WEBPACK_IMPORTED_MODULE_0__.APIErrorCode.ObjectNotFound:
                    console.log("Not found. The resource may not exist.");
                    break;
                default:
                    console.error("Unhandled Notion API error:", error.message);
            }
        } else {
            // Generic error handling
            console.error("Unexpected error:", error.message);
        }
    }
}
async function getPages(id) {
    console.log("notion getPages req:", id);
    try {
        const res = await client.pages.retrieve({
            page_id: id
        });
        return res;
    } catch (error) {
        if (error instanceof Error && "code" in error) {
            // Notion API specific error handling
            switch(error.code){
                case _notionhq_client__WEBPACK_IMPORTED_MODULE_0__.APIErrorCode.RateLimited:
                    console.log("Rate limited. Please try again later.");
                    break;
                case _notionhq_client__WEBPACK_IMPORTED_MODULE_0__.APIErrorCode.ObjectNotFound:
                    console.log("Not found. The resource may not exist.");
                    break;
                default:
                    console.error("Unhandled Notion API error:", error.message);
            }
        } else {
            // Generic error handling
            console.error("Unexpected error:", error.message);
        }
    }
}
async function getBlocks(id) {
    console.log("notion getBlocks req:", id);
    id = id.replaceAll("-", "");
    const myBlocks = await client.blocks.children.list({
        block_id: id
    });
    return myBlocks;
}



/***/ })

};
;