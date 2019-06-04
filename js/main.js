$(function(){
  $pkmn_list = [];
  var frame1 = true;
  //var for frames
  var first_frame = "";
  var second_frame = "";

  for (var i = 1; i < 494; i++) {
    $pkmn_list.push("images/pkmn/"+i+".png");
  }

  $trainer_list = [
    "images/trainers/1.png",
    "images/trainers/2.png",
    "images/trainers/3.png",
    "images/trainers/4.png",
    "images/trainers/5.png",
    "images/trainers/6.png",
    "images/trainers/7.png",
    "images/trainers/8.png",
  ];
  $route_list = [
    "images/route/29.png",
    "images/route/beach.png",
    "images/route/sand.png"
  ];
  $actual_pkmn = $pkmn_list[18];
  $actual_second_frame = "images/pkmn/frame2/19.png";
  second_frame = $actual_second_frame;
  $actual_trainer = $trainer_list[7];
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

  function setFrameVars(data){
    //var for frames
    first_frame = $('.char2 img').attr('src');
    if(data != null){
      second_frame = data;
    }
  }

  function loopImg(array, gallery, bool){
    for (var i = 0; i < array.length; i++) {

      if(bool){
        var parts = array[i].split("/");
        var new_src = parts[0]+"/"+parts[1]+"/"+"frame2/"+parts[2];

        $img = "<img src='"+array[i]+"' data-frame='"+new_src+"'>";
      } else{
        $img = "<img src='"+array[i]+"'>";
      }
      $(gallery+" .scroll").append($img);
    }
  }
  function changeSprite(gallery, elmToChange){
    $(gallery+" img").click(function(){
      $this = $(this);
      $src = $this.attr('src');
      $data = $this.data('frame');
      if(gallery == ".escenario"){
        $('.card').css('background-image', 'url('+$src+')');
      } else{
        $(elmToChange+" img").attr('src', $src);
        setFrameVars($data);
      }

      $('.gallery').addClass('none');
    });
  }

  function pkmnAnimation(){
    setTimeout(function () {
      if(frame1){
        $('.char2 img').attr('src', first_frame);
        frame1 = false;
      } else{
        $('.char2 img').attr('src', second_frame);
        frame1 = true;
      }

      pkmnAnimation();
    }, 500);
  }

  loopImg($pkmn_list, '.gallery.pkmn', true);
  loopImg($trainer_list, '.gallery.entrenador', false);
  loopImg($route_list, '.gallery.escenario', false);

  changeSprite('.entrenador', '.char1');
  changeSprite('.pkmn', '.char2');
  changeSprite('.escenario', 'card');
  setFrameVars();
  pkmnAnimation();

});
