$(document).ready(function() {

    $(document).on("click", function(){
        $(".js-menu").removeClass("is-active");
    });

    // add any block
    $("body").on("click",".js-add-btn",function(){
        var new_el = $(this).attr("data-hidden");
        var html = $("."+new_el).html();
        $(this).parent().before(html);
        return false;
    });


    $(".js-select-single").multiselect({
         multiple: false,
         //header: false,
         //noneSelectedText: "Select an Option",
         selectedList: 1,
         show: ["fade", 200],
         hide: ["fade", 200]
    });

    // $('.js-select-color').on('change', function(event) {
    //     var wrapper = $(this).parent(),
    //         option  = $(this).find('option:selected'),
    //         color   = $(this).find('option:selected').attr('data-border-color');
    //     wrapper.data('border-color', color);
    //     event.preventDefault();
    //     console.log(option);
    //     console.log(color);
    // });



    $('.js-menu').on("click",function(event) {
        $(this).toggleClass("is-active");
        event.stopPropagation()
    });
    $('.js-sort-link').on("click",function(event) {
        $(this).toggleClass("is-active");
        $(this).parent().find('input[type="checkbox"]').trigger("click");
        event.stopPropagation()
    });


    $('.account .link-more').on('click', function(event) {
        event.preventDefault();
        var text  = $(this).text(),
            text2 = $(this).data('text');

        $(this).siblings('.account__item-more').slideToggle();
        $(this).text(text2);
        $(this).data('text', text);
    });

    if ( $('.js-panel').length ) {
        function fixedPanel() {
            var panel       = $('.js-panel'),
                panelTopPos = panel.offset().top,
                panelWidth  = panel.width();
                panelHeight  = panel.height();

            $(window).on('scroll', function() {
                if ( panelTopPos - $(window).scrollTop() <= 0 ) {
                    panel.css({
                        position : 'fixed',
                        top      : '0',
                        zIndex   : '1000',
                        width    : panelWidth
                    });
                    $('body').css('margin-top', panelHeight)
                } else {
                    panel.css({
                        position : '',
                        top      : '',
                        zIndex   : '',
                        width    : ''
                    });
                    $('body').css('margin-top', '')
                };
            });
        };
        fixedPanel();
    };

    if ( $('.js-account').length ) {
        function fixedAccountInfo() {
            var el        = $('.js-account'),
                wrapper   = el.parent(),
                elTopPos  = el.offset().top,
                elWidth   = el.outerWidth();
                elHeight  = el.outerHeight(),
                posBottom = wrapper.offset().top + wrapper.height(),
                panelHeight = $('.js-panel').height();

            $(window).on('scroll', function() {

                if ( $(window).scrollTop() >= elTopPos - panelHeight && elHeight < wrapper.height() ) {
                    el.css({
                        position : 'fixed',
                        top      : panelHeight,
                        width    : elWidth
                    });

                    if ( posBottom <= el.offset().top + el.height() + panelHeight ) {
                        el.css({
                            position : 'absolute',
                            top      : 'auto',
                            bottom   : '0'
                        });
                    };

                } else {
                    el.css({
                        position : '',
                        top      : '',
                        bottom   : '',
                        width    : ''
                    });
                };
            });
        };
        fixedAccountInfo();
    };

    $('.js-add-field').on('click', function(event) {
        event.preventDefault();
        var inputBlock = $(this).parents('.b-input'),
            inputs = inputBlock.find('input');
            inputType  = inputs.attr('type');
            inputClass = inputs.attr('class');
            console.log(inputClass);
        if (inputs.length <= 5) {
            $('<input />', {
                type : inputType,
                class: inputClass
            }).insertBefore($(this).parent());
        };
    });

});