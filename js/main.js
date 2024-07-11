$(document).ready(function () {

    $(window).on('scroll', function () {
        if ($(window).scrollTop()) {
            $("header").addClass("header_active");
            $("header .logo").addClass("active");
            $("header .logo_big").hide();
        } else {
            $("header").removeClass("header_active");
            $("header .logo").removeClass("active");
            $("header .logo_big").show();
        };
        /*윈도우객체 선택 후 스크롤 감지하면 함수(if문 실행) 스크롤거리가 0보다 크면 참 작으면 거짓*/
    });
    $(".search_btn").click(function () {
        $(".search_box").toggleClass("search_active");
    });
    $(".search_box .x_btn").click(function () {
        $(".search_box").removeClass("search_active");
    });
    /*검색버튼 클릭시 검색창 출력*/
    $(".side_menu_btn").click(function () {
        $(".side_menu_box").toggleClass("side_menu_active");
    });
    $(".side_menu_box .x_btn").click(function () {
        $(".side_menu_box").removeClass("side_menu_active");
    });
    gsap.from(".men_sec", {
        scrollTrigger: {
            trigger: ".men_sec", // 요소가 뷰포트에 드러나는 순간부터 애니메이션이 작동
            start: "-500px top", // 애니메이션 시작시점
            end: "-100px bottom", // 애니메이션 종료시점
            scrub: 10,
            markers: false,// 트리거 마커의 표시(boolean)
        },
        x: 500
    });
    gsap.from(".women_sec", {
        scrollTrigger: {
            trigger: ".women_sec",
            start: "-500px 100px",
            end: "-100px bottom",
            scrub: 10,
            markers: false,
        },
        x: -500
    });
    gsap.from(".season_sec > .txt_box h3", {
        scrollTrigger: {
            trigger: ".season_sec",
            start: "-400px 100px",
            end: "-100px bottom",
            scrub: 3,
            markers: false,
        },
        x: -800,
    });
    gsap.from(".season_sec > .txt_box > p", {
        scrollTrigger: {
            trigger: ".season_sec",
            start: "-200px 100px",
            end: "-100px bottom",
            scrub: 5,
            markers: false,
        },
        x: -500,
    });
    gsap.from(".kids_sec .txt_btn", {
        scrollTrigger: {
            trigger: ".kids_sec",
            start: "-200px 100px",
            end: "-100px bottom",
            scrub: 2,
            markers: false,
        },
        x: -1300,
    });
    gsap.from(".shoes-bags_sec .imgs_shoes", {
        scrollTrigger: {
            trigger: ".shoes-bags_sec",
            start: "-200px 100px",
            end: "-100px bottom",
            scrub: 2,
            markers: false,
        },
        x: 1000,
    });
    gsap.from(".shoes-bags_sec .imgs_bags", {
        scrollTrigger: {
            trigger: ".shoes-bags_sec",
            start: "700px 100px",
            end: "-100px bottom",
            scrub: 2,
            markers: false,
        },
        x: -1000,
    });
});
