console.log("2/3", 2 / 3);
console.log("9/16", 9 / 16);
console.log("10/16", 10 / 16);
console.log("4/5", 4 / 5);
console.log("3/5", 3 / 5);
console.log("1/7", 1 / 7);

function gcd(a, b) {
    return b == 0 ? a : gcd(b, a % b);
}
function fitScreeSize() {
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
    console.log("aspect-ratio value", 1 - window.screen.width / window.screen.height);

    var r = gcd(window.screen.width, window.screen.height);
    console.log("aspect-ratio", window.screen.width / r + ":" + window.screen.height / r);

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        if (/iPhone/i.test(navigator.userAgent)) {
            document.querySelector(".footer").style.paddingBottom = "calc(constant(safe-area-inset-bottom) + 34px)";
            document.querySelector(".footer").style.paddingBottom = "calc(env(safe-area-inset-bottom) + 34px)";
        }
    } else {
        console.log("not mobile");
    }
}

let lottie4 = lottie.loadAnimation({
    container: document.getElementById("lottie4"), // the dom element that will contain the animation
    renderer: "svg",
    loop: 2,
    autoplay: false,
    path: "assets/drawable_cast_card_fund2_5.json", // the path to the animation json
});
let lottie5 = lottie.loadAnimation({
    container: document.getElementById("lottie5"), // the dom element that will contain the animation
    renderer: "svg",
    loop: false,
    autoplay: true,
    path: "assets/drawable_cast_card_fund2_5.json", // the path to the animation json
});
let lottie6 = lottie.loadAnimation({
    container: document.getElementById("lottie6"), // the dom element that will contain the animation
    renderer: "svg",
    loop: 2,
    autoplay: false,
    path: "assets/drawable_cast_card_fund2_7.json", // the path to the animation json
});
let lottie7 = lottie.loadAnimation({
    container: document.getElementById("lottie7"), // the dom element that will contain the animation
    renderer: "svg",
    loop: false,
    autoplay: true,
    path: "assets/drawable_cast_card_fund2_7.json", // the path to the animation json
});

window.onload = function () {
    fitScreeSize();

    const multipleSwiperSlides = function () {
        let sliderMain = document.querySelectorAll(".swiper-container.js-slider--main");
        let sliderNav = document.querySelectorAll(".swiper-container.js-slider--nav");

        // Arrays to hold swiper instances
        let mainArray = [];
        let navArray = [];
        // Slider Main
        sliderMain.forEach(function (element, i) {
            // Push swiper instance to array
            mainArray.push(
                new Swiper(element, {
                    initialSlide: 0,
                    watchSlidesProgress: true,
                    resistanceRatio: 0,
                    on: {
                        slideChange: function (sp) {
                            console.log("switch default activeIndex:", sp.activeIndex);

                            switch (sp.activeIndex) {
                                case 0:
                                    document.querySelector(".page-slide").style.opacity = 0;

                                    document.getElementsByClassName("footer")[0].style.opacity = 0;
                                    document.getElementsByClassName("page-slide")[0].style.opacity = 0;
                                    break;
                                case 4:
                                    lottie4.goToAndPlay(0);
                                    break;
                                case 5:
                                    lottie5.goToAndPlay(0);
                                    break;
                                case 6:
                                    lottie6.goToAndPlay(0);
                                    break;
                                case 7:
                                    lottie7.goToAndPlay(0);
                                    break;
                                default:
                                    document.querySelector(".page-slide").style.opacity = 1;

                                    document.getElementsByClassName("footer")[0].style.opacity = 1;
                                    document.getElementsByClassName("page-slide")[0].style.opacity = 1;
                                    break;
                            }
                        },
                    },
                })
            );
        });

        // Slider Nav
        sliderNav.forEach(function (element, i) {
            var self = sliderNav;

            // Push swiper instance to array
            navArray.push(
                new Swiper(element, {
                    slidesPerView: 1,
                    centeredSlides: true,
                    effect: "coverflow",
                    coverflowEffect: {
                        rotate: 60,
                        stretch: 0,
                        depth: 300,
                        modifier: 1,
                        slideShadows: false,
                    },
                    on: {
                        slideChange: function (sp) {
                            console.log("switch nav activeIndex:", sp.realIndex);
                        },
                    },
                })
            );
        });

        const checkOnPage = function () {
            if (sliderMain.length > 0 && sliderNav.length > 0) {
                let numberOfSlides = mainArray.length || navArray.length || 0;

                if (mainArray.length !== navArray.length) {
                    console.warn("multipleSwiperSlides: Number of main slides and nav slides is different. Expect incorrect behaviour.");
                }

                for (let i = 0; i < numberOfSlides; i++) {
                    mainArray[i].controller.control = navArray[i];
                    navArray[i].controller.control = mainArray[i];
                }

                document.getElementsByClassName("page-slide")[0].style.opacity = 0;
                console.log("multipleSwiperSlides: Things should be working fine. B)");
            }
        };

        checkOnPage();
    };

    multipleSwiperSlides();

    var devModeCnt = 0;
    var dev_mode = document.querySelector("#dev_mode");
    dev_mode.addEventListener("click", function () {
        if (devModeCnt++ > 5) {
            var r = gcd(window.screen.width, window.screen.height);
            document.getElementById("dev").innerHTML =
                "aspect-ratio-value: " +
                (1 - window.screen.width / window.screen.height) +
                "<br/>" +
                "aspect-ratio: " +
                (window.screen.width / r + ":" + window.screen.height / r) +
                "<br/>" +
                "w:" +
                window.screen.width +
                " h:" +
                window.screen.height +
                "<br/>" +
                "devicePixelRatio:" +
                window.devicePixelRatio;
        }
    });
};
