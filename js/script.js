$(document).ready (function(){
	// grab an element
	var myElement = document.getElementById("navbar");
	// construct an instance of Headroom, passing the element
	var headroom  = new Headroom(myElement);
	// initialise
	headroom.init();

	$(".promowrapper", ".slideshow", ".video-container").fitVids();

	// // portfolio
 // 	$('.gallery ul li a').click(function() {
	// 	var itemID = $(this).attr('href');
	// 	$('.gallery ul').addClass('item_open');
	// 	$(itemID).addClass('item_open');
	// 	return false;
	// });
	// $('.close').click(function() {
	// 	$('.port, .gallery ul').removeClass('item_open');
	// 	return false;
	// });
	// $(".gallery ul li a").click(function() {
	// 	$('html, body').animate({
	// 		scrollTop: parseInt($("#gallery").offset().top)
	// 	}, 1200);
	// });
	$(".input-group input , .input-group textarea").focusout(function(){
		var text_val = $(this).val();

		if(text_val === ""){
			$(this).removeClass("has-value");
		}else{
			$(this).addClass("has-value");
		}
	});
	$( "#hello" ).submit(function( event ) {
		console.log('contact script submit');
		$(this).each(function(){

			var url = "./php/form.php";
			var data = $(this).serialize();
			var success = $(this).append( "<p>Thank You! Your message has been sent.</p>" );

			$.ajax({
				type: "POST",
				url: url,
				data: data,
				success: success
			});

		});

	event.preventDefault();

	});
});