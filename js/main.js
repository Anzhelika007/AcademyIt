$(function () {

    $('.header__slaider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        dots: true,
        prevArrow: '<button class="header__slaider-btn header__slaider-btnprev"><img src="images/icon-top-slaider.svg"></button>',
        nextArrow: '<button class="header__slaider-btn header__slaider-btnnext"><img src="images/icon-bottom-slaider.svg"></button>',
    });


    $('.brands__gallery').slick({
        autoplay: true,
        rows: 2,
        slidesToShow: 5,
        autoplaySpeed: 1000,
        infinite: true,
        prevArrow: '<button class="brands__gallery-btn brands__gallery-btnprev"><img src="images/icon-brand-left.png"></button>',
        nextArrow: '<button class="brands__gallery-btn brands__gallery-btnnext"><img src="images/icon-brand-right.png"></button>',
    });

    $('.tab').on('click', function (e) {
        e.preventDefault();

        $('.tab').removeClass('tab--active');
        $('.tab__item').removeClass('tab__item--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tab__item--active');
    });

    $('.reviers__slider').slick({
        autoplaySpeed: 1000,
        slidesToShow: 3,
        infinite: true,
        dots: false,
        centerMode: true,
        viriableWiddth: true,
        adaptiveHeight: true,
        rows: 1,
        prevArrow: '<button class="reviers__slider-btn reviers__slider-btnprev"><img src="images/icon-brand-left.png"></button>',
        nextArrow: '<button class="reviers__slider-btn reviers__slider-btnnext"><img src="images/icon-brand-right.png"></button>',
    });


});
