$('document').ready(function(){

// Timer reveals and hides text input box.
// Input 1:	
	function startTimer1A(){
	  var counter = 46;
	  setInterval(function() {
		counter--;
		if (counter >= 0) {
			span = document.getElementById("count1A");
			span.innerHTML = counter;
			$('#da-1A').removeClass('hide');
		}
		if (counter === 0) {
			$('#da-1A').addClass('hide');
			$('#da-1B').addClass('appear');
			$('#input-1').addClass('appear');
			
		}
	  }, 1000);
	}
	
	function startTimer1B(){
	  var counter = 106;
	  setInterval(function() {
		counter--;
		if (counter >= 0) {
		  span = document.getElementById("count1B");
		  span.innerHTML = counter;
		}
		  
		if (counter < 60) {
			
			$('#da-1B').removeClass('hide');
			
		}
		if (counter === 0) {
			
			$('#input-1').removeClass('appear');
			$('#da-1B').addClass('hide');

			
		}
	  }, 1000);
	}

	
	
//// Input 2:	
	
	function startTimer2A(){
	  var counter = 46;
	  setInterval(function() {
		counter--;
		if (counter >= 0) {
			span = document.getElementById("count2A");
			span.innerHTML = counter;
			$('#da-2A').removeClass('hide');
		}
		if (counter === 0) {
			$('#da-2A').addClass('hide');
			$('#da-2B').addClass('appear');
			$('#input-2').addClass('appear');
			
		}
	  }, 1000);
	}
	
	function startTimer2B(){
	  var counter = 106;
	  setInterval(function() {
		counter--;
		if (counter >= 0) {
		  span = document.getElementById("count2B");
		  span.innerHTML = counter;
		}
		  
		if (counter < 60) {
			
			$('#da-2B').removeClass('hide');
			
		}
		if (counter === 0) {
			
			$('#input-1').removeClass('appear');
			
		}
	  }, 1000);
	}	
	
	
	

	
	
	
// Input 2.2 (22):	
	
	function startTimer22A(){
	  var counter = 46;
	  setInterval(function() {
		counter--;
		if (counter >= 0) {
			span = document.getElementById("count22A");
			span.innerHTML = counter;
			$('#da-22A').removeClass('hide');
		}
		if (counter === 0) {
			$('#da-22A').addClass('hide');
			$('#da-22B').addClass('appear');
			$('#input-22').addClass('appear');
			
		}
	  }, 1000);
	}
	
	function startTimer22B(){
	  var counter = 106;
	  setInterval(function() {
		counter--;
		if (counter >= 0) {
		  span = document.getElementById("count22B");
		  span.innerHTML = counter;
		}
		  
		if (counter < 60) {
			
			$('#da-22B').removeClass('hide');
			
		}
		if (counter === 0) {
			
			$('#input-22').removeClass('appear');
			
		}
	  }, 1000);
	}	
	
	
	
// Input 3:	
	function startTimer3A(){
	  var counter = 46;
	  setInterval(function() {
		counter--;
		if (counter >= 0) {
			span = document.getElementById("count3A");
			span.innerHTML = counter;
			$('#da-3A').removeClass('hide');
		}
		if (counter === 0) {
			$('#da-3A').addClass('hide');
			$('#da-3B').addClass('appear');
			$('#input-3').addClass('appear');
			
		}
	  }, 1000);
	}
	
	function startTimer3B(){
	  var counter = 106;
	  setInterval(function() {
		counter--;
		if (counter >= 0) {
		  span = document.getElementById("count3B");
		  span.innerHTML = counter;
		}
		  
		if (counter < 60) {
			
			$('#da-3B').removeClass('hide');
			
		}
		if (counter === 0) {
			
			$('#input-3').removeClass('appear');
			
		}
	  }, 1000);
	}	
	
	
	

	

// Input 3.2 (32):	
	
	function startTimer32A(){
	  var counter = 46;
	  setInterval(function() {
		counter--;
		if (counter >= 0) {
			span = document.getElementById("count32A");
			span.innerHTML = counter;
			$('#da-32A').removeClass('hide');
		}
		if (counter === 0) {
			$('#da-32A').addClass('hide');
			$('#da-32B').addClass('appear');
			$('#input-32').addClass('appear');
			
		}
	  }, 1000);
	}
	
	function startTimer32B(){
	  var counter = 106;
	  setInterval(function() {
		counter--;
		if (counter >= 0) {
		  span = document.getElementById("count32B");
		  span.innerHTML = counter;
		}
		  
		if (counter < 60) {
			
			$('#da-32B').removeClass('hide');
			
		}
		if (counter === 0) {
			
			$('#input-32').removeClass('appear');
			
		}
	  }, 1000);
	}		
	
	

// Input 4:	
	function startTimer4A(){
	  var counter = 46;
	  setInterval(function() {
		counter--;
		if (counter >= 0) {
			span = document.getElementById("count4A");
			span.innerHTML = counter;
			$('#da-4A').removeClass('hide');
		}
		if (counter === 0) {
			$('#da-4A').addClass('hide');
			$('#da-4B').addClass('appear');
			$('#input-4').addClass('appear');
			
		}
	  }, 1000);
	}
	
	function startTimer4B(){
	  var counter = 106;
	  setInterval(function() {
		counter--;
		if (counter >= 0) {
		  span = document.getElementById("count4B");
		  span.innerHTML = counter;
		}
		  
		if (counter < 60) {
			
			$('#da-4B').removeClass('hide');
			
		}
		if (counter === 0) {
			
			$('#input-4').removeClass('appear');
			
		}
	  }, 1000);
	}		

	
// Input 4.2 (42):	
	function startTimer42A(){
	  var counter = 46;
	  setInterval(function() {
		counter--;
		if (counter >= 0) {
			span = document.getElementById("count42A");
			span.innerHTML = counter;
			$('#da-42A').removeClass('hide');
		}
		if (counter === 0) {
			$('#da-42A').addClass('hide');
			$('#da-42B').addClass('appear');
			$('#input-42').addClass('appear');
			
		}
	  }, 1000);
	}
	
	function startTimer42B(){
	  var counter = 106;
	  setInterval(function() {
		counter--;
		if (counter >= 0) {
		  span = document.getElementById("count42B");
		  span.innerHTML = counter;
		}
		  
		if (counter < 60) {
			
			$('#da-42B').removeClass('hide');
			
		}
		if (counter === 0) {
			
			$('#input-42').removeClass('appear');
			
		}
	  }, 1000);
	}		
	

	

// Input 5 (5):	
	function startTimer5A(){
	  var counter = 36;
	  setInterval(function() {
		counter--;
		if (counter >= 0) {
			span = document.getElementById("count5A");
			span.innerHTML = counter;
			$('#da-5A').removeClass('hide');
		}
		if (counter === 0) {
			$('#da-5A').addClass('hide');
			$('#da-5B').addClass('appear');
			$('#input-5').addClass('appear');
			
		}
	  }, 1000);
	}
	
	function startTimer5B(){
	  var counter = 106;
	  setInterval(function() {
		counter--;
		if (counter >= 0) {
		  span = document.getElementById("count5B");
		  span.innerHTML = counter;
		}
		  
		if (counter < 60) {
			
			$('#da-5B').removeClass('hide');
			
		}
		if (counter === 0) {
			
			$('#input-5').removeClass('appear');
		}
	  }, 1000);
	}	
	

//// Input 52 (5.2):	
//	function startTimer52A(){
//	  var counter = 36;
//	  setInterval(function() {
//		counter--;
//		if (counter >= 0) {
//			span = document.getElementById("count52A");
//			span.innerHTML = counter;
//			$('#da-52A').removeClass('hide');
//		}
//		if (counter === 0) {
//			$('#da-52A').addClass('hide');
//			$('#da-52B').addClass('appear');
//			$('#input-52').addClass('appear');
//		}
//	  }, 1000);
//	}
//	
//	function startTimer52B(){
//	  var counter = 71;
//	  setInterval(function() {
//		counter--;
//		if (counter >= 0) {
//		  span = document.getElementById("count52B");
//		  span.innerHTML = counter;
//		}
//		if (counter < 36) {
//			$('#da-52B').removeClass('hide');
//		}
//		if (counter === 0) {
//			$('#input-52').removeClass('appear');
//		}
//	  }, 1000);
//	}	

	
	

// Input 6:	
	function startTimer6A(){
	  var counter = 46;
	  setInterval(function() {
		counter--;
		if (counter >= 0) {
			span = document.getElementById("count6A");
			span.innerHTML = counter;
			$('#da-6A').removeClass('hide');
		}
		if (counter === 0) {
			$('#da-6A').addClass('hide');
			$('#da-6B').addClass('appear');
			$('#input-6').addClass('appear');
			
		}
	  }, 1000);
	}
	
	function startTimer6B(){
	  var counter = 106;
	  setInterval(function() {
		counter--;
		if (counter >= 0) {
		  span = document.getElementById("count6B");
		  span.innerHTML = counter;
		}
		  
		if (counter < 60) {
			
			$('#da-6B').removeClass('hide');
			
		}
		if (counter === 0) {
			
			$('#input-6').removeClass('appear');
		}
	  }, 1000);
	}		
	
	
	
	
	
	
	
	
//	Private Life Video
	function startTimerVIDEO1(){
	  var counter = 33;
	  setInterval(function() {
		counter--;
		if (counter === 0) {
			$('#youtube1').addClass('hide');
		}
	  }, 1000);
	}
	
//	MeyerowitzStories
	function startTimerVIDEO2(){
	  var counter = 3;
	  setInterval(function() {
		counter--;
		if (counter === 0) {
			$('#youtube2').addClass('hide');
		}
	  }, 1000);
	}
	
//	MeyerowitzStories 22 (2.2)
	function startTimerVIDEO22(){
	  var counter = 3;
	  setInterval(function() {
		counter--;
		if (counter === 0) {
			$('#youtube22').addClass('hide');
		}
	  }, 1000);
	}


//	Atypical
	function startTimerVIDEO3(){
	  var counter = 3;
	  setInterval(function() {
		counter--;
		if (counter === 0) {
			$('#youtube3').addClass('hide');
		}
	  }, 1000);
	}


//	Sex Education
	function startTimerVIDEO4(){
	  var counter = 63;
	  setInterval(function() {
		counter--;
		if (counter === 0) {
			$('#youtube4').addClass('hide');
		}
	  }, 1000);
	}

//	Sex Education
	function startTimerVIDEO4(){
	  var counter = 3;
	  setInterval(function() {
		counter--;
		if (counter === 0) {
			$('#youtube4').addClass('hide');
		}
	  }, 1000);
	}	
	
//	OnMyBlock
	function startTimerVIDEO5(){
	  var counter = 3;
	  setInterval(function() {
		counter--;
		if (counter === 0) {
			$('#youtube5').addClass('hide');
		}
	  }, 1000);
	}	
	
	
//	$('#transp-button-1').hover(function() {
//  		startTimerVIDEO1();
//		$(this).addClass('hide');
//	});
//	
//	$('#transp-button-2').hover(function() {
//  		startTimerVIDEO2();
//		$(this).addClass('hide');
//	});
//	
//	$('#transp-button-3').hover(function() {
//  		startTimerVIDEO3();
//		$(this).addClass('hide');
//	});
//	
//	$('#transp-button-4').hover(function() {
//  		startTimerVIDEO4();
//		$(this).addClass('hide');
//	});
//
//	$('#transp-button-5').hover(function() {
//  		startTimerVIDEO();
//		$(this).addClass('hide');
//	});
//	
//	
//	
//	
	
	

	$('#button-1').click(function() {
  		$('#page-1').addClass('hide');
  		$('#page-1-5').removeClass('hide');	
	});

	$('#button-1-5').click(function() {
  		$('#page-1-5').addClass('hide');
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
		$('#page-17').addClass('hide');
  		$('#page-18').removeClass('hide');
	});	
	
	$('#button-18').click(function() {
		$('#page-18').addClass('hide');
  		$('#page-19').removeClass('hide');
	});	
	
	$('#button-19').click(function() {
		startTimer5A();
		startTimer5B();
		$('#page-19').addClass('hide');
  		$('#page-20').removeClass('hide');
	});	
	
	$('#button-20').click(function() {
		startTimer6A();
		startTimer6B();
		var text = $('#input-5').val();
  		$('#text-5').html(text);
		$('#page-20').addClass('hide');
  		$('#page-21').removeClass('hide');
	});			
	
	$('#button-21').click(function() {
		var text = $('#input-6').val();
  		$('#text-6').html(text);
		$('#page-21').addClass('hide');
  		$('#page-22').removeClass('hide');
	});	
	
	$('#button-22').click(function() {
		$('#page-22').addClass('hide');
  		$('#results').removeClass('hide');
	});	
	
	
	
});
