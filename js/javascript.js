$(document).ready(function() {
	document.getElementById('_1').onclick = function() {
		if (this.checked === true){
		document.getElementById('nhk').checked = true;
		} else {
			document.getElementById('nhk').checked = false;
		}
	}
	document.getElementById('_2').onclick = function() {
		if(this.checked === true){
			document.getElementById('another').checked = true;
		} else {
			document.getElementById('another').checked = false;
		}
	}
	document.getElementById('_3').onclick = function() {
		if(this.checked === true){
			document.getElementById('never').checked = true;
		} else {
			document.getElementById('never').checked = false;
		}
	}
	document.getElementById('nhk').onclick = function() {
		if(this.checked === true){
			document.getElementById('_1').checked = true;
		} else {
			document.getElementById('_1').checked = false;
		}
	}
	document.getElementById('another').onclick = function() {
		if(this.checked === true){
			document.getElementById('_2').checked = true;
		} else {
			document.getElementById('_2').checked = false;
		}
	}
	document.getElementById('never').onclick = function() {
		if(this.checked === true){
			document.getElementById('_3').checked = true;
		} else {
			document.getElementById('_3').checked = false;
		}
	}
});