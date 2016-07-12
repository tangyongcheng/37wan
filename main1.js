$(document).ready(function(){
	$(".login").click(function(){
		var maskheight=$(document).height();
		var maskwidth=$(document).width();
		$("<div class='mask'></div>").appendTo($("body"));
		$(".mask").css({background:"black","width":maskwidth,"height":maskheight,position:"absolute",top:"0",left:"0","opacity":0.6});
		$(".login_inter").show();
	})
	$(".delete").click(function(){
		$(".login_inter").hide();
		$(".mask").remove();
	})
	$(".register").click(function(){
		var maskheight=$(document).height();
		var maskwidth=$(document).width();
		$("<div class='mask'></div>").appendTo($("body"));
		$(".mask").css({background:"black","width":maskwidth,"height":maskheight,position:"absolute",top:"0",left:"0","opacity":0.6});
		$(".register_inter").show();
	})
	$(".delete1").click(function(){
		$(".register_inter").hide();
		$(".mask").remove();
	})
})
//all_game处的动画
$(document).ready(function(){
	$(".all_game_dd").hover(function(){
		var index=$(this).index();
		$(".all_game_img1").eq(index-1).fadeIn(1).siblings().fadeOut(1);
	})
	$(".top_right").hover(function(){
		$(".all_game").toggle();
	})
	$(".home_page").hover(function(){
		$(".home_page1").toggle();
	})
})
var index=0;
//container_top部分的动画
$(document).ready(function(){
	setInterval(clock,2000)
	$(".img_Carousel li").hover(function(){
		var index=$(this).index();
		$(".container_top a").eq(index).stop(true,false).fadeIn().siblings().fadeOut();
	})
	function clock(){
		$(".img_Carousel li").eq(index).addClass("aa").siblings().removeClass("aa");
		$(".container_top a").eq(index).stop(true,false).fadeIn().siblings().fadeOut();
		index=(index+1)%6
	}
})
//container2_part中.part2_left处动画
$(document).ready(function(){
	$(".switch span").hover(function(){
		var index=$(this).index();
		$(".part2_left dl dd").eq(index-1).fadeIn(50).siblings().fadeOut(50);
	})
})
//container2_part中.part2_right处动画
$(document).ready(function(){
			$(".part2_right_list li").hover(function(){
			var index=$(this).index()
		$(".list_link").eq(index).stop(true,false).animate({top:"-30px"});
		$(this).addClass("aa");
	},function(){
		var index=$(this).index()
		$(".list_link").eq(index).stop(true,false).animate({top:"-0px"});
		$(this).removeClass("aa");
	})	
})
$(document).ready(function(){
	$(".more_game li").mouseover(function(){
		var index=$(this).index();
		$(".more_game li h2").eq(index).css("color","#FFFFFF");
		$(".more_game li p").eq(index).css("color","#FFFFFF");
	})
	$(".more_game li").mouseout(function(){
		var index=$(this).index();
		$(".more_game li h2").eq(index).css("color","#3C3C3C");
		$(".more_game li p").eq(index).css("color","#A9A9A9");
	})
})