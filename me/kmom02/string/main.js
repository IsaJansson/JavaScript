/**
 * Place your JS-code here.
 */
$(document).ready(function(){
  'use strict';
  var out1, out2, res,
  rows = '',
  element = document.getElementById('text');

  out1 = function(e, s){
  	e.innerHTML += '<br />' + s + ' (' + s.length + ')';
  }

  out2 = function(e, s){
  	e.innerHTML += '<br />' + s + ' (' + typeof(s) + ')';
  }

  element.className = 'black';
  element.innerHTML = '<b>Strings, datatypes and values</b><br />';

  rows += 'Copyright \u00A9 by XXX';
  out1(element, rows);

  rows += ' Mumintrollet ';
  out1(element, rows);

  rows += 1942;
  out1(element, rows);

  rows += '.';
  out1(element, rows);

  res = 15;
  rows = rows.substr(0, res) + rows.substring(res + 4, rows.length);
  out1(element, rows);

  rows = '<br />19' + '42';
  out2(element, rows);

  rows = '19' + 42;
  out2(element, rows);

  rows = 19 + 42;
  out2(element, rows);

  rows = 19 + '42';
  out2(element, rows);

});

