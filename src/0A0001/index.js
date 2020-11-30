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
            // document.querySelector(".footer").style.paddingBottom = "calc(constant(safe-area-inset-bottom) + 34px)";
            // document.querySelector(".footer").style.paddingBottom = "calc(env(safe-area-inset-bottom) + 34px)";
        }
        // var wh =
        //   window.outerHeight < window.screen.availHeight
        //     ? window.outerHeight
        //     : window.screen.availHeight;
        // var mh = 1624; // min width of site
        // var ratio = wh / mh; //calculate ratio
        // if (/Android/i.test(navigator.userAgent)) {
        //   ratio = (wh) / mh;
        // }
        // console.log("wh, mh, ratio", wh, mh, ratio);
        // if (wh < mh) {
        //   //smaller than minimum size
        //   console.log("smaller than minimum size ratio", ratio);
        //   var viewport = document.querySelector("meta[name=viewport]");
        //   viewport.setAttribute(
        //     "content",
        //     "initial-scale=" +
        //       ratio +
        //       ", maximum-scale=" +
        //       ratio +
        //       ", minimum-scale=" +
        //       ratio +
        //       ", user-scalable=no, height=" +
        //       wh
        //   );
        // } else {
        //   //regular size
        //   console.log("regular size");
        //   var viewport = document.querySelector("meta[name=viewport]");
        //   viewport.setAttribute(
        //     "content",
        //     "initial-scale=1, maximum-scale=2, minimum-scale=0.1, user-scalable=yes, height=" +
        //       wh
        //   );
        // }
    } else {
        console.log("not mobile");
        // document.getElementsByClassName("swiper-container")[0].style =
        //   "width: 750px; height: 1624px; transform: scale(0.5, 0.5) translate( 0, -50%);";
    }
}

window.onload = function () {
    // document.getElementsByClassName("content-wrapper img")[0].style.visibility = "visible";
    fitScreeSize();
    // let isMobile = window.matchMedia("all and (max-width: 760px)").matches;
    // let isMobile = /Mobi|Android/i.test(navigator.userAgent);
    // if (!isMobile) {
    //   console.log("isNotMobile");
    //   var containerElement = document.getElementsByClassName(
    //     "swiper-container"
    //   )[0];
    //   containerElement.style.width =
    //     containerElement.offsetHeight * 0.4618 + "px";

    //   window.addEventListener("resize", function (e) {
    //     var containerElement = document.getElementsByClassName(
    //       "swiper-container"
    //     )[0];
    //     containerElement.style.width =
    //       containerElement.offsetHeight * 0.4618 + "px";
    //   });
    // }

    // var swiper = new Swiper(".swiper-container", {
    //     direction: "horizontal",
    //     initialSlide: 0,
    //     watchSlidesProgress: true,
    //     resistanceRatio: 0,
    //     on: {
    //         slideChange: function (sp) {
    //             document.getElementById("question1").classList.remove("q1");
    //             document.getElementById("question2").classList.remove("q2");

    //             document.getElementsByClassName("footer")[0].classList.remove("d-none");
    //             document.getElementsByClassName("swiper-pagination")[0].classList.remove("d-none");
    //             console.log("switch default activeIndex:", sp.activeIndex);

    //             switch (sp.activeIndex) {
    //                 case 0:
    //                     document.getElementsByClassName("swiper-pagination")[0].classList.add("d-none");
    //                     document.getElementsByClassName("footer")[0].classList.add("d-none");
    //                     break;
    //                 case 1:
    //                     document.getElementById("question1").classList.add("q1");
    //                     document.getElementById("question2").classList.add("q2");
    //                     break;
    //                 case 2:
    //                     break;
    //                 default:
    //                     break;
    //             }
    //         },
    //     },
    //     pagination: {
    //         el: ".swiper-pagination",
    //         type: "custom",
    //         renderCustom: function (swiper, current, total) {
    //             return (
    //                 '<div class="page-font-f">' +
    //                 ("0" + current).slice(-2) +
    //                 '</div><div class="rectangle"></div><div class="page-font-b">' +
    //                 ("0" + total).slice(-2) +
    //                 "</div>"
    //             );
    //         },
    //     },
    // });

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

                            document.getElementsByClassName("footer")[0].classList.remove("d-none");
                            document.getElementsByClassName("page-slide")[0].classList.remove("d-none");

                            console.log("switch default activeIndex:", sp.activeIndex);

                            switch (sp.activeIndex) {
                                case 0:
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
                    spaceBetween: 20,
                    effect: "cube",
                    cubeEffect: {
                        shadow: false, // 슬라이더 밑의 그림자 표시 여부
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

    var heartClickEvent = document.querySelector("#imgHeart");
    heartClickEvent.addEventListener("click", function () {
        console.log("heartClickEvent");
        this.classList.toggle("heart_active");
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
