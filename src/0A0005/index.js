window.onload = function () {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    // document
    //   .getElementsByClassName("container")[0]
    //   .classList.add("border_none");
  } else {
    console.log("not mobile");
    // var basicFoot = document.getElementsByClassName("basic_foot")[0];

    // basicFoot.style.top = 0;
    // basicFoot.style.position = 'absolute';
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

  document.addEventListener("scroll", function (event) {
    Array.from(boxShadows).forEach(function (element, index, array) {
      if (
        !element.classList.contains("box-shadow-active") &&
        element.offsetTop + basicFoot.offsetHeight < window.scrollY
      ) {
        console.log("document.body.scrollTop", window.scrollY + height);
        console.log("element.offsetTop", index, element.offsetTop);
        element.classList.add("box-shadow-active");
      }
    });

    var currentPercentage =
      (window.scrollY / (document.body.scrollHeight - window.screen.height)) *
      100;

    document.getElementsByClassName("progress-bar")[0].style.width =
      currentPercentage + "%";

    if (document.documentElement.scrollTop == 0 || currentPercentage > 100) {
      basicFoot.classList.remove("sticky");
    } else if (document.documentElement.scrollTop < window.screen.height) {
      basicFoot.classList.add("sticky");
    } else {
      basicFoot.classList.add("sticky");
    }

    // console.log("document.body.scrollTop", document.documentElement.scrollTop);
    // console.log("element.offsetTop", document.body.scrollHeight);

    document.getElementById("cover_full").style.height =
      window.innerHeight - document.documentElement.scrollTop + "px";

    // document.getElementById("link_img").style.height =
    //   document.documentElement.scrollTop -
    //   document.getElementById("body_frame").offsetHeight +
    //   "px";

    // document.getElementById("link_img").style.height =
    //   window.scrollY -
    //   document.getElementById("body_frame").clientHeight -
    //   basicFoot.clientHeight +
    //   "px";

    // document.getElementById("link_cover_full").style.height =
    //   window.innerHeight -
    //   document.getElementById("link_cover_full").getBoundingClientRect().top +
    //   "px";

    // console.log(document.documentElement.scrollTop -
    //   document.getElementById("body_frame").offsetHeight +
    //   "px")
    if (!basicFoot.classList.contains("sticky")) {
      document.getElementById("progressBar").style.width = 0;
    }

    var title_opc =
      (document.getElementById("cover_full").offsetHeight -
        window.scrollY / 2) /
      document.getElementById("cover_full").offsetHeight;
    document.getElementById("cover_title").style.opacity = title_opc;
    var link_opc =
      (document.getElementById("link_img").offsetHeight -
        basicFoot.getBoundingClientRect().bottom) /
      document.getElementById("link_img").offsetHeight;

    // console.log("opacity: ", link_opc);
    document.getElementById("link_title").style.opacity = link_opc;
  });

  var heartClickEvent = document.querySelector("#imgHeart");
  heartClickEvent.addEventListener("click", function () {
    this.classList.toggle("heart_active");
  });
};
