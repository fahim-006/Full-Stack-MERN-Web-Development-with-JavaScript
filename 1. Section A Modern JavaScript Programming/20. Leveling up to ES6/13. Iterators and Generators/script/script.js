let iterable;
iterable = "Hello World";

console.log(iterable[Symbol.iterator]);

let iter = iterable[Symbol.iterator]();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log("Some code here");
console.log(iter.next());
