$(document).ready(function(){
    $('#review-slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: true
    });
});

// không hiểu sao lại mất đoạn js của header 
$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        var opacity = 0;
        if (scroll < 100) {
            opacity = scroll / 100;
            $("#b-page-header").css('background-color', 'rgba(75, 193, 210, ' + opacity + ')');
        } else {
            opacity = 1;
            $("#b-page-header").css('background-color', 'rgba(75, 193, 210, ' + opacity + ')')
        }
    })
});