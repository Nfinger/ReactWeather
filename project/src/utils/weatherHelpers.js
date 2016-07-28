import axios from "axios";

var _baseURL = "http://api.openweathermap.org/data/2.5/"
var _APIKEY = "c361363e88273e2eef8bf3442c0bfbe0"

function getQueryStringData(city){
	return {
		q : city,
		type: 'accurate',
		APPID: _APIKEY,
		cnt: 5
	}
}

// invoked in the makeWeatherURL function
// Object.keys returns an array
// .map goes through that array and applies a callback to each key
// return a string of the key and value 
// .join will join each string returned from every iteration of .map
function prepRouteParams(queryStringData){
	return Object.keys(queryStringData)
		.map(function(key){
			return key + '=' + encodeURIComponent(queryStringData[key]);
		}).join('&')
}

function makeWeatherURL(type, queryStringData){
	return _baseURL + type + '?' + prepRouteParams(queryStringData);
}

function getFiveDayWeather(city){
	var qString = getQueryStringData(city) //JS object from above
	var url = makeWeatherURL("forecast/daily", qString)

	//hit url endpoint with axios
	return axios.get(url)
		//JS promise to wait
		//data is JSON object that was returned
		.then(function(data){
			
				//Send data back to where it was called
				return data	
			})
		//Give me an error if there is one
		.catch(function(err){
			console.warn("Error with the getCurrentWeather" + err)
		})	
}

module.exports = {
	getFiveDayWeather: getFiveDayWeather
}; 