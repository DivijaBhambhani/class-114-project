function preload(){

}

function setup (){
    canvas=createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    posenet=ml5.poseNet(video, modelLoaded);
    posenet.on('pose',gotposes);
}

function draw(){
    image(video, 0, 0, 300, 300);
}

function modelLoaded(){
    console.log('posenet is initialized')
}
function gotposes(){
    if(results.length > 0){
        console.log (results);
        upper lip
    }
    }