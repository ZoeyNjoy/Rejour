//헤더 메뉴바
var lnb = $(".inner").offset().top;
$(window).scroll(function() {
  	var window = $(this).scrollTop();

    // $("main").hide();
    if(lnb <= window){
      $("header nav").addClass("fixed");
      $("main").addClass("blank");
    } else {
      $("header nav").removeClass("fixed");
      $("main").removeClass("blank");
    }
});


