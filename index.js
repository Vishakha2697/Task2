$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
  $("#done").css("background-color","#81d4fa");

 $('#paid_rb').click(function() {
  if($('#paid_rb').is(':checked')){
      $(".btn").removeAttr('disabled');
      $("#paid_box").css("background-color","rgba(144, 199, 221, 0.301)");
      $("#paid_box").css("border","2px solid rgb(172, 199, 240)");
        $("#free_box").css("border","2px solid #cfd8dc");
        $("#free_box").css("background-color","white");
  }
 
     });
  
  
    $('#free_rb').click(function() {
  if($('#free_rb').is(':checked')){
      $(".btn").removeAttr('disabled');
      
    $("#free_box").css("background-color","rgba(144, 199, 221, 0.301)");
     $("#free_box").css("border","2px solid rgb(172, 199, 240)");
      $("#paid_box").css("background-color","white");
      $("#paid_box").css("border","2px solid #cfd8dc");
  }
 
     });
  
  $('#multiple_rb').click(function() {
  if($('#multiple_rb').is(':checked')){
     
    $("#multiple_box").css("background-color","rgba(144, 199, 221, 0.301)");
     $("#multiple_box").css("border","2px solid rgb(172, 199, 240)");
     $("#single_box").css("background-color","white");
       $("#single_box").css("border","2px solid #cfd8dc");
  }
 
     });
  
  
  $('#single_rb').click(function() {
  if($('#single_rb').is(':checked')){
     
    $("#single_box").css("background-color","rgba(144, 199, 221, 0.301)");
     $("#single_box").css("border","2px solid rgb(172, 199, 240)");
     $("#multiple_box").css("background-color","white");
       $("#multiple_box").css("border","2px solid #cfd8dc");
  }
  
    });
});