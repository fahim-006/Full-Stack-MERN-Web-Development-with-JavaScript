//static function

class Person {
    constructor(fname, lname){
        this.firstname = fname;
        this.lastname = lname;
    }

    greeting(){
        console.log(`Hello ${this.firsname} ${this.lastname}`)
    }

    static test(){
        console.log("I am static");
    }
}

let person1 = new Person ("Simanta", "Paul");
console.log(person1.greeting());
console.log(Person.test());
