//items>ul>li 이미지넣기
var itemsLi = $(".items>ul>li");
var itemsBgArr = [];
for (var i = 0; i < itemsLi.length; i++) {
  itemsBgArr.push("url(img/contents/section02/sec02_items0" + i + ".png) no-repeat 50%");
  itemsLi.eq(i).css({
    background: itemsBgArr[i],
  });
}

var arrowLeft = $("span.slideArrow.left");
var arrowRight = $("span.slideArrow.right");

arrowLeft.on("click", arrowLeftFunc);

function arrowLeftFunc() {
  var itemsLi = $(".items>ul>li");
  $(".items>ul").append(itemsLi.eq(0));
}
arrowRight.on("click", arrowRightFunc);

function arrowRightFunc() {
  var itemsLi = $(".items>ul>li");
  $(".items>ul").prepend(itemsLi.last());
}

//items>ul>li hover효과넣기
//cola hover
itemsLi.eq(0).hover(
  function () {
    itemsLi.eq(0).css({
      background: "url(img/contents/section02/sec02_items00-h.png) no-repeat 50%",
    });
  },
  function () {
    itemsLi.eq(0).css({
      background: "url(img/contents/section02/sec02_items00.png) no-repeat 50%",
    });
  }
);

//sprite hover
itemsLi.eq(1).hover(
  function () {
    itemsLi.eq(1).css({
      background: "url(img/contents/section02/sec02_items01-h.png) no-repeat 50%",
    });
  },
  function () {
    itemsLi.eq(1).css({
      background: "url(img/contents/section02/sec02_items01.png) no-repeat 50%",
    });
  }
);

//fanta hover
itemsLi.eq(2).hover(
  function () {
    itemsLi.eq(2).css({
      background: "url(img/contents/section02/sec02_items02-h.png) no-repeat 50%",
    });
  },
  function () {
    itemsLi.eq(2).css({
      background: "url(img/contents/section02/sec02_items02.png) no-repeat 50%",
    });
  }
);

//powerade hover
itemsLi.eq(3).hover(
  function () {
    itemsLi.eq(3).css({
      background: "url(img/contents/section02/sec02_items03-h.png) no-repeat 50%",
    });
  },
  function () {
    itemsLi.eq(3).css({
      background: "url(img/contents/section02/sec02_items03.png) no-repeat 50%",
    });
  }
);

//minutemaid hover
itemsLi.eq(4).hover(
  function () {
    itemsLi.eq(4).css({
      background: "url(img/contents/section02/sec02_items04-h.png) no-repeat 50%",
    });
  },
  function () {
    itemsLi.eq(4).css({
      background: "url(img/contents/section02/sec02_items04.png) no-repeat 50%",
    });
  }
);

//georgia hover
itemsLi.eq(5).hover(
  function () {
    itemsLi.eq(5).css({
      background: "url(img/contents/section02/sec02_items05-h.png) no-repeat 50%",
    });
  },
  function () {
    itemsLi.eq(5).css({
      background: "url(img/contents/section02/sec02_items05.png) no-repeat 50%",
    });
  }
);

//toreta hover
itemsLi.eq(6).hover(
  function () {
    itemsLi.eq(6).css({
      background: "url(img/contents/section02/sec02_items06-h.png) no-repeat 50%",
    });
  },
  function () {
    itemsLi.eq(6).css({
      background: "url(img/contents/section02/sec02_items06.png) no-repeat 50%",
    });
  }
);

//vitaminWater hover
itemsLi.eq(7).hover(
  function () {
    itemsLi.eq(7).css({
      background: "url(img/contents/section02/sec02_items07-h.png) no-repeat 50%",
    });
  },
  function () {
    itemsLi.eq(7).css({
      background: "url(img/contents/section02/sec02_items07.png) no-repeat 50%",
    });
  }
);

//sunneyTen hover
itemsLi.eq(8).hover(
  function () {
    itemsLi.eq(8).css({
      background: "url(img/contents/section02/sec02_items08-h.png) no-repeat 50%",
    });
  },
  function () {
    itemsLi.eq(8).css({
      background: "url(img/contents/section02/sec02_items08.png) no-repeat 50%",
    });
  }
);

//seagram hover
itemsLi.eq(9).hover(
  function () {
    itemsLi.eq(9).css({
      background: "url(img/contents/section02/sec02_items09-h.png) no-repeat 50%",
    });
  },
  function () {
    itemsLi.eq(9).css({
      background: "url(img/contents/section02/sec02_items09.png) no-repeat 50%",
    });
  }
);
