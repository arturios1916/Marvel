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