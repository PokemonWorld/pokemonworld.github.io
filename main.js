$(function(){
  $pkmn_list = [
    "https://vignette.wikia.nocookie.net/es.pokemon/images/1/1e/Poliwhirl_mini.png/revision/latest?cb=20100124120634",
    "https://vignette.wikia.nocookie.net/es.pokemon/images/4/41/Mudkip_mini.png/revision/latest?cb=20100124125206",
    "https://vignette.wikia.nocookie.net/es.pokemon/images/e/e9/Chimecho_mini.png/revision/latest?cb=20100124130843",
    "https://vignette.wikia.nocookie.net/es.pokemon/images/d/d2/Linoone_mini.png/revision/latest?cb=20100124125518",
    "https://vignette.wikia.nocookie.net/es.pokemon/images/8/85/Bulbasaur_mini.png/revision/latest?cb=20100124115635",
    "https://vignette.wikia.nocookie.net/es.pokemon/images/3/3c/Nidoking_mini.png/revision/latest?cb=20100124115959",
  ];
  $trainer_list = [
    "https://archives.bulbagarden.net/media/upload/5/58/Bug_Catcher_HGSS_OD.png",
    "https://archives.bulbagarden.net/media/upload/3/39/Aaron_OD.png",
    "https://archives.bulbagarden.net/media/upload/b/b6/Ace_Trainer_f_IV_Snow_OD.png",
    "https://archives.bulbagarden.net/media/upload/2/2b/Ace_Trainer_m_HGSS_OD.png",
    "https://archives.bulbagarden.net/media/upload/6/69/Archer_OD.png",
    "https://archives.bulbagarden.net/media/upload/9/91/Barry_OD.png"
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
