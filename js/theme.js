(function ($) {


        if ($('.slider-one__carousel').length) {
            var slideOneWrap = $('.slider-one');
            var slideOneCarousel = $('.slider-one__carousel').owlCarousel({
                loop: true,
                items: 1,
                margin: 0,
                dots: true,
                nav: false,
                animateOut: 'slideOutDown',
                animateIn: 'fadeIn',
                active: true,
                smartSpeed: 1000,
                autoplay: 7000
            });
            slideOneWrap.find('.slide-one__left-btn').on('click', function (e) {
                slideOneCarousel.trigger('next.owl.carousel');
                e.preventDefault();
            });
            slideOneWrap.find('.slide-one__right-btn').on('click', function (e) {
                slideOneCarousel.trigger('prev.owl.carousel');
                e.preventDefault();
            });
        }

        // if ($('.slider-two__carousel').length) {
        //     var slideTwoWrap = $('.slider-two');
        //     var slideTwoCarousel = $('.slider-two__carousel').owlCarousel({
        //         loop: true,
        //         items: 1,
        //         margin: 0,
        //         dots: true,
        //         nav: false,
        //         animateOut: 'slideOutDown',
        //         animateIn: 'fadeIn',
        //         active: true,
        //         smartSpeed: 1000,
        //         autoplay: 7000
        //     });
        //     slideTwoWrap.find('.slide-two__left-btn').on('click', function (e) {
        //         slideTwoCarousel.trigger('next.owl.carousel');
        //         e.preventDefault();
        //     });
        //     slideTwoWrap.find('.slide-two__right-btn').on('click', function (e) {
        //         slideTwoCarousel.trigger('prev.owl.carousel');
        //         e.preventDefault();
        //     });
        // }
      
      
        if ($('.testimonials-one__carousel').length) {
            if ($('.testimonials-one__carousel').data('carousel-margin') !== undefined) {
                var testicarouselMargin = $('.testimonials-one__carousel').data('carousel-margin');
            } else {
                var testicarouselMargin = 80;
            }
            var testiOneCarousel = $('.testimonials-one__carousel').owlCarousel({
                loop: true,
                margin: testicarouselMargin,
                nav: true,
                navText: [
                    '<span class="testimonials-one__nav-left"><span class="testimonials-one__nav-text">Prev</span><i class="indext-icon-left"></i></span>',
                    '<span class="testimonials-one__nav-right"><span class="testimonials-one__nav-text">Next</span><i class="indext-icon-left"></i></span>',
                ],
                dots: false,
                autoWidth: false,
                autoplay: true,
                smartSpeed: 700,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    991: {
                        items: 1
                    },
                    1000: {
                        items: 1
                    },
                    1200: {
                        items: 1
                    }
                }
            });

            $('.testimonials-one__navbtn-left').on('click', function () {
                testiOneCarousel.trigger('next.owl.carousel');
                return false;
            });
            $('.testimonials-one__navbtn-right').on('click', function () {
                testiOneCarousel.trigger('prev.owl.carousel');
                return false;
            });

        }


          // jQuery counterUp (used in Facts section)
              $('[data-toggle="counter-up"]').counterUp({
                delay: 10,
                time: 1000
              });


              
   // Clients carousel (uses the Owl Carousel library)
  $(".clients-carousel").owlCarousel({
    autoplay: true,
    nav: false,
    dots: true,
    loop: true,
    navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    responsive: { 0: { items: 2 }, 768: { items: 3 }, 900: { items: 6 }
    }
  });

   // Clients carousel (uses the Owl Carousel library)
  $(".product-carousel").owlCarousel({
    autoplay: true,
    nav: false,
    dots: true,
    loop: true,
    navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    responsive: { 0: { items: 1 }, 768: { items: 2 }, 900: { items: 3 }
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });


})(jQuery);