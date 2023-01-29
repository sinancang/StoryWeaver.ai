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

  mediumCrB = 0.017;
  mediumCrT = 0.021;

  largeCrB = 0.06;
  largeCrT = 0.07;

  // do not do 60x a second, only call draw function once
  noLoop();
  //   do not draw lines on circles
  noStroke();
}


// **************************
// *     DRAW FUNCTION     *
// **************************
// This function runs 60x/second unless we turn it off
function draw() {
  background(bgColor);

  //   fill with blue
  //   draw a blue circle at the middle of the screen 50 pixels diameter
  // fill("blue");
  // circle(width/2,height/2,50);

  // change color to pink and draw a larger circle a bit to the right
  // fill(oPink);
  // circle(width / 2+20, height / 2+20, 80);
  // notice how it is drawn on top of the previous circle

  // How can we make it generative
  //   Introducing... randomness
  // fill with a random color
  //   recall RGB color scheme
  //   position randomly on the screen
  //   set a random circle diameter pixels or relative
  //   fill(random(255),random(255),random(255));
  //   circle(random(0,width),random(0,height),random(0,90))

  //   fill(random(colorScheme));
  //   circle(random(width),random(height),random(0,0.1*width))



  //   To recreate the original image we're gonna need a looot of circles
  //   // Introducing... for loops

  for (let i = 0; i < 25; i++) {
    fill(random(colorScheme));
    circle(random(0, width), random(0, height), random(largeCrB * width, largeCrT * width));
  }


  // TODO: 
  //   change background color to black
  // draw 50 medium sized circles randomly on the screen
  //   decide how many small circles you want to draw and draw them randomly on the screen with a random color based on our color scheme
  //   remove circle outline

  for (let i = 0; i < 50; i++) {
    fill(random(colorScheme));
    // circle(random(0.05 * width, 0.95 * width), random(0.05 * height, 0.95 * height), random(smallCrB * width, smallCrT * width));
    circle(random(0, width), random(0, height), random(mediumCrB * width, mediumCrT * width));
  }

  for (let i = 0; i < 200; i++) {
    fill(random(colorScheme));
    circle(random(0, width), random(0, height), random(smallCrB * width, smallCrT * width));
  }

}

//automatically resizes the size of the webpage
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

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