
$(document).ready(function() {
  $ ("#name").transition({skewX:'30deg'})
  .fadeIn({duration:2000, easing:"swing", queue:false})
  .transition({x:'70px', duration: 4000})
  ;
  $ ("#title").transition({skewX:'-30deg'})
  .fadeIn({duration:2000, easing:"swing", queue:false})
  .transition({x:'-80px', duration: 4000})
  ;
  $ ("#front").transition({skewX:'30deg'})
  .fadeIn({duration:2000, easing:"swing", queue:false})
  .transition({x:'70px', duration: 4000})
  ;
  $ ("#mid").transition({skewX:'-30deg'})
  .fadeIn({duration:2000, easing:"swing", queue:false})
  .transition({x:'-80px', duration: 4000})
  ;
  var canvas = document.querySelector('canvas'),
    ctx    = canvas.getContext('2d');

    ctx.lineWidth = 15;
    ctx.beginPath();
    ctx.arc(70,70, 60, 0, 2 * Math.PI, true);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(85,100);
    ctx.lineTo(100,85);
    ctx.lineTo(140,120);
    ctx.lineTo(120,140);
    ctx.fill();			

  $(".work a").hover(function() {
    $(this).find('.overlay').stop().fadeIn(500);
    }, function() { 
      $(this).find('.overlay').stop().fadeOut(500); 
  });	    
});