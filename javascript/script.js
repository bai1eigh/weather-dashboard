var button = document.getElementById('.button')
var inputValue = document.getElementById('.inputValue')
var cityName = document.getElementById('.name');
var temp = document.getElementById('Temperature');
var wind = document.getElementById('Wind');
var humidity = document.getElementById('Humidity');
var previousSearches = document.getElementById('searched');
var key = "c2e06340cec451ae89feb0b682c2abf3";
var url = `http://api.openweathermap.org/geo/1.0/direct?q=${searchedCity}&limit=5&appid=${APIKEY}`;

//fetch('https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=35&lon=139&appid={c2e06340cec451ae89feb0b682c2abf3})
//  
//.then(response=> response.json())

// Create function to dynamically generate list of previously searched cities.
function createSideCity(){
  var ul = document.getElementById("search-location");
}

// Create fetch call function and do something with data
let fetchWeather = function (cityNameData) {}

// Get the side buttons to return weather information
function addWeatherEventListener() {}

// Search button
//searchBtn.addEventListener("click", function () {}

// Create a function to get the date
let getDate = function (time) {}

// Create a container that contains the city, date, temp, wind, humidity and UV index
let cityInfo = function (lat, lon) {}

// TODO: Create a container with a 5-day forecast
let foreCast = function (data) {}

for(let i = 0; i < storedCity.lenth; i++) {
  let addCityButtons = document.createElement("button");
  addCityButtons.setAttribute("class", "cityNameData");
  addCityButtons.textContent = storedCity[i];
  console.log(storedCity[i]);
  $("#searchedCities").append(addCityButtons);
  addWeatherEventListener();
}

