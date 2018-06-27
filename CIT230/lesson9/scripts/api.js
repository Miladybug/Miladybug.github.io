let weatherRequest = new XMLHttpRequest();
let apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=4156210&units=imperial&APPID=a58155a086e38a5849e60934842da216';

weatherRequest.open('GET', apiURL, true);
weatherRequest.send();

weatherRequest.onload = function (){
    let weatherData = JSON.parse(weatherRequest.responseText);
    //console.log(weatherData);
    
    document.getElementById('current-temp').innerHTML = weatherData.main.temp;
    
    let imagesrc = 'http://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png';
    document.getElementById('weather-image').src = imagesrc;
}

//let weatherSection = document.querySelector('');