var q_data = [
  {
    question: "가전, 전자 제품을 살 때",
    case: [
      { q: "최저가를 검색 하고 이것 저것 탐색", type: "E" },
      { q: "최저가라 믿고 구매", type: "I" },
    ],
  },
  {
    question: "점심시간에 깜빡 법카를<br />두고 나온 당신!",
    case: [
      { q: "영수증을 챙겨 받아 1원도 빠짐없이 청구한다", type: "E" },
      { q: "앗 그냥 오늘은 내 카드로 계산하지 뭐~", type: "I" },
    ],
  },
  {
    question: "퇴근 후 헬스장 PT를 끊었는데<br />매일 야근에 지친다",
    case: [
      { q: "미리 낸 돈이 있는데.. 눈물 콧물 뽑으면서 헬스장에 나간다", type: "E" },
      { q: "쉬어야 살겠는데 어쩔테냐 침대로 달려간다", type: "I" },
    ],
  },

  {
    question: "회사에서 깜짝 보너스를 준다면?",
    case: [
      { q: "아름답고 풍요로운 미래를 위해 전액을 저축한다", type: "S" },
      { q: "회사에서 주는 용돈=🐶꿀!<br />오랫동안 마음 속에 품어온 아이템을 지른다", type: "N" },
    ],
  },
  {
    question: "으악 늦잠! 오늘 아침 출근은?",
    case: [
      { q: "안 씻고 급하게 나가더라도<br />버스/지하철", type: "S" },
      { q: "다 씻고 멀끔히 준비하고 여유롭게 택시~", type: "N" },
    ],
  },
  {
    question: "너무나 갖고 싶은데 고가인 아이템!",
    case: [
      { q: "잠시 멈춰! 3달 동안 차곡차곡 저금 해서 구입한다", type: "S" },
      { q: "일단 긁어! 6개월 할부로 즉시 구입한다", type: "N" },
    ],
  },

  {
    question: "상여금을 회사 주식으로<br />준다고 한다면?",
    case: [
      { q: "그냥 현금으로 주시면 안될까요..?", type: "T" },
      { q: "오히려 좋아! 떡상 가즈아아", type: "F" },
    ],
  },
  {
    question: "회사 동료가 비트코인으로<br />떼돈을 벌었다",
    case: [
      { q: "부럽기는 하지만 나는 절대 안 한다", type: "T" },
      { q: "당장 계좌를 개설해서 투자를 시작한다", type: "F" },
    ],
  },
  {
    question: "요정이 나타나 선택을 하라고 했다",
    case: [
      { q: "90% 확률로 1억 받기", type: "T" },
      { q: "10% 확률로 1000억 받기", type: "F" },
    ],
  },
];

function logoClick() {
  var _url = "";

  openNewWindow = window.open("about:blank");
  openNewWindow.location.href = _url;

  return false;
}

var resultText = [];
resultText[0] = "내일이 없는 인생 한방파";
resultText[1] = "심플하지만 착한 동료";
resultText[2] = "자기애 넘치는 FM스타일";
resultText[3] = "술 잘 사주는 멋진 총무";
resultText[4] = "뭐든지 열심인 열정폭격기";
resultText[5] = "소비생활에도 프로 과몰입 러";
resultText[6] = "내 지갑 철벽 사수";
resultText[7] = "회사에 소문소문난 구두쇠";

var is_mobile = false;
var pageNum = 0;
var questionArr;
var qChkArr = [];
var mbtiChkArr = ["E", "I", "S", "N", "T", "F"];
var mbti = [0, 0, 0, 0, 0, 0];
var qTotalNum = 0;
var height, width;
var _main;

document.addEventListener("DOMContentLoaded", function () {
  is_mobile = isMobile();
  _main = document.querySelector("main");

  document.querySelector(".startBtn").addEventListener("click", function () {
    _main.classList.remove("start");
    _main.classList.add("quiz");
    _main.classList.remove("loading");
    _main.classList.remove("result");
    resetFunc();
  });

  qSetting();
  var clickBool = false;

  questionArr = document.querySelectorAll(".question");
  //console.log(questionArr.length)
  questionArr.forEach(function (_this, i) {
    _this.querySelectorAll("button").forEach(function (_btn, n) {
      _btn.addEventListener("click", function (e) {
        // alert(clickBool)
        //console.log(clickBool)

        if (clickBool) return false;
        clickBool = true;
        var _dtype = e.currentTarget.dataset.type;
        qChkArr.push(_dtype);
        //console.log(_dtype , qChkArr);
        // console.log( e.target)
        e.target.classList.add("on");

        setTimeout(function () {
          clickBool = false;
          pageNum = i + 1;
          pageSetFunc();
        }, 400);
      });
    });
  });

  window.addEventListener("resize", function () {
    resizeFunc();
  });

  resizeFunc();
  mainMotionFunc();
});

function mainMotionFunc() {
  var startPage = document.querySelector(".startPage");

  var tl = gsap.timeline();

  gsap.to(".loadImg", 1.5, {
    y: +20,
    ease: Power2.easeOut,
    yoyo: true,
    repeat: Infinity,
  });
}

function resetFunc() {
  pageNum = 0;
  qChkArr = [];
  mbti = [0, 0, 0, 0, 0, 0];
  pageSetFunc();
}

function randomReturn(min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

function qSetting() {
  //선택 영역 셋팅
  var innerOption = [];
  var $qWrap = document.querySelector(".questionWrap");
  qTotalNum = q_data.length;

  for (var i = 0; i < qTotalNum; i++) {
    innerOption.push('<div class="question">');
    innerOption.push('<div class="title">Q' + (i + 1) + ". " + q_data[i].question + "</div>");
    innerOption.push('<div class="optionWrap">');

    for (var n = 0; n < q_data[i].case.length; n++) {
      var v = q_data[i].case[n];
      innerOption.push('<button type="button" class="option" data-type="' + v.type + '">' + v.q + "</button>");
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
    document.querySelectorAll(".question").forEach(function (item, i) {
      if (i == pageNum) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }

  document.querySelector(".pageNum").innerHTML = pageNum + 1;
  document.querySelector(".pageNumWrap .bar").style.width = ((pageNum + 1) / qTotalNum) * 100 + "%";
}

function pageBackFunc() {
  pageNum--;

  console.log(pageNum)
  if (pageNum == -1) {
    document.querySelectorAll(".question")[0].classList.remove("active");
    _main.classList.remove("quiz");
    _main.classList.add("start");
    mainMotionFunc();
    // loadingFunc();
    return false;
  } else {
    document.querySelectorAll(".question").forEach(function (item, i) {
      if (item.classList.contains("active")) {
        document.querySelectorAll(".option").forEach(function (opt, i) {
          opt.classList.remove("on");
        });
        item.classList.remove("active");
        document.querySelectorAll(".question")[i - 1].classList.add("active");
        page = i;
        
      }
    });
  }

  document.querySelector(".pageNum").innerHTML = pageNum + 1;
  document.querySelector(".pageNumWrap .bar").style.width = ((pageNum + 1) / qTotalNum) * 100 + "%";
}

function loadingFunc() {
  _main.classList.remove("start");
  _main.classList.remove("quiz");
  _main.classList.add("loading");
  _main.classList.remove("result");

  var loadingPage = document.querySelector(".loadingPage");

  setTimeout(function () {
    resultFunc();
  }, 4000);
}

function resultFunc() {
  _main.classList.remove("start");
  _main.classList.remove("quiz");
  _main.classList.remove("loading");
  _main.classList.add("result");

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
  console.log("typeArr : " + typeArr);

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
  window.location = "./result" + resultPageNum + ".html";
}

function resizeFunc() {
  height = window.innerHeight;
  width = window.innerWidth;
  //console.log(height)
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
