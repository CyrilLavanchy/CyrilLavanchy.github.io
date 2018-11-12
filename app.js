//img change
const myImage = document.querySelector('img');

myImage.onclick = function () {
	const mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/nfl-logo.png') {
		myImage.setAttribute ('src','images/hit.jpg');
	} else {
		myImage.setAttribute ('src','images/nfl-logo.png');
	}
};

//userchange (decap)
//var UserChangeBtn = document.getElementById('changeUser');
//var myHeading = document.querySelector('h1');

//function setUserName() {
	//var myName = prompt('Gib deinen Namen ein.');
	//localStorage.setItem('name', myName);
	//myHeading.textContent = 'Willkommen zu NFL Analytics, ' + myName;
//}

//if(!localStorage.getItem('name')) {
	//setUserName();
//} else {
	//var storedName = localStorage.getItem('name');
	//myHeading.textContent = 'Willkommen zu NFL Analytics, ' + storedName;
//}

//UserChangeBtn.onclick = function() {
	//setUserName();
//}

// Modal for Chart1
// Get the modal
var modal1 = document.getElementById('chartModal1');
// Get the button that opens the Modal
var showChartBtn1 = document.getElementById("showChart1");
// Get the <span> element that closes the Modal
var closeaction1 = document.getElementsByClassName('close1')[0];
//When the user clicks on the button, open the Modal
showChartBtn1.onclick = function() {
	modal1.style.display = "block";
};
//When the user clicks on <span> (x), close the Modal
closeaction1.onclick = function() {
	modal1.style.display = "none";
};
//When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
	if (event.target == modal1) {
		modal1.style.display = "none";
	}
});

// Modal for Chart2
// Get the modal
var modal2 = document.getElementById('chartModal2');
// Get the button that opens the Modal
var showChartBtn2 = document.getElementById("showChart2");
// Get the <span> element that closes the Modal
var closeaction2 = document.getElementsByClassName('close2')[0];
//When the user clicks on the button, open the Modal
showChartBtn2.onclick = function() {
	modal2.style.display = "block";
};
//When the user clicks on <span> (x), close the Modal
closeaction2.onclick = function() {
	modal2.style.display = "none";
};
//When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
	if (event.target == modal2) {
		modal2.style.display = "none";
	}
});

// Modal for Chart3
// Get the modal
var modal3 = document.getElementById('chartModal3');
// Get the button that opens the Modal
var showChartBtn3 = document.getElementById("showChart3");
// Get the <span> element that closes the Modal
var closeaction3 = document.getElementsByClassName('close3')[0];
//When the user clicks on the button, open the Modal
showChartBtn3.onclick = function() {
	modal3.style.display = "block";
}
//When the user clicks on <span> (x), close the Modal
closeaction3.onclick = function() {
	modal3.style.display = "none";
};
//When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
	if (event.target == modal3) {
		modal3.style.display = "none";
	}
});

// Modal for Chart4
// Get the modal
var modal4 = document.getElementById('chartModal4');
// Get the button that opens the Modal
var showChartBtn4 = document.getElementById("showChart4");
// Get the <span> element that closes the Modal
var closeaction4 = document.getElementsByClassName('close4')[0];
//When the user clicks on the button, open the Modal
showChartBtn4.onclick = function() {
	modal4.style.display = "block";
};
//When the user clicks on <span> (x), close the Modal
closeaction4.onclick = function() {
	modal4.style.display = "none";
};
//When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
	if (event.target == modal4) {
		modal4.style.display = "none";
	}
});

// Modal for Chart5
// Get the modal
var modal5 = document.getElementById('chartModal5');
// Get the button that opens the Modal
var showChartBtn5 = document.getElementById("showChart5");
// Get the <span> element that closes the Modal
var closeaction5 = document.getElementsByClassName('close5')[0];
//When the user clicks on the button, open the Modal
showChartBtn5.onclick = function() {
	modal5.style.display = "block";
};
//When the user clicks on <span> (x), close the Modal
closeaction5.onclick = function() {
	modal5.style.display = "none";
};
//When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
	if (event.target == modal5) {
		modal5.style.display = "none";
	}
});
