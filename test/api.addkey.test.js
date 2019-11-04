
const PhatEvent = require('../index');
const phatEvent = new PhatEvent();
const mockLog = jest.fn();

describe('Public API', () => {
    beforeEach(() => {
        phatEvent.configure({ log: mockLog })
        mockLog.mockReset();
        phatEvent.__reset();
    });

    test('Can take one key', () => {
        phatEvent
            .addKey('key1', 'value');

        phatEvent.emit();

        expect(mockLog).toHaveBeenCalledWith({
            key1: 'value'
        });
    });

    test('Can take two keys', () => {

        phatEvent
            .addKey('key1', 'value')
            .addKey('key2', 'value');

        phatEvent.emit();

        expect(mockLog).toHaveBeenCalledWith({
            key1: 'value',
            key2: 'value',
        });
    });
});
