const PhatEvent = require('../index');
const phatEvent = new PhatEvent();
const mockLog = jest.fn();

describe('Public API', () => {
    beforeEach(() => {
        phatEvent.configure({ log: mockLog })
        mockLog.mockReset();
        phatEvent.__reset();
    });

    test('Will sanitise a one level key path', () => {

        phatEvent
            .addKey('test', {
                'username': 'lou',
                'password': "supersecret"
            })
            .sanitise("test.password")
            .emit();

        expect(mockLog).toHaveBeenCalledWith({
            test: {
                username: 'lou',
                password: "XXXXXXXXXX"
            }
        });
    });

    test('Will sanitise a two level key path', () => {

        phatEvent
            .addKey('layerOne.layerTwo', {
                'username': 'lou',
                'password': "supersecret"
            })
            .sanitise("layerOne.layerTwo.password")
            .emit();

        expect(mockLog).toHaveBeenCalledWith({
            layerOne: {
                layerTwo: {
                    username: 'lou',
                    password: "XXXXXXXXXX"
                }
            }
        });
    });

    test.skip('Allows you to supply your own sanitisation string', () => { });
    test.skip('Allows you to santise at any level', () => { });
});
