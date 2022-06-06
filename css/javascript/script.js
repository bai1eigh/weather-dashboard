var APIkey= "c2e06340cec451ae89feb0b682c2abf3"
var city;
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

fetch(queryURL)