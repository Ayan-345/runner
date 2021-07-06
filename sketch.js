var path;
var pathIMG;
var runner;
var runnerIMG;

function preload(){
  //pre-load images
pathIMG = loadImage("path.png");
runnerIMG = loadAnimation("Runner-1.png","Runner-1.png","Runner-2.png","Runner-1.png")

}

function setup(){
  createCanvas(400,400);

  //create sprites here 

  path = createSprite(200,200);
  path.addImage(pathIMG);
  path.velocityY = 4;
  path.scale = 1.2;

 runner = createSprite(200,350)
 runner.addAnimation("jacksonrunning",runnerIMG)
 runner.scale = 0.1
runner.velocityY = -0.08

invisibleGround1 = createSprite(40,350,10,400);
  invisibleGround1.visible = false;

  invisibleGround2 = createSprite(360,350,10,400);
  invisibleGround2.visible = false;


}

function draw() {
  background(0);
  path.velocityY = 4;

  if ( path.y > 400){
    path.y = height/5
  }
  drawSprites()
  if (keyDown("right")) {
    runner.x = runner.x + 3;
  }
  if (keyDown("left")) {
   runner.x = runner.x - 3;
  }
runner.collide(invisibleGround1);
runner.collide(invisibleGround2);



}
