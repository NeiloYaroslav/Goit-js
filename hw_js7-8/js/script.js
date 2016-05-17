/*jslint browser: true, devel: true, white: true, evil: true, forin: true, newcap: true, plusplus: true, sloppy: true, vars: true*/
/*jslint browser: true, devel: true, white: true, bitwise: true, continue: true, debug: true, evil: true, forin: true, newcap: true, plusplus: true, unparam: true, sloppy: true, sub: true, vars: true*/
//alert('Hello!');

;(function(){
    $(function(){
        var $menuLink = $('.tabs__menu-link');
        var $tabsItem = $('.tabs__item');

        $menuLink.on('click', function (e) {
            e.preventDefault();
            $('.tabs__menu-active').removeClass('tabs__menu-active');
            $(this).addClass('tabs__menu-active');
            
            var $tab = $(this).attr('href');
            $('.tabs__item-active').removeClass('tabs__item-active');
            $($tab).addClass('tabs__item-active');
            
            $($tab).fadeIn(400);
        });
    });
    
    //=======================
    //TOOLTIP
    //=======================
    $(function(){
        var $input = $('.tabs__input-text');
        var $tooltip = $('.tabs__input-tooltip');
        
        var $submit = $('.tabs__form-submit');
        
        $submit.on('click', function() {
            $tooltip.addClass('tabs__input-hover');
        })
            
        $input.hover(function() {
            $(this).siblings('.tabs__input-tooltip').addClass('tabs__input-hover')},
            function() {
                $('.tabs__input-hover').removeClass('tabs__input-hover');
        });
    });
})();


