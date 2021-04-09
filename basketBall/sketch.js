const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;  
var bg
var engine,world;

function preload(){
bg=loadImage("court.png");

}

function setup(){
createCanvas(600,500);
 engine=Engine.create();
world=engine.world;
ball=new Ball(500,-70,-20);
Hook=new hook(220,230);
ground=new Ground(300,480,2000,2000) 

}
function draw(){    
background(bg);

Engine.update(engine);

ball.display();
Hook.display();
if(keyCode===UP_ARROW){
    Matter.Body. applyForce(ball.body,ball.body.position,{x:-10,y:-10}) 
  }
}








