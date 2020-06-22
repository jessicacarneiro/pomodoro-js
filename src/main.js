class App {
    constructor() {
        this.workTime = 25;

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

        while (this.workTime > 0) {
            await this.delay();
            this.decreaseTime();
            this.render();
        }

        alert('Time is up!');
        this.resetTimer();
    }

    stopTimer() {
        console.log('Stop timer!');

        this.stopButtonEl.style.display = 'none';
        this.startButtonEl.style.display = 'inline-block';
    }

    render() {
        this.spanEl.innerHTML = this.workTime;
    }
}

const app = new App();