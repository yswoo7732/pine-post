// 공유하기 클릭
function sharedContents() {
    console.log(window.location.href);

    if (/Android/i.test(navigator.userAgent)) {
        if (/PINE/i.test(navigator.userAgent)) {
            let contentsUrl = window.location.href;
            window.AosConnector.shareContents(`${contentsUrl}`);
        }
    }
}

// 컨텐츠 로딩시, 이전 좋아요 클릭 체크
function isLike(yn) {
    console.log("isLike");

    let imgHeart = document.querySelector("#imgHeart");
    let whiteHeartClickEvent = document.querySelector("#imgWhiteHeart");

    document.querySelector("#imgHeart").classList.toggle("heart_active");
    document.querySelector("#imgWhiteHeart").classList.toggle("heart_white_active");

    if (yn == "N") {
        imgHeart.classList.remove("heart_active");
        whiteHeartClickEvent.classList.remove("heart_white_active");
    } else {
        imgHeart.classList.add("heart_active");
        whiteHeartClickEvent.classList.add("heart_white_active");
    }
}

// 좋아요 클릭시
function clickLike() {
    let imgHeart = document.querySelector("#imgHeart");
    let whiteHeart = document.querySelector("#imgWhiteHeart");
    let likeYN = "N";

    document.querySelector("#imgHeart").classList.toggle("heart_active");
    document.querySelector("#imgWhiteHeart").classList.toggle("heart_white_active");

    if (imgHeart.classList.contains("heart_active")) {
        likeYN = "Y";
    } else if(whiteHeart.classList.contains("heart_white_active")) {
        likeYN = "Y";
    } else {
        likeYN = "N";
    }

    window.AosConnector.clickedLike(`${likeYN}`);
    console.log(likeYN);
}