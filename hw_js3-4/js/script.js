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

function createCssJs() {
    var cssJs = document.createElement('link');
    cssJs.setAttribute('type', 'text/css');
    cssJs.setAttribute('rel', 'stylesheet');
    cssJs.setAttribute('href', 'css/style_js.css');

    var parentHead = document.getElementsByTagName('head');
    parentHead[0].appendChild(cssJs);
    
    return cssJs;
}

function createWrapper() {
    var wrapper = createNewElement('div', 'wrapper', 'body', '0'); //Create div.wrapper
    
    return wrapper;
}

function createHead() {
    var head = createNewElement('h1', 'test__headName', '.wrapper', '0');
        
    return head;
}

function createForm() {
    var form = createNewElement('form', 'test__form', '.wrapper', '0');
    
    return form;
}

function createHeadName() {
    var parrentHeadName = document.querySelectorAll('.test__headName'); //HeadName for test
    parrentHeadName[0].innerHTML = 'Programming`s test'; //Assign the text for h1.headName
}

function createQuestionList() {
    var questionList = createNewElement('ol', 'test__list-question', '.test__form', '0');
    
    return questionList;
}


function createQuestionElement(numberQuestion) {
    var arrQuestion = [], //Create question arrey
        arrAnswerList = []; //Create answer list arrey
    
    for (var i = 0; i < numberQuestion; i++) {
        var questionItem = createNewElement('li', 'test__question-item', '.test__list-question', '0'); //Create questions
        var question = createNewElement('p', 'test__question', '.test__question-item', i); //Create answers list
        var answerList = createNewElement('ul', 'test__list-answer', '.test__question-item', i); //Create answers list

        arrQuestion.push(question); //add question in question arrey
        arrAnswerList.push(answerList); //add answer list in question arrey
    };
    
    return arrQuestion, arrAnswerList;
}

function createQuestionName(numberQuestion) {
    var parrentQuestion = document.querySelectorAll('.test__question');
    var arrQuestionName = [];
    
    for (var i = 0; i < numberQuestion; i++) {
        var questionName = parrentQuestion[i].innerHTML = 'Question #' + (i + 1);
        arrQuestionName.push(questionName);
    }
    
    return arrQuestionName;
}


function createAnswerElement(numberQuestion, numberAnswer) {
    var arrAnswer = []; //Create answer arrey
    
    for (var i = 0; i < numberQuestion; i++) {
        for (var j = 0; j < numberAnswer; j++) {
            var answerItem = createNewElement('li', 'test__answer-item', '.test__list-answer', i);
            arrAnswer.push(answerItem);
        };
    };
    
    return arrAnswer;
}

function createLabelElement(numberQuestion, numberAnswer) {
    var arrLabel = []; //label arrey
    var length = numberQuestion * numberAnswer // length label arrey
    
    for (var i = 0; i < length; i++) {
        var label = createNewElement('label', 'test__label', '.test__answer-item', i); //Create and add label in HTML
        var checkbox = createNewElementBefore('input', 'checkbox', '.test__label', i, label.lastChild); //Create and add input in HTML
        var answer = createNewElement('span', 'test__answer', '.test__label', i); //Create and add paragraph in HTML
        
        createAttribute(checkbox, 'type', 'checkbox'); //Create attribute for input.checkbox
        arrLabel.push(label); //add label in label arrey
    }
    
    return arrLabel;
}

function createAnswerName(numberQuestion, numberAnswer) {
    var parrentAnswer = document.querySelectorAll('.test__answer');
    var arrAnswerName = [];
    var numberAnswerName = numberQuestion * numberAnswer;
    
    for (var i = 0; i < numberAnswerName; i++) {
        var answerName = parrentAnswer[i].innerHTML = 'Answer #' + (i + 1);
        arrAnswerName.push(answerName);
    }
    
    return arrAnswerName;
}

function createSubmitElement() {
    var submit = createNewElement('input', 'submit', '.test__form', '0');
    createAttribute(submit, 'type', 'submit');
    createAttribute(submit, 'value', 'Check my result');
    
    return submit;
}

function createTest(numberQuestion, numberAnswer) {
    var test = {
        css: createCssJs(),
        wrapper: createWrapper(),
        head: createHead(),
        headName: createHeadName(),
        form: createForm(),
        questionList: createQuestionList(),
        question: createQuestionElement(numberQuestion),
        questionName: createQuestionName(numberQuestion),
        answer: createAnswerElement(numberQuestion, numberAnswer),
        label: createLabelElement(numberQuestion, numberAnswer),
        answerName: createAnswerName(numberQuestion, numberAnswer),
        submit: createSubmitElement()
    }
    
    return test;
}

//=======================================================
//TEST
//=======================================================

var test = createTest(3, 3);

console.log(test);

console.log(test.question[1]);



