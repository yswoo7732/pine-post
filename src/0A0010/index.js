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
    // var wh =
    //   window.outerHeight < window.screen.availHeight
    //     ? window.outerHeight
    //     : window.screen.availHeight;
    // var mh = 1624; // min width of site
    // var ratio = wh / mh; //calculate ratio
    // if (/Android/i.test(navigator.userAgent)) {
    //   ratio = (wh - 100) / mh;
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
    //       ", user-scalable=no, shrink-to-fit=no, height=" +
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
  //   containerElement.style =
  //     containerElement.offsetHeight * 0.4618 + "px";

  //   window.addEventListener("resize", function (e) {
  //     var containerElement = document.getElementsByClassName(
  //       "swiper-container"
  //     )[0];
  //     containerElement.style.width =
  //       containerElement.offsetHeight * 0.4618 + "px";
  //   });
  // }
  // var body = document.getElementsByTagName("body");

  var smSoundOnOff = document.querySelector("#smSoundOnOff");
  var gmSoundOnOff = document.querySelector("#gmSoundOnOff");

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
        switch (sp.activeIndex) {
          case 1:
          case 3:
            fund3_game_overay_back.classList.add("d-none");
            btnFund3Arrow.classList.remove("d-none");
            fund4_game_overay_back.classList.add("d-none");
            btnfund4Arrow.classList.remove("d-none");

            document.querySelector("#samo_vidio").currentTime = 0;
            document.querySelector("#gongmo_vidio").currentTime = 0;
            if (
              gmSoundOnOff.classList.contains("sound_on") ||
              gmSoundOnOff.classList.contains("sound_on")
            ) {
              document.querySelector("#bgmAudio").play();
            }
            break;
          default:
            document
              .querySelector(".btnGongmoResult")
              .classList.remove("fund_result_animation");
            document
              .querySelector(".btnSamoResult")
              .classList.remove("fund_result_animation");
            document.getElementById("bgmAudio").muted = true;
            document
              .querySelector(".sound_on_off")
              .classList.remove("sound_on");
            document.querySelector("#buttonSound").muted = true;
            document.getElementById("bgmAudio").currentTime = 0;
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

  lottie.loadAnimation({
    container: document.getElementsByClassName("fund3_game_ani")[0], // the dom element that will contain the animation
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "assets/data.json", // the path to the animation json
  });

  // window.addEventListener("scroll", function (event) {
  //   console.log(event);
  // });

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

  // var viewport = document.querySelector("meta[name=viewport]");
  // viewport.setAttribute(
  //   "content",
  //   "width=375, initial-scale=1"
  // );

  var page1StartBtn = document.getElementsByClassName("fund1_startBtn")[0];
  page1StartBtn.addEventListener(
    "click",
    function (event) {
      console.log("page1StartBtn Click!", event);
      swiper_h.slideTo(1);
    },
    false
  );

  var page2box1 = document.getElementsByClassName("fund2_box1")[0];
  page2box1.addEventListener(
    "click",
    function (event) {
      console.log("page2box1 Click!", event);
      swiper_v.slideTo(1);
    },
    false
  );

  var page2box2 = document.getElementsByClassName("fund2_box2")[0];
  page2box2.addEventListener(
    "click",
    function (event) {
      console.log("page2box2 Click!", event);
      swiper_v.slideTo(3);
    },
    false
  );

  var btnSamoResult = document.getElementsByClassName("btnSamoResult")[0];
  btnSamoResult.addEventListener(
    "click",
    function (event) {
      console.log("btnSamoResult Click!", event);
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
      swiper_v.slideTo(4);
    },
    false
  );

  // var promise = document.getElementById("bgmAudio").play();

  // if (promise !== undefined) {
  //   promise
  //     .then((_) => {
  //       // 자동 재생 시작!
  //       console.log("자동 재생 시작");
  //     })
  //     .catch((error) => {
  //       // 자동 재생이 막힘.
  //       // "Play" 버튼을 노출해 유저가 재생을 시작할 수 있도록 한다
  //       console.log("자동 재생이 막힘");
  //     });
  // }

  var samoVidio = document.querySelector("#samo_vidio");
  var btnfund3 = document.getElementsByClassName("fund3_button")[0];
  var btnFund3Arrow = document.getElementsByClassName("fund3_arrow")[0];
  var fund3_game_overay_back = document.getElementsByClassName(
    "fund3_game_overay_back"
  )[0];

  samoVidio.playbackRate = 2;
  var currentTime = 0;
  var isButtonDone = false;
  samoVidio.ontimeupdate = function () {
    if (currentTime !== parseInt(samoVidio.currentTime)) {
      currentTime = parseInt(samoVidio.currentTime);
      console.log("samoVidio.currentTime", currentTime);
      switch (currentTime) {
        case 26:
          document
            .querySelector(".btnSamoResult")
            .classList.add("fund_result_animation");
          fund3_game_overay_back.classList.remove("d-none");
          console.log("samofund done!");
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

      console.log("buttonSound Click!");
      var btnSound = document.getElementById("buttonSound");
      btnSound.play();
      btnSound.addEventListener("ended", function () {
        // btnfund3.disabled = true;
        btnfund3.classList.remove("fund3_button_active");
        console.log("ended");
      });
      btnSound.removeEventListener("ended", function () {
        console.log("remove ended");
      });
    }
  });

  var gongmoVideo = document.querySelector("#gongmo_vidio");
  var btnfund4 = document.getElementsByClassName("fund4_button")[0];
  var btnfund4Arrow = document.getElementsByClassName("fund4_arrow")[0];
  var fund4_game_overay_back = document.getElementsByClassName(
    "fund4_game_overay_back"
  )[0];

  gongmoVideo.playbackRate = 2;
  var currentTime = 0;
  gongmoVideo.ontimeupdate = function () {
    if (currentTime !== parseInt(gongmoVideo.currentTime)) {
      currentTime = parseInt(gongmoVideo.currentTime);
      // console.log("gongmoVideo.currentTime", currentTime);
      switch (currentTime) {
        case 21:
          // fund4_gameover.classList.remove("d-none");
          document
            .querySelector(".btnGongmoResult")
            .classList.add("fund_result_animation");
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

      console.log("buttonSound Click!");
      var btnSound = document.getElementById("buttonSound");
      btnSound.play();
      btnSound.addEventListener("ended", function () {
        // btnfund4.disabled = true;
        btnfund4.classList.remove("fund4_button_active");
        console.log("ended");
      });
      btnSound.removeEventListener("ended", function () {});
    }
  });

  smSoundOnOff.addEventListener("click", function () {
    console.log("smSoundOnOff");

    if (!smSoundOnOff.classList.contains("sound_on")) {
      console.log("sound on!");
      smSoundOnOff.classList.add("sound_on");
      document.querySelector("#buttonSound").muted = false;
      document.getElementById("bgmAudio").muted = false;
      document.getElementById("bgmAudio").play();
    } else {
      console.log("sound off!");
      smSoundOnOff.classList.remove("sound_on");
      document.querySelector("#buttonSound").muted = true;
      document.getElementById("bgmAudio").muted = true;
    }
  });

  gmSoundOnOff.addEventListener("click", function () {
    console.log("gmSoundOnOff");

    if (!gmSoundOnOff.classList.contains("sound_on")) {
      console.log("sound on!");
      gmSoundOnOff.classList.add("sound_on");
      document.querySelector("#buttonSound").muted = false;
      document.getElementById("bgmAudio").muted = false;
      document.getElementById("bgmAudio").play();
    } else {
      console.log("sound off!");
      gmSoundOnOff.classList.remove("sound_on");
      document.querySelector("#buttonSound").muted = true;
      document.getElementById("bgmAudio").muted = true;
    }
  });
};

window.onunload = function () {
  document.getElementById("bgmAudio").pause();
};
