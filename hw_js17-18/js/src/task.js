/*jslint browser: true, devel: true, white: true, evil: true, forin: true, newcap: true, plusplus: true, sloppy: true, vars: true*/
/*jslint browser: true, devel: true, white: true, bitwise: true, continue: true, debug: true, evil: true, forin: true, newcap: true, plusplus: true, unparam: true, sloppy: true, sub: true, vars: true*/
//alert('Hello!');

;$(function(){
    'use strict';

    //====TASK====
    
    $('#task__show').on('click', function(){
        $('.header__task').find('.display-none').removeClass('display-none');
        
    });
    
    $('#task__hide').on('click', function(){
        $('.task__list').addClass('display-none');
        $('#task__hide').addClass('display-none');
    });
    
    
   

});


