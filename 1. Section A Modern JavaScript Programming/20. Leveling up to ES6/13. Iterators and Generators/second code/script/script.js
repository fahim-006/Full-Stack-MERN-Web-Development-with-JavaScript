let iterable;
iterable = [1,2,3,4,5];

console.log(iterable[Symbol.iterator]);

let iter = iterable[Symbol.iterator]();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log("Some code here");
console.log(iter.next());
