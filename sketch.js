const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var pig1;
var log1;
var bird1;

var box3,box4,pig2,log2;

var log3,box5,log4;

var bird1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20)

    box1 = new Box(800,355,70,70);
    pig1 = new Pig(880,365);
    box2 = new Box(960,355,70,70);
    log1 = new Logs(880,310,255,PI/2);

    box3 = new Box(800,265,70,70);
    pig2 = new Pig(880,275);
    box4 = new Box(960,265,70,70);
    log2 = new Logs(880,220,255,PI/2);

    box5 = new Box(880,175,70,70);
    log3 = new Logs(820,150,110,PI/4);
    log4 = new Logs(950,175,110,-PI/4);

    bird1 = new Bird(100,100);

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    pig2.display();
    box4.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    bird1.display();
}