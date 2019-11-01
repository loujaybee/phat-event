const phatEvent = require("phat-event");

jest.spyOn(global.console, 'log')

phatEvent.configure({ log: console.log })

test("Works", () => {

    phatEvent
        .addKey('key', true)

    phatEvent
        .emit();

    expect(global.console.log).toHaveBeenCalledWith({
        key: true
    });
});
