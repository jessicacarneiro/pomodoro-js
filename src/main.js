class App {
    constructor() {
        this.workTime = 25;
        this.isTimerRunning = false;

        this.delay = () => new Promise(resolve => setTimeout(resolve, 60*1000));

        this.startButtonEl = document.getElementById('start-pomodoro');
        this.stopButtonEl = document.getElementById('stop-pomodoro');
        this.spanEl = document.getElementById('time-left');

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
        this.workTime = 25;
        this.render();
    }

    decreaseTime() {
        if (this.workTime > 0) {
            this.workTime--;
        }
    }

    async startTimer() {
        console.log('Starting timer!');

        this.startButtonEl.style.display = 'none';
        this.stopButtonEl.style.display = 'inline-block';

        this.isTimerRunning = true;

        while (this.workTime > 0 && this.isTimerRunning) {
            await this.delay();
            this.decreaseTime();
            this.render();
        }

        if (this.workTime === 0) {
            alert('Time is up!');
            this.resetTimer();
            this.toggleButton();
        }
    }

    stopTimer() {
        console.log('Stopping timer!');

        this.isTimerRunning = false;

        this.toggleButton();
    }

    render() {
        this.spanEl.innerHTML = 'Time: ' + this.workTime;
    }
}

const app = new App();