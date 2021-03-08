//document.getElementByClassName()

let list = document.getElementsByClassName('sample-class');
list[0].style.background="red";
list[0].style.color = 'white';
list[0].style.padding = '10px';
list[0].textContent = "HEllow Mashrur"

//document.getElementByTagName
list = document.querySelector('ol').getElementsByTagName('li');
let lis = Array.from(list);
lis.forEach(function(item){
    console.log(item);
})

//access class
list = document.querySelectorAll('.sample-class');
console.log(list);

//access li
list = document.querySelectorAll('li'); //joto li ache ekbare asbe
console.log(list);

//access li inside a ul
list = document.querySelectorAll('ul li');
console.log(list);

list.forEach(function(item){
    console.log(item);
})

//selecting odd and event Elements
let liOdd = document.querySelectorAll('li:nth-child(odd)');
let liEven = document.querySelectorAll('li:nth-child(even)');

liEven.forEach(function(item){
    item.style.background = 'gray';
});

liOdd.forEach(function(item){
    item.style.background = 'red';
});

/* querySelectorAll creates array */

