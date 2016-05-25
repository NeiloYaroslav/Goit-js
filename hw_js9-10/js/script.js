/*jslint browser: true, devel: true, white: true, evil: true, forin: true, newcap: true, plusplus: true, sloppy: true, vars: true*/
/*jslint browser: true, devel: true, white: true, bitwise: true, continue: true, debug: true, evil: true, forin: true, newcap: true, plusplus: true, unparam: true, sloppy: true, sub: true, vars: true*/
//alert('Hello!');

//Drop-dowm menu
;(function(){
    
    var $item = $('.menu__item');
    
    $('.menu__link').on('click', function(e) {
        e.preventDefault();
    });
        
    $item.hover(function(){
        var $submenu = $(this).find('.menu__submenu');
        $submenu.show();
        $item.animate({color: '#999'}, 1000)},
    function () {
        var $submenu = $(this).find('.menu__submenu');
        $submenu.hide();
    });
    
    
})();


//Carusel
;(function(){
    
    var $leftArrow = $('.slider__leftArrow');
    var $rigthArrow = $('.slider__rightArrow');
    var $sliderImage = $('.slider__item');
    var $imageWidth = $('.slider__item').outerWidth();
    
    $leftArrow.on('click', function(){
        $sliderImage.animate({left: '+=' + $imageWidth + 'px'}, 1000);
    });
    
    $rigthArrow.on('click', function(){
        $sliderImage.animate({left: '-=' + $imageWidth + 'px'}, 1000);
    });
    
})();

//Select

;(function(){
    $(document).ready(function(){
	   $("select").selecter({
           customClass: 'select__jquery'
       });
    });
    
    
})();


//Checkbox

;(function(){
    $(document).ready(function(){
        $(".checkbox__box").labelauty({
            // Development Mode
            // This will activate console debug messages
            development: false,
            // Trigger Class
            // This class will be used to apply styles
            class: "labelauty",
            // Use text label ?
            // If false, then only an icon represents the input
            label: true,
            // Separator between labels' messages
            // If you use this separator for anything, choose a new one
            separator: "|",
            // Default Checked Message
            // This message will be visible when input is checked
            checked_label: "Checked",
            // Default UnChecked Message
            // This message will be visible when input is unchecked
            unchecked_label: "Unchecked",
            // Minimum Label Width
            // This value will be used to apply a minimum width to the text labels
            minimum_width: false,
            // Use the greatest width between two text labels ?
            // If this has a true value, then label width will be the greatest between labels
            same_width: true
        });
	});   
})();

//Slider
;(function(){
    $(document).ready(function(){
        $('.slider__list').hiSlider({
          // start index
          startSlide: 0,
          // item selector
          item: '.slider__item',
          // fullscreen mode
          isFullScreen: false,
          // flexible layout
          isFlexible: false,
          // touch events support
          isSupportTouch: '__proto__' in {},
          // enable pagination
          isShowPage: true,
          // enable title bar
          isShowTitle: true,
          // title attribute
          titleAttr: 'data-title',
          // enable navigation
          isShowControls: true,
          // autoplay
          isAuto: true,
          // autoplay interval
          intervalTime: 5000,
          // animation speed
          affectTime: 300,
          // fade || move
          mode: 'move',
          // left || top
          direction: 'left',
          // callbacks
          onSwipeStart: $.noop,
          onSwipeMove: $.noop,
          minSwipeLength: 30,
          onSwipeCancel: $.noop,
          onSwipeEnd: $.noop,
          onSwipeLeft: $.noop,
          onSwipeRight: $.noop,
          onSwipeTop: $.noop,
          onSwipeBottom: $.noop,
          onInited:  $.noop,
          onMoveBefore: $.noop,
          onMoveAfter: $.noop,
          onSelected: $.noop

        });
 
        
    });    
})();






