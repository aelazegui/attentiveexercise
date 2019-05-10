$('document').ready(function(){

	var minutes = $( '#set-time' ).val();

	var target_date = new Date().getTime() + ((minutes * 60 ) * 1000); // set the countdown date
	var time_limit = ((minutes * 60 ) * 1000);
	//set actual timer
	
	setTimeout(
	  function() 
	  {
		alert( 'Times up!' );
	  }, time_limit );

	var seconds; // variables for time units

	var countdown = document.getElementById("tiles"); // get tag element

	getCountdown();

	setInterval(function () { getCountdown(); }, 1000);

	
	function getCountdown(){

		// find the amount of "seconds" between now and target
		var current_date = new Date().getTime();
		var seconds_left = (target_date - current_date) / 1000;

	  if ( seconds_left >= 0 ) {
		seconds = pad( parseInt( seconds_left ) );

		// format countdown string + set tag value
		countdown.innerHTML = "<span>" + seconds + "</span>"; 
	  }
	}

	function pad(n) {
		return (n < 10 ? '0' : '') + n;
	}
	
	
});
