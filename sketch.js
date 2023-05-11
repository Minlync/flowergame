let PopSound;
var ship;
var flowers = [];
var drops = [];
var Grasses;
let clouds=[];

function preload(){
  PopSound=loadSound('pop.wav')
 
}

function setup() {
  PopSound=loadSound('pop.wav')
  createCanvas(600, 600);
  Grasses = new Gr();
  
  ship = new Ship();
  // drop = new Drop(width/2,height/2);
  // clouds= new Clouds();
  for (var i =0; i < 6; i++){
  flowers[i] = new Flower(i*80+80,60);
 
    }
  
//   for (var i =0; i < 6; i++){
//   clouds[i] = new Clouds(i*80+80,60);
 
//     }
 
 
}

function draw() {
  background(51);
  ship.show();
  ship.move();
  // clouds.move();
  // clouds.show();
  Grasses.show();
  
  
  fill(255,255,255);  
  textSize(20);
  text('Press Spacebar to Eliminate FLowers', width/2-140,480);
  
  fill(255,255,255);  
  textSize(12);
  text(' press ← → to shift the water pipe', width/2-140,500);
  
for (var i = 0; i < drops.length;i++){
  drops[i].show();
  drops[i].move();
  for (var j = 0; j < flowers.length; j++){
   if(drops[i].hits(flowers[j])){
     flowers[j].reduce();
     // flowers[i].remove();
      drops[i].evaporate();
     // flowers[i].evaporate();
      console.log("HIT");
   }
  
  }
}
//  || is meant or
  var edge = false;
  for (var i = 0; i < flowers.length;i++) {
   flowers[i].show();
   flowers[i].move();
    if (flowers[i].x > width || flowers[i].x < 0){
      edge = true; 
    }
}
  
  if (edge) {
     for (var i = 0; i < flowers.length;i++) {
       flowers[i].shiftDown();
}
  }
  
  for (var i = drops.length-1; i>= 0; i--) {
    if (drops[i].toDelete){
      drops.splice(i,1);
  }
}

}

// == is true 
// ===is not true
function keyReleased(){
  if (key !=' '){
   ship.setDir(0);
}
  }
function keyPressed(){
  
  
  

  if (key === ' '){
    PopSound.play();
     var drop = new Drop(ship.x,height);
     drops.push(drop);
    
  }
  if(keyCode ===RIGHT_ARROW) {
    ship.setDir(1);
    
  }else if (keyCode ===LEFT_ARROW){
    ship.setDir(-1);
  }
}

class Gr{
   constructor(){

   
   
 }
  show(){
   image(img2,0,520,width+20,100);
  
}
}

