"use strict";
exports.id = 455;
exports.ids = [455];
exports.modules = {

/***/ 455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var site_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2899);
/* harmony import */ var site_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(site_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);



const MetaConfig = (props)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: props.title ?? "\uD22C\uC790 \uCF58\uD150\uCE20"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                charSet: "UTF-8"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "viewport",
                content: "width=device-width, initial-scale=1.0, viewport-fit=cover"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "description",
                content: props.description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:type",
                content: props.type
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:title",
                content: props.title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:description",
                content: props.description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:url",
                content: props.url
            }),
            site_config__WEBPACK_IMPORTED_MODULE_1__.CONFIG.lang && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:locale",
                content: site_config__WEBPACK_IMPORTED_MODULE_1__.CONFIG.lang
            }),
            props.image && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:image",
                content: props.image
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:title",
                content: props.title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:description",
                content: props.description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:card",
                content: "summary_large_image"
            }),
            props.image && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:image",
                content: props.image
            }),
            props.type === "Post" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MetaConfig);


/***/ }),

/***/ 2899:
/***/ ((module) => {


const CONFIG = {
    blog: {
        title: "\uC624\uB298\uB3C4 \uD589\uBCF5\uD55C \uD22C\uC790! \uD30C\uC778 \uD1A1\uD1A1",
        description: "\uC624\uB298\uB3C4 \uD589\uBCF5\uD55C \uD22C\uC790! \uD30C\uC778 PINE \uD1A1\uD1A1"
    },
    // CONFIG configration (required)
    link: process.env.SITE_URL || "https://post.pine.fund",
    since: 2023,
    lang: "ko-KR",
    ogImageGenerateURL: "https://kr.object.fin-ncloudstorage.com/mkt/pine_toktok_og_1200.png",
    revalidateTime: 1200
};
module.exports = {
    CONFIG
};


/***/ })

};
;