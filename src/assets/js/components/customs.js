$(function () {

    'use strict';



    $('.slider__container').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        focusOnSelect: true,
        fade: true,
        arrows: false,
        dots: true,
        appendDots: $('.slider__dots')
    });

    $('.section-3__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        focusOnSelect: true,
        fade: false,
        arrows: true,
        dots: false
    });



});