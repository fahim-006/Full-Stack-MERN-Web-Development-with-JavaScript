let re;

re= /hellow/;
console.log(re);

re= /hellow/i;
console.log(re);

str = "Hellow world";

let result;
result = re.exec(str);
console.log(result);

//test()
let result1;
result1 = re.test(str);
console.log(result1);

//match() -> return s array or NLL
let result2;
result2 = str.match(re);
console.log(result2);

//searcg -> returns the index of the first match or -1
let result3;
str = "world";
result3 = str.search(re);

//replace
str = "again Hellow world";
let new_str = str.replace(re, "HI");
console.log(new_str);
