// Asynchronous Programming
// AJAX = Asynchronous JavaScript And XML
// Get data without loading the page

document.getElementById('get_data').addEventListener('click', loadJokes);

function loadJokes() {

    let number = document.getElementById('numberJokes').value;
    // Create XHR Object (Xml Http Request)
    let xhr = new XMLHttpRequest();

    // Open
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onprogress = function(){
        document.getElementById('output').innerHTML = "<h3> LOADDING... </h3>";
    }

    xhr.onload = function () {
        // HTTP statuses
        // 200: "OK"
        // 403: "Forbidden"
        // 404: "Not Found"
        if (this.status === 200) {
            let data = JSON.parse(this.responseText);
            let jokes = data.value;

            let output = "<ol>";
            jokes.forEach(function(item){
                output += `<li> ${item.joke}</li>`;
            });
            output+= "</ol>";

            document.getElementById('output').innerHTML = output;
        }
    }

    //xhr.onreadystatechange = function () {
    //     // readyState Values
    //     // 0: request not initialized
    //     // 1: server connection established
    //     // 2: request received
    //     // 3: processing request
    //     // 4: request finished and response is ready
    //     //console.log(this.readyState);
    //     if (this.status === 200 && this.readyState === 4) {
    //         console.log(this.responseText);
    //     }
    // }

    xhr.send();

    //console.log(xhr);
}