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

    var upToWrapBodyScroll = body.scrollHeight - linkCoverFull.scrollHeight + basicFoot.scrollHeight;
    var prevCoverSize = 0;

    document.addEventListener("scroll", function (event) {
        if (document.documentElement.scrollTop < 0) return;

        event.preventDefault();
        
        // 스크롤 방향 감지
        if (prevScrollTop > document.documentElement.scrollTop) {
            // console.log("Up");
            prevScrollTop = document.documentElement.scrollTop;

            isUp = true;
        } else if (prevScrollTop <= document.documentElement.scrollTop) {
            // console.log("Down");
            prevScrollTop = document.documentElement.scrollTop;
            isUp = false;
        } else {
            // console.log("no up and down");
        }
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
    });

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
};
