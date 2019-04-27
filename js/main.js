(function ($) {
    "use strict";

    // SmoothScroll
    var scroll = new SmoothScroll('a[href*="#"]', {
      speed: 900,
      speedAsDuration: true
    });

    // stycky header
    $(window).on('scroll', function(){
      if($(window).scrollTop()){
        $('header').addClass('neel');
      }
      else
      {
        $('header').removeClass('neel');
      }
      
    })

    // offcanvas menu
    $(".menu-trigger img").on('click', function(){
      $(".offcanvas-menu").addClass("active");
      $(".offcanvas-menu-overlay").addClass("active");
    });

    $(".menu-close, .offcanvas-menu-overlay").on('click', function(){
      $(".offcanvas-menu").removeClass("active");
      $(".offcanvas-menu-overlay").removeClass("active");
    });

    // parallax JS
    var scene = document.getElementById('home-parallax');
    var parallaxInstance = new Parallax(scene);

    // typed JS
    var typed = new Typed(".type", {
      strings: [
        "Android Developer",
        "UI/UX Designer"
      ],
      typeSpeed: 70,
      backSpeed: 70,
      loop: true,
      cursorChar: '',
    });

    // hover 3d
    $(".about").hover3d({
      selector: ".about-img-shape",
      shine: false,
      sensitivity: 20,
    });
    //  

     // hover 3d
    $(".about").hover3d({
      selector: ".about-shape",
      shine: false,
      sensitivity: 30,
    });

    // hover 3d
    $(".skill-edu").hover3d({
      selector: ".skill-edu-shape",
      shine: false,
      sensitivity: 20,
    });

    // hover 3d
    $(".experience").hover3d({
      selector: ".experience-shape",
      shine: false,
      sensitivity: 30,
    });

    // hover 3d
    $(".contact").hover3d({
      selector: ".contact-shape-1",
      shine: false,
      sensitivity: 30,
    });

    // hover 3d
    $(".contact").hover3d({
      selector: ".contact-shape-2",
      shine: false,
      sensitivity: 30,
    });

    // hover 3d
    $(".blog").hover3d({
      selector: ".blog-shape",
      shine: false,
      sensitivity: 30,
    });
    
    // circle-progress-1
    $('#uiux-progress').circleProgress({
      value: 0.73,
      size: 200,
      fill: "#6928d9",
      thickness: 10,
      emptyFill: "#15154c",
      startAngle: -1.55,
    }).on('circle-animation-progress', function(event, progress) {
      $(this).find('.progress-percentage').html(Math.round(73 * progress) + '<i>%</i>');
    });

     // circle-progress-2
    $('#development-progress').circleProgress({
      value: 0.85,
      size: 200,
      fill: "#1573ff",
      thickness: 10,
      emptyFill: "#15154c",
      startAngle: -1.55,
    }).on('circle-animation-progress', function(event, progress) {
      $(this).find('.progress-percentage').html(Math.round(85 * progress) + '<i>%</i>');
    });

     // circle-progress-3
    $('#branding-progress').circleProgress({
      value: 0.48,
      size: 200,
      fill: "#16ffdb",
      thickness: 10,
      emptyFill: "#15154c",
      startAngle: -1.55,
    }).on('circle-animation-progress', function(event, progress) {
      $(this).find('.progress-percentage').html(Math.round(48 * progress) + '<i>%</i>');
    });

     // circle-progress-4
    $('#design-progress').circleProgress({
      value: 0.69,
      size: 200,
      fill: "#baff26",
      thickness: 10,
      emptyFill: "#15154c",
      startAngle: -1.55,
    }).on('circle-animation-progress', function(event, progress) {
      $(this).find('.progress-percentage').html(Math.round(69 * progress) + '<i>%</i>');
    });

    // Isotope-Filtering
    // init Isotope
    var $grid = $('.portfolio-grid').isotope({
      itemSelector: '.portfolio-item',
      percentPosition: true,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: 1
      }
    });
    // filter items on button click
    $('.portfolio-menu').on( 'click', 'li', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });

    // active JS
    $('.portfolio-menu li').on('click',function(){
      $('li').removeClass('active');
      $(this).addClass('active')
    });

    // Fancy-box
    $('[data-fancybox="gallery"]').fancybox({
      animationEffect: "zoom-in-out",
      transitionEffect: "slide",
     
    });

    // Owl-Carousel
    $('.sponsor').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

    // wow JS
    new WOW().init();


})(jQuery);	    