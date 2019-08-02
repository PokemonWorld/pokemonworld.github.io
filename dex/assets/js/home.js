$(function() {
  $('.pokemon-list-home').hover(function() {
    $(this).addClass('nooverflow');
    $(this).find('.pokemon-list-home-image').addClass('hovered');
  }, function() {
    // on mouseout, reset the background colour
    $(this).removeClass('nooverflow');
    $(this).find('.pokemon-list-home-image').removeClass('hovered');
  });
});
