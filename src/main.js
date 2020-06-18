class App {
    constructor() {
        this.workTime = 25;

        this.delay = () => new Promise(resolve => setTimeout(resolve, 60*1000));

        this.buttonEl = document.getElementById('start-pomodoro');
        this.spanEl = document.getElementById('time-left');

        this.registerHandlers();
        this.render();
    }

    registerHandlers() {
        this.buttonEl.onclick = event => this.toggleButton();
    }

    toggleButton() {
        if (this.buttonEl.innerHTML === "Start") {
            this.buttonEl.innerHTML = "Stop";
            this.startTimer();
        }
        else {
            this.buttonEl.innerHTML = "Start";
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

        while (this.workTime > 0) {
            await this.delay();
            this.decreaseTime();
            this.render();
        }

        alert('Time is up!');
        this.resetTimer();
    }

    render() {
        this.spanEl.innerHTML = this.workTime;
    }
}

const app = new App();