"use strict";
//alert('Hello!');
function pow(x, n) {
    x = +prompt('Введите число: ', '');
    n = +prompt('Введите степень: ', '');
    var result = x;
    for (var i = 1; i < n; i++) {
        result *= x;
    }
        return result;
}

console.log('Result: ', pow());
