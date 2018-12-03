//@prepros-append slick.min.js

$(document).ready(function(){
    $('.slider__wrapper').slick({
     mobileFirst: true,
     dots: true,
     accessibility: false,
     autoplay: true,
     arrows: false,
     draggable: false,
     touchMove: true,
     infinite: false,
     fade: true,
    });
    $('.js-polo-carousel').slick({
      arrows: true,
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 720,
          settings: {
            slidesToShow: 1,
            autoplay: true,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            autoplay: true,
          }
        }
      ]
      })
  });

var currentMap = 0;
$('.map__captionwrap').click(function(){
  if (currentMap === 0) {
    $('.map').css('height','400px');
    $(this).css('height','50px');
    $('.map__item').css('padding-top','50px');
    currentMap = 1;
  }
  else {
    $('.map').css('height','');
    $(this).css('height','100%');
    $('.map__item').css('padding-top','0px');
    currentMap = 0;
  }

})
// scroll
var section = document.getElementById('js-scrollItem');
var coord = section.getBoundingClientRect().top;

$('#js-scroll').click(function(){
  $('html, body').animate({
    scrollTop: section.getBoundingClientRect().top + "px",
}, 700, 'swing');
});

//hamburger 
var hamburger = document.querySelector(".hamburger");
var nav = document.querySelector(".nav");

hamburger.addEventListener("click", function() {
    if (hamburger.classList.contains("is-active")) {
      hamburger.classList.toggle("is-active");
      nav.style='left:-100%;'
      console.log(1);
    }
    else {
      hamburger.classList.toggle("is-active");
      nav.style='left:0%;  opacity: 1;'
      console.log(2);
    }

});