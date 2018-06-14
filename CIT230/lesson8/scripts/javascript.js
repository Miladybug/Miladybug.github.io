//Monday, 6 April 2020

var d = new Date();

var day = d.getDay();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var dayOfWeek = weekday[day];


var monthNum = d.getMonth();
var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var monthFinal = monthName[monthNum];

document.getElementById("currentdate").innerHTML = dayOfWeek + ", " + d.getDate() + " " + monthFinal + " " + d.getFullYear();


//button
function dropdown() {
    document.getElementById("navigation").classList.toggle("hide");
}
// Make X
function myFunction(x) {
    x.classList.toggle("change");
}



//high
var hText = document.getElementById("highTemp").innerHTML;
var hNum = parseFloat(hText);
//low
var lText = document.getElementById("lowTemp").innerHTML;
var lNum = parseFloat(lText);
//average
var t = (hNum + lNum) / 2;

//speed
var sText = document.getElementById("WindSpeed").innerHTML;
var s = parseFloat(sText);


//calculation
var f = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));

//round
f = Math.round(f)

//output
document.getElementById("windchill").innerHTML = f;
