$(document).ready(function() {
	$('.search__keyword').focusin(function(event) {
		$('.search__label').addClass('is-active');
	});
	$('.search__keyword').focusout(function(event) {
		$('.search__label').removeClass('is-active');
	});
	//search
	$('.search__keyword').on('keyup', function(event) {
	 if($(this).val() == '') {
		$(this).parent().find('.search__delete').addClass('is-not');
	 } else {
		$(this).parent().find('.search__delete').removeClass('is-not');
	 }
	});
	$('.search__delete').on('click', function() {
		$('.search__keyword').val('');
		$(this).addClass('is-not');
	});
	//request-search
	$('.request-top__keyword').on('keyup', function(event) {
	 if($(this).val() == '') {
		$(this).parent().find('.request-top__delete').addClass('is-not');
		$(this).removeClass('is-active');
	 } else {
		$(this).parent().find('.request-top__delete').removeClass('is-not');
		$(this).addClass('is-active');
	 }
	});
	$('.request-top__delete').on('click', function() {
		$('.request-top__keyword').val('');
		$(this).addClass('is-not');
	});
	//request-top search
	$('.request-top__search').focusin(function(event) {
		$('.request-top__icon').addClass('is-active');
	});
	$('.request-top__search').focusout(function(event) {
		$('.request-top__icon').removeClass('is-active');
	});
	// slider
	var slider = $('.js-slider');
 	if (slider.length) {
 		var slider_list = slider.find('.slider__list'),
 				slider_length = slider.find('.slider__item').length,
 				slider_all = slider.find('.slider__all'),
 				slider_current = slider.find('.slider__current');
 		slider_list.slick({
 			dots: true,
 			arrows: true,
 			infinite: true,
 			slidesToShow: 1,
 			slidesToScroll: 1,
			swipeToSlide: true,
			touchThreshold: 10,
 			slide: '.slider__item',
 			onInit: function() {
 				slider_all.text(slider_length);
 			},
 			onAfterChange: function(index) {
 			  var index = slider_list.slickCurrentSlide() + 1;
 			  slider_current.text(index);
 			}
 		});
 	};
 	//RANGE
 	$(function() {
		$( "#slider" ).slider({
			range: true,
			min: 0,
			max: 41,
			values: [ 11, 41 ]
		});
	});
	function ui_slider() {
        $(".js-ui-slider").each(function(){
            var slider = $(this).find(".js-ui-slider-main"),
            	inputFrom = $(this).find(".js-ui-slider-from"),
            	inputTo = $(this).find(".js-ui-slider-to"),
            	maxVal = slider.attr("data-max"),
            	minVal = slider.attr("data-min"),
            	stepVal = slider.attr("data-step");
            slider.slider({
                range: true,
                min: minVal,
                max: maxVal,
                step: stepVal,
                values: [ minVal, maxVal ],
                slide: function( event, ui ) {
                    $(this).find(".ui-slider-handle").html("<span></span>");
                    //var handle_0 = $(this).find(".ui-slider-range").next().find("span")
                    //var handle_1 = $(this).find(".ui-slider-range").next().next().find("span");
                    inputFrom.val(ui.values[0]);
                    inputTo.val(ui.values[1]);
                    //handle_0.text(ui.values[0]);
                    //handle_1.text(ui.values[1]);
                }
            });
            //console.log(handle_0);
            //console.log(handle_1);
            $(this).find(".ui-slider-handle").html("<span></span>");
            //var handle_0 = $(this).find(".ui-slider-range").next().find("span")
            //var handle_1 = $(this).find(".ui-slider-range").next().next().find("span");
            //handle_0.text(slider.slider( "values", 0 ));
            //handle_1.text(slider.slider( "values", 1 ));
            inputFrom.val(slider.slider( "values", 0 ));
            inputTo.val(slider.slider( "values", 1 ));
        });
    }
    ui_slider();
    $(".js-reset-range").on("click",function(){
    	var slider = $(this).parents(".js-ui-slider").find(".js-ui-slider-main"),
    		maxVal = slider.attr("data-max"),
            minVal = slider.attr("data-min");
    	slider.slider( "values", [ minVal, maxVal ] );
    	$(this).parents(".js-ui-slider").find(".js-ui-slider-from").val(minVal);
    	$(this).parents(".js-ui-slider").find(".js-ui-slider-to").val(maxVal);
    	return false;
    });
	//stores
	$('.js-graph').on('click', function() {
		$('.js-hidden').slideToggle('slow');
		$(this).toggleClass('is-close');
		return false;
	});
	//1-1catalog series
	// scrollTop
	 $(".js-header__nav-link").click(function (){
		var page = $(this).attr("href");

		$('html, body').animate({
			scrollTop: $(page).offset().top - 100
		}, 600);
		return false;
	});
	function scrollHeader() {
	    if ($('.js-block').length) {
	      $('.js-block').each(function() {
	      	var navHeight = $('.header__bottom').outerHeight();
	        if ($(window).scrollTop() >= $(this).offset().top - navHeight) {
	          var id = $(this).attr("id");
	          $(".header__nav-list a").removeClass("is-active");
	          $("[href='#"+id+"']").addClass("is-active");
	        }	       
	      });
	    }
	  }
	scrollHeader();
	$(window).scroll(function() {
		scrollHeader();
	});
	//header fixed
	$(window).scroll(function() {    
	    var scroll = $(window).scrollTop();
	    if ($('.js-wrap').length>0) {
	    	if (scroll >= $('.js-wrap').offset().top) {
	    	    $(".js-fixed").addClass("is-fixed");
	    	} else {
	    	    $(".js-fixed").removeClass("is-fixed");
	    	};
	    };
	});
	$(window).load(function() {    
	    var scroll = $(window).scrollTop();
	    if ($('.js-wrap').length>0) {
	    	if (scroll >= $('.js-wrap').offset().top) {
	    	    $(".js-fixed").addClass("is-fixed");
	    	} else {
	    	    $(".js-fixed").removeClass("is-fixed");
	    	};
	    };
	});
	//input popup
	$('.popup-form input').on('keyup', function(event) {
		if($(this).val() == '') {
			$(this).removeClass('is-active');
		} 
		else {
			$(this).addClass('is-active');
		}
	});
	$('.form__input input').on('click', function() {
		$(this).removeClass('has-error');
	});
});

