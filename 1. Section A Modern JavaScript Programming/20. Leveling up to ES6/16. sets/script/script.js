let mySets = new Set ([1,2,3,4,5,]);

mySets.add("Hello");
mySets.add(2);
mySets.delete(4);

console.log(mySets.size);
console.log(mySets.has(4));

for (x of mySets){
    console.log(x);
}

let iter = mySets.entries();

console.log(iter);

console.log(iter.next());
console.log(iter.next());

for(x of mySets.entries()){
    console.log(x);
}

let oter = [...mySets.entries()];
console.log(iter);

mySets.forEach(value => console.log(value));
