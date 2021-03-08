//print something without template literals
let a = "My name is Mashrur. \n I am from EWU";

console.log(a);

//print something with template literals
let b = `My name is Mashrur.
I am from EWU`;

console.log(b);

//displaying variable
let age = 36;
console.log("The age is(withour literals)= "+age);
//with template
let age1 = 36;
console.log(`The age is(with literals)= ${age}`);

let name = "rahim";
let age2 = "38";
let dob = "21 june 1999";

console.log(`name = ${name}
    age = ${age2}
    DOB = ${dob}
`)

//sum with template literals
let aa = 20;
let bb = 30;

console.log(`${aa} + ${bb} = ${aa+bb}`);