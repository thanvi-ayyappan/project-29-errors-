class box {
 constructor(x,y,width,height){
     var opt={
         restitution:1.0,
         friction:1
     }
     this.body=Bodies.rectangle(x,y,width,height,opt);
    this.width=width;
    this.height=height;
    World.add(world,this.body);
   }
}