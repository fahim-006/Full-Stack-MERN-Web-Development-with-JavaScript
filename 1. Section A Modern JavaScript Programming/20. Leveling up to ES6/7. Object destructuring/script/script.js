let person = {
    firstName : "Mashrur",
    lastName : "Hossain",
    dob : "03-04-1997"
}

let {firstName: fname, lastName, dob} = person;

console.log(fname, lastName , dob);

//sending as a parameter

function display({firstName, lastName, dob}){
    console.log("function:"+firstName, lastName, dob);
}

display(person);