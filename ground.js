class Ground {
    constructor(x,y,width,height,angle) {
        this.x = x;
        this.y = y;
        this.width = width; 
        this.height = height;
        this.angle = angle;

        var options = {
            isStatic : true
        }

        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        World.add(world,this.body);
    }

    display() {
        push();
        // translate(this.x,this.y);
        // rotate(this.angle);

        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
        pop();
    }
}