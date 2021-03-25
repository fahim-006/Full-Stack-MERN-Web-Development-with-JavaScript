let number = [23,1,0,-1];
console.log(Math.max(...number));
//console.log(math.max(number)); will nor work

let person = ["Mashrur", "hossain"];

let test = (fname, lname) => {
    console.log(`Hello ${fname} and ${lname}`);
}

test (...person);