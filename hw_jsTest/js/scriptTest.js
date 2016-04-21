function newElement(elem, elemClass) {
var elem = document.createElement(elem);
elem.classList.add(elemClass);
return elem;
};

var wrapper = newElement('div', 'wrapper');

document.body.classList.add('body');

var parentBody = document.querySelectorAll('.body');

parentBody[0].appendChild(wrapper);

