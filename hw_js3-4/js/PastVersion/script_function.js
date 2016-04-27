/*jslint devel: true, white: true, evil: true, forin: true, sloppy: true*/
//alert('Hello!');

function createAttribute(element, typeAttribute, valueAttribute) {
    return element.setAttribute(typeAttribute, valueAttribute);
}

function createNewElement(elem, elemClass, selector, index) {
    var newElement = document.createElement(elem);
    newElement.classList.add(elemClass);
    var parentElement = document.querySelectorAll(selector)[index];
    parentElement.appendChild(newElement);
    return newElement;
}

function createNewElementBefore(elem, elemClass, selector, index, nextSibling) {
    var newElement = document.createElement(elem);
    newElement.classList.add(elemClass);
    var parentElement = document.querySelectorAll(selector);
    parentElement[index].insertBefore(newElement, nextSibling);
    return newElement;
}

//=======================================

var cssJs = document.createElement('link');
cssJs.setAttribute('type', 'text/css');
cssJs.setAttribute('rel', 'stylesheet');
cssJs.setAttribute('href', 'css/style_js.css');

var parentHead = document.getElementsByTagName('head');
parentHead[0].appendChild(cssJs);

var wrapper = createNewElement('div', 'wrapper', 'body', '0'); //Create div.wrapper

var headName = createNewElement('h1', 'headName', '.wrapper', '0'); //Create h1.headName
headName.innerHTML = 'Programming`s test'; //Assign the text for h1.headName

var form = createNewElement('form', 'test__form', '.wrapper', '0'); //Create form

var questionList = createNewElement('ol', 'test__list-question', '.test__form', '0');

//=======================================================
//QUESTION 1
//=======================================================

var question1 = createNewElement('li', 'test__question', '.test__list-question', '0');
question1.innerHTML = 'Question #1';

var question2 = createNewElement('li', 'test__question', '.test__list-question', '0');
question2.innerHTML = 'Question #2';

var question3 = createNewElement('li', 'test__question', '.test__list-question', '0');
question3.innerHTML = 'Question #3';

var answerList1 = createNewElement('ul', 'test__list-answer', '.test__question', '0');
var answerList2 = createNewElement('ul', 'test__list-answer', '.test__question', '1');
var answerList3 = createNewElement('ul', 'test__list-answer', '.test__question', '2');

var answer1_1 = createNewElement('li', 'test__answer', '.test__list-answer', '0');
var answer1_2 = createNewElement('li', 'test__answer', '.test__list-answer', '0');
var answer1_3 = createNewElement('li', 'test__answer', '.test__list-answer', '0');
var answer2_1 = createNewElement('li', 'test__answer', '.test__list-answer', '1');
var answer2_2 = createNewElement('li', 'test__answer', '.test__list-answer', '1');
var answer2_3 = createNewElement('li', 'test__answer', '.test__list-answer', '1');
var answer3_1 = createNewElement('li', 'test__answer', '.test__list-answer', '2');
var answer3_2 = createNewElement('li', 'test__answer', '.test__list-answer', '2');
var answer3_3 = createNewElement('li', 'test__answer', '.test__list-answer', '2');

//==== LABEL =====
var label1_1 = createNewElement('label', 'test__label', '.test__answer', '0');
var label1_2 = createNewElement('label', 'test__label', '.test__answer', '1');
var label1_3 = createNewElement('label', 'test__label', '.test__answer', '2');
var label2_1 = createNewElement('label', 'test__label', '.test__answer', '3');
var label2_2 = createNewElement('label', 'test__label', '.test__answer', '4');
var label2_3 = createNewElement('label', 'test__label', '.test__answer', '5');
var label3_1 = createNewElement('label', 'test__label', '.test__answer', '6');
var label3_2 = createNewElement('label', 'test__label', '.test__answer', '7');
var label3_3 = createNewElement('label', 'test__label', '.test__answer', '8');

label1_1.innerHTML = 'Answer #1';
label1_2.innerHTML = 'Answer #2';
label1_3.innerHTML = 'Answer #3';
label2_1.innerHTML = 'Answer #1';
label2_2.innerHTML = 'Answer #2';
label2_3.innerHTML = 'Answer #3';
label3_1.innerHTML = 'Answer #1';
label3_2.innerHTML = 'Answer #2';
label3_3.innerHTML = 'Answer #3';


//==== CHECKBOX =====

var checkbox1_1 = createNewElementBefore('input', 'checkbox', '.test__label', '0', label1_1.lastChild);
var checkbox1_2 = createNewElementBefore('input', 'checkbox', '.test__label', '1', label1_2.lastChild);
var checkbox1_3 = createNewElementBefore('input', 'checkbox', '.test__label', '2', label1_3.lastChild);

var checkbox2_1 = createNewElementBefore('input', 'checkbox', '.test__label', '3', label2_1.lastChild);
var checkbox2_2 = createNewElementBefore('input', 'checkbox', '.test__label', '4', label2_2.lastChild);
var checkbox2_3 = createNewElementBefore('input', 'checkbox', '.test__label', '5', label2_3.lastChild);

var checkbox3_1 = createNewElementBefore('input', 'checkbox', '.test__label', '6', label3_1.lastChild);
var checkbox3_2 = createNewElementBefore('input', 'checkbox', '.test__label', '7', label3_2.lastChild);
var checkbox3_3 = createNewElementBefore('input', 'checkbox', '.test__label', '8', label3_3.lastChild);

createAttribute(checkbox1_1, 'type', 'checkbox');
createAttribute(checkbox1_2, 'type', 'checkbox');
createAttribute(checkbox1_3, 'type', 'checkbox');
createAttribute(checkbox2_1, 'type', 'checkbox');
createAttribute(checkbox2_2, 'type', 'checkbox');
createAttribute(checkbox2_3, 'type', 'checkbox');
createAttribute(checkbox3_1, 'type', 'checkbox');
createAttribute(checkbox3_2, 'type', 'checkbox');
createAttribute(checkbox3_3, 'type', 'checkbox');


//==== SUBMIT =====
var submit = createNewElement('input', 'submit', '.test__form', '0');
createAttribute(submit, 'type', 'submit');
createAttribute(submit, 'value', 'Check my result');
