$('.mobilemenu').click(function() {
  $('.menu').slideToggle(400);
});

$( window ).resize(function() {
  if ($(window).width() > 900) {
  	$('.menu').css('display', 'block');
  } else{
  	$('menu').css('display', 'none');
  }
});

$('.close').click(function() {
	$(this).parent('.sidetext').animate({width:'toggle'},350);
});

$('#orangemobile').click(function(event) {
	$("#dist").animate({width:'toggle'},350);
	$("html, body").animate({ scrollTop: 0 }, "slow");
});
$('#purplemobile').click(function() {
	$("#transport").animate({width:'toggle'},350);
	$("html, body").animate({ scrollTop: 0 }, "slow");
});
$('#bluemobile').click(function() {
	$("#insource").animate({width:'toggle'},350);
	$("html, body").animate({ scrollTop: 0 }, "slow");
});
$('#pinkmobile').click(function() {
	$("#evaluation").animate({width:'toggle'},350);
	$("html, body").animate({ scrollTop: 0 }, "slow");
});
