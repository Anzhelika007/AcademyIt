$(function () {

    $('.header__slaider').slick({
        autoplay: true,
        autoplaySpeed: 500,
        infinite: true,
        dots: true,
        prevArrow: '<button class="header__slaider-btn header__slaider-btnprev"><img src="images/icon-top-slaider.svg"></button>',
        nextArrow: '<button class="header__slaider-btn header__slaider-btnnext"><img src="images/icon-bottom-slaider.svg"></button>',
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
