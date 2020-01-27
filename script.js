'use strict';

$(document).ready(function (){
    $('.next-photo').on('click', function(){
        let currentImg = $('.active');
        let nextImg = currentImg.next();

        if (nextImg.length) {
            currentImg.removeClass('active').css('z-index', -10);
            nextImg.addClass('active').css('z-index', 10);
        }
    });

    $('.prev-photo').on('click', function(){
        let currentImg = $('.active');
        let prevImg = currentImg.prev();

        if (prevImg.length) {
            currentImg.removeClass('active').css('z-index', -10);
            prevImg.addClass('active').css('z-index', 10);
        }
    });

});




/*
    $(function() {
    
    let width = 720;
    let animationSpeed = 1000;
    let pause = 4000;
    let currentSlide = 1;
    let $slideshow = $('.slideshow');
    let $slideContainer = $slideshow.find('.slides');
    let $slides = $slideContainer.find('.slide');
    
    
    setInterval (function () {
        $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function(){
            currentSlide++; 
            if (currentSlide === $slides.length) {
                currentSlide  = 1;
                $slideContainer.css('margin-left', 0);
            }
        });
    }, pause);

}); 
/*/