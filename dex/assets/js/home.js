$(function() {
  $('.pokemon-list-home').hover(function() {
    $(this).addClass('nooverflow');
    $('.pokemon-list-home').addClass('dark');
    $(this).removeClass('dark');
    $(this).find('.pokemon-list-home-image').addClass('hovered');
  }, function() {
    // on mouseout, reset the background colour
    $(this).removeClass('nooverflow');
    $('.pokemon-list-home').removeClass('dark');
    $(this).find('.pokemon-list-home-image').removeClass('hovered');
  });
});
