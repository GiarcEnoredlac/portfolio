// script.js

// $(document).ready(function(){

// 	$('project-card').hover(function(){
//         $(this).addClass('highlight');
//     },
//     function(){
//         $(this).removeClass('highlight');
//     }
//   );

// });
$(function() {

  ////////// Mobile Menu //////////

  $('a.menu-icon').click(function() {
    $('#menu-links').slideToggle();
  });

  // fix hidden links on window resize

  $(window).resize(function() {
    if ($(window).width() > 700) {
      $('#menu-links').removeAttr('style');
    }
  });

});