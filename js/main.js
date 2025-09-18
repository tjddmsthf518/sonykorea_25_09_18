$(document).ready(function(){

  $('.menu_bar').click(function(){
    $('.sub_menu_wrap').addClass("active")
  });

  $('.close').click(function(){
    $('.sub_menu_wrap').removeClass("active")
  });

  // $('.store_click').each(function(num){
  //   $(this).attr("data-num", num)
  // });

  // $('.store_click').click(function(){
  //   var clicked = $(this).attr("data-num");

  //   if(clicked == 0){
  //     $('.store ul').css({
  //       display: "block"
  //     });

  //     clicked++;
      
  //   }else if(clicked == 1){
  //     $('.store ul').css({
  //       display: "none"
  //     });

  //     clicked = 0;
  //   }

  // });

  var clicked = "on";

  $('.store_click').click(function(){
    if(clicked == "on"){
      $('.store_wrap').css({
        display: "block"
      });

      $('.store_click img').css({
        transform: "rotate(-180deg)"
      });

      clicked = "off"
    }else if(clicked == "off"){
      $('.store_wrap').css({
        display: "none"
      });

      $('.store_click img').css({
        transform: "rotate(0deg)"
      });

      clicked = "on"
    }
  });

  var swiper = new Swiper(".con_wrap_2", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".sec_4", {
    slidesPerView: 2.3,
    spaceBetween: 20,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 3.7,
        spaceBetween: 35,
      },
    },
  });

  var swiper = new Swiper(".mo_con_wrap_2", {
    slidesPerView: 1.3,
    spaceBetween: 16,
    grabCursor: true,
  });

  var swiper = new Swiper(".sec_5", {
    slidesPerView: 3,
    spaceBetween: 16,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 100,
      disableOnInteraction: false,
    },
    speed: 5000,
    effect: "slide",
    loop: true,
    breakpoints: {
      640: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  });
});
