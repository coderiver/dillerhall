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
 	$('.slick-next').slickNext();
 	$('.slick-prev').slickPrev();
 	//RANGE
 	$(function() {
		$( "#slider" ).slider({
			range: true,
			min: 0,
			max: 41,
			values: [ 11, 41 ]
		});
	});
});

