
function logoClick(){
    var _url = "";

    openNewWindow = window.open("about:blank");
    openNewWindow.location.href = _url;
    
    return false;
}

var is_mobile = false;
var height, width;
var _main;
var fineApp = false;

document.addEventListener("DOMContentLoaded", function(){
    is_mobile = isMobile();
    fineApp = pineAppChk();

    //앱 sns 공유 버튼 셋팅
    // var snsBtn = document.querySelector('.ico_sns');
    // snsBtn.querySelectorAll("li")[0].innerHTML = <a href=""></a>
    // snsBtn.querySelectorAll("li")[1].innerHTML = <a href=""></a>
    // snsBtn.querySelectorAll("li")[2].innerHTML = <a href=""></a>

    _main = document.querySelector("main");
    
    document.querySelector(".restartBtn").addEventListener("click", function(){
        _main.classList.add("start");
        _main.classList.remove("quiz");
        _main.classList.remove("loading");
        _main.classList.remove("result");
        resetFunc();
    })

    window.addEventListener("resize", function(){
        resizeFunc();
    })
    
    resizeFunc();
});


function resizeFunc(){
    
    height = window.innerHeight;
    width = window.innerWidth;
    //console.log(height)
    if(is_mobile || (!is_mobile && height < 1000)){
        document.querySelector('article').style.height = height + "px";
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
        method: ""
    }
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
                url:
                    "https://twitter.com/intent/tweet?text=" +
                    _txt +"&url=" + _url,
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
                window.open(
                    o.url,
                    o.sns + "",
                    "scrollbars=yes,toolbar=yes,resizable=yes,width=600,height=400"
                );
            } else { 
                window.location.href = o.url;
            }

            break;
    }
}

function urlCopy() {
    var urlbox = document.getElementById("ShareUrl");
    //console.log(urlbox)
    //urlbox.value = window.location.href;
    urlbox.value = ds_config.url;
    // console.log(urlbox.value)
    urlbox.select();
    document.execCommand("Copy");
    if (!fineApp) { 
        alert("URL이 복사 되었습니다.");
    }else {
        var snsBtn = document.querySelector('.ico_sns');
        snsBtn.querySelectorAll("li")[3].querySelector("span").innerText = "URL 복사완료";
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

function pineAppChk() {
    if (navigator.userAgent.match(/PINE|pine/)) {
        return true;
    }
    return false; //여기만 true로 바꿔서 테스트
}
