class Ball {
  constructor(x,y,radius) {
    var options ={
        frictionAir: 0,
        friction: 0,
        frictionStatic: 1,
        inertia: Infinity,
        restitution: 1.0,
        density:2
    }
    this.body=Bodies.rectangle(x,y,radius,radius,options);
    this.r=radius;
    this.img=loadImage("canonBall.png");
    this.explosion=false;
    World.add(world,this.body);
  }

  display() {
    push();
    var pos=this.body.position;
    imageMode(CENTER);
    image(this.img,pos.x,pos.y,this.r,this.r);
    pop();
  }
}
