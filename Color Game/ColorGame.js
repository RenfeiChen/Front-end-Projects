var numOfSquares = 6;
var colors = [];
var squares = document.querySelectorAll(".square");
var pickedColor;
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {

	//Set the Mode buttons including easy and hard
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function() {
			for (var j = 0; j < modeButtons.length; j++) {
				modeButtons[j].classList.remove("selected");
			}
			this.classList.add("selected");
			
			this.textContent === "Easy" ? numOfSquares = 3 : numOfSquares = 6;
			reset();
		})
	}

	// Initial the squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i]; // add color
		squares[i]. addEventListener("click", function() {
			var clickedColor = this.style.backgroundColor;
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = "success";
				changeColors(pickedColor);
				h1.style.backgroundColor = pickedColor;
				resetButton.textContent = "Play Again?";
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again!"
			}
		});
	}
	// Set the reset Button
	resetButton.addEventListener("click", function() {
		reset();
	});

}

// Set all the colors of the squares
function changeColors(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

// return a random color of all the colors
function pickColor() {
	return colors[Math.floor(Math.random() * colors.length)];
}


// return a random colors array
function generateRandomColors(num) {
	var arr =[];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

// return a random rgb color
function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

// reset all the parameters
function reset() {
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor(); // pick a new random color from array
	colorDisplay.textContent = pickedColor; // change the goal color displayed
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block"; // show the color if it was hidden
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none"; // hide the color
		}
	}
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
}