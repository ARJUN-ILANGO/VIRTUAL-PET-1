//Create variables here
var dog,happyDog,database,foodS,foodStock,dogImg,happyDogImg;
var readStock;

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png")
  happyDogImg = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  
  dog = createSprite(250,250,30,30);
  dog.addImage(dogImg);
  dog.scale = 0.2;

  database = firebase.database();

  foodStock = database.ref("food")
  foodStock.on("value",readStock)
  
}


function draw() {  
   background(46,139,87)
  
 
 if(keyDown("UP_ARROW")){
  
  dog.addImage(happyDogImg)
  writeStock(foodS);

 }
 
   drawSprites();

  //add styles here

  textSize(30)
  text("Press up arrow to feed the dog",10,50)


}

function readStock(data){
  foodS = data.val()
}

function writeStock(x){

  if(x<=0){
    x=0
  }

  else{
     x=x-1;

}

  database.ref("/").update({
  food : x
  })
  
}



