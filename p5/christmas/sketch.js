let stars = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
	noStroke();

	for (let i = 0; i < 200; i = i + 1) {
		let inix = random(0, width); //this refers to the obj
		let iniy = random(0, height);
		let inih = random(30, 60)
		let inid = random(8, 20)
		stars[i] = new star(inix, iniy, inih, inid); //make an obj based on the class(blueprint) defined 
	}
}

function draw() {
	background(0);

	for (let i = 0; i < stars.length; i = i + 1) {
		stars[i].update();
	}

}

class star { //class ~ blueprint
	constructor(inix, iniy, inih, inid) {
		this.x = inix;
		this.y = iniy;
		this.h = inih;
		this.d = inid;

		return this;
	}
	update() {
		this.d = this.d + random(-2, 2);
		triangle(this.d * cos(0) + this.x,
			this.d * sin(0) + this.y,
			this.d * cos((1 / 3) * (2 * PI)) + this.x,
			this.d * sin((1 / 3) * (2 * PI)) + this.y,
			this.d * cos((2 / 3) * (2 * PI)) + this.x,
			this.d * sin((2 / 3) * (2 * PI)) + this.y);
		triangle(this.d * cos(1 / 2 * (2 * PI)) + this.x,
			this.d * sin(1 / 2 * (2 * PI)) + this.y,
			this.d * cos((1 / 3) * (1 * PI)) + this.x,
			this.d * sin((1 / 3) * (1 * PI)) + this.y,
			this.d * cos((5 / 3) * (1 * PI)) + this.x,
			this.d * sin((5 / 3) * (1 * PI)) + this.y);
		fill(this.h, 100, 70);
	}
}
//no "function" xx function() in class
//"update"




//or stars = new star(100,100)
//constructor(x,u)//
//this.x = x
//


//array
//in function setup
//for(let i = o, i<1000; i= i+1){
//stars[i] = new star(i,200)}
//in function draw
//for (let i = 0, i<cats.length;i = i+1){
//stars[i].upcate();}