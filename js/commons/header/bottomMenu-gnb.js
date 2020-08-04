var gnbLi = $(".gnb>ul>li");

gnbLi.on("mouseenter", subShowFunc);

function subShowFunc() {
  $(".subMenu").slideDown();
}

$(".inner-gnb").on("mouseleave", subHideFunc);

function subHideFunc() {
  $(".subMenu").stop().slideUp();
}

var subUl = $(".subMenu>ul");
//1.회사소개 : subMenu hover 시 mainGnb hover 상태
subUl.eq(0).hover(
  function () {
    gnbLi.eq(0).css({
      background: "#e61d2a",
    });
    $(".gnb>ul>li a").eq(0).css({
      "font-weight": "bold",
      color: "#fff",
    });
  },
  function () {
    gnbLi.eq(0).css({
      background: "#fff",
    });
    $(".gnb>ul>li a").eq(0).css({
      "font-weight": "normal",
      color: "#000",
    });
  }
);
//2. 브랜드 : subMenu hover 시 mainGnb hover 상태
subUl.eq(1).hover(
  function () {
    gnbLi.eq(1).css({
      background: "#e61d2a",
    });
    $(".gnb>ul>li a").eq(1).css({
      "font-weight": "bold",
      color: "#fff",
    });
  },
  function () {
    gnbLi.eq(1).css({
      background: "#fff",
    });
    $(".gnb>ul>li a").eq(1).css({
      "font-weight": "normal",
      color: "#000",
    });
  }
);
//3. 스토리 : subMenu hover 시 mainGnb hover 상태
subUl.eq(2).hover(
  function () {
    gnbLi.eq(2).css({
      background: "#e61d2a",
    });
    $(".gnb>ul>li a").eq(2).css({
      "font-weight": "bold",
      color: "#fff",
    });
  },
  function () {
    gnbLi.eq(2).css({
      background: "#fff",
    });
    $(".gnb>ul>li a").eq(2).css({
      "font-weight": "normal",
      color: "#000",
    });
  }
);
//4. 라이프 : subMenu hover 시 mainGnb hover 상태
subUl.eq(3).hover(
  function () {
    gnbLi.eq(3).css({
      background: "#e61d2a",
    });
    $(".gnb>ul>li a").eq(3).css({
      "font-weight": "bold",
      color: "#fff",
    });
  },
  function () {
    gnbLi.eq(3).css({
      background: "#fff",
    });
    $(".gnb>ul>li a").eq(3).css({
      "font-weight": "normal",
      color: "#000",
    });
  }
);
//5. 커뮤니티 : subMenu hover 시 mainGnb hover 상태
subUl.eq(4).hover(
  function () {
    gnbLi.eq(4).css({
      background: "#e61d2a",
    });
    $(".gnb>ul>li a").eq(4).css({
      "font-weight": "bold",
      color: "#fff",
    });
  },
  function () {
    gnbLi.eq(4).css({
      background: "#fff",
    });
    $(".gnb>ul>li a").eq(4).css({
      "font-weight": "normal",
      color: "#000",
    });
  }
);

//scroll시 menu 변화!!!!!!!!!!!!!!!!!!!!!!!
$(window).on("scroll", scrollFunc);

function scrollFunc() {
  var docScrollTop = $(document).scrollTop();
  if (docScrollTop > 300) {
    $(".inner-header").css({
      display: "none",
    });
    $(".scroll-header").fadeIn();
  } else if (docScrollTop <= 200) {
    $(".scroll-header").fadeOut(0);
    $(".inner-header").css({
      display: "block",
    });
  }
}

var sGnbLi = $(".sGnb>ul>li");
for (var i = 1; i < sGnbLi.length - 2; i++) {
  sGnbLi.eq(i).on("mouseenter", sGnbEnterFunc);
  function sGnbEnterFunc() {
    $(".sub").stop().slideDown();
    $(".inner-scroll-header").animate({
      height: "270px",
    });
  }
}

$(".sub").on("mouseleave", sGnbLeaveFunc);
function sGnbLeaveFunc() {
  $(".sub").stop().slideUp();
  $(".inner-scroll-header").animate({
    height: "70px",
  });
}

sGnbLi.eq(6).on('click',function(){
  location.href = "login.html";
});