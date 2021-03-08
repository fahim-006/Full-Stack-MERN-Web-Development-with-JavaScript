// FUnction parameter/argument

function saySomenthing(fname = "Fazle", lname = "Rahat") {
    console.log(`Hello ${ fname } ${ lname }!`);
}

//alert("Hello");
//let val = "Simanta";
let firstname = "Simanta";
let lastname = "Paul";

saySomenthing(firstname, lastname);


function addNum(a=0, b=0) {
    console.log(a+b);
}

addNum(4,5);
addNum(3.6, 2.3);