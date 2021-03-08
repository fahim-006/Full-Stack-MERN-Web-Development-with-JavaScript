//sub class
//inheritance

class Person{
    constructor(fname, lname) {
        this.firstname = fname;
        this.lastname = lname;
    }

    greeting(){
        return `Hellow ${this.firstname} ${this.lastname}`;
    }
    fullName1(){
        console.log(this.firstname, this.lastname);
    }
}

class customer extends Person{
    constructor(fname, lname, phone, membership){
        super (fname, lname);
        this.phone = phone,
        this.membership = membership;
    }

    fullName(){
        console.log(this.firstname, this.lastname);
    }
}

let person1 = new Person ("Fazzk", "Rahat");
console.log(person1);

console.log(person1.greeting());
console.log(person1.fullName1());

let customer1 = new customer ("Rony", "Chy", "0177778897996", "123" );

console.log(customer1);
console.log(customer1.greeting());
console.log(customer1.fullName());