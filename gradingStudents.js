function gradingStudents(grades) {
    // Write your code here
    for (let i = 0; i < grades.length; i++) { 
        let mod5=grades[i]%5;       
        if ((grades[i] >= 38)&&(mod5>=3)){
            grades[i]=grades[i]+(5-(mod5));
        }
    }
    return grades;
}
