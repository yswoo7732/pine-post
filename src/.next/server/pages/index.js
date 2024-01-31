"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 5075:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _transactionId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5984);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_transactionId__WEBPACK_IMPORTED_MODULE_1__]);
_transactionId__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// export const getStaticProps: GetStaticProps = async () => {
//   try {
//     // 데이터를 가져오는 비동기 함수 호출
//     const data = await getCategoryDatabases();
//     if (!data) {
//       // 데이터가 없으면 에러 발생
//       throw new Error('Failed to fetch data');
//     }
//     // 각 페이지의 url을 사용하여 추가 데이터를 가져오기
//     const additionalDataPromises = data.results.map(async category => {
//       const categoryId = category.id;
//       const additionalData = await fetchAdditionalData(categoryId);
//       return { categoryId, additionalData, category };
//     });
//     // Promise.all을 사용하여 모든 페이지의 추가 데이터를 기다림
//     const pagesWithData = await Promise.all(additionalDataPromises);
//     return {
//       props: {
//         data: {
//           ...data,
//           results: pagesWithData,
//         },
//       },
//       revalidate: CONFIG.revalidateTime,
//     };
//   } catch (error) {
//     // 데이터를 가져오는 중에 오류가 발생하면 에러를 콘솔에 출력
//     console.error('Error fetching data:', error.message);
//     // 빈 데이터로 반환 또는 에러 처리에 따라 적절히 조치
//     return {
//       props: {
//         data: {},
//       },
//       revalidate: CONFIG.revalidateTime,
//     };
//   }
// };
// 각 페이지의 url을 받아와서 추가 데이터를 가져오는 비동기 함수
// async function fetchAdditionalData(categoryId: string) {
//   const filter = {
//     property: 'category',
//     relation: {
//       contains: categoryId,
//     },
//   };
//   const additionalData = await getFilteredDatabases(filter);
//   if (additionalData?.results) {
//     return additionalData.results;
//   }
// }
// const Home: NextPage<IndexPageProps> = data => {
//   const meta = {
//     title: CONFIG.blog.title,
//     description: CONFIG.blog.description,
//     type: 'website',
//     url: CONFIG.link,
//   };
//   console.log(data);
//   return (
//     <>
//       <MetaConfig {...meta} />
//       <PostListRepresent data={data} />
//     </>
//   );
// };
// export default Home;
// pages/index.js
const requestId = (0,_transactionId__WEBPACK_IMPORTED_MODULE_1__/* .generateUniqueTransactionId */ .q)();
function Home({ requestId  }) {
    const fetchNotionAPI = async ()=>{
        try {
            setTimeout(()=>{
                console.log(`[${requestId}] Before Calling Notion API`);
            }, 3000);
            // Notion API 호출
            const response = await fetch("/api/hello"); // 서버 측 API 호출
            const data = await response.json();
            // 클라이언트 측에서 Notion API 호출 후 로그 출력
            setTimeout(()=>{
                console.log(`[${requestId}] Notion API response:`, data);
            }, 3000);
        } catch (error) {
            console.error(`[${requestId}] Error calling Notion API`, error);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                children: "Hello"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                onClick: fetchNotionAPI,
                children: "Fetch Notion API"
            })
        ]
    });
};
async function getServerSideProps() {
    // 처음 요청일 때 로그 출력
    setTimeout(()=>{
        console.log("First request received.", requestId);
    }, 3000);
    // 여기서 데이터를 가져와서 props로 반환
    const data = "Some data from the server.";
    return {
        props: {
            requestId
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5984:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ generateUniqueTransactionId)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6555);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_0__]);
uuid__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// transactionId.js

let currentRequestId = null;
function generateUniqueTransactionId() {
    // 서버 측에서 요청이 없는 경우 또는 처음 요청인 경우 새로운 UUID 생성
    if (!currentRequestId) {
        currentRequestId = (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)();
    }
    return currentRequestId;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6555:
/***/ ((module) => {

module.exports = import("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5075));
module.exports = __webpack_exports__;

})();