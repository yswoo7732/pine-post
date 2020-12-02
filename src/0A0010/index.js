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
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    } else {
        console.log("not mobile");
    }
}

const secondImg = document.getElementById("secondImg");
const mmfArrow = document.querySelector(".mmf-arrow");
const player2 = document.querySelector(".player2");

window.onload = function () {
    fitScreeSize();
    var swiper_h = new Swiper(".swiper-container", {
        initialSlide: 0,
        allowTouchMove: false,
        on: {
            slideChange: function (sp) {
                // secondImg.style.left = "0";
                console.log("switch activeIndex:", sp.activeIndex);

                switch (sp.activeIndex) {
                    case 0:
                        secondImg.style.left = "0";
                        break;
                    case 1:
                        secondImg.style.left = "-100%";
                        break;
                    case 2:
                        setTimeout(function () {
                            document.getElementById("mmf_video").play();
                        }, 300);

                    default:
                        console.log("switch default activeIndex:", sp.activeIndex);
                }
            },
        },
    });

    var page1StartBtn = document.getElementsByClassName("mmf-start-btn")[0];
    page1StartBtn.addEventListener(
        "click",
        function (event) {
            console.log("page1StartBtn Click!", event);
            swiper_h.slideTo(1);
            mmfArrow.classList.add("mmf-arrow-move");
        },
        false
    );

    mmfArrow.addEventListener("animationend", () => {
        player2.classList.add("blinking");
        // startBlink();
        console.log("Transition ended");
    });

    player2.addEventListener("animationend", () => {
        setTimeout(() => {
            swiper_h.slideTo(2);
        }, 1000);
    });

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

function doBlink() {
    var blink = document.getElementsByTagName("BLINK");
    console.log(blink.length);
    // for (var i = 0; i < blink.length; i++)
    // blink[i].style.visibility = blink[i].style.visibility == "" ? "hidden" : "";
}
function startBlink() {
    // setInterval("doBlink()", 300);
}
