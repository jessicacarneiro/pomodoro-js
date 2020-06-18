class App {
    constructor() {
        this.buttonEl = document.getElementById('start-pomodoro');

        this.registerHandlers();
    }

    registerHandlers() {
        this.buttonEl.onclick = event => this.toggleButton();
    }

    toggleButton() {
        if (this.buttonEl.innerHTML === "Start") {
            this.buttonEl.innerHTML = "Stop";
        }
        else {
            this.buttonEl.innerHTML = "Start";
        }
    }
}

new App();