$(function(){
	$('.study-txt').hide();
	const ok = document.getElementById('ok');
	ok.addEventListener('click', e => {
		$('.all').addClass("none");
		$('.study-txt').show();
		setTimeout(function(){
			$('.study-txt').animate({
				opacity: 0
			},{
				iterations: Infinity,
				duration: 500
			})
		},1000)
  		const start_color = document.getElementById('start-color').value;
 		const end_color = document.getElementById('end-color').value;
 		const time = document.getElementById('time').value;
    	document.body.animate({
 	    	backgroundColor: [start_color, end_color],
 		}, {
  	    	iterations: 1,
  	    	duration: parseInt(time),
 		});
		 setTimeout(function(){
			 $('.study-txt').text("End study!").animate({
				 opacity: 1
			 },{
				iterations: 1,
				duration: 500
			 },500)
		 },parseInt(time))
}, { passive: true });
})
