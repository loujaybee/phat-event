jest.spyOn(global.console, 'log')

const logEvent = require('./logEvent');

describe('push', () => {
    beforeEach(() => {
        logEvent.reset();
    });
    test('Push method returns singleton object back', () => {
        expect(logEvent.push('key', 'value')).toBe(logEvent);
    });
    test('Push method can be chained', () => {
        logEvent.push('key1', 'value').push('key2', 'value');

        logEvent.emit();

        expect(global.console.log).toHaveBeenCalledWith(JSON.stringify({
            key1: 'value',
            key2: 'value',
        }));
    });
    test('Two level, dot separated key is added to object', () => {
        logEvent.push('toplevel.secondLevel', 'value');
        logEvent.emit();

        expect(global.console.log).toHaveBeenCalledWith(JSON.stringify({
            toplevel: {
                secondLevel: 'value',
            },
        }));
    });
});

describe('.reset', () => {
    test('Reset wipes object', () => {
        logEvent.push('key1', 'value').push('key2', 'value');

        logEvent.reset();
        logEvent.emit();

        expect(global.console.log).toHaveBeenCalledWith(JSON.stringify({}));
    });
});
