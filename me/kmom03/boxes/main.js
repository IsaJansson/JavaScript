/**
 * Place your JS-code here.
 */
$(document).ready(function(){
  'use strict';

  // Kod för att visa och gömma innehållet i boxarna 
   

  $('.gift').click(function() {
  		$(this).parent().addClass('fullwidth');
  		$(this).parent().find('*').show('slow');
  		$(this).parent().children('.gift').hide();
  		console.log('Clicked on the present to open it');
  });

  $('#close').click(function() {
		$(this).parent().find('*').hide();
		$(this).parent().removeClass().addClass('box').show();
		$(this).parent().children('.gift').show();
		console.log('Closing the box');
	});


  	// Box nr 1 
  $('#box1 p, #box1 img').click(function() {
  		$(this).toggleClass('dark');
  		console.log('Toggle');
  });

  // Box nr 2
  $('#box2').click(function(){
  	$(this).toggleClass('green');
  	console.log('Changing to the color green');
  });
  $('#box2 img').click(function(event){
  	$(this).toggleClass('size');
  	event.stopPropagation();
  });

  // Box nr 3
  var createColor = function() {
  	$('<div></div>')
  		.addClass('color')
  		.css('background-color', $('#box3_color').val())
  		.insertAfter('#palette')
  		.click(function(){
  			$(this).remove();
  			console.log('Removing this color from the palette');
  		});
  	console.log("Adding an item to the color palette." + $('#box3_color').val());
  };

  $('#box3 input[type=button]').click(createColor);
  $('#box3 input[type=text]').keypress(function(event){
  	if(event.which == 13){
  		event.preventDefault();
  		createColor();
  	}
  });

  // Box nr 4
  	var pic = $('#box4 img.example'),
  		picWidth = Math.round(pic.width()),
		picHeight = Math.round(pic.height());

	$('#box4 input[id=button]').click(function(){
		var dimensions = picWidth + ' * ' + picHeight;
		$('#dimensions').text(dimensions);
		console.log('Getting the dimensions ' + dimensions);
	});

	$('#box4 input[id=width_plus]').click(function(){
		pic.width(picWidth);
		picWidth += 10;
		console.log('increasing the width by 10');
	});

	$('#box4 input[id=width_minus]').click(function(){
		pic.width(picWidth);
		picWidth -= 10;
		console.log('decreasing the width by 10');
	});

	$('#box4 input[id=height_plus]').click(function(){
		pic.height(picHeight);
		picHeight += 10;
		console.log('increasing the height by 10');
	});

	$('#box4 input[id=height_minus]').click(function(){
		pic.height(picHeight);
		picHeight -= 10;
		console.log('decreasing the height by 10');
	});

	pic.click(function(){
		pic.width(200);
		pic.height(260);
	});

	// Box nr 5
	$('#box5 a.fade').click(function(){
		$('#box5 img.example#nr1').fadeToggle('slow');
	});

	$('#box5 a.slide').click(function(){
		$('#box5 img.example#nr2').slideToggle('slow');
	});

	// Box nr 6 
  $('#box6 img.example').click(function() {
    var windowHeigth = window.innerHeight || $(window).height(), 
        windowWidth  = window.innerWidth  || $(window).width();

    // Display the overlay
    $('<div id="lightbox"></div>')
      .css('opacity', '0')
      .animate({'opacity' : '0.5'}, 'slow')
      .appendTo('body');

    $('body').css('overflow', 'hidden');
    
    // Create the lightbox container
    $('<div id="picture"></div>')
      .hide()
      .appendTo('body');
    
    // Display the image on load
    $('<img>')
      .attr('src', $(this).attr('src'))
      .css({
        'max-height': windowHeigth, 
        'max-width':  windowWidth
      })
      .load(function() {
        $('#picture')
          .css({
            'top':  (windowHeigth - $('#picture').height()) / 2,
            'left': (windowWidth  - $('#picture').width())  / 2
          })
          .fadeIn();
      })
      .appendTo('#picture');
      
      // Remove it all on click
      $('#lightbox, #picture').click(function() {
        $('#lightbox, #picture').remove();
      });
    
    console.log("Display image in box.");
  });

});

