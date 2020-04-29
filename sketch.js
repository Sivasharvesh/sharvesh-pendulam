const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var bird, slingShot;

function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  bird = new Bird(200,200);

  chain = new Chain(bird.body,{x:200,y:60});


}

function draw(){
background(0);

  Engine.update(engine);
  strokeWeight(4);

  bird.display();
  chain.display(); 
}


