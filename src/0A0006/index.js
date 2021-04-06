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
    // fitScreeSize();

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
                            console.log("switch default activeIndex:", sp.activeIndex);

                            switch (sp.activeIndex) {
                                case 0:
                                    document.getElementsByClassName("footer")[0].classList.remove("fade-in");
                                    document.getElementsByClassName("page-slide")[0].classList.remove("fade-in");

                                    document.getElementsByClassName("footer")[0].classList.add("fade-out");
                                    document.getElementsByClassName("page-slide")[0].classList.add("fade-out");

                                    break;
                                default:
                                    document.getElementsByClassName("footer")[0].classList.remove("fade-out");
                                    document.getElementsByClassName("page-slide")[0].classList.remove("fade-out");

                                    document.getElementsByClassName("footer")[0].classList.add("fade-in");
                                    document.getElementsByClassName("page-slide")[0].classList.add("fade-in");

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

                console.log("multipleSwiperSlides: Things should be working fine. B)");
            }
        };

        checkOnPage();
    };

    multipleSwiperSlides();
};
