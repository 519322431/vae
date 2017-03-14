$(function(){
	$('#num li:first').click(function(){
		$('.daohang_xian1').animate({
			left:'10%'
		},100)
		$(window).scrollTop(0)
		$('#inner').height($('#con .ycj:nth-child(1)').height())
		$('#con .ycj:nth-child(2)').css('overflow','hidden')
		$('#con .ycj:nth-child(3)').css('overflow','hidden')
	})
	$('#num li:nth-child(2)').click(function(){
		$('.daohang_xian1').animate({
			left:'40%'
		},100)
		$(window).scrollTop(0)
		$('#inner').height($('#con .ycj:nth-child(2)').height())
		$('#con .ycj:nth-child(1)').css('overflow','hidden')
		$('#con .ycj:nth-child(3)').css('overflow','hidden')
	})
	$('#num li:last').click(function(){
		$('.daohang_xian1').animate({
			left:'70%'
		},100)
		$(window).scrollTop(0)
		$('#inner').height($('#con .ycj:nth-child(3)').height())
		$('#con .ycj:nth-child(1)').css('overflow','hidden')
		$('#con .ycj:nth-child(2)').css('overflow','hidden')
	})
	// 底部菜单
	$('.footer a').click(function(){
		var i=$('.footer a').index(this);
		$('.footer a').removeClass('click').eq(i).addClass('click')
	})
	$('.footer a:nth-child(1)').click(function(){
		$('.footer a:nth-child(1)').css('background-image','url(images/vae_img1.png)')
		$('.footer a:nth-child(2)').css('background-image','url(images/quanzi.png)')
		$('.footer a:nth-child(3)').css('background-image','url(images/faxian.png)')
		$('.footer a:nth-child(4)').css('background-image','url(images/xinxi.png)')
		$('.footer a:nth-child(5)').css('background-image','url(images/wo.png)')
	})
	$('.footer a:nth-child(2)').click(function(){
		$('.footer a:nth-child(1)').css('background-image','url(images/vae_img.png)')
		$('.footer a:nth-child(2)').css('background-image','url(images/quanzi1.png)')
		$('.footer a:nth-child(3)').css('background-image','url(images/faxian.png)')
		$('.footer a:nth-child(4)').css('background-image','url(images/xinxi.png)')
		$('.footer a:nth-child(5)').css('background-image','url(images/wo.png)')
	})
	$('.footer a:nth-child(3)').click(function(){
		$('.footer a:nth-child(1)').css('background-image','url(images/vae_img.png)')
		$('.footer a:nth-child(2)').css('background-image','url(images/quanzi.png)')
		$('.footer a:nth-child(3)').css('background-image','url(images/faxian1.png)')
		$('.footer a:nth-child(4)').css('background-image','url(images/xinxi.png)')
		$('.footer a:nth-child(5)').css('background-image','url(images/wo.png)')
	})
	$('.footer a:nth-child(4)').click(function(){
		$('.footer a:nth-child(1)').css('background-image','url(images/vae_img.png)')
		$('.footer a:nth-child(2)').css('background-image','url(images/quanzi.png)')
		$('.footer a:nth-child(3)').css('background-image','url(images/faxian.png)')
		$('.footer a:nth-child(4)').css('background-image','url(images/xinxi1.png)')
		$('.footer a:nth-child(5)').css('background-image','url(images/wo.png)')
	})
	$('.footer a:nth-child(5)').click(function(){
		$('.footer a:nth-child(1)').css('background-image','url(images/vae_img.png)')
		$('.footer a:nth-child(2)').css('background-image','url(images/quanzi.png)')
		$('.footer a:nth-child(3)').css('background-image','url(images/faxian.png)')
		$('.footer a:nth-child(4)').css('background-image','url(images/xinxi.png)')
		$('.footer a:nth-child(5)').css('background-image','url(images/wo1.png)')
	})
	function move(){
		$('.guanggaotu').animate({
			opacity:0
		},1000,function(){
			$('.guanggaotu').hide();
		})

	}
	window.setTimeout(move,3000); 
	// 滑动轮播
	$(document).ready(function(){

	$(".main_visual").hover(function(){
		$("#btn_prev,#btn_next").fadeIn()
	},function(){
		$("#btn_prev,#btn_next").fadeOut()
	});
	
	$dragBln = false;
	
	$(".main_image").touchSlider({
		flexible : true,
		speed : 200,
		btn_prev : $("#btn_prev"),
		btn_next : $("#btn_next"),
		paging : $(".flicking_con a"),
		counter : function (e){
			$(".flicking_con a").removeClass("on").eq(e.current-1).addClass("on");
		}
	});
	
	$(".main_image").bind("mousedown", function() {
		$dragBln = false;
	});
	
	$(".main_image").bind("dragstart", function() {
		$dragBln = true;
	});
	
	$(".main_image a").click(function(){
		if($dragBln) {
			return false;
		}
	});
	
	timer = setInterval(function(){
		$("#btn_next").click();
	}, 5000);
	
	$(".main_visual").hover(function(){
		clearInterval(timer);
	},function(){
		timer = setInterval(function(){
			$("#btn_next").click();
		},5000);
	});
	
	$(".main_image").bind("touchstart",function(){
		clearInterval(timer);
	}).bind("touchend", function(){
		timer = setInterval(function(){
			$("#btn_next").click();
		}, 5000);
	});
	
});
})