---
# Only the main JS file needs front matter
---

Turbolinks.start();

(function($) {
    $(function() {
        $(window).on('scroll load', function () {
            if ($(document).scrollTop() > 100) {
                $(".nav--stick").addClass("nav--scrolled");
            } else {
                $(".nav--stick").removeClass("nav--scrolled");
            }
        });
    });
})(jQuery);
