var arrName = ['1', '2', '3', '4', '5'];
console.log('Array names: ', arrName);

var yourName = prompt('Enter your name: ', '');

console.log( arrName.indexOf(yourName) );


if ( arrName.indexOf(yourName) >= 0 ) {
    alert('Welcome ' + yourName + '!');
} else {
    alert('Wrong! Good buy ' + yourName + '!');
}


