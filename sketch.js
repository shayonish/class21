const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine , world;
var object;
var ball , ground;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  ground = Bodies.rectangle(400,390,800,20 , options = {isStatic:true});
  World.add(world , ground);
  object = Bodies.rectangle(200,100,50,50);
  World.add(world , object);
  ball = Bodies.circle(400,100,20 , options = {restitution : 1});
  World.add(world , ball);
  console.log(object);
  console.log(object.type);
  console.log(object.position.x);
  console.log(object.position.y);
}

function draw() {
  background(0,0,0); 
  Engine.update(engine);
  rectMode(CENTER); 
  rect(ground.position.x,ground.position.y,800,20);
  rectMode(CENTER); 
  rect(object.position.x,object.position.y,50,50);
  ellipseMode(RADIUS); 
  ellipse(ball.position.x,ball.position.y,20,20);

  
}