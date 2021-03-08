let persons = [
    {
        firstName: "Simanta",
        lastName: "Paul"
    },
    {
        firstName: "Fazle",
        lastName: "Rabbi"
    }
]

function createPerson(person){
    setTimeout(function(){
        persons.push(person);
    },4000);
}

function getPerson(){
    setTimeout(function(){
        let output = "";
        persons.forEach(function(person) {
            output += `<li> ${person.firstName} ${person.lastName}</li>` 
        });
        document.getElementById('output').innerHTML = output;
        1000 });
}

createPerson ({firstName: "Rony", lastName: "chy"})
getPerson();
