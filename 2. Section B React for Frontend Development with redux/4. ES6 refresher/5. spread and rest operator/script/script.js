// Spread Operator
let numbers= [1 ,2 ,5, 7]
let numbers2 = [7, 8, 9]
let arr = [ ...numbers, ...numbers2, 6, 7, 10];

let person = {
  name : "x",
  age : 45
}
console.log(arr);

let another = { ...person, nationality: "Bangladeshi"} 
console.log(another);


// Rest Operator
let something = (...numArr) => console.log(numArr);

something(1, 3, 5, 8);