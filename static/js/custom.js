(function ($) {
	//navigation
	$('.navigation').onePageNav({
		begin: function() {
			console.log('start');
		},
		end: function() {
			console.log('stop');
		},
			scrollOffset: 0		
	});
	
//Home Background Slider	


            $.mbBgndGallery.buildGallery({
                containment:"#intro",
                timer:4000,
                effTimer:1000,
                grayScale:false,
                shuffle:false,
                preserveWidth:false,
                effect:"fade",
				effect:{enter:{left:0,opacity:0},exit:{left:0,opacity:0}, enterTiming:"ease-in", exitTiming:"ease-in"},

                // If your server allow directory listing you can use:
                // (however this doesn't work locally on your computer)

                //folderPath:"testImage/",

                // else:

                 images:[
                 "/media/img/1.jpg",
                 "/media/img/2.jpg",
                 "/media/img/3.jpg"
                 ],

                onStart:function(){},
                onPause:function(){},
                onPlay:function(opt){},
                onChange:function(opt,idx){},
                onNext:function(opt){},
                onPrev:function(opt){}
            });

	// featured text
	$("#rotator .1strotate").textrotator({
		animation: "dissolve",
		speed: 4000
	});
	$("#rotator .2ndrotate").textrotator({
		animation: "fade",
		speed: 2000
	});
	
//iphone carousel animation
$(window).load(function () {
	$('#intro').addClass("animated fadeIn");
	$('.carousel-iphone').addClass("animated fadeInLeft");
});

// Fixed navbar
$(window).scroll(function () {

var scrollTop = $(window).scrollTop();

	if (scrollTop > 200) {
		$('.navbar-default').css('display', 'block');
		$('.navbar-default').addClass('fixed-to-top');
			
	} else if (scrollTop == 0)   {
	
		$('.navbar-default').removeClass('fixed-to-top');
	}
});


		//parallax
        if ($('#parallax1').length  || $('#parallax2').length)
        {


            $(window).stellar({
                responsive:true,
                scrollProperty: 'scroll',
                parallaxElements: false,
                horizontalScrolling: false,
                horizontalOffset: 0,
                verticalOffset: 0
            });

        }

	function navbar() {

		if ($(window).scrollTop() > 1) {
			$('#navigation').addClass('show-nav');
		} else {
			$('#navigation').removeClass('show-nav');
		}
		
	}

	$(document).ready(function () {

		var browserWidth = $(window).width();
		
		if (browserWidth > 560){ 
		
			$(window).scroll(function() {
				navbar();
			});
		
		}

	});	


	$(window).resize(function () {

		var browserWidth = $(window).width();
		
		if (browserWidth > 560){ 
		
			$(window).scroll(function() {
				navbar();
			});
		
		}

	});	


	// Carousel
	$('.service .carousel').carousel({
	  interval: 4000
	})

	//works
	$(function() {
		Grid.init();
	});
	
	//animation
	new WOW().init();

})(jQuery);