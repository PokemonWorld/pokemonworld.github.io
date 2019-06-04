$(function(){
  $pkmn_list = [
    "images/pkmn/mudkip.webp",
    "images/pkmn/chimecho.webp",
    "images/pkmn/nidoking.webp",
    "images/pkmn/bulbasaur.webp",
    "images/pkmn/linoone.webp",
    "images/pkmn/poliwhirl.webp",
    "images/pkmn/rayquaza.webp",
    "images/pkmn/latios.webp",
  ];
  $trainer_list = [
    "images/trainers/1.png",
    "images/trainers/2.png",
    "images/trainers/3.png",
    "images/trainers/4.png",
    "images/trainers/5.png",

  ];
  $route_list = [
    "images/route/29.png",
    "images/route/beach.png"
  ];
  $actual_pkmn = $pkmn_list[0];
  $actual_trainer = $trainer_list[0];
  $actual_map = $route_list[0];
  //-----------------------------------
  $('.char1 img').each(function(){
    $this = $(this);
    $this.attr('src', $actual_trainer);
  });
  $('.char2 img').each(function(){
    $this = $(this);
    $this.attr('src', $actual_pkmn);
  });
  $('.card').each(function(){
    $this = $(this);
    $this.css('background-image', 'url('+$actual_map+')');
  });
  $('.tools p').click(function(){
    $this = $(this);
    $data = $this.data('gallery');
    $('.gallery.'+$data).removeClass('none');
  });

  function loopImg(array, gallery){
    for (var i = 0; i < array.length; i++) {
      $img = "<img src='"+array[i]+"'>";
      $(gallery).append($img);
    }
  }
  function changeSprite(gallery, elmToChange){
    $(gallery+" img").click(function(){
      $this = $(this);
      $src = $this.attr('src');
      if(gallery == ".escenario"){
        $('.card').css('background-image', 'url('+$src+')');
      } else{
        $(elmToChange+" img").attr('src', $src);
      }
      $('.gallery').addClass('none');
    });
  }

  loopImg($pkmn_list, '.gallery.pkmn');
  loopImg($trainer_list, '.gallery.entrenador');
  loopImg($route_list, '.gallery.escenario');

  changeSprite('.entrenador', '.char1');
  changeSprite('.pkmn', '.char2');
  changeSprite('.escenario', 'card');

});
