define(["jquery", "underscore", "enquire", "bodymovin", "headroom", "velocity", "velocityUI" ], 
    function ($, _, enquire, bodymovin, Headroom, velocity, velocityUI, headroom) {
	$(document).ready(function() {
		$(".introImage").velocity('transition.slideUpBigIn');
		$(".introText").velocity('transition.fadeIn', 2500);
	});
});