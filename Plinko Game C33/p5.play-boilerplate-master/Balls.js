class Balls {
    constructor(x, y) {
      var options = {
        'isStatic': false, 
        'restitution':0.4,
        'friction':0.8,
        'density':10
      }
      this.body = Bodies.circle(x, y, 15, options);
      this.width = 15;
      this.height = 15;
      this.colour=color(random(40,255),random(0,5),random(0,10))
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS)
      fill(this.colour);
      ellipse(0, 0, this.width,this.height);
      pop();
      if(this.body.position.x<=120&&this.body.position.y>=650){
        bucket1=bucket1+1
      }
      if(this.body.position.x<=240&&this.body.position.y>=650){
        bucket2=bucket2+1
      }
      if(this.body.position.x<=360&&this.body.position.y>=650){
        bucket3=bucket3+1
      }
      if(this.body.position.x<=480&&this.body.position.y>=650){
        bucket4=bucket4+1
      }
      if(this.body.position.x<=600&&this.body.position.y>=650){
        bucket5=bucket5+1
      }
    }
  };