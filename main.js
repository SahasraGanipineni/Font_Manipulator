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
    }
} 