class Ball{
    //determining what values are entered by user
    constructor(x,y){

        //additional properties of object
        var options = {
            restitution : 10,
            density : 1,
            // frictionAir : 1
        }

        //setting radius to 70
        this.radius = 70;

        //making object a circle
        this.body = Bodies.circle(x,y,this.radius,options);

        //adding the object in world
        World.add(world,this.body);
    }
    display() {
        //making variable for the position of body for later use
        var pos = this.body.position;

        //displaying the object by creating an ellipse
        fill("maroon");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}