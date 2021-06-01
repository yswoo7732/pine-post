const soundOnOff = document.querySelectorAll(".sound_on_off");
const bgmSound = new Audio("assets/bgm_game.mp3");

bgmSound.loop = true;
bgmSound.muted = true;
bgmSound.currentTime = 0;

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

function soundOn() {
    soundOnOff.forEach((item) => {
        item.classList.add("sound_on");
    });
    bgmSound.muted = false;
    bgmSound.play();
}

function soundOff() {
    soundOnOff.forEach((item) => {
        item.classList.remove("sound_on");
    });
    bgmSound.currentTime = 0;
    bgmSound.muted = true;
    bgmSound.pause();
}

window.onload = function () {
    // fitScreeSize();
    getLike();

    var page1StartBtn = document.getElementsByClassName("fund1_startBtn")[0];
    page1StartBtn.addEventListener(
        "click",
        function (event) {
            this.classList.add("fund1_startBtn_active");
            swiper_h.slideTo(1);
        },
        false
    );

    if (!pineAppChk()) {
        let imgHeart = document.querySelectorAll(".img_heart");

        imgHeart.forEach(function (el) {
            el.src = "../common/assets/card_foot_PINE.png";
        });
    }

    var swiper_h = new Swiper(".swiper-container-v", {
        direction: "vertical",
        initialSlide: 0,
        allowTouchMove: false,
        on: {
            slideChange: function (sp) {
                switch (sp.activeIndex) {
                    default:
                        console.log("switch default activeIndex:", sp.activeIndex);
                }
            },
        },
        pagination: {
            el: ".swiper-pagination",
            type: "custom",
            renderCustom: function (swiper, current, total) {
                return (
                    '<div class="custom-pagination"> <div style="font-weight: bold;">' +
                    ("0" + current).slice(-2) +
                    '</div> <div class="rectangle"></div> ' +
                    ("0" + total).slice(-2) +
                    "</div>"
                );
            },
        },
    });

    var swiper_v = new Swiper(".swiper-container-h", {
        initialSlide: 2,
        allowTouchMove: false,
        on: {
            slideChange: function (sp) {
                console.log("switch activeIndex:", sp.activeIndex);

                switch (sp.activeIndex) {
                    case 1:
                    case 3:
                        fund3_game_overay_back.classList.add("d-none");
                        btnFund3Arrow.classList.remove("d-none");
                        fund4_game_overay_back.classList.add("d-none");
                        btnfund4Arrow.classList.remove("d-none");

                        document.querySelector("#samo_vidio").currentTime = 0;
                        document.querySelector("#gongmo_vidio").currentTime = 0;
                        break;

                    default:
                        document.querySelector(".btnGongmoResult").classList.remove("fund_result_animation");
                        document.querySelector(".btnSamoResult").classList.remove("fund_result_animation");

                        document.getElementsByClassName("fund3_button")[0].classList.remove("fund3_button_active");
                        document.getElementsByClassName("fund4_button")[0].classList.remove("fund4_button_active");

                        document.getElementById("selSamo").classList.remove("fund2_box1_active");
                        document.getElementById("selGongmo").classList.remove("fund2_box2_active");

                        document.querySelector("#samo_vidio").pause();
                        document.querySelector("#gongmo_vidio").pause();

                        console.log("switch default activeIndex:", sp.activeIndex);
                }
            },
        },
        pagination: {
            el: ".swiper-pagination",
            type: "custom",
            renderCustom: function (swiper, current, total) {
                return (
                    '<div class="custom-pagination"> <div style="font-weight: bold;">' +
                    ("0" + current).slice(-2) +
                    '</div> <div class="rectangle"></div> ' +
                    ("0" + total).slice(-2) +
                    "</div>"
                );
            },
        },
    });

   
    var scrollingElement = document.scrollingElement || document.body;

    window.scroll({
        left: Math.abs(window.innerWidth / 2 - scrollingElement.scrollWidth / 2),
        top: Math.abs(window.innerHeight / 2 - scrollingElement.scrollHeight / 2),
        behavior: "smooth",
    });

    var page2box1 = document.getElementsByClassName("fund2_box1")[0];
    page2box1.addEventListener(
        "click",
        function (event) {
            console.log("page2box1 Click!", event);
            this.classList.add("fund2_box1_active");
            swiper_v.slideTo(1);
        },
        false
    );

    var page2box2 = document.getElementsByClassName("fund2_box2")[0];
    page2box2.addEventListener(
        "click",
        function (event) {
            console.log("page2box2 Click!", event);
            this.classList.add("fund2_box2_active");
            swiper_v.slideTo(3);
        },
        false
    );

    var btnSamoResult = document.getElementsByClassName("btnSamoResult")[0];
    btnSamoResult.addEventListener(
        "click",
        function (event) {
            console.log("btnSamoResult Click!", event);
            btnfund3.classList.remove("fund3_button_active");
            swiper_v.slideTo(0);
        },
        false
    );

    var btnReplay1 = document.getElementsByClassName("fund4_replay")[0];
    btnReplay1.addEventListener(
        "click",
        function (event) {
            console.log("btnReplay Click!", event);

            swiper_v.slideTo(2);
        },
        false
    );

    var btnReplay2 = document.getElementsByClassName("fund4_replay")[1];
    btnReplay2.addEventListener(
        "click",
        function (event) {
            console.log("btnReplay Click!", event);
            swiper_v.slideTo(2);
        },
        false
    );

    var btnGongmoResult = document.getElementsByClassName("btnGongmoResult")[0];
    btnGongmoResult.addEventListener(
        "click",
        function (event) {
            console.log("btnGongmoResult Click!", event);
            btnfund4.classList.remove("fund4_button_active");
            swiper_v.slideTo(4);
        },
        false
    );

    var samoVidio = document.querySelector("#samo_vidio");
    var btnfund3 = document.getElementsByClassName("fund3_button")[0];
    var btnFund3Arrow = document.getElementsByClassName("fund3_arrow")[0];
    var fund3_game_overay_back = document.getElementsByClassName("fund3_game_overay_back")[0];

    samoVidio.playbackRate = 2;
    var currentTime = 0;
    var isButtonDone = false;
    samoVidio.ontimeupdate = function () {
        if (currentTime !== parseInt(samoVidio.currentTime)) {
            currentTime = parseInt(samoVidio.currentTime);
            console.log("samoVidio.currentTime", currentTime);
            switch (currentTime) {
                case 26:
                    document.querySelector(".btnSamoResult").classList.add("fund_result_animation");
                    fund3_game_overay_back.classList.remove("d-none");
                    break;
                default:
                    break;
            }
        }
    };

    btnfund3.addEventListener("click", function (event) {
        if (!btnFund3Arrow.classList.contains("d-none")) {
            btnFund3Arrow.classList.add("d-none");

            switch (currentTime) {
                case 0:
                case 3:
                case 7:
                case 12:
                case 15:
                case 22:
                    samoVidio.play();
                    break;
                default:
                    break;
            }

            btnfund3.classList.add("fund3_button_active");
        }
    });

    var gongmoVideo = document.querySelector("#gongmo_vidio");
    var btnfund4 = document.getElementsByClassName("fund4_button")[0];
    var btnfund4Arrow = document.getElementsByClassName("fund4_arrow")[0];
    var fund4_game_overay_back = document.getElementsByClassName("fund4_game_overay_back")[0];

    gongmoVideo.playbackRate = 2;
    var currentTime = 0;
    gongmoVideo.ontimeupdate = function () {
        if (currentTime !== parseInt(gongmoVideo.currentTime)) {
            currentTime = parseInt(gongmoVideo.currentTime);
            // console.log("gongmoVideo.currentTime", currentTime);
            switch (currentTime) {
                case 21:
                    // fund4_gameover.classList.remove("d-none");
                    document.querySelector(".btnGongmoResult").classList.add("fund_result_animation");
                    fund4_game_overay_back.classList.remove("d-none");
                    break;
                default:
                    break;
            }
        }
    };

    btnfund4.addEventListener("click", function (event) {
        if (!btnfund4Arrow.classList.contains("d-none")) {
            btnfund4Arrow.classList.add("d-none");
            switch (currentTime) {
                case 0:
                case 4:
                case 7:
                case 12:
                    gongmoVideo.play();
                    break;
                default:
                    break;
            }
            btnfund4.classList.add("fund4_button_active");
        }
    });

    soundOnOff.forEach((item) => {
        item.addEventListener("click", (event) => {
            if (!event.target.classList.contains("sound_on")) {
                soundOn();
            } else {
                soundOff();
            }
        });
    });
};

window.onunload = function () {
    bgmSound.pause();
};

// 페이지 이탈시, 사운드 음소거
document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
        soundOff();
    }
});
