// require readline-sync
var readlineSync = require('readline-sync');
// require fs to read file
var fs = require('fs');

// read file db.json and push data into students array
var students = [];
function readFile() {
    var fileContent = fs.readFileSync('./db.json');
    students = JSON.parse(fileContent);
}
// option 1. Show students list
function showStudents() {
    for (var student of students) {
        console.log(student.name, student.age);
    }
}
// option 2. Add new student
function addNewStudent() {
    var name = readlineSync.question('Enter student name: ');
    var age = readlineSync.question('Enter student age: ');
    var student = {
        'name' : name,
        'age' : age
    }
    students.push(student);
}
// option 3. Save and exit
function saveAndExit() {
    var content = JSON.stringify(students);
    // push students date into db.json
    fs.writeFileSync('./db.json', content);
}
// show option
function showOption() {
    console.log('1. Show students list');
    console.log('2. Create a student');
    console.log('3. Save & Exit');
    var option = readlineSync.question('> ')
    switch (option){
        case '1' :
            showStudents();
            showOption();
            break;
        case '2' :
            addNewStudent();
            showOption();
            break;
        case '3' :
            saveAndExit();
            break;
        default :
            console.log('Option is wrong. Please enter again!');
            showOption();
            break;
    }
}
function main() {
    readFile()
    // show option
    showOption();
}
main();