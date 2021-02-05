function getLike() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        if (/PINE/i.test(navigator.userAgent)) {
            // 좋아요 클릭 유무 체크위해 호출
            if (/Android/i.test(navigator.userAgent)) {
                window.AosConnector.isLike();
            }

            if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                webkit.messageHandlers.isLike.postMessage();
            }
        }
    } else {
        console.log("not mobile");
    }
}

// 공유하기 클릭
function sharedContents() {
    console.log("shared");
    let contentsUrl = window.location.href;

    if (/Android/i.test(navigator.userAgent)) {
        window.AosConnector.shareContents(`${contentsUrl}`); // Aos
    }
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        webkit.messageHandlers.shareContents.postMessage(`${contentsUrl}`); //ios
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
    } else if (whiteHeart.classList.contains("heart_white_active")) {
        likeYN = "Y";
    } else {
        likeYN = "N";
    }

    window.AosConnector.clickedLike(`${likeYN}`);
    webkit.messageHandlers.clickedLike.postMessage(`${likeYN}`);
    console.log(likeYN);
}
