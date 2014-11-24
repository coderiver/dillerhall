head.ready(function() {
	$('.search__keyword').focusin(function(event) {
		$('.search__label').addClass('js-active');
	});
	$('.search__keyword').focusout(function(event) {
		$('.search__label').removeClass('js-active');
	});
	//message textarea
	$('.search__keyword').on('keyup', function(event) {
	 if($(this).val() == '') {
		$(this).parent().find('.search__delete').addClass('js-not');
	 } else {
		$(this).parent().find('.search__delete').removeClass('js-not');
	 }
	});
	$('.search__delete').on('click', function() {
		$('.search__keyword').val('');
		$(this).addClass('js-not');
	});
});