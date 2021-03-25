/*fetch('https://api.icndb.com/jokes/random/5000')
    .then(response => response.json())
    .then(data => console.log(data));

console.log("Hello"); //hello age execute hobe*/

async function getJokes(){
    let response1 = await fetch('https://api.icndb.com/jokes/random/5000');
    let data = await response1.json();
    return data;
}

getJokes()
    .then(res=>{
        console.log(res);
    })