function preload(){

}
function setup(){
    canvas=createCanvas(640,480)
    canvas.position(500,200)
    video=createCapture(VIDEO)
    video.hide()
}
function draw(){
    image(video,150,150,0,300,380)
    fill ("green")
    circle(50,50,50)
    circle(100,50,50)
    circle(150,50,50)
    circle(200,50,50)
    circle(250,50,50)
    circle(300,50,50)
    circle(350,50,50)
    circle(400,50,50)
    circle(450,50,50)
    circle(500,50,50)
    circle(550,50,50)
    circle(600,50,50)
}


