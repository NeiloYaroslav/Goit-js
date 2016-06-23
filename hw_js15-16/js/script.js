/*jslint browser: true, devel: true, white: true, evil: true, forin: true, newcap: true, plusplus: true, sloppy: true, vars: true*/
/*jslint browser: true, devel: true, white: true, bitwise: true, continue: true, debug: true, evil: true, forin: true, newcap: true, plusplus: true, unparam: true, sloppy: true, sub: true, vars: true*/
//alert('Hello!');

;$(function(){
    'use strict';
    
    $('.form__button').on('click', function(){
        
        if ($('.search__result').find('.img__item')){
            $('.img__item').remove();
        };
        
        $('.search__result').removeClass('display-none');
        
        var userQuery = $('#search-input').val();
        
        $.ajax({
            type: 'GET',
            url: 'https://pixabay.com/api/?key=2801682-d89aaae1dd844f2ee1fa3f425&q=' + userQuery + '&image_type=photo',
            success: function(result){
                for (var i = 0; i < result.hits.length; i++){
                    var $queryResult = $('<div class="img__item"><img class="img__img" src="'+ result.hits[i].previewURL +'" alt="'+ userQuery +'#'+ [i] +'"><a href="'+ result.hits[i].pageURL +'" class="img__link">Original image</a><p class="img__autor">Autor: '+ result.hits[i].user +'</p><p class="img__size">'+ result.hits[i].imageWidth +' x '+ result.hits[i].imageHeight +'px</p><p class="img__likes">Likes: '+ result.hits[i].likes +'</p></div>');
                    
                    $('.search__img').append($queryResult);
                };
            }
        });
    });
});