var key = 0;
var sec1Li = $(".sec1Main>ul>li");
var spanList = $(".spanList span.list");

sec1Li.eq(0).show().siblings().hide();
//AutoSlide : Brand
function fadeAutoSlide() {
  key++;
  //key가 0일 때,
  if (key == 0) {
    //spanList(key)에 'on'클래스, 나머지는 'on'클래스 제거
    spanList.eq(key).addClass("on").siblings().removeClass("on");
  }
  //sec1>ul>li는 key값에 따라 fadein, fadeout
  sec1Li.eq(key).fadeIn(1000).siblings().fadeOut(1000);

  //96.25px씩 key값에 따라 증가 -> goBar 저장
  var goBar = key * 96.25;
  //좌측 슬라이드바의 높이는 gobar에 의해 늘어나고
  $(".slide-bar")
    .stop()
    .delay()
    .animate(
      {
        height: goBar,
      },
      800,
      function () {
        //list는 key값에 따라 'on'클래스를 줌.
        $("span.list").eq(key).addClass("on");
      }
    );
  //sec1>ul>li의 길이 -1 이 key값보다 같거나 클 때 AND goBar의 높이가 385보다 같거나 클 때
  if (key >= sec1Li.length - 1 && goBar >= 385) {
    //key값은 -1로 초기화
    key = -1;
    return false;
  }
} //5초마다 AutoSlide 함수 진행.
var setIn = setInterval(fadeAutoSlide, 3000);

//hover시 자동갤러리 Stop,Start 제어
var brandSince = $(".sec1Main>ul>li span.sec1Text");
brandSince.hover(
  function () {
    clearInterval(setIn);
  },
  function () {
    setIn = setInterval(fadeAutoSlide, 2000);
  }
);
