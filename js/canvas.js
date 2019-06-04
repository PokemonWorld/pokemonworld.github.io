$(function(){

  const {body} = document;

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const targetImg = document.createElement('img');

  $('button').click(function(){
    createImg();
  });
  function createImg(){
    var cw = $('.card').get(0).clientWidth;
    var ch = $('.card').get(0).clientHeight;
    canvas.width = cw;
    canvas.height = ch;
    var content = $('.card').get(0).innerHTML;

    const tempImg = document.createElement('img');
    tempImg.addEventListener('load', onTempImageLoad);
    var data = "data:image/svg+xml," + encodeURIComponent("<svg xmlns='http://www.w3.org/2000/svg' width='"+cw+"' height='"+ch+"'><foreignObject width='100%' height='100%'><div xmlns='http://www.w3.org/1999/xhtml'>"+content+"</div></foreignObject></svg>");
    tempImg.src = data;
    body.appendChild(targetImg);
  }

  function onTempImageLoad(e){
    ctx.drawImage(e.target, 0, 0);
    targetImg.src = canvas.toDataURL();
  }

});
