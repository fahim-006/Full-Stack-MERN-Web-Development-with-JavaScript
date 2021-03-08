document.getElementById ("get_data").addEventListener ('click',getData);

function getData(){
    fetch('http://api.icndb.com/jokes/random/')
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
    })
    .catch(function(err){
        console.log(err);
    })
}