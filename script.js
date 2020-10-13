var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var rdm = document.getElementById("rdm");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	rdm.style.background =
		"linear-gradient(to right, "
		+ color2.value
		+ ", "
		+ color1.value
		+ ")";

	css.textContent = body.style.background + ";";
}

function randomColor() {
	var rr = Math.floor(Math.random()*16777215).toString(16).slice(-2);
	var bb = Math.floor(Math.random()*16777215).toString(16).slice(-2);
	var gg = Math.floor(Math.random()*16777215).toString(16).slice(-2);
	var color = "#" + rr + bb + gg;
	return color;
}

function setRandomColor() {
	var rnd1 = randomColor();
	var rnd2 = randomColor();
	color1.value = rnd1;
	color2.value = rnd2;
	body.style.background =
		"linear-gradient(to right, "
		+ rnd1
		+ ","
		+ rnd2
		+ ")";

	rdm.style.background =
		"linear-gradient(to right, "
		+ rnd2
		+ ","
		+ rnd1
		+ ")";

	css.innerHTML = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color1.addEventListener("input", setGradient());
color2.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient());

rdm.addEventListener("click", setRandomColor);