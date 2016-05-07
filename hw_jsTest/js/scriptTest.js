///*jslint browser: true, devel: true, white: true, evil: true, forin: true, newcap: true, plusplus: true, sloppy: true, vars: true*/
////alert('Hello!');

function counter() {
    var count = 1;
    
    return function() {
        return count++;
    }
}

console.log('counter ', counter());

var newCounter1 = counter();
var newCounter2 = counter();

console.log('newCounter1 ', newCounter1);
console.log('newCounter2 ', newCounter2);


newCounter1();
newCounter1();
newCounter1();
newCounter1();
var result1 = newCounter1();


newCounter2();
newCounter2();
var result2 = newCounter2();

console.log('result1 ', result1);
console.log('result2 ', result2);



//
////Create attribute with new HTML element
//function createAttribute(element, typeAttribute, valueAttribute) {
//    return element.setAttribute(typeAttribute, valueAttribute);
//}
//
////Create and add new HTML element
//function createNewElement(elem, elemClass, selector, index) {
//    var newElement = document.createElement(elem);
//    newElement.classList.add(elemClass);
//    var parentElement = document.querySelectorAll(selector)[index];
//    parentElement.appendChild(newElement);
//    return newElement;
//}
//
////Create and add new HTML element before nextSibling
//function createNewElementBefore(elem, elemClass, selector, index, nextSibling) {
//    var newElement = document.createElement(elem);
//    newElement.classList.add(elemClass);
//    var parentElement = document.querySelectorAll(selector);
//    parentElement[index].insertBefore(newElement, nextSibling);
//    return newElement;
//}
//
//
//
//
//
////=======================================
//var cssJs = document.createElement('link');
//cssJs.setAttribute('type', 'text/css');
//cssJs.setAttribute('rel', 'stylesheet');
//cssJs.setAttribute('href', 'css/style_js.css');
//
//var parentHead = document.getElementsByTagName('head');
//parentHead[0].appendChild(cssJs);
//
//var wrapper = createNewElement('div', 'wrapper', 'body', '0'); //Create div.wrapper
//
////=======================================================
////TIMER
////=======================================================
//var timerBlock = createNewElement('div', 'timer', '.wrapper', '0'); //Create div.timer
//var timerDisplay = createNewElement('p', 'timer__display', '.timer', '0'); //Create p.timer__display
//
//var hour = createNewElement('span', 'timer__time', '.timer__display', '0'); //Create span.timer__time for hours
//var minute = createNewElement('span', 'timer__time', '.timer__display', '0'); //Create span.timer__time for minutes
//minute.classList.add('timer__time-middle'); //Create additional class for minutes
//var second = createNewElement('span', 'timer__time', '.timer__display', '0'); //Create span.timer__time for seconds
//
//hour.innerHTML = '00';
//minute.innerHTML = '00';
//second.innerHTML = '00';
//
//function timerSecond() {
//    var arrSecond = [];
//    var secondLength = 60;    
//
//    
//    for (var i = 0; i < secondLength; i++) {
//        arrSecond.push(i);
//        setTimeout(second.innerHTML = i, 1000);
////        setTimeout(second.innerHTML = arrSecond[i], 1000);
//    };
//    
//    console.log(arrSecond);
//    
//    return timerSecond;
//
//};
//
//timerSecond()




////=======================================================
////Button
////=======================================================
//var submitStart = createNewElement('input', 'timer__button', '.timer', '0');
//createAttribute(submitStart, 'type', 'button');
//createAttribute(submitStart, 'value', 'Start');
//
//var submitStop = createNewElement('input', 'timer__button', '.timer', '0');
//createAttribute(submitStop, 'type', 'button');
//createAttribute(submitStop, 'value', 'Stop');
//
//submitStart.addEventListener('click', timer);
//submitStop.addEventListener('click', clearTimeout(clearTimer(timer)));
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








//function newElementWithAttribute(elem, elemClass, type, value) {
//    var newElement = document.createElement(elem);
//    newElement.classList.add(elemClass);
//    newElement.setAttribute(type, value);
//    return newElement;
//}
//
//var wrapper = newElementWithAttribute('input', 'checkbox', 'type', 'checkbox');
//
//document.body.classList.add('body');
//

//function newElement(elem, elemClass) {
//var createNewElement = document.createElement(elem);
//createNewElement.classList.add(elemClass);
//return createNewElement;
//}

//function createAttribute(element, typeAttribute, valueAttribute) {
//    return element.setAttribute(typeAttribute, valueAttribute);
//}
//
//
//document.body.classList.add('body');
//
//function createNewElement(elem, elemClass, selector, index) {
//    var newElement = document.createElement(elem);
//newElement.classList.add(elemClass);
//    var parentElement = document.querySelectorAll(selector)[index];
//    parentElement.appendChild(newElement);
//    return newElement;
//}
//
//var wrapper = createNewElement('div', 'wrapper', '.body', '0');
//
//function createNewElementBefore(elem, elemClass, selector, index, nextSibling) {
//    var newElement = document.createElement(elem);
//    newElement.classList.add(elemClass);
//    var parentElement = document.querySelectorAll(selector)[index];
//    parentElement.insertBefore(newElement, nextSibling);
//    return newElement;
//}
//var wrapper1 = createNewElement('div', 'wrapper1', '.body', '0');
//
//var wrapper2 = createNewElementBefore('div', 'wrapper2', '.body', '0', wrapper1);


//var parentBody = document.querySelectorAll('.body');
//parentBody[0].appendChild(wrapper);

//function addElement(selector, index, element) {
//    var parentElement = document.querySelectorAll(selector);
//    return parentElement[index].appendChild(element);
//}
//
//var parentBody = addElement('.body', '0', wrapper);
