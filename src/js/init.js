//@prepros-append slick.min.js

$(document).ready(function(){
    $('.slider__wrapper').slick({
     dots: true,
     accessibility: false,
     autoplay: true,
     arrows: false,
     draggable: false,
     touchMove: false,
     infinite: false,
     fade: true,
    });
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
    $('.map').css('height','170px');
    $(this).css('height','100%');
    $('.map__item').css('padding-top','0px');
    currentMap = 0;
  }

})