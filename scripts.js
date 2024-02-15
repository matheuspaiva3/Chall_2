let students = [
    {
        name: "Matheus",
        firstTestGrade: 8,
        secondTestGrade: 7,
    },
    {
        name: "Josh",
        firstTestGrade: 5,
        secondTestGrade: 6,
    },
    {
        name: "Mayk",
        firstTestGrade: 9,
        secondTestGrade: 8,
    },
    {
        name: "Saber",
        firstTestGrade: 7,
        secondTestGrade: 7,
    }
]
function calculateAverage(student) {
    let average = (student.firstTestGrade + student.secondTestGrade) / 2;
    if (average >= 7){
        alert(`The average of ${student.name} is ${average}.\n Congratulations, ${student.name}! You have been approved!`)
    }else{
        alert(`The student average is ${average}.\n I'm sorry, ${student.name}. You have been disapproved.`)
    }
}
for(let student of students){
    calculateAverage(student);
}