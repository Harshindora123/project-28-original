class Mango{
    constructor(x, y,radius) {
        var options = {
            'isStatic':true,
            'restitution':0,
            'friction':1
            
        }

        this.x=x;
        this.y=y;
        this.radius=radius;

        this.body = Bodies.circle(x, y,radius, options);
        this.image  = loadImage("mango.png");
         World.add(world, this.body);
      }
      display(){
        var position21 =this.body.position;
        push();
        fill("white");
        translate(position21.x,position21.y);
        ellipseMode(RADIUS);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
      }
}