// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
$(document).ready(function(){

	$('li.main').on('mouseenter', function(){
    if($(window).width() > 768){
  		$(this).find('ul').stop().delay(200).slideDown();
    }
	});
	$('li.main').on('mouseleave', function(){
    if($(window).width() > 768){
  		$(this).find('ul').hide();
    }
	});



  var count = 0;
  var images = ["assets/cover1.jpg", "assets/cover2.jpg"];
  image = $('#image');

  image.css("background-image", "url("+images[count++]+")");



  setInterval(function(){
    image.fadeOut(300, function(){
      image.css("background-image", "url("+images[count++]+")");
      image.fadeIn(1000);
    });
    if(count == images.length){
      count = 0;
    }
  }, 5000);


  $('.menuToggleButton').on('click', function(){
    $('#header').animate({
      "right": "0px"
    }, 300);
    $('.menuToggleButton').fadeOut();
    $('.menuToggleButton').css("visibility: hidden;");
  });

  $('#sidebar_close #sidebar_close_button').on('click', function(){
    $('#header').animate({
      "right": "-300px"
    }, 300);
    $('.menuToggleButton').fadeIn();
  });

  $(window).resize(function(){
    if($(window).width() > 768){
      $('.menuToggleButton').fadeOut();
    }
    if($(window).width() <= 768){
      $('.menuToggleButton').fadeIn();      
    }
  });

});

