const basicFoot = document.getElementsByClassName("basic_foot")[0];
const basicLinkFoot = document.getElementsByClassName("basic_link_foot")[0];
const boxShadows = document.getElementsByClassName("box-shadow");
const coverFull = document.getElementById("cover_full");
const link_title = document.getElementById("link_title");
const linkCoverFull = document.getElementById("link_cover_full");
const linkImg = document.getElementById("link_img");
const halfBody = window.innerHeight / 2;
const heartDiv = document.getElementById("heartDiv");
const shareDiv = document.getElementById("shareDiv");
const imgHeart = document.getElementById("imgHeart");
const shareImg = document.getElementById("shareImg");
const whiteHeartDiv = document.getElementById("whiteHeartDiv");
const whiteShareDiv = document.getElementById("whiteShareDiv");
const imgWhiteHeart = document.getElementById("imgWhiteHeart");
const whiteShareImg = document.getElementById("whiteShareImg");

window.onload = function () {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        if (/iPhone/i.test(navigator.userAgent)) {
            document.querySelector(".basic_foot").style.paddingBottom = "calc(constant(safe-area-inset-bottom) + 20px)";
            document.querySelector(".basic_foot").style.paddingBottom = "calc(env(safe-area-inset-bottom) + 20px)";
            document.querySelector(".sticky").style.paddingBottom = "calc(constant(safe-area-inset-bottom) + 20px)";
            document.querySelector(".sticky").style.paddingBottom = "calc(env(safe-area-inset-bottom) + 20px)";
        }
    } else {
        console.log("not mobile");
    }

    let isUp = true;
    let prevScrollTop = 0;
    let prevCoverSize = 0;

    document.removeEventListener("scroll", function (event) {
        event.preventDefault();
    });

    document.addEventListener("scroll", function (event) {
        event.preventDefault();

        // if (document.documentElement.scrollTop < 0) return;

        // 스크롤 방향 감지
        // if (prevScrollTop > document.documentElement.scrollTop && !isUp) {
        //     // console.log("Up");
        //     isUp = true;
        // } else if (prevScrollTop < document.documentElement.scrollTop && isUp) {
        //     // console.log("Down");
        //     isUp = false;
        // } else {
        //     // console.log("no up and down");
        // }
        // prevScrollTop = document.documentElement.scrollTop;
        // console.log("isUp: ", isUp);

        // 하단 이미지 시작점과 끝점(2px는 progress-bar)
        var openLinkImgPos = linkCoverFull.offsetTop - window.scrollY + (basicFoot.scrollHeight - 2);
        var closeLinkImgPos = linkCoverFull.offsetTop - window.scrollY;

        // 하단 이미지 시작시 이미지 scale 변화
        // if (window.innerHeight - openLinkImgPos >= 0 && window.innerHeight - openLinkImgPos <= window.innerHeight) {
        // var linkImgScale = 1 + (window.innerHeight - openLinkImgPos) / (window.innerHeight * 3);
        // console.log("openLinkImgPos", (window.innerHeight - openLinkImgPos) / (window.innerHeight * 10));
        // linkImg.style.transform = `scale(${linkImgScale})`;
        // }

        // 하단이미지 시작시, 좋아요/공유버튼 opacity 및 footer change
        var basicFootOpacity = 1 - (window.innerHeight - openLinkImgPos) / window.innerHeight;

        if (window.innerHeight - openLinkImgPos >= 0 && window.innerHeight - openLinkImgPos <= halfBody) {
            basicLinkFoot.style.display = "none";
            basicFoot.style.display = "flex";
            basicFoot.classList.add("sticky");
            basicFoot.style.opacity = basicFootOpacity;
            heartDiv.style.opacity = basicFootOpacity;
            imgHeart.style.opacity = basicFootOpacity;
            shareDiv.style.opacity = basicFootOpacity;
            shareImg.style.opacity = basicFootOpacity;
        } else if (window.innerHeight - openLinkImgPos > halfBody && linkCoverFull.offsetTop - window.scrollY >= 0) {
            var basicLinkFootOpacity = (window.innerHeight - closeLinkImgPos) / window.innerHeight;

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

        // box shadow active - text underline
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

        // scroll progress bar
        // if (window.scrollY >= 0 && upToWrapBodyScroll >= window.scrollY) {
        //     if (basicFoot.classList.contains("sticky")) {
        //         var currentPercentage = ((window.scrollY + basicFoot.scrollHeight) / upToWrapBodyScroll) * 100;
        //     } else {
        //         var currentPercentage = (window.scrollY / upToWrapBodyScroll) * 100;
        //     }
        //     // console.log("currentPercentage ", currentPercentage);

        //     document.getElementsByClassName("progress-bar")[0].style.width = currentPercentage + "%";
        // }

        // 좋아요 공유버튼 이벤트 sticky
        if (document.documentElement.scrollTop <= basicFoot.scrollHeight) {
            basicFoot.classList.remove("sticky");
        } else if (document.documentElement.scrollTop < window.screen.height) {
            basicFoot.classList.add("sticky");
        } else {
            basicFoot.classList.add("sticky");
        }

        // scroll에 따른 main cover image height
        // if (document.getElementById("body_frame").offsetTop >= document.documentElement.scrollTop) {
        //     setTimeout(() => {
        //         prevCoverSize = window.innerHeight - document.documentElement.scrollTop;
        //         coverFull.style.height = prevCoverSize + "px";
        //     }, 3);
        // }

        // var speed = checkScrollSpeed();

        // if (isUp && speed < 20) {
        //     if (window.innerHeight - openLinkImgPos > 100) {
        //         stopper = true;
        //         // scrollTo(document.documentElement, body.scrollHeight * 0.8, 240, speed);
        //     }
        // } else if (!isUp && speed < 20) {
        //     if (window.innerHeight - openLinkImgPos >= halfBody - 100 && 0 < openLinkImgPos) {
        //         stopper = false;
        //         tweenScrollTo();
        //     }
        // }
    });

    // function tweenScrollTo() {
    //     stopper = false;
    //     let domScroll = linkCoverFull.offsetTop + 10;

    //     TweenMax.to(window, 1, {
    //         scrollTo: {
    //             y: domScroll,
    //             autoKill: true,
    //         },
    //         ease: Power2.easeOut,
    //     });
    // }
};

// 좋아요 이벤트
let heartClickEvent = document.querySelector("#imgHeart");
heartClickEvent.addEventListener("click", function () {
    this.classList.toggle("heart_active");
    document.querySelector("#imgWhiteHeart").classList.toggle("heart_white_active");
});

let whiteHeartClickEvent = document.querySelector("#imgWhiteHeart");
whiteHeartClickEvent.addEventListener("click", function () {
    console.log("white1");
    this.classList.toggle("heart_white_active");
    document.querySelector("#imgHeart").classList.toggle("heart_active");
});

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

gsap.registerPlugin(TweenMax, ScrollToPlugin, ScrollTrigger);
gsap.to("progress", {
    value: 100,
    ease: "none",
    scrollTrigger: {
        trigger: ".wrap_body_frame",
        scrub: 0.3,
        start: "top bottom",
        end: `bottom ${document.body.clientHeight - document.getElementsByClassName("basic_foot")[0].clientHeight}px`,
    },
});

// gsap.utils.toArray(".box-shadow").forEach((highlight, i) => {
//     // console.log(highlight, i);
//     ScrollTrigger.create({
//         stagger: 0.9,
//         trigger: highlight,
//         markers: true,
//         start: "top center",
//         toggleClass: { targets: highlight, className: "box-shadow-active" },
//         // onEnter: () =>
//         //     gsap.to(highlight, {
//         //         stagger: 0.9,
//         //         ease: "power3.out",
//         //         overwrite: "auto",
//         //     }),
//     });
// });

ScrollTrigger.create({
    trigger: ".link_item",
    // markers: true,
    start: "top center",
    onEnter: () => {
        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: document.getElementById("link_cover_full").offsetTop,
            },
            ease: "expo.out",
        }),
            gsap.to("#link_img", { scale: 1.3 });
        gsap.to(".stroke_link", { scale: 1.05 });
    },
    onEnterBack: () => gsap.to("#link_img, .stroke_link", { scale: 1 }),
    onLeave: () => gsap.to("#link_img, .stroke_link", { scale: 1 }),
    onLeaveBack: () => gsap.to("#link_img, .stroke_link", { scale: 1 }),
});

const ROOT = document.documentElement;
const MIN = 10;
const THRESHOLD = innerHeight * (1.2 - 0.225);
const update = (e) => {
    console.log("update");
    const scroll = Math.floor((scrollY / innerHeight) * 100);
    if (scrollY > THRESHOLD) {
        const progress = Math.floor(((scrollY - THRESHOLD) / (document.body.scrollHeight - innerHeight - THRESHOLD)) * 100);
        ROOT.style.setProperty("--content", progress);
    }
    ROOT.style.setProperty("--scroll", Math.max(0, Math.min(scroll, 100 - MIN)));
};

window.addEventListener("scroll", update);
