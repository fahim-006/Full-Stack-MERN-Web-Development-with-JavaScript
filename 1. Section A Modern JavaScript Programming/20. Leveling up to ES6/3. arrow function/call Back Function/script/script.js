//Ekta function ke arekta function er parameter hisabe pass kora

let numbers = [1,2,3,4,5,6];

let printAll = (item) => {
    console.log(item);
}

numbers.forEach(printAll);

let squareAll = (item)=> item * item;

let squareNum = numbers.map(squareAll); // array hobe map use korar karone with key

console.log(squareNum);