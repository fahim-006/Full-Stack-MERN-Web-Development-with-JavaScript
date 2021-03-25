let myMap = new Map(
    [
        ['first key', 10],
        ['second key', 'Bohubrihi']
    ]
);

myMap.set ('thirdKey', "Hellow World");


console.log(myMap);
console.log(myMap.get('first key')); // will show thw value
console.log(myMap.has("dfg")); //false

console.log(myMap.size);

for(let x of myMap){
    console.log(x);
}

for(let [x,y] of myMap){
    console.log(x,y);
}

//key access

for(let x of myMap.keys()){
    console.log(x);
}


 myMap.forEach((x, y) => {
     console.log(x,y);
    
 })
let arr = Array.from(myMap);
let arr1 = Array.from(myMap.keys());
let arr2 = Array.from(myMap.values());
console.log(arr);