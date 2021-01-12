window.onload = function () {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        if (/iPhone/i.test(navigator.userAgent)) {
        }
    } else {
        console.log("not mobile");
    }

    const btnOK = document.getElementById("btnOK");
    const contentsContainer = document.getElementsByClassName("contents_container")[0];

    btnOK.addEventListener("click", () => {
        if (document.getElementsByClassName("slider")[0].value == 0) {
            alert("연봉을 선택해주세요.");
            return false;
        }

        if (document.getElementsByClassName("slider")[1].value == 0) {
            alert("연금저축액을 선택해주세요.");
            return false;
        }

        contentsContainer.style.display = "";
        gsap.to(window, { scrollTo: { y: ".result_wrapper" } });

        document.querySelector(".result_container").classList.add("result_container_active");
        document.querySelector(".result_section_tip").classList.add("result_container_active");

        ScrollTrigger.create({
            trigger: ".add_square",
            start: "top center",
            once: true,
            toggleClass: { targets: ".add_square", className: "add_square_active" },
        });

        ScrollTrigger.create({
            trigger: ".add_square",
            start: "top center",
            once: true,
            toggleClass: { targets: ".square_tip", className: "square_tip_active" },
        });

        const salaryInput = document.getElementsByClassName("slider")[0].value;
        const depositInput = document.getElementsByClassName("slider")[1].value;

        // 세액공제율
        const perTax = document.getElementById("per_tax");
        // 공제 금액
        const taxDeductionAmt = document.getElementById("tax_deduction_amt");
        // 최대 공제 한도
        const taxCreditLimit = document.getElementById("tax_credit_limit");
        // 최대 공제 금액
        const maxDeductionAmt = document.getElementById("max_deduction_amt");

        // 연봉 5500만원 이하
        if (salaryInput > 0 && salaryInput <= 100) {
            let taxDeductionRate = "16.5";
            let taxCreditLimitTxt = "400만 원";
            let maxDeductionAmtTxt = "66만 원";
            let taxDeductionAmtTxt = "";

            // 연금저축액 100만원일때
            if (depositInput == 100) {
                taxDeductionAmtTxt = "16만 5천 원";
            }
            // 연금저축액 200만원일때
            else if (depositInput == 200) {
                taxDeductionAmtTxt = "33만 원";
            }
            // 연금저축액 300만원일때
            else if (depositInput == 300) {
                taxDeductionAmtTxt = "49만 5천 원";
            }
            // 연금저축액 400만원일때
            else if (depositInput == 400) {
                taxDeductionAmtTxt = "66만 원";
            }

            // perTax.innerText = taxDeductionRate;
            animateValue(perTax, 0, taxDeductionRate, 1500);

            taxDeductionAmt.innerText = taxDeductionAmtTxt;
            taxCreditLimit.innerText = taxCreditLimitTxt;
            maxDeductionAmt.innerText = maxDeductionAmtTxt;
        } else if (salaryInput > 100 && salaryInput <= 200) {
            // 연봉 5500만원 ~ 1억2천만원
            let taxDeductionRate = "13.2";
            let taxCreditLimitTxt = "400만 원";
            let maxDeductionAmtTxt = "52만 8천 원";
            let taxDeductionAmtTxt = "";

            // 연금저축액 100만원일때
            if (depositInput == 100) {
                taxDeductionAmtTxt = "13만 2천 원";
            }
            // 연금저축액 200만원일때
            else if (depositInput == 200) {
                taxDeductionAmtTxt = "26만 4천 원";
            }
            // 연금저축액 300만원일때
            else if (depositInput == 300) {
                taxDeductionAmtTxt = "39만 6천 원";
            }
            // 연금저축액 400만원일때
            else if (depositInput == 400) {
                taxDeductionAmtTxt = "52만 8천 원";
            }

            // perTax.innerText = taxDeductionRate;
            animateValue(perTax, 0, taxDeductionRate, 1500);

            taxDeductionAmt.innerText = taxDeductionAmtTxt;
            taxCreditLimit.innerText = taxCreditLimitTxt;
            maxDeductionAmt.innerText = maxDeductionAmtTxt;
        } else {
            // 1억 2천만원 초과
            let taxDeductionRate = "13.2";
            let taxCreditLimitTxt = "300만 원";
            let maxDeductionAmtTxt = "39만 6천 원";
            let taxDeductionAmtTxt = "";

            // 연금저축액 100만원일때
            if (depositInput == 100) {
                taxDeductionAmtTxt = "26만 4천 원";
            }
            // 연금저축액 200만원일때
            else if (depositInput == 200) {
                taxDeductionAmtTxt = "26만 4천 원";
            }
            // 연금저축액 300만원일때
            else if (depositInput == 300) {
                taxDeductionAmtTxt = "39만 6천 원";
            }
            // 연금저축액 400만원일때
            else if (depositInput == 400) {
                taxDeductionAmtTxt = "39만 6천 원";
            }

            // perTax.innerText = taxDeductionRate;
            animateValue(perTax, 0, taxDeductionRate, 1500);

            taxDeductionAmt.innerText = taxDeductionAmtTxt;
            taxCreditLimit.innerText = taxCreditLimitTxt;
            maxDeductionAmt.innerText = maxDeductionAmtTxt;
        }
    });

    let bannerSwiper = new Swiper("#banner_swiper", {
        direction: "horizontal",
        loop: true,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
        paginationClickable: false,
        centeredSlides: true,
        slidesPerView: 3,
        spaceBetween: 20,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        }
    });

    let resultSwiper = new Swiper("#result_swiper", {
        direction: "horizontal",
        navigation: {
            nextEl: ".swipe-direction",
            prevEl: ".swipe-direction",
        },
        on: {
            slideChangeTransitionStart: function slideChangeTransitionStart() {
                var idx = this.realIndex + 1;
                gsap.set("#result_swiper", { x: "0" });
                if (idx == 2) {
                    gsap.to("#result_swiper", 0.8, { x: "6vw", delay: 0.8 });
                } else {
                    gsap.to("#result_swiper", 0.8, { x: "-6vw", delay: 0.8 });
                }
            },
        },
    });

    document.getElementsByClassName("swipe-direction")[0].addEventListener("click", function () {
        resultSwiper.slideNext();
    });

    // 구글차트
    google.charts.load("45", { packages: ["corechart"] });
    google.charts.setOnLoadCallback(drawChart);
};

// 연봉 범위에 따른 tooltip 텍스트 및 위치조정
function handleSalarySliderValuePosition(input) {
    const rangeTip = document.getElementsByClassName("__range-output-square")[0];
    const slider = document.getElementsByClassName("slider")[0];
    const max = parseInt(input.max);
    const value = parseInt(input.value);
    const thumbSize = 20;

    const multiplier = value / max;
    const thumbOffset = thumbSize * multiplier;
    const priceInputOffset = (thumbSize - document.body.clientWidth) / 2;

    rangeTip.style.left = input.clientWidth * multiplier - thumbOffset + thumbSize + "px";

    if (value == 0) {
        rangeTip.style.width = "50px";
        rangeTip.innerText = "0원";
    } else if (value > 0 && value <= 100) {
        rangeTip.style.width = "76px";
        rangeTip.innerText = "5,500만원 이하";
    } else if (value > 100 && value <= 200) {
        rangeTip.style.width = "122px";
        rangeTip.innerText = "5,500만원 ~ 1억 2천만원";
    } else {
        rangeTip.style.width = "88px";
        rangeTip.innerText = "1억 2천만원 초과";
    }
}

// 연금 저축액 범위에 따른 tooltip 텍스트 및 위치조정
function handleDepositSliderValuePosition(input) {
    const rangeTip = document.getElementsByClassName("__range-output-square")[1];
    const thumbSize = 20;
    const max = parseInt(input.max);
    const value = parseInt(input.value);

    const multiplier = value / max;
    const thumbOffset = thumbSize * multiplier;

    rangeTip.innerText = input.value;
    rangeTip.innerText += input.value == 0 ? "원" : "만원";

    rangeTip.style.left = input.clientWidth * multiplier - thumbOffset + thumbSize + "px";
    // console.log(input.value);
}

// 연봉/연금저축액 결과 세액 공제율 countUp animation
function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerText = (progress * (end - start) + start).toFixed(1);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }

        if (progress == 1) {
            gsap.to("#result_swiper", 0.8, { x: "-6vw", delay: 0.3 });
        }
    };
    window.requestAnimationFrame(step);
}

function drawChart() {
    var chartDiv = document.getElementById("chart_div");

    var dataTable = new google.visualization.DataTable();
    dataTable.addColumn("string", "Month");
    dataTable.addColumn("number", "시가");
    // A column for custom tooltip content
    dataTable.addColumn({ type: "string", role: "tooltip", p: { html: true } });
    dataTable.addRows([
        ["", 300, createCustomHTMLContent("assets/pine_banner1.png", "채권형 펀드")],
        ["", 1000, createCustomHTMLContent("assets/pine_banner2.png", "주식형 펀드")],
        ["3월", 150, createCustomHTMLContent("assets/pine_banner1.png", "채권형 펀드")],
        ["", 1500, createCustomHTMLContent("assets/pine_banner2.png", "주식형 펀드")],
        ["", 800, createCustomHTMLContent("assets/pine_banner2.png", "주식형 펀드")],
        ["6월", 2000, createCustomHTMLContent("assets/pine_banner1.png", "채권형 펀드")],
        ["", 800, createCustomHTMLContent("assets/pine_banner1.png", "채권형 펀드")],
        ["", 500, createCustomHTMLContent("assets/pine_banner1.png", "채권형 펀드")],
        ["9월", 3000, createCustomHTMLContent("assets/pine_banner2.png", "주식형 펀드")],
        ["", 600, createCustomHTMLContent("assets/pine_banner1.png", "채권형 펀드")],
        ["", 800, createCustomHTMLContent("assets/pine_banner1.png", "채권형 펀드")],
        ["12월", 1160, createCustomHTMLContent("assets/pine_banner2.png", "주식형 펀드")],
    ]);

    var options = {
        title: "코스피 지수",
        colors: ["#d62a56"],
        vAxis: {
            minValue: 0,
            ticks: [0, 1000, 1500, 2000, 2500, 3000],
        },
        // This line makes the entire category's tooltip active.
        // focusTarget: "category",
        // Use an HTML tooltip.
        tooltip: { isHtml: true },
        legend: "none",
    };

    // var classicChart = new google.visualization.AreaChart(chartDiv);
    // classicChart.draw(dataTable, options);
}

function createCustomHTMLContent(flagURL, flag) {
    return (
        '<p style="text-align:center;">' +
        flag +
        "</p>" +
        '<div style="padding:5px 5px 5px 5px;">' +
        '<img src="' +
        flagURL +
        '" style="width:100px;height:200px"><br/>' +
        "</div>"
    );
}

var LineChart = function (options) {
    var data = options.data;
    var canvas = document.getElementById("chart_div").appendChild(document.createElement("canvas"));
    var context = canvas.getContext("2d");
    console.log(options.width);
    console.log(window.innerWidth);
    var rendering = false,
        paddingX = 80,
        paddingY = 80,
        width = (options.width || window.innerWidth) * 1.2,
        height = 400,
        progress = 0;

    canvas.width = width;
    canvas.height = height;

    var maxValue, minValue;

    var y1 = paddingY + 0.05 * (height - paddingY * 2),
        y2 = paddingY + 0.5 * (height - paddingY * 2),
        y3 = paddingY + 0.95 * (height - paddingY * 2);

    format();
    render();

    function format(force) {
        maxValue = 0;
        minValue = Number.MAX_VALUE;

        data.forEach(function (point, i) {
            maxValue = Math.max(maxValue, point.value);
            minValue = Math.min(minValue, point.value);
        });

        data.forEach(function (point, i) {
            point.targetX = paddingX + (i / (data.length - 1)) * (width - paddingX * 2);
            point.targetY = paddingY + ((point.value - minValue) / (maxValue - minValue)) * (height - paddingY * 2);
            point.targetY = height - point.targetY;

            if (force || (!point.x && !point.y)) {
                point.x = point.targetX + 30;
                point.y = point.targetY;
                point.speed = 0.04 + (1 - i / data.length) * 0.05;
            }
        });
    }

    function render() {
        if (!rendering) {
            requestAnimationFrame(render);
            return;
        }

        context.font = "20px sans-serif";
        context.clearRect(0, 0, width, height);

        context.fillStyle = "#222";
        context.fillRect(paddingX, y1, width - paddingX * 2, 1);
        context.fillRect(paddingX, y2, width - paddingX * 2, 1);
        context.fillRect(paddingX, y3, width - paddingX * 2, 1);

        if (options.yAxisLabel) {
            context.save();
            context.globalAlpha = progress;
            context.translate(paddingX - 15, height - paddingY - 10);
            context.rotate(-Math.PI / 2);
            context.fillStyle = "#fff";
            context.fillText(options.yAxisLabel, 0, 0);
            context.restore();
        }

        var progressDots = Math.floor(progress * data.length);
        var progressFragment = progress * data.length - Math.floor(progress * data.length);

        data.forEach(function (point, i) {
            if (i <= progressDots) {
                point.x += (point.targetX - point.x) * point.speed;
                point.y += (point.targetY - point.y) * point.speed;

                context.save();

                var wordWidth = context.measureText(point.label).width;
                context.globalAlpha = i === progressDots ? progressFragment : 1;
                context.fillStyle = point.future ? "#aaa" : "#fff";
                context.fillText(point.label, point.x - wordWidth / 2, height - 22);

                if (i < progressDots && !point.future) {
                    context.beginPath();
                    context.arc(point.x, point.y, 8, 0, Math.PI * 2);
                    context.fillStyle = "#1baee1";
                    context.fill();
                }

                context.restore();
            }
        });

        context.save();
        context.beginPath();
        context.strokeStyle = "#1baee1";
        context.lineWidth = 4;

        var futureStarted = false;

        data.forEach(function (point, i) {
            if (i <= progressDots) {
                var px = i === 0 ? data[0].x : data[i - 1].x,
                    py = i === 0 ? data[0].y : data[i - 1].y;

                var x = point.x,
                    y = point.y;

                if (i === progressDots) {
                    x = px + (x - px) * progressFragment;
                    y = py + (y - py) * progressFragment;
                }

                if (point.future && !futureStarted) {
                    futureStarted = true;
                    context.lineWidth = 4;

                    context.stroke();
                    context.beginPath();
                    context.moveTo(px, py);
                    context.strokeStyle = "#aaa";

                    if (typeof context.setLineDash === "function") {
                        context.setLineDash([4, 8]);
                    }
                }

                if (i === 0) {
                    context.moveTo(x, y);
                } else {
                    context.lineTo(x, y);
                }
            }
        });

        context.stroke();
        context.restore();

        progress += (1 - progress) * 0.02;

        requestAnimationFrame(render);
    }

    this.start = function () {
        rendering = true;
    };

    this.stop = function () {
        rendering = false;
        progress = 0;
        format(true);
    };

    this.restart = function () {
        this.stop();
        this.start();
    };

    this.append = function (points) {
        progress -= points.length / data.length;
        data = data.concat(points);

        format();
    };

    this.populate = function (points) {
        progress = 0;
        data = points;

        format();
    };
};

var chart = new LineChart({ data: [] });

reset();

chart.start();

function append() {
    chart.append([{ label: "Rnd", value: 1300 + Math.random() * 1500, future: true }]);
}

function restart() {
    chart.restart();
}

function reset() {
    chart.populate([
        { label: "One", value: 0 },
        { label: "Two", value: 100 },
        { label: "Three", value: 200 },
        { label: "Four", value: 840 },
        { label: "Five", value: 620 },
        { label: "Six", value: 500 },
        { label: "Seven", value: 600 },
        { label: "Eight", value: 1100 },
        { label: "Nine", value: 800 },
        { label: "Ten", value: 900 },
        { label: "Eleven", value: 1200, future: true },
        { label: "Twelve", value: 1400, future: true },
    ]);
}
