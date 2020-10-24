
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, paper;
var daleft,daright,dabtm;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	ground = new Ground(600,690,1200,20);

	paper = new Paper(100,350,20);

	daleft = new Dustbin(892,630,15,100);
	daright = new Dustbin(1058,630,15,100);
	dabtm = new Dustbin(975,670,150,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  

  ground.display();
  paper.display();
  daleft.display();
  daright.display();
  dabtm.display();



  drawSprites();
 
}



function keyPressed() {

	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper.body,paper.body.position, {x:85, y:-85});

	}

}