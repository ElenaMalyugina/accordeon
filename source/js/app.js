//с джейквери
$(document).ready(function () {
    //acco
    (function () {
        $('.acco__section .content').hide();
        $('.acco__section_active .content').show();

        $('.header').on('click', function (e) {
            e.preventDefault();

        var $this=$(this),
            section=$this.closest('.acco__section'),
            content=section.find('.content'),
            contentPass=section.siblings().find('.content')
            ;

        if(!section.hasClass('acco__section_active')){

            content.slideDown();
            contentPass.slideUp();

            section.addClass('acco__section_active')
                .siblings()
                .removeClass('acco__section_active');

        }

        });
    }());
    //slideshow
    (function () {
        $('.slideshow').on('click', function(e){
            e.preventDefault;

            var $this=$(this),
                elem=$this.find('.slideshow__li'),
                elemActive=elem.filter('.slideshow__li_active'),
                elemNext=elemActive.next();

            if(!elemNext.length){
                elem.first().addClass('slideshow__li_active')
                    .siblings()
                    .removeClass('slideshow__li_active');
            }
            else{
                elemActive.removeClass('slideshow__li_active')
                    .next()
                    .addClass('slideshow__li_active');
            }
        });




    }());



});
