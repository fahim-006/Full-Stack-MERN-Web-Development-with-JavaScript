var age =  prompt("Enter age: ");

age = parseInt(age);

if(age >50 && age<=100){
    console.log("old");
}
else if(age >30 && age<=50){
    console.log("working");
}
else if(age >=18 && age<=30){
    console.log("young");
}
else if(age >0 && age<18){
    console.log("under 18");
}
else{
    console.log("invalid");
}

