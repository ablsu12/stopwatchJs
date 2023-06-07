let [milliSeconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timer = document.getElementById('timer-count');
let initialValue = null;
let startBtn = document.getElementById('start-btn');
let stopBtn = document.getElementById('stop-btn');
let resetBtn = document.getElementById('reset-btn');
let startClick = () => {
    if (initialValue !== null) {
        clearInterval(initialValue)
    }
     initialValue = setInterval(stopWatcher, 10)
}
startBtn.addEventListener('click', startClick)
let stopWatcher = () => {
    milliSeconds += 10;
    seconds = milliSeconds === 1000 ? (seconds + 1) % 60 : seconds;
    minutes = seconds === 0 && milliSeconds === 1000 ? (minutes + 1) % 60 : minutes;
    hours = minutes === 0 && seconds === 0 && milliSeconds === 1000 ? (hours + 1) : hours;
    milliSeconds = milliSeconds === 1000 ? 0 : milliSeconds;
    let h = hours.toString().padStart(2, '0');
    let m = minutes.toString().padStart(2, '0');
    let s = seconds.toString().padStart(2, '0');
    let ms = milliSeconds.toString().padStart(3, '0');
    timer.innerText = `${h}:${m}:${s}:${ms}`
}
let stopClick = () => {clearInterval(initialValue)}
stopBtn.addEventListener('click', stopClick)
let resetClick = () => {
    clearInterval(initialValue);
    [milliSeconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timer.innerText = '00:00:00:000'
}
resetBtn.addEventListener('click', resetClick)