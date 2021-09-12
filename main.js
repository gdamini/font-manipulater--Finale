noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550, 500);

    canvas=createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results){
    if(results.length>0){
      
      leftWristX=results[0].pose.leftWrist.x;
      rightWristX=results[0].pose.rightWrist.x;
      difference=leftWristX-rightWristX;

      console.log("leftWristX="+ leftWristX+"rightWristX="+rightWristX+"difference="+difference);
    }
}

function modelLoaded(){
    console.log('PoseNet is initialized!');
}

function draw(){
    background('#969A97');
    fill('#F90093');
    textSize(difference);
    stroke('#F90093');
    text(Rose, 50, 200);
}    