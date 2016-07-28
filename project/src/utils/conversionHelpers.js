const days = [
	"Sun",
	"Mon",
	"Tues",
	"Wed",
	"Thurs",
	"Fri",
	"Sat"
]

//kelvin to farenheit
function kelToFar(temp){
	return Math.round(temp * (9/5) - 459.67)
}	

//kelvin to celcius
function kelToCel(temp){
	return Math.round(temp -273.15)
}

//meter to feet
//don't need to do the opposite conversion, default is meter
function meterToFeet(meter){
	var feetLen = meter * 3.28084
	return feetLen.toFixed(2)
}

//JS Date object has plenty of built ins for use
function getDate(unixTime){
	var date = new Date(unixTime * 1000);
	var dayIndex = date.getDay()
	var today = days[dayIndex]
	var month = date.getMonth()
	var dayDate = date.getDate()
	var fullYear = date.getFullYear()
	return today + " : " + " " + month + " / " + dayDate + " / " + fullYear
}

module.exports = {
	kelToFar : kelToFar,
	kelToCel : kelToCel,
	getDate : getDate,
	meterToFeet: meterToFeet,
}