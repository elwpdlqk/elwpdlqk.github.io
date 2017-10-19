$(document).ready(function () {	
	setInterval(function () {
		var bgc = ["url(../test/1.jpg)", "url(../test/2.jpg)", "url(../test/3.jpg)", "url(../test/4.jpg), url(../test/5.jpg)"];
		$('body').css({
			background: bgc[Math.floor(Math.random() * bgc.length)]
		});
	}, 10000);
});