const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;

    b = createSprite(100,100,10,10);
    b1 = new Box(330,235,30,40);
    b2 = new Box(360,235,30,40);
    b3 = new Box(390,235,30,40);
    b4 = new Box(420,235,30,40);
    b5 = new Box(450,235,30,40);
    b6 = new Box(390,195,30,40);
    b7 = new Box(360,195,30,40);
    b8 = new Box(420,195,30,40);
    b9 = new Box(390,155,30,40);

    
}

function draw(){
  background(0);
  Engine.update(engine);
  b1.display(); 
  b2.display(); 
  b3.display(); 
  b4.display(); 
  b5.display(); 
  b6.display(); 
  b7.display(); 
  b8.display(); 
  b9.display(); 
  
drawSprites();
}