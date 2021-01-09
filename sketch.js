const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var p1,p2,p3,p4,p5,p6,p7,pin_img;
var lane_img,lane,bowl_img,bowl;

function preload(){
lane_img=loadImage("court.png");


}
function setup(){
createCanvas(displayWidth,displayHeight-147);
engine=Engine.create();
world=engine.world;

lane=createSprite(700,350);
lane.addImage(lane_img);
lane.scale=0.11;

p1=new Pin(650,80);
p2=new Pin(690,60);
p3=new Pin(610,60);
p4=new Pin(730,40);
p5=new Pin(570,40);
p6=new Pin(530,20);
p7=new Pin(780,20);
p8=new Pin(650,40);
p9=new Pin(600,20);
p10=new Pin(700,20);
bowl=new Bowl(280,280,70)


}
function draw(){
    background("lightyellow");
    
    drawSprites();
    p10.display();
    p9.display();
    p2.display();
    p3.display();
    p4.display();
    p5.display();
    p6.display();
    p7.display();
    p8.display();
    p1.display();
   bowl.display();
}
function mouseDragged() 
{
   Matter.Body.setPosition(bowl.body, { x: mouseX, y: mouseY }); 
  }
