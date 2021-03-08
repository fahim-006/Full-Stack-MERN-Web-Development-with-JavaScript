//class is a template for creating object

class Person{
    constructor (fname, lname, birthday){
        this.firstname = fname;
        this.lastname = lname; 
        this.dob = birthday;
    }

    calculateAge(){
        let birthday = new Date(this.dob);
        let diff = Date.now() - birthday.getTime();
        let ageDate = new Date(new Date(diff));
        return Math.abs (ageDate.getUTCFullYear()-1970);
    }

    fullname(){
        console.log(this.firstname, this.lastname)
    }
}

let Person1 = new Person ("Mashrur", "Hossain", "11-12-97");
let Person2 = new Person ("Shakil", "Mahmud", "11-2-97");
let Person3 = new Person ("Rony", "Chy", "1-12-97");

console.log(Person1.calculateAge());
console.log(Person2.calculateAge());
console.log(Person3.calculateAge());

console.log(Person1.fullname());
console.log(Person2.fullname());
console.log(Person3.fullname())