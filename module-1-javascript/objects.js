let student = {
    name: "Priya",
    marks: 72,
    attendance: 82,

    isPassed(){
        if (this.marks > 40){
            return true;
        }
        else{
            return false;
        }
    },

    addGraceMarks(extraMarks){
        this.marks = this.marks + extraMarks;

        if(this.marks > 100){
            this.marks = 100;
        }
    },

    updateAttendance(percent){
        this.attendance = percent;
    },

    getResultSummary(){
        let result = "";
        if (this.isPassed){
            result = "Pass"
        }
        else{
            result = "Fail"
        }

        result = this.name + " | Grade : " + this.getGrade() + " | Result: " + result ; 
        return result;
    }
}

let {name,marks,attendance,username} = student;

console.log(name)
console.log(marks);
console.log(attendance);
console.log(username);