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
}

window.onload = function () {
    fitScreeSize();

     // 로드시, 좋아요 여부 호출
     getLike();

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
                            document.getElementById("question1").classList.remove("q1");
                            document.getElementById("question2").classList.remove("q2");

                            document.querySelector(".page-slide").style.opacity = 1;

                            document.getElementsByClassName("footer")[0].classList.remove("d-none");
                            document.getElementsByClassName("page-slide")[0].classList.remove("d-none");

                            console.log("switch default activeIndex:", sp.activeIndex);

                            switch (sp.activeIndex) {
                                case 0:
                                    document.querySelector(".page-slide").style.opacity = 0;

                                    document.getElementsByClassName("footer")[0].classList.add("d-none");
                                    document.getElementsByClassName("page-slide")[0].classList.add("d-none");
                                    break;
                                case 1:
                                    document.getElementById("question1").classList.add("q1");
                                    document.getElementById("question2").classList.add("q2");
                                    break;
                                case 2:
                                    break;
                                default:
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
                            // if (sp.activeIndex == 0) {
                            //     document.getElementsByClassName("page-slide")[0].classList.add("d-none");
                            // }

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

                document.getElementsByClassName("page-slide")[0].classList.add("d-none");
                console.log("multipleSwiperSlides: Things should be working fine. B)");
            }
        };

        checkOnPage();
    };

    multipleSwiperSlides();

    lottie.loadAnimation({
        container: document.getElementsByClassName("scale_wrapper1")[0], // the dom element that will contain the animation
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "assets/lottie/scale1.json", // the path to the animation json
    });

    lottie.loadAnimation({
        container: document.getElementsByClassName("scale_wrapper2")[0], // the dom element that will contain the animation
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "assets/lottie/scale2.json", // the path to the animation json
    });

    lottie.loadAnimation({
        container: document.getElementsByClassName("scale_wrapper3")[0], // the dom element that will contain the animation
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "assets/lottie/scale3.json", // the path to the animation json
    });

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
