

$(document).ready(function() {

	if ($(window).width() < 900) {
       var newscript = document.createElement('script');
           newscript.type = 'text/javascript';
           newscript.async = true;
           newscript.src = 'js/mobile.js';
       (document.getElementsByTagName('head')[0]
        || document.getElementsByTagName('body')[0]).appendChild(newscript);
    }else{
    	var newscript = document.createElement('script');
           newscript.type = 'text/javascript';
           newscript.async = true;
           newscript.src = 'js/sideanimations.js';
       (document.getElementsByTagName('head')[0]
        || document.getElementsByTagName('body')[0]).appendChild(newscript);
    }

});

