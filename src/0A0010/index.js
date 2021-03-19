function fitScreeSize() {
    console.log("document.body.clientWidth", document.body.clientWidth);
    console.log("document.body.clientWidth", document.body.clientWidth);
    console.log("document.body.scrollWidth", document.body.scrollWidth);
    console.log("document.body.clientHeight", document.body.clientHeight);
    console.log("document.body.scrollHeight", document.body.scrollHeight);
    console.log("window.innerWidth", window.innerWidth);
    console.log("window.innerHeight", window.innerHeight);
    console.log("window.screen.width", window.screen.width);
    console.log("window.screen.height", window.screen.height);
    console.log("window.screen.availWidth", window.screen.availWidth);
    console.log("window.screen.availHeight", window.screen.availHeight);
    console.log("window.outerHeight", window.outerHeight);
    console.log("window.devicePixelRatio", window.devicePixelRatio);
    console.log("navigator.userAgent", navigator.userAgent);
}

const secondImg = document.getElementById("secondImg");
const mmfArrow = document.querySelector(".mmf-arrow");
const player2 = document.querySelector(".player2");
const firstCoin = document.getElementsByClassName("first-coin");
const secondCoin = document.getElementsByClassName("second-coin");
const thirdCoin = document.getElementsByClassName("third-coin");
const mmfVideo = document.getElementById("mmf_video");
const bgmSound = new Audio("assets/bgm_sound.mp3");
bgmSound.loop = true;
bgmSound.muted = true;
bgmSound.currentTime = 0;

window.onload = function () {
    // fitScreeSize();
    var soundOnOff = document.querySelector(".sound_on_off");
    var btnGameSound = document.getElementById("btnGameSound");

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
                        }, 300);

                        break;
                    case 2:
                        bgmSound.muted = true;
                        bgmSound.pause();

                        mmfVideo.currentTime = 0;
                        mmfVideo.muted = false;

                        setTimeout(function () {
                            mmfVideo.play();
                        }, 100);

                        btnGameSound.addEventListener("click", function(){
                            if (!btnGameSound.classList.contains("sound_on")) {
                                btnGameSound.classList.add("sound_on");
                                mmfVideo.muted = false;
                            } else {
                                btnGameSound.classList.remove("sound_on");
                                mmfVideo.muted = true;
                            }
                        });
                        break;
                    case 3:
                        mmfVideo.muted = true;

                        if (soundOnOff.classList.contains("sound_on")) {
                            bgmSound.muted = false;
                            bgmSound.currentTime = 0;
                            bgmSound.play();
                        }

                        document.querySelector(".page4-cloud2").classList.add("page4-cloud2-active");
                        setTimeout(function () {
                            for (i = 0; i < thirdCoin.length; i++) {
                                thirdCoin[i].classList.add("third-coin-active");
                            }
                        }, 300);

                        break;
                    default:
                        mmfVideo.muted = true;
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
            mmfVideo.play();
            mmfVideo.muted = true;

            console.log("page1StartBtn Click!", event);
            for (i = 0; i < firstCoin.length; i++) {
                firstCoin[i].classList.remove("first-coin-active");
            }
            swiper_h.slideTo(1);
            mmfArrow.classList.add("mmf-arrow-move");
        },
        false
    );

    soundOnOff.addEventListener("click", function () {
        if (!soundOnOff.classList.contains("sound_on")) {
            soundOnOff.classList.add("sound_on");
            bgmSound.muted = false;
            bgmSound.play();
        } else {
            console.log("sound off!");
            soundOnOff.classList.remove("sound_on");
            bgmSound.muted = true;
            bgmSound.pause();
        }
    });

    mmfArrow.addEventListener("animationend", () => {
        player2.classList.add("blinking");
    });

    player2.addEventListener("animationend", () => {
        console.log("player2 animationend");
        setTimeout(function () {
            swiper_h.slideTo(2);
        }, 800);
    });

    mmfVideo.addEventListener("ended", () => {
        if (swiper_h.activeIndex == 2) {
            swiper_h.slideTo(3);
            bgmSound.muted = false;
            bgmSound.play();
        }
    });

    var scrollingElement = document.scrollingElement || document.body;

    console.log("scrollingElement.scrollWidth - window.innerWidth / 2", window.innerWidth / 2 - scrollingElement.scrollWidth / 2);

    console.log("scrollingElement.scrollHeight - window.innerHeight / 2", window.innerHeight / 2 - scrollingElement.scrollHeight / 2);

    window.scroll({
        left: Math.abs(window.innerWidth / 2 - scrollingElement.scrollWidth / 2),
        top: Math.abs(window.innerHeight / 2 - scrollingElement.scrollHeight / 2),
        behavior: "smooth",
    });

    document.querySelector("#btnSkip").addEventListener("touchstart", function () {
        this.classList.add("btn_skip_active");
    });

    document.querySelector("#btnSkip").addEventListener("touchend", function () {
        this.classList.remove("btn_skip_active");
        swiper_h.slideTo(3);
    });
};
window.onunload = function () {
    bgmSound.pause();
};
