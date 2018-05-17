$(function() {
           $('a[href*=#]:not([href=#])').click(function() {
                   if( $(this).attr("href")=="#carousel-example-generic" || $(this).attr("href")=="#appetizer" || $(this).attr("href")=="#lunch" || $(this).attr("href")=="#dinner" || $(this).attr("href")=="#dessert") return;//These are the exceptions
                   if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                           var target = $(this.hash);
                           target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                           if (target.length) {
                                   $('html,body').animate({
                                           scrollTop: target.offset().top
                                   }, 1000);
                                   return false;
                           }
                   }
           });
       });
function goneFunction() {
    var element = document.getElementById("wellcome");
    element.classList.toggle("gone-wellcome");
}


function hiBeth() {
  alert("Thank you for submitting a message but do to me living on the moon i will not be receiving it for several days")
}
