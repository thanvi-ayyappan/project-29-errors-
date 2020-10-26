const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var ground1,stand;
var block1,block2,block3,block4,block5,block6,block7,block8,block9;
var polygon;
var slingshot;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  engine=Engine.create();
  world=engine.world; 

  ground1=new ground(750,200,800,15);
  stand=new ground(700,150,50,90);

//level 2
block1=new Box(330,235,30,40);
block2=new Box(360,235,30,40);
block3=new Box(390,235,30,40);
block4=new Box(420,235,30,40);
block5=new Box(450,235,30,40);
//level 3
block6=new Box(360,195,30,40);
block7=new Box(390,195,30,40);
block8=new Box(420,195,30,40);
//top
block9=new Box(390,155,30,40);

//polygon holder with slings
polygon=Bodies.circle(50,200,20);
World.add(world,polygon);
imageMode(CENTER);


slingshot=new Slingshot(this.polygon,{x:100,y:200});
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  ground1.display();
  stand.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  drawSprites();
}
function mouseDragged(){
  //if(gameState!="launched"){
      Matter.Body.setPosition(bird1.body,{x:mouseX,y:mouseY}) 
  //}
  }

function mouseReleased(){
  sling.fly();
  gameState="launched";
}