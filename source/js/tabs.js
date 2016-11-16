var tabs= function () {

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

};