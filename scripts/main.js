var myImage = document.querySelector('img');

myImage.onclick = function () {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/nfl-logo.png') {
		myImage.setAttribute ('src','images/hit.jpg');
	} else {
		myImage.setAttribute ('src','images/nfl-logo.png');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Gib deinen Namen ein.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Willkommen zu NFL Analytics, ' + myName;
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Willkommen zu NFL Analytics, ' + storedName;
}

myButton.onclick = function() {
	setUserName();