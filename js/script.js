var countdown = 1 *	60 * 1000;
var timerId;
function countDownTimer() {
	timerId = setInterval(function() {
		countdown -= 1000;
		var min = Math.floor(countdown/(60*1000));
		var sec = Math.floor((countdown - (min * 60 * 1000)) / 1000);
		if (countdown<=0) {
			alert("Count Down Finished");
			clearTimer(timerId);
		}else{
			console.log(min+" : "+sec);
		}
	},1000);
}

function clearTimer(timerId) {
	clearInterval(timerId);
}

countDownTimer();


function addOneMin(presentValue,id) {
	presentValue += 1;
	id.innerHTML = presentValue;
}

function minusOneMin(presentValue,id) {
	presentValue -= 1;
	id.innerHTML = presentValue;
}


window.addEventListener("load",function() {
	
},false)