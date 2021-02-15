class Monster {
    constructor(x, y){
      var options = {
        restitution:1,
        friction:0.5,
        density:0.3,
        isStatic:true
      }
      this.body = Bodies.circle(x,y,100,options);
      this.radius = 100
      this.image = loadImage("monster.png");
       this.visibility = 255
      World.add(world,this.body)
    }
  fly() {
    Matter.Body.setStatic(this.body,false)
  }
   display(){

    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0,this.radius,this.radius);
    pop();

    
     
   }
  
  };
