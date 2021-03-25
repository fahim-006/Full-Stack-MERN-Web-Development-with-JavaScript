let fruits = ['apple', 'grape', 'mangoo', 'jackfruit'];

let [f] = fruits;
console.log(f);

let [first, second, ...third] = fruits;

console.log(first);
console.log(second);
console.log(third);

let person = {
    fname : "Mashrur",
    lname : "Hossain",
    dob : "08-26-1995"
}

let {fname, ...lname} = person;

console.log(fname);
console.log(lname);

let test = (name, ...numbers)=>{
    console.log(name);
    console.log(numbers);
}

test("Mashrur", 67,3,3,);
let moreNumber = [78,1,2,1,5];
test ("Hossaion", ...moreNumber);