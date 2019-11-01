let event;
const logger = require("./logger");

class LogEvent {
    constructor() {
        this.reset();
    }

    emit() {
        logger(event);
        return this;
    }

    reset() {
        event = {};
    }

    push(prop, value) {
        const [first, second] = prop.split('.');

        if (first && second) {
            if (!event[first]) event[first] = {};
            event[first][second] = value;
        } else {
            event[first] = value;
        }

        return this;
    }
}

module.exports = new LogEvent();
