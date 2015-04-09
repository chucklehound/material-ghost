$(document).ready(function() {
    var topOfNav = $("#main-head").offset().top;

    $(window).scroll(function() {
        var topOfWindow = $(window).scrollTop();
        if (topOfNav < topOfWindow-120) {
            $("#main-head").addClass("shorty");
        }
        else {
            $("#main-head").removeClass("shorty");
        }
    });
});
