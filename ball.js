class Ball {
    constructor(x){
        var ball_options={
 }
        this.body = Bodies.circle(x , 250 , 20 , ball_options);
           World.add(world,this.body)      
    }

    display(){
        ellipseMode(RADIUS)
        var pos = this.body.position;
        fill ("yellow")
       ellipse(pos.x,pos.y,20,0);
    }


}