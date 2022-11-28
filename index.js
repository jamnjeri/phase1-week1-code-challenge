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
  let basicIncome;
  let taxableIncome;
  let totalExemption;
  let totalDeductions;
  let grossIncome;
  let duration;
  
  let payeTotal;
  let nssfMonthlyRates = 400;
  let nhifFinalDeduction;
  let nhifRelief;
  let personalRelief = 2400;
  let netPay;
  
  //Function to get basic salary from user
  function basicSalaryEntry(){
    //Request for entry of salary
    basicIncome = parseInt(prompt ("Kindly enter your Basic Salary: "))
    //Check if it's monthly or yearly
    let durationOne = prompt (`Is the entered income earned monthly? (yes/no):`)
    duration = durationOne.toLowerCase();
    //Convert to monthly where necessary 
    if (duration === `yes`){
      console.log ("Monthly")
    }
    else if (duration === `no`){
      console.log ("Yearly")
      basicIncome = basicIncome/12;
      console.log (basicIncome);
    }
    else {
      console.log ("Invalid value entered");
    }
    return basicIncome
  }
  basicSalaryEntry();
  console.log(basicIncome)
  
  function calculateTaxablePay(basicIncome){
    taxableIncome = basicIncome - nssfMonthlyRates;
    console.log(taxableIncome);
    return taxableIncome;
  }
  
  //Check if person qualifies for PAYE (Taxable pay > 24,000)
  function monthlyPAYE(monthlyTaxablePay){
    //Range 1 (First 24,000)
    if (monthlyTaxablePay > 0 && monthlyTaxablePay <=24000){
      let payeTotal = 0.1 * monthlyTaxablePay;
      
      console.log(payeTotal);
      return payeTotal;
    }
    else if (monthlyTaxablePay > 24000 && monthlyTaxablePay <= 32333){
      //Range 1 (First 24,000  - 10%)
      let range1 = 0.1 * 24000;
      let incomeBalance = monthlyTaxablePay- 24000;
      //Range 2 (Second, 24,001 - 32,333  - 25%)
      let range2 = 0.25 * incomeBalance;
      payeTotal = range1 +range2;
      
      console.log(payeTotal);
      return payeTotal;
    }
    else if (monthlyTaxablePay > 32333){
      //Range 1 (First 24,000  - 10%)
      let range1 = 0.1 * 24000;
      let incomeBalance = monthlyTaxablePay- 24000;
      
      //Range 2 (Second, 24,001 - 32,333  - 25%)
      let range2 = 0.25 * 8332;
      payeTotal = range1 +range2;
  
      //Range 3 (> 32,333    - 30%)
      incomeBalance = monthlyTaxablePay - 24000 - 8332;
      let range3 = 0.3 * incomeBalance;
      payeTotal = range1 + range2 +range3;
      
      console.log(payeTotal);
      return payeTotal;
    }
    else {
      console.log("Not in range")
    }
    return payeTotal
  }
  
  //Calculate NHIF deductions
  function nhifDeductions(basicSalary){
    if (basicSalary >=0 && basicSalary < 6000){
      nhifFinalDeduction = 150
    }
    else if (basicSalary >=6000 && basicSalary < 8000){
      nhifFinalDeduction = 300
    }
    else if (basicSalary >=8000 && basicSalary < 12000){
      nhifFinalDeduction = 400
    }
    else if (basicSalary >=12000 && basicSalary < 15000){
      nhifFinalDeduction = 500
    }
    else if (basicSalary >=15000 && basicSalary < 20000){
      nhifFinalDeduction = 600
    }
    else if (basicSalary >=20000 && basicSalary < 25000){
      nhifFinalDeduction = 750
    }
    else if (basicSalary >=25000 && basicSalary < 30000){
      nhifFinalDeduction = 850
    }
    else if (basicSalary >=30000 && basicSalary < 35000){
      nhifFinalDeduction = 900
    }
    else if (basicSalary >=35000 && basicSalary < 40000){
      nhifFinalDeduction = 950
    }
    else if (basicSalary >=40000 && basicSalary < 45000){
      nhifFinalDeduction = 1000
    }
    else if (basicSalary >=45000 && basicSalary < 50000){
      nhifFinalDeduction = 1100
    }
    else if (basicSalary >=50000 && basicSalary < 60000){
      nhifFinalDeduction = 1200
    }
    else if (basicSalary >=60000 && basicSalary < 70000){
      nhifFinalDeduction = 1300
    }
    else if (basicSalary >=70000 && basicSalary < 80000){
      nhifFinalDeduction = 1400
    }
    else if (basicSalary >=80000 && basicSalary < 90000){
      nhifFinalDeduction = 1500
    }
    else if (basicSalary >=90000 && basicSalary < 100000){
      nhifFinalDeduction = 1600
    }
    else if (basicSalary >=100000){
      nhifFinalDeduction = 1700
    }
    else {
      console.log("Value outside range.")
    }
  console.log(nhifFinalDeduction);
  return nhifFinalDeduction
  }
  
  //Calculate NHIF Relief
  function calculateNhifRelief(nhifFinalDeduction){
    nhifRelief = 0.15 * nhifFinalDeduction;
    console.log(nhifRelief);
    return (nhifRelief)
  }
  
  //Calculate Total Deductions
  //Total deductions = P.A.Y.E - NHIF Relief - Personal Relief
  function totalDeductionsCalculation(payeTotal, nhifRelief, personalRelief){
    totalDeductions = payeTotal - nhifRelief - personalRelief;
    console.log(totalDeductions);
    return(totalDeductions)
  }
  
  //Calculate Final Pay
  //Final Pay = Taxable Income - Total Deductions - NHIF Final Deductions
  function finalPay(taxableIncome, totalDeductions, nhifFinalDeduction){
    netPay = taxableIncome - totalDeductions - nhifFinalDeduction;
    console.log(netPay);
    return (netPay)
  }
  
  calculateTaxablePay(basicIncome);
  monthlyPAYE(taxableIncome);
  nhifDeductions(basicIncome);
  calculateNhifRelief(nhifFinalDeduction);
  totalDeductionsCalculation(payeTotal, nhifRelief, personalRelief);
  finalPay(taxableIncome, totalDeductions, nhifFinalDeduction);
  
  
  
  
  
  


