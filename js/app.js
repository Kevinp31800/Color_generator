$(document).ready (function () {

	
  var red = 100;
  var green = 100; 
  var blue = 100;

  var Red = 100;
  var Green = 100;
  var Blue = 100;


  $('#r1').on("change mousemove",function(){
    red = $(this).val();
    $('#body').css({'background-color': 'rgb('+ red + ', ' +  green + ', ' + blue + ')'});
    console.log($('#r1').val(), $('#g1').val(), $('#b1').val());
  });
  $('#g1').on("change mousemove",function(){
    green = $(this).val();
    $('#body').css({'background-color': 'rgb('+ red + ', ' +  green + ', ' + blue + ')'});
    console.log($('#r1').val(), $('#g1').val(), $('#b1').val());
  });
  $('#b1').on("change mousemove",function(){
   blue = $(this).val();
   $('#body').css({'background-color': 'rgb('+ red + ', ' +  green + ', ' + blue + ')'});
   console.log($('#r1').val(), $('#g1').val(), $('#b1').val());
 });

  
  $('#r2').on("change mousemove",function(){
    Red = $(this).val();
    $('#body').css({'background': "linear-gradient(to right, rgb(" + Red + "," + Green + "," + Blue + "),rgb(" + red + "," + green + "," + blue + ")"}); 
    console.log($('#r2').val());
  })

  $('#g2').on("change mousemove",function(){
    Green = $(this).val();
    $('#body').css({'background': "linear-gradient(to right, rgb(" + Red + "," + Green + "," + Blue + "),rgb(" + red + "," + green + "," + blue + ")"}); 
    console.log($('#g2').val());
  })
  $('#b2').on("change mousemove",function(){
    Blue = $(this).val();
    $('#body').css({'background': "linear-gradient(to right, rgb(" + Red + "," + Green + "," + Blue + "),rgb(" + red + "," + green + "," + blue + ")"}); 
    console.log($('#r2').val()); 
    console.log($('#b2').val());
  })





});