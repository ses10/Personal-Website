	
$(document).ready(function(){	
	
	function pumpkins() {

	var pumpkin = $('<div class="pumpkins"></div>');
	$('#pumpkins').prepend(pumpkin);
	pumpX = Math.floor(Math.random() * $('body').width());
	pumpSpd = Math.floor(Math.random() + 5000);

   pumpkin.css({'left':pumpX+'px'});
	pumpkin.animate({
		top: "500px",
		opacity : "0",

	}, pumpSpd, function(){
		$(this).remove();
		pumpkins();
	});

    }
	
    var timer = Math.floor(Math.random() +1000);
    
    window.setInterval(function(){
        pumpkins();
    }, timer);
	
});