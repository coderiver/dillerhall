head.ready(function() {

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
});