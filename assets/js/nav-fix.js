$(document).ready(function () {
    
    $('body').scrollspy({
      target: '#myNavbar',
      offset: 50
    });
    
    $(window).scroll(function () {
        if ($(document).scrollTop() > 100) {
            $("nav").addClass("scrolled");
        } else {
            $("nav").removeClass("scrolled");
        }
    });
});
