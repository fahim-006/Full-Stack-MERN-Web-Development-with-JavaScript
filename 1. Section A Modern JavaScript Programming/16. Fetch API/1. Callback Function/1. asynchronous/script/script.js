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

function createPerson(person, callback){
    setTimeout(function(){
        persons.push(person);
        callback();
    },2000);
}

function getPerson(){
    setTimeout(function(){
        let output = "";
        persons.forEach(function(person) {
            output += `<li> ${person.firstName} ${person.lastName}</li>` 
        });
        document.getElementById('output').innerHTML = output;
        500 });
}

createPerson ({firstName: "Rony", lastName: "chy"},getPerson);
