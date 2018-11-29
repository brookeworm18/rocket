var w = 70
var h = 70
// var X = 700
// var Y = 500
var launchSlider = 500;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);

	launchSlider = createSlider(0, 500, 500);
	launchSlider.position (900, 300);
	launchSlider.size (100, 10);
}


function draw() {
	var launchNumber = launchSlider.value();
	rocket (width/2, launchSlider.value());
	
}

function rocket (X,Y) {
	background (0);
	fill (255)
	noStroke();
	ellipse (X,launchSlider.value(),w,h);
	quad (X-w/2, launchSlider.value()+90, X-w/2, launchSlider.value()+50, X-w, launchSlider.value()+65, X-w, launchSlider.value()+90);
	quad (X+w/2, launchSlider.value()+90, X+w/2, launchSlider.value()+50, X+w, launchSlider.value()+65, X+w, launchSlider.value()+90);

	fill (255, 22, 53);
	quad (X-w/2, launchSlider.value(), X+w/2, launchSlider.value(), X+w/2, launchSlider.value()+100, X-w/2, launchSlider.value()+100);
	
	fill (0);
	ellipse (X, launchSlider.value()+h/2, w/2, h/2);
	fill (255);
	ellipse (X, launchSlider.value()+h/2, w/3, h/3);
	
	fill (255, 150, 30);
	triangle (X-w/3, launchSlider.value()+105, X+w/3, launchSlider.value()+105, X, launchSlider.value()+140);
	
}
