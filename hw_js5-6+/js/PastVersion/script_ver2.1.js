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


function CreateTimer(time) {
    this.hour = Math.floor(time / 10 / 60 / 60 % 24);
    this.minute = Math.floor(time / 10 / 60 % 60);
    this.second = Math.floor(time / 10 % 60);
    this.milisecond = time % 10 + '0';
    
    if (this.hour < 10) {
        this.hour = '0' + this.hour;
    }
    
    if (this.minute < 10) {
        this.minute = '0' + this.minute;
    }
    
    if (this.second < 10) {
        this.second = '0' + this.second;
    }
}

var timerDisplay = new CreateTimer(time);
console.log(timerDisplay);

var buttonStart = document.querySelector('.timer__start');
var buttonSplit = document.querySelector('.timer__split');
var buttonStop = document.querySelector('.timer__stop');

//Change value of button start on Pause, Pause on Resume, Stop on Reset
function startPause() {
    if(running === 0) {
        running = 1;
        displayTimer();
        buttonStart.setAttribute('value', 'Stop');
        buttonStop.setAttribute('value', 'Reset');
    } else {
        running = 0;
        buttonStart.setAttribute('value', 'Resume');
        split();
    }
}

var timerSplit = new CreateTimer(time);
console.log(timerSplit);

function split() {
    var timerValue = createNewElement('li', 'timer__value', '.timer__list-value', 0);
    function splitTimer() {
        setTimeout(function(){
            if(running === 1) {
                time++;
                var timerSplit = new CreateTimer(time);

                timerValue.innerHTML = timerSplit.hour + ':' + timerSplit.minute + ':' + timerSplit.second + ':' + timerSplit.milisecond;

                splitTimer();
            }
        }, 100);
    }
    
    console.log(timerValue);
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

function displayTimer() {
    setTimeout(function(){
        if(running === 1) {
            time++;
            var timerDisplay = new CreateTimer(time);
            
            var display =  document.querySelector('.timer__display');
            display.innerHTML = timerDisplay.hour + ':' + timerDisplay.minute + ':' + timerDisplay.second + ':' + timerDisplay.milisecond;
            
            displayTimer();
        }
    }, 100);
}













//function milisecondTime() {
//    return time % 10 + '0';
//}
//
//function secondTime() {
//    var second = Math.floor(time / 10 % 60);
//    
//    if (second < 10) {
//        second = '0' + second;
//    }
//    
//    return second;
//}
//
//function minuteTime() {
//    var minute = Math.floor(time / 10 / 60 % 60);
//    
//    if (minute < 10) {
//        minute = '0' + minute;
//    }
//    
//    return minute;
//}
//
//function hourTime() {
//    var hour = Math.floor(time / 10 / 60 / 60 % 24);
//    
//    if (hour < 10) {
//        hour = '0' + hour;
//    }
//    
//    return hour;
//}