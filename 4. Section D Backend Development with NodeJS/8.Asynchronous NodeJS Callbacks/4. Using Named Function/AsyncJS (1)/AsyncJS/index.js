// Callback Function
console.log("Line 1");

getStudent(2, showStudent);

console.log("Line 2");

function showMarks(marks) {
    console.log(marks);
}

function showCourses(courses) {
    console.log(courses);
    getQuizMarks(courses.courses, showMarks);
}

function showStudent(student) {
    console.log(student);
    getCourses(student, showCourses);
}

function getStudent(id, cb) {
    setTimeout(() => {
        console.log("Fetching From Database...");
        cb({ id: id, name: "Rahim" });
    }, 2000);
}

function getCourses(student, cb) {
    setTimeout(() => {
        console.log("Student Courses from Database...");
        cb({ id: student.id, name: student.name, courses: ["JavaScript", "Python"] })
    }, 1500);
}

function getQuizMarks(courses, cb) {
    setTimeout(() => {
        console.log("Marks.....");
        cb({ [courses[0]]: 5, [courses[1]]: 3 })
    }, 3000)
}