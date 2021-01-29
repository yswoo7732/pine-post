const mql = window.matchMedia("(max-width: 340px)");
const mql375 = window.matchMedia("(max-width: 375px)");
const minHeight = window.matchMedia("(min-height: 800px)");

window.onload = function () {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        if (/iPhone/i.test(navigator.userAgent)) {
        }
    } else {
        console.log("not mobile");
    }

    const mainSection = document.getElementsByClassName("main_section")[0];

    plusPadding = document.getElementsByClassName("title_wrap")[0].offsetTop + document.body.clientHeight - mainSection.offsetHeight;
    mainSection.style.paddingTop = (plusPadding > 0 ? plusPadding : 0) + "px";

    const btnOK = document.getElementById("btnOK");
    const contentsContainer = document.getElementsByClassName("contents_container")[0];

    const salaryInput = document.getElementsByClassName("slider")[0];
    const depositInput = document.getElementsByClassName("slider")[1];

    btnOK.addEventListener("click", () => {
        if (salaryInput.value == 0) {
            modal("main_modal", "연봉을 선택해주세요.");
            return false;
        }

        if (depositInput.value == 0) {
            console.log(depositInput);

            modal("main_modal", "연금저축액을 선택해주세요.");
            return false;
        }

        contentsContainer.style.display = "";
        gsap.to(window, { scrollTo: { y: ".result_wrapper" } });

        document.querySelector(".result_container").classList.add("result_container_active");
        document.querySelector(".result_section_tip").classList.add("result_container_active");

        // 확인 클릭시 animation
        ScrollTrigger.create({
            trigger: ".benefit_section",
            start: "top center",
            once: true,
            toggleClass: { targets: ".add_square", className: "add_square_active" },
        });

        ScrollTrigger.create({
            trigger: ".benefit_section",
            start: "top center",
            once: true,
            toggleClass: { targets: ".square_tip", className: "square_tip_active" },
        });

        ScrollTrigger.create({
            trigger: ".square_wrapper",
            start: "top center",
            end: "top center",
            // markers: true,
            onEnter: () => showBtn("onEnter"),
            onEnterBack: () => showBtn("onEnterBack"),
        });

        // 세액공제율
        const perTax = document.getElementById("per_tax");
        // 공제 금액
        const taxDeductionAmt = document.getElementById("tax_deduction_amt");
        // 최대 공제 한도
        const taxCreditLimit = document.getElementById("tax_credit_limit");
        // 최대 공제 금액
        const maxDeductionAmt = document.getElementById("max_deduction_amt");

        let newLine = "";

        // 연봉 5500만원 이하
        if (salaryInput.value > 0 && salaryInput.value <= 100) {
            let taxDeductionRate = "16.5";
            let taxCreditLimitTxt = "400만원";
            let maxDeductionAmtTxt = "66만원";
            let taxDeductionAmtTxt = "";

            // 연금저축액 100만원일때
            if (depositInput.value == 100) {
                taxDeductionAmtTxt = "16만 5천원";
            }
            // 연금저축액 200만원일때
            else if (depositInput.value == 200) {
                taxDeductionAmtTxt = "33만원";
            }
            // 연금저축액 300만원일때
            else if (depositInput.value == 300) {
                taxDeductionAmtTxt = "49만 5천원";
            }
            // 연금저축액 400만원일때
            else if (depositInput.value == 400) {
                taxDeductionAmtTxt = "66만원";
            }

            // perTax.innerText = taxDeductionRate;
            animateValue(perTax, 0, taxDeductionRate, 1500);

            newLine = mql375.matches ? "\n" : "";

            taxDeductionAmt.innerText = newLine + taxDeductionAmtTxt;
            taxCreditLimit.innerText = taxCreditLimitTxt;
            maxDeductionAmt.innerText = maxDeductionAmtTxt;
        } else if (salaryInput.value > 100 && salaryInput.value <= 200) {
            // 연봉 5500만원 ~ 1억2천만원
            let taxDeductionRate = "13.2";
            let taxCreditLimitTxt = "400만원";
            let maxDeductionAmtTxt = "52만 8천원";
            let taxDeductionAmtTxt = "";

            // 연금저축액 100만원일때
            if (depositInput.value == 100) {
                taxDeductionAmtTxt = "13만 2천원";
            }
            // 연금저축액 200만원일때
            else if (depositInput.value == 200) {
                taxDeductionAmtTxt = "26만 4천원";
            }
            // 연금저축액 300만원일때
            else if (depositInput.value == 300) {
                taxDeductionAmtTxt = "39만 6천원";
            }
            // 연금저축액 400만원일때
            else if (depositInput.value == 400) {
                taxDeductionAmtTxt = "52만 8천원";
            }

            animateValue(perTax, 0, taxDeductionRate, 1500);

            newLine = mql375.matches ? "\n" : "";

            taxDeductionAmt.innerText = newLine + taxDeductionAmtTxt;
            taxCreditLimit.innerText = taxCreditLimitTxt;
            maxDeductionAmt.innerText = maxDeductionAmtTxt;
        } else {
            // 1억 2천만원 초과
            let taxDeductionRate = "13.2";
            let taxCreditLimitTxt = "300만원";
            let maxDeductionAmtTxt = "39만 6천원";
            let taxDeductionAmtTxt = "";

            // 연금저축액 100만원일때
            if (depositInput.value == 100) {
                taxDeductionAmtTxt = "26만 4천원";
            }
            // 연금저축액 200만원일때
            else if (depositInput.value == 200) {
                taxDeductionAmtTxt = "26만 4천원";
            }
            // 연금저축액 300만원일때
            else if (depositInput.value == 300) {
                taxDeductionAmtTxt = "39만 6천원";
            }
            // 연금저축액 400만원일때
            else if (depositInput.value == 400) {
                taxDeductionAmtTxt = "39만 6천원";
            }

            // perTax.innerText = taxDeductionRate;
            animateValue(perTax, 0, taxDeductionRate, 1500);

            newLine = mql375.matches ? "\n" : "";

            taxDeductionAmt.innerText = newLine + taxDeductionAmtTxt;
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
            trigger: ".graph_start",
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
// createLineChart();

function modal(id, modalTxt) {
    var zIndex = 9999;
    var modal = document.getElementById(id);

    // 모달 div 뒤에 희끄무레한 레이어
    var bg = document.createElement("div");
    bg.setStyle({
        position: "fixed",
        zIndex: zIndex,
        left: "0px",
        top: "0px",
        width: "100%",
        height: "100%",
        overflow: "auto",
        // 레이어 색갈은 여기서 바꾸면 됨
        backgroundColor: "rgba(0,0,0,0.6)",
    });
    document.body.append(bg);

    // 닫기 버튼 처리, 시꺼먼 레이어와 모달 div 지우기
    modal.querySelector(".modal_close_btn").addEventListener("click", function () {
        bg.remove();
        modal.style.display = "none";
    });

    modal.setStyle({
        position: "fixed",
        display: "block",
        // boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",

        // 시꺼먼 레이어 보다 한칸 위에 보이기
        zIndex: zIndex + 1,

        // div center 정렬
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        msTransform: "translate(-50%, -50%)",
        webkitTransform: "translate(-50%, -50%)",
    });

    document.querySelector(".modal_txt").innerText = modalTxt;
}

// Element 에 style 한번에 오브젝트로 설정하는 함수 추가
Element.prototype.setStyle = function (styles) {
    for (var k in styles) this.style[k] = styles[k];
    return this;
};

// 연금저축펀드 투자하기 버튼 보이기
function showBtn(flag) {
    const productLink = document.querySelector(".product_link");

    if (flag == "onEnter") {
        productLink.style.bottom = minHeight.matches ? "20px" : "0px";
    }

    if (flag == "onEnterBack") {
        productLink.style.bottom = "-100px";
    }
}

// 연봉 범위에 따른 tooltip 텍스트 및 위치조정
function handleSalarySliderValuePosition(input) {
    const rangeTip = document.getElementsByClassName("__range-output-square")[0];
    const slider = document.getElementsByClassName("slider")[0];
    const max = parseInt(input.max);
    const value = parseInt(input.value);
    let thumbSize = 33;

    if (value == 0) {
        if (mql.matches) {
            rangeTip.style.width = "45px";
        } else {
            rangeTip.style.width = "50px";
        }
        rangeTip.innerText = "0원";
    } else if (value > 0 && value <= 100) {
        if (mql.matches) {
            rangeTip.style.width = "73px";
        } else {
            rangeTip.style.width = "76px";
        }
        rangeTip.innerText = "5,500만원 이하";
    } else if (value > 100 && value <= 200) {
        if (mql.matches) {
            rangeTip.style.width = "115px";
        } else {
            rangeTip.style.width = "122px";
        }
        rangeTip.innerText = "5,500만원 ~ 1억 2천만원";
    } else {
        if (mql.matches) {
            rangeTip.style.width = "76px";
        } else {
            rangeTip.style.width = "88px";
        }
        rangeTip.innerText = "1억 2천만원 초과";
    }

    const multiplier = value / max;
    const thumbOffset = thumbSize * multiplier;
    const priceInputOffset = (thumbSize - document.body.clientWidth) / 2;

    rangeTip.style.left = input.clientWidth * multiplier - thumbOffset + thumbSize + "px";

    // console.log(input.clientWidth * multiplier - thumbOffset  + "px");
}

// 연금 저축액 범위에 따른 tooltip 텍스트 및 위치조정
function handleDepositSliderValuePosition(input) {
    const rangeTip = document.getElementsByClassName("__range-output-square")[1];
    const thumbSize = 35;
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
// createLineChart();

function createLineChart() {
    let chartWidth = 0;
    let chartHeight = 0;

    if (mql.matches) {
        chartWidth = 350;
        chartHeight = 200;
    } else {
        chartWidth = 400;
        chartHeight = 300;
    }

    google.charts.load("45", {
        callback: function () {
            var rawData = [
                // [1, 500, null],
                // [2, 600, null],
                // [3, 400, null],
                // [4, 550, null],
                // [5, 800, null],
                // [6, 1700, ""],
                // [7, 3500, null],
                // [8, 3800, null],
                // [9, 800, null],
                // [10, 400, ""],
                // [11, 300, null],
                // [12, 200, null],
                [0, 2080, 2311, ""],
                [0.2, 2200, 2311, ""],
                [0.4, 2285, 2311, ""],
                [0.6, 2299, 2311, ""],
                [0.8, 2250, 2311, ""],
                [1, 2330, 2311, ""],
                [1.2, 2350, 2311, ""],
                [1.4, 2228, 2311, ""],
                [1.6, 2288, 2311, ""],
                [1.8, 2311, 2311, ""],
                [2, 2280, 2344, ""],
                [2.2, 2400, 2377, ""],
                [2.4, 2420, 2410, ""],
                [2.6, 2470, 2443, ""],
                [2.8, 2450, 2476, ""],
                [3, 2420, 2509, ""],
                [3.2, 2500, 2542, ""],
                [3.4, 2598, 2575, ""],
                // [3.6, 2610, 2608, ""],
                // [3.8, 2615, 2641, ""],
                // [4, 2680, 2674, ""],
                // [4.2, 2690, 2707, ""],
                // [4.4, 2820, 2740, ""],
                // [4.6, 2810, 2773, ""],
                // [4.8, 2800, 2806, ""],
                // [5, 2950, 2839, ""],
                // [5.2, 2980, 2872, ""],
                // [5.4, 3040, 2905, ""],
                // [5.6, 3050, 2938, ""],
                // [5.8, 3120, 2971, ""],
                // [6, 3141, 3004, ""],
                // [6.2, 3149, 3037, ""],
                // [6.4, 3100, 3070, ""],
                // [6.8, 3140, 3070, ""],
                // [7, 3120, 3070, ""],
                // [7.2, 3120, 3070, ""],
                // [7.4, 3150, 3070, ""],
                // [7.6, 3180, 3070, ""],
                // [7.8, 3160, 3070, ""],
                // [8, 3190, 3070, ""],

                // [8.2, 3188, 3070, ""],
                // [8.4, 3020, 3030, ""],
                // [8.6, 2910, 2990, ""],
                // [8.8, 2890, 2950, ""],
                // [9, 2880, 2910, ""],
                // [9.2, 2780, 2870, ""],
                // [9.4, 2625, 2830, ""],
                // [9.6, 2614, 2790, ""],
                // [9.8, 2620, 2750, ""],
                // [10, 2639, 2710, ""],
                // [10.2, 2624, 2624, ""],
                // [10.4, 2590, 2590, ""],
                // [10.6, 2570, 2570, ""],
                // [10.8, 2549, 2549, ""],
                // [11, 2540, 2540, ""],
                // [11.2, 2546, 2546, ""],
                // [11.4, 2528, 2528, ""],
                // [11.6, 2500, 2500, ""],
                // [11.8, 2526, 2526, ""],
                // [12, 2520, 2520, ""],
            ];

            var data = new google.visualization.DataTable({
                cols: [
                    { id: "", label: "X", type: "number" },
                    { id: "", label: "Y", type: "number" },
                    { id: "", label: "Y", type: "number" },
                ],
            });

            data.addColumn({ type: "string", role: "annotation" });
            var options = {
                theme: "material",
                focusTarget: "category",
                title: "코스피 지수",
                colors: ["#d62a56", "#000"],
                colors: ["#d62a56", "transparent"],
                width: chartWidth,
                height: chartHeight,
                // pointSize: 4,
                tooltip: { trigger: "none" },
                animation: {
                    startup: true,
                    //   duration: 6,
                    easing: "out",
                },
                legend: "none",
                hAxis: {
                    viewWindow: {
                        min: 0.2,
                        max: 12,
                    },
                    // ticks: ["03/02", "06/01", "09/01", "12/01"],
                    title: "월별",
                },
                vAxis: {
                    gridline: 4,
                    viewWindow: {
                        min: 1860,
                        max: 3350,
                    },
                },
                annotations: {
                    stemColor: "none",
                },
            };

            var chart = new google.visualization.LineChart(document.getElementById("line_chart"));

            drawChart();
            setInterval(drawChart, 70);
            var rowIndex = 0;

            function drawChart() {
                if (rowIndex < rawData.length) {
                    data.addRow(rawData[rowIndex++]);

                    if (rowIndex == 18) {
                        document.getElementsByClassName("commend-fund")[0].classList.add("commend-fund-active");

                        setTimeout(() => {
                            rawData.push(
                                [3.6, 2610, 2608, ""],
                                [3.8, 2615, 2641, ""],
                                [4, 2680, 2674, ""],
                                [4.2, 2690, 2740, ""],
                                [4.4, 2820, 2790, ""],
                                [4.6, 2810, 2840, ""],
                                [4.8, 2800, 2890, ""],
                                [5, 2950, 2940, ""],
                                [5.2, 2980, 2990, ""],
                                [5.4, 3040, 3040, ""],
                                [5.6, 3050, 3090, ""],
                                [5.8, 3120, 3140, ""],
                                [6, 3141, 3190, ""],
                                [6.2, 3149, 3190, ""],
                                [6.4, 3100, 3190, ""],
                                [6.8, 3140, 3190, ""],
                                [7, 3120, 3190, ""],
                                [7.2, 3120, 3200, ""],
                                [7.4, 3150, 3200, ""],
                                [7.6, 3180, 3200, ""],
                                [7.8, 3160, 3200, ""],
                                [8, 3190, 3200, ""],
                                [8.2, 3188, 3200, ""],
                                [8.4, 3020, 3200, ""],
                                [8.6, 2910, 2990, ""],
                                [8.8, 2890, 2930, ""],
                                [9, 2880, 2870, ""],
                                [9.2, 2780, 2810, ""]
                            );
                        }, 1000);

                        document.getElementsByClassName("commend-fund")[0].innerText = "주식형 펀드\n구매";
                        document.getElementsByClassName("commend-fund")[0].style.width = "63px";
                    } else if (rowIndex == 46) {
                        document.getElementsByClassName("bond_card")[0].classList.add("commend-fund-active");

                        setTimeout(() => {
                            rawData.push(
                                [9.4, 2625, 2790, ""],
                                [9.6, 2614, 2730, ""],
                                [9.8, 2620, 2610, ""],
                                [10, 2639, 2600, ""],
                                [10.2, 2624, 2590, ""],
                                [10.4, 2590, 2580, ""],
                                [10.6, 2570, 2570, ""],
                                [10.8, 2549, 2560, ""],
                                [11, 2540, 2550, ""],
                                [11.2, 2546, 2550, ""],
                                [11.4, 2528, 2550, ""],
                                [11.6, 2500, 2550, ""],
                                [11.8, 2526, 2550, ""],
                                [12, 2520, 2550, ""]
                            );
                        }, 1000);

                        document.getElementsByClassName("bond_card")[0].innerText = "채권형 펀드\n구매";
                        document.getElementsByClassName("bond_card")[0].style.width = "63px";
                        document.getElementsByClassName("bond_card")[0].style.opacity = "0.6 !important";
                    } else {
                        if (document.getElementsByClassName("commend-fund")[0]) {
                            document.getElementsByClassName("commend-fund")[0].classList.remove("commend-fund-active");
                        }
                        chart.draw(data, options);
                    }
                    // console.log(rowIndex);

                    // chart.setSelection([
                    //     { row: [rowIndex], column: null },
                    //     // { row: [6], column: null },
                    // ]);

                    var interface = chart.getChartLayoutInterface();
                    var cli = chart.getChartLayoutInterface();

                    // console.log(document.getElementById("line_chart").getElementsByTagName("path")[0].getAttribute("d"));
                    // console.log(document.getElementById("line_chart").getElementsByTagName("rect"));

                    // if (rowIndex == 7) {
                    Array.prototype.forEach.call(document.getElementById("line_chart").getElementsByTagName("rect"), function (rect, i) {
                        if (rect.getAttribute("fill") === "none") {
                            // console.log(rect,i);
                            // console.log(interface.getYLocation(rect) );

                            var xPos = parseFloat(rect.getAttribute("x"));
                            var yPos = parseFloat(rect.getAttribute("y"));

                            if (!document.getElementsByClassName("commend-fund")[0]) {
                                var stockCard = document.getElementById("line_chart").appendChild(document.createElement("div"));
                                stockCard.className = "commend-fund";
                            } else {
                                var stockCard = document.getElementsByClassName("commend-fund")[0];
                            }

                            if (!document.getElementsByClassName("bond_card")[0]) {
                                var bondCard = document.getElementById("line_chart").appendChild(document.createElement("div"));
                                bondCard.className = "bond_card";
                            } else {
                                var bondCard = document.getElementsByClassName("bond_card")[0];
                            }
                            // stockCard.style.background = "url('assets/pine_banner1.png')";

                            if (rowIndex > 0 && rowIndex < 18) {
                                stockCard.innerText = "연금\n계좌";
                                stockCard.style.opacity = 1;

                                stockCard.style.top = yPos - 55 + "px";
                                stockCard.style.left = xPos - 30 + "px";
                            } else if (rowIndex == 18) {
                                stockCard.style.opacity = 0.6;
                                // stockCard.innerText = "주식형 펀드";
                                stockCard.style.top = yPos - 55 + "px";
                                stockCard.style.left = xPos - 30 + "px";
                            } else if (rowIndex == 46) {
                                bondCard.style.top = yPos - 55 + "px";
                                bondCard.style.left = xPos - 30 + "px";
                                document.getElementsByClassName("bond_card")[0].style.opacity = "0.6 !important";

                                // stockCard.innerText = "채권형 펀드";
                            } else {
                                // stockCard.style.opacity = 0;
                                // console.log("else", rawData[rowIndex], rowIndex);
                            }

                            // console.log(rowIndex,document.getElementById("line_chart").getElementsByTagName("path")[0].getPointAtLength(xPos));

                            // var pos = document.getElementById("line_chart").getElementsByTagName("path")[0].getPointAtLength(xPos);

                            //     // var stockCard = document.getElementById("line_chart").appendChild(document.createElement("div"));
                            //     // stockCard.innerText = "주식형 펀드";
                            //     // stockCard.style.background = "url('assets/pine_banner1.png')";
                            //     // stockCard.className = "stock_card";

                            // var stockCard = document.getElementById("line_chart").appendChild(document.createElement("div"));
                            // stockCard.innerText = "▴ 주식형 펀드";
                            // stockCard.className = "commend-fund";

                            // console.log(rawData[rowIndex][1]);

                            // //     // // 16x16 (image size in this example)
                            // if (rawData[rowIndex][1] > 2470) {
                            //     // document.getElementById("fund-tooltip").style.bottom = yPos  + "px";
                            // } else {
                            //     // document.getElementById("fund-tooltip").style.bottom = yPos + "px";
                            // }
                            // // document.getElementById("fund-tooltip").style.left = xPos + "px";
                            // //     setTimeout("", 1000);
                        }
                    });
                    // }
                    // if (rowIndex == 12) {

                    //     Array.prototype.forEach.call(document.getElementById("line_chart").getElementsByTagName("rect"), function (rect, i) {
                    //             console.log(rect, i);

                    //         if (rect.getAttribute("fill") === "none" && i ==16) {
                    //             var xPos = parseFloat(rect.getAttribute("x"));
                    //             var yPos = parseFloat(rect.getAttribute("y"));

                    //             console.log("xPos", xPos);
                    //             console.log("yPos", yPos);

                    //             // var bondCard = document.getElementById("line_chart").appendChild(document.createElement("img"));
                    //             // bondCard.src = "assets/pine_banner2.png";
                    //             // bondCard.className = "bond_card";
                    //             // // 16x16 (image size in this example)
                    //             // bondCard.style.bottom = xPos - 60 + "px";
                    //             // bondCard.style.left = yPos + "px";

                    //             var bondCard = document.getElementById("line_chart").appendChild(document.createElement("div"));
                    //             bondCard.innerText = "채권형 펀드";
                    //             bondCard.className = "stock_card bond_card";
                    //             // 16x16 (image size in this example)
                    //             bondCard.style.bottom = yPos - 15 + "px";
                    //             bondCard.style.left = xPos - 15 + "px";
                    //         }
                    //     });
                    // }
                }
            }
        },
        packages: ["corechart"],
    });
}
