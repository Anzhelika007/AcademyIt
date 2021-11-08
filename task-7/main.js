$(document).ready(function () {
    $('.menu-btn').click(function (event) {
        $('.menu-btn, .menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});