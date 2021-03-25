let a = Symbol();
let b = Symbol();

console.log(a==b); //false

let person = {
    name : "Mashrur",
    age : 25,
    [a] : "Hellow World"
}

console.log(person);
console.log(Object.getOwnPropertyNames(person)); //[a] opabe na

console.log(Object.getOwnPropertySymbols(person)); //[a] opabe na
console.log(Object.keys(person));
console.log(JSON.stringify(person)); // name and age stringify hobe

for (x in person){
    console.log(x);
}

let sym1 = Symbol ("Hello");
let sym2 = Symbol ("World");

console.log(sym1 ==  sym2);