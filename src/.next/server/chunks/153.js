"use strict";
exports.id = 153;
exports.ids = [153];
exports.modules = {

/***/ 2153:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBlocksData": () => (/* binding */ getBlocksData),
/* harmony export */   "getCategory": () => (/* binding */ getCategory),
/* harmony export */   "getPagesData": () => (/* binding */ getPagesData)
/* harmony export */ });
const getPagesData = async (id)=>{
    try {
        const response = await fetch(`/api/getPagesData?id=${id}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error in getPagesData:", error);
    }
};
const getBlocksData = async (id)=>{
    try {
        const response = await fetch(`/api/getBlocksData?id=${id}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error in getBlocksData:", error);
    }
};
const getCategory = async ()=>{
    console.log("getCategory index");
    try {
        const response = await fetch(`/api/getCategoryData`);
        console.log(response);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error in getCategory:", error);
    }
};


/***/ })

};
;