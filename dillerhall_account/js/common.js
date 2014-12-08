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

    if ($('.js-select-single').length) {
        $('.js-select-single').each(function() {
            $(this).multiselect({
                multiple: false,
                selectedList: 1,
                show: ["fade", 200],
                hide: ["fade", 200],
                beforeclose : function() {
                    if ($(this).hasClass('js-select-border')) {
                        var select = $(this);
                        setDataBorderColor(select);
                    }
                }
            });
        });
    }

    var setDataBorderColor = function( el ) {
        var options = el.find('option'),
            wrapper = el.parents('.select'),
            checkedRadio = el.multiselect('widget').find(":radio:checked"),
            checkedIndex = checkedRadio.parents('li').index(),
            color = options.eq(checkedIndex).attr('data-border-color');

            if ( color !== undefined ) {
                wrapper.attr('data-border-color', color);
            } else {
                wrapper.attr('data-border-color', '');
            }
    };

    if ($('.js-select-border').length) {
        $('.js-select-border').each(function() {
            var color = $(this).find('option:selected').attr('data-border-color');
            $(this).parent('.select').attr('data-border-color', color);
        });
    }


    $('.js-menu').on("click",function(event) {
        $(this).toggleClass("is-active");
        event.stopPropagation();
    });
    $('.js-sort-link').on("click",function(event) {
        $(this).toggleClass("is-active");
        $(this).parent().find('input[type="checkbox"]').trigger("click");
        event.stopPropagation();
    });


    $('.account .link-more').on('click', function(event) {
        event.preventDefault();
        var text  = $(this).text(),
            text2 = $(this).data('text');

        $(this).siblings('.account__item-more').slideToggle();
        $(this).text(text2);
        $(this).data('text', text);
    });

    var fixedPanel = function() {
        var panel       = $('.js-panel'),
            panelTopPos = panel.offset().top,
            panelWidth  = panel.width(),
            panelHeight = panel.height();

        $(window).on('scroll', function() {
            if ( panelTopPos - $(window).scrollTop() <= 0 ) {
                panel.css({
                    position : 'fixed',
                    top      : '0',
                    zIndex   : '1000',
                    width    : panelWidth
                });
                $('body').css('margin-top', panelHeight);
            } else {
                panel.css({
                    position : '',
                    top      : '',
                    zIndex   : '',
                    width    : ''
                });
                $('body').css('margin-top', '');
            }
        });
    };

    if ( $('.js-panel').length ) {
        fixedPanel();
    }

    var fixedAccountInfo = function() {
        var el        = $('.js-account'),
            wrapper   = el.parent(),
            elWidth   = el.outerWidth(),
            elHeight  = el.outerHeight(),
            panel     = $('.js-panel'),
            panelHeight = panel.height();

        function windowHeight() {
            return $(window).height() - panel.height();
        }

        function elTopPos() {
            return $(window).scrollTop() - el.offset().top + panelHeight;
        }

        function elBottomPos() {
            var pos = 0;
            if (el.attr('position') == 'fixed') {
                pos =  $(window).scrollTop() + panelHeight + el.outerHeight();
            } else {
                pos =  $(window).scrollTop() - el.offset().top + el.outerHeight();
            }
            return pos;
        }

        function topPoint() {
            return wrapper.offset().top - panelHeight - $(window).scrollTop();
        }

        function bottomPoint() {
            return wrapper.offset().top + wrapper.outerHeight() - $(window).scrollTop();
        }

        console.log(wrapper.offset().top);

        if ( el.outerHeight() < windowHeight() ) {
            $(window).on('scroll', function() {

                console.log('sctollTop [' + $(window).scrollTop() + ']');
                console.log('el.top [' +  elTopPos() + ']');
                console.log('el.bottom [' +  elBottomPos() + ']');
                console.log('topPoint [' + topPoint() + ']');
                console.log('bottomPoint [' + bottomPoint() + ']');

                if ( elTopPos() >= topPoint() ) {
                    el.css({
                        position : 'fixed',
                        zIndex   : '10',
                        top      : panelHeight,
                        width    : elWidth
                    });
                }
                if ( elBottomPos() >= bottomPoint() ) {
                    el.css({
                        position : 'absolute',
                        top      : 'auto',
                        bottom   : '0'
                    });
                }
                if ( elTopPos() < topPoint() ) {
                     el.css({
                        position : '',
                        top      : '',
                        bottom   : '',
                        width    : ''
                    });
                }

            });
        }
    };

    if ( $('.js-account').length ) {
        fixedAccountInfo();
    }

    $('.js-add-field').on('click', function(event) {
        event.preventDefault();
        var inputBlock = $(this).parents('.b-input'),
            inputs = inputBlock.find('input'),
            inputType  = inputs.attr('type'),
            inputClass = inputs.attr('class');
        if (inputs.length <= 5) {
            $('<input />', {
                type : inputType,
                class: inputClass
            }).insertBefore($(this).parent());
        }
    });

});