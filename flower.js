let Murakami;
// let Cloud;

function preload(){
  Murakami=loadImage('images/flower.png');
   img2 =loadImage('images/grasses.png')
  // Cloud =loadImage('images/cloud.png')
 
}
function Flower(x,y){
  this.x = x;
  this.y = y;
  this.r =30;
  
  this.xdir= 1;

//   when the drop hit the object their size become smaller
  this.reduce = function(){
  this.r = this.r -1;
    }
  this.shiftDown = function(){
    this.xdir *= -1;
    this.y += this.r;
  }
  
  this.evaporate = function(){
    this.toDelete = true;}
  
  this.move = function(){
    this.x = this.x + this.xdir;
    this.y = this.y + random(-2,2);

  }
  
  this.show = function(){
    noStroke();
    fill(255,0,200,150);
    image(Murakami,this.x+random(0,100),this.y, this.r*3,this.r*3)
    
    // image(Cloud,random(-10,width),this.y+random(0,height),80,50);
   
  }
  
}

