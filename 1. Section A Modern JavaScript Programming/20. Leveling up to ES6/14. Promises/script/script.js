let prom = new Promise((resolve, reject) => {
    let a = 1+2 ;

    if(a===2){
        resolve("success");
    }else{
        reject("Failed");
    }
});

//.then .catch

prom.then ((message)=>{
    console.log("I am from then" + message);
}).catch((message)=>{
    console.log("I am from catch" + message);
});

//promise is asynchronous

let prom1 =  new Promise((resolve, reject) => {
    let a;

    setTimeout(()=>{
        a = 1+1;
        if(a==2){
            resolve("success");
        } else{
            reject("failed");
        }
    },4000);
});

prom1.then ((message) =>{
    console.log("I am from then" + message);
}).catch((message)=>{
    console.log("I am from catch" + message);
})

console.log("after promise"); // will execute before