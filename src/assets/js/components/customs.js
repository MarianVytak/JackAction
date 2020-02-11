$(function () {

    'use strict';



    $('.section-2__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        focusOnSelect: true,
        fade: true,
        arrows: false,
        dots: true,
        appendDots: $('.section-2__slider_dots')
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

    $('.section-4__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        focusOnSelect: true,
        fade: false,
        arrows: true,
        dots: true,
        appendArrows: $('.section-4__slider_arrows'),
        appendDots: $('.section-4__slider_dots')
    });

    $('.section-5__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        focusOnSelect: true,
        fade: true,
        arrows: false,
        dots: true,
        appendDots: $('.section-5__slider_dots')
    });



});