$(document).ready(function() {
	$(".header-top__burger").on("click", function() {
		if($(this).hasClass("active")) {
			$(this).removeClass("active");
			$(".menu").removeClass("active");
		}	
		else {
			$(this).addClass("active");
			$(".menu").addClass("active");
		}
	});
});