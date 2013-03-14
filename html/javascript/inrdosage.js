$(window).ready(function(){
	/*
	$(".btnCalc").click(function(){
		var range1 = $('#range-1a').val();
		console.log("gotha " + range1);
	});
	*/
	


$( "#range-1a").on('slidestop', function( event ) {
   var slider_value=$("#range-1a").slider().val();
   alert('Value: '+slider_value);
});

	
	
});