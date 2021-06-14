
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var rope1;
var roof;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(600, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(300,100,400,20,roof_options);
    World.add(world,roof);

    b1 = new Ball(200);
   

	b2 = new Ball(240);
   
	b3 = new Ball(280);
	b4 = new Ball(320);
	b5 = new Ball(360);




	Engine.run(engine);
	
   rope1 = Matter.Constraint.create ({
       pointA : {x: 200 , y:100 },
       bodyB : b1.body ,
       length:200,
    })

   World.add(world,rope1);

   rope2 = Matter.Constraint.create ({
    pointA : {x: 240 , y:100 },
    bodyB : b2.body ,
   length:200,})
    World.add(world,rope2); 

    rope3 = Matter.Constraint.create ({
    pointA : {x: 280 , y:100 },
    bodyB : b3.body ,
    length:200,})
    World.add(world,rope3); 
  
    rope4 = Matter.Constraint.create ({
    pointA : {x: 320 , y:100 },
    bodyB : b4.body ,
    length:200,})
    World.add(world,rope4); 
                
          
  
    rope5 = Matter.Constraint.create ({
    pointA : {x: 360 , y:100 },
    bodyB : b5.body ,
    length:200,})
    World.add(world,rope5); 
    



}

function draw() {
  rectMode(CENTER);
  background("pink");
  Engine.update(engine)

fill("#301934")
  rect(roof.position.x,roof.position.y,400,20);

textSize(30)
text ("NEWTON'S CRADLE",100,200)

  //call display() to show ropes here
  textSize(20)
  text("Press left key to play",300,450)

  //create ellipse shape for multiple bobs here
   b1.display();
   b2.display();
   b3.display();
   b4.display();
   b5.display();
 
 line(rope1.pointA.x, rope1.pointA.y, b1.body.position.x, b1.body.position.y);
 line(rope2.pointA.x, rope2.pointA.y, b2.body.position.x, b2.body.position.y);
 line(rope3.pointA.x, rope3.pointA.y, b3.body.position.x, b3.body.position.y);
 line(rope4.pointA.x, rope4.pointA.y, b4.body.position.x, b4.body.position.y);
 line(rope5.pointA.x, rope5.pointA.y, b5.body.position.x, b5.body.position.y);
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
  if(keyCode === LEFT_ARROW){
    Matter.Body.applyForce (b1.body , {x:0,y:0} , {x:-0.09,y:0} )
  }  
  }
