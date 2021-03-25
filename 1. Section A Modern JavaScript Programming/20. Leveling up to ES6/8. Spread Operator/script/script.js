let str = "bohubrihi";
let newStr = [...str];

let fruit1 = ["Apple", "Pine-apple", "Mango"];
let fruit2 = ["orange", "Grape"];

let newFruit = "JackFruit";

let newArr = [...fruit1, ...fruit2, newFruit];

console.log(newArr);

let person = {
    fname : "Mashrur",
    lname : "Hossain"
}

let newPerson = {...person, dob: "08-26-1995"}
console.log(newPerson);