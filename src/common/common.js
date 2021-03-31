//pine app 체크. 테스트 필요
function pineAppChk() {
    if (navigator.userAgent.match(/PINE|pine/)) {
        return true;
    }
    return false; //여기만 true로 바꿔서 테스트
}

function getLike() {
    // if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    if (pineAppChk()) {
        // 좋아요 클릭 유무 체크위해 호출
        if (/Android/i.test(navigator.userAgent)) {
            window.AosConnector.isLike();
        }

        if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            webkit.messageHandlers.isLike.postMessage();
        }
    }else {
        console.log("not pineApp");

        const basicFoot = document.getElementsByClassName("basic_foot");
        if(basicFoot.length > 0){
            basicFoot[0].classList.remove("pineApp");
        }
    }
}

// 공유하기 클릭
function sharedContents() {
    console.log("shared");
    let contentsUrl = window.location.href;
    if (pineAppChk()) {
        if (/Android/i.test(navigator.userAgent)) {
            window.AosConnector.shareContents(`${contentsUrl}`); // Aos
        }
        if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            webkit.messageHandlers.shareContents.postMessage(`${contentsUrl}`); //ios
        }
    }else {
        console.log("어떻게 SNS 공유? 그냥 주소 복사?")
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
    // let whiteHeart = document.querySelector("#imgWhiteHeart");
    
    document.querySelector("#imgHeart").classList.toggle("heart_active");
    // document.querySelector("#imgWhiteHeart").classList.toggle("heart_white_active");

    if (pineAppChk()) {
        let likeYN = "N";
        if (imgHeart.classList.contains("heart_active")) {
            likeYN = "Y";
        } else {
            likeYN = "N";
        }

        if (/Android/i.test(navigator.userAgent)) {
            window.AosConnector.clickedLike(`${likeYN}`);
        }

        if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            webkit.messageHandlers.clickedLike.postMessage(`${likeYN}`);
        }

        console.log(likeYN);
    }else {
        //앱이 아닐 경우 노출되는 PINE 로고 클릭
        console.log("웹, 파인앱 (설치로) 보내기");
    }
}

function appLinkFunc(str, num){
    console.log(str, num)
    // if (pineAppChk()) {
    //     if (/Android/i.test(navigator.userAgent)) {
    //         window.AosConnector.appLink(str, num);
    //     }
    //     if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    //         webkit.messageHandlers.appLink.postMessage(str, num);
    //     }
    // }else {
        // window.location = "hamcpine://share?&what="+str+"&value="+num;
    // }
    if(pineAppChk() || isMobile()){
        window.location = "hamcpine://share?&what="+str+"&value="+num;
    }else {
        //pc일 경우
        console.log("웹, 파인앱 (설치로) 보내기");
    }
}


function isMobile() {
    if (navigator.userAgent.match(/Android|Mobile|iP(hone|od|ad)|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/)) {
        return true;
    }
    return false;
}