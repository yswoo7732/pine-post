function fitScreeSize() {
    // console.log("document.body.clientWidth", document.body.clientWidth);
    // console.log("document.body.clientWidth", document.body.clientWidth);
    // console.log("document.body.scrollWidth", document.body.scrollWidth);
    // console.log("document.body.clientHeight", document.body.clientHeight);
    // console.log("document.body.scrollHeight", document.body.scrollHeight);
    // console.log("window.innerWidth", window.innerWidth);
    // console.log("window.innerHeight", window.innerHeight);
    // console.log("window.screen.width", window.screen.width);
    // console.log("window.screen.height", window.screen.height);
    // console.log("window.screen.availWidth", window.screen.availWidth);
    // console.log("window.screen.availHeight", window.screen.availHeight);
    // console.log("window.outerHeight", window.outerHeight);
    // console.log("window.devicePixelRatio", window.devicePixelRatio);
    // console.log("navigator.userAgent", navigator.userAgent);
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    } else {
        console.log("not mobile");
    }
}

const secondImg = document.getElementById("secondImg");
const mmfArrow = document.querySelector(".mmf-arrow");
const player2 = document.querySelector(".player2");
const firstCoin = document.getElementsByClassName("first-coin");
const secondCoin = document.getElementsByClassName("second-coin");
const mmfVideo = document.getElementById("mmf_video");

window.onload = function () {
    fitScreeSize();

    var swiper_h = new Swiper(".swiper-container", {
        initialSlide: 0,
        allowTouchMove: false,
        on: {
            slideChange: function (sp) {
                console.log("switch activeIndex:", sp.activeIndex);

                switch (sp.activeIndex) {
                    case 1:
                        setTimeout(function () {
                            for (i = 0; i < secondCoin.length; i++) {
                                secondCoin[i].classList.add("second-coin-active");
                            }
                        }, 700);
                        break;
                    case 2:
                        setTimeout(function () {
                            mmfVideo.currentTime = 0;
                            mmfVideo.play();
                        }, 100);
                        break;
                    default:
                        mmfVideo.pause();
                        console.log("switch default activeIndex:", sp.activeIndex);
                        break;
                }
            },
        },
    });

    var page1StartBtn = document.getElementsByClassName("mmf-start-btn")[0];
    page1StartBtn.addEventListener(
        "click",
        function (event) {
            console.log("page1StartBtn Click!", event);
            for (i = 0; i < firstCoin.length; i++) {
                firstCoin[i].classList.remove("first-coin-active");
            }
            swiper_h.slideTo(1);
            mmfArrow.classList.add("mmf-arrow-move");
        },
        false
    );

    mmfArrow.addEventListener("animationend", () => {
        player2.classList.add("blinking");
    });

    player2.addEventListener("animationend", () => {
        setTimeout(function () {
            swiper_h.slideTo(2);
        }, 800);
    });

    mmfVideo.addEventListener("ended", () => {
        swiper_h.slideTo(3);
    });

    document.getElementById("mmf_video").addEventListener;

    secondCoin[3].addEventListener("animationend", () => {});

    console.log("document.body.clientWidth", document.body.clientWidth);
    console.log("document.body.clientWidth", document.body.clientWidth);
    console.log("document.body.scrollWidth", document.body.scrollWidth);
    console.log("document.body.clientHeight", document.body.clientHeight);
    console.log("document.body.scrollHeight", document.body.scrollHeight);
    console.log("window.innerWidth", window.innerWidth);
    console.log("window.innerHeight", window.innerHeight);
    console.log("window.screen.width", window.screen.width);
    console.log("window.screen.height", window.screen.height);
    var scrollingElement = document.scrollingElement || document.body;

    console.log(
        "scrollingElement.scrollWidth - window.innerWidth / 2",
        window.innerWidth / 2 - scrollingElement.scrollWidth / 2
    );

    console.log(
        "scrollingElement.scrollHeight - window.innerHeight / 2",
        window.innerHeight / 2 - scrollingElement.scrollHeight / 2
    );

    window.scroll({
        left: Math.abs(window.innerWidth / 2 - scrollingElement.scrollWidth / 2),
        top: Math.abs(window.innerHeight / 2 - scrollingElement.scrollHeight / 2),
        behavior: "smooth",
    });
};
