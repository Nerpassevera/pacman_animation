// pos is the PacMan image position variable- it is set to 0 initially
var pos = 0; // Position on the screen on x-axis
//pageWidth is the width of the webpage. This is later used to calculate when Pac-Man needs to turn around. 
let pageWidth = window.innerWidth;
//This array contains all the PacMan movement images
const pacArray = [
  ['./images/PacMan1.png', './images/PacMan2.png'], // To the right
  ['./images/PacMan3.png', './images/PacMan4.png'], // To the left
];

// this variable defines what direction should PacMan go into:
// 0 = left to right
// 1 = right to left (reverse)
var direction = 1;

// This variable helps determine which PacMan image should be displayed. It flips between values 0 and 1
var focus = 0; // Opens and closes PacMan's mouth 

// This function is called on mouse click. Every time it is called, it updates the PacMan image, position and direction on the screen.
function Run() {
  let img = document.getElementById('PacMan');
  let imgWidth = img.width;
  focus = (focus + 1) % 2; //Opens and closes PacMan's mouth every cycle
  direction = checkPageBounds(direction, imgWidth, pos, pageWidth); // Checks boundaries each move and redirects PacMan if there is a wall
  img.src = pacArray[direction][focus]; //Picks img from the array depending on "mouyh cycle" and direction
  if (direction) { //If direction to the left
    pos -= 20;
    img.style.left = pos + 'px';
  } 
  else { // If direction to the right
    pos += 20;
    img.style.left = pos + 'px';
  }
}
// setInterval(Run, 100);
// TODO: Add a Javascript setInterval() method that will call the Run() function above every 300 milliseconds. Note: in the video, Dr. Williams uses the setTimeout() method, but here we are going to use a slightly different
// method called setInterval(), so that you can have practice using this method.
// Inside of the Run() function you will also have to add an extra argument "pageWidth", which is declared on line 4 when you call the checkPageBounds() function below. 

// This function determines the direction of PacMan based on screen edge detection. 
function checkPageBounds(direction, imgWidth, pos, pageWidth) {
  //
  // TODO: Complete this to reverse direction upon hitting screen edge
  //
  if (pos <= 0 || pos > pageWidth - imgWidth) {
    direction = (direction + 1) % 2;
  }
  return direction;
};

//Please do not change
module.exports = checkPageBounds;
