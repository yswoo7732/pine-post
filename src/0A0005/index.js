window.onload = function () {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    document
      .getElementsByClassName("container")[0]
      .classList.add("border_none");
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
      console.log("document.body.scrollTop", wrap_body.getBoundingClientRect().top);
      console.log("element.offsetTop", window.screen.height);

      if (
        !element.classList.contains("box-shadow-active") &&
        wrap_body.getBoundingClientRect().top < window.screen.height
      ) {
        // console.log("document.body.scrollTop", document.body.scrollTop);
        // console.log("element.offsetTop", index, element.offsetTop);
        element.classList.add("box-shadow-active");
      }
    });

    if (bContents.offsetTop - window.innerHeight < document.body.scrollTop) {
      if (basicFoot.classList.contains("sticky")) {
        basicFoot.classList.remove("sticky");
      }
    } else if (prevScrollTop > document.body.scrollTop) {
      console.log("Up");
      prevScrollTop = document.body.scrollTop;
      if (!basicFoot.classList.contains("sticky")) {
        basicFoot.classList.add("sticky");
      }
    } else if (prevScrollTop <= document.body.scrollTop) {
      console.log("Down");
      prevScrollTop = document.body.scrollTop;
      if (basicFoot.classList.contains("sticky")) {
        basicFoot.classList.remove("sticky");
      }
    } else {
      basicFoot.classList.remove("sticky");
    }

    // document.getElementById("wrap_body").style.top = (document.body.scrollTop / 10) + 'px';
    // document.getElementById("wrap_body").style.opacity = 1 - (document.body.scrollTop / 400);
    // document.getElementById("wrap_body").style.backgroundPosition = 'center' + (- document.body.scrollTop / 2) + 'px';
  });

  document.addEventListener("scroll", function (event) {
    // console.log(window.innerHeight);

    document.getElementById("cover_full").style.height =
      wrap_body.getBoundingClientRect().top + "px";

    console.log(wrap_body.getBoundingClientRect().top + 'px');
  });

  var heartClickEvent = document.querySelector("#imgHeart");
  heartClickEvent.addEventListener("click", function () {
    // console.log("heartClickEvent");
    this.classList.toggle("heart_active");
  });
};
