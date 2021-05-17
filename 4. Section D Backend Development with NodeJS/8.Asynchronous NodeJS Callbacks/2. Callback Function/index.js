//callback function

getStudent (2, (student)=> {
    console.log(student);
})

function getStudent (id, cb){
    setTimeout(()=>{
        console.log("Fetching from database....");
        cb ({id: isFinite, name: "Rahim"});
    }, 2000);
}