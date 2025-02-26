/****************************** Go-Up ***********************************************************/
$(document).ready(function() {
    $('.myBtn').hide();

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.myBtn').show('fade');
        } else {
            $('.myBtn').hide('fade');
        }
    });

    $('.myBtn').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);

    });

});