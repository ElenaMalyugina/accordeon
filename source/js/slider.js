var slider= function () {
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

};
