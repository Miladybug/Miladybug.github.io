function getDate() {
    var d = new Date();

    var day = d.getDay();
    var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dayOfWeek = weekday[day];


    var monthNum = d.getMonth();
    var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var monthFinal = monthName[monthNum];

    //document.getElementById("date-slot").innerHTML = dayOfWeek + ", " + d.getDate() + " " + monthFinal + " " + d.getFullYear();

    document.getElementById("currentdate").innerHTML = dayOfWeek + ", " + d.getDate() + " " + monthFinal + " " + d.getFullYear();
}

function dropdown() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

function windChill() {
    var high = parseFloat(document.getElementById("high-temp").innerHTML);
    var low = parseFloat(document.getElementById("low-temp").innerHTML);
    var t = (high + low) / 2;
    var s = parseFloat(document.getElementById("wind-speed").innerHTML);  
    
    var f = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));
    
    var digits = 2;
    var multiplier = Math.pow(10, digits);
    f = Math.round(f * multiplier) / multiplier;
    
    document.getElementById("wind-temp").innerHTML = f;
}