/*jslint browser: true, devel: true, white: true, evil: true, forin: true, newcap: true, plusplus: true, sloppy: true, vars: true*/
/*jslint browser: true, devel: true, white: true, bitwise: true, continue: true, debug: true, evil: true, forin: true, newcap: true, plusplus: true, unparam: true, sloppy: true, sub: true, vars: true*/
//alert('Hello!');

//Create attribute with new HTML element
function createAttribute(element, typeAttribute, valueAttribute) {
    return element.setAttribute(typeAttribute, valueAttribute);
}

//Create and add new HTML element
function createNewElement(elem, elemClass, selector, index) {
    var newElement = document.createElement(elem);
    newElement.classList.add(elemClass);
    var parentElement = document.querySelectorAll(selector)[index];
    parentElement.appendChild(newElement);
    return newElement;
}

//Create and add new HTML element before nextSibling
function createNewElementBefore(elem, elemClass, selector, index, nextSibling) {
    var newElement = document.createElement(elem);
    newElement.classList.add(elemClass);
    var parentElement = document.querySelectorAll(selector);
    parentElement[index].insertBefore(newElement, nextSibling);
    return newElement;
}

//Create and add style_js.css 
function createCssJs() {
    var cssJs = document.createElement('link');
    cssJs.setAttribute('type', 'text/css');
    cssJs.setAttribute('rel', 'stylesheet');
    cssJs.setAttribute('href', 'css/style_js.css');

    var parentHead = document.getElementsByTagName('head');
    parentHead[0].appendChild(cssJs);
    
    return cssJs;
}

//Create and add DOM element - div.wrapper
function createWrapper() {
    var wrapper = createNewElement('div', 'wrapper', 'body', '0'); 
    
    return wrapper;
}

//Create and add DOM element - div.timer
function createTimer() {
    var timerBlock = createNewElement('div', 'timer', '.wrapper', '0'); 
    
    return timerBlock;
}

//Create and add DOM element - p.timer__display
function createTimerDisplay() {
    var timerDisplay = createNewElement('p', 'timer__display', '.timer', '0');
    
    timerDisplay.innerHTML = '00:00:00:000';
    
    return timerDisplay;
}

////Create and add DOM element - span.timer__time
//function createHour() {
//    var hour = createNewElement('span', 'timer__time', '.timer__display', '0');
//    
//    hour.innerHTML = '00';
//    
//    return hour;
//}
//
////Create and add DOM element - span.timer__time
//function createMinute() {
//    var minute = createNewElement('span', 'timer__time', '.timer__display', '0'); 
//    minute.classList.add('timer__time-middle'); //Create additional class for minutes
//    
//    minute.innerHTML = '00';
//    
//    return minute;
//}
//
////Create and add DOM element - span.timer__time
//function createSecond() {
//    var second = createNewElement('span', 'timer__time', '.timer__display', '0');
//    second.classList.add('timer__time-middle');
//    
//    second.innerHTML = '00';
//    
//    return second;
//}
//
////Create and add DOM element - span.timer__time
//function createMiliSecond() {
//    var miliSecond = createNewElement('span', 'timer__time', '.timer__display', '0');
//    miliSecond.classList.add('timer__time-middle');
//    
//    miliSecond.innerHTML = '000';
//    
//    return miliSecond;
//}

function createSubmit(value) {
    var submit = createNewElement('input', 'timer__button', '.timer', '0');
    createAttribute(submit, 'type', 'button');
    createAttribute(submit, 'value', value);
    
    return submit;
}

var objTimer = {
    css: createCssJs(), //Create css file
    wrapper: createWrapper(), //Create div.wrapper
    timer: createTimer(), //Create div.timer
    timerDisplay: createTimerDisplay(), //Create paragraph for timer display
//    hour: createHour(), //Create DOM element span for hour
//    minute: createMinute(), //Create DOM element span for minute
//    second: createSecond(), //Create DOM element span for second
//    miliSecond: createMiliSecond(), //Create DOM element span for miliSecond 
    buttonStart: createSubmit('Start'), //Create button START
    buttonStop: createSubmit('Stop') //Create button STOP
};

console.log(objTimer);

//=======================================================
//TIMER
//=======================================================

var time = 0;
var running = 0;

function startPause() {

    if(running === 0) {
        running = 1;
        objTimer.buttonStart = createSubmit('Pause');
    } else {
        running = 0;
        objTimer.buttonStart = createSubmit('Resume');
    }
}

objTimer.buttonStart.addEventListener('click', startPause);







































//function counter() {
//    var count = 0;
//    
//    return function() {
//        return count++;
//    };
//}
//
//var secondCounter = counter();
//
//
//var secondId = setInterval(secondCounter(), 500);
//
//
//var objTimerDisplay = {};
//
//
//objTimerDisplay.second = secondId;
//
//console.log(objTimerDisplay);










//var startMiliSec = 0;
//var startSec = 0;
//var startMinute = 0;
//var startHour = 0;
//
//function timerMiliSecond() {
//    if (objTimer.miliSecond < 100) {
//        objTimer.miliSecond.innerHTML = '0' + startMiliSec;
//    } else if (objTimer.miliSecond < 10) {
//        objTimer.miliSecond.innerHTML = '00' + startMiliSec;
//    } else {
//        objTimer.miliSecond.innerHTML = startMiliSec;
//    }
//    
//    startMiliSec++;
//    setTimeout(timerMiliSecond, 1);  
//}
//
//
//function timerSecond() {
//    if (startSec < 10) {
//        objTimer.second.innerHTML = '0' + startSec;
//    } else {
//        objTimer.second.innerHTML = startSec;
//    }
//    
//    startSec++;
////    setTimeout(timerSecond, 100);  
//}
//
//function timerMinute() {
//    if (startMinute < 10) {
//        objTimer.minute.innerHTML = '0' + startMinute;
//    } else {
//        objTimer.minute.innerHTML = startMinute;
//    }
//    
//    startMinute++;
//    setTimeout(timerMinute, 500); 
//}
//
//function timerHour() {
//    if (startHour < 10) {
//        objTimer.hour.innerHTML = '0' + startHour;
//    } else {
//        objTimer.hour.innerHTML = startHour;
//    }
//    
//    startHour++;
//    setTimeout(timerHour, 1000);
//}
//
//function clearTimer(timerFunction) {
//    var timerId = timerFunction;
//    clearTimeout(timerId);
//}
//
//
//
//function startTimer() {
////    timerMiliSecond();
//    setTimeout(timerSecond(), 100);
////    timerMiliSecond();
//}
//
//function clearTimer() {
////    timerMiliSecond();
//    clearTimeout( timerSecond() );
//    clearTimeout( timerMinute() );
//    clearTimeout( timerHour() );
//}
//
////var start = startTimer();
////var stop = clearTimer();
//
