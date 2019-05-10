$('document').ready(function(){


	$('#button-1').click(function() {
  		$('#page-1').addClass('hide');
  		$('#page-2').removeClass('hide');
		
	});

	$('#button-2').click(function() {
		$('#page-2').addClass('hide');
  		$('#page-3').removeClass('hide');
	});
	
	$('#button-3').click(function() {
		$('#page-3').addClass('hide');
  		$('#page-4').removeClass('hide');
	});
	
	$('#button-4').click(function() {
		$('#page-4').addClass('hide');
  		$('#page-5').removeClass('hide');
	});

// Timer reveals and hides text input box.
// Input 1:	
	function startTimer1A(){
	  var counter = 36;
	  setInterval(function() {
		counter--;
		if (counter >= 0) {
		  span = document.getElementById("count1A");
		  span.innerHTML = counter;
		}
		if (counter === 0) {
			
			$('#input-1').addClass('appear');
			alert('sorry, out of time 1A');
			clearInterval(counter);
			
		}
	  }, 1000);
	}
	
	function startTimer1B(){
	  var counter = 72;
	  setInterval(function() {
		counter--;
		if (counter >= 0) {
		  span = document.getElementById("count1B");
		  span.innerHTML = counter;
		}
		if (counter === 0) {
			
			$('#input-1').removeClass('appear');
			alert('sorry, out of time 1B');
			clearInterval(counter);
			
		}
	  }, 1000);
	}

// Input 2:	
	function startTimer2A(){
	  var counter = 36;
	  setInterval(function() {
		counter--;
		if (counter >= 0) {
		  span = document.getElementById("count2A");
		  span.innerHTML = counter;
		}
		if (counter === 0) {
			
			$('#input-2').addClass('appear');
			alert('sorry, out of time 2A');
			clearInterval(counter);
			
		}
	  }, 1000);
	}
	
	function startTimer2B(){
	  var counter = 72;
	  setInterval(function() {
		counter--;
		if (counter >= 0) {
		  span = document.getElementById("count2B");
		  span.innerHTML = counter;
		}
		if (counter === 0) {
			
			$('#input-2').removeClass('appear');
			alert('sorry, out of time 2B');
			clearInterval(counter);
			
		}
	  }, 1000);
	}
	
// Input 2.2 (22):	
	function startTimer22A(){
	  var counter = 36;
	  setInterval(function() {
		counter--;
		if (counter >= 0) {
		  span = document.getElementById("count22A");
		  span.innerHTML = counter;
		}
		if (counter === 0) {
			
			$('#input-22').addClass('appear');
			alert('sorry, out of time 22A');
			clearInterval(counter);
			
		}
	  }, 1000);
	}
	
	function startTimer22B(){
	  var counter = 72;
	  setInterval(function() {
		counter--;
		if (counter >= 0) {
		  span = document.getElementById("count22B");
		  span.innerHTML = counter;
		}
		if (counter === 0) {
			
			$('#input-22').removeClass('appear');
			alert('sorry, out of time 2B');
			clearInterval(counter);
			
		}
	  }, 1000);
	}

// Input 3:	
	function startTimer3A(){
	  var counter = 5;
	  setInterval(function() {
		counter--;
		if (counter >= 0) {
		  span = document.getElementById("count3A");
		  span.innerHTML = counter;
		}
		if (counter === 0) {
			
			$('#input-3').addClass('appear');
			alert('sorry, out of time 3A');
			clearInterval(counter);
			
		}
	  }, 1000);
	}
	
	function startTimer3B(){
	  var counter = 10;
	  setInterval(function() {
		counter--;
		if (counter >= 0) {
		  span = document.getElementById("count3B");
		  span.innerHTML = counter;
		}
		if (counter === 0) {
			
			$('#input-3').removeClass('appear');
			alert('sorry, out of time 3B');
			clearInterval(counter);
			
		}
	  }, 1000);
	}

// Input 3.2 (32):	
	function startTimer32A(){
	  var counter = 5;
	  setInterval(function() {
		counter--;
		if (counter >= 0) {
		  span = document.getElementById("count32A");
		  span.innerHTML = counter;
		}
		if (counter === 0) {
			
			$('#input-32').addClass('appear');
			alert('sorry, out of time 32 (3.2)A');
			clearInterval(counter);
			
		}
	  }, 1000);
	}
	
	function startTimer32B(){
	  var counter = 10;
	  setInterval(function() {
		counter--;
		if (counter >= 0) {
		  span = document.getElementById("count32B");
		  span.innerHTML = counter;
		}
		if (counter === 0) {
			
			$('#input-32').removeClass('appear');
			alert('sorry, out of time 32 (3.2)B');
			clearInterval(counter);
			
		}
	  }, 1000);
	}
	
	
// Input 4:	
	function startTimer4A(){
	  var counter = 5;
	  setInterval(function() {
		counter--;
		if (counter >= 0) {
		  span = document.getElementById("count4A");
		  span.innerHTML = counter;
		}
		if (counter === 0) {
			
			$('#input-4').addClass('appear');
			alert('sorry, out of time 4A');
			clearInterval(counter);
			
		}
	  }, 1000);
	}
	
	function startTimer4B(){
	  var counter = 10;
	  setInterval(function() {
		counter--;
		if (counter >= 0) {
		  span = document.getElementById("count4B");
		  span.innerHTML = counter;
		}
		if (counter === 0) {
			
			$('#input-4').removeClass('appear');
			alert('sorry, out of time 4B');
			clearInterval(counter);
			
		}
	  }, 1000);
	}
	
	
// Input 4.2 (42):	
	function startTimer42A(){
	  var counter = 5;
	  setInterval(function() {
		counter--;
		if (counter >= 0) {
		  span = document.getElementById("count42A");
		  span.innerHTML = counter;
		}
		if (counter === 0) {
			
			$('#input-42').addClass('appear');
			alert('sorry, out of time 42A');
			clearInterval(counter);
			
		}
	  }, 1000);
	}
	
	function startTimer42B(){
	  var counter = 10;
	  setInterval(function() {
		counter--;
		if (counter >= 0) {
		  span = document.getElementById("count42B");
		  span.innerHTML = counter;
		}
		if (counter === 0) {
			
			$('#input-42').removeClass('appear');
			alert('sorry, out of time 42B');
			clearInterval(counter);
			
		}
	  }, 1000);
	}
		
	
	
	// Button Triggers:
	$('#button-5').click(function() {
		startTimer1A();
		startTimer1B();
		$('#page-5').addClass('hide');
  		$('#page-6').removeClass('hide');
	});
	
	
	$('#button-6').click(function() {
		var text = $('#input-1').val();
  		$('#text-1').html(text);
		$('#page-6').addClass('hide');
  		$('#page-7').removeClass('hide');
	});
	
	$('#button-7').click(function() {
		$('#page-7').addClass('hide');
  		$('#page-8').removeClass('hide');
	});
	
	$('#button-8').click(function() {
		startTimer2A();
		startTimer2B();
		$('#page-8').addClass('hide');
  		$('#page-9').removeClass('hide');
	});
	
	$('#button-9').click(function() {
		var text = $('#input-2').val();
  		$('#text-2').html(text);
		$('#page-9').addClass('hide');
  		$('#page-10').removeClass('hide');
	});
	
	$('#button-10').click(function() {
		$('#page-10').addClass('hide');
  		$('#page-102').removeClass('hide');
	});	
	
	$('#button-102').click(function() {
		$('#page-102').addClass('hide');
  		$('#page-103').removeClass('hide');
	});	
	
	$('#button-103').click(function() {
		startTimer22A();
		startTimer22B();
		$('#page-103').addClass('hide');
  		$('#page-104').removeClass('hide');
	});	
	
	$('#button-104').click(function() {
		var text = $('#input-22').val();
  		$('#text-22').html(text);
		$('#page-104').addClass('hide');
  		$('#page-105').removeClass('hide');
	});	
	
		
	$('#button-105').click(function() {
		$('#page-105').addClass('hide');
  		$('#page-11').removeClass('hide');
	});	
	
	$('#button-11').click(function() {
		startTimer3A();
		startTimer3B();
		$('#page-11').addClass('hide');
  		$('#page-12').removeClass('hide');
	});	
	
	$('#button-12').click(function() {
		startTimer32A();
		startTimer32B();
		var text = $('#input-3').val();
  		$('#text-3').html(text);
		$('#page-12').addClass('hide');
  		$('#page-13').removeClass('hide');
	});	
	
	$('#button-13').click(function() {
		var text = $('#input-32').val();
  		$('#text-32').html(text);
		$('#page-13').addClass('hide');
  		$('#page-14').removeClass('hide');
	});	
	
	$('#button-14').click(function() {
		$('#page-14').addClass('hide');
  		$('#page-15').removeClass('hide');
	});	
	
	$('#button-15').click(function() {
		startTimer4A();
		startTimer4B();
		$('#page-15').addClass('hide');
  		$('#page-16').removeClass('hide');
	});	
	
	$('#button-16').click(function() {
		startTimer42A();
		startTimer42B();
		var text = $('#input-4').val();
  		$('#text-4').html(text);
		$('#page-16').addClass('hide');
  		$('#page-17').removeClass('hide');
	});	
	
	$('#button-17').click(function() {
		var text = $('#input-42').val();
  		$('#text-42').html(text);
		$('#page-17').addClass('hide');
  		$('#page-18').removeClass('hide');
	});	
	
	$('#button-18').click(function() {
		$('#page-18').addClass('hide');
  		$('#results').removeClass('hide');
	});	
	
	
});
