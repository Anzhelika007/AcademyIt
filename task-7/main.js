$(document).ready(function () {
    $('.menu-btn').click(function (event) {
        $('.menu-btn, .menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    /*$('.hello').hide(function () {
        $('h2').show();
    }, 5000);
});*/
});