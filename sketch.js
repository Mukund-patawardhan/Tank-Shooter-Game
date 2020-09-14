// You could have multiple flags like: start, launch to indicate the state of the game.

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,tank,ball,shoot;
var b1;
var dis=0,move=0;
var posX;

var life=20,lives=1,score=0,soldiersLeft=14;

function preload(){
    boom=loadImage("boom2.png");
    bg=loadImage("BG.jpg");
    bg1=loadImage("BG1.jpg");
    inst=loadImage("Text.png")
}

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    
    ground=new Ground(0,600,60000000,10);
    ball=new Ball(0,580,50);
    tank=new Tanker(0,580);
    shoot=new ShootBall(ball.body,{x:tank.body.position.x,y:tank.body.position.y});
    b1=new Brick(1500,0,100,200);
    b2=new Brick(1500,400,100,200);
    b3=new Brick(2000,500,200,50);
    b4=new Brick(2200,500,50,300);
    b5=new Brick(2200,100,200,50);
    b6=new Brick(2500,500,200,200);
    b7=new Brick(2500,250,200,200);
    b8=new Brick(2500,-100,200,200);
    b9=new Brick(4500,500,200,200);
    b10=new Brick(4500,250,200,200);
    b11=new Brick(4500,-100,200,200);
    b12=new Brick(3700,400,100,300);
    b13=new Brick(1000,500,300,200);
    b14=new Brick(5500,400,50,100);
    b15=new Brick(6000,500,50,100);
    b16=new Brick(6500,500,50,100);
    b17=new Brick(7000,250,50,100);
    b18=new Brick(7500,500,100,200);
    b19=new Brick(8500,500,100,200);
    b20=new Brick(9000,500,100,200);
    b21=new Brick(9500,500,100,200);
    b22=new Brick(9000,200,2000,20);


    s1=new Soldiers(2000,400);
    s2=new Soldiers(3100,400);
    s3=new Soldiers(3500,400);
    s4=new Soldiers(4000,400);
    s5=new Soldiers(4700,0);
    s6=new Soldiers(4900,400);
    s7=new Soldiers(4300,400);
    s8=new Soldiers(5400,400);
    s9=new Soldiers(5900,400);
    s10=new Soldiers(6400,400);
    s11=new Soldiers(6900,400);
    s12=new Soldiers(1000,100);
    s13=new Soldiers(8500,0);
    s14=new Soldiers(9500,0);

    a1=new Animal(2200,0);
    a2=new Animal(2900,0);
    a3=new Animal(3300,0);
    a4=new Animal(3700,0);
    a5=new Animal(4100,0);
    a6=new Animal(5150,0);
    a7=new Animal(5650,0);
    a8=new Animal(6150,0);
    a9=new Animal(6650,0);
    a10=new Animal(7150,0);
    a11=new Animal(8000,0);
    a12=new Animal(9000,0);
    a13=new Animal(10000,0);
}

function draw() {
    background(255);
    image(bg,-1200,0,1200,600);
    image(bg1,0,0,1200,600);
    image(bg,1200,0,1200,600);
    image(bg1,2400,0,1200,600);
    image(bg,3600,0,1200,600);
    image(bg1,4800,0,1200,600);
    image(bg,6000,0,1200,600);
    image(bg1,7200,0,1200,600);
    image(bg,8400,0,1200,600);
    image(bg1,9600,0,1200,600);
    image(bg,10800,0,1200,600);

    if(soldiersLeft>0){
    if(life>0){
    Engine.update(engine);

    

    camera.zooom=0.01;    

    //ball.explosion=false;

    push();
    textSize(30);
    fill("black");
    textFont("Book Antiqua")
    text("Lives : "+life,tank.body.position.x-600,50);
    text("Score : "+score,tank.body.position.x-600,100);
    pop();

    if(frameCount<1500){
        image(inst,tank.body.position.x-300,0)
    }

    if(lives<0){
        life-=1;
        lives=1;
    }

    dis=dis+move;

    console.log(getFrameRate())

    ball.display();
    shoot.display();
    tank.display();

    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    b8.display();
    b9.display();
    b10.display();
    b11.display();
    b12.display();
    b13.display();
    b14.display();
    b15.display();
    b16.display();
    b17.display();
    b18.display();
    b19.display();
    b20.display();
    b21.display();
    b22.display();

    s1.display();
    s2.display();
    s3.display();
    s4.display();
    s5.display();
    s6.display();
    s7.display();
    s8.display();
    s9.display();
    s10.display();
    s11.display();
    s12.display();
    s13.display();
    s14.display();

    a1.display();
    a2.display();
    a3.display();
    a4.display();
    a5.display();
    a6.display();
    a7.display();
    a8.display();
    a9.display();
    a10.display();
    a11.display();
    a12.display();
    a13.display();

    Matter.Body.setVelocity(tank.body,{x:dis,y:0});
    shoot.body.pointB={x:tank.body.position.x,y:tank.body.position.y-250};
    //shoot.body.pointB={x:-1000,y:-250};        

    }else{
        textSize(220);
        fill('red')
        textFont("Chiller")
        text("YOU LOST",300,300);
        textSize(100);
        text("Your Score : "+score,500,500);
    }
}else{
    textSize(220);
    fill('red')
    textFont("Gill Sans")
    text("YOU WON",100,300);
    textSize(100);
    text("Your Score : "+score,300,500);
}

}

function keyPressed(){
    if(keyCode===RIGHT_ARROW){
        move=0.1;
        if(tank.image!=="tanker.png"){
        tank.image=loadImage("tanker1.png");
        }
    }
    if(keyCode===LEFT_ARROW){
        move=-0.1;
        tank.image=loadImage("tanker.png");
    }
    if(shoot.body.bodyA===null){
        if(keyCode===32){
            shoot.attach(ball.body);
        }
        if(keyCode===13){
            shoot.attach(ball.body);
        }
    }
}

function keyReleased() {
    // Call the shoot method for the cannon.
    dis=0;
    move=0;
}
function mouseDragged(){
    posX=mouseX+tank.body.position.x-(width/2);
    Matter.Body.setPosition(ball.body,{x:posX,y:mouseY});
}
function mouseReleased(){
    shoot.shoot();
}
