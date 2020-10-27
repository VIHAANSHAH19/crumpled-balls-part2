class Paper{
    constructor() {
    var options={
        'isStatic':false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
    }
    this.image = loadImage("paper.png");
this.body = Bodies.rectangle(100, 200,40, 40, options);
this.width =50;
this.height = 50;
World.add(world,this.body);
}
display(){
var pos =this.body.position;
//var angle = this.body.angle;
push();
imageMode(CENTER);
angleMode(RADIANS)
translate(pos.x,pos.y)
rotate(this.body.angle)

fill(234,50,0);
image(this.image,0,0, this.width, this.height);
pop();
}
};