class ShootBall{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length: 10
        }
        this.body=Constraint.create(options);
        World.add(world,this.body);
    }

    attach(body){
        this.body.bodyA=body;
        Matter.Body.setPosition(ball.body,{x:tank.body.position.x,y:tank.body.position.y-250})
    }

    shoot(){
        this.body.bodyA=null;
    }

    display(){
        if(this.body.bodyA!==null){
            line(this.body.bodyA.position.x,this.body.bodyA.position.y,this.body.pointB.x,this.body.pointB.y);
        }
        
    }

}
