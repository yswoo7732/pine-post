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

    var swiper = new Swiper(".swiper-container", {
        direction: "horizontal",
        initialSlide: 0,
        watchSlidesProgress: true,
        resistanceRatio: 0,
        on: {
            slideChange: function (sp) {
                switch (sp.activeIndex) {
                    case 0:
                        document.querySelector(".footer").classList.add("d-none");
                        document.querySelector(".swiper-pagination").classList.add("d-none");
                        break;
                    default:
                        document.querySelector(".footer").classList.remove("d-none");
                        document.querySelector(".swiper-pagination").classList.remove("d-none");
                        console.log("switch default activeIndex:", sp.activeIndex);
                }
            },
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

    var el_imgHearts = document.getElementsByClassName("imgHeart");

    Array.from(el_imgHearts).forEach(function (element, index, array) {
        element.addEventListener("click", function () {
            console.log("heartClickEvent");
            Array.from(array).forEach(function (element2, index2, array2) {
                element2.classList.toggle("heart_active");
            });
        });
    });
};
