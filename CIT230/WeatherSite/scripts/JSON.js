var main = document.querySelector('main');

var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var Voltron = request.response;
    franklin(Voltron);
}

function franklin(jsonObj) {
    var towns = jsonObj['towns']
    for (var i = 0; i < towns.length; i++) {
        if (i == 2){
            continue;
        }
        var myArticle = document.createElement('article');
        var Kuro = document.createElement('h1');
        var motto = document.createElement('p');
        var founded = document.createElement('p');
        var population = document.createElement('p');
        var rainfall = document.createElement('p');
        //var list = document.createElement('ul');

        Kuro.textContent = towns[i].name;
        motto.textContent = 'Motto: ' + towns[i].motto
        founded.textContent = 'Year Founded: ' + towns[i].yearFounded;
        population.textContent = 'Current Population: ' + towns[i].currentPopulation;
        rainfall.textContent = 'Average Rainfall: ' + towns[i].averageRainfall + '"';

        //            var quelquechose = towns[i].events;
        //                for (var j = 0; j < quelquechose.length; j++){
        //                    var listItem = document.createElement('li');
        //                    listItem.textContent = quelquechose[j];
        //                    list.appendChild(listItem);
        //                }

        myArticle.appendChild(Kuro);
        myArticle.appendChild(motto);
        myArticle.appendChild(founded);
        myArticle.appendChild(population);
        myArticle.appendChild(rainfall);
        //myArticle.appendChild(list);

        main.appendChild(myArticle);
    }
}
