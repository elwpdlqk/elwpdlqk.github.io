$(document).ready(function () {
	var ht = $(window).height();
	//브라우저의 높이값
	$("section").height(ht);
	//브라우저의 높이값을 section의 높이값으로 지정

	$(window).on("resize", function () {
		/*브라우저가 리사이즈 할때마다 브라우저의 높이값 갱신*/
		var ht = $(window).height();
		$("section").height(ht);
	});




	$("#menu li").on("click", function (e) {
		e.preventDefault();
		//a요소가 가지고 있는 기본링크기능 막아줌
		var ht, i, nowTop;
		ht = $(window).height();
		//브라우저의 높이값
		i = $(this).index();
		//li의 순서값_0부터 시작
		nowTop = i * ht;
		//현재박스의 스크롤 위치값=브라우저의 높이값*li순서
		$("html, body").stop().animate({"scrollTop": nowTop}, 1400);
	});
	//해당 스크롤 위치값으로 문서이동
	//stop()중첩 막아줌
	$(window).on("scroll", function () {

		var ht, scroll;
		ht = $(window).height();
		scroll = $(window).scrollTop();

		/*
		if (scroll >= ht * 0 && scroll < ht * 1) {
			$("#menu li").removeClass();
			$("#menu li").eq(0).addClass("on");
		}
		if (scroll >= ht * 1 && scroll < ht * 2) {
			$("#menu li").removeClass();
			$("#menu li").eq(1).addClass("on");
		}
		if (scroll >= ht * 2 && scroll < ht * 3) {
			$("#menu li").removeClass();
			$("#menu li").eq(2).addClass("on");
		}
		if (scroll >= ht * 3 && scroll < ht * 4) {
			$("#menu li").removeClass();
			$("#menu li").eq(3).addClass("on");
		}
		*/
		for(var i = 0; i < 4; i++){
			if(scroll >= ht * i && scroll < ht * (i + 1)){
				$('#menu li').removeClass();
				$('#menu li').eq(i).addClass('on');
			}
		}





		$("section").on("mousewheel", function (event, delta) {


			if (delta > 0) {
				//마우스 휠을 밀어 올렸을 때
				var prev = $(this).prev().offset().top;
				//.prev()이전
				//.offset().top->section의 y값
				$("html,body").stop().animate({"scrollTop": prev}, 1400, "easeOutBounce");

			} else if (delta < 0) {
				//마우스 휠을 밀어 내렸을 때
				var next = $(this).next().offset().top;
				$("html,body").stop().animate({"scrollTop": next}, 1400, "easeOutBounce");
			}

		});




	});

});





