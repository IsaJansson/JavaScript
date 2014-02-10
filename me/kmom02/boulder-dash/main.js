/**
 * Place your JS-code here.
 */
$(document).ready(function(){
  'use strict';
  var target = document.getElementById('b1'),
    area = document.getElementById('flash'),
    left = area.offsetLeft,
    top  = area.offsetTop,
    posLeft = 0, 
    posTop = 0,
    tileSize = 32,
    gridSize = 24,


  	gameArea = [
      12,14,12,12,14,12,12,14,12,12,14,12,12,14,12,12,14,12,12,14,12,12,14,12,
      12,12,14,12,12,14,12,12,14,12,12,14,12,12,14,12,12,14,12,12,14,12,12,14,
      14,12,12,14,12,12,14,12,12,14,12,12,14,12,12,14,12,12,14,12,12,14,12,12,
      12,14,12,12,14,12,12,14,12,12,14,12,12,14,12,12,14,12,12,14,12,12,14,12,
      12,12,14,12,12,14,12,12,14,12,12,14,12,12,14,12,12,14,12,12,14,12,12,14,
      14,12,12,14,12,12,14,12,12,14,12,12,14,12,12,14,12,12,14,12,12,14,12,12,
      12,14,12,12,14,12,12,14,12,12,14,12,12,14,12,12,14,12,12,14,12,12,14,12,
      12,12,14,12,12,14,12,12,14,12,12,14,12,12,14,12,12,14,12,12,14,12,12,14,
      14,12,12,14,12,12,14,12,12,14,12,12,12,12,12,14,12,12,14,12,12,14,12,12,
      12,14,12,13,14,12,13,14,12,13,14,13,13,15,12,13,14,12,13,14,12,13,14,12,
      12,13,14,12,13,14,12,13,15,15,13,14,12,12,14,12,13,14,12,13,14,12,13,14,
      14,12,13,14,12,13,14,12,15,15,13,13,12,12,13,14,12,13,14,12,13,14,12,13,
      13,14,12,13,14,12,13,14,12,13,13,15,13,14,12,13,14,12,13,14,12,13,14,12,
      12,13,14,12,13,14,12,13,14,12,13,14,12,13,13,12,13,14,12,13,14,12,13,14,
      14,12,13,14,12,13,14,12,13,14,12,13,14,13,12,12,12,13,14,12,13,14,23,23,
      13,14,12,13,14,12,13,14,12,13,14,13,13,14,12,12,12,12,13,23,23,23,21,21,
      12,13,14,12,13,14,12,13,14,12,13,14,12,13,13,12,13,23,23,21,21,21,21,21,
      14,12,13,14,12,13,14,12,13,14,12,13,14,15,12,14,12,23,21,21,21,21,21,21,
      13,14,12,13,14,12,13,14,12,13,14,12,13,15,15,13,23,21,21,21,21,21,21,21,
      12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,23,21,21,21,21,21,21,21,
      14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,22,21,21,21,21,21,21,21,
      13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,22,21,21,21,21,21,21,
      12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,22,21,21,21,21,21,
      14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,22,21,21,21,21,
    ],

 	 gameBlocks = [
      11,12,11,14,13,12,11,14,11,12,11,13,11,12,11,14,11,12,11,13,11,12,11,14,
      12,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,
      11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,
      11,10,10,10,10,10,10,10,15,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,
      11,10,10,10,10,10,10,10,16,10,10,10,10,10,10,10,10,18,16,10,10,10,10,11,
      11,10,10,10,10,10,17,16,15,10,10,10,10,10,10,10,10,15,10,10,10,10,10,11,
      11,10,10,10,10,10,15,10,10,10,10,10,10,10,10,10,15,17,10,10,10,10,10,12,
      12,10,10,10,10,10,16,10,10,10,10,10,10,10,10,10,15,10,10,10,10,10,10,14,
      11,10,10,10,10,10,15,10,10,10,10,10,10,10,10,10,16,10,10,10,10,10,10,11,
      14,10,10,10,10,10,17,15,18,15,17,16,10,10,10,10,15,10,10,10,10,10,10,12,
      11,10,10,10,10,10,10,10,10,10,15,18,10,10,10,10,18,10,10,10,10,10,10,11,
      11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,17,15,10,10,10,10,10,10,11,
      12,10,10,10,10,10,10,10,10,10,10,10,10,15,17,16,10,10,10,10,10,10,10,14,
      14,10,10,10,10,10,10,10,10,16,10,10,10,16,15,10,10,10,10,10,10,10,10,11,
      11,10,10,10,10,10,15,15,16,15,10,10,10,10,10,10,10,10,10,10,10,10,10,11,
      11,10,10,10,10,10,17,16,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,
      11,10,10,10,10,10,15,10,10,10,15,10,10,10,10,10,10,10,10,10,10,10,10,14,
      12,10,10,10,10,10,18,10,15,17,16,10,10,10,10,10,10,10,10,10,10,10,10,12,
      11,10,10,10,10,10,15,15,18,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,
      12,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,
      11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,
      14,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,14,
      12,19,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,19,11,
      11,12,11,14,11,12,11,14,11,12,11,14,11,12,11,14,11,12,11,14,11,12,11,14,
    ];

	  function drawGamePlan(gameArea, gameBlocks) {
	    var i,e,b;
	    for(i = 0; i < gameArea.length; i++) {
	      e = document.createElement('div');
	      e.innerHTML = '';
	      e.className = 'tile t' + gameArea[i] + (gameBlocks[i] ? ' b' + gameBlocks[i] : '');
	      e.id = 'n' + i;
	      area.appendChild(e);
	    } 
	  };
    console.log('drawing gameplan');
	drawGamePlan(gameArea, gameBlocks);


  var move = function(moveLeft, moveTop, which) {

    function moveIt() {
      target.style.left = (area.offsetLeft + posLeft*tileSize + tileSize/2) + 'px';
      target.style.top  = (area.offsetTop + posTop*tileSize + tileSize/2) + 'px';      
      //console.log("Moved to: " + target.style.left + "x" + target.style.top);
    };

    if(which) { target.className='baddie ' + which; }

    if(!(gameBlocks[(posLeft+moveLeft)+(posTop+moveTop)*gridSize]-10)) {
      posLeft += moveLeft; 
      posTop  += moveTop;
      moveIt();
    } else {
      console.log('Block detected, cant move.');
    }
  };
  console.log('Moving Mickey Mos to initial spot.');  
  move(1, 1, 'down');


  /**
   * Keep track on keys pressed and move target accordingly.
   */
  document.onkeydown = function(event) {
    var key;
    key = event.keyCode || event.which;
    switch(key) {
      case 37: move(-1, 0, 'left'); break;
      case 39: move(1, 0, 'right'); break;
      case 38: move(0, -1, 'up'); break;
      case 40: move(0, 1, 'down'); break; 
      default: move(0, 0, 'down'); break;
    };
    //console.log('Keypress: ' + event + ' key: ' + key + ' new pos: ' + target.offsetLeft + ', ' + target.offsetTop);
  };

  console.log('finishing touches');

});

