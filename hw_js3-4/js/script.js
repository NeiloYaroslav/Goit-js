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

//Create and add DOM element - header for test h1.test__headName
function createHead() {
    var head = createNewElement('h1', 'test__headName', '.wrapper', '0');
        
    return head;
}

//Insert inner name for header
function createHeadName() {
    var parrentHeadName = document.querySelectorAll('.test__headName');
    parrentHeadName[0].innerHTML = 'Programming`s test'; 
}

//Create and add DOM element - form.test__form
function createForm() {
    var form = createNewElement('form', 'test__form', '.wrapper', '0');
    
    return form;
}

//Create and add DOM element - ordered list (ol) for questions
function createQuestionList() {
    var questionList = createNewElement('ol', 'test__list-question', '.test__form', '0');
    
    return questionList;
}

//Create and add DOM element - items ordered list and paragraph questions and answer
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

//Insert inner name for questions
function createQuestionName(numberQuestion) {
    var parrentQuestion = document.querySelectorAll('.test__question');
    var arrQuestionName = [];
    
    for (var i = 0; i < numberQuestion; i++) {
        var questionName = parrentQuestion[i].innerHTML = 'Question #' + (i + 1);
        arrQuestionName.push(questionName);
    }
    
    return arrQuestionName;
}

//Create and add DOM element - items unordered order for answer
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

//Create and add DOM element - label and input.type=checkbox for answer
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

//Insert inner name for answer
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

//Create and add DOM element - input.submit
function createSubmitElement() {
    var submit = createNewElement('input', 'submit', '.test__form', '0');
    createAttribute(submit, 'type', 'submit');
    createAttribute(submit, 'value', 'Check my result');
    
    return submit;
}

//Create test. Must insert number of question and answer
function createTest(numberQuestion, numberAnswer) {
    var test = {
        css: createCssJs(), //Create css file
        wrapper: createWrapper(), //Create div.wrapper
        head: createHead(), //Create h1 for test
        headName: createHeadName(), //Create header name for test
        form: createForm(), //Create form for test
        questionList: createQuestionList(), //Create question list and answer list
        question: createQuestionElement(numberQuestion), //Create item of question list
        questionName: createQuestionName(numberQuestion), //Create name for question
        answer: createAnswerElement(numberQuestion, numberAnswer), //Create item of answer list
        label: createLabelElement(numberQuestion, numberAnswer), //Create label and checkbox
        answerName: createAnswerName(numberQuestion, numberAnswer), //Create name for answer
        submit: createSubmitElement() //Create button "submit" for form of test
    }
    
    return test;
}

//=======================================================
//TEST
//=======================================================

var test = createTest(3, 3); //Create test: 3 questions and 3 answer for each question

