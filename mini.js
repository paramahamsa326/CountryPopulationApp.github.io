function addCountry(t) {
    var e = getSelectedItem(t);
    "Select Country" === e ? alert("Select a Country") : countriesList[e] ? alert("Country already exists") : (countriesList[e] = function () {
        return {
            countryName: e,
            oldPopulation: Math.floor(99e5 * Math.random() + 1e5),
            birthRate: Math.floor(15 * Math.random() + 5),
            deathRate: Math.floor(4 * Math.random() + 1)
        }
    }(), updateCountryButtons())
}

function updatePopulation(t) {
    console.log(JSON.stringify(countriesList[t]));
    var e = countriesList[t],
        n = Math.ceil(Math.abs(new Date("1/1/2011") - new Date)),
        o = e.oldPopulation * n / 31536e6;
    return console.log(o),
        countriesList[t].currentPopulation = e.oldPopulation + Math.ceil(e.birthRate * o) - Math.ceil(e.deathRate * o),
    (0 === e.currentPopulation || e.currentPopulation <= 0) && (e.currentPopulation = 0), countriesList[t].currentPopulation
}

function removeCountry(t) {
    var e = getSelectedItem(t);
    "Select Country" === e ? alert("Select a Country") : (delete countriesList[e], updateCountryButtons())
}

function getSelectedItem(t) {
    var e = document.getElementById(t);
    return e.options[e.selectedIndex].text
}

function updateCountryButtons() {
    clearInterval(interval);
    var t = document.getElementById("countryButtons");
    t.innerHTML = "";
    for (country in countriesList) {
        currentCountryName = countriesList[country].countryName;
        var e = document.createElement("button");
        e.type = "button", e.value = currentCountryName,
            e.id = currentCountryName,
            e.name = currentCountryName,
            e.textContent = currentCountryName,
            e.style.color = "#ffffff",
            e.style.minWidth = "150px",
            e.style.margin = "2px",
            e.style.backgroundColor = "#" + Math.floor(16777215 * Math.random()).toString(16),
            e.onclick = function (t) {
            return function (t) {
                updatePopulationEle(t)
            }
        }(countriesList[country].countryName),
            t.appendChild(e),
            updatePopulation(currentCountryName),
            e = document.createElement("br"),
            t.appendChild(e)
    }
}

function updatePopulationEle(t) {
    clearInterval(interval);
    var e = document.getElementById(populationId);
    e && e.parentNode.removeChild(e),
        e = document.createElement("h"),
        e.id = populationId,
        e.innerHTML = updatePopulation(countriesList[t.toElement.innerText].countryName),
        t.srcElement.parentNode.insertBefore(e,
            t.srcElement.nextSibling),
        interval = setInterval(function () {
        e.innerHTML = updatePopulation(countriesList[t.toElement.innerText].countryName)
    }, 500)
}

populateCountries("addCountry"), populateCountries("removeCountry");
var countriesList = [], populationId = "population", interval;