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
            document.querySelector(".basic_foot").style.paddingBottom = "calc(constant(safe-area-inset-bottom) + 20px)";
            document.querySelector(".basic_foot").style.paddingBottom = "calc(env(safe-area-inset-bottom) + 20px)";
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

    var lottie4 = lottie.loadAnimation({
        container: document.getElementById("lottie4"), // the dom element that will contain the animation
        renderer: "svg",
        loop: 2,
        autoplay: false,
        path: "assets/drawable_cast_card_fund2_5.json", // the path to the animation json
    });
    var lottie5 = lottie.loadAnimation({
        container: document.getElementById("lottie5"), // the dom element that will contain the animation
        renderer: "svg",
        loop: false,
        autoplay: true,
        path: "assets/drawable_cast_card_fund2_5.json", // the path to the animation json
    });
    var lottie6 = lottie.loadAnimation({
        container: document.getElementById("lottie6"), // the dom element that will contain the animation
        renderer: "svg",
        loop: 2,
        autoplay: false,
        path: "assets/drawable_cast_card_fund2_7.json", // the path to the animation json
    });
    var lottie7 = lottie.loadAnimation({
        container: document.getElementById("lottie7"), // the dom element that will contain the animation
        renderer: "svg",
        loop: false,
        autoplay: true,
        path: "assets/drawable_cast_card_fund2_7.json", // the path to the animation json
    });

    var swiper = new Swiper(".swiper-container", {
        direction: "horizontal",
        initialSlide: 0,
        watchSlidesProgress: true,
        resistanceRatio: 0,
        on: {
            slideChange: function (sp) {
                document.getElementsByClassName("footer")[0].classList.remove("d-none");
                document.getElementsByClassName("swiper-pagination")[0].classList.remove("d-none");
                console.log("switch default activeIndex:", sp.activeIndex);

                switch (sp.activeIndex) {
                    case 0:
                        document.getElementsByClassName("swiper-pagination")[0].classList.add("d-none");
                        document.getElementsByClassName("footer")[0].classList.add("d-none");
                        break;
                    case 4:
                        lottie4.goToAndPlay(0);
                        break;
                    case 5:
                        // lottie5.goToAndPlay(0);
                        break;
                    case 6:
                        lottie6.goToAndPlay(0);
                        break;
                    case 7:
                        // lottie7.goToAndPlay(0);
                        break;
                    default:
                        break;
                }
            },
            // slideChangeTransitionStart: function (sp) {
            //   console.log("slideChangeTransitionStart:", sp.activeIndex);
            //   document
            //     .getElementsByClassName("swiper-pagination")[0]
            //     .classList.add("d-none");
            // },
            // slideChangeTransitionEnd: function (sp) {
            //   console.log("slideChangeTransitionEnd:", sp.activeIndex);
            //   switch (sp.activeIndex) {
            //     case 0:
            //       break;
            //     default:
            //       document
            //         .getElementsByClassName("swiper-pagination")[0]
            //         .classList.remove("d-none");
            //       console.log("switch default activeIndex:", sp.activeIndex);
            //       break;
            //   }
            // },
        },
        pagination: {
            el: ".swiper-pagination",
            type: "custom",
            renderCustom: function (swiper, current, total) {
                return (
                    '<div class="page-font-f">' +
                    ("0" + current).slice(-2) +
                    '</div><div class="rectangle"></div><div class="page-font-b">' +
                    ("0" + total).slice(-2) +
                    "</div>"
                );
            },
        },
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
