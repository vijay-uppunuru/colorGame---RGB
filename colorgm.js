var numSquares = 6;
var colors = generateRandomColor(numSquares);
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var pickedColor = pickColor();
var displayColor = document.querySelector("#displayColor");
var h1= document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function() {
	//alert("easyBtn clicked");
	hardBtn.classList.remove("selected");	
	easyBtn.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColor(numSquares);
	pickedColor = pickColor();
	displayColor.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if(colors[i])
			squares[i].style.backgroundColor = colors[i];
		else {
			squares[i].style.display = "none";
		}
	}
});


hardBtn.addEventListener("click", function() {
	//alert("hardBtn clicked");
	hardBtn.classList.add("selected");	
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColor(numSquares);
	pickedColor = pickColor();
	displayColor.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
	}
});


resetBtn.addEventListener("click", function(){
	colors = generateRandomColor(numSquares);
	pickedColor = pickColor();
	displayColor.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
	resetBtn.textContent = "New Colors";
	messageDisplay.textContent="";
});

displayColor.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {

	squares[i].addEventListener("click" ,function(){
		//alert("clicked");
		var clickedColor = this.style.backgroundColor;

		if ( clickedColor === pickedColor){
			//alert("correct");
			messageDisplay.textContent = "Correct";
			changeColors(pickedColor);
			h1.style.backgroundColor = pickedColor;
			resetBtn.textContent = "Play Again!";
		}
		else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again !"; 
		}


	});

	squares[i].style.backgroundColor = colors[i];
}


function changeColors(color) {

	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {

	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColor(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColors());
	}

	return arr;
}

function randomColors(){
	var r = Math.floor(Math.random() * 256);	
	var g = Math.floor(Math.random() * 256);	
	var b = Math.floor(Math.random() * 256);
	return "rgb("+r+", "+g+", "+b+")";	
}