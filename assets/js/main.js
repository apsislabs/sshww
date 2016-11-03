(function($) {
    $(function() {
        $(window).on('scroll load', function () {
            if ($(document).scrollTop() > 100) {
                $(".nav--stick").addClass("nav--scrolled");
            } else {
                $(".nav--stick").removeClass("nav--scrolled");
            }
        });

        var $grid = $('.grid').imagesLoaded( function() {
            $grid.masonry({
                itemSelector: '.grid__item',
                columnWidth: '.grid__sizer',
                percentPosition: true
            });
        });

        $('[data-background]').each(function() {
            console.log($(this).data('background'));
            $(this).backstretch($(this).data('background'));
        });
    });
})(jQuery);
