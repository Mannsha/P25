
class Paper
{
    constructor(x,y,radius)
    {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2

        }
        this.image = loadImage("paper.png")
        this.body = Bodies.circle(x,y,radius,options);
        this.x=x
        this.y=y
        this.radius=radius
        World.add(world,this.body)
        
    }
    display()
    {
        ellipseMode(RADIUS)
        ellipse(this.body.position.x, this.body.position.y, this.radius,this.radius)
        push()
        translate(this.body.position.x,this.body.position.y)
        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height)
        pop()

    }

}



