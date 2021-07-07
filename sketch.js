const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, ground, box1, box2, box3, box4, box5;
var engine, world, paper;
var trashimg
function preload()
{
	trashimg = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Paper(200,200,50)
	console.log(paper.x,paper.y,paper.width)
	ground = new Ground(400,680,800,30)
	box1 = new Dustbin(715,547,20,130)
	box2 = new Dustbin(580,547,20,130)
	box3 = new Dustbin(647,650,155,20)

	box5 = createSprite(650,590,150,140)
	box5.scale = .65
	box5.addImage(trashimg)
	

	Engine.run(engine);

	rectMode(CENTER);
	

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  paper.display()
  ground.display()
  box1.display()
  box2.display()
  box3.display()
  box5.display()
  drawSprites();
 
}

function keyPressed()
{
	//not being thrown
    if(keyCode===UP_ARROW)
    {
	    Matter.Body.applyForce(paper.body, paper.body.position, {x:350, y:-450})
		console.log("Returned")

        
		
    }
}

