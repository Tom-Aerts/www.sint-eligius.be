;
(function($) {
    $.fn.konami = (function(styles, duration, easing, callback) {
        var $this = $(this),
            input = [],
            command = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
        input = command.slice(0);

        $(window).on("keyup", function(e) {
            var key = e.keyCode;

            if (key == input[0]) {
                input.shift();

                if (input.length == 0) {
                    window.location.href = "http://7cw-01.commercieelwebverkeer.be/LagereSchool/konami.html";
                }
            } else {
                input = command.slice(0);
            }
        });
    });
})(jQuery);
