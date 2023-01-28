//Workshop 3 Yayoi Kusama 

/**
 * @author David Holcer (@vadth)
 * @date Jan. 2023
 * @description Yayoi Kusama Generative Art Workshop
*/

// **************************
// *        VARIABLES       *
// **************************
//tell computer we are going to be setting some variables.
let bgColor;
let colorScheme;
let totalCircles,circles;

// **************************
// *     SETUP FUNCTION     *
// **************************
function setup() {
  //setup size of canvas in pixels
  createCanvas(1200, 800);
  //print out the screen dimensions
  console.log('Screen Dimensions: ' + width + 'px x ' + height + 'px');


  //set up colors using hex color values
  bgColor = color("#000");

  cGreen = color("#97BE50");
  oGreen = color("green");
  cBlue = color("#3266EA");
  oBlue = color("blue");
  cPink = color("#EC4974");
  oPink = color("pink");
  //put some colors into an array i.e. a bucket with information
  colorScheme = [cGreen, cBlue, cPink];

  // it is more practical to make sizes in relation to the window size. we will see why soon
  smallCrB = 0.005;
  smallCrT = 0.01;

  mediumCrB = 0.025;
  mediumCrT = 0.035;

  largeCrB = 0.06;
  largeCrT = 0.07;

  totalCircles=500;
  circles=[];

  // do not do 60x a second, only call draw function once
  noLoop();
  //   do not draw lines on circles
  noStroke();


  for (let i=0;i<totalCircles;i++){
    circles.push(new Circle());
  }

}


// **************************
// *     DRAW FUNCTION     *
// **************************
// This function runs 60x/second unless we turn it off
function draw() {
  background(bgColor);

  for (var i = 0; i < circles.length; i++) {
    // circle.updatePos();

    circles[i].drawShape();

  }

  let numlines=20;
  for (let i=0;i<numlines;i++){
    push();
    stroke("black");
    strokeWeight(2);
    line(width / numlines * i, 0, width / numlines * i,height);
    pop();
  }

}

//automatically resizes the size of the webpage
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}


class Circle {
  //time, length (of position), circle radius, color selection, stroke weight
  constructor() {
    this.position=createVector(random(width),random(height));
    // this.position=createVector([x], [y], [z])
    this.color=random(colorScheme);
    this.prob=random();
    if (this.prob<0.8){
      this.diam = random(smallCrB, smallCrT);
    }
    else if (this.prob<0.95){
      this.diam = random(mediumCrB, mediumCrT);
    }
    else if (this.position.y>height/2){
      this.diam = random(largeCrB, largeCrT);
    }
    else{
      this.diam = random(mediumCrB, mediumCrT);
    }
    
    
  }

  drawShape() {
    push()
    fill(this.color);
    translate(this.position.x,this.position.y);
    // circle(0,0,this.diam*width);
    // rectMode(CENTER);
    // rect(0,0,this.diam*width)
    // fill(random(colorScheme));
    circle(0,0,this.diam*width);
    pop()
  }

  // updatePos(){
    
  // }
}


// EXTRA
  // createCanvas(windowWidth, windowHeight);
// sLength=min(windowWidth,windowHeight);
  // maxLength=max(windowWidth,windowHeight);

  // colorMode(HSB);
  // frameRate(1);


// EXTRA
  // createCanvas(windowWidth, windowHeight);
// sLength=min(windowWidth,windowHeight);
  // maxLength=max(windowWidth,windowHeight);

  // colorMode(HSB);
  // frameRate(1);