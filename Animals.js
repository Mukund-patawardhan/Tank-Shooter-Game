class Animal {
    constructor(x,y){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':0.8
        }
        this.body=Bodies.rectangle(x,y,70,130,options);
        this.width=200;
        this.height=150;
        this.image=loadImage("Animal-"+Math.round(random(1,4))+".png");
        this.ang=0;
        this.die=false;
        World.add(world,this.body);
    }

    display(){

        if(this.die===false){
        push();
        var angle = this.body.angle;
        this.ang = this.ang + angle;
        if(this.body.speed<1){
            this.ang=0;
        }
        translate(this.body.position.x, this.body.position.y);
        rotate(this.ang);
        imageMode(CENTER);
        image(this.image, 0, -20, this.width, this.height);
        pop();

        push();
        if(this.body.speed>25){
            score-=1;
                push();
                imageMode(CENTER);
                image(boom,tank.body.position.x,height/2,3200,2600);
                pop();
            World.remove(world, this.body);
            this.die=true;
        }
        pop();
    }
}
}