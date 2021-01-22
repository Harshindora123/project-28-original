class Stone{
    constructor(x, y,radius) {
        var options = {
            'isStatic':false,
            'restitution':0,
            'friction':1,
            'density':1.2
        }

        this.x=x;
        this.y=y;
        this.radius=radius;
        this.image  = loadImage("stone.png");
        this.body = Bodies.circle(this.x,this.y,this.radius/2, options);
         World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        push();
        fill(0);
        translate(pos.x,pos.y);
     
        imageMode(CENTER);
        
         image(this.image, 0, 0, this.radius*2, this.radius*2);
        pop();
      }
}