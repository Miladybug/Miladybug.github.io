let weatherRequest = new XMLHttpRequest();
let apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=4580543&units=imperial&APPID=a58155a086e38a5849e60934842da216';

weatherRequest.open('GET', apiURL, true);
weatherRequest.send();

weatherRequest.onload = function (){
    let weatherData = JSON.parse(weatherRequest.responseText);
    
    document.getElementById('current-temp').innerHTML = weatherData.main.temp;
    
    let imagesrc = 'http://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png';
    document.getElementById('image-icon').src = imagesrc;
    
    document.getElementById('weather-string').innerHTML = weatherData.weather[0].main;
    
    document.getElementById('wind-speed').innerHTML = weatherData.wind.speed;
}
