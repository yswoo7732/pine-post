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

  // 화면 하단 비활성화
  function swipeEnd(e) {
    // e.stopPropagation();
    window.scrollTo({ top: document.documentElement.scrollHeight * 0.5, behavior: "smooth" });
    e.stopPropagation();

    setTimeout(() => {
      basicFoot.style.backgroundColor = "white";
      document.getElementsByClassName("progress-bar")[0].style.display = "";
    }, 3000);

    console.log("swipeEnd");
  }

  // 화면 하단 이미지 활성화
  function swipe(e) {

    console.log("swipe");

    e.stopPropagation();
    window.scrollTo({ top: document.getElementById("link_cover_full").offsetTop, behavior: "smooth" });
    e.stopPropagation();
    // document.documentElement.scrollTop = document.getElementById("link_cover_full").offsetTop;
    basicFoot.style.backgroundColor = "transparent";
    document.getElementsByClassName("progress-bar")[0].style.display = "none";
  }


  // if(window.scrollY - document.getElementById("link_cover_full").offsetTop == Math.round(basicFoot.height)) {
    

  document.addEventListener("scroll", function (event) {
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
        flag = "";
        break;

      // 하단이미지 활성화시킬때
      case 1:
        console.log("state: ", state);
        // setTimeout(() => {
        swipe(event);
        // }, 300);
        flag = true;
        break;
      case 2: // 하단이미지 비활성
        console.log("state: ", state);
        flag = false;

        swipeEnd(event);
        // console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        break;
    }

    console.log("currentPercentage: ", currentPercentage, wrapBody.getBoundingClientRect().bottom + basicFoot.scrollHeight);
    // console.log("link img offsetTop: ", document.getElementById("link_cover_full").offsetTop);
    console.log("state 기준: ", window.innerHeight - Math.round(linkImg.getBoundingClientRect().top));
    console.log("state : ", state);
    console.log("flag: ", flag);

    // 하단 활성화시키기

    // else if(flag && Math.round(linkImg.getBoundingClientRect().top) <= 40 && Math.round(linkImg.getBoundingClientRect().top) >= 10) {
    if (document.getElementsByClassName("progress-bar")[0].style.display == "none" && flag == true) {
      console.log("state22 : ", state);

      state = 2;
      // event.preventDefault();
      // event.stopPropagation();
    } 
    else if (
      !flag &&
      window.innerHeight - Math.round(linkImg.getBoundingClientRect().top) >= 100 &&
      window.innerHeight - Math.round(linkImg.getBoundingClientRect().top) <= 300 &&
      document.getElementsByClassName("progress-bar")[0].style.display != "none"
    ) {
      // state = 1;
      // event.preventDefault();
      // event.stopPropagation();
    } 
  });

  // 좋아요 이벤트
  var heartClickEvent = document.querySelector("#imgHeart");
  heartClickEvent.addEventListener("click", function () {
    this.classList.toggle("heart_active");
  });
};
