const phatEvent = require('../index');
const mockLog = jest.fn();

describe('Public API', () => {
    beforeEach(() => {
        phatEvent.configure({ log: mockLog })
        mockLog.mockReset();
        phatEvent.__reset();
    });

    test('Will sanitise a specified key path', () => {

        phatEvent
            .addKey('test', {
                'username': 'lou',
                'password': "supersecret"
            })
            .sanitise("test.password")

        phatEvent.emit();

        expect(mockLog).toHaveBeenCalledWith({
            test: {
                username: 'lou',
                password: "XXXXXXXXXX"
            }
        });
    });

    test.skip('Allows you to supply your own sanitisation string', () => { });
    test.skip('Allows you to santise at any level', () => { });
});
