$(document).ready(function () {
  $(".videoLogo").fadeIn(3500);
  $(".videoLogo").animate({ top: "20%" }, 1000);

  $(".lodingBar").animate({ width: "100%" }, 30000, function () {
    linkIndex();
  });

  $(".sinceTxt .inner-since1").delay(4000).animate({ top: "-200px" }, 1000);
  $(".sinceTxt .inner-since2").delay(4200).animate({ top: "-900px" }, 1000);
  $(".sinceTxt .inner-since3").delay(4400).animate({ top: "-700px" }, 1000);
  $(".sinceTxt .inner-since4").delay(4600).animate({ top: "-700px" }, 1000);

  $(".mouse")
    .delay(6000)
    .fadeIn(1000, function () {
      mouseUpDown();
    });
});
function linkIndex() {
  location.href = "index.html";
}

$(".mouse").on("click", clickFunc);
function clickFunc() {
  location.href = "index.html";
}

function mouseUpDown() {
  $(".mouse span.clickTxt").animate({ bottom: "26%" }, 1000, function () {
    $(this).animate({ bottom: "25%" }, 1000, function () {
      mouseUpDown();
    });
  });
}
