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
  var a = false;

  document.addEventListener("scroll", function (event) {
    Array.from(boxShadows).forEach(function (element, index, array) {
      if (
        !element.classList.contains("box-shadow-active") &&
        element.offsetTop + element.offsetWidth < window.scrollY
      ) {
        element.classList.add("box-shadow-active");
      }
    });

    var currentPercentage =
      (window.scrollY / (document.body.scrollHeight - window.screen.height)) *
      100;

    document.getElementsByClassName("progress-bar")[0].style.width =
      currentPercentage + "%";

    if (
      document.documentElement.scrollTop == 0 ||
      Math.round(window.scrollY) == document.body.scrollHeight
    ) {
      basicFoot.classList.remove("sticky");
      console.log("no sticky");
    } else if (document.documentElement.scrollTop < window.screen.height) {
      basicFoot.classList.add("sticky");
    } else {
      basicFoot.classList.add("sticky");
    }

    // console.log("document.body.scrollTop", document.documentElement.scrollTop);
    // console.log("element.offsetTop", document.body.scrollHeight);

    document.getElementById("cover_full").style.height =
      window.innerHeight - document.documentElement.scrollTop + "px";

    //   if (window.scrollY   >= 2662) {
    //     console.log("ddd");
    //     console.log(window.scrollY);
    //     console.log(document.documentElement.scrollTop);
    // document.getElementById("link_cover_full").style.display = 'block';
    // document.getElementById("link_cover_full").classList.add('link_cover_full-active');
    // document.getElementsByClassName("link_cover_full-active")[0].style.top = document.documentElement.scrollTop + "px";

    // // document.getElementsByClassName("link_cover_full-active")[0].animate({
    // //   transform: 'translateY(0%)'}, 5000, {
    // //     complete: function() {
    // //     console.log("dddsdffsdfd");
    // //     document.getElementsByClassName("link_cover_full-active")[0].style.transform = 'initial';
    // //     }
    // // });
    // // animation complete!!!!!!!
    // // $('#clickme').click(function() { $('#book').animate({ opacity: 0.25, left: '+=50', height: 'toggle' }, 5000, function() { // Animation complete. }); });

    //   }
    // document.getElementById("link_img").style.height =
    //   document.documentElement.scrollTop -
    //   document.getElementById("body_frame").offsetHeight +
    //   "px";
    // console.log("window.scrollY + window.innerHeight", window.scrollY);
    // console.log("document.body.scrollHeight", document.body.scrollHeight);
    // if( window.scrollY >= document.body.scrollHeight - window.innerHeight ) {
    if (Math.round(window.scrollY) >= document.body.scrollHeight) {
      console.log("@@a: ", a);
      if (!a) {
        document.getElementsByClassName("wrap_body_frame")[0].style.position =
          "fixed";
        document.getElementsByClassName("wrap_body_frame")[0].style.bottom = 0;
        // // document.getElementsByClassName("wrap_body")[0].style.bottom = 0;
        basicFoot.style.display = "none";
        // // basicFoot.style.bottom = 0;
        document.getElementById("link_cover_full").style.display = "block";
        // document.getElementById("link_cover_full").style.height = 'auto';
        document.getElementById("link_cover_full").style.position = "relative";
        document.getElementById("link_cover_full").style.zIndex = 60;
        document.getElementById("link_cover_full").style.top =
          window.innerHeight - document.documentElement.scrollTop + "px";
        document.getElementById("link_cover_full").style.height = 100 + "vh";

       

      }
    }
    // document.getElementById("link_cover_full").style.bottom = document.body.scrollHeight - Math.round(document.documentElement.scrollTop) + 'px';
    console.log("op", document.documentElement.scrollTop / window.innerHeight);

    // if ()
    //  console.log(document.documentElement.scrollTop)

    if (
      document.getElementById("link_cover_full").style.zIndex == 60 &&
      document.getElementById("link_cover_full").getBoundingClientRect().top ==
        0
    ) {
      a = true;
    }
    if (
      document.documentElement.scrollTop == 0 &&
      a
    ) {
      if (a) {
        console.log("down");
        console.log(a);
        // document.getElementsByClassName("wrap_body_frame")[0].style.bottom = '';
        basicFoot.style.display = "";
        // basicFoot.classList.add("sticky");
        // //     // // basicFoot.style.bottom = 0;
        document.getElementById("link_cover_full").style.position = "";
        document.getElementById("link_cover_full").style.zIndex = 0;

        document.getElementById("link_cover_full").style.height = 5 + "vh";
        document.getElementsByClassName("wrap_cover")[0].style.position = "";
        document.getElementsByClassName("wrap_body_frame")[0].style.position = "";
        a = false;
        // document.documentElement.scrollTop = prevScrollTop;
      }

      // document.getElementById("link_cover_full").style.height = 'auto';
      // document.getElementById("link_cover_full").style.position = "relative";
      // document.getElementById("link_cover_full").style.zIndex = 60;
    } else {
      //  console.log("up");
    }

    // document.getElementById("link_img").style.height =
    //   window.scrollY -
    //   document.getElementById("body_frame").clientHeight -
    //   basicFoot.clientHeight +
    //   "px";

    // document.getElementById("link_img").style.height =
    //   window.innerHeight -
    //   document.getElementById("link_img").getBoundingClientRect().top +
    //   "px";

    // console.log(document.documentElement.scrollTop -
    //   document.getElementById("body_frame").offsetHeight +
    //   "px")
    if (!basicFoot.classList.contains("sticky")) {
      // document.getElementById("progressBar").style.width = 0;
    }

    if (
      document.getElementById("link_img").getBoundingClientRect().top >
      window.innerHeight
    ) {

      // document.getElementById("link_cover_full").style.display = 'none';
      // document.getElementsByClassName("wrap_body_frame")[0].style.position =
      //   "relative";
      // document.getElementsByClassName("wrap_body_frame")[0].style.bottom = 0;
      // // // document.getElementsByClassName("wrap_body")[0].style.bottom = 0;
      // basicFoot.style.display = "none";
    }
    // var title_opc =
    //   (document.getElementById("cover_full").offsetHeight -
    //     window.scrollY / 2) /
    //   document.getElementById("cover_full").offsetHeight;
    // // document.getElementById("cover_title").style.opacity = title_opc;
    var link_opc =
      (document.getElementById("link_img").offsetHeight -
      document.getElementsByClassName("wrap_cover")[0].getBoundingClientRect().bottom) /
      document.getElementById("link_img").offsetHeight;

    console.log("opacity: ", link_opc);
    document.getElementById("link_title").style.opacity = link_opc;
  });

  var heartClickEvent = document.querySelector("#imgHeart");
  heartClickEvent.addEventListener("click", function () {
    this.classList.toggle("heart_active");
  });
};
