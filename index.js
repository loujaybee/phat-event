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
        const [first, second, third, fourth] = path.split('.');

        if (first && second && third && fourth) {
            event[first][second][third][fourth] = sanitiseString;
        } else if (first && second && third) {
            event[first][second][third] = sanitiseString;
        } else if (first && second) {
            event[first][second] = sanitiseString;
        } else {
            event[first] = sanitiseString;
        }

        return this;
    }

    emit() {
        logger(event);
        return this;
    }

    __reset() {
        event = {};
    }
}

module.exports = LogEvent
