/*jslint devel: true, sloppy: true*/
//alert('Hello!');

var cssJs = document.createElement('link');
cssJs.setAttribute('type', 'text/css');
cssJs.setAttribute('rel', 'stylesheet');
cssJs.setAttribute('href', 'css/style_js.css');

var parentHead = document.getElementsByTagName('head');
parentHead[0].appendChild(cssJs);

//Create div.wrapper
var wrapper = document.createElement('div');
wrapper.classList.add('wrapper');

document.body.appendChild(wrapper);

//Create h1.headName
var headName = document.createElement('h1'); //Create new element - h1
headName.classList.add('headName'); //Create class for h1 - headName
headName.innerHTML = 'Programming`s test'; //Assign the text for h1.headName

var parentWrapper = document.querySelectorAll('.wrapper'); //Find parent with class '.wrapper'
parentWrapper[0].appendChild(headName); //Pass new element (h1.headName) for parent - div.wrapper

//Create form
var testForm = document.createElement('form');
testForm.classList.add('test__form');
document.querySelector('.wrapper').appendChild(testForm);

var questionList = document.createElement('ol');
questionList.classList.add('test__list-question');
var parentForm = document.querySelectorAll('.test__form');
parentForm[0].appendChild(questionList);


//=======================================================
//QUESTION 1
//=======================================================

var question_1 = document.createElement('li');
question_1.classList.add('test__question');
question_1.innerHTML = 'Question #1';
var question_2 = document.createElement('li');
question_2.classList.add('test__question');
question_2.innerHTML = 'Question #2';
var question_3 = document.createElement('li');
question_3.classList.add('test__question');
question_3.innerHTML = 'Question #3';

var parentQuestionList = document.querySelectorAll('.test__list-question');
parentQuestionList[0].appendChild(question_1);
parentQuestionList[0].appendChild(question_2);
parentQuestionList[0].appendChild(question_3);

var answerList_1 = document.createElement('ul');
answerList_1.classList.add('test__list-answer');
var answerList_2 = document.createElement('ul');
answerList_2.classList.add('test__list-answer');
var answerList_3 = document.createElement('ul');
answerList_3.classList.add('test__list-answer');
var parentQuestion = document.querySelectorAll('.test__question');
parentQuestion[0].appendChild(answerList_1);
parentQuestion[1].appendChild(answerList_2);
parentQuestion[2].appendChild(answerList_3);


//==== ANSWER =====
var answer_1_1 = document.createElement('li');
answer_1_1.classList.add('test__answer');
var answer_1_2 = document.createElement('li');
answer_1_2.classList.add('test__answer');
var answer_1_3 = document.createElement('li');
answer_1_3.classList.add('test__answer');

var answer_2_1 = document.createElement('li');
answer_2_1.classList.add('test__answer');
var answer_2_2 = document.createElement('li');
answer_2_2.classList.add('test__answer');
var answer_2_3 = document.createElement('li');
answer_2_3.classList.add('test__answer');

var answer_3_1 = document.createElement('li');
answer_3_1.classList.add('test__answer');
var answer_3_2 = document.createElement('li');
answer_3_2.classList.add('test__answer');
var answer_3_3 = document.createElement('li');
answer_3_3.classList.add('test__answer');

var parentAnswerList = document.querySelectorAll('.test__list-answer');
parentAnswerList[0].appendChild(answer_1_1);
parentAnswerList[0].appendChild(answer_1_2);
parentAnswerList[0].appendChild(answer_1_3);
parentAnswerList[1].appendChild(answer_2_1);
parentAnswerList[1].appendChild(answer_2_2);
parentAnswerList[1].appendChild(answer_2_3);
parentAnswerList[2].appendChild(answer_3_1);
parentAnswerList[2].appendChild(answer_3_2);
parentAnswerList[2].appendChild(answer_3_3);

//==== LABEL =====

var label_1_1 = document.createElement('label');
label_1_1.classList.add('test__label');
label_1_1.innerHTML = 'Answer #1';
var label_1_2 = document.createElement('label');
label_1_2.classList.add('test__label');
label_1_2.innerHTML = 'Answer #2';
var label_1_3 = document.createElement('label');
label_1_3.classList.add('test__label');
label_1_3.innerHTML = 'Answer #3';

var label_2_1 = document.createElement('label');
label_2_1.classList.add('test__label');
label_2_1.innerHTML = 'Answer #1';
var label_2_2 = document.createElement('label');
label_2_2.classList.add('test__label');
label_2_2.innerHTML = 'Answer #2';
var label_2_3 = document.createElement('label');
label_2_3.classList.add('test__label');
label_2_3.innerHTML = 'Answer #3';

var label_3_1 = document.createElement('label');
label_3_1.classList.add('test__label');
label_3_1.innerHTML = 'Answer #1';
var label_3_2 = document.createElement('label');
label_3_2.classList.add('test__label');
label_3_2.innerHTML = 'Answer #2';
var label_3_3 = document.createElement('label');
label_3_3.classList.add('test__label');
label_3_3.innerHTML = 'Answer #3';

var parentAnswer = document.querySelectorAll('.test__answer');
parentAnswer[0].appendChild(label_1_1);
parentAnswer[1].appendChild(label_1_2);
parentAnswer[2].appendChild(label_1_3);

parentAnswer[3].appendChild(label_2_1);
parentAnswer[4].appendChild(label_2_2);
parentAnswer[5].appendChild(label_2_3);

parentAnswer[6].appendChild(label_3_1);
parentAnswer[7].appendChild(label_3_2);
parentAnswer[8].appendChild(label_3_3);

//==== CHECKBOX =====

var checkbox_1_1 = document.createElement('input');
checkbox_1_1.classList.add('checkbox');
checkbox_1_1.setAttribute('type', 'checkbox');
var checkbox_1_2 = document.createElement('input');
checkbox_1_2.classList.add('checkbox');
checkbox_1_2.setAttribute('type', 'checkbox');
var checkbox_1_3 = document.createElement('input');
checkbox_1_3.classList.add('checkbox');
checkbox_1_3.setAttribute('type', 'checkbox');
var parentLabel = document.querySelectorAll('.test__label');

var checkbox_2_1 = document.createElement('input');
checkbox_2_1.classList.add('checkbox');
checkbox_2_1.setAttribute('type', 'checkbox');
var checkbox_2_2 = document.createElement('input');
checkbox_2_2.classList.add('checkbox');
checkbox_2_2.setAttribute('type', 'checkbox');
var checkbox_2_3 = document.createElement('input');
checkbox_2_3.classList.add('checkbox');
checkbox_2_3.setAttribute('type', 'checkbox');
var parentLabel = document.querySelectorAll('.test__label');

var checkbox_3_1 = document.createElement('input');
checkbox_3_1.classList.add('checkbox');
checkbox_3_1.setAttribute('type', 'checkbox');
var checkbox_3_2 = document.createElement('input');
checkbox_3_2.classList.add('checkbox');
checkbox_3_2.setAttribute('type', 'checkbox');
var checkbox_3_3 = document.createElement('input');
checkbox_3_3.classList.add('checkbox');
checkbox_3_3.setAttribute('type', 'checkbox');


var parentLabel = document.querySelectorAll('.test__label');

parentLabel[0].insertBefore(checkbox_1_1, label_1_1.lastChild);
parentLabel[1].insertBefore(checkbox_1_2, label_1_2.lastChild);
parentLabel[2].insertBefore(checkbox_1_3, label_1_3.lastChild);

parentLabel[3].insertBefore(checkbox_2_1, label_2_1.lastChild);
parentLabel[4].insertBefore(checkbox_2_2, label_2_2.lastChild);
parentLabel[5].insertBefore(checkbox_2_3, label_2_3.lastChild);

parentLabel[6].insertBefore(checkbox_3_1, label_3_1.lastChild);
parentLabel[7].insertBefore(checkbox_3_2, label_3_2.lastChild);
parentLabel[8].insertBefore(checkbox_3_3, label_3_3.lastChild);

//==== SUBMIT =====

var submit = document.createElement('input');
submit.classList.add('submit');
submit.setAttribute('type', 'submit');
submit.setAttribute('value', 'Check my result');

parentForm[0].appendChild(submit);

