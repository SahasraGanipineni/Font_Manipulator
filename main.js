leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(500 , 500); 
    video.position(400 , 150)

    canvas = createCanvas(500 , 500);
    canvas.position(1000 , 150);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is initialized');
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("Left Wrist X = " + leftWristX , "Right Wrist X = " + rightWristX , "Difference = " + difference);
    }
} 

function draw() {
    document.getElementById('font_size').innerHTML = "Font size is - " + difference + "px";

    textSize(difference);
    fill('white');
    text('Ok' , 0 , 300);
}