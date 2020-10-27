
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var dustbin1,dustbin2,dustbin3,ground;
var circle1;
//var force=3

function preload()
{
	dimage=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin1 = new Dustbin(661,540,100,PI/100)
	dustbin2 = new Dustbin(720,580,100,PI/2)
	dustbin3 = new Dustbin(780,540,100,PI/100)
    ground = new Dustbin(400,600,800,PI/2)
	circle1 = new Paper()

	
  
}


function draw() {
  rectMode(CENTER);
  background(255);

 if(keyWentDown(UP_ARROW)){
Matter.Body.applyForce(circle1.body,circle1.body.position,{x:85,y:-95})


 }
 Engine.update(engine);
//matter.update(engine);
   ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  circle1.display();
  image(dimage,645,480,150,110);
  drawSprites();
 
}



