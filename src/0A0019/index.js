// window.onload = function () {
let windowHeight = 0;

window.addEventListener('DOMContentLoaded', function(){

    // 로드시, 좋아요 여부 호출
    getLike();
    window.addEventListener("resize", resizeFunc);
    resizeFunc();
    const body_frame = document.getElementById("body_frame");
    const basicFoot = document.getElementsByClassName("basic_foot")[0];
    const basicLinkFoot = document.getElementsByClassName("basic_link_foot")[0];
    const boxShadows = document.getElementsByClassName("box-shadow");
    const coverFull = document.getElementById("cover_full");
    const link_title = document.getElementById("link_title");
    const linkCoverFull = document.getElementById("link_cover_full");
    const linkImg = document.getElementById("link_img");
    const body = document.body;
    const halfBody = windowHeight / 2;
    const heartDiv = document.getElementById("heartDiv");
    const shareDiv = document.getElementById("shareDiv");
    const imgHeart = document.getElementById("imgHeart");
    const shareImg = document.getElementById("shareImg");
    const whiteHeartDiv = document.getElementById("whiteHeartDiv");
    const whiteShareDiv = document.getElementById("whiteShareDiv");
    const imgWhiteHeart = document.getElementById("imgWhiteHeart");
    const whiteShareImg = document.getElementById("whiteShareImg");
    const progressBar = document.getElementsByClassName("progress-bar")[0]; 

    // let upToWrapBodyScroll = body.scrollHeight - linkCoverFull.scrollHeight + basicFoot.scrollHeight;
    let isUp = true;
    let currentScrollTop = 0;
    let prevScrollTop = 0;
    let prevCoverSize = 0;
    
    document.addEventListener("scroll", function (event) {
        currentScrollTop = document.documentElement.scrollTop;
        if (currentScrollTop < 0) return;
        event.preventDefault();

        // 스크롤 방향 감지
        isUp = currentScrollTop-prevScrollTop >= 0 ? true : false;
        prevScrollTop = currentScrollTop;
        // console.log("isUp: ", isUp);

        // scroll에 따른 main cover image height
        if (body_frame.offsetTop >= currentScrollTop ) {
            // setTimeout(() => {
                prevCoverSize = windowHeight - currentScrollTop;
                coverFull.style.height = prevCoverSize + "px";
            // }, 3);
        }

        //length 가 1개 이상이면 실행
        if(boxShadows.length > 1){
            var chkTmp = new Array();

            Array.from(boxShadows).forEach(function (element, index, array) {
                if (element.getBoundingClientRect().top > basicFoot.scrollHeight && element.getBoundingClientRect().top < window.innerHeight) {
                    chkTmp.push(element);
                }
            });

            if (chkTmp.length >= 1) {
                for (var i = 0; i < chkTmp.length; i++) {
                    chkTmp[i].style.transitionDelay = i + "s";
                }

                for (var i = 0; i < chkTmp.length; i++) {
                    if (chkTmp[i].offsetTop + halfBody < document.documentElement.scrollTop) {
                        chkTmp[i].classList.add("box-shadow-active");
                    }
                }
                chkTmp = [];
            }
        }

        //프로그래스 바
        progressBar.style.width = Math.ceil((currentScrollTop / (body.scrollHeight - windowHeight)) * 100) + "%";


        // 하단 이미지 시작점과 끝점(2px는 progress-bar)
        var openLinkImgPos = linkCoverFull.offsetTop - window.scrollY + (basicFoot.scrollHeight - 2);
        var closeLinkImgPos = linkCoverFull.offsetTop - window.scrollY;

        // 하단 이미지 시작시 이미지 scale 변화
        if (windowHeight - openLinkImgPos >= 0 && windowHeight - openLinkImgPos <= windowHeight) {
            var linkImgScale = 1 + (windowHeight - openLinkImgPos) / (windowHeight * 3);
            // console.log(linkImgScale)
            // console.log("openLinkImgPos", (windowHeight - openLinkImgPos) / (windowHeight * 10));
            linkImg.style.transform = `scale(${linkImgScale})`;
        }

        // 하단이미지 시작시, 좋아요/공유버튼 opacity 및 footer change
        var basicFootOpacity = 1 - (windowHeight - openLinkImgPos) / windowHeight;
        // console.log(basicFootOpacity)

        if (windowHeight - openLinkImgPos >= 0 && windowHeight - openLinkImgPos <= halfBody) {
            basicLinkFoot.style.display = "none";
            basicFoot.style.display = "flex";
            basicFoot.classList.add("sticky");
            basicFoot.style.opacity = basicFootOpacity;
            heartDiv.style.opacity = basicFootOpacity;
            imgHeart.style.opacity = basicFootOpacity;
            shareDiv.style.opacity = basicFootOpacity;
            shareImg.style.opacity = basicFootOpacity;
        } else if (windowHeight - openLinkImgPos > halfBody && linkCoverFull.offsetTop - window.scrollY >= 0) {
            var basicLinkFootOpacity = (windowHeight - closeLinkImgPos) / windowHeight;

            basicFoot.style.display = "none";
            basicLinkFoot.classList.add("sticky");
            basicLinkFoot.style.display = "flex";
            basicLinkFoot.style.backgroundColor = "rgba(255, 255, 255, " + basicFootOpacity + ")";
            whiteHeartDiv.style.opacity = basicLinkFootOpacity;
            imgWhiteHeart.style.opacity = basicLinkFootOpacity;
            whiteShareDiv.style.opacity = basicLinkFootOpacity;
            whiteShareImg.style.opacity = basicLinkFootOpacity;
        } else {
            basicFoot.style.opacity = 1;
            heartDiv.style.opacity = 1;
            imgHeart.style.opacity = 1;
            shareDiv.style.opacity = 1;
            shareImg.style.opacity = 1;
            basicFoot.classList.add("sticky");
        }

        // 좋아요 공유버튼 이벤트 sticky
        if (currentScrollTop <= basicFoot.scrollHeight) {
            basicFoot.classList.remove("sticky");
        } else if (currentScrollTop < window.screen.height) {
            basicFoot.classList.add("sticky");
        } else {
            basicFoot.classList.add("sticky");
        }

        var speed = checkScrollSpeed();

        if (isUp && speed < 20) {
            if (windowHeight - openLinkImgPos > 100) {
                // stopper = true;
                // scrollTo(document.documentElement, body.scrollHeight * 0.8, 240, speed);
            }
        } else if (!isUp && speed < 20) {
            if (windowHeight - openLinkImgPos >= halfBody - 100 && 0 < openLinkImgPos) {
                // stopper = false;
                tweenScrollTo(linkCoverFull.offsetTop + 10);
            }
        }
    });

    // 링크 터치 이벤트
    link_title.addEventListener("touchstart", function (event) {
        this.classList.add("stroke_link-active");
    });

    link_title.addEventListener("touchend", function (event) {
        this.classList.remove("stroke_link-active");
    });

});



function resizeFunc(){
    windowHeight = window.innerHeight;
}

function tweenScrollTo(domScroll) {
    // stopper = false;
    // let domScroll = linkCoverFull.offsetTop + 10;

    TweenMax.to(window, 1, {
        scrollTo: {
            y: domScroll,
            autoKill: true,
        },
        ease: "Power4.easeInOut",
        autoKill: true
    });
}

let checkScrollSpeed = (function (settings) {
    settings = settings || {};

    let lastPos,
        newPos,
        timer,
        delta,
        delay = settings.delay || 50; // in "ms" (higher means lower fidelity )

    function clear() {
        lastPos = null;
        delta = 0;
    }

    clear();

    return function () {
        newPos = window.scrollY;
        if (lastPos != null) {
            // && newPos < maxScroll
            delta = newPos - lastPos;
        }
        lastPos = newPos;
        clearTimeout(timer);
        timer = setTimeout(clear, delay);
        delta = Math.abs(delta);
        return delta < 10 ? 10 : delta;
    };
})();