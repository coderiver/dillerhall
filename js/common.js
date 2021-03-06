$(document).ready(function() {

	$(document).on("click", function(){
		$(".js-menu").removeClass("is-active");
		$(".js-tabs-text").next().fadeOut();
		$(".js-open-list").parent().removeClass("is-active");
	});

// add any block
	$("body").on("click",".js-add-btn",function(){
		var new_el = $(this).attr("data-hidden");
		var html = $("."+new_el).html();
		$(this).parent().before(html); 
		return false;
	});
// show/hide any block
	$("body").on("click",".js-toogle",function(){
		var el = $(this).attr("data-toggle");
		$("."+el).fadeToggle(200);
		return false;
	});
// show/hide nav
	$("body").on("click",".js-toggle-nav",function(){
		if ($(this).hasClass("is-active")) {
			$(this).removeClass("is-active");
			$(".js-nav").removeClass("is-active");
			$("html").removeClass("has-open-nav");
			setTimeout(function() {
				$(".js-nav").removeClass("is-visible");
			}, 500);
			$("html").removeClass("has-open-nav");
		}
		else {
			$(this).addClass("is-active");
			$(".js-nav").addClass("is-active is-visible");
			$("html").addClass("has-open-nav");

		}
		return false;
	});

// scroll to top
	$(".js-scroll-top").on("click", function (){
		$('html, body').animate({
			scrollTop: 0
		}, 500);
		return false;
	});

$(".js-select-single").multiselect({
   multiple: false,
   //header: false,
   //noneSelectedText: "Select an Option",
   selectedList: 1,
   show: ["fade", 200],
   hide: ["fade", 200] 
});
$(".js-select-multi").each(function(){
	var placeholder = $(this).attr("data-placeholder");
	$(this).multiselect({
	   //multiple: false,
	   header: false,
	   show: ["fade", 200],
	   hide: ["fade", 200] ,
	   noneSelectedText: placeholder,
	   selectedList: 100 // 0-based index
	});
});
$(".js-uncheck-multi").on("click", function(){
	$(this).parent().find(".js-select-multi").multiselect("uncheckAll");
	return false;
});

// single tabs
	function tabsSingleLoad() {
		var hash = window.location.hash;
		if (hash) {
			$('[href="'+hash+'"]').parents("body").find(".js-tabs-content").hide();
			$('[data-id="'+hash+'"]').show();
			$('[href="'+hash+'"]').parents(".js-tabs-single").find("li").removeClass("is-active");
			$('[href="'+hash+'"]').parent().addClass("is-active");
		}
		else {
			$('.js-tabs-single').each(function(){
			  $(this).find('li:first').addClass("is-active");
			  $(".js-tabs-content:first").show();
			});
			
		}
		
	}
   tabsSingleLoad();
	$('.js-tabs-single a').on("click",function () {
		var content = $(this).attr("href");
		$(this).parents(".js-tabs-single").find("li").removeClass("is-active");
		$(this).parent().addClass("is-active");
		$(this).parents("body").find(".js-tabs-content").hide();
		$('[data-id="'+content+'"]').show();
		window.location.hash = this.hash;
		return false;
	});


	$('.js-menu').on("click",function(event) {
		$(this).toggleClass("is-active");
		event.stopPropagation()
	});
	$('.js-toggle-btn').on("click",function() {
		var el = $(this).attr("data-toggle");
		var textShow = $(this).attr("data-text-show");
		var textHide = $(this).attr("data-text-hide");
		var text = $(this).attr("data-text");
		var attr = $(this).text();
		$(this).text(text).attr("data-text", attr);
		$("."+el).slideToggle(200);
		return false;
	});
// slider
  var slider = $('.js-slick');
  if (slider.length) {
	slider.slick({
	  dots: true,
	  arrows: true,
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  swipeToSlide: true,
	  touchThreshold: 10
	});
  };
  // function tabsLoad() {
  //       var hash = window.location.hash;
  //       if (hash) {
  //           $('[href="'+hash+'"]').parents(".js-tabs-group").find(".js-tabs-content").hide();
  //           $('[data-id="'+hash+'"]').show();
  //           $('[href="'+hash+'"]').parents(".js-tabs").find("li").removeClass("is-active");
  //           $('[href="'+hash+'"]').parent().addClass("is-active");
  //       }
  //       else {
  //           $('.js-tabs').each(function(){
  //             $(this).find('li:first').addClass("is-active");
  //             $(this).next().show();
  //           });
			
  //       }
  //   }
  //  tabsLoad();
  //   $('.js-tabs a').on("click",function () {
  //       var content = $(this).attr("href");
  //       $(this).parents(".js-tabs").find("li").removeClass("is-active");
  //       $(this).parent().addClass("is-active");
  //       $(this).parents(".js-tabs-group").find(".js-tabs-content").hide();
  //       $('[data-id="'+content+'"]').show();
  //       window.location.hash = this.hash;
  //       return false;
  //   });
	
	function tabsLoad() {
	   $(".js-tabs").each(function(){
		 if ($(this).find(".is-active").length) {
			var index = $(this).find(".is-active").index();
			$(this).next().children().eq(index).show();
		 }
		 else {
		   $(this).find("li").eq(0).addClass("is-active");
		   $(this).next().children().eq(0).show();
		 }
	   });
   }
   tabsLoad();
	$('.js-tabs a').on("click",function () {
	  var tabs = $(this).closest(".js-tabs");
	  var tabsCont = tabs.next().children();
	  var index = $(this).parent().index();
	  var text = $(this).text();
	  tabs.find("li").removeClass("is-active");
	  $(this).parent().addClass("is-active");
	  tabsCont.hide();
	  tabsCont.eq(index).show();
	  if (tabs.find(".js-tabs-text").length) {
		tabs.find(".js-tabs-text").text(text);
		tabs.find(".tabs").fadeOut(200);

	  }
	  return false;
	}); 
	$('.js-tabs-text').on("click",function (event) {
	 $(this).next().fadeToggle(200);
	 event.stopPropagation();
	  return false;
	}); 
	$('.js-open-list').on("click",function (event) {
		$(this).parent().toggleClass("is-active");
		event.stopPropagation();
	  return false;
	});
	$('.js-tabs-next').on("click",function (){
		var parent = $(this).parent();
		parent.addClass("is-active");
		var length = parent.find(".tabs").width() - parent.width();
		parent.find(".tabs").css({
			left: -length
		});
		return false;
	});
	$('.js-tabs-prev').on("click",function (){
		var parent = $(this).parent();
		$(this).parent().removeClass("is-active");
		parent.find(".tabs").css({
			left: 0
		});
		return false;
	});
	$(".js-tabs-item").click(function(){	
		$(this).parents(".js-tabs-icon").find(".js-open-list").text($(this).text());
	});

	 $(".js-tabs-item").click(function (){
		var page = $(this).attr("href");
		var navHeight = $('.header__bottom').outerHeight();
		$('html, body').animate({
			scrollTop: $(page).offset().top - navHeight
		}, 600);
		$('.tabs-icon').removeClass('is-active');
		return false;
	});
	$(".js-scroll-to").on("click",function (){
		var el = $(this).attr("href");
		$("body, html").animate({
			scrollTop: $("."+el).offset().top
		});
		return false;
	});

	 $('.js-carousel').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.js-carousel-preview',
		responsive: [
			{
			  breakpoint: 758,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				fade: false,
			  }
			}
		]
	});
	$('.js-carousel-preview').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		asNavFor: '.js-carousel',
		dots: false,
		arrows: true,
		infinite: true,
		centerMode: false,
		focusOnSelect: true,
		responsive: [
			{
			  breakpoint: 980,
			  settings: {
				slidesToShow: 6,
				slidesToScroll: 6
			  }
			}
		]
	});

	$(".js-carousel-preview .slick-slide").on("click",function (){
	  $(this).parent().find(".slick-slide").removeClass("is-active");
	  $(this).addClass("is-active")
	  
	  return false;
	});


	function fixedCompare() {
	   var el = $(".js-compare-head");
	   var top = el.offset().top;
	   if ($(window).scrollTop() >= top) {
		 el.addClass("is-fixed");
	   } 
	   else {
		 el.removeClass("is-fixed");
	   }
	 }
	 if ($(".js-compare-head").length) {
		fixedCompare();
	 }
	 $(window).scroll(function() {
	   if ($(".js-compare-head").length) {
		  fixedCompare();
		}
	 });


	function view() {
	  $('.js-inview').each(function(){
		var el = $(this);
		var top = ($(this).offset().top - $(window).height());
		if ($(window).scrollTop() >= top) {
		  $(this).addClass("has-animation")
		}
	  });
	}
	view();
	$(window).scroll(function(){
		view();
	});
	

// popups
	$(".js-popup-link").on("click", function(){
		$(".js-overlay").fadeIn(300);
		var popup = $(this).attr("href");
		$(".js-popup").fadeIn(300)
		$('[data-popup="'+popup+'"]').fadeIn(300);
		return false; 
	});

	$(".js-popup-close").on("click", function(){
		$(".js-overlay").fadeOut(300); 
		$(this).parents(".js-popup").fadeOut(300);
		return false;
	});

// placeholder plugit init
	$('input, textarea').placeholder();

// validation form
	function validate() {
		$('.js-validate').each(function(){
			if ($(this).length > 0) {
				$(this).validate({
					errorClass: 'has-error',
					rules: {
						username: {
							minlength: 2
						},
						any: {
							minlength: 2
						},
						password: {
							minlength: 5
						},
						confirm_password: {
							minlength: 5,
							equalTo: '#password'
						},
						email: {
							email: true
						},
						tel: {
							minlength: 2,
						},
						address: {
							minlength: 2
						},
						message: {
							minlength: 4
						},
						field: {
							required: true
						},
						// fruit: {
						//   required: true
						// }
					},
					messages: {
						firstname: 'Вас так зовут?',
						lastname: 'У вас такая фамилия?',
						fathername: 'У вас такое отчество?',
						password: {
							required: 'Введите пароль',
							minlength: 'Минимум 5 символов'
						},
						confirm_password: {
							 required: 'Пароли не совпадают',
							 minlength: 'Минимум 5 символов',
							 equalTo: 'Пароли не совпадают'
						},
						email: 'Неверный формат',
						address: 'Это Ваш адрес?',
						any: 'Заполните поле',
						company: 'Заполните поле',
						tel: {
							required: 'Заполните поле',
						},
						message: {
							required: 'Заполните поле',
							minlength: 'Заполните поле'
						}
					}
				});
			}
		});
	}
		
	validate();
	var headerHeight = $(".header").outerHeight(),
		navKey = $(".header__key button");
	function headerNav() {
		var	top = navKey.offset().top + navKey.height();
		if (top > headerHeight) {
			navKey.addClass("is-blue");
		}
		else {
			navKey.removeClass("is-blue");
		}
	}
	if ($(".header__key").length) {
		headerNav();
	}
	
	$(window).resize(function(){
		if ($(".header__key").length) {
			headerNav();
		}
	});
	$(window).scroll(function(){
		if ($(".header__key").length) {
			headerNav();
		}
	});

});