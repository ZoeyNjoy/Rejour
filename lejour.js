//헤더 메뉴바
var lnb = $(".inner").offset().top;
$(window).scroll(function() {
  	var window = $(this).scrollTop();

    // $("main").hide();
    if(lnb <= window){
      $("header nav").addClass("fixed");
      $("main").show();
      $("main").addClass("blank");
    } else {
      $("header nav").removeClass("fixed");
      $("main").removeClass("blank");
    }
});

// 모바일 아코디언메뉴
$('.m_sub .depth02').hide();
$(".m_sub a").on('click', function () {
  $(this).next().slideToggle();
});



var mediaView = window.matchMedia(`(max-width:1024px)`)
$(function(){
  if(mediaView.matches===true){
    $(".m_bar").on('click', function () {
      $(this).next().slideToggle();
    });
    $('.slide_menu').hide();
    $('.gnb .sub').click(function(){
      $(this).addClass('click');
      $('.slide_menu').slideDown();
    });
    $('.gnb li:not(.sub)').click(function(){
      $('.gnb .sub').removeClass('click');
      $('.slide_menu').slideUp(500);
    });
  }else{
    $('.slide_menu').hide();
    $('.gnb .sub').mouseover(function(){
      $('.slide_menu').slideDown(500);
    });
    $('.gnb li:not(.sub)').mouseleave(function(){
      $('.slide_menu').slideUp(500);
    });
  }
});
var burger = $('.m_bar');

burger.each(function(index){
  var $this = $(this);
  
  $this.on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('active-1');
  })
});



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

// 상단 이벤트
var swiper = new Swiper(".event", {
  breakpoints: {
    768: {
      slidesPerView:3,
      autoplay:false,
    },
    640: {
      slidesPerView: 1,
      speed : 1000,
    },
  },
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

// 르쥬르셀렉션메뉴
var menuList = new Swiper('.menu_list', {
  breakpoints: {
    1024: {
      slidesPerView: 'auto',
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 10
    }
  },
});

// 이벤트슬라이드
var eventSlide = new Swiper(".event_slide", {
  spaceBetween: 0,
  centeredSlides: true,
  loop: true,
	speed : 3000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});


// 리뷰슬라이드
var review = new Swiper(".review", {
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

// 슬라이더 일시정지 버튼
/*var btnFlag = true;
$('.review-wrap .btn_pause').on('click', function () {
  if (btnFlag) {
    $(this).addClass('on');
    $(this).html('PLAY');
    review.autoplay.stop();
  } else {
    $(this).removeClass('on');
    $(this).html('STOP');
    review.autoplay.start();
  }
  btnFlag = !btnFlag;
  });*/


  // 탑버튼
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




//
setTimeout(function(){
    $('.menu_list .swiper-wrapper').hide();
    $('.menu_list .swiper-wrapper').css("opacity","1");
    $(".menu_list .swiper-wrapper").eq(0).show();
  },100);

$("main .menubar").each(function(){
  var tab = $(this).find(".cate a");
  var cont = $(this).find(".menu_list .swiper-wrapper");

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

  
$('.top').on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, 800);
});
$(window)
.on('scroll', function () {
  var st = $(this).scrollTop();

  if (st > 80) {
    $('.top').fadeIn(500);
  } else {
    $('.top').fadeOut(0);
  }
})
.trigger('scroll');


