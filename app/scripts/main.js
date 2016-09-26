'use strict';
/*global google, $ */
$(document).ready(function () {


// ======================= Google Map ========================== //
  var myCenter = new google.maps.LatLng(51.1282952, 17.0307032, 15);

  function initialize() {
    var mapProp = {
      center: new google.maps.LatLng(51.1282952, 17.0307032, 15),
      zoom: 15,
      scrollwheel: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById('googleMap'), mapProp);
    var marker = new google.maps.Marker({
      position: myCenter,
      icon: 'images/pointer.png'
    });

    marker.setMap(map);

  }

  google.maps.event.addDomListener(window, 'load', initialize);


// ======================= Custom active states ========================== //
  var last = $('.custom-slider ul > li').last();
  var first = $('.custom-slider ul > li').first();

  $('.custom-slider ul > li').click(function () {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  });

  $('.main-header ul > li').click(function () {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  });

  $('.left-arrow').click(function () {
   $('.custom-slider ul > li.active').prev().addClass('active').siblings().removeClass('active');
   $('.right-arrow').css('opacity', 1);
   if (first.hasClass('active')) {
    $('.left-arrow').css('opacity', 0.3);
   }
});


  $('.right-arrow').click(function () {
    $('.custom-slider ul > li.active').next().addClass('active').siblings().removeClass('active');
    $('.left-arrow').css('opacity', 1);
    if (last.hasClass('active')) {
      $('.right-arrow').css('opacity', 0.3);
  }
  });

  // ======================= YOUTUBE ========================== //

  $('.play').click(function () {
    $('.play').hide();
    $('#custom-video').show().attr('src', 'https://www.youtube.com/embed/LBejjPV9ALQ?wmode=transparent&autoplay=1');
  });
});


  /*
  var slider = $('.custom-slider'),
    leftArrowInSlider = $('.left-arrow'),
    rightArrowInSlider = $('.right-arrow');

  function checkSliderButtons(position) {
    if (position === 'first') {
      leftArrowInSlider.addClass('disabled');
      rightArrowInSlider.removeClass('disabled');
    } else if (position === 'center') {
      leftArrowInSlider.removeClass('disabled');
      rightArrowInSlider.removeClass('disabled');
    } else if (position === 'last') {
      leftArrowInSlider.removeClass('disabled');
      rightArrowInSlider.addClass('disabled');
    }
  }

  leftArrowInSlider.click(function () {
    var activeElement = slider.find('ul > li.active').prev();
    activeElement.addClass('active').siblings().removeClass('active');

    var indexOfElement = activeElement.data('slide');

    if(indexOfElement === 0) {
      indexOfElement = 'first';
    } else if(activeElement.siblings().length === indexOfElement - 1) {
      indexOfElement = 'last';
    } else {
      indexOfElement = 'center';
    }

    checkSliderButtons(indexOfElement);
  });




});


*/
