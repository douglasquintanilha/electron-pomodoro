const moment = require('moment');
require('moment-duration-format');

let clock = $(".clock");
let startButton = $("#start-button");
let stopButton = $("#stop-button");
let resetButton = $("#reset-button");
let sound = new Audio("sounds/drum1.mp3");
let countdown = null;
let stopAlarm = null;

let duration = moment.duration(clock.text());

function startTimer(clockId, duration){
    clearInterval(countdown);
    countdown = setInterval(()=>{
        duration.subtract(1, "s");
        clockId.text(duration.format("hh:mm:ss",  { trim: false }));
        if(duration.asSeconds() <= 0){
            clearInterval(countdown);
            new Notification("Pomodoro is over");
            setTimeout(()=>{
                stopAlarm == true;
            },5000);
            sound.play();
            sound.addEventListener("ended",loopAudio );
        }
    },1000);
    return countdown;
}

function loopAudio(){
        this.currentTime = 0;
        this.play();
}

function stopTime(timerId){
    clearInterval(countdown);
}

function formatDuration(duration){
    return duration.hours()+ ":" + duration.minutes() + ":"+ duration.seconds();
}

stopButton.click(()=>{
    clearInterval(countdown);
});

startButton.click(()=>{
    startTimer(clock,duration);
});

resetButton.click(()=>{
    clock.text("00:00:03");
    duration = moment.duration("00:00:03");
    sound.removeEventListener("ended", loopAudio);
});
