

var bow , arrow,  background, score;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var arrowGroup, RG, BG, GG, PG;

 
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
  createCanvas(600, 600);
  
  //creating background
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  score = 0;
  
  RG = new Group ();
  BG = new Group ();
  GG = new Group ();
  PG = new Group ();
  
  arrowGroup = new Group ();
 
}

function draw() {
  // moving ground
    background.velocityX = -3 

    if (background.x < 0){
      background.x = background.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    
createArrow();
    
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
  
  
  text.depth = 6;
  
  if (arrowGroup.isTouching (BG) ){
  BG.destroyEach();
  arrowGroup.destroyEach()
  score = score + 1;
  
  }
  
   if (arrowGroup.isTouching (RG) ){
  RG.destroyEach();
  arrowGroup.destroyEach()
  score = score + 2;
  
  }
  
   if (arrowGroup.isTouching (GG) ){
  GG.destroyEach();
  arrowGroup.destroyEach()
  score = score + 5;
  
  }
  
   if (arrowGroup.isTouching (PG) ){
  PG.destroyEach();
  arrowGroup.destroyEach()
  score = score + 10;
  
  }
  
  drawSprites();
  
  text("score : " + score, 270, 30)
  
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1
  RG.add(red);
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1
  BG.add(blue);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1
  GG.add(green);
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1
  PG.add(pink);
}


// Creating  arrows for bow
function createArrow() {
  arrow= createSprite(480, 100, 5, 10);
  arrow.addImage(arrowImage);
  arrow.velocityX = -6;
  arrow.scale = 0.3;
  arrow.y = bow.y;
  
  arrowGroup.add(arrow);
}
