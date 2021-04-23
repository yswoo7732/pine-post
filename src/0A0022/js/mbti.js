var q_data = [
    {
        question: "중고 거래를 할 때",
        case: [
            { q: "에누리 좀 해주세요! <strong>네고를 시도</strong>한다", type: "E" },
            { q: "이미 최저가 아닌가? 불편하니 <strong>그냥 산다</strong>", type: "I" },
        ],
    },
    {
        question: "친구들과 모여 식사를 했을 때 당신은",
        case: [
            { q: "10원 단위까지 <strong>칼같이</strong> 나눈다", type: "E" },
            { q: "친구인데 누가 <strong>1000원 더 낼 수</strong>도 있지 뭐", type: "I" },
        ],
    },
    {
        question: "물건을 샀는데 작은 하자가 있다",
        case: [
            { q: "내 돈은 소중하다 <strong>끝까지 교환/환불</strong>을 받는다 ", type: "E" },
            { q: "내 시간과 에너지가 더 아깝다 <strong>그냥 쓴다</strong>", type: "I" },
        ],
    },
    
    {
        question: "예상 못했던 수입이 생겼을 때",
        case: [
            { q: "미래를 위해 <strong>저축</strong>한다", type: "S" },
            { q: "쇼핑 타임! 일단 <strong>쓰고</strong> 본다", type: "N" },
        ],
    },
    {
        question: "새 신발이 필요할 때 당신은",
        case: [
            { q: "후기와 환불 정책을 <strong>꼼꼼히 확인</strong>하고 인터넷 최저가로 산다", type: "S" },
            { q: "<strong>귀찮다</strong> 그냥 베스트 셀러로 정렬해서 고른다 ", type: "N" },
        ],
    },
    {
        question: "답답해서 바다를 보고 싶어졌다",
        case: [
            { q: "교통 숙소 식당부터 찾는다 <strong>계획은 필수</strong>니까", type: "S" },
            { q: "<strong>당장 드라이브 떠나서</strong> 바다만 보고 새벽에 오면 안 되나?", type: "N" },
        ],
    },

    {
        question: "끌리는 신상품에 후기가 0개일 때",
        case: [
            { q: "불안하니까 사는 걸 <strong>미룬다</strong>", type: "T" },
            { q: "내가 <strong>개척한다</strong>", type: "F" },
        ],
    },
    {
        question: "빚내서 투자하는 빚투 기사를 보면",
        case: [
            { q: "나는 절대 안 한다", type: "T" },
            { q: "그럴 수도 있지", type: "F" },
        ],
    },
    {
        question: "요정이 나타나 선택을 하라고 했다",
        case: [
            { q: "<strong>90% 확률</strong>로 1억 받기", type: "T" },
            { q: "<strong>10% 확률</strong>로 1000억 받기", type: "F" },
        ],
    },
];

function logoClick(){
    var _url = "";

    openNewWindow = window.open("about:blank");
    openNewWindow.location.href = _url;
    
    return false;
}

var resultText = [];
resultText[0] = "슈퍼카 정도는 사야 FLEX";
resultText[1] = "일단 예쁘면 된 거 아니야?";
resultText[2] = "머스크처럼 마이웨이";
resultText[3] = "2인분 같은 1인분";
resultText[4] = "추진력이 스포츠카 그 자체";
resultText[5] = "장애물은 그냥 밀고 나가";
resultText[6] = "돈 샐 틈 없이 철벽방어";
resultText[7] = "저축과 투자의 정석";

var is_mobile = false;
var pageNum = 0;
var questionArr;
var qChkArr = [];
var mbtiChkArr = ["E", "I", "S", "N", "T", "F"]; 
var mbti = [0, 0, 0, 0, 0, 0];
var qTotalNum = 0;
var height, width;
var _main;

document.addEventListener("DOMContentLoaded", function(){
    is_mobile = isMobile();
    _main = document.querySelector("main");
    
    document.querySelector(".startBtn").addEventListener("click", function(){
        _main.classList.remove("start");
        _main.classList.add("quiz");
        _main.classList.remove("loading");
        _main.classList.remove("result");
        resetFunc();
    })

    // document.querySelector(".restartBtn").addEventListener("click", function(){
    //     _main.classList.add("start");
    //     _main.classList.remove("quiz");
    //     _main.classList.remove("loading");
    //     _main.classList.remove("result");
    //     resetFunc();
    // })

    qSetting();

    questionArr = document.querySelectorAll(".question");
    //console.log(questionArr.length)
    questionArr.forEach(function (_this, i) {

        _this.querySelectorAll("button").forEach(function(_btn, n){

            _btn.addEventListener("click", function(e){
                var _dtype = e.currentTarget.dataset.type;
                qChkArr.push(_dtype);
                console.log(_dtype , qChkArr);
                pageNum = i + 1;
                pageSetFunc()
    //             // $(_this).addClass("on").siblings().removeClass('"on');
            })
        })
    });
    //pageSetFunc();

    window.addEventListener("resize", function(){
        resizeFunc();
    })
    
    resizeFunc();
    mainMotionFunc();
});

function mainMotionFunc(){
    var startPage = document.querySelector(".startPage");
    var imageALL = startPage.querySelectorAll(".mainImage");
    // console.log(imageALL)
    var tl = gsap.timeline();

    tl.from(imageALL[0], .5, {
        y : 40,
        alpha: 0
    }).from(imageALL[1], .7, {
        y: 50
        ,alpha: 0
        ,scaleY : .7
        ,ease : Power4.easeOut
    })
    gsap.from(imageALL[2], 1, {
        alpha: 0
        ,scale : 0
        ,rotate : -200
        ,delay : .8
        ,ease : Power4.easeOut
    })

    gsap.to(imageALL[1], 1, {
        skewX: -4
        // ,ease : Cubic.easeOut
        ,yoyo: true
        ,repeat : Infinity
    })

    gsap.to('.card', 1.5, {
        y: -40
        ,ease : Power2.easeOut
        ,yoyo: true
        ,repeat : Infinity
    })
}

function resetFunc(){
    pageNum = 0;
    qChkArr = [];
    mbti = [0, 0, 0, 0, 0, 0];
    pageSetFunc();
}

function randomReturn(min, max){
    return Math.floor(min + Math.random()*(max + 1 - min) )
}

function qSetting() {
    //선택 영역 셋팅
    var innerOption = [];
    var $qWrap = document.querySelector(".questionWrap");
    qTotalNum = q_data.length;
    
    for (var i = 0; i < qTotalNum; i++) {
        innerOption.push('<div class="question">');
        innerOption.push('<div class="index">0' + (i + 1) + "</div>");
        innerOption.push('<div class="title">' + q_data[i].question + "</div>");
        innerOption.push('<div class="optionWrap">');

        for (var n = 0; n < q_data[i].case.length; n++) {
            var v = q_data[i].case[n];
            innerOption.push(
                '<button type="button" class="option" data-type="' + v.type +'">' +v.q +"</button>"
            );
        }
        innerOption.push("</div></div>");
    }
    innerOption = innerOption.join("");
    $qWrap.innerHTML = innerOption;
}

function pageSetFunc() {
    // console.log(questionArr)
    if (pageNum == questionArr.length) {
        // resultFunc();
        loadingFunc();
        return false;
    } else {
        // console.log(pageNum)
        document.querySelectorAll(".question").forEach(function(item, i){
            if(i == pageNum){
                item.classList.add("active");
            }else{
                item.classList.remove("active");
            }
        })
    }

    document.querySelector(".pageNum").innerHTML = pageNum + 1;
    document.querySelector(".pageNumWrap .bar").style.width = (pageNum + 1)/ qTotalNum * 100 +"%";
}

function loadingFunc(){
    _main.classList.remove("start");
    _main.classList.remove("quiz");
    _main.classList.add("loading");
    _main.classList.remove("result");

    var loadingPage = document.querySelector(".loadingPage");
    var imageALL = loadingPage.querySelectorAll(".mainImage");
    // console.log(imageALL)

    gsap.from(imageALL[2], 1, {
        scale : .8
        ,rotate : -100
        ,ease : Power2.easeOut
        ,yoyo: true
        ,repeat : Infinity
    })


    setTimeout(function(){
        resultFunc();
    }, 4000)
}


function resultFunc() {

    _main.classList.remove("start");
    _main.classList.remove("quiz");
    _main.classList.remove("loading");
    _main.classList.add("result");
    
    // document.querySelector(".resultPage").scrollTop = 0;
    // ["E", "I", "S", "N", "T", "F"]; 
    // qChkArr = ["E", "E", "I", "S", "S", "N", "F", "T", "F"];
    //E , S, T
    console.log("qChkArr : ", qChkArr);

    var i = 0;
    qChkArr.forEach(function (v, i) {
        // console.log(v)
        if (v == "E") {
            mbti[0] = Number(mbti[0] + 1);
        } else if (v == "I") {
            mbti[1] = Number(mbti[1] + 1);
        } else if (v == "S") {
            mbti[2] = Number(mbti[2] + 1);
        } else if (v == "N") {
            mbti[3] = Number(mbti[3] + 1);
        } else if (v == "T") {
            mbti[4] = Number(mbti[4] + 1);
        } else if (v == "F") {
            mbti[5] = Number(mbti[5] + 1);
        }
    });

    // console.log(mbti )

    var typeArr = [];

    for (var m = 0; m <= 5; m++) {
        // typeArrNum++;
        // var inum = 0;
        if (m % 2 == 0) {
            // inum++;
            typeArr[0] = mbti[0] > mbti[1] ? mbtiChkArr[0] : mbtiChkArr[1];
            typeArr[1] = mbti[2] > mbti[3] ? mbtiChkArr[2] : mbtiChkArr[3];
            typeArr[2] = mbti[4] > mbti[5] ? mbtiChkArr[4] : mbtiChkArr[5];
        }
    }
    console.log('typeArr : '+ typeArr);

    var resultPageNum = 0;
    typeArr = typeArr.join("");

    if (typeArr == "INF") {
        resultPageNum = 0;
    } else if (typeArr == "INT") {
        resultPageNum = 1;
    } else if (typeArr == "ENF") {
        resultPageNum = 2;
    } else if (typeArr == "IST") {
        resultPageNum = 3;
    } else if (typeArr == "ISF") {
        resultPageNum = 4;
    } else if (typeArr == "ENT") {
        resultPageNum = 5;
    } else if (typeArr == "EST") {
        resultPageNum = 6;
    } else if (typeArr == "ESF") {
        resultPageNum = 7;
    }

    //console.log(resultPageNum+1, typeArr, resultText[resultPageNum]);
    // document.querySelector(".resultPage h4").innerHTML = resultPageNum+1 +", "+ typeArr +", "+ resultText[resultPageNum];
    // $(".resultPage h4").text(resultPageNum+1 +", "+ typeArr +", "+ resultText[resultPageNum]);
    //saveDataFunc(resultPageNum);
    // alert(resultPageNum)
    window.location = "./result"+resultPageNum+".html";
    
}

// function saveDataFunc(num){
//     //결과 데이터 저장 함수 추가
//     console.log("data저장 : " + num );
// }

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
