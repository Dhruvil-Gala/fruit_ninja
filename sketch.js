var knife,knifeI;
var fruit,fruit1,fruit2,fruit3,fruit4;
var enemy,enemyA;
var play=1;
var end=0;
var gameState=1;
var fruitGroup,enemyGroup;
var play=1;
var end=0;
var gameState=1;
var score=0;
var gameOverSound,gameOver,gameOverI;
var knifeSound;
var randf,rande;

function preload(){
  knifeI=loadImage("sword.png")
 
  fruit1=loadImage("fruit1.png");
  fruit2=loadImage("fruit2.png");
  fruit3=loadImage("fruit3.png");
  fruit4=loadImage("fruit4.png");
  
  enemyA=loadImage("alien1.png","alien1.png");
  
  knifeSound=loadSound("knifeSwooshSound.mp3");
  
  gameOverSound=loadSound("gameover.mp3");
  
  gameOverI=loadImage("gameover.png");
  
}


function setup(){
  createCanvas(400,400);
  
  knife=createSprite(200,200,20,20);
  knife.addImage(knifeI);
  knife.scale=0.4;
  
 
  enemyGroup = createGroup();
  fruitGroup = createGroup();
  
  
}


function draw(){
  background(97, 255, 234);
  if(gameState===1){
  knife.x=mouseX;
  knife.y=mouseY;
  
  
  if(fruitGroup.isTouching(knife)){
    fruitGroup.destroyEach();
    score=score+2;
    knifeSound.play();
  }
    
  if(enemyGroup.isTouching(knife)){
    gameState=0;
    gameOverSound.play();
    enemyGroup.setVelocityXEach(0);
    fruitGroup.setVelocityXEach(0);
  }  
  
  fruits();
  enemies();
  }
  
 if(gameState===0){
   gameOverF();
 }
  
  
  text("score:"+score,330,20);
  
  drawSprites();
}

function fruits(){
  if(frameCount%80===0){
   fruit=createSprite(400,200,20,20);
   fruit.scale=0.2;
   randf= Math.round(random(0,1)); 
   var m=Math.round(random(1,4));
   if(m==1){
     fruit.addImage(fruit1);
   } else if(m==2){
     fruit.addImage(fruit2);
   }else if(m==3){
     fruit.addImage(fruit3);
   }else if(m==4){
     fruit.addImage(fruit4);
   }
   fruit.y=Math.round(random(50,340));
   
    if(randf===1){
      fruit.x=400;
      fruit.velocityX=-(7+(score/4)); 
    }
    if(randf===0){
       fruit.x=0;
      fruit.velocityX=(7+(score/4));
    }
   
   fruit.setLifetime=100;
    
    fruitGroup.add(fruit);
  }
}

function enemies(){
  if (frameCount%200===0){
    enemy=createSprite(0,200,20,20);
    enemy.addImage(enemyA);
     
    rande= Math.round(random(0,1));
    
    enemy.y=Math.round(random(100,300));
    enemy.velocityX=8+(score/10);
    enemy.setLifetime=50;
    
    if(rande===1){
      enemy.x=400;
      enemy.velocityX=-(7+(score/10)); 
    }
    if(rande===0){
      enemy.x=0;
      enemy.velocityX=(7+(score/10));
    }
    
    enemyGroup.add(enemy);
    
  }
}

function gameOverF(){
  gameOver=createSprite(200,200,100,100);
  gameOver.addImage(gameOverI);
  gameOver.scale=1;
  
}
