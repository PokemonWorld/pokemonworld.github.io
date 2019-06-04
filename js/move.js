// $(function(){
//   const {body} = document;
//   const stage = document.getElementById('stage');
//   const canvas = document.createElement('canvas');
//   const ctx = canvas.getContext('2d');
//   canvas.width = canvas.height = 100;
//
//   const tempImg = document.createElement('img');
//   tempImg.addEventListener('load', onTempImageLoad);
//   tempImg.src = 'data:image/svg+xml,' + encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'><foreignObject width='100%' height='100%'><div xmlns='http://www.w3.org/1999/xhtml'>hola</div></foreignObject></svg>");
//
//   const targetImg = document.createElement('img');
//   body.appendChild(targetImg);
//
//   function onTempImageLoad(e){
//     ctx.drawImage(e.target, 0, 0)
//     targetImg.src = canvas.toDataURL();
//   }
// })



$(function(){

  var coordX = 0, coordY = 0;
  var keyUp = 38,
  keyDown = 40,
  keyLeft = 37,
  keyRight = 39;
  var valueToMove = 1;
  var stage_width = $('.stage').width();
  var stage_height = $('.stage').height();
  var is_moving = false;

  console.log(stage_width);

  $(document).keydown(function(e) {
    var key = e.keyCode ? e.keyCode : e.which;

    if (key == keyRight) {
      coordX+=valueToMove;
    }
    else if (key == keyLeft) {
      coordX-=valueToMove;
    }
    else if (key == keyUp) {
      coordY-=valueToMove;
    }
    else if (key == keyDown) {
      coordY+=valueToMove;
    }
    move();
    //changeSprite('#char1', 'char2', 500);
  });


  function move(){
    is_moving = true;

    $('.char1').css('transform', 'translate('+coordX+'px, '+coordY+'px)');
    $('.char2').css('transform', 'translate('+coordX+'px, '+coordY+'px)');
    $('#x').html('X: '+coordX);
    $('#y').html('Y: '+coordY);
    //is_moving = false;
  }
  function changeSprite(target, sprite_class, time){
    $(target).addClass(sprite_class);
    if(!is_moving){
      setTimeout(function () {
        $(target).removeClass(sprite_class);
      }, time);
    }
  }

});
