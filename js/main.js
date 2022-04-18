
function app(id) {
	let i = document.getElementById(id);
	let o = document.getElementById('phoneScreen');
	let p = i.style.backgroundColor;
	o.style.transition='all 0.2s ease';
	o.style.backgroundColor=p;
	let apps = document.getElementsByClassName("app");
	for (var f = 0; f < apps.length; f++) {
		let c=apps.item(f)
		c.style.display='none'
	}

	let x = document.getElementById('swipe');
	x.style.display='block'

	let o2 = document.getElementById('phoneDock');
	o2.style.display='none';
	if (p=='blue' || p=='purple' || p=='black' || p=='midnightBlue' || p=='rgb(15, 14, 97)' || p=='rgb(20, 3, 121)') {
		x.style.backgroundColor='mediumaquamarine';
		document.getElementById('time').style.color='mediumaquamarine';
	} else {
		x.style.backgroundColor='black';
		document.getElementById('time').style.color='black';
	}



}
function home() {
	let o = document.getElementById('phoneScreen');
	let o2 = document.getElementById('phoneDock');
	let o7 = document.getElementById('swipe');
	o.style.transition='all 0.35s ease-out';
	o2.style.display='block';
	o7.style.display='none';
	o.style.backgroundColor='#e6dfdf';
	var apps = document.getElementsByClassName("app");
	for (var i = 0; i < apps.length; i++) {
		let c=apps.item(i)
		c.style.display='block'
	}
	document.getElementById('time').style.color='black';
}



function startTime() {
	const today = new Date();
	let h = today.getHours();
	let m = today.getMinutes();
	m = checkTime(m);
	if (h>12) {
		h = h-12
	}
	document.getElementById('timeText').innerHTML =  h + ":" + m ;
	setTimeout(startTime, 1000);
}
  
function checkTime(i) {
	if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
	return i;
}