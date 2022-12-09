// 메인슬라이드
var swiper = new Swiper(".main-slider", {
  spaceBetween: 0,
  centeredSlides: true,
  loop: true,
	speed : 3000,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});

//
setTimeout(function(){
    $('.menu_list ul').hide();
    $('.menu_list ul').css("opacity","1");
    $(".menu_list ul").eq(0).show();
  },100);

$("main .menubar").each(function(){
  var tab = $(this).find(".cate a");
  var cont = $(this).find(".menu_list ul");

  tab.click(function(){
    var ind=$(this).index();
    tab.removeClass("active");
    $(this).addClass("active");
    cont.removeClass("active");
    cont.eq(ind).addClass();
    cont.hide();
    cont.eq(ind).show();
  });
});
// 이벤트슬라이드
// var swiper = new Swiper(".event_slide", {
//   spaceBetween: 0,
//   centeredSlides: true,
//   loop: true,
// 	speed : 3000,
//   autoplay: {
//     delay: 3000,
//     disableOnInteraction: false,
//   },
// });


// 리뷰슬라이드
var swiper = new Swiper(".review", {
  // slidesPerView: auto,
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    }
  },
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
	speed : 800,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


var currentIndex = 0;
    var slidePosition;
    
    setInterval(function(){
        if(currentIndex < 4) {
            currentIndex ++;
        } else {
            currentIndex = 0;
        } slidePosition= currentIndex * (-30) +"px";
        
        $(".notice-slide p").animate({top: slidePosition},1000);
    },3000);


