$(function() { 


 $('li').on('mouseover', function() {
 	$('li').fadeTo( 500, .25);
 });


 $('li').on('click', function(){
 	$('li').css('background-color', '#000');
 });

 $('li.Home').on('click', function(){
 	$('li.Home').text('clicked!')
 })


});

