
$('.close').click(function() {
	$(this).parent('.sidetext').animate({width:'toggle'},350);
});

/*$('area').mouseover(function() {
  $(this).removeClass('blink');
});
*/
$('area').hover(
       function(){ $(this).removeClass('blink') },
       function(){ $(this).addClass('blink') }
)
  
$('.area').click(function() {
  $('.sidetext').hide();
});

//abrir menu lateral
$('#orangeclick').click(function() {
	$("#dist").animate({width:'toggle'},350);
});
$('#purpleclick').click(function() {
	$("#transport").animate({width:'toggle'},350);
});
$('#blueclick').click(function() {
	$("#insource").animate({width:'toggle'},350);
});
$('#pinkclick').click(function() {
	$("#evaluation").animate({width:'toggle'},350);
});



//2a puerta MORADO
$('#purplebox').click(function() {
	$("#DCDESIGN").animate({width:'toggle'},350);
});

$('#bluebox').click(function() {
	$("#dcoptim").animate({width:'toggle'},350);
});
$('#orangebox').click(function() {
	$("#dcimp").animate({width:'toggle'},350);
});
$('#pep').click(function() {
	$("#labor").animate({width:'toggle'},350);
});

//3a puerta AZUL
$('#purplekey').click(function() {
	$("#systems").animate({width:'toggle'},350);
});

$('#bluekey').click(function() {
	$("#elearning").animate({width:'toggle'},350);
});
$('#orangekey').click(function() {
	$("#automation").animate({width:'toggle'},350);
});

//TEXTBOX ON MOUSEOVER
var mouseX;
var mouseY;
$(document).mousemove( function(e) {
   mouseX = e.pageX; 
   mouseY = e.pageY;
});  

//orange
$("#orangeclick").mouseover(function(){
  $('.distribution').css({'top':mouseY,'left':mouseX}).fadeIn('fast');
});
$("#orangeclick").mouseout(function(){
  $('.distribution').fadeOut('fast');
});

$("#purpleclick").mouseover(function(){
  $('.trans').css({'top':mouseY,'left':mouseX}).fadeIn('fast');
});
$("#purpleclick").mouseout(function(){
  $('.trans').fadeOut('fast');
});

$("#blueclick").mouseover(function(){
  $('.ins').css({'top':mouseY,'left':mouseX}).fadeIn('fast');
});
$("#blueclick").mouseout(function(){
  $('.ins').fadeOut('fast');
});

$("#pinkclick").mouseover(function(){
  $('.eval').css({'top':mouseY,'left':mouseX}).fadeIn('fast');
});
$("#pinkclick").mouseout(function(){
  $('.eval').fadeOut('fast');
});


//PURPLE
$("#purplebox").mouseover(function(){
  $('.dcdesign').css({'top':mouseY,'left':mouseX}).fadeIn('fast');
});
$("#purplebox").mouseout(function(){
  $('.dcdesign').fadeOut('fast');
});

$("#bluebox").mouseover(function(){
  $('.dcopt').css({'top':mouseY,'left':mouseX}).fadeIn('fast');
});
$("#bluebox").mouseout(function(){
  $('.dcopt').fadeOut('fast');
});

$("#orangebox").mouseover(function(){
  $('.projectimp').css({'top':mouseY,'left':mouseX}).fadeIn('fast');
});
$("#orangebox").mouseout(function(){
  $('.projectimp').fadeOut('fast');
});

$("#pep").mouseover(function(){
  $('.labor').css({'top':mouseY,'left':mouseX}).fadeIn('fast');
});
$("#pep").mouseout(function(){
  $('.labor').fadeOut('fast');
});

//blue

$("#purplekey").mouseover(function(){
  $('.systems').css({'top':mouseY,'left':mouseX}).fadeIn('fast');
});
$("#purplekey").mouseout(function(){
  $('.systems').fadeOut('fast');
});

$("#bluekey").mouseover(function(){
  $('.elearning').css({'top':mouseY,'left':mouseX}).fadeIn('fast');
});
$("#bluekey").mouseout(function(){
  $('.elearning').fadeOut('fast');
});

$("#orangekey").mouseover(function(){
  $('.automation').css({'top':mouseY,'left':mouseX}).fadeIn('fast');
});
$("#orangekey").mouseout(function(){
  $('.automation').fadeOut('fast');
});
