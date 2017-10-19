$(document).ready(function () {
	$('#container section aticle').on('mouseenter', function () {
		$(this).find('.textbox').css({
			height : "700px",
			lineHeight : "700px",
			borderTopLeftRadius: 0,
			borderTopRightRadius: 0			
		});
	});
	$('#container section aticle').on('mouseleave', function () {
		$(this).find('.textbox').css({
			height : "50px",
			lineHeight : "50px",
			borderTopLeftRadius: "15px",
			borderTopRightRadius: "15px"
		});
	});
});