var accordeon=function () {
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
};