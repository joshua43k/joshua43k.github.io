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
