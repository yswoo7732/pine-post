window.onload = function () {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    // document
    //   .getElementsByClassName("container")[0]
    //   .classList.add("border_none");
  }

  // var swiper = new Swiper(".swiper-container", {
  //   direction: "horizontal",
  //   initialSlide: 0,
  //   on: {
  //     slideChange: function (sp) {
  //       switch (sp.activeIndex) {
  //         case 1:
  //           break;
  //         case 2:
  //           break;
  //         case 3:
  //           break;
  //         default:
  //           console.log("switch default activeIndex:", sp.activeIndex);
  //       }
  //     },
  //   },
  //   pagination: {
  //     el: ".swiper-pagination",
  //   },
  // });

  var bContents = document.getElementsByClassName("b_contents")[0];
  var basicFoot = document.getElementsByClassName("basic_foot")[0];
  var boxShadows = document.getElementsByClassName("box-shadow");
  var height = window.screen.height / 2;
  var prevScrollTop = 0;
  var wrap_body = document.getElementById("body_frame");
  console.log("touchsssend");

  document.addEventListener("scroll", function (event) {
    Array.from(boxShadows).forEach(function (element, index, array) {
      if (
        !element.classList.contains("box-shadow-active") &&
        document.documentElement.scrollTop < window.screen.height
      ) {
        element.classList.add("box-shadow-active");
      }
    });

    if (document.documentElement.scrollTop == 0 || document.documentElement.scrollTop > document.getElementById("body_frame").offsetHeight) {
      basicFoot.classList.remove("sticky");
    } else if (document.documentElement.scrollTop < window.screen.height) {
      basicFoot.classList.add("sticky");
    } else {
      basicFoot.classList.add("sticky");
    }

    // var currentPercentage = (window.scrollY / (document.body.scrollHeight - window.screen.height)) * 100;
    var currentPercentage =
      (window.scrollY / (document.body.scrollHeight - window.screen.height)) *
      100;

    document.getElementsByClassName("progress-bar")[0].style.width =
      currentPercentage + "%";
    console.log("document.body.scrollTop", document.documentElement.scrollTop);
    console.log("element.offsetTop", document.body.scrollHeight);
    // if (
    //   bContents.offsetTop - window.innerHeight <
    //   document.documentElement.scrollTop
    // ) {
    //   if (basicFoot.classList.contains("sticky")) {
    //     basicFoot.classList.remove("sticky");
    //   }
    // } else if (prevScrollTop > document.body.scrollTop) {
    //   console.log("Up");
    //   prevScrollTop = document.body.scrollTop;
    //   if (!basicFoot.classList.contains("sticky")) {
    //     basicFoot.classList.add("sticky");
    //   }
    // } else if (prevScrollTop <= document.body.scrollTop) {
    //   console.log("Down");
    //   prevScrollTop = document.body.scrollTop;
    //   if (basicFoot.classList.contains("sticky")) {
    //     basicFoot.classList.remove("sticky");
    //   }
    // } else {
    //   basicFoot.classList.remove("sticky");
    // }

    document.getElementById("cover_full").style.height =
      window.innerHeight - document.documentElement.scrollTop + "px";

    // document.getElementById("cover_full").innerHeight = window.innerHeight - document.documentElement.scrollTop + "px";

    // document.getElementById("wrap_body").style.top = (document.body.scrollTop / 10) + 'px';
    // document.getElementById("wrap_body").style.opacity = 1 - (document.body.scrollTop / 400);
    // document.getElementById("wrap_body").style.backgroundPosition = 'center' + (- document.body.scrollTop / 2) + 'px';
  });

  var heartClickEvent = document.querySelector("#imgHeart");
  heartClickEvent.addEventListener("click", function () {
    // console.log("heartClickEvent");
    this.classList.toggle("heart_active");
  });
};
