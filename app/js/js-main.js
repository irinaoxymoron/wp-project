$(document).ready(function() {

    $("body").niceScroll({
        horizrailenabled : false,
        "verge" : "500"
    });

    $(".gallery").css("min-height", $(document).height()*0.2);

    $(".aside__button").click(function() {
        $(this).toggleClass("aside__button-active");
        $(".aside").toggleClass("aside-active");
    });

    $(".gallery img").lazyload({
        effect : "fadeIn",
        threshold : 10000
    }).parent().hover(function() {
        $(".gallery a").css("opacity", ".8");
        $(this).css("opacity", "1");
    }, function() {
        $(".gallery a").css("opacity", "1");
    });

    var wall = new freewall(".gallery");
    wall.reset({
        selector: "a",
        animate: true,
        cellW: 150,
        cellH: "auto",
        gutterX : 5,
        gutterY : 5,
        onResize: function() {
            wall.fitWidth();
        }
    });

    var images = wall.container.find("a");
    images.find("img").load(function() {
        wall.fitWidth();
    });

    $(".filter__label").click(function() {
        $(".filter__label").removeClass("active");
        var filter = $(this).addClass("active").data("filter");
        wall.filter(filter);
        setTimeout(function() {
            $(window).resize();
            wall.fitWidth();
        }, 400);
    });

    $(".gallery a").magnificPopup({
        type : 'image',
        gallery : {
            enabled : true
        },
        removalDelay: 400,
        mainClass: 'mfp-fade'
    }).click(function() {
        $("button.mfp-arrow").delay(1000).fadeIn();
    });

    //Цели для Яндекс.Метрики и Google Analytics
    $(".count_element").on("click", (function() {
        ga("send", "event", "goal", "goal");
        yaCounterXXXXXXXX.reachGoal("goal");
        return true;
    }));

    //SVG Fallback
    if(!Modernizr.svg) {
        $("img[src*='svg']").attr("src", function() {
            return $(this).attr("src").replace(".svg", ".png");
        });
    };

    //Аякс отправка форм
    //Документация: http://api.jquery.com/jquery.ajax/
    $("#callback").submit(function() {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function() {
            alert("Спасибо за заявку!");
            setTimeout(function() {

            }, 1000);
        });
        return false;
    });



});

$(window).load(function() {

    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");

});