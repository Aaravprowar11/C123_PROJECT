nose_x=0;
nose_y=0;

function preload() {



}

function setup() {

    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('poseNet Is Initialized');
}

function gotPoses(results) {

    if(results.length > 0)

    {
console.log(results);
nose_x = results[0].pose.nose.x;
nose_y = results[0].pose.nose.y;
console.log("nose x = " + nose_x)
console.log("nose y = " + nose_y)

    }

}

function draw() {
    
    image(video, 0, 0, 300, 300);
    fill(255,0,0)
    stroke(255,0,0)
    circle(nose_x, nose_y,20, 20);
}

function take_snapshot() {

    save('myFilterImage.png');
}