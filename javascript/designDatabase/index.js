// classes data
var classes = [
    {
        id : 0,
        name : '1A',
        teacher : 0,
        students : [
            0,
            1,
            2,
        ]
    },
    {
        id : 1,
        name : '2A',
        teacher : 1,
        students : [
            3
        ]
    },
    {
        id : 2,
        name : '3A',
        teacher : 2,
        students : [
           4
        ]
    },
    {
        id : 3,
        name : '4A',
        teacher : 3,
        students : [
            5
        ]  
    }
];
// teachers data
var teachers = [
    {id : 0, name : 'Hong', age : 50},
    {id : 1, name : 'Hanh', age : 52},
    {id : 2, name : 'Tam', age : 45},
    {id : 3, name : 'Quan', age : 36}
];
// students data
var students = [
    {id : 0, name : 'Manh', age : 26, class:0},
    {id : 1, name : 'Hung', age : 28, class : 0},
    {id : 2, name : 'An', age : 19, class : 0},
    {id : 3, name : 'Huong', age : 24, class : 1},
    {id : 4, name : 'Hai', age : 25, class : 2},
    {id : 5, name : 'Khanh', age : 24, class : 3}

];

// get students by class name
getStudentsInClass = className => {
    // find objects they have class name = finding class
    var classObject = classes.find((obj)=>{
        return obj.name == className;
    });
    // filter students in that class
    var studentsInClass =  students.filter((student)=>{
        return student.class == classObject.id;
    });
    return studentsInClass;
}
var studentsInClass =  getStudentsInClass('1A');
for (st of studentsInClass) {
    console.log(st.name);
}