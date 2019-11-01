let event;
let logger;
let sanitiseString = "XXXXXXXXXX";

class LogEvent {
    constructor() {
        this.__reset();
    }

    configure({ log }) {

        // TODO RENAME LOG
        logger = log;
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

    sanitise(path) {
        const [first, second] = path.split('.');
        event[first][second] = sanitiseString;
    }

    emit() {
        logger(event);
        return this;
    }

    __reset() {
        event = {};
    }
}

module.exports = new LogEvent();
