var slideshow=function () {

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

};