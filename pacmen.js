var pos = 0;
const pacArray = [
  ['./images/PacMan1.png', './images/PacMan2.png'],
  ['./images/PacMan3.png', './images/PacMan4.png'],
];

const pacMen = []; // This array holds all the pacmen


// SET TO RANDOM <---
// This function returns an object with random values
function setToRandom(scaleX, scaleY = scaleX) {
  return {
    x: Math.random() * scaleX,
    y: Math.random() * scaleY,
  };
}

let pageWidth = window.innerWidth;
let pageHeight = window.innerHeight;

// PLUS OR MINUS <---
function plusOrMinus() {
  result = Math.random() < 0.5 ? -1 : 1;
  return result;
}

// MAKE PAC <---
// Factory to make a PacMan at a random position with random velocity
function makePac() {
  // Add image to div id = game
  let game = document.getElementById('game');
  let newimg = document.createElement('img');
  // returns an object with random values scaled {x: 33, y: 21}
  let velocity = setToRandom(10 * plusOrMinus()); // {x:?, y:?}
  let position = setToRandom(pageWidth - 100, pageHeight - 100);
  newimg.style.position = 'absolute';
  newimg.src = './images/PacMan1.png';
  newimg.width = 100;
  // TODO: set position here
  newimg.style.left = position.x;
  newimg.style.top = position.y;
  // TODO add new Child image to game
  game.appendChild(newimg/* TODO: add parameter */);
  // return details in an object
  let direction = 0;
  let mouthPos = 0;
  if(Math.sign(velocity.x) < 0) {
    direction = 1;
  }

  return {
    position,
    velocity,
    newimg,
    direction,
    mouthPos
  };
}


// UPDATE <---
function update() {
  // loop over pacmen array and move each one and move image in DOM
  pacMen.forEach((item) => {
    checkCollisions(item);
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;

    item.newimg.style.left = item.position.x;
    item.newimg.style.top = item.position.y;
    item.newimg.src = pacArray[item.direction][item.mouthPos];
    item.mouthPos = 1 - item.mouthPos;
  });
  setTimeout(update, 100);
}

// CHECK COLLISIONS <---
function checkCollisions(item) {
  // TODO: detect collision with all walls and make pacman bounce
  if((item.position.x + 100) > pageWidth || item.position.x <= 0) {
    item.velocity.x = -item.velocity.x;
    item.direction = 1 - item.direction;
  }
  if((item.position.y + 100) > pageHeight || item.position.y <= 0) {
    item.velocity.y = -item.velocity.y;
  }
}

function makeOne() {
  pacMen.push(makePac()); // add a new PacMan
}

function changeBtnName() {
  let btn = document.getElementsByClassName('btn start')[0];
  if (btn.textContent === 'Start Game') {
    btn.textContent = "Boost'em!"
  }
}
//don't change this line
module.exports = { checkCollisions, update, pacMen };