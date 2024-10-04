var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');

var hour = 0;
var minute = 0;
var second = 0;
var count = 0;
var timer = false;
var timerInterval = null;

function starttimer() {
    if (!timer) {
        timer = true;
        stopWatch();
    }
}

function stoptimer() {
    timer = false;
    clearTimeout(timerInterval); // Stop the current timer
}

function resettimer() {
    timer = false;
    clearTimeout(timerInterval); // Stop the current timer
    hour = 0;
    minute = 0;
    second = 0;
    count = 0;
    hours.innerHTML = "00";
    minutes.innerHTML = "00";
    seconds.innerHTML = "00";
}

function stopWatch() {
    if (timer) {
        count++;

        if (count == 100) {
            second++;
            count = 0;
        }
        if (second == 60) {
            minute++;
            second = 0;
        }
        if (minute == 60) {
            hour++;
            minute = 0;
            second = 0;
        }

        let hrString = hour < 10 ? "0" + hour : hour;
        let minString = minute < 10 ? "0" + minute : minute;
        let secString = second < 10 ? "0" + second : second;
        let countString = count < 10 ? "0" + count : count;

        hours.innerHTML = hrString;
        minutes.innerHTML = minString;
        seconds.innerHTML = secString;

        // Schedule the next timer tick
        timerInterval = setTimeout(stopWatch, 10);
    }
}
