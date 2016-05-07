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





//=======================================================
//CSS, WRAPPER
//=======================================================
var cssJs = document.createElement('link');
cssJs.setAttribute('type', 'text/css');
cssJs.setAttribute('rel', 'stylesheet');
cssJs.setAttribute('href', 'css/style_js.css');

var parentHead = document.getElementsByTagName('head');
parentHead[0].appendChild(cssJs);

var wrapper = createNewElement('div', 'wrapper', 'body', '0'); //Create div.wrapper

//=======================================================
//TIMER
//=======================================================
var timerBlock = createNewElement('div', 'timer', '.wrapper', '0'); //Create div.timer
var timerDisplay = createNewElement('p', 'timer__display', '.timer', '0'); //Create p.timer__display

var hour = createNewElement('span', 'timer__time', '.timer__display', '0'); //Create span.timer__time for hours
var minute = createNewElement('span', 'timer__time', '.timer__display', '0'); //Create span.timer__time for minutes
minute.classList.add('timer__time-middle'); //Create additional class for minutes
var second = createNewElement('span', 'timer__time', '.timer__display', '0'); //Create span.timer__time for seconds
var miliSecond = createNewElement('span', 'timer__time', '.timer__display', '0'); //Create span.timer__time for miliSeconds
second.classList.add('timer__time-middle'); //Create additional class for second
miliSecond.classList.add('timer__time-middle'); //Create additional class for miniSecond

hour.innerHTML = '00';
minute.innerHTML = '00';
second.innerHTML = '00';
miliSecond.innerHTML = '000';


function counter() {
    var count = 0;
    
    return function() {
        return count++;
    };
}

var startMiliSec = 0;
var startSec = 0;
var startMinute = 0;
var startHour = 0;

//function timerMiliSecond() {
//    if (miliSecond < 100) {
//        miliSecond.innerHTML = '0' + startMiliSec;
//    } else if (miliSecond < 10) {
//        miliSecond.innerHTML = '00' + startMiliSec;
//    } else {
//        miliSecond.innerHTML = startMiliSec;
//    }
//    
//    startMiliSec++;
//    setTimeout(timerMiliSecond, 1);  
//}


function timerSecond() {
    if (startSec < 10) {
        second.innerHTML = '0' + startSec;
    } else {
        second.innerHTML = startSec;
    }
    
    startSec++;
    setTimeout(timerSecond, 100);  
}

function timerMinute() {
    if (startMinute < 10) {
        minute.innerHTML = '0' + startMinute;
    } else {
        minute.innerHTML = startMinute;
    }
    
    startMinute++;
    setTimeout(timerMinute, 500); 
}

function timerHour() {
    if (startHour < 10) {
        hour.innerHTML = '0' + startHour;
    } else {
        hour.innerHTML = startHour;
    }
    
    startHour++;
    setTimeout(timerHour, 1000);
}

function clearTimer(timerFunction) {
    var timerId = timerFunction;
    clearTimeout(timerId);
}


function startTimer () {
//    timerMiliSecond();
    timerSecond();
    timerMinute();
    timerHour();
}

function clearTimer() {
//    timerMiliSecond();
    clearTimeout( timerSecond() );
    clearTimeout( timerMinute() );
    clearTimeout( timerHour() );
}


//=======================================================
//Button
//=======================================================
var submitStart = createNewElement('input', 'timer__button', '.timer', '0');
createAttribute(submitStart, 'type', 'button');
createAttribute(submitStart, 'value', 'Start');

var submitStop = createNewElement('input', 'timer__button', '.timer', '0');
createAttribute(submitStop, 'type', 'button');
createAttribute(submitStop, 'value', 'Stop');

console.log(submitStop);

submitStart.addEventListener('click', startTimer);
submitStop.addEventListener('click', clearTimer);















//function timerSecond() {
////    var arrSecond = [];
////    var secondLength = 60;    
//
//    
////    for (var i = 0; i < secondLength; i++) {
//////        arrSecond.push(i);
////        setTimeout(second.innerHTML = i, 1000);
//////        setTimeout(second.innerHTML = arrSecond[i], 1000);
////    };
////    
////    console.log(arrSecond);
////    
////    return timerSecond;
//
//};

//timerSecond()



