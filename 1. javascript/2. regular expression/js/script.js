function change(){
    let select = document.getElementById('selectionExp');
    
    if(select.value != ""){
        let UserInput;
        let re;
        let result
        
        if(select.value == 'email'){
            re = /^([a-zA-Z0-9].?)+[^.]@([a-zA-Z0-9].?)+[^.]$/ ;
            UserInput = prompt("Enter expression");
            result = re.test(UserInput);
            if(result == true)
                document.getElementById('ans').innerHTML="Valid Email";
            else{
                document.getElementById('ans').innerHTML="Not Valid Email"
            }
            select.value = '';
            //document.location.reload();
        }else if(select.value == 'mobile'){
            re = /^(?:\+?88|0088)?01[15-9]\d{8}$/;
            UserInput = prompt("Enter expression");
            result = re.test(UserInput);
            if(result == true)
                document.getElementById('ans').innerHTML="Valid Phone Number";
            else{
                document.getElementById('ans').innerHTML="Not Valid Phone Number"
            }
            select.value = '';
        }else if(select.value =='PostalCode'){
            re = /^[0-9]{4}$/;
            UserInput = prompt("Enter expression");
            result = re.test(UserInput);
            if(result == true)
                document.getElementById('ans').innerHTML="Valid Postal Code";
            else{
                document.getElementById('ans').innerHTML="Not Valid Postal Code"
            }
            select.value = '';
        }
    }
}
