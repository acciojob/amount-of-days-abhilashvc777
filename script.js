//your JS code here. If required.
function daysOfYear(year){
	if(year%400==0 && year%100==0){
		return "366"
	}else{
		return "365"
	}
}
const year = 1970
const day = daysOfYear(year)
console.log(day)