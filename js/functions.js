
/* SCROLL to TOP&BOTTOM */
$(document).ready(function() {
	$(function() {
		// the element inside of which we want to scroll
			var $elem = $('.container');
	 
			// show the buttons
		$('#nav_up').fadeIn('slow');
		$('#nav_down').fadeIn('slow'); 
	 
			// whenever we scroll fade out both buttons
		$(window).bind('scrollstart', function(){
			$('#nav_up,#nav_down').stop().animate({'opacity':'0.2'});
		});
			// ... and whenever we stop scrolling fade in both buttons
		$(window).bind('scrollstop', function(){
			$('#nav_up,#nav_down').stop().animate({'opacity':'1'});
		});
	 
			// clicking the "down" button will make the page scroll to the $elem's height
		$('#nav_down').click(
			function (e) {
				$('html, body').animate({scrollTop: $elem.height()}, 800);
			}
		);
			// clicking the "up" button will make the page scroll to the top of the page
		$('#nav_up').click(
			function (e) {
				$('html, body').animate({scrollTop: '0px'}, 800);
			}
		);
	 });
}); 
 


$(document).ready(function() {
	//animate menu on startup
	$("#navbar li").stop(true, false).animate({left: "0" }, 1800, 'easeOutBounce' );
	
	/*  animate portfolio blocks  */
	$( ".portfolio-block" )
	.mouseenter(function() {
		$etot = $(this);
		$text = $(this).find('.imagecaption');
		if($(this).find('.imagecaption').css('display')== 'none')
				$(this).find('.imagecaption').show('slide', {direction: 'down'});
	})
	.mouseleave(function() {
		$(this).find('.imagecaption').hide('slide', {direction: 'down'});
	});


	//animate promo blocks
	$( ".card-container" )
	.mouseenter(function() {
		$(this).stop().flip({
				alwaysOneDirection: 'true', 
				direction: "rl",
				speed: '600ms'
				
			});
	})
	.mouseleave(function() {
		$(this).stop().flip({
				alwaysOneDirection: 'true', 
				direction: "rl",
				speed: '600ms'
				
			});
	});


	/*  navbar-links click emulate */
	$('#navbar li').click(function() {
		var link = $(this).children().attr('href');
		document.location.href=link;
	});

	/* Slide footer menu elemnts on hover */
	$('.footer2 ul li a').mouseenter(function(){
		$(this).stop().animate({left:"12px"},300);
	})
	.mouseleave(function() {
		$(this).stop().animate({left:"0px"},300);
	})
});	

/* Slide to element by id on this page  */




	