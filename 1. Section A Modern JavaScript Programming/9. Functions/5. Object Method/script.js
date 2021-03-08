let person = {
    firstName: "Fazle",
    LastName: "Rabbi",
    DOB: "9-10-1995",

    fullName:function(){
        return `${this.firstName} ${this.LastName}`;
    }
}

console.log(person.firstName);
console.log(person.fullName());