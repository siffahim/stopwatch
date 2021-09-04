const stopWatchStart = document.getElementById('start-btn');
const stopWatchReset = document.getElementById('reset-btn');
const stopWatchPause = document.getElementById('pause-btn');

const minuteField = document.getElementById('minute');
const secondField = document.getElementById('second');

let min;
let second = 0;
let time = null;
let watchIsRun = false;

const start = () => {
    if (!watchIsRun) {
        watchIsRun = true;
        time =  setInterval(() => {
            second++;
           let {min,secondTwo} = calculate(second);
           secondField.textContent = secondTwo < 10 ? ('0' + secondTwo) : secondTwo;
           minuteField.textContent = min < 10 ? ('0' + min) : min;
    
        },1000)
    }
}

const reset = () => {
    watchIsRun = false;
    clearInterval(time)
    min = 0;
    second = 0;
    minuteField.textContent = '00';
    secondField.textContent = '00';
}

const pause = () => {
    watchIsRun = false;
    clearInterval(time)
}

const calculate = sec => {
    min = parseInt(sec / 60);
    let secondTwo = parseInt(sec % 60);
    
    return {
        min,
        secondTwo
    };
}
stopWatchStart.addEventListener('click', start);
stopWatchReset.addEventListener('click', reset);
stopWatchPause.addEventListener('click', pause);