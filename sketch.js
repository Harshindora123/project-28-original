
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree;
var ground;
var stone;
var boy;
var mango1;
var slingshot;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);
  

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     boy  = new Boy(100,200,200,250);
    ground = new Ground(511,480,1020,100);
     tree  = new Tree(380,130,500,400);
     
     stone = new Stone(100,300,35);
     slingshot  = new Chain(stone.body,{x:145,y:340});
     mango1  = new Mango(800,130,50,50);
     mango2  = new Mango(800,190,50,50);
     mango3  = new Mango(650,190,50,50);
     mango4  = new Mango(700,120,50,50);
     mango5  = new Mango(730,170,50,50);
     mango6  = new Mango(900,190,50,50);
     mango7  = new Mango(950,200,50,50);
     mango8 = new Mango(560,200,50,50);
     mango9  = new Mango(850,170,50,50);
     mango10  = new Mango(680,230,50,50);

 
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0,204,255);
  textFont("colonna MT")
  strokeWeight(2)
  stroke("white")
  fill("red")
  textSize(50)
  text("Press space to get a second chance!!",200,70)

  tree.display();
  ground.display();
  stone.display();
  boy.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  
  
  slingshot.display();

  drawSprites();
 
}


function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased(){
	slingshot.fly();
}
function keyPressed(){
  if(keyCode  === 32){
    Matter.Body.setPosition(stone.body,{x:145,y:340});
    slingshot.attach(stone.body);
  }
}

function detectCollision(lstone,lmango){
  mango1BodyPosition=lmango.body.position
  stone1BodyPosition=lstone.body.position

  var distance=dist(stone1BodyPosition.x,stone1BodyPosition.y,mango1BodyPosition.x,mango1BodyPosition.y)
if (distance<=lmango.radius+lstone.radius){
Matter.Body.setStatic(lmango.body,false);
}
}