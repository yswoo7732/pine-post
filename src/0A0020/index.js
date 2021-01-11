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

        contentsContainer.style.display = "block";
        gsap.to(window, { scrollTo: { y: ".result_wrapper" } });

        document.querySelector(".result_container").classList.add("result_container_active");

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

        let bannerSwiper = new Swiper("#banner_swiper", {
            direction: "horizontal",
            loop: true,
            paginationClickable: true,
            centeredSlides: true,
            slidesPerView: 3,
            spaceBetween: 5,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    });

    google.charts.load("current", { packages: ["corechart"] });
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
        // rangeTip.style.left = slider.getBoundingClientRect().left + value - 13 + "px";
    } else {
        rangeTip.style.width = "88px";
        rangeTip.innerText = "1억 2천만원 초과";
        // rangeTip.style.left = slider.getBoundingClientRect().left + value - 36 + "px";
    }

    // console.log("value", input.value);
    // console.log(input.clientWidth);
    // console.log(multiplier);
    // console.log(thumbOffset);
    // console.log(priceInputOffset);
    // console.log(input.clientWidth * multiplier - thumbOffset);
}

function handleDepositSliderValuePosition(input) {
    const rangeTip = document.getElementsByClassName("__range-output-square")[1];
    const thumbSize = 20;

    rangeTip.innerText = input.value;
    rangeTip.innerText += input.value == 0 ? "원" : "만원";

    rangeTip.style.left = document.getElementById("__mark-" + input.value).getBoundingClientRect().left - thumbSize + "px";

    console.log(input.value);
}

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerText = (progress * (end - start) + start).toFixed(1);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

function drawChart() {
    var chartDiv = document.getElementById("chart_div");

    var dataTable = new google.visualization.DataTable();
    dataTable.addColumn("string", "Month");
    dataTable.addColumn("number", "시가");
    // dataTable.addColumn('number', 'UK');
    // A column for custom tooltip content
    dataTable.addColumn({ type: "string", role: "tooltip", p: { html: true } });
    dataTable.addRows([
        ["1월", 300, createCustomHTMLContent("assets/pine_banner1.png", "채권형 펀드")],
        ["2월", 1000, createCustomHTMLContent("assets/pine_banner2.png", "주식형 펀드")],
        ["3월", 150, createCustomHTMLContent("assets/pine_banner1.png", "채권형 펀드")],
        ["4월", 1500, createCustomHTMLContent("assets/pine_banner2.png", "주식형 펀드")],
        ["5월", 2000, createCustomHTMLContent("assets/pine_banner2.png", "주식형 펀드")],
        ["6월", 300, createCustomHTMLContent("assets/pine_banner1.png", "채권형 펀드")],
        ["7월", 800, createCustomHTMLContent("assets/pine_banner1.png", "채권형 펀드")],
        ["8월", 500, createCustomHTMLContent("assets/pine_banner1.png", "채권형 펀드")],
        ["9월", 3000, createCustomHTMLContent("assets/pine_banner2.png", "주식형 펀드")],
        ["10월", 600, createCustomHTMLContent("assets/pine_banner1.png", "채권형 펀드")],
        ["11월", 800, createCustomHTMLContent("assets/pine_banner1.png", "채권형 펀드")],
        ["12월", 1160, createCustomHTMLContent("assets/pine_banner2.png", "주식형 펀드")],
    ]);

    var options = {
        title: "코스피 지수",
        colors: ["#d62a56"],
        // This line makes the entire category's tooltip active.
        // focusTarget: "category",
        // Use an HTML tooltip.
        tooltip: { isHtml: true },
        legend: "none",
    };

    // var classicOptions = {
    //     width: "100%",
    //     height: "auto",
    //     legend: { position: 'bottom' },
    //     // Gives each series an axis that matches the vAxes number below.
    //     series: {
    //         0: { targetAxisIndex: 0 },
    //         1: { targetAxisIndex: 1 },
    //     },
    //     // vAxes: {
    //     //     // Adds titles to each axis.
    //     //     0: { title: "Temps (Celsius)" },
    //     //     1: { title: "Daylight" },
    //     // },
    //     hAxis: {
    //         ticks: [
    //             new Date(2014, 0),
    //             new Date(2014, 1),
    //             new Date(2014, 2),
    //             new Date(2014, 3),
    //             new Date(2014, 4),
    //             new Date(2014, 5),
    //             new Date(2014, 6),
    //             new Date(2014, 7),
    //             new Date(2014, 8),
    //             new Date(2014, 9),
    //             new Date(2014, 10),
    //             new Date(2014, 11),
    //         ],
    //     },
    //     vAxis: {
    //         viewWindow: {
    //             max: 30,
    //         },
    //     },
    // };

    function drawClassicChart() {
        var classicChart = new google.visualization.AreaChart(chartDiv);
        classicChart.draw(dataTable, options);
    }

    drawClassicChart();
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
