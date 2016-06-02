/*jslint browser: true, devel: true, white: true, evil: true, forin: true, newcap: true, plusplus: true, sloppy: true, vars: true*/
/*jslint browser: true, devel: true, white: true, bitwise: true, continue: true, debug: true, evil: true, forin: true, newcap: true, plusplus: true, unparam: true, sloppy: true, sub: true, vars: true*/
//alert('Hello!');

;(function($){
    //Plugin for jQuery - Slider
    $.fn.slider = function(options) {
        
        var defaults = {
            //Class of previous arrow
            arrowPrev: '.slider__arrowPrev',
            //Class of next arrow
            arrowNext: '.slider__arrowNext',
            //Class li 
            slide: '.slider__item',
            //Border style
            borderStyle: 'double',
            //Class img
            img: '.slider__img'
        };
        
        var settings = $.extend(defaults, options);
        
        var $arrowPrev = $(defaults.arrowPrev);
        var $arrowNext = $(defaults.arrowNext);
        var $slide = $(defaults.slide);
        var $slideWidth = $slide.outerWidth();
        var $countSlide = $slide.length;
        var $maxWidth = $countSlide * $slideWidth;
        var $minWidth = $slideWidth;
        var $counter = 1;
        
        //Border style
        $(defaults.img).css({'border-style': defaults.borderStyle});
        
        //Event on click for button previous
        $arrowPrev.on('click', function(){
            if ($counter > 1) {
                $counter -= 1;
                
                $slide.animate({ left: '+=' + $slideWidth + 'px'}, 500);
            }
        });
        
        //Event on click for button next
        $arrowNext.on('click', function(){
            if ($counter < $countSlide) {
                $counter += 1;
                
                $slide.animate({ left: '-=' + $slideWidth + 'px'}, 500);
            } else {
                $counter = 1;
                $slide.animate({ left: '+=' + ($maxWidth - $slideWidth) + 'px'}, 500);
            };
        }); 

        return this;
    };
    
})(jQuery);