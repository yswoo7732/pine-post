window.onload = function () {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    document.getElementsByClassName("container")[0].classList.add("border_none");
  }

  var bContents = document.getElementsByClassName("b_contents")[0];
  var basicFoot = document.getElementsByClassName("basic_foot")[0];
  var boxShadows = document.getElementsByClassName("box-shadow");
  var height = window.screen.height / 2;
  var prevScrollTop = 0;
  document.body.addEventListener("scroll", function (event) {
    Array.from(boxShadows).forEach(function (element, index, array) {
      if (
        !element.classList.contains("box-shadow-active") &&
        element.offsetTop < document.body.scrollTop + height
      ) {
        console.log("document.body.scrollTop", document.body.scrollTop);
        console.log("element.offsetTop", index, element.offsetTop);
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
  });

  var heartClickEvent = document.querySelector("#imgHeart");
  heartClickEvent.addEventListener("click", function () {
    console.log("heartClickEvent");
    this.classList.toggle("heart_active");
  });
};
