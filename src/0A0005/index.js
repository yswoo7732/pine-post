window.onload = function () {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        // document
        //   .getElementsByClassName("container")[0]
        //   .classList.add("border_none");
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

    var prevCoverSize = 0;

    document.addEventListener("scroll", function (event) {
        event.preventDefault();
        // 스크롤 방향 감지
        if (prevScrollTop > document.documentElement.scrollTop) {
            console.log("Up");
            prevScrollTop = document.documentElement.scrollTop;

            isUp = true;
        } else if (prevScrollTop <= document.documentElement.scrollTop) {
            console.log("Down");
            prevScrollTop = document.documentElement.scrollTop;
            isUp = false;
        } else {
            console.log("no up and down");
        }
        console.log("isUp: ", isUp);

        var currentPercentage = Math.round((window.scrollY / (body.scrollHeight - basicFoot.scrollHeight)) * 100) - 3;

        // 하단 이미지 시작점(2px는 progress-bar)
        var openLinkImgPos = linkCoverFull.offsetTop - window.scrollY + (basicFoot.scrollHeight - 2);
        var closeLinkImgPos = linkCoverFull.offsetTop - window.scrollY;

        var basicFootOpacity = 1 - (window.innerHeight - openLinkImgPos) / window.innerHeight;

        if (window.innerHeight - openLinkImgPos >= 0 && window.innerHeight - openLinkImgPos <= window.innerHeight) {
            var linkImgScale = 1 + (window.innerHeight - openLinkImgPos) / (window.innerHeight * 10);
            console.log("openLinkImgPos", (window.innerHeight - openLinkImgPos) / (window.innerHeight * 10));
            linkImg.style.transform = `scale(${linkImgScale})`;
        }

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
        // 하단 비활성화시키기(활성화된 상태에서 스크롤링 될때만)
        if (flag == 1 && isUp) {
            state = 2;
        }
        // 활성화 시키기(활성화된 상태가 아닐때만)
        else if (!isUp && flag != 1) {
            console.log("elseif state 1");
            state = 1;
        } else {
            state = 0;
        }

        switch (state) {
            // 하단 비활성일때 - 메인상태
            case 0:
                Array.from(boxShadows).forEach(function (element, index, array) {
                    // console.log("element.offsetTop", element.offsetTop);
                    // console.log("document.documentElement.scrollTop", document.documentElement.scrollTop);

                    if (!element.classList.contains("box-shadow-active") && element.offsetTop + height < document.documentElement.scrollTop) {
                        element.classList.add("box-shadow-active");
                    }
                });

                // scroll progress bar
                document.getElementsByClassName("progress-bar")[0].style.width = currentPercentage + "%";

                // 좋아요 공유버튼 이벤트 sticky
                if (document.documentElement.scrollTop == 0 || Math.round(window.scrollY) == document.body.scrollHeight) {
                    basicFoot.classList.remove("sticky");
                } else if (document.documentElement.scrollTop < window.screen.height) {
                    basicFoot.classList.add("sticky");
                } else {
                    basicFoot.classList.add("sticky");
                }

                // scroll에 따른 main cover image height
                if (document.getElementById("body_frame").offsetTop > document.documentElement.scrollTop) {
                    setTimeout(() => {
                        prevCoverSize = window.innerHeight - document.documentElement.scrollTop;
                        coverFull.style.height = prevCoverSize + "px";
                        // console.log("coverFull.style.height", coverFull.style.height);
                    }, 3);
                }
                break;

            // 하단이미지 활성화시킬때
            case 1:
                // linkImg.style.height = window.innerHeight - document.documentElement.scrollTop + "px";

                // setTimeout(() => {
                //     swipe(event);
                // }, 1000);
                flag = 1;
                break;
            case 2: // 하단이미지 비활성
                // console.log("state: ", state);
                // setTimeout(() => {
                //     swipeEnd(event);
                // }, 10);
                flag = 2;
                break;
        }
        console.log("flag: ", flag);
    });

    // 링크 터치 이벤트
    link_title.addEventListener("touchstart", function (event) {
        console.log("touch!!!");
        this.classList.add("stroke_link-active");
    });

    link_title.addEventListener("touchend", function (event) {
        console.log("touchend!!!");
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
};
