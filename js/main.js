$(function () {

    $('.header__slaider').slick({
        autoplay: true,
        autoplaySpeed: 500,
        infinite: true,
        dots: true,
        prevArrow: '<button class="header__slaider-btn header__slaider-btnprev"><img src="images/icon-top-slaider.svg"></button>',
        nextArrow: '<button class="header__slaider-btn header__slaider-btnnext"><img src="images/icon-bottom-slaider.svg"></button>',
    });


    $('.brands__gallery').slick({
        autoplay: true,
        rows: 2,
        slidesToShow: 5,
        autoplaySpeed: 500,
        infinite: true,
        prevArrow: '<button class="brands__gallery-btn brands__gallery-btnprev"><img src="images/icon-brand-left.png"></button>',
        nextArrow: '<button class="brands__gallery-btn brands__gallery-btnnext"><img src="images/icon-brand-right.png"></button>',
    });




    $('.search__tabs-item').on('click', function (e) {
        e.preventDefault();

        $('.tab').removeClass('tab--active');
        $('.tabs-content').removeClass('tabs-content--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active')
    });


    $('.product-item__favorite').on('click', function () {
        $('.product-item__favorite').toggleClass('product-item__favorite--active')
    });

    $('.product-slider').slick({});


});
