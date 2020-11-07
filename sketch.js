
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper;
var red1,red2,red3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,height,width,50);

	paper = new Paper(200,100,20);

	red1 = createSprite(540, 660, 200,20);
	red1.shapeColor=color("red");
	World.add(world, red1);

	red2 = createSprite(450, 600, 20,100);
	red2.shapeColor=color("red");
	World.add(world, red2);

	red3 = createSprite(630, 600, 20,100);
	red3.shapeColor=color("red");
	World.add(world, red3);

	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  paper.display();
  
  keyPressed();
  drawSprites();

}
function keyPressed(){
  if (keyCode === UP_ARROW){
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  }


}



