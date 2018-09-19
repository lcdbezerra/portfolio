function fixDigits(n){
	return n > 9 ? "" + n: "0" + n;
}

function updateDateTime(){
	var now = new Date()
	var str = fixDigits(now.getDate()) + '/' + fixDigits(now.getMonth()) + '/' + now.getFullYear() + '<br />' +
			  fixDigits(now.getHours()) + ':' + fixDigits(now.getMinutes());

	document.getElementById('date_time').innerHTML = str;
}

updateDateTime();
setInterval(updateDateTime, 10000);