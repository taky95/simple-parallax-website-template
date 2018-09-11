/*global $*/
$(document).ready(function(){
     var myTransitionBoxApi = $('#myImageZone').transitionBox({"width" : 400});
     // a 400 pixels square zone
     myTransitionBoxApi.show('/img/company1.jpg');
     
     $(window).scroll(function() {
        if($(window).scrollTop() > 700) {
            myTransitionBoxApi.show('/img/company2.jpg');
            // $(window).off("scroll");
        }else{
            myTransitionBoxApi.show('/img/company1.jpg');
        }
    });
});


