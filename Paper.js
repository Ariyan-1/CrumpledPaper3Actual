class Paper {
  constructor(x, y,radius) {
    var options = {
        restitution:0.1,
        friction:0.1,
        density:0.1
    }
    this.body = Bodies.circle(x, y,100,options);
    this.radius = 100;
    World.add(world,this.body);
    this.image = loadImage("sprites/paper.png")
  }

  display(){
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    imageMode(CENTER)
    image(this.image,10,10,this.radius);
    strokeWeight(3);
    stroke("pink");
    fill("pink");
    pop();
    
  }
};