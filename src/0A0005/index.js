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

  var flag = "";
  var state = 0;
  var prevCurrent = 0;
  var isUp = true;

  // 화면 하단 비활성화
  function swipeEnd(e) {
    linkImg.style.display = "none";

    setTimeout(() => {
      basicFoot.style.backgroundColor = "white";
      document.getElementsByClassName("progress-bar")[0].style.display = "";
    }, 30);

    flag = 2;

    console.log("swipeEnd");
  }

  // 화면 하단 이미지 활성화
  function swipe(e) {
    console.log("swipe");

    linkImg.style.display = "block";

    window.scrollTo({ top: document.getElementById("link_cover_full").offsetTop, behavior: "smooth" });
    flag = 1;
    e.stopPropagation();
    e.preventDefault();

    basicFoot.style.backgroundColor = "transparent";
    document.getElementsByClassName("progress-bar")[0].style.display = "none";
  }

  var prevCoverSize = 0;

  document.addEventListener("scroll", function (event) {
    // 스크롤 방향 감지
    if (prevScrollTop > document.documentElement.scrollTop) {
      console.log("Up");
      prevScrollTop = document.documentElement.scrollTop;

      isUp = true;
    } else if (prevScrollTop <= document.documentElement.scrollTop) {
      console.log("Down");
      prevScrollTop = document.documentElement.scrollTop;
      isUp = false;
    } else {
      console.log("no up and down");
    }
    console.log("isUp: ", isUp);

    var currentPercentage = window.scrollY / (body.scrollHeight - window.screen.height - linkImg.scrollHeight) * 100;

    // console.log("currentPercentage: ", currentPercentage);

    // 하단 비활성화시키기(활성화된 상태에서 스크롤링 될때만)
    if (flag == 1 && isUp) {
      state = 2;
    } else if (
      // 활성화 시키기(활성화된 상태가 아닐때만)
      !isUp &&
      flag != 1 &&
      currentPercentage >= 99
    ) {
      state = 1;
    } else {
      state = 0;
    }
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
        // if(coverFull.style.height != window.innerHeight - document.documentElement.scrollTop && window.innerHeight < document.documentElement.scrollTop){
        console.log("document.getElementById(intro_img).style.backgroundSize ", document.getElementById("intro_img").style.backgroundSize);
        console.log("document.getElementById(body_frame).offsetTop ", document.getElementById("body_frame").offsetTop);
        console.log("document.documentElement.scrollTop ", document.documentElement.scrollTop);
        if (document.getElementById("body_frame").offsetTop > document.documentElement.scrollTop) {
          prevCoverSize = window.innerHeight - document.documentElement.scrollTop;
          coverFull.style.height = prevCoverSize + "px";
        }

        console.log("state: ", state);
        break;

      // 하단이미지 활성화시킬때
      case 1:
        console.log("state: ", state);
        console.log("swipe");

        setTimeout(() => {
          swipe(event);
        }, 1000);

        break;
      case 2: // 하단이미지 비활성
        console.log("state: ", state);
        swipeEnd(event);
        break;
    }

    // console.log("currentPercentage: ", currentPercentage, wrapBody.getBoundingClientRect().bottom + basicFoot.scrollHeight);
    // // console.log("link img offsetTop: ", document.getElementById("link_cover_full").offsetTop);
    // console.log("state 기준: ", window.innerHeight - Math.round(linkImg.getBoundingClientRect().top));
    // console.log("state : ", state);
    console.log("flag: ", flag);
  });

  // 좋아요 이벤트
  var heartClickEvent = document.querySelector("#imgHeart");
  heartClickEvent.addEventListener("click", function () {
    this.classList.toggle("heart_active");
  });
};
