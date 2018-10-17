// Ripple for Button
import {MDCRipple} from '@material/ripple';
const ripple = new MDCRipple(document.querySelector('.foo-button'));

// topAppBar
import {MDCTopAppBar} from '@material/top-app-bar/index';

// Instantiation
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

// Menu
import {MDCMenu} from '@material/menu';

const menu = new MDCMenu(document.querySelector('.mdc-menu'));
menu.open = true;

//click on menu
var openmenu = document.getElementById('menudisplay');

var menubtn = document.getElementById('menubutton');

menubtn.addEventListener("click", function(){
  openmenu.style.display = "block";
})



//img change
var myImage = document.querySelector('img');

myImage.onclick = function () {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/nfl-logo.png') {
		myImage.setAttribute ('src','images/hit.jpg');
	} else {
		myImage.setAttribute ('src','images/nfl-logo.png');
	}
}

//userchange
var UserChangeBtn = document.getElementById('changeUser');
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

UserChangeBtn.onclick = function() {
	setUserName();
}
// Get the modal
var modal = document.getElementById('chartModal');
// Get the button that opens the Modal
var showChartBtn = document.getElementById("showChart");
// Get the <span> element that closes the Modal
var closeaction = document.getElementsByClassName('close')[0];
//When the user clicks on the button, open the Modal
showChartBtn.onclick = function() {
	modal.style.display = "block";
}
//When the user clicks on <span> (x), close the Modal
closeaction.onclick = function() {
	modal.style.display = "none";
}
//When the user clicks anywhere outside of the modal, close it
window.onclick= function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}
