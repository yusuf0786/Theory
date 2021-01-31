$(".nav-buttons .open-nav").click(function(){

    $("ul").animate({

        opacity: 1,
    });
    $(".nav-buttons .close-nav").toggle();
    $(".nav-buttons .open-nav").toggle();
});

$(".nav-buttons .close-nav").click(function(){

    $("ul").animate({

        opacity: 0,
    });

    $(".nav-buttons .open-nav").toggle();
    $(".nav-buttons .close-nav").toggle();
});