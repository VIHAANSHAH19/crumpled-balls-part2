class Dustbin {
    constructor(x, y, height,angle) {
      var options = {
      isStatic:true
      }
      this.body = Bodies.rectangle(x, y,20, height, options);
      this.width =20;
      this.height = height;
      Matter.Body.setAngle(this.body,angle)
      World.add(world,this.body);
      this.dimage=loadImage("dustbingreen.png");
    }
    display(){
      var pos =this.body.position;
     //var angle = this.body.angle;
      push();
      rectMode(CENTER);
      angleMode(RADIANS)
      translate(pos.x,pos.y)
      rotate(this.body.angle)
      
      fill(234,50,0);
      rect(0,0, this.width, this.height);
      imageMode(CENTER);
      image(this.dimage,400,400,50,100)
      pop();
    }
  };
  