function example() {
    "use strict";
    return true;
}
////alert('Hello!');
var arrName = [];

arrName.length = 5;

for (var i = 0; i < 5; i++) {
    arrName[i] = prompt('Enter name: ', '');
    console.log('Array names: ', arrName);
};

console.log('Array names: ', arrName);

var yourName = prompt('Enter your name: ', '');
console.log( arrName.indexOf(yourName) );

if ( arrName.indexOf(yourName) >= 0 ) {
    alert('Welcome ' + yourName + '!');
} else {
    alert('Wrong! Goodbye ' + yourName + '!');
}