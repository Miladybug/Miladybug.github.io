//Monday, 6 April 2020

var d = new Date();

var day = d.getDay();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var dayOfWeek = weekday[day];


var monthNum = d.getMonth();
var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var monthFinal = monthName[monthNum];

document.getElementById("currentdate").innerHTML = dayOfWeek + ", " + d.getDate() + " " + monthFinal + " " + d.getFullYear();