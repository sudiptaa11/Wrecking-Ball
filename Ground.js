class Ground{
    //determining what values are entered by user
    constructor(x,y){

        //additional properties of object
        var options = {
            isStatic : true
        }

        //setting width to 900 and height to 10
        this.width = 900;
        this.height = 10;

        //making object a rectangle
        this.body = Bodies.rectangle(x,y,this.width,this.height,options);

        //adding the object in world
        World.add(world,this.body);
    }
    display(){
        //making variable for the position of body for later use
        var pos = this.body.position;
        
        //displaying the object by creating an rectangle
        fill("brown");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }

}