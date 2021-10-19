let time = 60;
let displayMinutes = Math.floor(time/60);
let displaySeconds = time % 60;
let interval = null
let status = "stopped"

function startStop(){
if (status === "stopped") {
    interval = window.setInterval(timer, 1000);
    document.getElementById("startStop").innerHTML = "Stop"
    status = "started";}

    else{
        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        status = "stopped";
    }
}


function timer(){
    time--;
    let displayMinutes = Math.floor(time/60);
    let displaySeconds = time % 60;
    displaySeconds < 10 ? displaySeconds = "0" + displaySeconds : displaySeconds
    document.getElementById("timer").innerHTML = `${displayMinutes}: ${displaySeconds}`; 
    if (time == 0) {
        clearInterval(interval);
    }
} 

function reset(){
    clearInterval(interval);
    time = 60;
    displaySeconds < 10 ? displaySeconds = "0" + displaySeconds : displaySeconds
    document.getElementById("timer").innerHTML = `${displayMinutes}: ${displaySeconds}`; 
}


