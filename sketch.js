
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1130,170,30);
	mango3=new mango(980,140,30);
	mango4=new mango(1200,200,30);
	mango5=new mango(1085,230,30);
	mango6=new mango(950,230,30);
	mango7=new mango(1040,120,30);
	mango8=new mango(900,200,30);
	mango9=new mango(1100,40,30);
	mango10=new mango(1000,50,30);
	mango11=new mango(1020,190,30);


	stoneObj=new stone(235,420,30);
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
  slingshot = new SlingShot(stoneObj.body,{x:235, y:420});

	Engine.run(engine);
	
}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();

  slingshot.display();

stoneObj.display();
  groundObject.display();

  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);
  detectCollision(stoneObj,mango6);
  detectCollision(stoneObj,mango7);
  detectCollision(stoneObj,mango8);
  detectCollision(stoneObj,mango9);
  detectCollision(stoneObj,mango10);
  detectCollision(stoneObj,mango11);

}
function detectCollision (Lstone,Lmango){
	mangoBodyPosition=Lmango.body.position
	stoneBodyPosition=Lstone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=Lmango.r+Lstone.r){
		Matter.Body.setStatic(Lmango.body,false)
	}


}
function keyPressed(){
	if(keyCode === 32){
	Matter.Body.setPosition(stoneObj.body, {x:235,y:420})
	slingshot.attach(stoneObj.body)
	}
}
function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    slingshot.fly();
}