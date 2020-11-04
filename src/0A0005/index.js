window.onload = function () {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    // document
    //   .getElementsByClassName("container")[0]
    //   .classList.add("border_none");
  } else {
    console.log("not mobile");
  }

  var bContents = document.getElementsByClassName("b_contents")[0];
  var basicFoot = document.getElementsByClassName("basic_foot")[0];
  // var coverImg = document.getElementsByClassName("wrap_cover")[0];
  var boxShadows = document.getElementsByClassName("box-shadow");
  var prevScrollTop = 0;
  var height = window.screen.height / 2;
  var wrapBody = document.getElementById("body_frame");
  var coverFull = document.getElementById("cover_full");
  var introImg = document.getElementById("intro_img");
  var linkImg = document.getElementById("link_cover_full");
  var body = document.body;

  var flag = false;
  var state = 0;

  // pull to link event
  const pStart = { x: 0, y: 0 };
  const pCurrent = { x: 0, y: 0 };

  const cards = document.querySelectorAll(".wrap_body_frame");
  const main = document.querySelector("body > div");
  let isLoading = false;

  function loading() {
    console.log("loading");

    // isLoading = true;
    // main.style.transform = "translateY(0px)";
    // setTimeout(() => {
    //   main.style.transform = "translateY(-100px)";
    //   isLoading = false;
    //   for (const card of cards) {
    //     card.style.transform = "rotateX(0deg)";
    //   }
    // }, 500);
  }

  function swipeStart(e) {

    if (typeof e["targetTouches"] !== "undefined") {
      let touch = e.targetTouches[0];
      pStart.x = touch.screenX;
      pStart.y = touch.screenY;
    } else {
      pStart.x = e.screenX;
      pStart.y = e.screenY;
    }
    console.log("swipeStart", pStart.x, pStart.y);

  }

  // 화면 하단 당겼다 놓았을때 하단이미지 활성화시킴
  function swipeEnd(e) {
    console.log("swipeEnd");

    if(Math.round(document.body.scrollHeight - window.scrollY - window.innerHeight) < 0 ) {
      var scrollPos = Math.round(document.body.scrollHeight - window.scrollY - window.innerHeight);
    } else {
      var scrollPos = window.innerHeight - Math.round(document.body.scrollHeight - window.scrollY - window.innerHeight);
    }

    console.log("스크롤 위치: ", document.body.scrollHeight, window.scrollY, scrollPos);
  
    if (linkImg.scrollHeight == window.innerHeight) {
      console.log("하단 활성화 된 후", linkImg.style.scrollHeight, window.innerHeight);

      linkImg.style.transform = "translateY(0%)";
      linkImg.style.display = "none";
      linkImg.style.height = "0";

    } else if (scrollPos == window.innerHeight) {
      console.log("swipeEnd - 하단 열림");

      linkImg.style.display = "block";
      linkImg.style.height = "100vh";

      setTimeout(() => {
        linkImg.style.transform = "translateY(-100%)";
      }, 30);
    }
  }

  // 화면 하단 이미지 비/활성화
  function swipe(e) {
    console.log("swipe");

    if (linkImg.style.scrollHeight == window.innerHeight) {
      console.log("하단 활성화 된 후");
      linkImg.style.bottom = "";
      linkImg.style.display = "none";
    } else {
      // var currentPercentage =
      // (window.scrollY / (body.scrollHeight - window.screen.height - basicFoot.scrollHeight - linkImg.scrollHeight)) * 100;

      // Array.from(boxShadows).forEach(function (element, index, array) {
      //   if (!element.classList.contains("box-shadow-active") && element.offsetTop < document.documentElement.scrollTop + height) {
      //     element.classList.add("box-shadow-active");
      //   }
      // });

      // // scroll progress bar
      // document.getElementsByClassName("progress-bar")[0].style.width = currentPercentage + "%";

      // // 좋아요 공유버튼 이벤트 sticky
      // if (document.documentElement.scrollTop == 0 || Math.round(window.scrollY) == document.body.scrollHeight) {
      //   basicFoot.classList.remove("sticky");
      // } else if (document.documentElement.scrollTop < window.screen.height) {
      //   basicFoot.classList.add("sticky");
      // } else {
      //   basicFoot.classList.add("sticky");
      // }

      // // scroll에 따른 main cover image height
      // coverFull.style.height = window.innerHeight - document.documentElement.scrollTop + "px";
    }
  }

  // document.addEventListener("touchstart", (e) => swipeStart(e), false);
  // document.addEventListener("touchmove", (e) => swipe(e), false);
  document.addEventListener("touchend", (e) => swipeEnd(e), {passive: true});

  document.addEventListener("scroll", function (event) {
    // var basicFootBottom = Math.round(basicFoot.getBoundingClientRect().bottom);
    var currentPercentage =
      (window.scrollY / (body.scrollHeight - window.screen.height - basicFoot.scrollHeight - linkImg.scrollHeight)) * 100;

    switch (state) {
       // 하단 비활성일때 - 메인상태
      case 0:
        Array.from(boxShadows).forEach(function (element, index, array) {
          if (!element.classList.contains("box-shadow-active") && element.offsetTop < document.documentElement.scrollTop + height) {
            element.classList.add("box-shadow-active");
          }
        });

        // scroll progress bar
        document.getElementsByClassName("progress-bar")[0].style.width = currentPercentage + "%";

        // 좋아요 공유버튼 이벤트 sticky
        if (document.documentElement.scrollTop == 0 || Math.round(window.scrollY) == document.body.scrollHeight) {
          basicFoot.classList.remove("sticky");
        } else if (document.documentElement.scrollTop < window.screen.height) {
          basicFoot.classList.add("sticky");
        } else {
          basicFoot.classList.add("sticky");
        }

        // scroll에 따른 main cover image height
        coverFull.style.height = window.innerHeight - document.documentElement.scrollTop + "px";
        console.log("메인이미지: ", coverFull.style.height);
        // coverFull.style.height = wrapBody.getBoundingClientRect().top + "px";
        // coverFull.style.filter = window.innerHeight - document.documentElement.scrollTop + "px";
        break;

       // 하단이미지 활성화상태일때
      case 1:
        swipeEnd(event);
        break;
      case 2: // 하단이미지 비활성
        console.log("state: ", state);
        break;
    }

    // var bodyHeight = body.scrollHeight - basicFoot.scrollHeight - linkImg.scrollHeight;
    // var scrolledY = window.scrollY - basicFoot.scrollHeight - linkImg.scrollHeight;

    // 화면 하단 비활성화
    // if (flag && linkImg.style.bottom.split("px")[0] < 0) {
    //   state = 2;
    // }
    // 화면의 하단이 5% 보이면 하단 활성화
    // else if (((body.clientHeight - basicFootBottom) / body.clientHeight) * 100 > 5) {

    if (linkImg.style.display == "block") {
      state = 1;
    } else if (linkImg.style.bottom == "") {
      state = 0;
    }
  });

  // 좋아요 이벤트
  var heartClickEvent = document.querySelector("#imgHeart");
  heartClickEvent.addEventListener("click", function () {
    this.classList.toggle("heart_active");
  });
};
