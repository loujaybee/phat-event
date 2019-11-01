let event;
let logger;

class LogEvent {
    constructor() {
        this.__reset();
    }

    configure({ log }) {

        // TODO RENAME LOG
        logger = log;
    }

    emit() {
        logger(event);
        return this;
    }

    __reset() {
        event = {};
    }

    addKey(prop, value) {
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
