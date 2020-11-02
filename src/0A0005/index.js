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
  var cover_flag = true;

  document.addEventListener("scroll", function (event) {
    
    // scroll 맨마지막일때 - 하단 열기 준비
    if (Math.round(window.scrollY) >= document.body.scrollHeight && cover_flag) {
      cover_flag = false;

      console.log("하단 열기 준비: ", cover_flag)

      if (!cover_flag) {
        basicFoot.style.display = "none";

        document.getElementsByClassName("wrap_body_frame")[0].style.position = "fixed";
        document.getElementsByClassName("wrap_body_frame")[0].style.bottom = 0;
        
        document.getElementById("link_cover_full").style.display = "block";
        document.getElementById("link_cover_full").style.position = "relative";
        document.getElementById("link_cover_full").style.zIndex = 60;
        document.getElementById("link_cover_full").style.top = window.innerHeight - document.documentElement.scrollTop + "px";
        document.getElementById("link_cover_full").style.height = 100 + "vh";
      }
    } else if(document.getElementById("link_cover_full").style.zIndex == 60 && document.getElementById("link_cover_full").getBoundingClientRect().top == 0) {
      // 하단 연 상태
      console.log("하단 연 상태")
      cover_flag = true;
    }

    // 하단 이미지가 내려갔을때
    else if (document.documentElement.scrollTop == 0 && cover_flag && document.getElementById("link_cover_full").style.zIndex == 60) {
      console.log("하단 이미지 내려갔을때: ", cover_flag);
      
      basicFoot.style.display = "";

      document.getElementById("link_cover_full").style.position = "";
      document.getElementById("link_cover_full").style.top = "";
      document.getElementById("link_cover_full").style.zIndex = 0;
      document.getElementById("link_cover_full").style.height = 5 + "vh";

      document.getElementsByClassName("wrap_body_frame")[0].style.position = "";
     
      // console.log("down: ", prevScrollTop);
      // cover_flag = false;
    } else {
      console.log("메인상태: ", cover_flag)
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
      document.getElementById("link_title").style.opacity = link_opc;
    }

    
  });

  // 좋아요 이벤트
  var heartClickEvent = document.querySelector("#imgHeart");
  heartClickEvent.addEventListener("click", function () {
    this.classList.toggle("heart_active");
  });
};
