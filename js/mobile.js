

var graylogo = $('img.change');

$(graylogo).replaceWith('<img src="img/logo.png" class="logo">');

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
//strategic
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


//adteech

$('#purplekeym').click(function() {
	$("#systems").animate({width:'toggle'},350);
	$("html, body").animate({ scrollTop: 0 }, "slow");
});
$('#bluekeym').click(function() {
	$("#elearning").animate({width:'toggle'},350);
	$("html, body").animate({ scrollTop: 0 }, "slow");
});

$('#orangekeym').click(function() {
	$("#automation").animate({width:'toggle'},350);
	$("html, body").animate({ scrollTop: 0 }, "slow");
});


//operations

$('#purpleboxm').click(function() {
	$("#DCDESIGN").animate({width:'toggle'},350);
	$("html, body").animate({ scrollTop: 0 }, "slow");
});
$('#blueboxm').click(function() {
	$("#dcoptim").animate({width:'toggle'},350);
	$("html, body").animate({ scrollTop: 0 }, "slow");
});

$('#orangeboxm').click(function() {
	$("#dcimp").animate({width:'toggle'},350);
	$("html, body").animate({ scrollTop: 0 }, "slow");
});

$('#yellowboxm').click(function() {
	$("#labor").animate({width:'toggle'},350);
	$("html, body").animate({ scrollTop: 0 }, "slow");
});
