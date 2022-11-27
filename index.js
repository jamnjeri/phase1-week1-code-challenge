/*Phase 1, Week One Code Challenge*/

//Challenge 1: Student Grade Generator 

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


//Challenge 2:  Speed Detector 
//Write a program to monitor speed of vehicle
//Speed < 70km/h --> "okay"
//Speed > 70km/h --> demerits: 1 demerit for every 5km/h
//More than 12 demerits --> "License suspended"

function speedDetector(speedOfVehicle){
    let demerits;
    //Speed is a scalar quantity hence only has magnitude not direction
    speedOfVehicle = Math.abs(speedOfVehicle)
    console.log(`Speed = ${speedOfVehicle} km/h`)
    
    if (speedOfVehicle <= 70){
      console.log("Ok")
    }
    else if (speedOfVehicle > 70){
        //console.log("Speed above 70")
        demerits = Math.floor((speedOfVehicle -70)/5)
        console.log(`Demerit Points: ${demerits}`)
        if (demerits > 12){
            console.log("License Suspended")
        }
        else{
            console.log(`Demerit Points: ${demerits}`)
        }
    }
}


  //Challenge 3: Net Salary Calculator 
  //Write a program to calculate an individual's Net Salary 
  //By getting the inputs of basic salary and benefits.
  //Calculate the payee(i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary and net salary
  //NB: Use KRA, NHIF and NSSF values provided in the given links 