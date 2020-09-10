function fitScreeSize() {
  console.log("document.body.clientWidth", document.body.clientWidth);
  console.log("document.body.clientWidth", document.body.clientWidth);
  console.log("document.body.scrollWidth", document.body.scrollWidth);
  console.log("document.body.clientHeight", document.body.clientHeight);
  console.log("document.body.scrollHeight", document.body.scrollHeight);
  console.log("window.innerWidth", window.innerWidth);
  console.log("window.innerHeight", window.innerHeight);
  console.log("window.screen.width", window.screen.width);
  console.log("window.screen.height", window.screen.height);
  console.log("window.screen.availWidth", window.screen.availWidth);
  console.log("window.screen.availHeight", window.screen.availHeight);
  console.log("window.outerHeight", window.outerHeight);
  console.log("window.devicePixelRatio", window.devicePixelRatio);
  console.log("navigator.userAgent", navigator.userAgent);
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
  } else {
    console.log("not mobile");
  }
}

window.onload = function () {
  fitScreeSize();
  var swiper_h = new Swiper(".swiper-container-v", {
    direction: "vertical",
    initialSlide: 0,
    allowTouchMove: true,
    on: {
      slideChange: function (sp) {
        switch (sp.activeIndex) {
          default:
            console.log("switch default activeIndex:", sp.activeIndex);
        }
      },
    },
    pagination: {
      el: ".swiper-pagination",
      type: "custom",
      renderCustom: function (swiper, current, total) {
        return (
          '<div class="custom-pagination"> <div style="font-weight: bold;">' +
          ("0" + current).slice(-2) +
          '</div> <div class="rectangle"></div> ' +
          ("0" + total).slice(-2) +
          "</div>"
        );
      },
    },
  });

  var swiper_v = new Swiper(".swiper-container-h", {
    initialSlide: 0,
    allowTouchMove: true,
    on: {
      slideChange: function (sp) {
        switch (sp.activeIndex) {
          default:
            console.log("switch default activeIndex:", sp.activeIndex);
        }
      },
    },
    pagination: {
      el: ".swiper-pagination",
      type: "custom",
      renderCustom: function (swiper, current, total) {
        return (
          '<div class="custom-pagination"> <div style="font-weight: bold;">' +
          ("0" + current).slice(-2) +
          '</div> <div class="rectangle"></div> ' +
          ("0" + total).slice(-2) +
          "</div>"
        );
      },
    },
  });

  // window.addEventListener("scroll", function (event) {
  //   console.log(event);
  // });

  console.log("document.body.clientWidth", document.body.clientWidth);
  console.log("document.body.clientWidth", document.body.clientWidth);
  console.log("document.body.scrollWidth", document.body.scrollWidth);
  console.log("document.body.clientHeight", document.body.clientHeight);
  console.log("document.body.scrollHeight", document.body.scrollHeight);
  console.log("window.innerWidth", window.innerWidth);
  console.log("window.innerHeight", window.innerHeight);
  console.log("window.screen.width", window.screen.width);
  console.log("window.screen.height", window.screen.height);
  var scrollingElement = document.scrollingElement || document.body;

  console.log(
    "scrollingElement.scrollWidth - window.innerWidth / 2",
    window.innerWidth / 2 - scrollingElement.scrollWidth / 2
  );

  console.log(
    "scrollingElement.scrollHeight - window.innerHeight / 2",
    window.innerHeight / 2 - scrollingElement.scrollHeight / 2
  );

  window.scroll({
    left: Math.abs(window.innerWidth / 2 - scrollingElement.scrollWidth / 2),
    top: Math.abs(window.innerHeight / 2 - scrollingElement.scrollHeight / 2),
    behavior: "smooth",
  });
};
