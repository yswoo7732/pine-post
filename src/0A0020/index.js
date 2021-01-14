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

        // 확인 클릭시 animation
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

        let resultSwiper = new Swiper("#result_swiper", {
            direction: "horizontal",
            slidesPerView: 1,
            spaceBetween: 0,
            initialSlide: 0,
            centeredSlides: true,
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
            },
        });

        document.querySelector(".left-direction").addEventListener("click", function () {
            resultSwiper.slideTo(0);
        });

        document.querySelector(".right-direction").addEventListener("click", function () {
            resultSwiper.slideTo(1);
        });

        ScrollTrigger.create({
            trigger: ".graph_section",
            start: "top center",
            once: true,
            // markers: true,
            onEnter: () => createLineChart(),
        });
    });

    // 구글차트
    // google.charts.load("45", { packages: ["corechart"] });
    // google.charts.setOnLoadCallback(drawChart);
};
createLineChart();

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

// function drawChart() {
//     var chartDiv = document.getElementById("chart_div");

//     var dataTable = new google.visualization.DataTable();
//     dataTable.addColumn("string", "Month");
//     dataTable.addColumn("number", "시가");
//     // A column for custom tooltip content
//     dataTable.addColumn({ type: "string", role: "tooltip", p: { html: true } });
//     dataTable.addRows([
//         ["", 300, createCustomHTMLContent("assets/pine_banner1.png", "채권형 펀드")],
//         ["", 1000, createCustomHTMLContent("assets/pine_banner2.png", "주식형 펀드")],
//         ["3월", 150, createCustomHTMLContent("assets/pine_banner1.png", "채권형 펀드")],
//         ["", 1500, createCustomHTMLContent("assets/pine_banner2.png", "주식형 펀드")],
//         ["", 800, createCustomHTMLContent("assets/pine_banner2.png", "주식형 펀드")],
//         ["6월", 2000, createCustomHTMLContent("assets/pine_banner1.png", "채권형 펀드")],
//         ["", 800, createCustomHTMLContent("assets/pine_banner1.png", "채권형 펀드")],
//         ["", 500, createCustomHTMLContent("assets/pine_banner1.png", "채권형 펀드")],
//         ["9월", 3000, createCustomHTMLContent("assets/pine_banner2.png", "주식형 펀드")],
//         ["", 600, createCustomHTMLContent("assets/pine_banner1.png", "채권형 펀드")],
//         ["", 800, createCustomHTMLContent("assets/pine_banner1.png", "채권형 펀드")],
//         ["12월", 1160, createCustomHTMLContent("assets/pine_banner2.png", "주식형 펀드")],
//     ]);

//     var options = {
//         title: "코스피 지수",
//         colors: ["#d62a56"],
//         vAxis: {
//             minValue: 0,
//             ticks: [0, 1000, 1500, 2000, 2500, 3000],
//         },
//         // This line makes the entire category's tooltip active.
//         // focusTarget: "category",
//         // Use an HTML tooltip.
//         tooltip: { isHtml: true },
//         legend: "none",
//     };

//     // var classicChart = new google.visualization.AreaChart(chartDiv);
//     // classicChart.draw(dataTable, options);
// }

// function createCustomHTMLContent(flagURL, flag) {
//     return (
//         '<p style="text-align:center;">' +
//         flag +
//         "</p>" +
//         '<div style="padding:5px 5px 5px 5px;">' +
//         '<img src="' +
//         flagURL +
//         '" style="width:100px;height:200px"><br/>' +
//         "</div>"
//     );
// }
// createLineChart()
function createLineChart() {
    google.charts.load("45", {
        callback: function () {
            var rawData = [
                [1, 500, null],
                [2, 600, null],
                [3, 400, null],
                [4, 550, null],
                [5, 800, null],
                [6, 1700, "주식형 펀드"],
                [7, 3500, null],
                [8, 1000, null],
                [9, 800, null],
                [10, 400, "채권형 펀드"],
                [11, 300, null],
                [12, 200, null],
            ];

            var data = new google.visualization.DataTable({
                cols: [
                    { id: "", label: "X", type: "number" },
                    { id: "", label: "Y", type: "number" },
                    { id: "", role: "annotation", type: "string" },
                ],
            });

            // data.addColumn({ type: "string", role: "annotation" });
            var options = {
                // title: "코스피 지수",
                colors: ["#d62a56"],
                width: 400,
                height: 300,
                pointSize: 4,
                animation: {
                    startup: true,
                    //   duration: 6,
                    easing: "in",
                },
                legend: "none",
                hAxis: {
                    viewWindow: {
                        min: 1,
                        max: 12,
                    },
                    // ticks: [3, 6, 9, 12],
                    title: "월별",
                },
                vAxis: {
                    viewWindow: {
                        min: 0,
                        max: 3500,
                    },
                },
                annotations: {
                    textStyle: {
                        fontName: 'LIFEPLUS',
                        // fontSize: 15,
                        // bold: true,
                        // The color of the text.
                        color: "#000000",
                        // The color of the text outline.
                        // auraColor: '#d799ae',
                        // The transparency of the text.
                        // opacity: 0.8
                    },
                },
            };

            var chart = new google.visualization.LineChart(document.getElementById("line_chart"));

            google.visualization.events.addListener(chart, "ready", function () {});

            drawChart();
            setInterval(drawChart, 100);
            // google.visualization.events.addListener(chart, "ready", selectHandler);

            var rowIndex = 0;
            function drawChart() {
                if (rowIndex < rawData.length) {
                    data.addRow(rawData[rowIndex++]);
                    chart.draw(data, options);
                    // chart.setSelection([
                    //     { row: [5], column: null },
                    //     { row: [6], column: null },
                    // ]);

                    console.log(rawData.length);
                    if (rowIndex == 7) {
                        console.log("Aaa");

                        Array.prototype.forEach.call(document.getElementById("line_chart").getElementsByTagName("rect"), function (rect, i) {
                            // console.log(rect, i);
                            if (rect.getAttribute("fill") === "#999999") {
                                var xPos = parseFloat(rect.getAttribute("x"));
                                var yPos = parseFloat(rect.getAttribute("y"));
                                console.log("xPos", xPos);
                                console.log("yPos", yPos);

                                // var stockCard = document.getElementById("line_chart").appendChild(document.createElement("div"));
                                // stockCard.innerText = "주식형 펀드";
                                // stockCard.style.background = "url('assets/pine_banner1.png')";
                                // stockCard.className = "stock_card";

                                var stockCard = document.getElementById("line_chart").appendChild(document.createElement("img"));
                                stockCard.src = "assets/pine_banner1.png";
                                stockCard.className = "stock_card";

                                // 16x16 (image size in this example)
                                stockCard.style.bottom = xPos + 80 + "px";
                                stockCard.style.left = yPos + "px";
                            }
                        });
                    }
                    if (rowIndex == 12) {
                        Array.prototype.forEach.call(document.getElementById("line_chart").getElementsByTagName("rect"), function (rect, i) {
                            console.log(rect, i);

                            if (rect.getAttribute("fill") === "#999999" && i == 15) {
                                var xPos = parseFloat(rect.getAttribute("x"));
                                var yPos = parseFloat(rect.getAttribute("y"));

                                console.log("xPos", xPos);
                                console.log("yPos", yPos);

                                var bondCard = document.getElementById("line_chart").appendChild(document.createElement("img"));
                                bondCard.src = "assets/pine_banner2.png";
                                bondCard.className = "bond_card";
                                // 16x16 (image size in this example)
                                bondCard.style.bottom = xPos - 60 + "px";
                                bondCard.style.left = yPos + "px";
                            }
                        });
                    }
                }
            }
        },
        packages: ["corechart"],
    });
}
