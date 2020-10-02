
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_1.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  
  FoodGroup = new Group()
  obstacleGroup = new Group()
 
}



function setup() {
  createCanvas(500, 400)
  monkey = createSprite(35, 335, 10, 50)
  monkey.addAnimation("mon",monkey_running)
  monkey.scale=0.15
  
  ground = createSprite(250, 395, 1000, 10)
  ground.velocityX=-2
  
}


function draw() {
  background("white")
   drawSprites()
  
  if(ground.x===0){
    ground.x=500
  }
  
  if(keyDown("space")&& monkey.y>330){
    monkey.velocityY=-18
  }
  monkey.velocityY=monkey.velocityY+0.8
  monkey.collide(ground)

  if(frameCount%80===0){
    banana1()
  }
  if(frameCount%300===0){
    stone()
  }
  
  textSize(20)
  if(frameCount%30===0){
    score=score+1
  }
  text("Survival Time:"+score ,300,20)
  if(monkey.isTouching(
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  ))
}

function banana1(){
  ra = Math.round(random(120,200))
  banana = createSprite(500,ra,20,20)
  banana.addImage(bananaImage)
  banana.scale=0.1
  banana.velocityX=-2
  banana.lifetime=250
  FoodGroup.add(banana)
  drawSprites()
}
function stone(){
  rock = createSprite(500, 368 , 20, 20)
  rock.addImage(obstaceImage)
  rock.scale=0.2
  rock.velocityX=-2
  rock.lifetime=250
  obstacleGroup.add(rock)
}






