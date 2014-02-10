/**
 * Place your JS-code here.
 */
$(document).ready(function(){
  'use strict';
  var text = document.getElementById('text'), button = document.getElementById('button');

  text.className ='black';
  text.innerHTML ='Animate using <code>setTimeout()</code>';

  button.addEventListener('click', function(){
  	var colors = ['green', 'yellow', 'red', 'blue', 'pink'],
  	step = 0,
  	animateFunction = function() {
  		if(step === colors.length) {
  			button.style.backgroundColor = '';
  		}
  		else {
  			button.style.backgroundColor = colors[step];
  			step+=1;
  			window.setTimeout(animateFunction, 500);
  		}
  	};
  	window.setTimeout(animateFunction, 500);
  }, false);

  
});

