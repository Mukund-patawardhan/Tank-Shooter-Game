class Soldiers {
    constructor(x,y){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':0.8
        }
        this.body=Bodies.rectangle(x,y,150,150,options);
        this.width=200;
        this.height=170;
        this.image=loadImage("Soldier.png");
        this.ang=0;
        this.die=false;
        this.sound=loadSound("Gun Sound.mp3");
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

        if(tank.body.position.x>this.body.position.x){
            this.image=loadImage("Soldier-a.png")
        }

        if(dist(this.body.position.x,this.body.position.y,tank.body.position.x,tank.body.position.y)<500){
            lives-=0.025;
            if(frameCount%80===0){
            this.sound.play();
            }
            if(tank.body.position.x>this.body.position.x){
                this.image=loadImage("Soldier-a.png")
            }else{
                this.image=loadImage("Soldier2.png");
            }
        }else{
            if(tank.body.position.x>this.body.position.x){
                this.image=loadImage("Soldier-a.png");
            }else{
                this.image=loadImage("Soldier.png");
            }
        }

        push();
        if(this.body.speed>25){
            score+=1;
            soldiersLeft-=1;
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