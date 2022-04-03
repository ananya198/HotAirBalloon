var asteroidG,asteroidimg;
var balloon,balloonimg;
var meadow;

function preload(){
  asteroidimg=loadImage("asteroid.png");
  balloonimg=loadImage("balloon1.png");
  meadow=loadImage("medow.png");
}

function setup(){
createCanvas(800,700);

ballon=createSprite(100,50,30,30);
balloon.addImage(balloonimg);
balloon.scale=0.5;
asteroidG=new group();


}


function draw(){
  background(meadow)

SpawnAsteroid()

if(asteroidG.isTouching(balloon)
  asteroidG.destroyEach();
)


  if(keyCode==LEFT_ARROW)
    {
        balloon.postion.x=5;
    }

 if(keyCode==RIGHT_ARROW)
    {
        balloon.postion.x=-5;
    }  

  
    
    

  drawSprites()
}

function SpawnAsteroid(){
    asteroid=createSprite(random(50,350),40,10,10);
    asteroid.addImage(asteroidimg);
    asteroid.scale = 0.07;
    asteroid.velocityY = 3;
  }
