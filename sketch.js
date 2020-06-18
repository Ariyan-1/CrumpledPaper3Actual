var dustbinIMG, dustbin,paper,paperIMG;
var paperObject,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(1600, 700);
  rectMode(CENTER)
  
  engine = Engine.create();
  world = engine.world;

	paper = new Paper(450,300,100);

  ground=new Ground(width/2,670,1200,20);

  dustbin=new Dustbin(1350,600);

  launcher=new Launcher(paper.body,{x:450,y:300});
	
  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1200,
      height: 700,
      wireframes: false
    }
  });

	 Engine.run(engine);
  
}

function draw() {
  background(0);
  paper.display();
  ground.display();
  dustbin.display();
  };

  function mouseDragged(){
  Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY})
}

function mouseReleased(){
   launcher.fly()
}