/*jslint devel: true, white: true, evil: true, forin: true, sloppy: true*/
//alert('Hello!');

//Create attribute with new HTML element
function createAttribute(element, typeAttribute, valueAttribute) {
    return element.setAttribute(typeAttribute, valueAttribute);
};

//Create and add new HTML element
function createNewElement(elem, elemClass, selector, index) {
    var newElement = document.createElement(elem);
    newElement.classList.add(elemClass);
    var parentElement = document.querySelectorAll(selector)[index];
    parentElement.appendChild(newElement);
    return newElement;
};

//Create and add new HTML element before nextSibling
function createNewElementBefore(elem, elemClass, selector, index, nextSibling) {
    var newElement = document.createElement(elem);
    newElement.classList.add(elemClass);
    var parentElement = document.querySelectorAll(selector);
    parentElement[index].insertBefore(newElement, nextSibling);
    return newElement;
};

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


var numberQuestion = 3, //number of question
    numberAnswer = 3; //number of answer

function CreateLayout(numberQuestion, numberAnswer) {
    var arrQuestion = [], //Create question arrey
        arrAnswerList = [], //Create answer list arrey
        arrAnswer = []; //Create answer arrey
    
    //Create and add questions and answers in their arreys
    for (var i = 0; i < numberQuestion; i++) {
        var questionItem = createNewElement('li', 'test__question-item', '.test__list-question', '0'); //Create questions
        var question = createNewElement('p', 'test__question', '.test__question-item', i); //Create answers list
        var answerList = createNewElement('ul', 'test__list-answer', '.test__question-item', i); //Create answers list

        arrQuestion.push(question); //add question in question arrey
        arrAnswerList.push(answerList); //add answer list in question arrey
    };
    
    //Create and add answers in answer list
    for (var i = 0; i < numberQuestion; i++) {
        for (var j = 0; j < numberAnswer; j++) {
            var answerItem = createNewElement('li', 'test__answer-item', '.test__list-answer', i);
            arrAnswer.push(answerItem);
        };
    };
    
    var arrLabel = []; //label arrey
    
    var length = arrAnswer.length // length label arrey
    
    for (var i = 0; i < length; i++) {
        var label = createNewElement('label', 'test__label', '.test__answer-item', i); //Create and add label in HTML
        var checkbox = createNewElementBefore('input', 'checkbox', '.test__label', i, label.lastChild); //Create and add input in HTML
        var answer = createNewElement('p', 'answer', '.test__label', i); //Create and add paragraph in HTML
        
        createAttribute(checkbox, 'type', 'checkbox'); //Create attribute for input.checkbox
        arrLabel.push(label); //add label in label arrey
    };
};

var test = CreateLayout(numberQuestion, numberAnswer);

console.log(typeof test);



var parentElement = document.querySelectorAll('test__question')[0];
parentElement.innerHTML = 'Question #1';
parentElement.innerHTML = 'Question #1';
parentElement.innerHTML = 'Question #1';

//arrQuestion[0].innerHTML = 'Question #1';
//arrQuestion[1].innerHTML = 'Question #2';
//arrQuestion[2].innerHTML = 'Question #3';

//arrLabel[0].innerHTML = 'Answer #1';
//arrLabel[1].innerHTML = 'Answer #2';
//arrLabel[2].innerHTML = 'Answer #3';
//arrLabel[3].innerHTML = 'Answer #1';
//arrLabel[4].innerHTML = 'Answer #2';
//arrLabel[5].innerHTML = 'Answer #3';
//arrLabel[6].innerHTML = 'Answer #1';
//arrLabel[7].innerHTML = 'Answer #2';
//arrLabel[8].innerHTML = 'Answer #3';

//=======================================================
//SUBMIT
//=======================================================
var submit = createNewElement('input', 'submit', '.test__form', '0');
createAttribute(submit, 'type', 'submit');
createAttribute(submit, 'value', 'Check my result');







//var arrQuestion = [];
//var numberQuestion = 3;
//for (var i = 0; i < numberQuestion; i++) {
//    var newElement = createNewElement('li', 'test__question', '.test__list-question', '0');
//    arrQuestion.push(newElement);
//};
//
//arrQuestion[0].innerHTML = 'Question #1';
//arrQuestion[1].innerHTML = 'Question #2';
//arrQuestion[2].innerHTML = 'Question #3';
//
//var arrAnswerList = [];
//var numberAnswerList = numberQuestion;
//for (var i = 0; i < numberAnswerList; i++) {
//    var answerList = createNewElement('ul', 'test__list-answer', '.test__question', i);
//    arrAnswerList.push(answerList);
//};
//
//var arrAnswer = [];
//var numberAnswer = 3;
//for (var i = 0; i < numberAnswer; i++) {
//    var answer1 = createNewElement('li', 'test__answer', '.test__list-answer', i);
//    var answer2 = createNewElement('li', 'test__answer', '.test__list-answer', i);
//    var answer3 = createNewElement('li', 'test__answer', '.test__list-answer', i);
//    arrAnswer.push(answer1, answer2, answer3);
//};
//
//var arrLabel = [];
//var length = arrAnswer.length
//for (var i = 0; i < length; i++) {
//    var label = createNewElement('label', 'test__label', '.test__answer', i);
//    var checkbox = createNewElementBefore('input', 'checkbox', '.test__label', i, label.lastChild);
//    createAttribute(checkbox, 'type', 'checkbox');
//    arrLabel.push(label);
//};
//
//arrLabel[0].innerHTML = 'Answer #1';
//arrLabel[1].innerHTML = 'Answer #2';
//arrLabel[2].innerHTML = 'Answer #3';
//arrLabel[3].innerHTML = 'Answer #1';
//arrLabel[4].innerHTML = 'Answer #2';
//arrLabel[5].innerHTML = 'Answer #3';
//arrLabel[6].innerHTML = 'Answer #1';
//arrLabel[7].innerHTML = 'Answer #2';
//arrLabel[8].innerHTML = 'Answer #3';
//
//var arrCheckbox = [];
//for (var i = 0; i < length; i++) {
//    var checkbox = createNewElementBefore('input', 'checkbox', '.test__label', i, arrLabel[i].lastChild);
//    createAttribute(checkbox, 'type', 'checkbox');
//    arrLabel.push(checkbox);
//};
//
//
////=======================================================
////SUBMIT
////=======================================================
//var submit = createNewElement('input', 'submit', '.test__form', '0');
//createAttribute(submit, 'type', 'submit');
//createAttribute(submit, 'value', 'Check my result');
