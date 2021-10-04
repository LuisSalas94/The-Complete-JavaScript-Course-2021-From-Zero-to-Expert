//Selection Elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
console.log('HEADER', header);
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');

const allButtons = document.getElementsByTagName('button');
console.log(allButtons);
console.log(document.getElementsByClassName('btn'));

//Creating and inserting elements
const message = document.createElement('div');
message.classList.add('cookie-message');
/* message.textContent = 'We use cookied to inprove functionality and analytics.'; */

message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class = "btn btn--close-cookie">Got it</button> ';
header.append(message.cloneNode(true));
header.before(message);
/* header.after(message); */

//delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

/* Styles, Attributes and Classes */
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.color);
console.log(message.style.backgroundColor);
