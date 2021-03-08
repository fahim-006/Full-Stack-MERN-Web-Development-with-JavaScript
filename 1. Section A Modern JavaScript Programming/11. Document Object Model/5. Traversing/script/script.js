let val;
let list = document.querySelector('ul');
let listItem = document.querySelector('ul li:first-child');


val = list;
val = listItem;

//GET child node
val = list;
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[1];
val = list.childNodes[1].nodeName;
val = list.childNodes[0].nodeType;

val = list.childNodes;
val = list.children;
val = list.children[1];
list.children[0].textContent = "HELLO";
val = list.children[1].children[0].href;

val = list.firstChild;
val = list.firstElementChild;
val = list.lastChild;
val = list.lastElementChild;

val = list.childElementCount;
val = listItem;
val = listItem.parentElement;
val = listItem.parentNode;
val = listItem.parentElement.parentElement;
val = listItem.nextSibling.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextSibling.nextSibling;

val = document.querySelector('ul li:last-child');
val = val.previousSibling;
val = val.previousElementSibling;

console.log(val);


