const fs = require('fs');
fs.readFile('./files/input.txt', 'utf-8', (error, text) => {
    if (error) {
        console.log(error);
    } else {
        console.log(text);
        fs.writeFile('./files/output2.txt', text, 'utf-8', (error) => {
            if (error) {
                console.log(error);
            }
        })
    }
})