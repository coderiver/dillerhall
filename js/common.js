$(document).ready(function() {

	$(document).on("click", function(){
		$(".js-menu").removeClass("is-active");
	});

// add any block
	$("body").on("click",".js-add-btn",function(){
		var new_el = $(this).attr("data-hidden");
		var html = $("."+new_el).html();
		$(this).parent().before(html); 
		return false;
	});

// show/hide nav
	$("body").on("click",".js-toggle-nav",function(){
		if ($(this).hasClass("is-active")) {
			$(this).removeClass("is-active");
			$(".js-nav").removeClass("is-active")
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

  function tabsLoad() {
        var hash = window.location.hash;
        if (hash) {
            $('[href="'+hash+'"]').parents(".js-tabs-group").find(".js-tabs-content").hide();
            $('[data-id="'+hash+'"]').show();
            $('[href="'+hash+'"]').parents(".js-tabs").find("li").removeClass("is-active");
            $('[href="'+hash+'"]').parent().addClass("is-active");
        }
        else {
            $('.js-tabs').each(function(){
              $(this).find('li:first').addClass("is-active");
              $(this).next().show();
            });
            
        }
    }
   tabsLoad();
    $('.js-tabs a').on("click",function () {
        var content = $(this).attr("href");
        $(this).parents(".js-tabs").find("li").removeClass("is-active");
        $(this).parent().addClass("is-active");
        $(this).parents(".js-tabs-group").find(".js-tabs-content").hide();
        $('[data-id="'+content+'"]').show();
        window.location.hash = this.hash;
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
        return false;
    });
    
    function tabsLinkLoad() {
       $(".js-tabs-simple").each(function(){
         if ($(this).find(".is-active").length) {
            var index = $(this).find(".is-active").index();
          $(this).next().find(".js-tabs-simple-content").eq(index).show();
         }
         else {
           $(this).find("li").eq(0).addClass("is-active");
           $(this).next().find(".js-tabs-simple-content").eq(0).show();
         }
       });
   }
   tabsLinkLoad();
  $('.js-tabs-simple a').on("click",function () {
      var tabs = $(this).parents(".js-tabs-simple");
      var tabsCont = tabs.next().find(".js-tabs-simple-content");
      var index = $(this).parent().index();
      tabs.find("li").removeClass("is-active");
        $(this).parent().addClass("is-active");
      tabsCont.hide();
      tabsCont.eq(index).show();
      return false;
    });

});