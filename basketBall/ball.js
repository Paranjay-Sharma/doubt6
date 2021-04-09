class Ball{
constructor(x,y,r){

var options={
    density:10.0,
    //frictionAir:1.0,
    restituion:5.0
}
this.image=loadImage("ball.png");
this.body=Bodies.circle(x,y,r,options);
this.r=r;
World.add(world,this.body);

}
display(){
push();
translate(this.body.position.x,this.body.position.y);
rotate(this.body.angle);

ellipseMode(CENTER);
image(this.image,this.r,this.r);
pop();

}
}