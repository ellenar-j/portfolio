// Owl Carousel: Image Slide One
$(document).ready(function() {
    $('.slide-one').owlCarousel({
        loop: true,
        nav: true,
        items: 1,
        margin: 10,
        navText: ['<i class="fa-solid fa-arrow-left-long"></i>', '<i class="fa-solid fa-arrow-right-long"></i>'],
        // animateOut: 'fadeOut',
        mouseDrag: false,
        touchDrag: true,
        // autoplay: true,
        // autoplayTimeout: 6000,
        // autoplayHoverPause: true,
        // autoplaySpeed: 1000,
        // navSpeed: 1000,
        autoHeight:true,
        mouseDrag: true,
    })
});
// Owl Carousel: Image Slide Two
$(document).ready(function() {
    $('.slide-two').owlCarousel({
        loop: true,
        nav: true,
        items: 2,
        margin: 10,
        navText: ['<i class="fa-solid fa-arrow-left-long"></i>', '<i class="fa-solid fa-arrow-right-long"></i>'],
        mouseDrag: false,
        touchDrag: true,
        autoHeight: true,
    })
});