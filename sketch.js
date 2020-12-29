var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);

  speed=random(55,90);
  weight=random(400,1500);

  car = createSprite(50, 200, 30, 30);
  car.velocityX=speed;

  wall = createSprite(1500, 200, 30, height/2);
  wall.shapeColor= color("white");

}
  
function draw() {
  background("black");  

  isTouching(car,wall);

  if(wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5 * weight * speed* speed/22509;
    if (deformation>180)
    {
      car.shapeColor=color(255,0,0);
      background(176, 18, 4)
    }

    if (deformation<180 && deformation>100)
    {
      car.shapeColor=color(230,230,0);
      background(252, 116, 5)
    }
  
    if (deformation<100)
    {
     car.shapeColor=color(0,255,0);
     background(20, 125, 4)
    }
  }
  
  drawSprites();
}

function isTouching(car,wall){
  if(car.x-wall.x<wall.width/2+car.width/2&&
    wall.x-car.x<wall.width/2+car.width/2&&
    car.y-wall.y<wall.height/2+car.height/2&&
    wall.y-car.y<wall.height/2+car.height/2){

    //wall.shapeColor="grey";
    car.velocityX=0;
  }

  else{
    car.shapeColor="white";
    //wall.shapeColor="grey";
  }
}