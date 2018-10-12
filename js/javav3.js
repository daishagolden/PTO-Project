function PTOcalculator(){
    var yearsWorked = parseFloat(document.getElementById("yearsWorked").value);
    var weeksWorked = parseFloat(document.getElementById("weeksWorked").value);
    var hoursUsed = parseFloat(document.getElementById("hoursUsed").value);
    var output = document.getElementById("output");
    var totalHours = 40;
    var totalDays = 8;
    var checkPerYear = 26
    
    if (yearsWorked<5) {
        var ptoPerCheck = 5;
    } else if (yearsWorked<10){
        var ptoPerCheck = 6;
    } else {
        var ptoPerCheck = 7;
    }
    

    var PTOLeft = (checkPerYear * ptoPerCheck) - hoursUsed;


    output.innerHTML =  "You have " + PTOLeft + " Hours left <br> You have " + PTOLeft/totalDays + " Days left <br> You have" + PTOLeft/totalHours + " Weeks left" ;

}