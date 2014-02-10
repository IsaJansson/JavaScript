/**
 * Place your JS-code here.
 */
$(document).ready(function(){
  'use strict';

  (function(){$('head style[type="text/css"]').attr('type', 'text/less');less.refreshStyles();})();
  
  var text;
  text = document.getElementById('text');
  text.innerHTML = 'Hello World, document is ready!';
  text.className = 'green';
  console.log('Everything is ready.');  
  
});

