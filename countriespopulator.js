//Populates all list of countries in the drop down using countriesJS
populateCountries("addCountry");

populateCountries("removeCountry");


var countriesList = [];
function addCountry(el) {
    var selectedCountry = getSelectedItem(el);
    if (selectedCountry === "Select Country" ) {
        alert("Select a Country")
    }
    else if(countriesList[selectedCountry]){
        alert("Country already exists");
    }
    else {
        countriesList[selectedCountry] = (function () {
            return {
                countryName: selectedCountry,
                oldPopulation: Math.floor(Math.random() * (10000000 - 100000) + 100000),
                birthRate: Math.floor(Math.random() * (20 - 5) + 5),
                deathRate: Math.floor(Math.random() * (5 - 1) + 1)
            }
        })();
        updateCountryButtons();
    }
}
function updatePopulation(currCountryName) {
    console.log(JSON.stringify(countriesList[currCountryName]));
    var curObj=countriesList[currCountryName]
    var minutes= /*Math.floor(*/(Math.ceil(Math.abs(new Date("1/1/2011") - (new Date())) /*/ 1000*/));
    var factor=((curObj.oldPopulation)*minutes/(365*24*3600*1000));
    console.log(factor);
    countriesList[currCountryName].currentPopulation=curObj.oldPopulation +Math.ceil(curObj.birthRate*factor)-Math.ceil(curObj.deathRate*factor);
    if(curObj.currentPopulation===0||curObj.currentPopulation<=0){
        curObj.currentPopulation=0;
    }
    return countriesList[currCountryName].currentPopulation
}
function removeCountry(el) {
    var selectedCountry = getSelectedItem(el);
    if (selectedCountry === "Select Country") {
        alert("Select a Country")
    }
    else {
        delete countriesList[selectedCountry];
        updateCountryButtons();
    }
}
//This function returns selected drop down value and returns it
function getSelectedItem(el) {
    var e = document.getElementById(el);
    return e.options[e.selectedIndex].text;
}
function updateCountryButtons() {
    clearInterval(interval); // Clearing the counter to stop the population counter on list updation
    var foo = document.getElementById("countryButtons");
    foo.innerHTML = '';
    for (country in countriesList) { // Iteratively creating and adding buttons for each country in the array of selected countries
        currentCountryName=countriesList[country].countryName;
        var element = document.createElement("button");
        element.type = "button";
        element.value = currentCountryName;
        element.id = currentCountryName;
        element.name = currentCountryName;
        element.textContent = currentCountryName;
        element.style.color = '#ffffff';
        element.style.minWidth="150px";
        element.style.margin="2px";
        element.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        element.onclick = function (ele) {
            //console.log(ele);
            return function (ele) {
                updatePopulationEle(ele);
            }
        }(countriesList[country].countryName);

        foo.appendChild(element);
        updatePopulation(currentCountryName);
        element = document.createElement("br");
        foo.appendChild(element);
    }
}
var populationId="population";
var interval;
function  updatePopulationEle(ele) {
    clearInterval(interval);
    var popP=document.getElementById(populationId);
    if(popP){
        popP.parentNode.removeChild(popP);
    }
        popP=document.createElement("h");
        popP.id=populationId;
        console.log(ele);
        popP.innerHTML=" >>>>>> "+updatePopulation(countriesList[ele.target.innerHTML].countryName).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        ele.target.parentNode.insertBefore(popP,ele.target.nextSibling);
    interval=setInterval(function () {
        popP.innerHTML=" >>>>>> "+updatePopulation(countriesList[ele.target.innerText].countryName).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },500)
}
