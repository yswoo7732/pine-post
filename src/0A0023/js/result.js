function logoClick() {
    var _url = "";

    openNewWindow = window.open("about:blank");
    openNewWindow.location.href = _url;

    return false;
}

var is_mobile = false;
var height, width;
var _main;

document.addEventListener("DOMContentLoaded", function () {
    Kakao.init("a709d15750fc690ba17b2cba2aac509b");
    document.getElementById("shareUrl").value = ds_config.url;

    is_mobile = isMobile();
    _main = document.querySelector("main");

    window.addEventListener("resize", function () {
        resizeFunc();
    });

    resizeFunc();
});

function resizeFunc() {
    height = window.innerHeight;
    width = window.innerWidth;

    if (is_mobile || (!is_mobile && height < 1000)) {
        document.querySelector("article").style.height = height + "px";
    }
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
        return metas[metaName];
    };
    return metaGetter;
})();

if (navigator.platform) {
    ds_config = {
        title: getMetaValue("og:title"),
        description: getMetaValue("og:description"),
        image: getMetaValue("og:image"),
        image_kakao: getMetaValue("og:image:kakao"),
        url: getMetaValue("og:url"),
    };
}

function snsFunc(sns) {
    var o = {
        method: "",
    };
    var _url = encodeURIComponent(ds_config.url);
    var _txt = encodeURIComponent(ds_config.title);
    console.log(ds_config.description);
    switch (sns) {
        case "facebook":
            window.open("https://www.facebook.com/sharer/sharer.php?u=" + _url);
            break;

        case "twitter":
            window.open("https://twitter.com/intent/tweet?text=" + _txt + "&url=" + _url);
            break;
        case "kakaotalk":
            console.log(ds_config.title);
            console.log(ds_config.description);
            console.log(ds_config.image_kakao);
            console.log(document.location.href);
            Kakao.Link.sendDefault({
                objectType: "feed",
                content: {
                    title: ds_config.title,
                    description: ds_config.description,
                    imageUrl: ds_config.image_kakao,
                    link: {
                        mobileWebUrl: document.location.href,
                        webUrl: document.location.href,
                    },
                },
                fail: function () {
                    alert("지원하지 않는 플랫폼입니다.");
                },
            });
            break;

        default:
            alert("");
            return false;
    }
}

function urlCopyFunc() {
    let el = document.getElementById("shareUrl");
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

function isMobile() {
    var rtn = false;

    if (
        navigator.userAgent.match(
            /Android|Mobile|iP(hone|od|ad)|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/
        )
    ) {
        rtn = true;
    }
    return rtn;
}
