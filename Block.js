class Block{
    //determining what values are entered by user
    constructor(x,y){

        //additional properties of object
        var options = {
            friction : 0.5,
            restitution : 0.8,
            density : 0.04,
        }

        //setting width and height to 60
        this.width = 60;
        this.height = 60;

        //making object a rectangle
        this.body = Bodies.rectangle(x,y,this.width,this.height,options);

        //adding the object in world
        World.add(world,this.body);
    }
    display(){
        //making variable for the position of body for later use
        var pos = this.body.position;

        //making variable for angle of body for later use
        var angle = this.body.angle;

        //using push & pop so these conditions are only applied on this object
        push();

        //making the position of block the origin
        translate(pos.x,pos.y);

        //rotating the object with the angle of body
        rotate(angle);

        //displaying object as a rectangle
        fill("white");
        stroke("green");
        strokeWeight(5);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        
        pop();
    }
}