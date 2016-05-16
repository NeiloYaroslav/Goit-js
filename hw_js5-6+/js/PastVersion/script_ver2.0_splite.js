/*jslint browser: true, devel: true, white: true, evil: true, forin: true, newcap: true, plusplus: true, sloppy: true, vars: true*/
/*jslint browser: true, devel: true, white: true, bitwise: true, continue: true, debug: true, evil: true, forin: true, newcap: true, plusplus: true, unparam: true, sloppy: true, sub: true, vars: true*/
//alert('Hello!');

//Create and add new HTML element
function createNewElement(elem, elemClass, selector, index) {
    var newElement = document.createElement(elem);
    newElement.classList.add(elemClass);
    var parentElement = document.querySelectorAll(selector)[index];
    parentElement.appendChild(newElement);
    return newElement;
}






//=======================================================
//TIMER
//=======================================================

var time = 0;
var running = 0;

function milisecondTime() {
    return time % 10 + '0';
}

function secondTime() {
    var second = Math.floor(time / 10 % 60);
    
    if (second < 10) {
        second = '0' + second;
    }
    
    return second;
}

function minuteTime() {
    var minute = Math.floor(time / 10 / 60 % 60);
    
    if (minute < 10) {
        minute = '0' + minute;
    }
    
    return minute;
}

function hourTime() {
    var hour = Math.floor(time / 10 / 60 / 60 % 24);
    
    if (hour < 10) {
        hour = '0' + hour;
    }
    
    return hour;
}

var objTimer = {};
objTimer.milisecond = milisecondTime();
objTimer.second = secondTime();
objTimer.minute = minuteTime();
objTimer.hour = hourTime();
console.log(objTimer);


var buttonStart = document.querySelector('.timer__start');
var buttonSplit = document.querySelector('.timer__split');
var buttonStop = document.querySelector('.timer__stop');

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
        split();
    }
}

function split() {
    var timerValue = createNewElement('li', 'timer__value', '.timer__list-value', 0);
    
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
        
    timerValue.innerHTML = hour + ':' + minute + ':' + second + ':' + milisecond + '0';
}

//Change value of button Pause/resume on Start, Reset on Stop
function reset() {
    running = 0;
    time = 0;
    document.querySelector('.timer__display').innerHTML = '00:00:00:00';
    buttonStart.setAttribute('value', 'Start');
    buttonStop.setAttribute('value', 'Stop');
    
    removeValue();
}

function removeValue() {
    var listValue = document.querySelector('.timer__list-value');
    var value = document.querySelectorAll('.timer__value');

    for (var i = 0; i < value.length; i++) {
        listValue.removeChild(value[i]);
    }
}


buttonStart.addEventListener('click', startPause);
buttonSplit.addEventListener('click', split);
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
            
            var timerDisplay =  document.querySelector('.timer__display');
            timerDisplay.innerHTML = hour + ':' + minute + ':' + second + ':' + milisecond + '0';
            
            timer();
            }
        }, 100);
}