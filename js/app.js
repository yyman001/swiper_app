var $firstPage = $('.first-page');
var $page1 = $('.page1');
var $page2 = $('.page2');
var $page3 = $('.page3');
var $page4 = $('.page4');
var $page5 = $('.page5');
var $page6 = $('.page6');

document.addEventListener('touchmove', function (event) {
	event.preventDefault();
});

window.APP = {

	step1: function (swiper) {
		AnimateForClassNameforSwiper(temp_swiper);
	},
	step2: function (swiper) {
		AnimateForClassNameforSwiper(swiper);
		$page2.find('.last-ani').css3cb(function(){
			$page2.find('.arrow-down').css({'visibility': 'visible'});
		});
	},

	step3: function (swiper) {

		AnimateForClassNameforSwiper(swiper);
		$page3.find('.last-ani').css3cb(function(){
			$page3.find('.arrow-down').css({'visibility': 'visible'});
		});
	},
	step4: function (swiper) {

		AnimateForClassNameforSwiper(swiper);
		$page4.find('.last-ani').css3cb(function(){
			$page4.find('.arrow-down').css({'visibility': 'visible'});
		});
	},

	step5: function (swiper) {
		AnimateForClassNameforSwiper(swiper);
		//打字
		$page5.find('.last-ani').css3cb(function(){
			$('.in-box').addClass('cur');
			$('.text-box').addClass('cur');
			$page5.find('.arrow-down').css({'visibility': 'visible'});
		})
	},
	step6:function(swiper){
		AnimateForClassNameforSwiper(swiper);
		$('.p6-last-ani1').css3cb(function(){
			$page6.find('.text').addClass('cur');
		});
		$('.p6-last-ani2').css3cb(function(){
			$page6.find('.arrow-down').css({'visibility': 'visible'});
		});
	},
	step7:function(swiper){
		AnimateForClassNameforSwiper(swiper);
	}
};

$('.start-btn').on('click', function () {
	//$('.games__icon').hide();
	AnimateCache3($page1);
	$page1.cssAnimationEnd('fadeOut2',function(){
		APP.step1();
		$page2.find('.last-ani').css3cb(function(){
			$page2.find('.arrow-down').css({'visibility': 'visible'});
		});
	}).css({"z-index": -1,"visibility":"hidden"});
	return false;
});

