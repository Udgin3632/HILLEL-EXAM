$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    dotsEach: 4,
    responsive:{
        0:{
            items:1,
            dotsEach: 1,
        },
        500:{
            items:2,
            dotsEach: 2,
        },
        1000:{
            items:3,
            dotsEach: 3,
        },
        1200:{
            items:4
        }
    }
})