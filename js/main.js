var sharing= false;

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
		c.style.animation='none'
	}

	if (document.getElementById("inactivityMsg").style.display=="block"){
	document.getElementById("inactivityMsg").style.display="none"
	document.getElementById("inactivityMsg2").style.display="block"
	}

	let x = document.getElementById('swipe');
	x.style.display='block'

	let o2 = document.getElementById('phoneDock');
	o2.style.display='none';
	if (isDark(p)) {
		x.style.backgroundColor='mediumaquamarine';
		document.getElementById('time').style.color='mediumaquamarine';
	} else {
		x.style.backgroundColor='black';
		document.getElementById('time').style.color='black';
	}
	if (i.id == "app4"){
		document.getElementById("sharepic").style.display = "block";
		document.getElementById("sharetext").style.display = "block";
		sharing = true;
	} 
}


function getRandomInt(max) {
	return Math.floor(Math.random() * max);
  }

function setApps() {
	let apps = document.getElementsByClassName("app");
	for (var f = 0; f < apps.length; f++) {
		let c=apps.item(f)
		if (!(c.id =="app4")){
			c.style.backgroundColor=`rgb(${getRandomInt(256)}, ${getRandomInt(256)}, ${getRandomInt(256)})`;
		}
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
	document.getElementById("inactivityMsg2").style.display="none";
	document.getElementById("sharepic").style.display = "none";
	document.getElementById("sharetext").style.display = "none";
	document.getElementById("shareicn").style.animation = "2s spin";
	document.getElementById("swipe").style.animation="none"
	sharing=false;
	setApps();
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

let inactivityTime = function () {
	let time;
	window.onload = setTimer;
	document.getElementById("phoneScreen").onclick = resetTimer;
	function logout() {
	  console.log("User input not detected; showing message")
	  document.getElementById("inactivityMsg").style.display="block"
	  let apps = document.getElementsByClassName("app");
    	for (var f = 0; f < apps.length; f++) {
		let c=apps.item(f)
		c.style.animation='1s inflate infinite'
		}
		document.getElementById("swipe").style.animation="1s inflate infinite"

	}
	function resetTimer() {
	  clearTimeout(time);
	}
	function setTimer(){
		startTime()
		setApps()
		time = setTimeout(logout, 3000)
	}
  };
  inactivityTime();
  console.log('Waiting for user input...');


const shareData = {
	title: 'tinyphone',
	url: 'https://tinyphone.netlify.app',
}

const btn = document.getElementById('phoneScreen');
const btn2 = document.getElementById('shareicn');

btn.addEventListener('click', async () => {
	if (sharing==true){
	try {
		await navigator.share(shareData)
	} catch(err) {
		console.log('Error: ' + err)
	}}
});

// https://github.com/JDMCreator/isDark.js/
// Thank you JDMCreator
this.isDark = function(color) {
	color = color.trim()
		.toLowerCase();
	var length = color.length,
		firstChar = color[0], _255=255,h=[],s, l=/[\d.*]+/g;
	if (/(^#?[a-f\d]+$)|\d/.test(color)){
		if (firstChar == "h") {

			while(s=l.exec(color)){
				h.push(s[0])
			}
			s=h[1]/100;
			l=h[2]/100;
			var q = l < 0.5 ? l * (1 + s) : l + s - l * s,
			    p = 2 * l - q;
			    h = h[0] / 100;
			color = [h+1/3,h,h-1/3].map(function(t,c){
      				return (((c=q-p,t+=t<0?1:t>1?-1:0)<1/6?p+6*c*t:.5>t?q:t<2/3?p+c*(2/3-t)*6:p)*_255)+.5|0;
    			});
		}
		else if (firstChar == "r") {
			//rgb or rgba
			while(s=l.exec(color.replace(/%/g,"*2.55"))){
				h.push(s[0])
			};
			color=h.map(eval);
		} else {
			color = [(z = "0x"+/\w{6}/.exec(color.replace(length<6&&/./g,'$&$&'))) >> 16 & _255,
				z >> 8 & _255,
				z & _255
			];
		}
		return color[0] * 299 + color[1] * 587 + color[2] * 114 < 128000
	}
	// This should only get keynames for colors, because we did HSL, HSLA, RGB, RGBA and HEX before

	/* What is this ? It is the most compressed way I found to deal with colors keynames. I found this throught computer
	   and manual calculations. Each dark color is assigned a unique 2-ASCII-characters code generated from its name. */
	return !("bIb=b*bRcLcRdYdad{dcdRdgdHd*dndKdofifGf(gSi{iimum>mom;m\\mnnmoMoWo{p,r.r?rUscs#s8sUsWs{t*th".indexOf(
		firstChar + String.fromCharCode((color.charCodeAt(628 % length) * length) % 91 + 33)
	) % 2);
}