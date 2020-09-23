var bullet,wall,thickness , damage ;


var speed, weight; 


function setup() {
  createCanvas(1600, 400);


	speed=random(223,321);
	weight=random(30,52) ; 
	thickness =random(22,83) ; 


	bullet=createSprite(50, 200, 50,20);   
	bullet.velocityX = speed;
	bullet.shapeColor= "white" ; 

    damage = 0.5*weight*speed*speed / thickness*thickness*thickness 
  
  	wall=createSprite(1200,200,thickness, height/2) ; 
  	wall.shapeColor=color(80,80,80)
}


function draw() {
  background(0);

  if(hasCollided(bullet , wall))
  {
	  bullet.x = 0 ; 
	   if(damage>10)
	   {
		   wall.shapeColor = color(255,0,0); 
	   }
		
	   if(damge<10)
	   {
		   wall.shapeColor = color(0,255,0) ; 
	   }

  }
  
  drawSprites();
 
}

function hasCollided(bullet , wall)
{
   bulletRightEdge = bullet.x + bullet.width ; 
   wall.leftEdge = wall.x ; 
   if (bulletRightEdge<= wallLeftEdge ) {
	   return =true ; 
   } else {
	  return = false ;  
   }

}





