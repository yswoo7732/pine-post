(() => {
var exports = {};
exports.id = 219;
exports.ids = [219];
exports.modules = {

/***/ 3459:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "post_container__wfh5c",
	"name": "post_name__VR6_g",
	"back": "post_back__qcUHA",
	"bold": "post_bold__L_Aqp",
	"code": "post_code__LgCH9",
	"italic": "post_italic__YeZBg",
	"pre": "post_pre__k2Sog",
	"code_block": "post_code_block__gMmFH",
	"file": "post_file__W2GkG",
	"strikethrough": "post_strikethrough__ShGn5",
	"underline": "post_underline__MSG24",
	"bookmark": "post_bookmark__Fdvck",
	"table": "post_table__n_qOr",
	"row": "post_row__LSxz_",
	"childPage": "post_childPage__P2Fc4",
	"callout": "post_callout__sgzkI",
	"callout__content": "post_callout__content__3C0Dg",
	"semantic-string": "post_semantic-string__6fEBn",
	"callout-link": "post_callout-link__792tr",
	"blue": "post_blue__qALyK",
	"blue_background": "post_blue_background__4Yihm",
	"brown": "post_brown__BlsW7",
	"brown_background": "post_brown_background__Fq1d7",
	"gray": "post_gray__wDylT",
	"gray_background": "post_gray_background__zTHXb",
	"green": "post_green__9i6_J",
	"green_background": "post_green_background__rov9I",
	"orange": "post_orange__Sv7_d",
	"orange_background": "post_orange_background__3U2Bk",
	"pink": "post_pink__0ZUDC",
	"pink_background": "post_pink_background__DY8DC",
	"purple": "post_purple__l7iCH",
	"purple_background": "post_purple_background__hJgDO",
	"red": "post_red__dr_qy",
	"red_background": "post_red_background__AHf7h",
	"yellow": "post_yellow__z92ZE",
	"yellow_background": "post_yellow_background__gDsqb"
};


/***/ }),

/***/ 3427:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

// 컨텐츠 공유 됐을때 하단에 배치될 원링크(딥링킹) 버튼 - 인앱 아닐 경우
const OnelinkButton = ({ onClick , text  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: " bg-neutral-100 text-center text-neutral-10 h-15 rounded-[10px] min-w-full active:bg-neutral-90",
        onClick: onClick,
        children: text ?? "\uB354 \uB9CE\uC740 \uCEE8\uD150\uCE20 \uBCF4\uAE30"
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OnelinkButton);


/***/ }),

/***/ 6252:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_2": () => (/* binding */ renderBlock)
/* harmony export */ });
/* unused harmony exports Text, renderNestedList, classes */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3459);
/* harmony import */ var _styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_post_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(825);
/* harmony import */ var _lib_native__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5493);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4115);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_styled__WEBPACK_IMPORTED_MODULE_5__]);
_emotion_styled__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const Container = _emotion_styled__WEBPACK_IMPORTED_MODULE_5__["default"].figure`
position: relative;
padding: 1rem 0;
width: 100%;
height: 100%;
  & > span {
    position: unset !important;
    & .autoImage {
      object-fit: contain !important;
      position: relative !important;
      height: auto !important;
    }
`;
const Text = ({ text  })=>{
    if (!text) {
        return null;
    }
    return text.map((value, key)=>{
        const { annotations: { bold , code , color , italic , strikethrough , underline  } , text ,  } = value;
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            className: [
                bold ? "font-bold" : "font-medium",
                code ? (_styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default().code) : "",
                italic ? "italic" : "",
                strikethrough ? "strikethrough" : "",
                underline ? "underline" : "",
                (_styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default())[`${color}`], 
            ].join(" "),
            children: text.link ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: text.link.url,
                children: text.content
            }) : text.content
        }, key);
    });
};
const renderNestedList = (block)=>{
    const { type  } = block;
    const value = block[type];
    if (!value) return null;
    const isNumberedList = value.children[0].type === "numbered_list_item";
    if (isNumberedList) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ol", {
            children: value.children?.map((block)=>renderBlock(block))
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        children: value.children?.map((block)=>renderBlock(block))
    });
};
const renderBlock = (block)=>{
    const { type , id  } = block;
    const value = block[type];
    switch(type){
        case "paragraph":
            return value.rich_text.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: "mb-2 text-base font-medium",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Text, {
                    text: value.rich_text
                })
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {});
        case "heading_1":
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "mt-12 mb-5",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Text, {
                    text: value.rich_text
                })
            });
        case "heading_2":
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "mt-1 mb-2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Text, {
                    text: value.rich_text
                })
            });
        case "heading_3":
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: "mt-1 mb-2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Text, {
                    text: value.rich_text
                })
            });
        case "bulleted_list":
            {
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    children: value.children?.map((child)=>renderBlock(child))
                });
            }
        case "numbered_list":
            {
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ol", {
                    children: value.children?.map((child)=>renderBlock(child))
                });
            }
        case "bulleted_list_item":
        case "numbered_list_item":
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Text, {
                        text: value.rich_text
                    }),
                    !!value.children && renderNestedList(block)
                ]
            }, block.id);
        case "to_do":
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                    htmlFor: id,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            type: "checkbox",
                            id: id,
                            defaultChecked: value.checked
                        }),
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Text, {
                            text: value.rich_text
                        })
                    ]
                })
            });
        case "toggle":
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("details", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("summary", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Text, {
                            text: value.rich_text
                        })
                    }),
                    block.children?.map((child)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                            children: renderBlock(child)
                        }, child.id))
                ]
            });
        case "child_page":
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default().childPage),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                        children: value.title
                    }),
                    block.children?.map((child)=>renderBlock(child))
                ]
            });
        case "image":
            const src = value.type === "external" ? value.external.url : value.file.url;
            const caption = value.caption ? value.caption[0]?.plain_text : "";
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                        src: src,
                        alt: caption,
                        className: "autoImage",
                        layout: "fill",
                        unoptimized: true,
                        priority: true,
                        placeholder: "blur",
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAFUCAQAAAAJsv8dAAABs0lEQVR42u3QMREAAAgEIL9/RrNoCDcPIpCe4iACBQoUKBCBAgUKRKBAgQIRKFCgQAQKFCgQgQIFCkSgQIECEShQoEAEChQoEIECBQpEoECBAgUiUKBAgQgUKFAgAgUKFIhAgQIFIlCgQIEIFChQIAIFChSIQIECBSJQoECBCBQoUKBAgQIFChSIQIECBSJQoECBCBQoUCACBQoUiECBAgUiUKBAgQgUKFAgAgUKFIhAgQIFIlCgQIECEShQoEAEChQoEIECBQpEoECBAhEoUKBABAoUKBCBAgUKRKBAgQIRKFCgQAQKFChQoECBAgUKRKBAgQIRKFCgQAQKFCgQgQIFCkSgQIECEShQoEAEChQoEIECBQpEoECBAhEoUKBAgQgUKFAgAgUKFIhAgQIFIlCgQIEIFChQIAIFChSIQIECBSJQoECBCBQoUCACBQoUKFCgQIECBSJQoECBCBQoUCACBQoUiECBAgUiUKBAgQgUKFAgAgUKFIhAgQIFIlCgQIEIFChQoEAEChQoEIECBQpEoECBAhEoUKBABAoUKBCBAgUKRKBAgQIRKFCgQAQKFPjFAtP2eaPnAr3uAAAAAElFTkSuQmCC"
                    }),
                    caption && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figcaption", {
                        className: "text-sm font-normal text-neutral-70",
                        children: caption
                    })
                ]
            });
        case "divider":
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                className: "mt-2 mb-7 h-[2px] bg-neutral-30"
            }, id);
        case "quote":
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("blockquote", {
                className: "border-l-4 border-l-black pl-2 font-medium",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Text, {
                    text: value.rich_text?.map((child)=>child)
                })
            }, id);
        case "callout":
            {
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default().pre),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Text, {
                        text: value.rich_text?.map((child)=>child)
                    })
                });
            }
        case "file":
            const src_file = value.type === "external" ? value.external.url : value.file.url;
            const splitSourceArray = src_file.split("/");
            const lastElementInArray = splitSourceArray[splitSourceArray.length - 1];
            const caption_file = value.caption ? value.caption[0]?.plain_text : "";
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("figure", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default().file),
                        children: [
                            "\uD83D\uDCCE",
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: src_file,
                                passHref: true,
                                legacyBehavior: true,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    onClick: ()=>{
                                        if ((0,_lib_utils__WEBPACK_IMPORTED_MODULE_7__/* .isPine */ .OP)()) {
                                            // PV 트래킹
                                            _lib_native__WEBPACK_IMPORTED_MODULE_4__/* .nativeConnector.sendAppsFlyerLog */ .I.sendAppsFlyerLog("af_content_view", {
                                                af_action_type: "link",
                                                af_content_id: src_file
                                            });
                                        }
                                    },
                                    children: lastElementInArray.split("?")[0]
                                })
                            })
                        ]
                    }),
                    caption_file && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figcaption", {
                        children: caption_file
                    })
                ]
            });
        case "bookmark":
            const href = value.url;
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: href,
                target: "_brank",
                className: (_styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default().bookmark),
                children: href
            });
        case "table":
            {
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("table", {
                    className: (_styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default().table),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                        children: block.children?.map((child, i)=>{
                            const RowElement = value.has_column_header && i == 0 ? "th" : "td";
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                children: child.table_row?.cells?.map((cell, i)=>{
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(RowElement, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Text, {
                                            text: cell
                                        })
                                    }, `${cell.plain_text}-${i}`);
                                })
                            }, child.id);
                        })
                    })
                });
            }
        case "column_list":
            {
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_post_module_css__WEBPACK_IMPORTED_MODULE_6___default().row),
                    children: block.children?.map((block)=>renderBlock(block))
                });
            }
        case "column":
            {
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: block.children?.map((child)=>renderBlock(child))
                });
            }
        case "video":
            const vsrc = value.type === "external" ? value.external.url : value.file.url;
            const vcaption = value.caption ? value.caption[0]?.plain_text : "";
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mb-5 text-base font-medium min-w-full min-h-0 pb-[56.25%] relative",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                    src: vsrc,
                    title: vcaption,
                    style: {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        border: 0
                    },
                    frameBorder: "0",
                    allowFullScreen: true
                })
            });
        case "code":
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "my-5",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "font-medium text-xs text-neutral-70",
                    children: value.rich_text?.map((text)=>{
                        return text.plain_text;
                    })
                })
            });
        default:
            return;
    }
};
const classes = (classes)=>classes.join(" ").trim();

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2120:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_queryKey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4886);
/* harmony import */ var _pages_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2153);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9752);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__]);
_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const useBlockQuery = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const id = router.query.id;
    const { data  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)({
        queryKey: _constants_queryKey__WEBPACK_IMPORTED_MODULE_0__/* .queryKey.block */ .E.block(id),
        queryFn: ()=>(0,_pages_api__WEBPACK_IMPORTED_MODULE_3__.getBlocksData)(id)
    });
    return data;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useBlockQuery);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7540:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants_queryKey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4886);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9752);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2153);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__]);
_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const usePostQuery = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const id = router.query.id;
    const { data  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)({
        queryKey: _constants_queryKey__WEBPACK_IMPORTED_MODULE_0__/* .queryKey.post */ .E.post(id),
        queryFn: ()=>(0,_pages_api__WEBPACK_IMPORTED_MODULE_3__.getPagesData)(id)
    });
    return data;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usePostQuery);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5493:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "I": () => (/* binding */ nativeConnector)
});

;// CONCATENATED MODULE: ./lib/native/api.js
const NativeConnector = ()=>{
    function getAccessToken(callback) {
        if (/Android/i.test(window.navigator.userAgent)) {
            window.AosConnector.getAccessToken("callbackAccessToken");
        } else if (/iPhone|iPad|iPod/i.test(window.navigator.userAgent)) {
            window.webkit.messageHandlers.getAccessToken.postMessage("callbackAccessToken"); //ios
        }
        window.callbackAccessToken = (ret)=>{
            callback(ret);
        };
    }
    // 계좌개설 랜딩 전 url 요청
    function setUrlAfterAccOpen() {
        let url = document.location.href;
        if (/Android/i.test(window.navigator.userAgent)) {
            window.AosConnector.setUrlAfterAccountOpening(`${url}`);
        }
        if (/iPhone|iPad|iPod/i.test(window.navigator.userAgent)) {
            window.webkit.messageHandlers.setUrlAfterAccountOpening.postMessage(`${url}`); //ios
        }
    }
    function setTitleBar(titleBar) {
        if (/Android/i.test(window.navigator.userAgent)) {
            window.AosConnector.setTitleBar(titleBar);
        } else if (/iPhone|iPad|iPod/i.test(window.navigator.userAgent)) {
            window.webkit.messageHandlers.setTitleBar.postMessage(titleBar); //ios
        }
    }
    function setTitleBarWithColor(title, bgColor) {
        let param = JSON.stringify({
            title: title,
            bgColor: bgColor
        });
        if (/Android/i.test(window.navigator.userAgent)) {
            window.AosConnector.setTitleBarWithColor(param);
        } else if (/iPhone|iPad|iPod/i.test(window.navigator.userAgent)) {
            window.webkit.messageHandlers.setTitleBarWithColor.postMessage(param); //ios
        }
    }
    // 앱내 타이틀바 설정 제거
    function hideTitleBar() {
        if (/Android/i.test(window.navigator.userAgent)) {
            window.AosConnector.hideTitleBar();
        }
        if (/iPhone|iPad|iPod/i.test(window.navigator.userAgent)) {
            window.webkit.messageHandlers.hideTitleBar.postMessage(""); //ios
        }
    }
    // response 공통 에러 처리
    function onResponseError(_param) {
        let param = JSON.stringify(_param);
        if (/Android/i.test(window.navigator.userAgent)) {
            window.AosConnector.onResponseError(param);
        }
        if (/iPhone|iPad|iPod/i.test(window.navigator.userAgent)) {
            window.webkit.messageHandlers.onResponseError.postMessage(param); //ios
        }
    }
    function sendAppsFlyerLog(eventName, eventParams) {
        if (/Android/i.test(window.navigator.userAgent)) {
            window.AosConnector.sendAppsFlyerLog(eventName, eventParams);
        }
        if (/iPhone|iPad|iPod/i.test(window.navigator.userAgent)) {
            window.webkit.messageHandlers.sendAppsFlyerLog.postMessage(eventName + "+" + eventParams); //ios
        }
    }
    function requestExitMenu() {
        if (/Android/i.test(window.navigator.userAgent)) {
            window.AosConnector.requestExitMenu();
        } else if (/iPhone|iPad|iPod/i.test(window.navigator.userAgent)) {
            window.webkit.messageHandlers.requestExitMenu.postMessage(""); //ios
        }
    }
    function useGoback(callback) {
        if (/Android/i.test(window.navigator.userAgent)) {
            window.AosConnector.useGoBack(callback);
        } else if (/iPhone|iPad|iPod/i.test(window.navigator.userAgent)) {
            window.webkit.messageHandlers.useGoBack.postMessage(callback); //ios
        }
    }
    function shareContents(url) {
        if (/Android/i.test(window.navigator.userAgent)) {
            window.AosConnector.shareContents(url);
        } else if (/iPhone|iPad|iPod/i.test(window.navigator.userAgent)) {
            window.webkit.messageHandlers.shareContents.postMessage(url); //ios
        }
    }
    function showInvestmentCheck(prdId) {
        if (/Android/i.test(window.navigator.userAgent)) {
            window.AosConnector.showInvestmentCheck(prdId);
        } else if (/iPhone|iPad|iPod/i.test(window.navigator.userAgent)) {
            window.webkit.messageHandlers.showInvestmentCheck.postMessage(prdId); //ios
        }
    }
    return {
        getAccessToken: getAccessToken,
        setUrlAfterAccOpen: setUrlAfterAccOpen,
        setTitleBar: setTitleBar,
        setTitleBarWithColor: setTitleBarWithColor,
        onResponseError: onResponseError,
        sendAppsFlyerLog: sendAppsFlyerLog,
        requestExitMenu: requestExitMenu,
        useGoback: useGoback,
        shareContents: shareContents,
        hideTitleBar: hideTitleBar,
        showInvestmentCheck: showInvestmentCheck
    };
};
/* harmony default export */ const api = (NativeConnector);

;// CONCATENATED MODULE: ./lib/native/index.js

const nativeConnector = api();


/***/ }),

/***/ 4675:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_usePostQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7540);
/* harmony import */ var _hooks_useBlockQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2120);
/* harmony import */ var _components_MetaConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(455);
/* harmony import */ var _site_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2899);
/* harmony import */ var _site_config__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_site_config__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_PageDetail__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6252);
/* harmony import */ var _components_OnelinkButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3427);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(825);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_native__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5493);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1407);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_hooks_usePostQuery__WEBPACK_IMPORTED_MODULE_3__, _hooks_useBlockQuery__WEBPACK_IMPORTED_MODULE_4__, _components_PageDetail__WEBPACK_IMPORTED_MODULE_7__]);
([_hooks_usePostQuery__WEBPACK_IMPORTED_MODULE_3__, _hooks_useBlockQuery__WEBPACK_IMPORTED_MODULE_4__, _components_PageDetail__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const getServerSideProps = async (context)=>{
    const id = context.query.id;
    return {
        props: {
            title: {
                text: "",
                props: {
                    share: "y"
                }
            },
            pid: id
        }
    };
};
const Post = ({ pid  })=>{
    const post = (0,_hooks_usePostQuery__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const blocks = (0,_hooks_useBlockQuery__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const tags = post?.properties?.Tags.multi_select.map((item)=>{
        return {
            id: item.id,
            name: item.name
        };
    });
    const image = _site_config__WEBPACK_IMPORTED_MODULE_6__.CONFIG.ogImageGenerateURL ?? `${_site_config__WEBPACK_IMPORTED_MODULE_6__.CONFIG.ogImageGenerateURL}/${encodeURIComponent("")}.png`;
    const meta = {
        title: post?.properties.Name.title[0].plain_text || "",
        image: post?.properties.thumbnail.files?.[0]?.file?.url || post?.properties.thumbnail.files?.[0]?.name || image,
        description: post?.properties.description.rich_text[0]?.plain_text || _site_config__WEBPACK_IMPORTED_MODULE_6__.CONFIG.blog.description,
        type: "website",
        url: `${_site_config__WEBPACK_IMPORTED_MODULE_6__.CONFIG.link}/${post?.properties.slug.rich_text[0].plain_text}?id=${pid}`
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MetaConfig__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                ...meta
            }),
            post && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "p-container px-container",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "py-2",
                            children: post?.properties.Name.title[0].plain_text
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-neutral-60 my-2 text-sm font-normal",
                            children: dayjs__WEBPACK_IMPORTED_MODULE_9___default()(post?.last_edited_time || post?.created_time).format("YYYY-MM-DD")
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                            children: blocks && blocks?.results?.map((block)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                                    children: (0,_components_PageDetail__WEBPACK_IMPORTED_MODULE_7__/* .renderBlock */ ._2)(block)
                                }, block.id))
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                            className: "pb-32",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "flex gap-2 mb-8 flex-wrap",
                                    children: tags && tags?.map((tag, idx)=>(0,_lib_utils__WEBPACK_IMPORTED_MODULE_12__/* .isPine */ .OP)() && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "font-medium text-neutral-60 border-solid border border-neutral-20 rounded-2xl py-1 px-3 active:bg-neutral-100 active:text-neutral-10",
                                            onClick: ()=>{
                                                router.push(`/feed?id=${tag.name}&property=Tags&title=${tag.name}`);
                                                // PV 트래킹
                                                _lib_native__WEBPACK_IMPORTED_MODULE_10__/* .nativeConnector.sendAppsFlyerLog */ .I.sendAppsFlyerLog("af_content_view", {
                                                    af_action_type: "tag",
                                                    af_content_id: `${tag.name}`
                                                });
                                            },
                                            children: tag.name
                                        }, idx))
                                }),
                                post.properties.button_link.rich_text.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_OnelinkButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                    onClick: ()=>{
                                        if ((0,_lib_utils__WEBPACK_IMPORTED_MODULE_12__/* .isPine */ .OP)()) {
                                            // PV 트래킹
                                            _lib_native__WEBPACK_IMPORTED_MODULE_10__/* .nativeConnector.sendAppsFlyerLog */ .I.sendAppsFlyerLog("af_content_view", {
                                                af_action_type: "button",
                                                af_content_id: post.properties.button_link.rich_text[0].plain_text
                                            });
                                            window.location.href = post.properties.button_link.rich_text[0].plain_text;
                                        } else {
                                            window.location.href = _constants__WEBPACK_IMPORTED_MODULE_11__/* .WEB_LINK */ .YG;
                                        }
                                    },
                                    text: post.properties.button_name.rich_text[0]?.plain_text
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1635:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4115:
/***/ ((module) => {

"use strict";
module.exports = import("@emotion/styled");;

/***/ }),

/***/ 9752:
/***/ ((module) => {

"use strict";
module.exports = import("@tanstack/react-query");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [311,675,952,664,455,148,153], () => (__webpack_exec__(4675)));
module.exports = __webpack_exports__;

})();