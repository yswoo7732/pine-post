function getLike() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        if (/PINE/i.test(navigator.userAgent)) {
            // document.querySelector(".footer").style.paddingBottom = "calc(constant(safe-area-inset-bottom) + 34px)";
            // document.querySelector(".footer").style.paddingBottom = "calc(env(safe-area-inset-bottom) + 34px)";
            
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

    if (/PINE/i.test(navigator.userAgent)) {
        if (/Android/i.test(navigator.userAgent)) {
            window.AosConnector.shareContents(`${contentsUrl}`); // Aos
        }
        if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            webkit.messageHandlers.shareContents.postMessage(`${contentsUrl}`); //ios
        }
    }
}

// 컨텐츠 로딩시, 이전 좋아요 클릭 체크
function isLike(yn) {
    console.log("isLike");

    let imgHeart = document.querySelector("#imgHeart");
    imgHeart.classList.toggle("heart_active");

    if (yn == "N") {
        imgHeart.classList.remove("heart_active");
    } else {
        imgHeart.classList.add("heart_active");
    }
}

// 좋아요 클릭시
function clickLike() {
    let imgHeart = document.querySelector("#imgHeart");
    let likeYN = "N";

    imgHeart.classList.toggle("heart_active");

    if (imgHeart.classList.contains("heart_active")) {
        likeYN = "Y";
    } else {
        likeYN = "N";
    }

    window.AosConnector.clickedLike(`${likeYN}`);
    webkit.messageHandlers.clickedLike.postMessage(`${likeYN}`);
}
