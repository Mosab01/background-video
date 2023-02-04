const start_btn = document.getElementById("left");
const pause_btn = document.getElementById("right");
const slide = document.getElementById("slide");
const video = document.getElementById("vid");

start_btn.onclick = function(){start_vid()};
pause_btn.onclick = function(){pause_vid()};

function start_vid(){
    slide.style.left = "-2%";
    video.play();
    console.log("Start");
}

function pause_vid(){
    slide.style.left = "50%";
    video.pause();
    console.log("pause");
}

