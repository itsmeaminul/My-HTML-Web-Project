$(document).ready(function(){
            $('.bxslider').bxSlider({
                mode: 'fade',
                auto: true,
                //autoControls: true,
                //stopAutoOnClick: true,
                pager: true,
                responsive: true
            });
});


//confermation function
function alert(){
	confirm('Are you sure to submit your information?');
}


// 
$(document).ready(function(){
	$("#all").click(function(){
		$(".newarrival").show(1000);
		$(".formal").show(1000);
		$(".semiformal").show(1000);
	});

	$("#newArrival").click(function(){
		$(".newarrival").show(1000);
		$(".formal").hide(1000);
		$(".semiformal").hide(1000);
	});

	$("#formal").click(function(){
		$(".newarrival").hide(1000);
		$(".formal").show(1000);
		$(".semiformal").hide(1000);
	});

	$("#semi-formal").click(function(){
		$(".newarrival").hide(1000);
		$(".formal").hide(1000);
		$(".semiformal").show(1000);
	});
});
