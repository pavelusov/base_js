class ProfilingTime {
    constructor() {
        this._start;
        this._stop;
    }
    static result() {
        const MS = 1000;
        const result = this._stop - this._start;
        const ms = result % MS;
        const seconds = (result - ms) / MS;

        const templateWithSecond = `Result: ${seconds} sec : ${ms} ms`;
        const templateNoSecond = `Result: ${ms} ms`;

        let message = (seconds === 0) ? templateNoSecond : templateWithSecond;
        console.log(message);
    }

    static start() {
        const start = new Date();
        this._start = +start;
        console.log(`${start.toLocaleTimeString()}:${start.getMilliseconds()}`);
    }
    static stop() {
        const stop = new Date();
        this._stop = +stop;
        console.log(`${stop.toLocaleTimeString()}:${stop.getMilliseconds()}`);
        this.result();
    }

}

ProfilingTime.start();

process(40000000);

ProfilingTime.stop();


function process(len) {
    const length = len;
    const array = new Array(length);
    let i = 0;
    for (; i < length; i++) {
        array[i] = i + i - i / 2;
    }
}
