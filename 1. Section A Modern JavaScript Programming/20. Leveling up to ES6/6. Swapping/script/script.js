let a = 8;
let b = 20;

console.log(`before: a= ${a} and b= ${b}`);
let temp = a;
a = b;
b=temp;

console.log(`after: a= ${a} and b= ${b}`);

//instead of it we can use

let c = 8;
let d;
d=20;
console.log(`before: c= ${c} and d= ${d}`);
[c,d]=[d,c];

console.log(`after" c= ${c} and d= ${d}`);
