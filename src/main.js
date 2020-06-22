class App {
    constructor() {
        this.workTimeMin = 25;
        this.workTimeSec = 0;
        this.isTimerRunning = false;

        this.delay = () => new Promise(resolve => setTimeout(resolve, 996));

        this.startButtonEl = document.getElementById('start-pomodoro');
        this.stopButtonEl = document.getElementById('stop-pomodoro');
        this.spanMinEl = document.getElementById('time-left-min');
        this.spanSecEl = document.getElementById('time-left-sec');

        this.registerHandlers();
        this.render();
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
        this.workTimeMin = 25;
        this.render();
    }

    timeIsUp() {
        return this.workTimeMin === 0 && this.workTimeSec === 0;
    }

    decreaseTime() {
        if (this.workTimeSec > 0) {
            this.workTimeSec--;
            this.renderSeconds();
        }
        else {
            if (this.timeIsUp()) {
                this.isTimerRunning = false;
                return;
            }

            this.workTimeMin--;
            this.workTimeSec = 59;
            this.render();
        }
    }

    async startTimer() {
        this.startButtonEl.style.display = 'none';
        this.stopButtonEl.style.display = 'inline-block';

        this.isTimerRunning = true;

        while (this.isTimerRunning) {
            await this.delay();
            this.decreaseTime();
        }

        if (this.workTimeMin === 0) {
            alert('Time is up!');
            this.resetTimer();
            this.toggleButton();
        }
    }

    stopTimer() {
        this.isTimerRunning = false;
        this.toggleButton();
    }

    renderMinutes() {
        this.spanMinEl.innerHTML = this.workTimeMin;
    }

    renderSeconds() {
        this.spanSecEl.innerHTML = this.workTimeSec.toString().padStart(2, '0');
    }

    render() {
        this.renderMinutes();
        this.renderSeconds();
    }
}

const app = new App();