//document.getElementByID()

let val;
val = document.getElementById('document-title');
console.log(`getElementById('document-title') = ${val}`);

val = document.getElementById('document-title').id;
console.log(`getElementById('document-title').id = ${val}`);

val = document.getElementById('document-title').className;
console.log(`getElementById('document-title').className = ${val}`);

//changing style
document.getElementById('document-title').style.background = '#333';
document.getElementById('document-title').style.color = '#fff';
document.getElementById('document-title').style.padding = '15px';
document.getElementById('document-title').style.display = 'block';

//changing content
document.getElementById('document-title').textContent = "NEW TITLE";
document.getElementById('document-title').innerHTML = "<i>AGAIN</i>";

//ShortCUT
val = document.getElementById('document-title');
val.innerText = "HA HA HA";

//QuerySelector
val = document.querySelector('#document-title');
val  = document.querySelector('.document-title');
val = document.querySelector('h3');
val = document.querySelector('ol'); //1st OL will be affected if more than one ol is available

//using parent child
val =  document.querySelector('ol');
val = document.querySelector('ul li');
val.style.background = 'red';
val.style.color = 'white';

val = document.querySelector('li:last-child');
val = document.querySelector('li:nth-child(2)');
val.innerText = "HELLOW";