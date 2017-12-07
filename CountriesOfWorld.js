/**
 * Created by w0411056 on 12/5/2017.
 */
"use strict"

// parse the Json File //
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var target_element = document.getElementById('countries');
        var myObj = JSON.parse(this.responseText);
        for(var i = 0; i < myObj.length; i++)
        {
            target_element.innerHTML += `<option value='${i + 1}'>${myObj[i].Name}</option>`;
        }
    }
};
xmlhttp.open("GET", "countries.json", true);
xmlhttp.send();

function DisplayCountryData()
{

}

function DisplayPopulationData()
{

}

function CalculateTotalWorldPopulation()
{

}

function CalculateAreaInKM(countryAreaInMiles)
{

}
