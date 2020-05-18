const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  holder = Bodies.rectangle(200, 100, 100, 40,{isStatic : true});
  World.add(world, holder);

  ball = Bodies.circle(200, 250, 50, {restitution:1.0});
  World.add(world, ball);
}

function draw() {
  background("yellow");  

  fill("black");
  rectMode(CENTER);
  rect(holder.position.x, holder.position.y, 100, 40);

  stroke("blue");
  strokeWeight(7);
  line(ball.position.x, ball.position.y, 200, 100);

  fill("red");
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 50);

  moveBall();

  fill("white");
  text("SPACE = USE MOUSE",10,50);
  text("ENTER = LEAVE",250,50);

  drawSprites();
}

function moveBall(){
  if(keyCode == 32){
    ball.position.x = mouseX;
    ball.position.y = mouseY;
  }
  if(keyCode == ENTER){
    ball.position.x = 200;
    ball.position.y = 250;
  }
}