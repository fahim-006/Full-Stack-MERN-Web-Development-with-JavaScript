// Object Method
let person = {
    firstname: "Fazle",
    lastname: "Rahat",
    dob: "9-10-1995", //number, string, date, array, object

    fullname: function() { //Method
        return `${this.firstname} ${this.lastname}`;
    }

}

console.log(person.firstname);
console.log(person.fullname());

let str = "Bohubrihi";
console.log(str.length);
console.log(str.split());