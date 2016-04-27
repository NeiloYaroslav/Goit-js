/*jslint devel: true, white: true, sloppy: true*/











































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
