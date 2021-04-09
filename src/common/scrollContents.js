let windowHeight = 0;

window.addEventListener('DOMContentLoaded', function () {

    window.addEventListener("resize", resizeFunc);
    resizeFunc();

    const body = document.body;
    const body_frame = document.getElementById("body_frame");

    //SNS 버튼
    const basicFoot = document.getElementsByClassName("basic_foot")[0];
    const progressBar = basicFoot.getElementsByClassName("progress-bar")[0];

    //로드시, 좋아요 여부 호출
    getLike();

    const boxShadows = document.getElementsByClassName("box-shadow");
    const coverFull = document.getElementById("cover_full");
    const link_title = document.getElementById("link_title");
    const linkCoverFull = document.getElementById("link_cover_full");
    const linkImg = document.getElementById("link_img");
    const halfBody = windowHeight / 2;

    let isUp = true;
    let currentScrollTop = 0;
    let prevScrollTop = 0;
    let prevCoverSize = 0;

    document.addEventListener("scroll", function (event) {
        currentScrollTop = document.documentElement.scrollTop;
        if (currentScrollTop < 0) return;
        event.preventDefault();

        // 스크롤 방향 감지
        isUp = currentScrollTop - prevScrollTop >= 0 ? false : true;
        prevScrollTop = currentScrollTop;
        //console.log("isUp: ", isUp);

        // scroll에 따른 main cover image height
        if (body_frame.offsetTop >= currentScrollTop) {
            // setTimeout(() => {
            coverFull.style.willChange = 'transform';

            prevCoverSize = windowHeight - currentScrollTop;
            coverFull.style.height = prevCoverSize + "px";
            // }, 3);
        } else {
            coverFull.style.willChange = 'auto';
        }

        //length 가 1개 이상이면 실행
        if (boxShadows.length > 1) {
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

        // 하단 이미지 시작점과 끝점(2px는 progress-bar)
        var openLinkImgPos = linkCoverFull.offsetTop - currentScrollTop + (basicFoot.scrollHeight - 2);
        var closeLinkImgPos = linkCoverFull.offsetTop - currentScrollTop;

        // 하단 이미지 시작시 이미지 scale 변화
        if (windowHeight - openLinkImgPos >= 0 && windowHeight - openLinkImgPos <= windowHeight) {
            var linkImgScale = 1 + (windowHeight - openLinkImgPos) / (windowHeight * 3);
            linkImg.style.transform = `scale(${linkImgScale})`;
        }

        //프로그래스 바
        progressBar.style.width = Math.ceil((currentScrollTop / (body.scrollHeight - windowHeight)) * 100) + "%";

        if (currentScrollTop > basicFoot.offsetHeight) {
            var basicFootOpacity = closeLinkImgPos / windowHeight * 1 - .1; //opacity 1~0
            basicFoot.classList.add("sticky");
            basicFoot.classList.remove("darkMode");

            if (basicFootOpacity < 1) {
                progressBar.style.opacity = basicFootOpacity;
                basicFoot.style.backgroundColor = "rgba(255, 255, 255, " + basicFootOpacity + ")";

                if (basicFootOpacity < .4) {
                    basicFoot.classList.add("darkMode");
                }
            }
        } else {
            basicFoot.classList.remove("sticky");
            basicFoot.classList.remove("darkMode");
            progressBar.style.opacity = 1;
        }

        var speed = checkScrollSpeed();

        if (currentScrollTop > (linkCoverFull.offsetTop - windowHeight) + halfBody) {
            if (!isUp && speed < 20) {
                tweenScrollTo();
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

    function tweenScrollTo() {
        stopper = false;
        let domScroll = linkCoverFull.offsetTop;

        TweenMax.to(window, 1, {
            scrollTo: {
                y: domScroll,
                autoKill: true,
            },
            ease: "Power2.easeOut",
            autoKill: true,
        });
    }

});


function resizeFunc() {
    windowHeight = window.innerHeight;
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