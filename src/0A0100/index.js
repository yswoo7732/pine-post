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
  var boxShadows = document.getElementsByClassName("box-shadow");
  var height = window.screen.height / 2;
  var prevScrollTop = 0;
  var wrap_body = document.getElementById("body_frame");

  var state = 0;

  document.addEventListener("scroll", function (event) {
    console.log("메인상태              : ", window.innerHeight, document.documentElement.scrollTop, window.scrollY);
    console.log("wrap_body_frame 바텀 : ", Math.round(document.getElementById("body_frame").offsetTop), document.documentElement.scrollTop, window.scrollY);
    console.log("link_cover_full 탑  : ", Math.round(document.getElementById("link_cover_full").getBoundingClientRect().top), document.documentElement.scrollTop, window.scrollY);

    switch (state) {
      case 0:
        // 하단이미지 비활성
        // box shadow
        Array.from(boxShadows).forEach(function (element, index, array) {
          // console.log("box shadow: ",element.offsetTop + element.offsetWidth)
          // console.log("window.scrollY: ",window.scrollY)
          if (
            !element.classList.contains("box-shadow-active") &&
            element.offsetTop + element.offsetWidth < window.scrollY
          ) {
            element.classList.add("box-shadow-active");
          }
        });

        var currentPercentage = (window.scrollY / (document.body.scrollHeight - window.screen.height)) * 100;

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
        document.getElementById("cover_full").style.height = window.innerHeight - document.documentElement.scrollTop + "px";

        var link_opc = (document.getElementById("link_img").offsetHeight -
          document.getElementsByClassName("wrap_cover")[0].getBoundingClientRect().bottom) /
          document.getElementById("link_img").offsetHeight;

        // 하단 타이틀
        // document.getElementById("link_title").style.opacity = link_opc;

        // scroll 맨마지막일때 - 하단 열기 준비
        if (currentPercentage >= 100) {
          console.log("bottom!");
          state = 1;
          // }
        }
        break;
      case 1:
        // 하단이미지 활성
        // basicFoot.style.display = "none";

        // document.getElementsByClassName("wrap_body_frame")[0].style.position = "fixed";
        // document.getElementsByClassName("wrap_body_frame")[0].style.bottom = 0;

        // document.getElementById("link_cover_full").style.display = "block";
        // document.getElementById("link_cover_full").style.position = "absolute";
        // document.getElementById("link_cover_full").style.zIndex = 60;
        // document.getElementById("link_cover_full").style.top = window.innerHeight - document.documentElement.scrollTop + "px";
        // document.getElementById("link_cover_full").style.height = 100 + "vh";
        break;
      case 2:
        break;
    }


    if (document.getElementById("link_cover_full").getBoundingClientRect().top < window.innerHeight) {
      // 하단 연 상태
      // document.getElementById("link_cover_full").style.top = window.innerHeight - document.documentElement.scrollTop + "px";
      // document.getElementById("link_cover_full").style.height = 100 + "vh";

      // prevScrollTop = window.scrollY;
    }
    if (document.documentElement.scrollTop == 0 && document.getElementById("link_cover_full").getBoundingClientRect().top >= window.innerHeight) {
      // 하단 이미지가 내려갔을때

      // basicFoot.style.display = "";

      // document.getElementsByClassName("wrap_body_frame")[0].style.position = "";
      // document.getElementsByClassName("wrap_body_frame")[0].style.bottom = "";

      // document.getElementById("link_cover_full").style.position = "absolute";
      // document.getElementById("link_cover_full").style.top = "";
      // // document.getElementById("link_cover_full").style.zIndex = 0;
      // document.getElementById("link_cover_full").style.height = 5 + "vh";

      // window.scrollTo(0, prevScrollTop);

    }
    else {

    }


  });

  // 좋아요 이벤트
  var heartClickEvent = document.querySelector("#imgHeart");
  heartClickEvent.addEventListener("click", function () {
    this.classList.toggle("heart_active");
  });
};
