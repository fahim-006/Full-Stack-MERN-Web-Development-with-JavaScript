var student = {
    name: "Rahim",
    age : 26,
    homeTown : "Dhaka"
};

var stu_JSON = {
    "name" : "Rahim",
    "age" : 26,
    "homeTOWN" : "Dhaka"
};

//object to json
var studnt_json  = JSON.stringify(student);
console.log(studnt_json)

//json to object
var student_new = JSON.parse(studnt_json);
console.log(student_new);