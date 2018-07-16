var main = document.querySelector('main');

var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var Voltron = request.response;
    Shiro(Voltron);
}

function Shiro(jsonObj) {
    var towns = jsonObj['towns'];

    for (var i = 0; i < 4; i++) {
        if (i == 2) {
            continue;
        }

        if (i == 0) {
            var myArticle = document.getElementById('Home-Franklin');
        } 
        else if (i == 1) {
            var myArticle = document.getElementById('Home-Greenville');
        }
        else if (i == 3) {
            var myArticle = document.getElementById('Home-Springfield');
        }

        var Kuro = document.createElement('h1');
        var motto = document.createElement('p');
        var founded = document.createElement('p');
        var population = document.createElement('p');
        var rainfall = document.createElement('p');

        Kuro.textContent = towns[i].name;
        motto.textContent = 'Motto: ' + towns[i].motto
        founded.textContent = 'Year Founded: ' + towns[i].yearFounded;
        population.textContent = 'Current Population: ' + towns[i].currentPopulation;
        rainfall.textContent = 'Average Rainfall: ' + towns[i].averageRainfall + '"';

        myArticle.appendChild(Kuro);
        myArticle.appendChild(motto);
        myArticle.appendChild(founded);
        myArticle.appendChild(population);
        myArticle.appendChild(rainfall);
    }
}
