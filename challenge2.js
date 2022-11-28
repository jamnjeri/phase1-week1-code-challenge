//Challenge 2:  Speed Detector 
//Write a program to monitor speed of vehicle
//Speed < 70km/h --> "okay"
//Speed > 70km/h --> demerits: 1 demerit for every 5km/h
//More than 12 demerits --> "License suspended"

//Define the function:
function speedDetector(speedOfVehicle){
    let demerits;
    //Speed is a scalar quantity hence only has magnitude not direction
    speedOfVehicle = Math.abs(speedOfVehicle)
    console.log(`Speed = ${speedOfVehicle} km/h`)

    //Any speed of 70km/h and below is considered acceptable
    if (speedOfVehicle <= 70){
      console.log("Ok")
    }
    //Any speed above 70km/h is considered too high and hence eligible to start earning demerits
    else if (speedOfVehicle > 70){
        //console.log("Speed above 70")
        //Round down the demerit values to ensure only integers are displayed
        demerits = Math.floor((speedOfVehicle -70)/5)
        console.log(`Demerit Points: ${demerits}`)
        //Check if the demerits are more than 12 and display said Demerits
        if (demerits > 12){
            console.log("License Suspended")
        }
        else{
            console.log(`Treading dangerously`)
        }
    }
}
speedDetector(80)