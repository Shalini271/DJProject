song1= "";
song2= "";
status1="";
status2="";
leftX=0;
leftY=0;
rightX=0;
rightY=0;
scoreLeft=0;
scoreRight=0;

function preload(){
song1= loadSound("song1.mp3");
song2= loadSound("song2.mp3");
}

function setup(){
canvas=createCanvas(500,350);
canvas.center();
video=createCapture(VIDEO);
video.size(500,350);
video.hide();
posenet=ml5.poseNet(video,modelLoaded);
posenet.on("pose",gotPoses);
}

function modelLoaded(){
    console.log("Model is loaded!")
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftX=results[0].pose.leftWrist.x;
        leftY=results[0].pose.leftWrist.y;
        rightX=results[0].pose.rightWrist.x;
        rightY=results[0].pose.rightWrist.y;
        scoreLeft=results[0].pose.keypoints[9].score;
        scoreRight=results[0].pose.keypoints[10].score;
    }
}

function draw(){
image(video,0,0,500,350);
status1=song1.isPlaying();
status2=song2.isPlaying();
console.log(status1)
if(scoreLeft>0.2){
    fill("blue");
    circle(leftX,leftY,30);
    song2.stop();
    if(status1==false){
        song1.play();
        document.getElementById("songname").innerHTML="Song: Undertale";
    }
}
if(scoreRight>0.2){
    fill("red");
    circle(rightX,rightY,30);
    song1.stop();
    if(status2==false){
        song2.play();
        document.getElementById("songname").innerHTML="Song: The Chipmunks";
    }
}
}

