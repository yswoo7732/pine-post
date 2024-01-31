"use strict";
(() => {
var exports = {};
exports.id = 986;
exports.ids = [986];
exports.modules = {

/***/ 7824:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(825);
/* harmony import */ var _hooks_useCategoryByPostsQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5699);
/* harmony import */ var _hooks_useTagsByPostsQuery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1071);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1407);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_useCategoryByPostsQuery__WEBPACK_IMPORTED_MODULE_4__, _hooks_useTagsByPostsQuery__WEBPACK_IMPORTED_MODULE_5__]);
([_hooks_useCategoryByPostsQuery__WEBPACK_IMPORTED_MODULE_4__, _hooks_useTagsByPostsQuery__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const PostList = ({ id , property , name  })=>{
    const { data , hasNextPage , isFetching , fetchNextPage  } = property === "Tags" ? (0,_hooks_useTagsByPostsQuery__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(id) : (0,_hooks_useCategoryByPostsQuery__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(id);
    function DebouncedLink({ href , children  }) {
        const { 0: isClickDisabled , 1: setIsClickDisabled  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
        const handleClick = (e)=>{
            console.log(href);
            e.preventDefault();
            if (!isClickDisabled) {
                setIsClickDisabled(true);
                setTimeout(()=>{
                    setIsClickDisabled(false);
                }, 1000);
                if ((0,_lib_utils__WEBPACK_IMPORTED_MODULE_7__/* .isPine */ .OP)()) {
                    window.open(`${_constants__WEBPACK_IMPORTED_MODULE_6__/* .APP_LINK_WEB */ .Bk}${href.pathname}?id=${href.query.id}`);
                } else {
                    window.location.href = `${href.pathname}?id=${href.query.id}`;
                }
            }
        };
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
            href: href,
            legacyBehavior: true,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                className: "flex items-center gap-4 px-7 py-3 mb-4 active:bg-neutral-10",
                onClick: handleClick,
                children: children
            })
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
        className: "p-container",
        children: data && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
            className: "pb-7",
            children: [
                property === "Tags" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                    className: "mx-7 py-4",
                    children: [
                        "#",
                        id
                    ]
                }),
                property === "category" && !(0,_lib_utils__WEBPACK_IMPORTED_MODULE_7__/* .isPine */ .OP)() && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                    className: "mx-7 py-4",
                    children: name
                }),
                data.pages.map((page)=>page.results?.map((block, index)=>block.properties.slug.rich_text.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DebouncedLink, {
                            href: {
                                pathname: `/${block.properties.slug.rich_text[0].plain_text}`,
                                query: {
                                    id: block.id
                                }
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex-shrink-0",
                                    children: block.properties.Icon?.files?.[0] ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "bg-neutral-10 w-[50px] h-[50px] text-center rounded-full flex items-center justify-center",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                            alt: "\uC544\uC774\uCF58",
                                            src: block.properties.Icon.files[0].file.url,
                                            width: 32,
                                            height: 32,
                                            unoptimized: true
                                        })
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        alt: "\uC544\uC774\uCF58",
                                        src: "/icon-bg.png",
                                        width: 50,
                                        height: 50
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                    className: " line-clamp-2",
                                    children: block.properties?.Name.title[0].plain_text
                                })
                            ]
                        }, block.id))),
                hasNextPage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "p-container mx-container pb-8",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "font-bold mx-container p-container py-4 min-w-full rounded-[10px] text-center bg-neutral-20 active:bg-neutral-30",
                        onClick: ()=>fetchNextPage(),
                        disabled: isFetching,
                        children: "\uB354 \uBCF4\uAE30"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostList);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5699:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_queryKey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4886);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9752);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__]);
_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useCategoryByPostsQuery = (id)=>{
    const data = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useInfiniteQuery)(_constants_queryKey__WEBPACK_IMPORTED_MODULE_0__/* .queryKey.filter */ .E.filter(id), async ({ pageParam =undefined  })=>{
        const filter = {
            property: "category",
            relation: {
                contains: id
            }
        };
        if (pageParam === undefined) {
            // cursor 값이 undefined일 때의 처리
            const res = await fetch("/api/getFilteredData", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(filter)
            });
            return res.json();
        }
        const res1 = await fetch(`/api/getData?cursor=${pageParam}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(filter)
        });
        // logger.info('useCategoryByPostsQuery: ', filter);
        return res1.json();
    }, {
        getNextPageParam: (lastPage)=>lastPage.next_cursor
    });
    if (!data) {
        throw new Error("Posts data is not found");
    }
    return data;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCategoryByPostsQuery);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1071:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_queryKey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4886);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9752);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__]);
_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useTagsByPostsQuery = (id)=>{
    // console.log(id, !!id);
    const data = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useInfiniteQuery)(_constants_queryKey__WEBPACK_IMPORTED_MODULE_0__/* .queryKey.filter */ .E.filter(id), async ({ pageParam =undefined  })=>{
        const filter = {
            property: "Tags",
            multi_select: {
                contains: id
            }
        };
        console.log("pageParam", pageParam);
        if (pageParam === undefined) {
            // cursor 값이 undefined일 때의 처리
            const res = await fetch("/api/getFilteredData", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(filter)
            });
            return res.json();
        }
        const res1 = await fetch(`/api/getData?cursor=${pageParam}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(filter)
        });
        return res1.json();
    }, {
        getNextPageParam: (lastPage)=>lastPage.next_cursor
    });
    // console.log(data);
    if (!data) throw new Error("Posts data is not found");
    return data;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useTagsByPostsQuery);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4772:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_PostList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7824);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_PostList__WEBPACK_IMPORTED_MODULE_2__]);
_components_PostList__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const getServerSideProps = async (context)=>{
    const { property , title , id  } = context.query;
    return {
        props: {
            id: id,
            property: property,
            name: title,
            title: {
                text: property === "category" ? title : ""
            }
        }
    };
};
const Feed = ({ id , property , name  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_PostList__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        id: id,
        property: property,
        name: name
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Feed);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9752:
/***/ ((module) => {

module.exports = import("@tanstack/react-query");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [311,675,952,664,148], () => (__webpack_exec__(4772)));
module.exports = __webpack_exports__;

})();