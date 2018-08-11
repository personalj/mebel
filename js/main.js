
$( document ).ready(function() {
	  $(".cases__slider-list").lightSlider({
	  	item: 1,
	  	autoWidth: false,
	  	loop : true
	  });
	  $(".attractions__slider-list").lightSlider({
	  	item: 1,
	  	autoWidth: false,
	  	loop : true
	  });
	  $(".fancybox").fancybox({
	  		padding: 0,
			openEffect  : 'none',
			closeEffect : 'none',
			helpers : {
				overlay : {
			        css : {
			           'background' : 'rgba(47, 50, 52, 0.93)'
			        }
			}
		}
	});
	$('.animate-effect').addClass("hide").viewportChecker({
			classToAdd: 'visible animate animate-bottom',
	});
	$('#fountainG-wrap').remove();
});