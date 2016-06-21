/*jslint browser: true, devel: true, white: true, evil: true, forin: true, newcap: true, plusplus: true, sloppy: true, vars: true*/
/*jslint browser: true, devel: true, white: true, bitwise: true, continue: true, debug: true, evil: true, forin: true, newcap: true, plusplus: true, unparam: true, sloppy: true, sub: true, vars: true*/
//alert('Hello!');

;$(function(){
    'use strict';
    
    function GoogleCallback(jQueryObj, data){
        console.log('data', data);
    }
    
    
    
    
    
    $('.form__button').on('click', function(){
        console.log($('#search-input').val());
        
        $.ajax({
            url: 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0?key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&q=' + $('#search-input').val() + '&callback=GoogleCallback&context=?',
            method: 'POST',
            dataType : 'jsonp'
        });
         
    });
    
    
    

});


