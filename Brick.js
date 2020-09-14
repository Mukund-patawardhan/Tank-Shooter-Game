class Brick{
    constructor(x,y,w,h){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':0.8
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        this.width=w;
        this.height=h;
        this.image=loadImage("brick.png");
        this.ang=0;
        this.broken=false;
        World.add(world,this.body);
    }

    display(){
        if(this.broken===false){
        push();
        var angle = this.body.angle;
        if(this.body.speed>1){
            this.ang = this.ang + angle;
        }
        translate(this.body.position.x, this.body.position.y);
        rotate(this.ang);
        imageMode(CENTER);
        rectMode(CENTER);
        fill("#D3846C")
        image( this.image, 0, 0, this.width, this.height);
        pop();

        if(dist(this.body.position.x,this.body.position.y,tank.body.position.x,tank.body.position.y)<(250+(this.width/2))){
            Matter.Body.setPosition(tank.body,{x:tank.body.position.x-10,y:tank.body.position.y});
        }
        if(dist(this.body.position.x,this.body.position.y,ball.body.position.x,ball.body.position.y)<250){
            Matter.Body.setPosition(ball.body,{x:ball.body.position.x-10,y:ball.body.position.y});
        }

        if(ball.speed>20){}
            if(this.body.speed>20){
                push();
                push();
                imageMode(CENTER);
                image(boom,tank.body.position.x,height/2,3200,2600);
                pop();
                World.remove(world, this.body);
                this.broken=true;
                pop();
        }
    }
}
}