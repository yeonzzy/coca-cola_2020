//윈도우 로드되면 eventGallery 실행.
$(document).ready(function () {
  //배열로 배경넣기
  var eventGallLi = $(".eventGallery>ul>li");
  var gallBgArr = [];
  for (var i = 0; i < eventGallLi.length; i++) {
    gallBgArr.push("url(img/contents/section04/sec04-event-img0" + i + ".jpg) no-repeat 50%");
    eventGallLi.eq(i).css({
      background: gallBgArr[i],
      "background-size": "cover",
    });
  }
  //이벤트갤러리 함수 생성 :  append이용 -> 3초마다 append
  function eventGallery() {
    var eventGallLi = $(".eventGallery>ul>li");
    $(".eventGallery>ul").append(eventGallLi.eq(0));
    //항상 가운데에 on2클래스 나머지들은 on2클래스 제거
    //처음엔 eq(2)에 on2클래스 (0-1-2-3-4) : html
    //append되면서 eq(3)이 eq(2)자리로 이동하므로,
    //eq(3)에 on2클래스 나머지는 on2클래스 제거
    eventGallLi.eq(3).addClass("on2").siblings().removeClass("on2");
  }
  var timer = setInterval(eventGallery, 3500);

  //마우스 오버, 아웃 시 setInterval 제어
  var eventGallLi = $(".eventGallery>ul>li");
  eventGallLi.hover(
    function () {
      clearInterval(timer);
    },
    function () {
      timer = setInterval(eventGallery, 3000);
    }
  );
  //arrow img 클릭 시 이전-다음 제어
  //arrow left 클릭 시 이전으로
  $("span.arrow.left img").on("click", prevFunc);
  //이전 : append 이용
  function prevFunc() {
    var eventGallLi = $(".eventGallery>ul>li");
    $(".eventGallery>ul").append(eventGallLi.eq(0));
    eventGallLi.eq(3).addClass("on2").siblings().removeClass("on2");
  }
  //arrow right 클릭 시 다음으로
  $("span.arrow.right img").on("click", nextFunc);
  //다음 : prepend 이용
  function nextFunc() {
    var eventGallLi = $(".eventGallery>ul>li");
    $(".eventGallery>ul").prepend(eventGallLi.last());
    //eq(1)이 prepend되면 eq(2)자리로 이동하므로,
    //eq(1)에 'on2'클래스 나머지는 on2클래스 제거
    eventGallLi.eq(1).addClass("on2").siblings().removeClass("on2");
  }
});
