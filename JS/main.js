// script.js

$(document).ready(function(){

	$('project-card').hover(
    function(){
        $(this).addClass('highlight');
    
    },
    function(){
        $(this).removeClass('highlight');
    }
  );

});