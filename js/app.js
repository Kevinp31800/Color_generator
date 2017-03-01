$(document).ready (function () {

	
    var red; 
    var green; 
    var blue;


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





});