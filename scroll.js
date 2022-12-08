//헤더 메뉴바
var lnb = $(".inner").offset().top;
$(window).scroll(function() {
  	var window = $(this).scrollTop();

    if(lnb <= window) {
      $("header nav").addClass("fixed");
      $("main").addClass("blank");
    } else {
      $("header nav").removeClass("fixed");
      $("main").removeClass("blank");
    }
});
$(function(){
  $('.slide_menu').hide();
  $('.gnb .sub').mouseover(function(){
    $('.slide_menu').slideDown(500);
  });
  $('.slide_menu').mouseleave(function(){
    $('.slide_menu').slideUp(500);
  });
});



// $(function(){
//   var value=window.scrollY;
//   $('.slide_menu').hide();
//   $('.gnb .sub').mouseover(function(){
//     $('.slide_menu').slideDown(500);
//   });
//   $('.slide_menu').mouseleave(function(){
//     $('.slide_menu').slideUp(500);
//   });
// });


// $(function(){
//     var value=window.scrollY;

//     $('.event', function(){
//         if(value>30){
//             $(this).slideDown(500)
//         }
//     });
//   });

