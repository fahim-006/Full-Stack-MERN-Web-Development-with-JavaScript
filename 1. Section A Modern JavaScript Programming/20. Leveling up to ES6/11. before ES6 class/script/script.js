function person (age, name){
    this.age = age;
    this.name = name;
}

let person1 = new person (25, "Mashrur");

console.log(person1);

person.prototype.getName = function(){
    //console.log(this.name); // eitar bodole nicher line =likha jaay
    console.log(person1.getName());
}

//ES6

class Person{
    constructor(age, name){
        this.age = age;
        this.name = name;
    }


}

let person2 = new Person (25, "Hossain");
console.log(person2);
