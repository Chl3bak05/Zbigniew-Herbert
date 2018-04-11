
function invert() {
var dark = sessionStorage.getItem("dark");
var change = document.body


if (dark=="true"){
change.className="dark-theme inverted"
sessionStorage.setItem("dark", "false");

slider.className="slider slider_l"
} else {
change.className="dark-theme"
sessionStorage.setItem("dark", "true");

}
}


function start() {

var dark = sessionStorage.getItem("dark");
var change = document.body

	
if (dark=="true" || dark=="false"){
	if (dark=="false"){
		change.className="dark-theme inverted"
		sessionStorage.setItem("dark", "false");

		} else {
		change.className="dark-theme"

	sessionStorage.setItem("dark", "true");
		}
} else {
		sessionStorage.setItem("dark", "true");
		change.className="dark-theme"

	}
}

function open_about(){
	document.getElementById("about").style.display = "flex";
}
function close_about(){
	document.getElementById("about").style.display = "none";
}