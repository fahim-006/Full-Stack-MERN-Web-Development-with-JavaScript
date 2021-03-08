//Alternative of callback
//use in react
//.then

/*function createPerson (person){
    let perm = new Promise(function(resolve, reject){
        person.push(person);
        let error = false;
        if(!error){
            resolve();
        }else{
            reject('error!Something wrong');
        }
    })
    return prom;
}
*/

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

function createPerson (person){
    let prom = new Promise(function(resolve, reject){
        persons.push(person);
        let error = false;
        if(!error){
            resolve();
        }else{
            reject('error!Something wrong');
        }
    })
    return prom;
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

createPerson ({firstName: "Rony", lastName: "chy"})
    .then(getPerson)
    .catch(function(err){
        console.log(err);
    });
