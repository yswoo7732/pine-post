function logoClick() {
    var _url = "";

    openNewWindow = window.open("about:blank");
    openNewWindow.location.href = _url;

    return false;
}

var is_mobile = false;
var height, width;
var _main;
var fineApp = false;

document.addEventListener("DOMContentLoaded", function () {
    is_mobile = isMobile();
    fineApp = pineAppChk();

    console.log(is_mobile, fineApp);
    //앱 sns 공유 버튼 셋팅
    // var snsBtn = document.querySelector('.ico_sns');
    // snsBtn.querySelectorAll("li")[0].innerHTML = <a href=""></a>
    // snsBtn.querySelectorAll("li")[1].innerHTML = <a href=""></a>
    // snsBtn.querySelectorAll("li")[2].innerHTML = <a href=""></a>

    _main = document.querySelector("main");

    //레이어
    var allResultLayer = _main.querySelector(".allResultLayer");

    _main.querySelector(".resultAllBtn").addEventListener("click", function () {
        allResultLayer.classList.add("active");
    });

    _main.querySelector(".closeBtn").addEventListener("click", function () {
        allResultLayer.classList.remove("active");
    });
    _main.querySelector(".confirmBtn").addEventListener("click", function () {
        allResultLayer.classList.remove("active");
    });
    //레이어 end

    _main.querySelector(".restartBtn").addEventListener("click", function () {
        _main.classList.add("start");
        _main.classList.remove("quiz");
        _main.classList.remove("loading");
        _main.classList.remove("result");
        resetFunc();
    });

    window.addEventListener("resize", function () {
        resizeFunc();
    });

    resizeFunc();
});

function resizeFunc() {
    height = window.innerHeight;
    width = window.innerWidth;
    //console.log(height)
    if (is_mobile || (!is_mobile && height < 1000)) {
        document.querySelector("article").style.height = height + "px";
    }

    // document.querySelectorAll('section').forEach(function(item){
    //     item.style.height = height+"px";
    // })
}

function getParam(sname) {
    var params = location.search.substr(location.search.indexOf("?") + 1);
    var sval = "";
    params = params.split("&");
    for (var i = 0; i < params.length; i++) {
        temp = params[i].split("=");
        if ([temp[0]] == sname) {
            sval = temp[1];
        }
    }
    return sval;
}

var getMetaValue = (function () {
    var metas = {};
    var metaGetter = function (metaName) {
        wasDOMQueried = true;
        if (metas[metaName]) {
            wasDOMQueried = false;
        } else {
            Array.prototype.some.call(document.getElementsByTagName("meta"), function (el) {
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
            });
        }
        // console.info("Q:wasDOMQueried? A:" + wasDOMQueried);
        return metas[metaName];
    };
    return metaGetter;
})();

if (navigator.platform) {
    ds_config = {
        isMobile: isMobile(),
        appkey: "a709d15750fc690ba17b2cba2aac509b",
        kakaotalk: {
            id: "kakao-link",
            width: "610",
            height: "319",
            text: getMetaValue("og:description"),
        },
        title: getMetaValue("og:title"),
        image: getMetaValue("og:image"),
        url: getMetaValue("og:url"),
    };
    // console.log(getMetaValue("og:title"));
    Kakao.init(ds_config.appkey);
}

function snsFunc(sns) {
    var o = {
        method: "",
    };
    var _url = encodeURIComponent(ds_config.url);
    var _txt = encodeURIComponent(ds_config.title);
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
            // console.log("ds_config.title : " + ds_config.title + " : ds_config.kakaotalk.text : " + ds_config.kakaotalk.text + " _ " + ds_config.url);

            var result_mo_chk = mo_chk();

            if (fineApp && result_mo_chk == "ios") {
                //아이폰이면 네이티브 공유로
                sharedContents();
                return false;
            }

            Kakao.Link.sendDefault({
                objectType: "feed",
                content: {
                    title: ds_config.title,
                    description: ds_config.kakaotalk.text,
                    imageUrl: getMetaValue("og:image:kakao") ? getMetaValue("og:image:kakao") : ds_config.image,
                    link: {
                        mobileWebUrl: ds_config.url,
                        webUrl: ds_config.url,
                    },
                },
                buttons: [
                    {
                        title: "나와 어울리는 자동차 찾기",
                        link: {
                            mobileWebUrl: "https://contents.pine.fund/0A0022/",
                            webUrl: "https://contents.pine.fund/0A0022/",
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
            // window.open(
            //     o.url,
            //     o.sns + "",
            //     "scrollbars=yes,toolbar=yes,resizable=yes,width=600,height=400"
            // );

            if (!fineApp) {
                window.open(o.url, o.sns + "", "scrollbars=yes,toolbar=yes,resizable=yes,width=600,height=400");
            } else {
                window.location.href = o.url;
            }

            break;
    }
}

function urlCopyFunc() {
    let el = document.getElementById("ShareUrl");
    el.value = document.location.href;

    console.log(el.value);
    if (document.body.createTextRange) {
        // IE
        var textRange = document.body.createTextRange();
        textRange.moveToElementText(el);
        textRange.select();
        textRange.execCommand("Copy");

        toast("URL이 복사되었습니다.");
    } else if (window.getSelection && document.createRange) {
        // non-IE
        var editable = el.contentEditable; // Record contentEditable status of element
        var readOnly = el.readOnly; // Record readOnly status of element
        el.contentEditable = true; // iOS will only select text on non-form elements if contentEditable = true;
        var range = document.createRange();
        range.selectNodeContents(el);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range); // Does not work for Firefox if a textarea or input
        if (el.nodeName == "TEXTAREA" || el.nodeName == "INPUT") {
            el.select(); // Firefox will only select a form element with select()
        }
        if (el.setSelectionRange && navigator.userAgent.match(/ipad|ipod|iphone/i)) {
            el.setSelectionRange(0, 999999); // iOS only selects "form" elements with SelectionRange
        }
        el.contentEditable = editable; // Restore previous contentEditable status
        el.readOnly = readOnly; // Restore previous readOnly status
        if (document.queryCommandSupported("copy")) {
            var successful = document.execCommand("copy");
            if (successful) {
                toast("URL이 복사되었습니다.");
            }
        }
    }
}

function isInstalledApp() {
    if (isMobile()) {
        if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            location.href = "https://apps.apple.com/app/id1559691452";
        } else {
            location.href = "https://play.google.com/store/apps/details?id=com.hamc.android.pine";
        }
    } else {
        if (navigator.appVersion.indexOf("Mac") != -1) {
            location.href = "https://apps.apple.com/app/id1559691452";
        } else {
            location.href = "https://play.google.com/store/apps/details?id=com.hamc.android.pine";
        }
    }
}

let removeToast;

function toast(string) {
    const toast = document.getElementById("toast");

    toast.classList.contains("reveal")
        ? (clearTimeout(removeToast),
          (removeToast = setTimeout(function () {
              document.getElementById("toast").classList.remove("reveal");
          }, 1000)))
        : (removeToast = setTimeout(function () {
              document.getElementById("toast").classList.remove("reveal");
          }, 1000));
    toast.classList.add("reveal"), (toast.innerText = string);
}
