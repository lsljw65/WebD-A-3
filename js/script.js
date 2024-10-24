$(function () {
  //   슬라이드
  var count = 0;
  setInterval(function () {
    if (count === 3) {
      count = 0;
    }
    $(".sliders")
      .stop()
      .animate({
        left: -1200 * count,
      });
    count++;
  }, 3000);
  //   tab구현
  $(".tab-content").hide();
  $(".tab-content").eq(0).show();
  $(".tabs>li>a").click(function () {
    console.log("클릭");
    $(".tab-content").hide();
    $(this.hash).show().css({ display: "flex" });
    $(".tabs>li>a").removeClass("active");
    $(this).addClass("active");
    return false;
  });
});
