// Math Object
val = Math.PI;
val = Math.E;
val = Math.round(23.5);
val = Math.ceil(3.2);
val = Math.floor(3.9);
val = Math.sqrt(81);
val = Math.abs(-56);
val = Math.pow(2, 8);
val = Math.min(2,3,1,0,-8);
val = Math.max(-1,2,4,5);
val = Math.random();

val = Math.floor(Math.random() * 20 + 1);



console.log(val);


// Date Object
let val;
let today = new Date();

val = today;
val = today.toString();

let birthday = new Date('11-2-1995 8:25:00');
birthday = new Date('November 2 1995');
birthday = new Date('11/2/1995');
val = birthday;
val = today.getMonth(); // Start from 0
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();
// timestamp -> amount of time past since Jan 1st 1970

birthday.setMonth(0);
birthday.setDate(12);
birthday.setFullYear(1996);
birthday.setHours(3);

console.log(val);
console.log(birthday);