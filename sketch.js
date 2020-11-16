var trex;
var ground, invisibleGround;
var cloud,cloudgroup;
var obstacle,obstaclegroup;
var score=0;





function setup() {
  createCanvas(600, 200);
  
  trex = createSprite(50,180,20,50);
  trex.scale = 0.5;
  cloudgroup=new Group();
  obstaclegroup=new Group();
  ground = createSprite(200,180,400,20);
  ground.x = ground.width /2;
  ground.velocityX = -2;
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
}

function draw() {
  background("white");
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(600,170,10,40);
    
    obstacle.velocityX = -6;
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 100;
    obstaclegroup.add (obstacle)
}
score=score+Math.round(getFrameRate()/60)
  text("score:"+score,500,50)
  if(keyDown("space")) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  if (frameCount % 60 === 0) 
  {
    var cloud = createSprite(600,100,40,10);
    cloud.y = Math.round(random(10,100));
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 200;
    
    //adjust the depth
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    cloudgroup.add(cloud)
  }
  
  trex.collide(invisibleGround);
  drawSprites();
  
}