let timerInterval;
let isRunning = false;

function updateSettingsVisibility() {
    const mode = document.getElementById('modeSelector').value;
    document.getElementById('countdownLabel').style.display = (mode === 'countDown') ? 'block' : 'none';
    document.getElementById('pomodoroLabel').style.display = (mode === 'pomodoro') ? 'block' : 'none';
}

function startTimer() {
    if (isRunning) return;
    isRunning = true;

    const mode = document.getElementById('modeSelector').value;
    const timerElement = document.getElementById('timer');
    clearInterval(timerInterval);

    if (mode === 'countUp') {
        let seconds = 0;
        timerInterval = setInterval(() => {
            seconds++;
            timerElement.textContent = formatTime(seconds);
        }, 1000);
    } else if (mode === 'countDown') {
        let seconds = parseInt(document.getElementById('countdownInput').value, 10);
        timerInterval = setInterval(() => {
            if (seconds <= 0) {
                clearInterval(timerInterval);
                isRunning = false;
                alert("Time's up!");
            } else {
                timerElement.textContent = formatTime(seconds);
                seconds--;
            }
        }, 1000);
    } else if (mode === 'pomodoro') {
        const workMinutes = parseInt(document.getElementById('pomodoroWorkInput').value, 10) * 60;
        const breakMinutes = parseInt(document.getElementById('pomodoroBreakInput').value, 10) * 60;
        let isWorkTime = true;
        let seconds = workMinutes;

        timerInterval = setInterval(() => {
            if (seconds <= 0) {
                isWorkTime = !isWorkTime;
                seconds = isWorkTime ? workMinutes : breakMinutes;
                alert(isWorkTime ? "Work time! Let's go!" : "Break time! Relax!");
            }
            timerElement.textContent = formatTime(seconds);
            seconds--;
        }, 1000);
    }
}

startTimer(); // Call the startTimer function to start the timer.

function formatTime(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(num) {
    return num < 10 ? '0' + num : num;
}

window.onload = updateSettingsVisibility;