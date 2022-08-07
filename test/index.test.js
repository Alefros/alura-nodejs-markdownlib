const getFile = require('../index');

test('Must be a function', () => {
    expect(typeof getFile).toBe('function');
});