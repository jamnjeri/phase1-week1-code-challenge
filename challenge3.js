 //Challenge 3: Net Salary Calculator 
  //Write a program to calculate an individual's Net Salary 
  //By getting the inputs of basic salary and benefits.
  //Calculate the payee(i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary and net salary
  //NB: Use KRA, NHIF and NSSF values provided in the given links 


  // Step 1: Get the basicSalary
  // Step 2: Get the NSSF Monthlly Rates (Fixed at 400 according to Old Rates)
  // Step 3: Calculate Taxable Income (Taxable Income = Basic Salary - NSSF)
  // Step 4: Calculate P.A.Y.E (According to aren P.A.Y.E table)
  // Step 5: Calculate NHIF from NHIF rates
  // Step 6: Calculate NHIF Relief (15% of NHIF)
  // Step 7: Calculate Total Deductions
  // Step 8: Calculate Net Salary


let basicIncome;
let taxableIncome;
let totalDeductions;
let duration;

let payeTotal;
let nssfMonthlyRates = 400;   //Assumed to be fixed at 400 according to Old monthly NSSF rates
let nhifFinalDeduction;
let nhifRelief;
let personalRelief = 2400;
let netPay;

//Function to get basic salary from user
function basicSalaryEntry(){
  //Request for entry of salary
  basicIncome = Math.abs(parseInt(prompt ("Kindly enter your Basic Salary: ")))
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
    //console.log (basicIncome);
  }
  else {
    console.log ("Invalid value entered");
  }
  return basicIncome
}
basicSalaryEntry();
console.log(`Basic Income: ${basicIncome}`)

function calculateTaxablePay(basicIncome){
  taxableIncome = basicIncome - nssfMonthlyRates;
  console.log(`Taxable Income: ${taxableIncome}`);
  return taxableIncome;
}

//Check if person qualifies for PAYE (Taxable pay > 24,000)
function monthlyPAYE(monthlyTaxablePay){
  //Range 1 (First 24,000)
  if (monthlyTaxablePay > 0 && monthlyTaxablePay <=24000){
    payeTotal = 0.1 * monthlyTaxablePay;
    
    console.log(`P.A.Y.E Total: ${payeTotal}`);
    return payeTotal;
  }
  else if (monthlyTaxablePay > 24000 && monthlyTaxablePay <= 32333){
    //Range 1 (First 24,000  - 10%)
    let range1 = 0.1 * 24000;
    let incomeBalance = monthlyTaxablePay- 24000;
    //Range 2 (Second, 24,001 - 32,333  - 25%)
    let range2 = 0.25 * incomeBalance;
    payeTotal = range1 +range2;
    
    console.log(`P.A.Y.E Total: ${payeTotal}`);
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
    
    console.log(`P.A.Y.E Total: ${payeTotal}`);
    return payeTotal;
  }
  else {
    console.log("P.A.Y.E Total: 0")
    payeTotal = 0;
    return payeTotal;
  }
  //return payeTotal
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
console.log(`NHIF Deduction: ${nhifFinalDeduction}`);
return nhifFinalDeduction
}

//Calculate NHIF Relief
function calculateNhifRelief(nhifFinalDeduction){
  nhifRelief = 0.15 * nhifFinalDeduction;
  console.log(`NHIF Relief: ${nhifRelief}`);
  return (nhifRelief)
}

//Calculate Total Deductions
//Total deductions = P.A.Y.E - NHIF Relief - Personal Relief
function totalDeductionsCalculation(payeTotal, nhifRelief, personalRelief){
  totalDeductions = payeTotal - nhifRelief - personalRelief;
  //console.log(`Check ${totalDeductions} = ${payeTotal} - ${nhifRelief} - ${personalRelief}`)
  if (totalDeductions <=0){
  totalDeductions = 0;
  console.log(`Total Deductions: ${totalDeductions}`);
  return totalDeductions
  }
  else {
  console.log(`Total Deductions: ${totalDeductions}`);
  return totalDeductions
  }
}

//Calculate Final Pay
//Final Pay = Taxable Income - Total Deductions - NHIF Final Deductions
function finalPay(taxableIncome, totalDeductions, nhifFinalDeduction){
  netPay = taxableIncome - totalDeductions - nhifFinalDeduction;
  console.log(`Net Pay: ${netPay}`);
  return netPay
}

calculateTaxablePay(basicIncome);
monthlyPAYE(taxableIncome);
nhifDeductions(basicIncome);
calculateNhifRelief(nhifFinalDeduction);
totalDeductionsCalculation(payeTotal, nhifRelief, personalRelief);
finalPay(taxableIncome, totalDeductions, nhifFinalDeduction);





