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

    var bContents = document.getElementsByClassName("b_contents")[0];
    var basicFoot = document.getElementsByClassName("basic_foot")[0];
    var basicLinkFoot = document.getElementsByClassName("basic_link_foot")[0];
    var wrapCover = document.getElementsByClassName("wrap_cover")[0];
    var boxShadows = document.getElementsByClassName("box-shadow");
    var prevScrollTop = 0;
    var height = window.screen.height / 4;
    var wrapBody = document.getElementById("body_frame");
    var coverFull = document.getElementById("cover_full");
    var link_title = document.getElementById("link_title");
    var linkCoverFull = document.getElementById("link_cover_full");
    var linkImg = document.getElementById("link_img");
    var body = document.body;
    var halfBody = window.innerHeight / 2;
    var heartDiv = document.getElementById("heartDiv");
    var shareDiv = document.getElementById("shareDiv");
    var imgHeart = document.getElementById("imgHeart");
    var shareImg = document.getElementById("shareImg");
    var whiteHeartDiv = document.getElementById("whiteHeartDiv");
    var whiteShareDiv = document.getElementById("whiteShareDiv");
    var imgWhiteHeart = document.getElementById("imgWhiteHeart");
    var whiteShareImg = document.getElementById("whiteShareImg");
    var flag = "";
    var state = 0;
    var prevCurrent = 0;
    var isUp = true;
    var onSwipe = false;

    var upToWrapBodyScroll = body.scrollHeight - linkCoverFull.scrollHeight + basicFoot.scrollHeight;
    var prevCoverSize = 0;
    var stopper = true;
    document.addEventListener(
        "scroll",
        function (event) {
            if (document.documentElement.scrollTop < 0) return;

            event.preventDefault();

            // 스크롤 방향 감지
            if (prevScrollTop > document.documentElement.scrollTop && !isUp) {
                // console.log("Up");
                isUp = true;
            } else if (prevScrollTop < document.documentElement.scrollTop && isUp) {
                // console.log("Down");
                isUp = false;
            } else {
                // console.log("no up and down");
            }
            prevScrollTop = document.documentElement.scrollTop;
            // console.log("isUp: ", isUp);

            // 하단 이미지 시작점과 끝점(2px는 progress-bar)
            var openLinkImgPos = linkCoverFull.offsetTop - window.scrollY + (basicFoot.scrollHeight - 2);
            var closeLinkImgPos = linkCoverFull.offsetTop - window.scrollY;

            // 하단 이미지 시작시 이미지 scale 변화
            if (window.innerHeight - openLinkImgPos >= 0 && window.innerHeight - openLinkImgPos <= window.innerHeight) {
                var linkImgScale = 1 + (window.innerHeight - openLinkImgPos) / (window.innerHeight * 3);
                // console.log("openLinkImgPos", (window.innerHeight - openLinkImgPos) / (window.innerHeight * 10));
                linkImg.style.transform = `scale(${linkImgScale})`;
            }

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

            Array.from(boxShadows).forEach(function (element, index, array) {
                if (!element.classList.contains("box-shadow-active") && element.offsetTop + height < document.documentElement.scrollTop) {
                    element.classList.add("box-shadow-active");
                }
            });

            // scroll progress bar
            if (window.scrollY >= 0 && upToWrapBodyScroll >= window.scrollY) {
                if (basicFoot.classList.contains("sticky")) {
                    var currentPercentage = ((window.scrollY + basicFoot.scrollHeight) / upToWrapBodyScroll) * 100;
                } else {
                    var currentPercentage = (window.scrollY / upToWrapBodyScroll) * 100;
                }
                // console.log("currentPercentage ", currentPercentage);

                document.getElementsByClassName("progress-bar")[0].style.width = currentPercentage + "%";
            }

            // 좋아요 공유버튼 이벤트 sticky
            if (document.documentElement.scrollTop <= basicFoot.scrollHeight * 2) {
                basicFoot.classList.remove("sticky");
            } else if (document.documentElement.scrollTop < window.screen.height) {
                basicFoot.classList.add("sticky");
            } else {
                basicFoot.classList.add("sticky");
            }

            // scroll에 따른 main cover image height
            if (document.getElementById("body_frame").offsetTop >= document.documentElement.scrollTop) {
                setTimeout(() => {
                    prevCoverSize = window.innerHeight - document.documentElement.scrollTop;
                    coverFull.style.height = prevCoverSize + "px";
                }, 3);
            }

            var speed = checkScrollSpeed();

            // console.log("speed: ", speed);

            if (isUp && speed < 20) {
                // if (window.innerHeight - openLinkImgPos > 100) {
                //   console.log("move to up step1");
                //   stopper = true;
                //   scrollTo(document.documentElement, linkCoverFull.offsetTop - linkCoverFull.offsetHeight + 50, 100, 1);
                // }
            } else if (!isUp && speed < 20) {
                // console.log("window.innerHeight - openLinkImgPos", window.innerHeight - openLinkImgPos);
                // if (window.innerHeight - openLinkImgPos > 0 && window.innerHeight - openLinkImgPos * 1.3 < 0 && stopper) {
                if (
                    window.innerHeight - openLinkImgPos >= basicFoot.scrollHeight &&
                    window.innerHeight - openLinkImgPos < window.innerHeight
                ) {
                    // console.log("move to down step1");
                    stopper = false;
                    // console.log("linkCoverFull.offsetTop - linkCoverFull.offsetHeight + 50",  linkCoverFull.offsetTop - linkCoverFull.offsetHeight + 50);
                    event.preventDefault();
                    if (/iPhone/i.test(navigator.userAgent)) {
                        scrollTo(document.documentElement, linkCoverFull.offsetTop, 200, speed);
                    } else {
                        scrollTo(document.documentElement, linkCoverFull.offsetTop, 100, speed);
                    }
                }
                // else if (window.innerHeight - openLinkImgPos > 0) {
                //   console.log("move to down step2");
                //   // scrollTo(document.documentElement, linkCoverFull.offsetTop + 10, 100, 1);
                // }
            }
        },
        { passive: false }
    );

    // 링크 터치 이벤트
    link_title.addEventListener("touchstart", function (event) {
        this.classList.add("stroke_link-active");
    });

    link_title.addEventListener("touchend", function (event) {
        this.classList.remove("stroke_link-active");
    });

    // 좋아요 이벤트
    var heartClickEvent = document.querySelector("#imgHeart");
    heartClickEvent.addEventListener("click", function () {
        this.classList.toggle("heart_active");
        document.querySelector("#imgWhiteHeart").classList.toggle("heart_white_active");
    });

    var whiteHeartClickEvent = document.querySelector("#imgWhiteHeart");
    whiteHeartClickEvent.addEventListener("click", function () {
        this.classList.toggle("heart_white_active");
        document.querySelector("#imgHeart").classList.toggle("heart_active");
    });

    //t = current time
    //b = start value
    //c = change in value
    //d = duration
    Math.easeOutQuad = function (t, b, c, d) {
        t /= d;
        return -c * t * (t - 2) + b;
    };

    Math.linearTween = function (t, b, c, d) {
        // console.log("linear: ", (c * t) / d + b);
        return (c * t) / d + b;
    };

    var isScrollToDone = true;
    var prevScrollTo = 0;
    function scrollTo(element, to, duration, speed) {
        if (!isScrollToDone) return;
        isScrollToDone = false;

        // console.log("scrollTo", to, duration, speed, isUp);
        var start = element.scrollTop,
            change = to - start,
            currentTime = 0,
            increment = speed,
            timer;

        if (/iPhone/i.test(navigator.userAgent)) {
            increment = 2;
        }

        var animateScroll = function () {
            currentTime += increment;
            // console.log("currentTime, start, change, duration", currentTime, start, change, duration);
            var val = Math.linearTween(currentTime, start, change, duration);

            element.scrollTop = val;
            // console.log("duration: ", duration);
            // console.log("scrollTop: ", val);
            // console.log("currentTime: ", currentTime);

            if (currentTime < duration) {
                clearTimeout(timer);
                // console.log("increment ", increment);

                timer = setTimeout(animateScroll, increment);
                // console.log("timer: ", timer);
            } else {
                isScrollToDone = true;
            }
        };
        animateScroll();
    }

    var checkScrollSpeed = (function (settings) {
        settings = settings || {};

        var lastPos,
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
};
