/*jslint devel: true, sloppy: true*/
//alert('Hello!');

//Create div.wrapper
var wrapper = document.createElement('div');
wrapper.classList.add('wrapper');

document.body.appendChild(wrapper);

//Create h1.headName
var headName = document.createElement('h1'); //Create new element - h1
headName.classList.add('headName'); //Create class for h1 - headName
headName.innerHTML = 'Тест по программированию'; //Assign the text for h1.headName

var parentWrapper = document.querySelectorAll('.wrapper'); //Find parent with class '.wrapper'
parentWrapper[0].appendChild(headName); //Pass new element (h1.headName) for parent - div.wrapper

//Create form
var testForm = document.createElement('form');
testForm.classList.add('test__form');
document.querySelector('.wrapper').appendChild(testForm);

//=======================================================
//QUESTION 1
//=======================================================

var questionList = document.createElement('ol');
questionList.classList.add('test');

var parentTestForm = document.querySelector('.test__form');
parentTestForm.appendChild(questionList);

var questionListItem_1 = document.createElement('li');
questionListItem_1.classList.add('test__question');
questionListItem_1.innerHTML = 'Question #1';

var parentQuestionList = document.querySelector('.test');
parentQuestionList.appendChild(questionListItem_1);


var questionListItem_2 = document.createElement('li');
questionListItem_2.classList.add('test__question');
questionListItem_2.innerHTML = 'Question #2';

var parentQuestionList = document.querySelector('.test');
parentQuestionList.appendChild(questionListItem_2);


var questionListItem_3 = document.createElement('li');
questionListItem_3.classList.add('test__question');
questionListItem_3.innerHTML = 'Question #3';

var parentQuestionList = document.querySelector('.test');
parentQuestionList.appendChild(questionListItem_3);































////Create div.test__item
//var testItem_1 = document.createElement('div');
//testItem_1.classList.add('test__item');
//document.querySelector('.test__form').appendChild(testItem_1);
//
////Create p.test__question
//var testQuestion_1 = document.createElement('p');
//testQuestion_1.classList.add('test__question');
//testQuestion_1.innerHTML = 'Вопрос №1';
//document.querySelector('.test__item').appendChild(testQuestion_1);
//
////Create p.test__answer1
//var testAnswer_1 = document.createElement('p');
//testAnswer_1.classList.add('test__answer');
//document.querySelector('.test__item').appendChild(testAnswer_1);
//
////Create label.test__label
//var testLabel_1 = document.createElement('label');
//testLabel_1.classList.add('test__label');
//testLabel_1.innerHTML = 'Вариант ответа 1';
//document.querySelectorAll('.test__answer')[0].appendChild(testLabel_1);
//
////Create input.checkbox_1
//var testCheckbox_1 = document.createElement('input');
//testCheckbox_1.setAttribute('type', 'checkbox');
//
//var label = document.querySelectorAll('.test__label')[0];
//label.insertBefore(testCheckbox_1, label.firstChild);
//
////Create p.test__answer2
//var testAnswer_2 = document.createElement('p');
//testAnswer_2.classList.add('test__answer');
//document.querySelector('.test__item').appendChild(testAnswer_2);
//
////Create label.test__label
//var testLabel_2 = document.createElement('label');
//testLabel_2.classList.add('test__label');
//testLabel_2.innerHTML = 'Вариант ответа 2';
//document.querySelectorAll('.test__answer')[1].appendChild(testLabel_2);
//
////Create input.checkbox_2
//var testCheckbox_2 = document.createElement('input');
//testCheckbox_2.setAttribute('type', 'checkbox');
//
//var label = document.querySelectorAll('.test__label')[1];
//label.insertBefore(testCheckbox_2, label.firstChild);
//
////Create p.test__answer3
//var testAnswer_3 = document.createElement('p');
//testAnswer_3.classList.add('test__answer');
//document.querySelector('.test__item').appendChild(testAnswer_3);
//
////Create label.test__label
//var testLabel_3 = document.createElement('label');
//testLabel_3.classList.add('test__label');
//testLabel_3.innerHTML = 'Вариант ответа 3';
//document.querySelectorAll('.test__answer')[2].appendChild(testLabel_3);
//
////Create input.checkbox_3
//var testCheckbox_3 = document.createElement('input');
//testCheckbox_3.setAttribute('type', 'checkbox');
//
//var label = document.querySelectorAll('.test__label')[2];
//label.insertBefore(testCheckbox_3, label.firstChild);
//
////=======================================================
////QUESTION 2
////=======================================================
//
////Create div.test__item
//var testItem_2 = document.createElement('div');
//testItem_2.classList.add('test__item');
//document.querySelector('.test__form').appendChild(testItem_2);
//
////Create p.test__question
//var testQuestion_2 = document.createElement('p');
//testQuestion_2.classList.add('test__question');
//testQuestion_2.innerHTML = 'Вопрос №2';
//document.querySelector('.test__item:last-child').appendChild(testQuestion_2);
//
////Create p.test__answer1
//var testAnswer_1 = document.createElement('p');
//testAnswer_1.classList.add('test__answer');
//document.querySelector('.test__item:last-child').appendChild(testAnswer_1);
//
////Create label.test__label
//var testLabel_1 = document.createElement('label');
//testLabel_1.classList.add('test__label');
//testLabel_1.innerHTML = 'Вариант ответа 1';
//document.querySelectorAll('.test__item:last-child .test__answer')[0].appendChild(testLabel_1);
//
////Create input.checkbox_1
//var testCheckbox_1 = document.createElement('input');
//testCheckbox_1.setAttribute('type', 'checkbox');
//
//var label = document.querySelectorAll('.test__item:last-child .test__label')[0];
//label.insertBefore(testCheckbox_1, label.firstChild);
//
////Create p.test__answer2
//var testAnswer_2 = document.createElement('p');
//testAnswer_2.classList.add('test__answer');
//document.querySelector('.test__item:last-child').appendChild(testAnswer_2);
//
////Create label.test__label
//var testLabel_2 = document.createElement('label');
//testLabel_2.classList.add('test__label');
//testLabel_2.innerHTML = 'Вариант ответа 2';
//document.querySelectorAll('.test__item:last-child .test__answer')[1].appendChild(testLabel_2);
//
////Create input.checkbox_2
//var testCheckbox_2 = document.createElement('input');
//testCheckbox_2.setAttribute('type', 'checkbox');
//
//var label = document.querySelectorAll('.test__item:last-child .test__label')[1];
//label.insertBefore(testCheckbox_2, label.firstChild);
//
////Create p.test__answer3
//var testAnswer_3 = document.createElement('p');
//testAnswer_3.classList.add('test__answer');
//document.querySelector('.test__item:last-child').appendChild(testAnswer_3);
//
////Create label.test__label
//var testLabel_3 = document.createElement('label');
//testLabel_3.classList.add('test__label');
//testLabel_3.innerHTML = 'Вариант ответа 3';
//document.querySelectorAll('.test__item:last-child .test__answer')[2].appendChild(testLabel_3);
//
////Create input.checkbox_3
//var testCheckbox_3 = document.createElement('input');
//testCheckbox_3.setAttribute('type', 'checkbox');
//
//var label = document.querySelectorAll('.test__item:last-child .test__label')[2];
//label.insertBefore(testCheckbox_3, label.firstChild);
//
//
////=======================================================
////QUESTION 3
////=======================================================
//
////Create div.test__item
//var testItem_3 = document.createElement('div');
//testItem_3.classList.add('test__item');
//document.querySelector('.test__form').appendChild(testItem_3);
//
////Create p.test__question
//var testQuestion_3 = document.createElement('p');
//testQuestion_3.classList.add('test__question');
//testQuestion_3.innerHTML = 'Вопрос №3';
//document.querySelector('.test__item:last-child').appendChild(testQuestion_3);
//
////Create p.test__answer1
//var testAnswer_1 = document.createElement('p');
//testAnswer_1.classList.add('test__answer');
//document.querySelector('.test__item:last-child').appendChild(testAnswer_1);
//
////Create label.test__label
//var testLabel_1 = document.createElement('label');
//testLabel_1.classList.add('test__label');
//testLabel_1.innerHTML = 'Вариант ответа 1';
//document.querySelectorAll('.test__item:last-child .test__answer')[0].appendChild(testLabel_1);
//
////Create input.checkbox_1
//var testCheckbox_1 = document.createElement('input');
//testCheckbox_1.setAttribute('type', 'checkbox');
//
//var label = document.querySelectorAll('.test__item:last-child .test__label')[0];
//label.insertBefore(testCheckbox_1, label.firstChild);
//
////Create p.test__answer2
//var testAnswer_2 = document.createElement('p');
//testAnswer_2.classList.add('test__answer');
//document.querySelector('.test__item:last-child').appendChild(testAnswer_2);
//
////Create label.test__label
//var testLabel_2 = document.createElement('label');
//testLabel_2.classList.add('test__label');
//testLabel_2.innerHTML = 'Вариант ответа 2';
//document.querySelectorAll('.test__item:last-child .test__answer')[1].appendChild(testLabel_2);
//
////Create input.checkbox_2
//var testCheckbox_2 = document.createElement('input');
//testCheckbox_2.setAttribute('type', 'checkbox');
//
//var label = document.querySelectorAll('.test__item:last-child .test__label')[1];
//label.insertBefore(testCheckbox_2, label.firstChild);
//
////Create p.test__answer3
//var testAnswer_3 = document.createElement('p');
//testAnswer_3.classList.add('test__answer');
//document.querySelector('.test__item:last-child').appendChild(testAnswer_3);
//
////Create label.test__label
//var testLabel_3 = document.createElement('label');
//testLabel_3.classList.add('test__label');
//testLabel_3.innerHTML = 'Вариант ответа 3';
//document.querySelectorAll('.test__item:last-child .test__answer')[2].appendChild(testLabel_3);
//
////Create input.checkbox_3
//var testCheckbox_3 = document.createElement('input');
//testCheckbox_3.setAttribute('type', 'checkbox');
//
//var label = document.querySelectorAll('.test__item:last-child .test__label')[2];
//label.insertBefore(testCheckbox_3, label.firstChild);
