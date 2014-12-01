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


$(".js-select-single").multiselect({
   multiple: false,
   //header: false,
   //noneSelectedText: "Select an Option",
   selectedList: 1,
   show: ["fade", 200],
   hide: ["fade", 200] 
});



	$('.js-menu').on("click",function(event) {
        $(this).toggleClass("is-active");
        event.stopPropagation()
  });
  $('.js-sort-link').on("click",function(event) {
        $(this).toggleClass("is-active");
        $(this).parent().find('input[type="checkbox"]').trigger("click");
        event.stopPropagation()
  });


    

});