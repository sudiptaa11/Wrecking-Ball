class SlingShot{
    constructor(b1,p2){

        //determining what values from the constructor is bodyA and bodyB and adding additional properties
        var options = {
            bodyA : b1,
            pointB : p2,
            stiffness : 1.2,
            length : 250
        }

        //creating a constraint between the objects
        this.sling = Constraint.create(options);

        //making thd point a property for later use
        this.pointB = p2;

        //adding the constraint between two objects to world
        World.add(world,this.sling);
    }

    //creating rope
    display(){
        //making variable for the position of body and point for later use
        var pos1 = this.sling.bodyA.position;
        var pos2 = this.pointB;

        //using push & pop so these properties are only applied on this line
        push();

        strokeWeight(8);
        //making line from the centre of bodyA to pointB
        line(pos1.x,pos1.y,pos2.x,pos2.y);
        
        pop();
    }
}