/*jslint browser: true, devel: true, white: true, evil: true, forin: true, newcap: true, plusplus: true, sloppy: true, vars: true*/
/*jslint browser: true, devel: true, white: true, bitwise: true, continue: true, debug: true, evil: true, forin: true, newcap: true, plusplus: true, unparam: true, sloppy: true, sub: true, vars: true*/
//alert('Hello!');

;$(function(){
    'use strict';
    
    
    $('.form__button').on('click', function(){
        
        var userQuery = $('#search-input').val();
        
        console.log(userQuery);
        
        $.ajax({
            url: 'http://search.yahooapis.com/WebSearchService/V1/webSearch?appid=YahooDemo&output=json&query=' + userQuery + '&callback=?',
            method: 'POST',
            dataType : 'jsonp',
            success: function (data) {
                console.log('data', data);
            },
            error: function(){
                console.log('error');
            }
        });
         
    });
    
    
    

});


