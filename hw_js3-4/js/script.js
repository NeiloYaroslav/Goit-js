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
//QUESTION
//=======================================================

var arrQuestion = [];
var numberQuestion = 3;
for (var i = 0; i < numberQuestion; i++) {
    var newElement = createNewElement('li', 'test__question', '.test__list-question', '0');
    arrQuestion.push(newElement);
}

arrQuestion[0].innerHTML = 'Question #1';
arrQuestion[1].innerHTML = 'Question #2';
arrQuestion[2].innerHTML = 'Question #3';

var arrAnswerList = [];
var numberAnswerList = numberQuestion;
for (var i = 0; i < numberAnswerList; i++) {
    var answerList = createNewElement('ul', 'test__list-answer', '.test__question', i);
    arrAnswerList.push(answerList);
}

var arrAnswer = [];
var numberAnswer = 3;
    for (var i = 0; i < numberAnswer; i++) {
        var answer1 = createNewElement('li', 'test__answer', '.test__list-answer', i);
        var answer2 = createNewElement('li', 'test__answer', '.test__list-answer', i);
        var answer3 = createNewElement('li', 'test__answer', '.test__list-answer', i);
        arrAnswer.push(answer1, answer2, answer3);
    }

var arrLabel = [];
    var length = arrAnswer.length
    for (var i = 0; i < length; i++) {
        var label = createNewElement('label', 'test__label', '.test__answer', i);
        var checkbox = createNewElementBefore('input', 'checkbox', '.test__label', i, label.lastChild);
        createAttribute(checkbox, 'type', 'checkbox');
        arrLabel.push(label);
    }

arrLabel[0].innerHTML = 'Answer #1';
arrLabel[1].innerHTML = 'Answer #2';
arrLabel[2].innerHTML = 'Answer #3';
arrLabel[3].innerHTML = 'Answer #1';
arrLabel[4].innerHTML = 'Answer #2';
arrLabel[5].innerHTML = 'Answer #3';
arrLabel[6].innerHTML = 'Answer #1';
arrLabel[7].innerHTML = 'Answer #2';
arrLabel[8].innerHTML = 'Answer #3';

var arrCheckbox = [];
    for (var i = 0; i < length; i++) {
        var checkbox = createNewElementBefore('input', 'checkbox', '.test__label', i, arrLabel[i].lastChild);
        createAttribute(checkbox, 'type', 'checkbox');
        arrLabel.push(checkbox);
    }


//==== SUBMIT =====
var submit = createNewElement('input', 'submit', '.test__form', '0');
createAttribute(submit, 'type', 'submit');
createAttribute(submit, 'value', 'Check my result');
