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

    //tabs
    (function () {

        $('.tab__li').on('click', function (e) {
            e.preventDefault;

            var $this=$(this),
                container=$this.closest('.tabs__container'),
                tabs=container.find('tab__li'),
                ndx=$this.index(),
                content=container.find('.tabContent__li'),
                activeContent=content.eq(ndx)
                ;

            if(!$this.hasClass('tab__li_active')){
                $this.addClass('tab__li_active')
                    .siblings()
                    .removeClass('tab__li_active');
            }

            activeContent.addClass('tabContent__li_active')
                .siblings()
                .removeClass('tabContent__li_active');



        })

    }());

    //слайдер

    (function () {
        var i=1;
        var flag=true;


            $('.arrow').on('click', function (e) {
                e.preventDefault;


            if(flag==true) {

                flag = false;

                var $this = $(this),
                    container = $this.siblings('.slider'),
                    slides = container.find('.slider__li'),
                    activeSlide = slides.filter('.slider__li_active');


                if ($this.hasClass('arrow__right')) {

                    if (i < slides.length) {

                        activeSlide.next().animate({'left': '0%'});
                        activeSlide.animate({'left': '100%'});
                        slides.css({'left': '-100%'});

                        activeSlide.next().addClass('slider__li_active')
                            .siblings().removeClass('slider__li_active');
                        i++;
                    }
                    else {
                        i = 0;
                        activeSlide.animate({'left': '100%'});
                        slides.first().animate({'left': '0%'});
                        slides.css({'left': '-100%'});

                        slides.first().addClass('slider__li_active')
                            .siblings().removeClass('slider__li_active');

                        i++;

                    }
                }
                else {
                    if (i > 1) {

                        activeSlide.prev().animate({'left': '0%'});
                        activeSlide.animate({'left': '-100%'});
                        slides.css({'left': '100%'});

                        activeSlide.prev().addClass('slider__li_active')
                            .siblings().removeClass('slider__li_active');
                        i--;
                    }
                    else {
                        i = slides.length;
                        activeSlide.animate({'left': '-100%'});
                        slides.last().animate({'left': '0%'});
                        slides.css({'left': '100%'});

                        slides.last().addClass('slider__li_active')
                            .siblings().removeClass('slider__li_active');


                    }
                }

                setTimeout(function(){flag=true;}, 500);

            }

            });

    }());

});
