/*Phase 1, Week One Code Challenge*/

//Challenge 1: Student Grade Generator (Toy Problem)

//Prompt user to input student marks between 0-100
let studentMarks;
studentMarks = parseInt(prompt ("Kindly enter student marks between 0-100: "))
console.log(`The student has ${studentMarks}%`);


//Value entered is less than 0 and more than 100
if (studentMarks > 100 || studentMarks < 0 ) {
    console.log('Value entered is outside the desirable range')
}
//Value entered is within 0-100
else if (studentMarks > 0 && studentMarks <=100) {
  //console.log(studentMarks + ' is within range')

  //Allocate grades
                    //Grading System
  //Grade A: 80-100
  if (studentMarks > 79 && studentMarks <= 100 ){
    console.log(`Grade: A`)
  }
    //Grade B: 60-79
  else if (studentMarks >= 60 && studentMarks <= 79){
    console.log(`Grade: B`)
  }
    //Grade C: 50-59
  else if (studentMarks > 49 && studentMarks <= 59){
    console.log(`Grade: C`)
  }
    //Grade D: 40-49
  else if (studentMarks >= 40 && studentMarks <= 49){
    console.log(`Grade: D`)
  }
    //Grade E: 0-40
  else if (studentMarks < 40){
    console.log(`Grade: E`)
  }
}
//Value entered is not a number
else {
  console.log(`Value entered is not a number`)
}
