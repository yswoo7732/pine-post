"use strict";
exports.id = 148;
exports.ids = [148];
exports.modules = {

/***/ 1407:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bk": () => (/* binding */ APP_LINK_WEB),
/* harmony export */   "YG": () => (/* binding */ WEB_LINK)
/* harmony export */ });
/* unused harmony export APP_LINK */
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(825);

const APP_LINK = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_0__/* .isPine */ .OP)() ? "hamcpine://share?&what" : "";
const APP_LINK_WEB = (0,_lib_utils__WEBPACK_IMPORTED_MODULE_0__/* .isPine */ .OP)() ? `hamcpine://share?&what=web&value=${document.location.origin}` : "";
const WEB_LINK = "https://pine.onelink.me/vnSX/zp4sz8vu"; // 공유된 컨텐츠 하단에 들어갈 원링크


/***/ }),

/***/ 4886:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ queryKey)
/* harmony export */ });
const queryKey = {
    scheme: ()=>[
            "scheme"
        ],
    posts: ()=>[
            "posts"
        ],
    recommend: ()=>[
            "recommend"
        ],
    tags: ()=>[
            "tags"
        ],
    categories: ()=>[
            "categories"
        ],
    filter: (slug)=>[
            "filter",
            slug
        ],
    post: (slug)=>[
            "post",
            slug
        ],
    block: (slug)=>[
            "block",
            slug
        ]
};


/***/ }),

/***/ 825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OP": () => (/* binding */ isPine)
/* harmony export */ });
/* unused harmony exports valueTotalRatio, getLinearGradientCSS, numberToKorean, compoundInterest, inputPriceFormat, inputPriceFormatToNum, removeDecimalPlace, isMobile, validateEmail, keyBy */
function valueTotalRatio(value, min, max) {
    return ((value - min) / (max - min)).toFixed(2);
}
function getLinearGradientCSS(ratio, leftColor, rightColor) {
    return [
        "-webkit-gradient(",
        "linear, ",
        "left top, ",
        "right top, ",
        "color-stop(" + ratio + ", " + leftColor + "), ",
        "color-stop(" + ratio + ", " + rightColor + ")",
        ")", 
    ].join("");
}
function numberToKorean(number) {
    if (number === 0) {
        return "0";
    }
    var inputNumber = number < 0 ? false : number;
    var unitWords = [
        "",
        "\uB9CC",
        "\uC5B5",
        "\uC870",
        "\uACBD"
    ];
    var splitUnit = 10000;
    var splitCount = unitWords.length;
    var resultArray = [];
    var resultString = "";
    for(let i = 0; i < splitCount; i++){
        var unitResult = inputNumber % Math.pow(splitUnit, i + 1) / Math.pow(splitUnit, i);
        unitResult = Math.floor(unitResult);
        if (unitResult > 0) {
            resultArray[i] = unitResult;
        }
    }
    for(let i1 = 0; i1 < resultArray.length; i1++){
        if (!resultArray[i1]) continue;
        resultString = resultArray[i1].toLocaleString(window.navigator.language, {
            minimumFractionDigits: 0
        }) + unitWords[i1] + " " + resultString;
    }
    return resultString.trim();
}
function compoundInterest(amount, r, n) {
    //적립식 복리계산 원금, 이자율, 년
    let sum = 0;
    for(let i = 0; i < n; i++){
        sum += amount * Math.pow(1 + r / 100, i);
    }
    return Math.round(sum);
}
// 가격 셋째자리 콤마 표시
function inputPriceFormat(str) {
    return str.toLocaleString("ko-KR");
}
// 가격 콤마표시 제거 후 정수 반환
function inputPriceFormatToNum(str) {
    return str ? parseInt(str.replace(/\$\s?|(,*)/g, "")) : 0;
}
// 소수점 셋째자리수 버림
function removeDecimalPlace(num) {
    return num ? Math.floor(num * 1000) / 1000 : num;
}
// 모바일 체크
function isMobile() {
    if (window.navigator.userAgent.match(/Android|Mobile|iP(hone|od|ad)|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/)) {
        return true;
    }
    return false;
}
// PINE 앱 체크
function isPine() {
    if (false) {}
    return false;
}
// 이메일 유효성체크
function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}
// 객체에 각 요소가 'id' 값을 키로 하고 해당 요소 객체를 값으로 가지는 형태
function keyBy(arr, key) {
    const result = {};
    for (const item of arr){
        result[item[key]] = item;
    }
    return result;
}


/***/ })

};
;