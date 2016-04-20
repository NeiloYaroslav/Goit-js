'use strict';
//alert('Hello!');
var arrName = [],
Length,
yourName;

arrName.length = 5;

for (var i = 0, Length = arrName.length; i < Length; i++) {
    arrName[i] = prompt('Enter name: ', '');
};

console.log('Array names: ', arrName);

var yourName = prompt('Enter your name: ', '');

if ( arrName.indexOf(yourName) >= 0 ) {
    alert('Welcome ' + yourName + '!');
} else {
    alert('Wrong! Goodbye ' + yourName + '!');
}


//;(function(){
//var arrName = [],
//Length,
//yourName;
//
//arrName.length = 5;
//
//for (var i = 0, Length = arrName.length; i < Length; i++) {
//arrName[i] = prompt('Enter name: ', '');
//};
//
//console.log('Array names: ', arrName);
//
//yourName = prompt('Enter your name: ', '')
//
//if ( arrName.indexOf(yourName) >= 0 ) {
//alert('Welcome ' + yourName + '!');
//} else {
//alert('Wrong! Goodbye ' + yourName + '!');
//}
//})();