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
    } else {
        console.log("not pineApp");

        const basicFoot = document.getElementsByClassName("basic_foot");
        if (basicFoot.length > 0) {
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
    } else {
        urlCopy();
    }
}

// 컨텐츠 로딩시, 이전 좋아요 클릭 체크
function isLike(yn) {
    console.log("isLike");

    let imgHeart = document.querySelectorAll(".img_heart");

    if (yn == "N") {
        imgHeart.forEach(function (el) {
            el.classList.remove("heart_active");
        });
    } else {
        imgHeart.forEach(function (el) {
            el.classList.add("heart_active");
        });
    }
}

// 좋아요 클릭시
function clickLike() {
    let imgHeart = document.querySelectorAll(".img_heart");

    if (pineAppChk()) {
        let likeYN = "N";

        imgHeart.forEach(function (el) {
            el.classList.toggle("heart_active");

            if (el.classList.contains("heart_active")) {
                likeYN = "Y";
            } else {
                likeYN = "N";
            }
        });

        if (/Android/i.test(navigator.userAgent)) {
            window.AosConnector.clickedLike(`${likeYN}`);
        }

        if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            webkit.messageHandlers.clickedLike.postMessage(`${likeYN}`);
        }

        console.log(likeYN);
    } else {
        //앱이 아닐 경우 노출되는 PINE 로고 클릭
        console.log("웹, 파인앱 (설치로) 보내기");
        if (isMobile()) {
            if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
                location.href = "https://apps.apple.com/app/id1559691452";
            } else {
                location.href = "https://play.google.com/store/apps/details?id=com.hamc.android.pine";
            }
        } else {
            if (navigator.appVersion.indexOf("Mac") != -1) {
                location.href = "https://apps.apple.com/app/id1559691452";
            } else {
                location.href = "https://play.google.com/store/apps/details?id=com.hamc.android.pine";
            }
        }
    }
}

function appLinkFunc(str, num = "") {
    if (str == "web") {
        var pine_url = "hamcpine://share?&what=" + str + "&value=" + location.origin + "/" + num;
    } else {
        var pine_url = "hamcpine://share?&what=" + str + "&value=" + num;
    }

    var ios_appstore_url = "https://apps.apple.com/app/id1559691452";
    var android_store_url = "https://play.google.com/store/apps/details?id=com.hamc.android.pine";

    var result_mo_chk = mo_chk();

    if(result_mo_chk!="pc"){
		if(result_mo_chk == "ios"){

			setTimeout( function() {
				window.open(ios_appstore_url);
			}, 1500);

			location.href = pine_url;
		} else {
            // setTimeout( function() {
			// 	window.open(android_store_url);
            // }, 1500);
            
			location.href = pine_url;
		}
	} else {
        if (navigator.appVersion.indexOf("Mac") != -1) {
            window.open(ios_appstore_url);
        } else {
            window.open(android_store_url);
        }
    }
}

function isMobile() {
    if (
        navigator.userAgent.match(
            /Android|Mobile|iP(hone|od|ad)|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/
        )
    ) {
        return true;
    }
    return false;
}

function urlCopy() {
    const t = document.createElement("input");
    document.body.appendChild(t);
    t.value = window.location.href;
    t.select();
    document.execCommand("copy");
    document.body.removeChild(t);
    // var urlbox = document.getElementById("shareUrl");
    // urlbox.value = window.location.href;
    // urlbox.select();
    // therange = urlbox.createTextRange();
    // therange.execCommand("Copy");
    alert("URL이 복사 되었습니다.");
}

function mo_chk(){

	var os;

	if (isMobile()) {
		var userAgent = navigator.userAgent.toLowerCase();
		if (userAgent.search("android") > -1){
			return os = "android";
		}else if ((userAgent.search("iphone") > -1) || (userAgent.search("ipod") > -1) || (userAgent.search("ipad") > -1)){
			return os = "ios";
		}else{
			return os = "other";
		}

	} else {
		return os = "pc";
	}
}