// Given the <body> element as variable body,
// access the <main> node and log to the console.
const body = document.querySelector('body');
console.log('Main Node: ', body.children[0]);

// Given the <ul> element as variable ul,
// access <body>  and log to the console.
const ul = document.querySelector('ul');
console.log('Body Node: ', ul.parentNode.parentNode);

// Given the <p> element as var p,
// access the 3rd <li>  and log to the console.
const p = document.querySelector('p');
const u = p.previousElementSibling;
console.log('3rd li Node: ', u.children[2]);