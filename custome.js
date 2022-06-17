
$(function(){

    $('.circlechart1').circlechart();

});

$(function(){

    $('.circlechart2').circlechart();

});

$(function(){

    $('.circlechart3').circlechart();

});

$(function(){

    $('.circlechart4').circlechart();

});


$(document).ready(function() {
    $('body').materialScrollTop({
        revealElement: 'header',
        revealPosition: 'bottom',
        onScrollEnd: function() {
            console.log('Scrolling End');

        }
    });
});

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        dotsSpeed:Number,

    });
});


