$(document).ready(function() {
    var src_images = "../www/ressources/images";

    $('.active-callback').on( 'click', function(){
    	$('#form-callback').slideToggle( 'fast', function() {
			// Animation complete.
		});
    })

    $('#closeCallback').on( 'click', function() {
    	$('.messageHead').animate({
    		top:-400
    	})
    });
});
