let searchBtn = document.querySelector('#searchBtn');
let searchUser = document.querySelector('#searchUser');
let ui = new UI();
let z;

searchBtn.addEventListener('click', (e) => {
    let userText = searchUser.value;
    
    if (userText != '') {
        //fetch repositor API
        fetch(`https://api.github.com/users`)
        .then(result1 => result1.json())
        .then(data1 => {
            //console.log(data);
            if (data1 == '') {
                // Show Alert
                ui.showAlert("User not Found!", "alert alert-danger");
            } else{
                for(var x in data1){
                    z = data1[x].login;

                    fetch(`https://api.github.com/users/${z}/repos`)
                    .then(result => result.json())
                    .then(data => {
                        for(var x1 in data){
                            if(userText.includes(data[x1].name)){
                                fetch(`https://api.github.com/users/${z}`)
                                .then(result => result.json())
                                .then(data => {
                                    //console.log(data);
                                    if (data.message == 'Not Found') {
                                        // Show Alert
                                        ui.showAlert("User not Found!", "alert alert-danger");
                                    } else {
                                        //Show Profile
                                        ui.showProfile(data);
                                    }
                                })
                            }
                                    
                        }
                    });
                }
                }
            })
    
        
    } else {
        // Clear Profile
        ui.clearProfile();
    }
});