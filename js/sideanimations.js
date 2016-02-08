$('.close').click(function() {
	$(this).parent('.sidetext').fadeOut();
});
//SHOW SIDETEXT
function openside(target) {
	//hide current visible sidetext
	$('.sidetext').fadeOut();
	//get the target and convert it to an ID
	var tar = target.getAttribute("data-target"),
		$t = $(tar);
	//DISPLAY THE SIDETEXT
	$t.animate({width:'toggle'},350);
};
//TEXTBOX ON MOUSEOVER
var mouseX;
var mouseY;
$(document).mousemove( function(e) {
   mouseX = e.pageX; 
   mouseY = e.pageY;
});  
function getdesc(desc) {
	var myclass = desc.getAttribute("data-target");
	while (myclass.charAt(0)==='#') {
		myclass =myclass.substr(1);
	}
	$('.'+ myclass).css({'top':mouseY,'left':mouseX}).fadeIn('fast');
};
function removedesc(rmv) {
	$('.bluebox, .purplebox, .orangebox').fadeOut('fast');
};