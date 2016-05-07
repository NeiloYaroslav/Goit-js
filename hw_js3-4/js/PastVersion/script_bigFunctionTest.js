/*jslint browser: true, devel: true, white: true, evil: true, forin: true, newcap: true, plusplus: true, sloppy: true, vars: true*/
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

//Create and add test structure
function CreateTest(numberQuestion, numberAnswer) {
    var headName = createNewElement('h1', 'test__headName', '.wrapper', '0'); //Create h1.headName
    
    var form = createNewElement('form', 'test__form', '.wrapper', '0'); //Create form

    var questionList = createNewElement('ol', 'test__list-question', '.test__form', '0');
    
    var arrQuestion = [], //Create question arrey
        arrAnswerList = [], //Create answer list arrey
        arrAnswer = []; //Create answer arrey
    
    //=======================================================
    //QUESTION
    //=======================================================
    //Create and add questions and answers in their arreys
    for (var i = 0; i < numberQuestion; i++) {
        var questionItem = createNewElement('li', 'test__question-item', '.test__list-question', '0'); //Create questions
        var question = createNewElement('p', 'test__question', '.test__question-item', i); //Create answers list
        var answerList = createNewElement('ul', 'test__list-answer', '.test__question-item', i); //Create answers list

        arrQuestion.push(question); //add question in question arrey
        arrAnswerList.push(answerList); //add answer list in question arrey
    }
    
    //=======================================================
    //ANSWER
    //=======================================================
    //Create and add answers in answer list
    for (var i = 0; i < numberQuestion; i++) {
        for (var j = 0; j < numberAnswer; j++) {
            var answerItem = createNewElement('li', 'test__answer-item', '.test__list-answer', i);
            arrAnswer.push(answerItem);
        }
    }
    
    //=======================================================
    //LABEL
    //=======================================================
    var arrLabel = []; //label arrey
    
    var length = arrAnswer.length // length label arrey
    
    for (var i = 0; i < length; i++) {
        var label = createNewElement('label', 'test__label', '.test__answer-item', i); //Create and add label in HTML
        var checkbox = createNewElementBefore('input', 'checkbox', '.test__label', i, label.lastChild); //Create and add input in HTML
        var answer = createNewElement('span', 'test__answer', '.test__label', i); //Create and add paragraph in HTML
        
        createAttribute(checkbox, 'type', 'checkbox'); //Create attribute for input.checkbox
        arrLabel.push(label); //add label in label arrey
    }
    
    //=======================================================
    //SUBMIT
    //=======================================================
    var submit = createNewElement('input', 'submit', '.test__form', '0');
    createAttribute(submit, 'type', 'submit');
    createAttribute(submit, 'value', 'Check my result');
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
//TEST
//=======================================================
var numberQuestion = 3, //number of question
    numberAnswer = 3; //number of answer

var createTest = CreateTest(numberQuestion, numberAnswer);

var parrentHeadName = document.querySelectorAll('.test__headName'); //HeadName for test
parrentHeadName[0].innerHTML = 'Programming`s test'; //Assign the text for h1.headName

var parrentQuestion = document.querySelectorAll('.test__question');
parrentQuestion[0].innerHTML = 'Question #1';
parrentQuestion[1].innerHTML = 'Question #2';
parrentQuestion[2].innerHTML = 'Question #3';

var parrentAnswer = document.querySelectorAll('.test__answer');
parrentAnswer[0].innerHTML = 'Answer #1';
parrentAnswer[1].innerHTML = 'Answer #2';
parrentAnswer[2].innerHTML = 'Answer #3';

parrentAnswer[3].innerHTML = 'Answer #1';
parrentAnswer[4].innerHTML = 'Answer #2';
parrentAnswer[5].innerHTML = 'Answer #3';

parrentAnswer[6].innerHTML = 'Answer #1';
parrentAnswer[7].innerHTML = 'Answer #2';
parrentAnswer[8].innerHTML = 'Answer #3';


