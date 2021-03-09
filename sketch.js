// write all variables
var PLAY=1;
var END=0;
var gameState=1;

var sword,fruit1,fruit2,fruit3,fruit4,germ1,germ2;
var swordImage,germImage,gameoverImage;
var fruitGroup,germsGroup;
var gameover;
var score=0;

function preload(){
  // load all images
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  germImage = loadAnimation("alien1.png","alien2.png");
  swordImage = loadImage("sword.png");
  gameoverImage = loadImage("gameover.png")
  
 
}

function setup(){
  createCanvas(600,600);
  //create sprite for sword
  // create new groups for fruit and germs
  sword = createSprite(100,200,20,20);  
  sword.scale=0.72;
  sword.addImage(swordImage);
  fruitGroup = new Group();
  germsGroup = new Group();
}

function draw(){
  background("lightblue");
  
  // write a if condition for gamestate play
  if(gameState === PLAY){
 
  germs();
  fruits();
     
  sword.y=World.mouseY;
  sword.x=World.mouseX;   
    
  
    
    // write an if condiftion of fruit group and germ group touching sword .
   if(fruitGroup.isTouching(sword)) {
    fruitGroup.destroyEach();
    score=score+2;
   }
    
  if(germsGroup.isTouching(sword)){
    gameState = END;
  }
  }
  
     
     else if(gameState === END) {
      
      fruitGroup.destroyEach();
      germsGroup.destroyEach();
      fruitGroup.velocityX=0;
      fruitGroup.velocityY=0;
      germsGroup.velocityX=0;
      fruitGroup.velocityY=0;
      sword.addImage(gameoverImage);
      sword.scale=1.5;
      sword.x=300;
      sword.y=300;

    }
  
    
  
  
  drawSprites();
  
  text("Score : " + score,500,50);
  
}

function fruits() {
  
  if(World.frameCount%80===0){ 
   fruit=createSprite(600,200,20,20);
   fruit.scale=0.2;
   
    r=Math.round(random(1,4)); 

     if(r == 1) {
      fruit.addImage(fruit1);
     } 
     else if (r == 2){
      fruit.addImage(fruit2)
     } 
     else if (r == 3){
      fruit.addImage(fruit3)
     } 
     else if (r == 4){
      fruit.addImage(fruit4)
     }

     fruit.y=Math.round(random(50,340));
     fruit.velocityX=-9;
     fruit.setlifetime=200;

     fruitGroup.add(fruit);
  }
  
}
  

function germs() {
  
   if(World.frameCount%200 === 0) { 
     
     germ=createSprite(600,200,20,20);
     germ.addAnimation("moving", germImage);
     germ.y=Math.round(random(100,300)); 
     germ.velocityX=-10;
     germ.setlifetime=50;

     germsGroup.add(germ);  

   }
  
   

}