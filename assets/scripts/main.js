var _this = this;
(function ($) {
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
    });
})(jQuery);
