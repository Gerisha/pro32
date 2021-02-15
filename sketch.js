const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var chain;
var ball;
var point;
var ballImg;
var monster1,monster2,monster3,monster4,monster5,monster6,monster7,monster8,monster9,monster10,monster11,monster12,monster13,monster14,monster15;
var score = 0;
var ground;

function preload() {

  ballImg = loadImage("ball.png");

  
}

function setup() {
 //createCanvas(960,470);
  createCanvas(3000,500)
  engine = Engine.create();
  world = engine.world;

  strokeWeight(2)

  ground = new Ground(600,500,1200,60)

  monster1 = new Monster(599 ,420);
  monster2 = new Monster(670,420);
  monster3 = new Monster(740,420);
  monster4 = new Monster(810,420);
  monster5 = new Monster(890,420);
  monster6 = new Monster(630,325);
  monster7 = new Monster(700,325);
  monster8 = new Monster(775,325);
  monster9 = new Monster(850,325);
  monster10 = new Monster(658,230);
  monster11 = new Monster(735,230);
  monster12 = new Monster(810,230);
  monster13 = new Monster(697,145);
  monster14 = new Monster(772,145);
  monster15 = new Monster(745,60);

  ball = new Ball(55, 190, 30, 30);

  point = Bodies.circle(50, 500, 20);
  World.add(world, point);

  chain = new Slingshot(this.point,{x:150, y:160});
}

function draw() {
  background("lime");
  Engine.update(engine);

  
  push();
  fill("black");
  strokeWeight(4);
  textSize(20);
  text("Drag the ball and release it to launch it towards the monsters,and destroy them.", 5, 30);
  pop();

  ground.display()
  monster1.display()
  monster2.display()
  monster3.display()
  monster4.display()
  monster5.display()
  monster6.display()
  monster7.display()
  monster8.display()
  monster9.display()
  monster10.display()
  monster11.display()
  monster12.display()
  monster13.display()
  monster14.display()
  monster15.display()

  imageMode(CENTER);
  image(ballImg, point.position.x, point.position.y, 50, 45);

  chain.display(); 

}
function mouseDragged() {

  Matter.Body.setPosition(this.point, {x: mouseX , y: mouseY});

}


function mouseReleased() {

  chain.fly();
  monster1.fly()
  monster2.fly()
  monster3.fly()
  monster4.fly()
  monster5.fly()
  monster6.fly()
  monster7.fly()
  monster8.fly()
  monster9.fly()
  monster10.fly()
  monster11.fly()
  monster12.fly()
  monster13.fly()
  monster14.fly()
  monster15.fly()

}
