(function () {
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    $(window).ready(function () {
        $('.brain-2 .brain').addClass("animate").one(animationEnd, function () {
            $('.brain-3 .brain').addClass("animate");
            $('.brain-3 .brain:last').one(animationEnd, function () {
                $('.piggy .bar').addClass("animate");
            });
        });
        $("a.trigger").on("click", function () {
            $(this).toggleClass("active");
            $("nav ul").toggleClass("active");
        });
        $("section.info ul.about li").on("click", function () {
            var title = $(this).find("a").html(), text = $(this).find("span.text").text(), view = $(".view"), vtitle = view.find(".title > h1"), vtext = view.find(".text > p");
            vtitle.html(title);
            vtext.text(text);
            $(this).siblings(".active").removeClass("active");
            $(this).addClass("active");
            return false;
        });
        $("[data-href]").on("click", function () {
            window.location.href = $(this).data("href");
        });
        if ($("#carousel").length) {
            $("#carousel").slidingCarousel({
                shadow: false,
                squeeze: 124,
                animate: 250
            });
            $("#carousel .slide a").on("click", function () {
                $(".navigate-left").trigger("click");
                return false;
            });
        }
    });
})();
