const lis = require('./longest_increasing_subsequence');

test('returns 6 for array = [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15]', () => {
	expect(lis([0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15], 6)).toBe(
		6
	);
});
