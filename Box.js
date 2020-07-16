class Box  {
 
  constructor(x, y, width, height){
    var options = {
      isStatic:true
    }
   this.b1 = Bodies.rectangle(x,y,width,height,options);
   

    this.b2 = Bodies.rectangle(x,y,width,height);
    
    
    
  }
display(){
  
  fill("red");
  rectMode(CENTER)
  rect(this.b2.position.x,this.b2.position.y,30,40);

 
}
}


