$(document).ready(function () {
	var img_width = $('.container div').outerWidth(true);
	$('.container div:first').before($('.container div:last'));
	$('.container').css('left', -img_width + "px");
	$('.left').click(function () {
		var left_move = parseInt($('.container').css('left'), 10) + img_width;
		$('.container').stop().animate({
			left : left_move + 'px'
		}, 300, function () {
			$('.container div:first').before($('.container div:last'));
			$('.container').css('left', -img_width + 'px');
		});
	});
	
	$('.right').click(function () {
		var left_move = parseInt($('.container').css('left'), 10) - img_width;
		$('.container').stop().animate({
			left : left_move + 'px'
		}, 300, function () {
			$('.container div:last').after($('.container div:first'));
			$('.container').css('left', -img_width + 'px');
		});
	});

});