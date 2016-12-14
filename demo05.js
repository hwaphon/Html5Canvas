/*
 * @Author: hwaphon
 * @Date:   2016-12-14 16:36:37
 * @Last Modified by:   hwaphon
 * @Last Modified time: 2016-12-14 19:28:13
 */

'use strict';

window.onload = function() {
	var button = document.getElementById("previewButton");
	button.onclick = previewHandler;
	makeImage();
}

function previewHandler() {
	var canvas = document.getElementById("myCanvas");
	var context = canvas.getContext("2d");
	fillBackgroundColor(canvas, context);


	var selectObj = document.getElementById("shape");
	var index = selectObj.selectedIndex;
	var shape = selectObj[index].value;


	if (shape == "squares") {
		for (var i = 0; i < 16; i++) {
			drawSquare(canvas, context);
		}
	} else if (shape == "circles") {
		for (var i = 0; i < 16; i++) {
			drawCircle(canvas, context);
		}
	}

	drawText(canvas, context);
	drawImage(canvas, context);
}

function drawSquare(canvas, context) {
	var width = Math.floor(Math.random() * 64);

	var x = Math.floor(Math.random() * canvas.width);
	var y = Math.floor(Math.random() * canvas.height);

	context.fillStyle = "lightblue";
	context.fillRect(x, y, width, width);
}

function drawCircle(canvas, context) {
	var radius = Math.floor(Math.random() * 48);

	var x = Math.floor(Math.random() * canvas.width);
	var y = Math.floor(Math.random() * canvas.height);

	context.beginPath();
	context.arc(x, y, radius, 0, Math.PI * 2, true);
	context.fillStyle = "lightblue";
	context.fill();
}

function drawText(canvas, context) {
	var selectObj = document.getElementById("foregroundColor");
	var index = selectObj.selectedIndex;
	var fgColor = selectObj[index].value;
	var fontSize = "24";

	context.fillStyle = fgColor;
	context.font = "bold " + fontSize + "px sans-serif";
	context.textAlign = "left";

	var message = document.getElementById("message").value;
	var messageWidth = context.measureText(message).width;
	var x = Math.floor(canvas.width / 2 - messageWidth / 2);
	var y = Math.floor(canvas.height / 2 - fontSize / 2);
	context.fillText(message, x, y);
}

function drawImage(canvas, context) {
	var smileImage = new Image();
	smileImage.src = "smile.png";

	smileImage.onload = function() {
		context.drawImage(smileImage, 632, 272, 24, 24);
	}
}

function makeImage() {
	var canvas = document.getElementById("myCanvas");
	canvas.onclick = function() {
		window.location = canvas.toDataURL("image/png");
	}
}

function fillBackgroundColor(canvas, context) {
	var selectObj = document.getElementById("backgroundColor");
	var index = selectObj.selectedIndex;
	var bgColor = selectObj[index].value;

	context.fillStyle = bgColor;
	context.fillRect(0, 0, canvas.width, canvas.height);
}
