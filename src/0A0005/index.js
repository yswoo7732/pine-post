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
  var basicLinkFoot = document.getElementsByClassName("basic_link_foot")[0];
  var wrapCover = document.getElementsByClassName("wrap_cover")[0];
  var boxShadows = document.getElementsByClassName("box-shadow");
  var prevScrollTop = 0;
  var height = window.screen.height / 4;
  var wrapBody = document.getElementById("body_frame");
  var coverFull = document.getElementById("cover_full");
  var link_title = document.getElementById("link_title");
  var linkImg = document.getElementById("link_cover_full");
  var body = document.body;

  var flag = "";
  var state = 0;
  var prevCurrent = 0;
  var isUp = true;
  var onSwipe = false;

  // 화면 하단 비활성화
  function swipeEnd(e) {
    basicLinkFoot.style.display = "none";

    linkImg.style.display = "none";
    basicFoot.style.display = "flex";
    document.getElementsByClassName("progress-bar")[0].style.display = "";

    setTimeout(() => {
      basicFoot.style.backgroundColor = "white";
    }, 30);

    console.log("swipeEnd");
  }

  // 화면 하단 이미지 활성화
  function swipe(e) {
    console.log("swipe: ", document.getElementById("link_cover_full").offsetTop);
    linkImg.style.display = "block";

    console.log(document.getElementById("link_cover_full").offsetTop);
    // window.scrollTo({ top: document.getElementById("link_cover_full").offsetTop, behavior: "smooth" });

    var i = window.scrollY + 200;
    var int = setInterval(function () {
      console.log("i: ", i);
      window.scrollTo(0, i);

      if (i >= linkImg.offsetTop) {
        // linkImg.classList.add("ani-img");

        window.scrollTo(0, linkImg.offsetTop);
        basicFoot.style.display = "none";
        basicLinkFoot.style.display = "flex";
        clearInterval(int);
        // coverFull.style.zIndex = 0;
      }
      i += 5;
    }, 5);

    document.getElementsByClassName("progress-bar")[0].style.display = "none";
    console.log("yyyyyyyyyyyyyyyyyyyyyyyyy");
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

    var currentPercentage = Math.round((window.scrollY / (body.scrollHeight - basicFoot.scrollHeight)) * 100) - 3;

    // console.log("window.scrollY: ", window.scrollY);
    // console.log("body.scrollHeight: ", body.scrollHeight);
    // console.log("currentPercentage: ", currentPercentage);

    // 하단 비활성화시키기(활성화된 상태에서 스크롤링 될때만)
    if (flag == 1 && isUp) {
      state = 2;
    }
    // 활성화 시키기(활성화된 상태가 아닐때만)
    else if (!isUp && flag != 1 && currentPercentage == 100) {
      state = 1;
    } else {
      state = 0;
    }

    switch (state) {
      // 하단 비활성일때 - 메인상태
      case 0:
        Array.from(boxShadows).forEach(function (element, index, array) {
          // console.log("element.offsetTop", element.offsetTop);
          // console.log("document.documentElement.scrollTop", document.documentElement.scrollTop);

          if (!element.classList.contains("box-shadow-active") && element.offsetTop + height < document.documentElement.scrollTop) {
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
        // console.log("document.getElementById(body_frame).offsetTop ", document.getElementById("body_frame").offsetTop);
        // console.log("document.documentElement.scrollTop ", document.documentElement.scrollTop);
        if (document.getElementById("body_frame").offsetTop > document.documentElement.scrollTop) {
          prevCoverSize = window.innerHeight - document.documentElement.scrollTop;
          coverFull.style.height = prevCoverSize + "px";
        }

        // console.log("state: ", state);
        break;

      // 하단이미지 활성화시킬때
      case 1:
        // console.log("state: ", state);
        console.log("swipe");

        setTimeout(() => {
          swipe(event);
        }, 1500);

        flag = 1;
        break;
      case 2: // 하단이미지 비활성
        // console.log("state: ", state);
        swipeEnd(event);
        flag = 2;
        break;
    }

    // console.log("currentPercentage: ", currentPercentage, wrapBody.getBoundingClientRect().bottom + basicFoot.scrollHeight);
    // // console.log("link img offsetTop: ", document.getElementById("link_cover_full").offsetTop);
    // console.log("state 기준: ", window.innerHeight - Math.round(linkImg.getBoundingClientRect().top));
    // console.log("state : ", state);
    console.log("flag: ", flag);
  });

  
  link_title.addEventListener("touchstart", function(event) {
    console.log("touch!!!");
    // background-color: rgba(255, 255, 255, 0.8);
    // color: #333333;
  });
  
  // 좋아요 이벤트
  var heartClickEvent = document.querySelector("#imgHeart");
  heartClickEvent.addEventListener("click", function () {
    this.classList.toggle("heart_active");
  });
};
