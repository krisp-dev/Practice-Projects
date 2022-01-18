$(document).ready(function () {
   /*========== NAVBAR SHRINK ==========*/
   $(window).on("scroll", function () {
      if ($(this).scrollTop() > 100) {
         $(".navbar").addClass("navbar-shrink");
      } else {
         $(".navbar").removeClass("navbar-shrink");
      }
   });
   /*========== FEATURES CAROUSEL ==========*/
   $(".features-carousel").owlCarousel({
      loop: true,
      margin: 0,
      responsiveClass: true,
      responsive: {
         0: {
            items: 1,
         },
         600: {
            items: 2,
         },
         1000: {
            items: 3,
         },
      },
   });
});
