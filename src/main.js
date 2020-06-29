import { addMinutesToDate as addMinutes, subtractTimeInMs, subtractTime, padIntTwo } from './utils';

class App {
    constructor() {
        this.workTime = 1;
        this.isTimerRunning = false;
        this.totalPomodoros = 0;

        this.delay = () => new Promise(resolve => setTimeout(resolve, 500));

        this.startButtonEl = document.getElementById('start-pomodoro');
        this.stopButtonEl = document.getElementById('stop-pomodoro');
        this.spanMinEl = document.getElementById('time-left-min');
        this.spanSecEl = document.getElementById('time-left-sec');
        this.spanTotalEl = document.getElementById('total-pomodoros');

        this.registerHandlers();
        this.render(this.workTime);
    }

    registerHandlers() {
        this.startButtonEl.onclick = event => this.startTimer();
        this.stopButtonEl.onclick = event => this.stopTimer();
    }

    toggleButton() {
        if (this.startButtonEl.style.display === 'none') {
            this.stopButtonEl.style.display = 'none';
            this.startButtonEl.style.display = 'inline-block';
        }
        else {
            this.startButtonEl.style.display = 'none';
            this.stopButtonEl.style.display = 'inline-block';
        }
    }

    resetTimer() {
        this.isTimerRunning = false;
        this.toggleButton();
        this.render(this.workTime);
    }

    timeIsUp(endTime) {
        return subtractTimeInMs(new Date(), endTime) <= 0;
    }

    decreaseTime(endTime) {
        let [min, sec] = subtractTime(new Date(), endTime);
        this.render(min, sec);
    }

    async startTimer() {
        this.startButtonEl.style.display = 'none';
        this.stopButtonEl.style.display = 'inline-block';

        this.isTimerRunning = true;

        let startTime = new Date();
        let endTime = addMinutes(startTime, this.workTime);

        while (this.isTimerRunning && !this.timeIsUp(endTime)) {
            await this.delay();
            this.decreaseTime(endTime);
        }

        if (this.isTimerRunning) {
            this.totalPomodoros++;
        }

        alert('Time is up!');
        this.resetTimer();
    }

    stopTimer() {
        this.isTimerRunning = false;
    }

    render(minLeft, secLeft = 0) {
        this.spanMinEl.innerHTML = padIntTwo(minLeft);
        this.spanSecEl.innerHTML = padIntTwo(secLeft);
        this.spanTotalEl.innerHTML = this.totalPomodoros;
    }
}

const app = new App();