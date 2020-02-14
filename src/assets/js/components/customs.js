$(function () {

    'use strict';



    // Hamburger
    const hamburger = $('.hamburger');
    const menu = $('.header__navigation');
    hamburger.on('click', function(){
        hamburger.toggleClass('hamburger-active');
        menu.slideToggle();
    });

    // Плавние якоря.
    $('.header__navigation_item_link').on('click', function(e){
        e.preventDefault();
        let navScroll = $(this).attr('href'),
            navScrollBlock = $(navScroll).offset().top;
        $('html, body').animate({
            scrollTop: navScrollBlock
        }, 500);
    });

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
        dots: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
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
        appendDots: $('.section-4__slider_dots'),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
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