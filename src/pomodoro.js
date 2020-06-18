class Pomodoro {
    constructor() {
        this.workTime = 25;
        this.shortBreakTime = 5;

        this.delay = () => new Promise(resolve => setTimeout(resolve, 60*1000));
    }

    decreaseWorkTime() {
        if (this.workTime > 0) {
            this.workTime--;
        }
    }

    async startTimer(timeLeftEl) {
        while (this.workTime > 0) {
            await this.delay();
            this.decreaseWorkTime();
        }

        alert('Time is up!');
    }
    
    render(timeLeftEl) {
        timeLeftEl.innerHtml = this.workTime;
    }
}

export default Pomodoro;