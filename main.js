song1= "";
song2= "";

function preload(){
song1= loadSound("undertale.mp3");
song2= loadSound("chipmunks.mp3");
}

function setup(){
canvas=createCanvas(500,350);
canvas.center();
video=createCapture(VIDEO);
video.hide();
}

function draw(){
image(video,0,0,500,350);
}