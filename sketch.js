/*
 * b'day card
 * created: 21 December 2018
 * d-day: 24 December 🎉
 * 
 * https://hilmizul.github.io/bday
 */

var mobils = [];
var balloons = [];
var total = 12;
var font;
var foto, bgStatic;
var txt = "HAPPY BIRTHDAY";
var name = "TO ME";
var sfxPop;

function preload() {
	foto = loadImage("assets/img/foto.png");
	bgStatic = loadImage("assets/img/jakarta.png");
	font = loadFont("assets/font/FredokaOne.ttf");
	sfxPop = loadSound("assets/sfx/pop.mp3");
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	for (let i = 0; i < total; i++) {
		balloons.push(new Ballon());
	}
}

function draw() {
	background(114, 51, 153);
	
	image(bgStatic, 0, 0, width, height);

	push();
	var imgX = width / 2;
	var imgY = height / 2;
	// foto
	translate(imgX + (-mouseX + width / 2) / 30, imgY + (-mouseY + height / 2) / 30);
	imageMode(CENTER);
	image(foto, 0, 0, 200, 200);
	// frame
	noFill();
	stroke(250, 150);
	strokeWeight(10);
	ellipse(0, 0, 210, 210);
	pop();

	// name
	push();
	fill(255);
	stroke(45, 28, 82);
	strokeWeight(7);
	textFont(font);
	textSize(50);
	textAlign(CENTER);
	// name
	text(name, imgX + (mouseX - width / 2) / 30, imgY + 200 + (mouseY - height / 2) / 30);
	// teks hbd
	text(txt, imgX + (mouseX - width / 2) / 30, imgY - 150 + (mouseY - height / 2) / 30);
	pop();

	// balloons
	for (let i = 0; i < balloons.length; i++) {
		balloons[i].show();
		balloons[i].up();
		balloons[i].checkEdge()
		if (balloons[i].mouseHover()) {
			sfxPop.play();
			balloons.splice(i, 1);
		}
	}

	if (balloons.length < 3) {
		for (let i = 0; i < total; i++) {
			balloons.push(new Ballon());
		}
	}
}

function keyPressed() {
	if (key === 'z' || key === 'Z') {
		for (let i = 0; i < total; i++) {
			balloons.push(new Ballon());
		}
	}
}
