class Paper
{
 constructor(x,y,r)
 {
    var options={
        isStactic:false,
        restitution:0.3,
        friction:0,
        density:0.45
    
    }
 
this.x=x
this.y=y
this.r=r
this.image=loadImage("paper.png")
this.body=Bodies.circle(this.x,this.y,(this.r-20)/2, options);
World.add(world,this.body);
}
display()
{
    
    var pos = this.body.position;
    var angle = this.body.angle;
    fill("white");
    push()
    translate(pos.x,pos.y);
    imageMode(CENTER);
    image(this.image,0,0,this.r,this.r);
    pop();
}
 }







