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
  var prevScrollTop = 0;
  var height = window.screen.height / 2;
  var wrapBody = document.getElementById("body_frame");
  var coverImg = document.getElementById("cover_full");
  var linkImg = document.getElementById("link_cover_full");
  var body = document.body;

  var flag = false;
  var state = 0;

  document.addEventListener("scroll", function (event) {
    var basicFootBottom = Math.round(basicFoot.getBoundingClientRect().bottom);
    var currentPercentage =
      (window.scrollY / (body.scrollHeight - window.screen.height - basicFoot.scrollHeight - linkImg.scrollHeight)) * 100;

    console.log("state: ", state);
    switch (state) {
      case 0: // 하단 비활성
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
        coverImg.style.height = window.innerHeight - document.documentElement.scrollTop + "px";
        coverImg.style.filter = window.innerHeight - document.documentElement.scrollTop + "px";

        break;

      case 1: // 하단이미지 활성
        linkImg.style.bottom = window.innerHeight - Math.round(body.scrollHeight - window.scrollY - window.innerHeight) + "px";
        console.log("하단 높이: ", ((body.clientHeight - basicFootBottom) / body.clientHeight) * 100);
        flag = true;
        break;
      case 2: // 하단이미지 비활성
        console.log("state: ", state);
        linkImg.style.bottom = "";
        break;
    }

    // var bodyHeight = body.scrollHeight - basicFoot.scrollHeight - linkImg.scrollHeight;
    // var scrolledY = window.scrollY - basicFoot.scrollHeight - linkImg.scrollHeight;

    // 화면 하단 비활성화
    if (flag && linkImg.style.bottom.split("px")[0] < 0) {
      state = 2;
    }
    // 화면의 하단이 5% 보이면 하단 활성화
    else if (((body.clientHeight - basicFootBottom) / body.clientHeight) * 100 > 5) {
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
