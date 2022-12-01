var console = window.console || { log: function () {} };
var ds_config;
var getMetaValue = (function () {
  var metas = {};
  var metaGetter = function (metaName) {
    wasDOMQueried = true;
    if (metas[metaName]) {
      wasDOMQueried = false;
    } else {
      Array.prototype.some.call(
        document.getElementsByTagName("meta"),
        function (el) {
          if (el.name === metaName) {
            metas[metaName] = el.content;
            return true;
          }
          if (el.getAttribute("property") === metaName) {
            metas[metaName] = el.content;
            return true;
          } else {
            metas[metaName] = "";
          }
        }
      );
    }
    // console.info("Q:wasDOMQueried? A:" + wasDOMQueried);
    // console.info(metas);
    // console.log(metas[metaName]);
    return metas[metaName];
  };
  return metaGetter;
})();

function goBack() {
  if (/Android/i.test(navigator.userAgent)) {
    window.AosConnector.requestExitMenu();
  }

  if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    webkit.messageHandlers.requestExitMenu.postMessage("");
  }
}

function isMobile() {
  var rtn = false;
  // if (window.innerWidth <= 640) {
  //     rtn = true;
  // }
  if (
    navigator.userAgent.match(
      /Android|Mobile|iP(hone|od|ad)|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/
    )
  ) {
    rtn = true;
  }
  return rtn;
}

function shuffle(a) {
  var j, x, i;
  for (i = a.length; i; i -= 1) {
    j = Math.floor(Math.random() * i);
    x = a[i - 1];
    a[i - 1] = a[j];
    a[j] = x;
  }
}

function getParameter(param) {
  var returnValue;
  var url = location.href;
  var parameters = url.slice(url.indexOf("?") + 1, url.length).split("&");

  for (var i = 0; i < parameters.length; i++) {
    var varName = parameters[i].split("=")[0];
    if (varName.toUpperCase() == param.toUpperCase()) {
      returnValue = parameters[i].split("=")[1];
      return decodeURIComponent(returnValue);
    }
  }
}

function sendSns(sns, url, txt) {
  var o;
  var _url = encodeURIComponent(url);
  var _txt = encodeURIComponent(txt);
  //    var _br = encodeURIComponent('\r\n');
  // console.log(" ____ " + ds_config.url)

  switch (sns) {
    case "facebook":
      o = {
        method: "popup",
        url: "https://www.facebook.com/sharer/sharer.php?u=" + _url,
      };
      break;

    case "twitter":
      o = {
        method: "popup",
        url: "https://twitter.com/intent/tweet?text=" + _txt + "&url=" + _url,
      };
      break;
    case "kakaotalk":
      // console.log("ds_config.title : " + ds_config.title + " : ds_config.kakaotalk.text : " + ds_config.kakaotalk.text + " _ " + ds_config.url)
      Kakao.Link.sendDefault({
        objectType: "feed",
        content: {
          title: ds_config.title,
          description: ds_config.kakaotalk.text,
          imageUrl: getMetaValue("og:image:kakao")
            ? getMetaValue("og:image:kakao")
            : ds_config.image,
          link: {
            mobileWebUrl: ds_config.url,
            webUrl: ds_config.url,
          },
        },
        buttons: [
          {
            title: "",
            link: {
              mobileWebUrl: "",
              webUrl: "",
            },
          },
        ],
        fail: function () {
          alert("지원하지 않는 플랫폼입니다.");
        },
      });
      break;

    default:
      alert("");
      return false;
  }

  switch (o.method) {
    case "popup":
      window.open(
        o.url,
        o.sns + "",
        "scrollbars=yes,toolbar=yes,resizable=yes,width=600,height=400"
      );
      break;
  }
}

function urlCopy() {
  var urlbox = document.getElementById("textUrl");
  urlbox.value = window.location.href;
  urlbox.select();
  document.execCommand("Copy");
  alert("URL이 복사 되었습니다.");
}
