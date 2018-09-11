/*global $*/
$(document).ready(function(){
      
      $("#link1").on("click", function(){
        $.scrollTo("#slide2", 800);
    });
    
    $("#link2").click(function(){
        $.scrollTo("#slide3", 800);
    });
    
    $("#link3").click(function(){
        $.scrollTo("#slide4", 800);
    });  
    
    $("#scrollTop a").click(function(){
       $.scrollTo("#slide1", 800); 
    }); 
    
    $("#firstLine").delay(1300).fadeIn(400); 
    $("#secondLine").delay(2000).fadeIn(400);

});

   
    $(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 1200) {
    $('#scrollTop').fadeIn();
  } else {
    $('#scrollTop').fadeOut();
  }
    });


