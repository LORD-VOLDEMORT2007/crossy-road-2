var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school;
function preload()
{
 
}

function setup() {
  createCanvas(1366,700);
  carGroup1 = new Group();
  logGroup1 = new Group();
  
  
  
  for (i = 0 ; i < 40 ; i ++){

    logs = new Log(-9)
    logGroup1.add(logs.spt)

  }

  for(i = 0; i < 6 ; i++){

    grass = createSprite(683 , height - 50 - (i * 400) , width , grassHeight)

    if(i % 2 === 0 ){

      road1 = createSprite(683 , height - 150 - (i * 400) - grassHeight , width ,300)
      road1.shapeColor = 'black'
    }

    grass.shapeColor = 'grey'

  }

  for (i = 0 ; i < 40 ; i++){
    cars = new Car(9)
    carGroup1.add(cars.spt)

  }
  console.log("hi")

  player = new Player( width/2 ,height - 25)

 }

function draw() {
  background("skyblue");
  for(i = 1 ; i < 40 ; i ++){
  if (carGroup1[i].x > 1366 ){
    carGroup1[i].x = 0
  }

  if (carGroup1[i].x < 0){

    carGroup1[i].x = 1366
  }
  }

  for(i = 1 ; i < 40 ; i ++){
    if (logGroup1[i].x < -70 ){
      logGroup1[i].x = 1366
    }}



    if (keyDown("left"))  
    { 
      player.moveLeft();
    }
    if (keyDown("right")) 
    { 
      player.moveRight();
    }
    if (keyDown("up")) 
    {
      player.moveUp();
    }
    if (keyDown("DOWN_ARROW")) 
    {
      player.moveDown();
    }

  translate (0 , -player.spt.y + height - 150)
    
  drawSprites();
}

