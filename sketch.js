var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var score = 0

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -4;

  foodGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
  background(255);

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  if (keyDown("space") && monkey.y >= 314) {
    monkey.velocityY = -20;
  }
  monkey.velocityY = monkey.velocityY + 0.8

  monkey.collide(ground);
  drawSprites();
  console.log(monkey.y);

 
  
  stroke("black");
  textSize(20);
  fill("black");
 score = score + Math.round(getFrameRate()/60);
  text("Survival Time: "+score, 100,50);
  
  spawnFood();
  spawnObstacles();
  
  
}

function spawnFood() {
  if (frameCount % 80== 0) {
    banana = createSprite(400, 100, 10, 20);
    banana.addImage(bananaImage);
    banana.y = Math.round(random(120,200))
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime = 190;
    foodGroup.add( banana);
  }
}

function spawnObstacles(){
  if(frameCount % 300 ==0){
    obstacle=createSprite(400,325,10,20);
    obstacle.velocityX=-5;
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.1;
    obstacle.lifetime = 200;
    obstacleGroup.add(obstacle);
  }
}