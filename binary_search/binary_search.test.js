const binarySearch = require('./binary_search');

test('returns index = 1 for array = [1,2,3,4,5] and target = 2', () => {
	expect(binarySearch([1, 2, 3, 4, 5], 2)).toBe(1);
});

test('returns index = -1 for array = [1,2,3,4,5] and target = 6', () => {
	expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
});
