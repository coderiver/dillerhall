$(document).ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

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

});