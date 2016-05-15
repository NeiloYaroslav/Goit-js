/*jslint browser: true, devel: true, white: true, evil: true, forin: true, newcap: true, plusplus: true, sloppy: true, vars: true*/
/*jslint browser: true, devel: true, white: true, bitwise: true, continue: true, debug: true, evil: true, forin: true, newcap: true, plusplus: true, unparam: true, sloppy: true, sub: true, vars: true*/

function counter() {
    var count = 0;
    
    return function() {
        return count++;
    };
}

var second = counter();

var result = setInterval(second, 1000);

setInterval(console.log(second), 10);


console.log(setInterval(second, 100));











