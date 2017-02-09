let clock = $(".clock");
let startButton = $("#start-button");
let stopButton = $("#stop-button");
let countdown = null;

let timeArray = clock.text()
                    .split(":")
                    .map((item)=>{
                        return parseInt(item);
                    });
let time = {
    hour: timeArray[0],
    minute: timeArray[1],
    second: timeArray[2]
}

let dateTime = new Date();
dateTime.setHours(time.hour);
dateTime.setMinutes(time.minute);
dateTime.setSeconds(time.second);


function startTimer(clockId, dateTime){
    countdown = setInterval(()=>{
        dateTime.setSeconds(dateTime.getSeconds() - 1);
        clockId.text(formatTime(dateTime));
    },1000);
    return countdown;
}

function stopTime(timerId){
    clearInterval(countdown);
}

function formatTime(dateTime){
    return dateTime.getHours()+ ":" + dateTime.getMinutes() + ":"+ dateTime.getSeconds();
}

stopButton.click(()=>{
    clearInterval(countdown);
});

startButton.click(()=>{
    startTimer(clock,dateTime);
});
