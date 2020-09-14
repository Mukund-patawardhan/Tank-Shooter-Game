class Tanker {
  constructor(x, y) {
    var options = {
      density:1000,
      inertia:Infinity
    }
      this.x=x;
      this.y=y;
      this.body=Bodies.rectangle(x,y,1,1,options);
      this.image=loadImage("tanker1.png")
      World.add(world,this.body)
    };

    display(){
      push();
      imageMode(CENTER);
      image(this.image,this.body.position.x,this.body.position.y-150,500,250);
      pop();
      camera.x=this.body.position.x;
      Matter.Body.setMass(this.body,100);
    };
}
