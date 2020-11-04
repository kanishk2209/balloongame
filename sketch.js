var bow , arrow,  background1;
var bowImage, arrowImage, green_balloonImage;
var red_balloonImage, pink_balloonImage;
var blue_balloonImage, backgroundImage;
var score,redB,greenB,pinkB,blueB,arrowB;
 
function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}

function setup() {
  createCanvas(600, 450);
  
  //creating background
  background1 = createSprite(0,0,600,600);
  background1.addImage(backgroundImage);
  background1.scale = 3.0;
  
  redB = new Group();
  pinkB = new Group();
  blueB = new Group();
  greenB = new Group();
  arrowB = new Group();
  
  // creating bow to shoot arrow
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
 score = 0;
}

function draw() {
  // moving ground
  background(134)
    background1.velocityX = -3 

    if (background1.x < 0){
      background1.x = background1.width/2;
    }
  
  //moving bow
  if(keyDown('up')){
    bow.velocityY = -3
  }
  
  if(keyDown('down')){
    bow.velocityY = 3
  }
  
   // release arrow when space key is pressed
  if (keyWentDown("space")) {
    var temp_arrow = createArrow();
    temp_arrow.addImage(arrowImage);
     temp_arrow.y = bow.y;
  }
  
  if(arrowB.isTouching(redB)){
    score = score+1;
    redB.destroyEach();
    arrowB.destroyEach();
  }
  
  if(arrowB.isTouching(greenB)){
    score = score+2.5;
    greenB.destroyEach();
    arrowB.destroyEach();
  }
  
  if(arrowB.isTouching(pinkB)){
    score = score+3;
    pinkB.destroyEach();
    arrowB.destroyEach();
  }
  
  if(arrowB.isTouching(blueB)){
    score = score+3.5;
    blueB.destroyEach();
    arrowB.destroyEach();
  }
  
  var select_balloon = Math.round(random(1,4));
  console.log(select_balloon)
  
  if (World.frameCount % 80 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }
  
  drawSprites();
  textSize(24);
  text('score: '+score,300,50);
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 8;
  red.lifetime = 200;
  red.scale = 0.1
  redB.add(red);
  return arrow;
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 8;
  blue.lifetime = 200;
  blue.scale = 0.1
  blueB.add(blue);
  return arrow;
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 8;
  green.lifetime = 200;
  green.scale = 0.1
  greenB.add(green);
  return arrow;
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 8;
  pink.lifetime = 200;
  pink.scale = 1
  pinkB.add(pink);
  return arrow;
}


// Creating  arrows for bow
function createArrow() {
  arrow= createSprite(480, 100, 5, 10);
  arrow.velocityX = -6;
  arrow.scale = 0.3;
  arrowB.add(arrow);
  return arrow;
}

