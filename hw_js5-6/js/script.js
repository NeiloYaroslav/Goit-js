/*jslint browser: true, devel: true, white: true, evil: true, forin: true, newcap: true, plusplus: true, sloppy: true, vars: true*/
/*jslint browser: true, devel: true, white: true, bitwise: true, continue: true, debug: true, evil: true, forin: true, newcap: true, plusplus: true, unparam: true, sloppy: true, sub: true, vars: true*/
//alert('Hello!');

//=======================================================
//TIMER
//=======================================================

var time = 0;
var running = 0;

var buttonStart = document.querySelector('.timer__start');
var buttonStop = document.querySelector('.timer__stop');

console.log(buttonStart);
console.log(buttonStop);

//Change value of button start on Pause, Pause on Resume, Stop on Reset
function startPause() {

    if(running === 0) {
        running = 1;
        timer();
        buttonStart.setAttribute('value', 'Pause');
        buttonStop.setAttribute('value', 'Reset');
    } else {
        running = 0;
        buttonStart.setAttribute('value', 'Resume');
    }
}

//Change value of button Pause/resume on Start, Reset on Stop
function reset() {
    running = 0;
    time = 0;
    document.querySelector('.timer__display').innerHTML = '00:00:00:00';
    buttonStart.setAttribute('value', 'Start');
    buttonStop.setAttribute('value', 'Stop');
}

buttonStart.addEventListener('click', startPause);
buttonStop.addEventListener('click', reset);

function timer() {
    setTimeout(function(){
        if(running === 1) {
            time++;
            var milisecond = time % 10;
            var second = Math.floor(time / 10 % 60);
            var minute = Math.floor(time / 10 / 60 % 60);
            var hour = Math.floor(time / 10 / 60 / 60 % 24);
            
        
            if (second < 10) {
                second = '0' + second;
            }
            if (minute < 10) {
                minute = '0' + minute;
            }
            if (hour < 10) {
                hour = '0' + hour;
            }
            
            document.querySelector('.timer__display').innerHTML = hour + ':' + minute + ':' + second + ':' + milisecond + '0';
            
            timer();
            }
        }, 1);
}