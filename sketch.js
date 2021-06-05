//creating constant for easier use and so that the value remains constant
const World = Matter.World;
const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//creating variables for engine and world
var engine, world;

//creating variables for different objects
var ground;
var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var block10, block11, block12, block13, block14, block15, block16, block17, block18, block19, block20, block21,block22;
var ball;
var sling;

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(2000,600);
  
  //creating blocks for making building
  block1 = new Block(500,150);
  block2 = new Block(500,150);
  block3 = new Block(500,150);
  block4 = new Block(500,150);
  block5 = new Block(500,150);
  block6 = new Block(500,150);
  block7 = new Block(500,150);
  block22 = new Block(500,10)

  block8 = new Block(570,150);
  block9 = new Block(570,150);
  block10 = new Block(570,150);
  block11= new Block(570,150);
  block12= new Block(570,150);
  block13 = new Block(570,150);
  block14 = new Block(570,150);

  block15 = new Block(640,150);
  block16 = new Block(640,150);
  block17 = new Block(640,150);
  block18 = new Block(640,150);
  block19 = new Block(640,150);
  block20 = new Block(640,150);
  block21 = new Block(640,150);

  //creating ground
  ground = new Ground(450,500);

  //creating ball
  ball = new Ball(300,50);

  //attachin ball to a point
  sling = new SlingShot(ball.body,{x:350, y:50});

}

function draw() {
  background(180);  
  Engine.update(engine);

  //displaying all the objects
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block22.display();
  
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();


  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  ball.display();

  sling.display();

  ground.display();

  drawSprites();
}