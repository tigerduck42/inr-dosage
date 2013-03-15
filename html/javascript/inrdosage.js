$(window).ready(function(){
	
	var db = new InrDB();


	$(".btnCalc").click(function(){
		db.set('inrMin', $('#range-1a').val());	
		db.set('inrMax', $('#range-1b').val());
		db.set('weekDosage', $('#range-1c').val());
		console.log('value ' + $('#range-1c').val());
		refreshWeekDosage();
		
	});
	
	
$("#range-1a").on('slidestop', function( event ) {
   var slider_value=$("#range-1a").slider().val();
   alert('Value: '+ slider_value);
});

db.set('martin', "my husband");
db.get('martin', "#mon .value");

	
});

function refreshWeekDosage() {
	console.log("kkkk");
	var db = new InrDB();
	db.get('weekDosage', "#range-1e");
	$('#range-1e').slider('refresh');
	console.log("ks");
}