var db, dog, di1,di2
var feedRead, feed

function preload() 
{
di1 = loadImage("images/dogImg.png")
di2 = loadImage("images/dogImg1.png")

}
function setup() {
db = firebase.database()
createCanvas(500,500)

dog = createSprite(200,200,10,10)
dog.addImage(di1)
dog.scale = 0.5



}
function draw() {
background("white")
if(keyIsDown(UP_ARROW)){
write(feed)
dog.addImage(di2)
}
drawSprites()
 db.ref("Food").on("value",read)
text("remaining food: "+ feed, 300,50)
text("press space to serve phoebe with milk from stock", 100, 20)


}

function read(data) {
feed= data.val();
}
function write(x) {
if(x<=0){
x= 0
}
else{
  x=x-1
}
db.ref("/").update({
  Food:x
})
}