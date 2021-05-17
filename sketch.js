var target,target1;
var person,person1;
var bullet,bullet1;
var top;
var decreaseSpeed;
var score=0;

function preload (){
target=loadImage("images/target2.png");
person=loadImage("images/Person1.png")
bullet=loadImage("images/bullet1.png")


}
function setup() {
  createCanvas(displayWidth,displayHeight);

  //top=createEdgeSprites();

  target1=createSprite(100,480,200,200); 
  target1.addImage(target);

  person1=createSprite(1400,450,200,200);
  person1.addImage(person);

  bullet1=createSprite(1270,400,50,50);
  bullet1.addImage(bullet);
  bullet1.scale=0.3;
  bullet1.visible=false;
}

function draw() {
  background("yellow"); 
  decreaseSpeed=bullet1.velcityX-2;
  text("Score",score+1,100,400);
  //top=createEdgeSprites();
  //target1.velocityY=10;
  //target1.bounceOff(top[1]);
  //target1.bounceOff(top[3]);

  if(keyWentDown("space")){
    bullet1.visible=true;
    bullet1.velocityX=-12;
  }
 
   if(bullet1.isTouching(target1)){
    textSize(200);
    text("You Won",500,200);
   
  }
  
  drawSprites();
}