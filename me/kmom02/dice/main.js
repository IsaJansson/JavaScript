/**
 * Place your JS-code here.
 */
$(document).ready(function(){
  'use strict';
  var random, rollDice, out, rows,
  element = document.getElementById('text');

  element.className = 'black';
  element.innerHTML = '<b>Dice - Functions in JavaScript</b><br />';

  random = function(min, max){
  	return Math.floor(Math.random()*(max+1-min)+min);
  }

  rollDice = function(times){
  	var i, val, res='', sum=0;
  	times = times || 1;
  	for(i=0; i<times; i++){
  		val = random(1, 6);
  		sum += val;
  		res += val + ', ';
  	}
  	return 'Avarage: ' + (sum/times).toPrecision(2) + ' Serie: ' + res;
  }

  out = function(e, s){
  	e.innerHTML += '<p>' + s; 
  }

  rows = '<br />Throw the dice 6 times.<br />' + rollDice(6);
  out(element, rows);

  rows = 'Throw the dice 12 times.<br />' + rollDice(12);
  out(element, rows);

  rows = 'Throw the dice 100 times.<br />' + rollDice(100);
  out(element, rows);

});

