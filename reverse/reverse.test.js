const reverse = require('./reverse');

test('returns cba for input = abc', () => {
	expect(reverse('abc').toBe('cba'));
});
