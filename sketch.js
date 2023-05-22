
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1000,500);

	engine = Engine.create();
	world = engine.world;

	var ball_options = {
		isStatic : false,
		restitution : .3,
		friction : 0,
		density : 1.2
	}

	//Create the Bodies Here.
	ground = new Ground(500,height/2,width-400,10,0);
	World.add(world,ground);

	left_edge = new Ground(0,height/2,10,height,0);
	World.add(world,left_edge);

	right_edge = new Ground(width,height/2,10,height,0);
	World.add(world,right_edge);

	left_slide = new Ground(width/8,(height/4)*3,width/4,10);
	World.add(world, left_slide);

	right_slide = new Ground((width/8)*7,(height/4)*3,width/4,10);
	World.add(world, right_slide);

	left_wall = new Ground(width/4,(height/8)*7,10,height/4+10);
	World.add(world,left_wall)

	right_wall = new Ground((width/4)*3,(height/8)*7,10,height/4+10);
	World.add(world,right_wall);

	ground0 = new Ground(width/2,height,width/2,10);
	World.add(world,ground0);

	ball = Bodies.circle(width/2,50,20,ball_options);
	World.add(world,ball);

	Engine.run(engine);
  
	console.log(left_slide.angle)
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  
  ellipse(ball.position.x, ball.position.y, 20);
  
  ground.display();
  left_edge.display();
  right_edge.display();
  left_slide.display();
  right_slide.display();
  left_wall.display();
  right_wall.display();
  ground0.display();

  if(keyCode == RIGHT_ARROW) {
	move("right");
	//console.log(ball.position.x + ", " + ball.position.y);
  }

  if(keyCode == LEFT_ARROW) {
	move("left");
	//console.log(ball.position.x + ", " + ball.position.y);
  }

  text("Left Arrow",40,40);
  text("Right Arrow",40,60);
  
  drawSprites();
 
}


function move(direction) {
	if(direction == "right") {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.5,y:0});
	} else if(direction == "left") {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:-0.5,y:0});
	}
	
}
